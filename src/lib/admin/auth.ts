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

// In-memory rate limiter — no database, so this only limits within a single
// Worker isolate and resets whenever Cloudflare recycles it. Not a strong
// guarantee, but the password (ADMIN_PASSWORD_HASH) is the real gate; this
// just slows down casual brute-forcing within one isolate's lifetime.
const ATTEMPTS = new Map<string, { count: number; firstAt: number }>()
const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 5

export function checkRate(ip: string): { allowed: boolean; retryAfterSec?: number } {
  const now = Date.now()
  const entry = ATTEMPTS.get(ip)
  if (!entry || now - entry.firstAt > WINDOW_MS) {
    ATTEMPTS.set(ip, { count: 1, firstAt: now })
    return { allowed: true }
  }
  if (entry.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.firstAt + WINDOW_MS - now) / 1000) }
  }
  entry.count += 1
  return { allowed: true }
}

export function resetRate(ip: string) {
  ATTEMPTS.delete(ip)
}
