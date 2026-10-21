// Site-wide search. Static pages come from the generated index
// (scripts/build-search-index.mjs — built from each page's metadata and copy);
// dynamic routes are indexed straight from the data files that render them.
import staticPages from '@/data/search-index.generated.json'
import shopifyServices from '@/data/shopify-services'
import { aiServices } from '@/data/ai-services'
import { industries } from '@/data/industries'
import { blogPosts } from '@/data/blogPosts'
import { partners } from '@/data/partners'
import { countries, cities } from '@/data/website-dev-cities'
import { jobs, jobTitle, fixTypos } from '@/data/jobs'

export type SearchResult = {
  title: string
  description: string
  href: string
  type: string
}

type SearchDoc = SearchResult & { keywords: string; body: string }

const BODY_LIMIT = 6000
const PROJECT_WEIGHT = 0.4

// Every string value in a data record, so dynamic pages are searchable by their full content.
function collectText(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') {
    if (/[A-Za-z]{2,}/.test(value) && !/^(https?:|\/|#)/.test(value)) out.push(value)
  } else if (Array.isArray(value)) {
    value.forEach(v => collectText(v, out))
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach(v => collectText(v, out))
  }
  return out
}

function stripBrand(title: string): string {
  return title.replace(/\s*\|[^|]*Miracle Websoft\s*$/, '').trim()
}

function typeFor(href: string): string {
  if (href === '/') return 'Home'
  if (href.startsWith('/services')) return 'Service'
  if (href.startsWith('/industries')) return 'Industry guide'
  if (href.startsWith('/blog/')) return 'Blog post'
  if (href.startsWith('/partners')) return 'Partner program'
  if (href.startsWith('/website-development')) return 'Website development'
  if (href.startsWith('/work/')) return 'Project'
  if (href.startsWith('/tools')) return 'Tool'
  return 'Page'
}

function doc(href: string, title: string, description: string, record: unknown, keywords: string[] = []): SearchDoc {
  return {
    href,
    title: stripBrand(title),
    description,
    type: typeFor(href),
    keywords: keywords.join(' ').toLowerCase(),
    body: collectText(record).join(' · ').slice(0, BODY_LIMIT).toLowerCase(),
  }
}

const dynamicDocs: SearchDoc[] = [
  ...shopifyServices.map(s => doc(`/services/shopify/${s.slug}`, s.metaTitle, s.metaDescription, s)),
  ...aiServices.map(s => doc(`/services/ai/${s.slug}`, s.metaTitle, s.metaDescription, s)),
  ...industries.map(i => doc(`/industries/${i.slug}`, i.metaTitle, i.metaDescription, i)),
  ...blogPosts.map(p => doc(`/blog/${p.slug}`, p.title, p.excerpt, p, [p.tag])),
  ...partners.map(p => doc(`/partners/${p.slug}`, p.metaTitle, p.metaDescription, p)),
  ...Object.values(countries).map(c => doc(`/website-development/${c.slug}`, c.metaTitle, c.metaDescription, c)),
  ...cities.map(c => doc(`/website-development/${c.country}/${c.slug}`, c.metaTitle, c.metaDescription, c)),
  ...jobs.map(j => doc(`/work/${j.id}`, jobTitle(j), fixTypos(j.description).slice(0, 220), j, j.tags)),
]

const staticDocs: SearchDoc[] = staticPages.map(p => ({
  href: p.href,
  title: p.title,
  description: p.description,
  type: typeFor(p.href),
  keywords: p.keywords.join(' ').toLowerCase(),
  body: p.body.toLowerCase(),
}))

// Static pages win when a route is both a page file and a data entry.
const seen = new Set<string>()
const DOCS = [...staticDocs, ...dynamicDocs].filter(d => (seen.has(d.href) ? false : (seen.add(d.href), true)))

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'for', 'from', 'get', 'how', 'i', 'in', 'is', 'it',
  'me', 'my', 'need', 'of', 'on', 'or', 'our', 'the', 'to', 'want', 'we', 'what', 'with', 'you', 'your',
])

// Light stemming so "consulting", "consultation" and "consult" all meet at "consult".
function stem(word: string): string {
  for (const suffix of ['ations', 'ation', 'ings', 'ing', 'ies', 'ed', 'es', 's', 'y']) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 3) return word.slice(0, -suffix.length)
  }
  return word
}

function singular(word: string): string {
  if (word.endsWith('ies') && word.length > 4) return word.slice(0, -3) + 'y'
  return word.length > 3 && word.endsWith('s') && !word.endsWith('ss') ? word.slice(0, -1) : word
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

type Ranked = { d: SearchDoc; score: number; matched: number; inSummary: number }

function rank(query: string): { ranked: Ranked[]; termCount: number } {
  const words = [...new Set(query.toLowerCase().split(/[^a-z0-9]+/).filter(w => w && !STOPWORDS.has(w)))]
  const patterns = [...new Set(words.map(stem))].map(t => new RegExp(`\\b${escapeRegExp(t)}`))
  if (!patterns.length) return { ranked: [], termCount: 0 }

  const ranked = DOCS
    .map(d => {
      const title = d.title.toLowerCase()
      const titleWords = new Set(title.split(/[^a-z0-9]+/))
      const description = d.description.toLowerCase()
      // Last URL segment as words, e.g. "/black-friday-sale-setup" → "black friday sale setup".
      const slugWords = (d.href.split('/').pop() ?? '').split('-').filter(Boolean).map(singular)
      let score = 0
      let matched = 0
      let inSummary = 0
      for (const re of patterns) {
        const s = (re.test(title) ? 6 : 0) + (re.test(d.keywords) ? 4 : 0) + (re.test(description) ? 3 : 0) + (re.test(d.body) ? 1 : 0)
        if (s) matched++
        if (re.test(title) || re.test(description) || slugWords.some(sw => re.test(sw))) inSummary++
        score += s
      }
      // Exact title words beat stem-only hits ("consultation" → "Book a Free Consultation", not "AI Consulting").
      score += words.filter(w => titleWords.has(w)).length * 4
      // The query names this page's URL word for word ("services" → /services, "black friday" → /black-friday-sale-setup).
      const queryWords = words.map(singular)
      if (slugWords.length && queryWords.every(w => slugWords.includes(w))) {
        score += 5
        if (slugWords.every(sw => queryWords.includes(sw) || STOPWORDS.has(sw))) score += 5
      }
      // The 250+ individual project pages would otherwise crowd out the main pages.
      if (d.href.startsWith('/work/')) score *= PROJECT_WEIGHT
      return { d, score, matched, inSummary }
    })
    .filter(r => r.score > 0)
    // Pages matching more of the query's words first, then by where they matched.
    .sort((a, b) => b.matched - a.matched || b.score - a.score || a.d.title.localeCompare(b.d.title))

  return { ranked, termCount: patterns.length }
}

export function searchSite(query: string, limit = 24): SearchResult[] {
  return rank(query).ranked
    .slice(0, limit)
    .map(({ d }) => ({ title: d.title, description: d.description, href: d.href, type: d.type }))
}

const DIRECT_MARGIN = 4

// When a query clearly names one page ("pricing", "consultation", "black friday"),
// return that page so the search can go straight there instead of listing results.
// Only main pages are redirect targets (not individual projects or blog posts). Clear =
// every query word is in the page's title, URL or description, and it beats the next
// main page by a margin.
export function directMatch(query: string): string | null {
  const { ranked, termCount } = rank(query)
  const [top, second] = ranked
    .filter(r => r.d.type !== 'Project' && r.d.type !== 'Blog post')
    .sort((a, b) => b.score - a.score)
  if (!top) return null
  if (top.matched < termCount || top.inSummary < termCount) return null
  if (second && top.score - second.score < DIRECT_MARGIN) return null
  return top.d.href
}

const POPULAR_HREFS = [
  '/services/shopify/development', '/services/shopify-app-development', '/services/shopify-migration',
  '/services/shopify-cro-speed', '/pricing', '/work', '/reviews', '/contact',
]

export function popularPages(): SearchResult[] {
  return POPULAR_HREFS
    .map(href => DOCS.find(d => d.href === href))
    .filter((d): d is SearchDoc => Boolean(d))
    .map(d => ({ title: d.title, description: d.description, href: d.href, type: d.type }))
}
