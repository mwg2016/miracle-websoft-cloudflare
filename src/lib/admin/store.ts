// JSON-file event store. Append-only; one record per line (NDJSON), so a
// concurrent fs.appendFile can't corrupt earlier records the way a single
// JSON-array rewrite could. We read line-by-line on the read side.

import { promises as fs } from 'node:fs'
import path from 'node:path'

const DATA_DIR = path.join(process.cwd(), 'data')

export type LeadRecord = {
  id: string
  ts: string
  form: 'contact' | 'services' | 'careers' | 'referral' | 'white_label'
  ip?: string
  userAgent?: string
  origin?: {
    landing_page?: string
    referrer?: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
    gclid?: string
    fbclid?: string
  }
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

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.mkdir(path.join(DATA_DIR, 'resumes'), { recursive: true })
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
