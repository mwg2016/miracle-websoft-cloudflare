// Edge-safe cookie signing/verification using WebCrypto HMAC-SHA256.
// Used by middleware (edge runtime) and the login API (node runtime).

const COOKIE_NAME = 'mw_admin'
const TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

export const ADMIN_COOKIE_NAME = COOKIE_NAME

function b64url(bytes: Uint8Array): string {
  let s = ''
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i])
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromB64url(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4))
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  return new Uint8Array(sig)
}

function timingSafeEq(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
  return diff === 0
}

export async function signSession(secret: string): Promise<string> {
  const payload = JSON.stringify({ exp: Date.now() + TTL_MS })
  const payloadB64 = b64url(new TextEncoder().encode(payload))
  const sig = await hmac(secret, payloadB64)
  return `${payloadB64}.${b64url(sig)}`
}

export async function verifySession(token: string | undefined, secret: string): Promise<boolean> {
  if (!token) return false
  const [payloadB64, sigB64] = token.split('.')
  if (!payloadB64 || !sigB64) return false
  try {
    const expected = await hmac(secret, payloadB64)
    const actual = fromB64url(sigB64)
    if (!timingSafeEq(expected, actual)) return false
    const payload = JSON.parse(new TextDecoder().decode(fromB64url(payloadB64))) as { exp: number }
    return typeof payload.exp === 'number' && payload.exp > Date.now()
  } catch {
    return false
  }
}
