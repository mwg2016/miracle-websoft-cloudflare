// Admin auth — single shared password, scrypt-hashed.
//
// To rotate the password, run this in a Node REPL or scratch script:
//   const { scryptSync, randomBytes } = require('node:crypto')
//   const salt = randomBytes(16).toString('hex')
//   const hash = scryptSync('your-new-password', salt, 64).toString('hex')
//   console.log(`${salt}:${hash}`)
// Put the result in .env.local as ADMIN_PASSWORD_HASH.
//
// This module is Node-only (uses node:crypto scrypt) and must NOT be imported
// from middleware/edge code. Use src/lib/admin/cookie.ts for edge-safe HMAC.

import { scryptSync, timingSafeEqual } from 'node:crypto'
import { getCloudflareContext } from '@opennextjs/cloudflare'

export function verifyPassword(password: string): boolean {
  const stored = process.env.ADMIN_PASSWORD_HASH
  if (!stored) return false
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  try {
    const expected = Buffer.from(hash, 'hex')
    const actual = scryptSync(password, salt, 64)
    if (expected.length !== actual.length) return false
    return timingSafeEqual(expected, actual)
  } catch {
    return false
  }
}

// KV-backed rate limiter — a Worker has no shared process memory across
// isolates, so an in-memory Map (the old approach on a single PM2 process)
// would reset on every request and never actually limit anything.
const WINDOW_SEC = 15 * 60
const MAX_ATTEMPTS = 5

export async function checkRate(ip: string): Promise<{ allowed: boolean; retryAfterSec?: number }> {
  const { env } = await getCloudflareContext({ async: true })
  const kv = (env as unknown as CloudflareEnv).LEADS_KV
  const key = `ratelimit:admin-login:${ip}`
  const now = Date.now()
  const raw = await kv.get(key)
  const entry = raw ? (JSON.parse(raw) as { count: number; firstAt: number }) : { count: 0, firstAt: now }

  if (entry.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.firstAt + WINDOW_SEC * 1000 - now) / 1000) }
  }
  entry.count += 1
  const remainingTtl = Math.max(60, Math.ceil((entry.firstAt + WINDOW_SEC * 1000 - now) / 1000))
  await kv.put(key, JSON.stringify(entry), { expirationTtl: remainingTtl })
  return { allowed: true }
}

export async function resetRate(ip: string) {
  const { env } = await getCloudflareContext({ async: true })
  await (env as unknown as CloudflareEnv).LEADS_KV.delete(`ratelimit:admin-login:${ip}`)
}
