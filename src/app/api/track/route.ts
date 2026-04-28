import { NextResponse } from 'next/server'
import { appendOutbound, type OutboundRecord } from '@/lib/admin/store'
import { isOutboundUrlSafe } from '@/lib/outbound'

export const runtime = 'nodejs'

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(req: Request) {
  let body: Record<string, unknown> = {}
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad JSON' }, { status: 400 })
  }

  const channel = String(body.channel ?? '').slice(0, 40)
  const destination = String(body.destination ?? '')
  if (!channel || !destination) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
  }
  if (!isOutboundUrlSafe(destination)) {
    return NextResponse.json({ ok: false, error: 'Destination not in allow-list' }, { status: 400 })
  }

  const origin = (body.origin && typeof body.origin === 'object' ? body.origin : {}) as OutboundRecord['origin']

  await appendOutbound({
    channel,
    destination,
    page: typeof body.page === 'string' ? body.page.slice(0, 200) : undefined,
    ip: clientIp(req),
    userAgent: req.headers.get('user-agent') ?? undefined,
    origin,
  })

  return NextResponse.json({ ok: true })
}
