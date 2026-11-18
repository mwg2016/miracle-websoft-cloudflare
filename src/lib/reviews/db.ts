// Review storage — Cloudflare D1 (binding REVIEWS_DB, see wrangler.jsonc).
// Server-only. If the binding is missing (e.g. D1 not created yet) every read
// falls back to an empty list so the public site still renders the Upwork
// reviews instead of crashing.

import { getCloudflareContext } from '@opennextjs/cloudflare'
import type { PublicReview, ReviewRecord, ReviewStatus } from './types'
import { upworkReviews } from './upwork'

// Minimal D1 surface we use — avoids pulling in @cloudflare/workers-types.
type D1Result<T> = { results: T[] }
type D1Stmt = {
  bind(...values: unknown[]): D1Stmt
  all<T = unknown>(): Promise<D1Result<T>>
  first<T = unknown>(): Promise<T | null>
  run(): Promise<unknown>
}
type D1Database = { prepare(sql: string): D1Stmt }

async function getDb(): Promise<D1Database | null> {
  try {
    const { env } = await getCloudflareContext({ async: true })
    return ((env as unknown as Record<string, unknown>).REVIEWS_DB as D1Database | undefined) ?? null
  } catch {
    return null
  }
}

export async function requireDb(): Promise<D1Database> {
  const db = await getDb()
  if (!db) throw new Error('REVIEWS_DB binding not configured')
  return db
}

function toPublic(r: ReviewRecord): PublicReview {
  return {
    slug: r.slug,
    source: 'website',
    rating: r.rating,
    title: r.title,
    body: r.body,
    name: r.name,
    company: r.company ?? undefined,
    country: r.country ?? undefined,
    service: r.service ?? undefined,
    date: r.approved_at ?? r.created_at,
    reply: r.reply ?? undefined,
  }
}

// ─── Public reads ────────────────────────────────────────────────────────────

export async function listApprovedWebsiteReviews(): Promise<PublicReview[]> {
  const db = await getDb()
  if (!db) return []
  try {
    const { results } = await db
      .prepare("SELECT * FROM reviews WHERE status = 'approved' ORDER BY COALESCE(approved_at, created_at) DESC")
      .all<ReviewRecord>()
    return results.map(toPublic)
  } catch (err) {
    console.error('[reviews] list failed', err)
    return []
  }
}

/** Every public review — website (approved) + Upwork — newest first. */
export async function listPublicReviews(): Promise<PublicReview[]> {
  const site = await listApprovedWebsiteReviews()
  return [...site, ...upworkReviews].sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPublicReview(slug: string): Promise<PublicReview | null> {
  if (slug.startsWith('upwork-')) return upworkReviews.find(r => r.slug === slug) ?? null
  const db = await getDb()
  if (!db) return null
  try {
    const row = await db
      .prepare("SELECT * FROM reviews WHERE slug = ? AND status = 'approved'")
      .bind(slug)
      .first<ReviewRecord>()
    return row ? toPublic(row) : null
  } catch (err) {
    console.error('[reviews] get failed', err)
    return null
  }
}

// ─── Writes ──────────────────────────────────────────────────────────────────

export type NewReview = {
  rating: number
  title: string
  body: string
  name: string
  email: string
  company?: string
  website?: string
  country?: string
  service?: string
  ip?: string
  userAgent?: string
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function shortId(): string {
  const bytes = new Uint8Array(6)
  crypto.getRandomValues(bytes)
  return [...bytes].map(b => b.toString(36).padStart(2, '0')).join('').slice(0, 10)
}

export async function insertReview(input: NewReview): Promise<ReviewRecord> {
  const db = await requireDb()
  const id = shortId()
  const base = slugify(input.title) || slugify(input.name) || 'review'
  const slug = `${base}-${id}`
  const now = new Date().toISOString()
  await db
    .prepare(
      `INSERT INTO reviews (id, slug, status, rating, title, body, name, email, company, website, country, service, ip, user_agent, created_at, updated_at)
       VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      id, slug, input.rating, input.title, input.body, input.name, input.email,
      input.company ?? null, input.website ?? null, input.country ?? null, input.service ?? null,
      input.ip ?? null, input.userAgent ?? null, now, now,
    )
    .run()
  return {
    id, slug, status: 'pending', rating: input.rating, title: input.title, body: input.body,
    name: input.name, email: input.email, company: input.company ?? null, website: input.website ?? null,
    country: input.country ?? null, service: input.service ?? null, reply: null, ip: input.ip ?? null,
    user_agent: input.userAgent ?? null, created_at: now, updated_at: now, approved_at: null,
  }
}

/** Submissions from this IP in the last `hours` — DB-backed rate limit. */
export async function recentSubmissionsFromIp(ip: string, hours = 24): Promise<number> {
  const db = await requireDb()
  const since = new Date(Date.now() - hours * 3600_000).toISOString()
  const row = await db
    .prepare('SELECT COUNT(*) AS n FROM reviews WHERE ip = ? AND created_at >= ?')
    .bind(ip, since)
    .first<{ n: number }>()
  return row?.n ?? 0
}

// ─── Admin ───────────────────────────────────────────────────────────────────

export async function adminListReviews(status?: ReviewStatus): Promise<ReviewRecord[]> {
  const db = await getDb()
  if (!db) return []
  const stmt = status
    ? db.prepare('SELECT * FROM reviews WHERE status = ? ORDER BY created_at DESC').bind(status)
    : db.prepare('SELECT * FROM reviews ORDER BY created_at DESC')
  const { results } = await stmt.all<ReviewRecord>()
  return results
}

export async function adminGetReview(id: string): Promise<ReviewRecord | null> {
  const db = await getDb()
  if (!db) return null
  return db.prepare('SELECT * FROM reviews WHERE id = ?').bind(id).first<ReviewRecord>()
}

export async function adminSetStatus(id: string, status: ReviewStatus): Promise<void> {
  const db = await requireDb()
  const now = new Date().toISOString()
  await db
    .prepare(
      `UPDATE reviews SET status = ?, updated_at = ?,
         approved_at = CASE WHEN ? = 'approved' THEN COALESCE(approved_at, ?) ELSE approved_at END
       WHERE id = ?`,
    )
    .bind(status, now, status, now, id)
    .run()
}

export async function adminSetReply(id: string, reply: string | null): Promise<void> {
  const db = await requireDb()
  await db
    .prepare('UPDATE reviews SET reply = ?, updated_at = ? WHERE id = ?')
    .bind(reply, new Date().toISOString(), id)
    .run()
}

export async function adminDeleteReview(id: string): Promise<void> {
  const db = await requireDb()
  await db.prepare('DELETE FROM reviews WHERE id = ?').bind(id).run()
}

export async function isReviewsDbConfigured(): Promise<boolean> {
  return (await getDb()) !== null
}
