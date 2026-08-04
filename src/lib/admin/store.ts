// Cloudflare KV-backed event store (leads/outbound). Workers have no
// persistent filesystem, so records live in KV keyed as
// `lead:<isoTimestamp>:<id>` / `outbound:<isoTimestamp>:<id>` — the ISO
// timestamp prefix sorts lexicographically, so KV's prefix `list()` returns
// records in chronological order with no separate index to keep in sync.
// Resumes are not stored anywhere — they go out only as an email attachment
// on the careers notification (src/app/api/careers/route.ts).

import { getCloudflareContext } from '@opennextjs/cloudflare'

async function cf() {
  const { env } = await getCloudflareContext({ async: true })
  return env as unknown as CloudflareEnv
}

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

export async function appendLead(record: Omit<LeadRecord, 'id' | 'ts'> & { id?: string }): Promise<LeadRecord> {
  const { id, ...rest } = record
  const full: LeadRecord = { id: id ?? crypto.randomUUID(), ts: new Date().toISOString(), ...rest }
  const { LEADS_KV } = await cf()
  await LEADS_KV.put(`lead:${full.ts}:${full.id}`, JSON.stringify(full))
  return full
}

export async function appendOutbound(record: Omit<OutboundRecord, 'id' | 'ts'>): Promise<OutboundRecord> {
  const full: OutboundRecord = { id: crypto.randomUUID(), ts: new Date().toISOString(), ...record }
  const { LEADS_KV } = await cf()
  await LEADS_KV.put(`outbound:${full.ts}:${full.id}`, JSON.stringify(full))
  return full
}

async function readAllByPrefix<T>(prefix: string): Promise<T[]> {
  const { LEADS_KV } = await cf()
  const out: T[] = []
  let cursor: string | undefined
  for (;;) {
    const page = await LEADS_KV.list({ prefix, cursor, limit: 1000 })
    const values = await Promise.all(page.keys.map(k => LEADS_KV.get(k.name)))
    for (const raw of values) {
      if (!raw) continue
      try { out.push(JSON.parse(raw) as T) } catch { /* skip corrupt record */ }
    }
    if (page.list_complete) break
    cursor = page.cursor
  }
  return out
}

export async function readLeads(): Promise<LeadRecord[]> {
  return readAllByPrefix<LeadRecord>('lead:')
}

export async function readOutbound(): Promise<OutboundRecord[]> {
  return readAllByPrefix<OutboundRecord>('outbound:')
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
