// JSON-file event store. Append-only; one record per line (NDJSON), so a
// concurrent fs.appendFile can't corrupt earlier records the way a single
// JSON-array rewrite could. We read line-by-line on the read side.

import { promises as fs } from 'node:fs'
import path from 'node:path'

// Where leads/outbound/resumes live. Local dev and live production must never
// share a path — local writes would clobber accumulated live data on the next
// deploy or sync. Precedence:
//   1. ADMIN_DATA_DIR env var — explicit absolute path (use for live to put
//      data outside the project dir entirely, e.g. /var/lib/miraclewebsoft/data)
//   2. <cwd>/data/<env>, where env is 'prod' in production and 'dev' otherwise
//      — so the same working tree can run in either mode without collision.
const DEFAULT_DATA_ROOT = path.join(process.cwd(), 'data')
const ENV_BUCKET = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const DATA_DIR = process.env.ADMIN_DATA_DIR
  ? path.resolve(process.env.ADMIN_DATA_DIR)
  : path.join(DEFAULT_DATA_ROOT, ENV_BUCKET)

export type Origin = {
  // First-touch (legacy + current)
  landing_page?: string         // legacy field (still set by API mapSource)
  referrer?: string             // legacy field
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string

  // First-touch (new client-side payload)
  first_landing_page?: string
  first_referrer?: string
  first_utm_source?: string
  first_utm_medium?: string
  first_utm_campaign?: string
  first_utm_term?: string
  first_utm_content?: string
  first_gclid?: string
  first_fbclid?: string

  // Cookie-based attribution
  ga_client_id?: string
  ga_session_id?: string
  google_ads_click_id?: string
  facebook_browser_id?: string
  facebook_click_id?: string

  // Click-time / last-touch context
  click_page?: string
  click_referrer?: string
  page_history?: string[]
}

export type LeadRecord = {
  id: string
  ts: string
  form: 'contact' | 'services' | 'careers' | 'referral' | 'white_label'
  ip?: string
  userAgent?: string
  origin?: Origin
  payload: Record<string, unknown>
}

export type OutboundRecord = {
  id: string
  ts: string
  channel: string
  destination: string
  page?: string
  ip?: string
  userAgent?: string
  origin?: LeadRecord['origin']
}

let migrated = false
async function migrateLegacyOnce() {
  if (migrated) return
  migrated = true
  // Skip migration entirely when an explicit ADMIN_DATA_DIR is set — the
  // operator is in control of where data lives.
  if (process.env.ADMIN_DATA_DIR) return
  // Only migrate when DATA_DIR is the env-scoped folder inside DEFAULT_DATA_ROOT.
  if (path.dirname(DATA_DIR) !== DEFAULT_DATA_ROOT) return

  async function exists(p: string) {
    try { await fs.access(p); return true } catch { return false }
  }

  for (const name of ['leads.ndjson', 'outbound.ndjson']) {
    const legacy = path.join(DEFAULT_DATA_ROOT, name)
    const target = path.join(DATA_DIR, name)
    if (await exists(legacy) && !(await exists(target))) {
      try { await fs.rename(legacy, target) } catch { /* best-effort */ }
    }
  }

  const legacyResumes = path.join(DEFAULT_DATA_ROOT, 'resumes')
  const targetResumes = path.join(DATA_DIR, 'resumes')
  try {
    const legacyFiles = await fs.readdir(legacyResumes)
    const targetFiles = await fs.readdir(targetResumes).catch(() => [] as string[])
    if (legacyFiles.length > 0 && targetFiles.length === 0) {
      for (const f of legacyFiles) {
        try { await fs.rename(path.join(legacyResumes, f), path.join(targetResumes, f)) } catch { /* best-effort */ }
      }
    }
  } catch { /* legacy resumes/ may not exist — fine */ }
}

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.mkdir(path.join(DATA_DIR, 'resumes'), { recursive: true })
  await migrateLegacyOnce()
}

function fileFor(kind: 'leads' | 'outbound'): string {
  return path.join(DATA_DIR, `${kind}.ndjson`)
}

export async function appendLead(record: Omit<LeadRecord, 'id' | 'ts'> & { id?: string }): Promise<LeadRecord> {
  await ensureDir()
  const { id, ...rest } = record
  const full: LeadRecord = { id: id ?? crypto.randomUUID(), ts: new Date().toISOString(), ...rest }
  await fs.appendFile(fileFor('leads'), JSON.stringify(full) + '\n', 'utf8')
  return full
}

export async function appendOutbound(record: Omit<OutboundRecord, 'id' | 'ts'>): Promise<OutboundRecord> {
  await ensureDir()
  const full: OutboundRecord = { id: crypto.randomUUID(), ts: new Date().toISOString(), ...record }
  await fs.appendFile(fileFor('outbound'), JSON.stringify(full) + '\n', 'utf8')
  return full
}

async function readAll<T>(file: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(file, 'utf8')
    return raw
      .split('\n')
      .filter(Boolean)
      .map(line => {
        try { return JSON.parse(line) as T } catch { return null }
      })
      .filter((x): x is T => x !== null)
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw err
  }
}

export async function readLeads(): Promise<LeadRecord[]> {
  return readAll<LeadRecord>(fileFor('leads'))
}

export async function readOutbound(): Promise<OutboundRecord[]> {
  return readAll<OutboundRecord>(fileFor('outbound'))
}

export async function saveResume(filename: string, buf: Buffer, leadId: string): Promise<string> {
  await ensureDir()
  const safe = filename.replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 80)
  const stored = `${leadId}_${safe}`
  await fs.writeFile(path.join(DATA_DIR, 'resumes', stored), buf)
  return stored
}

export function resumePath(stored: string): string {
  return path.join(DATA_DIR, 'resumes', stored)
}

// Helpers for the dashboard.
export function bucketByDay<T extends { ts: string }>(records: T[]): Map<string, T[]> {
  const out = new Map<string, T[]>()
  for (const r of records) {
    const day = r.ts.slice(0, 10) // YYYY-MM-DD
    const arr = out.get(day) ?? []
    arr.push(r)
    out.set(day, arr)
  }
  return out
}

export function topBy<T>(records: T[], pick: (r: T) => string | undefined, limit = 10) {
  const counts = new Map<string, number>()
  for (const r of records) {
    const k = pick(r)
    if (!k) continue
    counts.set(k, (counts.get(k) ?? 0) + 1)
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit)
}
