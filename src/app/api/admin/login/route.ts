import { NextResponse } from 'next/server'
import { checkRate, resetRate, verifyPassword } from '@/lib/admin/auth'
import { ADMIN_COOKIE_NAME, signSession } from '@/lib/admin/cookie'

export const runtime = 'nodejs'

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(req: Request) {
  const ip = clientIp(req)
  const rate = checkRate(ip)
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, error: `Too many attempts. Try again in ${Math.ceil((rate.retryAfterSec ?? 0) / 60)} min.` },
      { status: 429 },
    )
  }

  const secret = process.env.ADMIN_SECRET
  if (!secret) {
    return NextResponse.json({ ok: false, error: 'Server mis-configured' }, { status: 503 })
  }

  let password = ''
  try {
    const body = await req.json()
    password = String(body.password ?? '')
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }

  if (!verifyPassword(password)) {
    return NextResponse.json({ ok: false, error: 'Wrong password' }, { status: 401 })
  }

  resetRate(ip)
  const token = await signSession(secret)

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  })
  return res
}
