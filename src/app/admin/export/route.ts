import { NextResponse } from 'next/server'
import { readLeads, readOutbound, type LeadRecord, type OutboundRecord } from '@/lib/admin/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function csvCell(v: unknown): string {
  if (v === null || v === undefined) return ''
  const s = typeof v === 'object' ? JSON.stringify(v) : String(v)
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function leadsToCsv(rows: LeadRecord[]): string {
  const headers = [
    'id', 'ts', 'form', 'name', 'email', 'phone', 'storeUrl', 'service', 'message',
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
    'referrer', 'landing_page', 'gclid', 'fbclid',
    'ip', 'userAgent', 'raw',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    const p = r.payload as Record<string, unknown>
    const o = r.origin ?? {}
    lines.push([
      r.id, r.ts, r.form,
      p.name ?? p.contactName ?? p.referrerName ?? '',
      p.email ?? p.referrerEmail ?? '',
      p.phone ?? p.referrerPhone ?? '',
      p.storeUrl ?? p.website ?? '',
      p.service ?? p.engagementType ?? p.projectType ?? p.position ?? '',
      p.message ?? p.description ?? p.notes ?? '',
      o.utm_source ?? '', o.utm_medium ?? '', o.utm_campaign ?? '', o.utm_term ?? '', o.utm_content ?? '',
      o.referrer ?? '', o.landing_page ?? '', o.gclid ?? '', o.fbclid ?? '',
      r.ip ?? '', r.userAgent ?? '', JSON.stringify(p),
    ].map(csvCell).join(','))
  }
  return lines.join('\n')
}

function outboundToCsv(rows: OutboundRecord[]): string {
  const headers = [
    'id', 'ts', 'channel', 'destination', 'page',
    'utm_source', 'utm_medium', 'utm_campaign', 'referrer', 'landing_page',
    'ip', 'userAgent',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    const o = r.origin ?? {}
    lines.push([
      r.id, r.ts, r.channel, r.destination, r.page ?? '',
      o.utm_source ?? '', o.utm_medium ?? '', o.utm_campaign ?? '', o.referrer ?? '', o.landing_page ?? '',
      r.ip ?? '', r.userAgent ?? '',
    ].map(csvCell).join(','))
  }
  return lines.join('\n')
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const kind = url.searchParams.get('kind') ?? 'leads'
  if (kind !== 'leads' && kind !== 'outbound') {
    return new NextResponse(`<!doctype html><meta charset=utf-8><title>Export</title><body style="font-family:system-ui;padding:2rem;background:#0a0a0a;color:#fff"><h1>Export</h1><p>Choose a CSV to download:</p><ul><li><a href="?kind=leads" style="color:#6C63FF">leads.csv</a></li><li><a href="?kind=outbound" style="color:#6C63FF">outbound.csv</a></li></ul><p><a href="/admin" style="color:rgba(255,255,255,0.5)">← back to admin</a></p></body>`,
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }
  const csv = kind === 'leads' ? leadsToCsv(await readLeads()) : outboundToCsv(await readOutbound())
  const filename = `${kind}-${new Date().toISOString().slice(0, 10)}.csv`
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  })
}
