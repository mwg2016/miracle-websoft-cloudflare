// Builds the site-search index from the pages themselves, so new pages become
// searchable automatically — nothing is hand-listed.
//
// For every static route under src/app (page.tsx without [dynamic] segments) it
// reads the exported `metadata` (title / description / keywords) and the
// visible copy in the page file plus the page-specific components it imports.
// Dynamic routes ([slug] etc.) are indexed at runtime from their data files in
// src/lib/site-search.ts.
//
// Output: src/data/search-index.generated.json (git-ignored, rebuilt by
// `npm run dev` and `npm run build`).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'src')
const APP = path.join(SRC, 'app')
const OUT = path.join(SRC, 'data', 'search-index.generated.json')

const BODY_LIMIT = 6000          // chars of page copy kept per page
const SHARED_IMPORTER_LIMIT = 2  // components imported by more files than this are shared chrome — skipped
const EXCLUDED_PREFIXES = ['/admin', '/api', '/search', '/thank-you']

// JSX attributes / object keys whose string values are never visible copy.
const NON_COPY_KEYS = new Set([
  'className', 'style', 'href', 'src', 'id', 'key', 'type', 'rel', 'target', 'name', 'role',
  'variant', 'size', 'sizes', 'icon', 'as', 'method', 'action', 'loading', 'fill', 'viewBox',
  'd', 'stroke', 'color', 'background', 'badgeColor', 'slug', 'url', 'image', 'path', 'videoId',
  'strategy', 'nonce', 'dangerouslySetInnerHTML', 'aspect', 'canonical',
])

// ─── File helpers ────────────────────────────────────────────────────────────

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) out.push(full)
  }
  return out
}

const sourceCache = new Map()
function parse(file) {
  if (!sourceCache.has(file)) {
    const text = fs.readFileSync(file, 'utf8')
    sourceCache.set(file, ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX))
  }
  return sourceCache.get(file)
}

function resolveImport(fromFile, spec) {
  let base
  if (spec.startsWith('@/')) base = path.join(SRC, spec.slice(2))
  else if (spec.startsWith('.')) base = path.resolve(path.dirname(fromFile), spec)
  else return null
  for (const candidate of [base, `${base}.tsx`, `${base}.ts`, path.join(base, 'index.tsx'), path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate
  }
  return null
}

function importsOf(file) {
  const sf = parse(file)
  const found = []
  for (const stmt of sf.statements) {
    if (ts.isImportDeclaration(stmt) && !stmt.importClause?.isTypeOnly) {
      const resolved = resolveImport(file, stmt.moduleSpecifier.text)
      if (resolved) found.push(resolved)
    }
  }
  return found
}

// ─── Route discovery ─────────────────────────────────────────────────────────

function routeFor(pageFile) {
  const rel = path.relative(APP, path.dirname(pageFile)).split(path.sep).filter(Boolean)
  if (rel.some(seg => seg.startsWith('[') || seg.startsWith('_'))) return null
  const segments = rel.filter(seg => !(seg.startsWith('(') && seg.endsWith(')')))
  return '/' + segments.join('/')
}

function redirectSources() {
  const configFile = path.join(ROOT, 'next.config.ts')
  if (!fs.existsSync(configFile)) return new Set()
  const text = fs.readFileSync(configFile, 'utf8')
  return new Set([...text.matchAll(/source:\s*'([^']+)'/g)].map(m => m[1]))
}

// ─── Metadata extraction ─────────────────────────────────────────────────────

function topLevelConsts(sf) {
  const consts = new Map()
  for (const stmt of sf.statements) {
    if (!ts.isVariableStatement(stmt)) continue
    for (const decl of stmt.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && decl.initializer) consts.set(decl.name.text, decl.initializer)
    }
  }
  return consts
}

function unwrap(node) {
  while (node && (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node))) node = node.expression
  return node
}

function prop(obj, name) {
  if (!obj || !ts.isObjectLiteralExpression(obj)) return undefined
  for (const p of obj.properties) {
    if (ts.isPropertyAssignment(p) && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) && p.name.text === name) return unwrap(p.initializer)
  }
  return undefined
}

function resolveString(node, consts, depth = 0) {
  node = unwrap(node)
  if (!node || depth > 5) return undefined
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  if (ts.isTemplateExpression(node)) {
    let s = node.head.text
    for (const span of node.templateSpans) s += (resolveString(span.expression, consts, depth + 1) ?? '') + span.literal.text
    return s
  }
  if (ts.isIdentifier(node) && consts.has(node.text)) return resolveString(consts.get(node.text), consts, depth + 1)
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const l = resolveString(node.left, consts, depth + 1)
    const r = resolveString(node.right, consts, depth + 1)
    return l !== undefined || r !== undefined ? (l ?? '') + (r ?? '') : undefined
  }
  if (ts.isObjectLiteralExpression(node)) {
    return resolveString(prop(node, 'absolute') ?? prop(node, 'default'), consts, depth + 1)
  }
  return undefined
}

function readMetadata(sf) {
  const consts = topLevelConsts(sf)
  const meta = unwrap(consts.get('metadata'))
  if (!meta || !ts.isObjectLiteralExpression(meta)) return {}
  const keywordsNode = prop(meta, 'keywords')
  const keywords = keywordsNode && ts.isArrayLiteralExpression(keywordsNode)
    ? keywordsNode.elements.map(e => resolveString(e, consts)).filter(Boolean)
    : []
  const robots = prop(meta, 'robots')
  const index = prop(robots, 'index')
  return {
    title: resolveString(prop(meta, 'title'), consts) ?? resolveString(prop(prop(meta, 'openGraph'), 'title'), consts),
    description: resolveString(prop(meta, 'description'), consts) ?? resolveString(prop(prop(meta, 'openGraph'), 'description'), consts),
    keywords,
    noindex: index?.kind === ts.SyntaxKind.FalseKeyword,
  }
}

// ─── Visible copy extraction ─────────────────────────────────────────────────

const TECH_TOKEN = /^[!-]?[a-z0-9]+([:\-/.[\]#%][a-z0-9[\]./#%()-]*)+$/
function looksTechnical(s) {
  if (/^(https?:|mailto:|tel:|\/|#|data:)/.test(s)) return true
  if (/rgba?\(|var\(--|linear-gradient|\d(px|rem|em|vh|vw|ms)\b/.test(s)) return true
  const tokens = s.split(/\s+/)
  return tokens.filter(t => TECH_TOKEN.test(t)).length > tokens.length / 2
}

function nameOf(node) {
  if (ts.isJsxAttribute(node)) return node.name.getText()
  if (ts.isPropertyAssignment(node) && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name))) return node.name.text
  return undefined
}

function inNonCopyContext(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isImportDeclaration(p) || ts.isExportDeclaration(p)) return true
    if (ts.isJsxAttribute(p) || ts.isPropertyAssignment(p)) {
      const n = nameOf(p)
      if (n && NON_COPY_KEYS.has(n)) return true
    }
    if (ts.isBinaryExpression(p) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(p.operatorToken.kind)) return true
    if (ts.isCallExpression(p) && /^(require|fetch|querySelector|getElementById|addEventListener|trackLead|outboundHref)$/.test(p.expression.getText().split('.').pop())) return true
  }
  return false
}

function collectCopy(sf, into) {
  const visit = (node) => {
    if (ts.isJsxText(node)) {
      const text = node.text.replace(/\s+/g, ' ').trim()
      if (/[A-Za-z]{2,}/.test(text)) into.push(text)
    } else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text.replace(/\s+/g, ' ').trim()
      const isKey = node.parent && ts.isPropertyAssignment(node.parent) && node.parent.name === node
      if (!isKey && text.includes(' ') && /[A-Za-z]{3,}/.test(text) && !looksTechnical(text) && !inNonCopyContext(node)) into.push(text)
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
}

// ─── Build ───────────────────────────────────────────────────────────────────

const allFiles = walk(SRC)
const importerCount = new Map()
for (const file of allFiles) {
  for (const dep of new Set(importsOf(file))) importerCount.set(dep, (importerCount.get(dep) ?? 0) + 1)
}

function isPageSpecific(file) {
  if (file.startsWith(path.join(SRC, 'lib'))) return false
  if (path.basename(file).startsWith('search-index.generated')) return false
  return (importerCount.get(file) ?? 0) <= SHARED_IMPORTER_LIMIT
}

function copyForPage(pageFile) {
  const chunks = []
  const seen = new Set()
  const queue = [[pageFile, 0]]
  while (queue.length) {
    const [file, depth] = queue.shift()
    if (seen.has(file)) continue
    seen.add(file)
    collectCopy(parse(file), chunks)
    if (depth < 2) for (const dep of importsOf(file)) if (isPageSpecific(dep)) queue.push([dep, depth + 1])
  }
  const unique = [...new Set(chunks)]
  return unique.join(' · ').slice(0, BODY_LIMIT)
}

function firstH1(sf) {
  let found
  const visit = (node) => {
    if (found) return
    if (ts.isJsxElement(node) && node.openingElement.tagName.getText() === 'h1') {
      found = node.children.filter(ts.isJsxText).map(c => c.text.trim()).join(' ').replace(/\s+/g, ' ').trim() || undefined
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return found
}

const redirects = redirectSources()
const pages = allFiles.filter(f => /[\\/]page\.(tsx|ts|jsx|js)$/.test(f) && f.startsWith(APP))
const index = []

for (const pageFile of pages) {
  const href = routeFor(pageFile)
  if (!href) continue
  if (EXCLUDED_PREFIXES.some(p => href === p || href.startsWith(p + '/'))) continue
  if (redirects.has(href)) continue

  const sf = parse(pageFile)
  const meta = readMetadata(sf)
  if (meta.noindex) continue

  const title = (meta.title ?? firstH1(sf) ?? href).replace(/\s*\|[^|]*Miracle Websoft\s*$/, '').trim()
  index.push({
    href,
    title,
    description: meta.description ?? '',
    keywords: meta.keywords,
    body: copyForPage(pageFile),
  })
}

index.sort((a, b) => a.href.localeCompare(b.href))
fs.writeFileSync(OUT, JSON.stringify(index, null, 1) + '\n')
console.log(`search index: ${index.length} pages → ${path.relative(ROOT, OUT)}`)
