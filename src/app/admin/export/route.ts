import { NextResponse } from 'next/server'
import { readLeads, readOutbound, type LeadRecord, type OutboundRecord } from '@/lib/admin/store'
import { resolveSource } from '@/lib/admin/source'

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
    'resolved_source', 'resolved_medium', 'resolved_campaign', 'resolved_basis',
    'first_utm_source', 'first_utm_medium', 'first_utm_campaign', 'first_utm_term', 'first_utm_content',
    'first_gclid', 'first_fbclid', 'first_referrer', 'first_landing_page',
    'click_page', 'click_referrer',
    'ga_client_id', 'google_ads_click_id', 'facebook_browser_id', 'facebook_click_id',
    'page_history',
    'ip', 'userAgent', 'raw',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    const p = r.payload as Record<string, unknown>
    const o = r.origin ?? {}
    const src = resolveSource(o)
    lines.push([
      r.id, r.ts, r.form,
      p.name ?? p.contactName ?? p.referrerName ?? '',
      p.email ?? p.referrerEmail ?? '',
      p.phone ?? p.referrerPhone ?? '',
      p.storeUrl ?? p.website ?? '',
      p.service ?? p.engagementType ?? p.projectType ?? p.position ?? '',
      p.message ?? p.description ?? p.notes ?? '',
      src.source, src.medium, src.campaign ?? '', src.basis,
      o.first_utm_source ?? o.utm_source ?? '',
      o.first_utm_medium ?? o.utm_medium ?? '',
      o.first_utm_campaign ?? o.utm_campaign ?? '',
      o.first_utm_term ?? o.utm_term ?? '',
      o.first_utm_content ?? o.utm_content ?? '',
      o.first_gclid ?? o.gclid ?? '',
      o.first_fbclid ?? o.fbclid ?? '',
      o.first_referrer ?? o.referrer ?? '',
      o.first_landing_page ?? o.landing_page ?? '',
      o.click_page ?? '',
      o.click_referrer ?? '',
      o.ga_client_id ?? '',
      o.google_ads_click_id ?? '',
      o.facebook_browser_id ?? '',
      o.facebook_click_id ?? '',
      Array.isArray(o.page_history) ? o.page_history.join(' → ') : '',
      r.ip ?? '', r.userAgent ?? '', JSON.stringify(p),
    ].map(csvCell).join(','))
  }
  return lines.join('\n')
}

function outboundToCsv(rows: OutboundRecord[]): string {
  const headers = [
    'id', 'ts', 'channel', 'destination', 'page',
    'resolved_source', 'resolved_medium', 'resolved_campaign', 'resolved_basis',
    'first_utm_source', 'first_utm_medium', 'first_utm_campaign',
    'first_referrer', 'first_landing_page',
    'click_page', 'click_referrer',
    'gclid', 'fbclid', 'ga_client_id', 'google_ads_click_id', 'facebook_browser_id', 'facebook_click_id',
    'page_history',
    'ip', 'userAgent',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    const o = r.origin ?? {}
    const src = resolveSource(o)
    lines.push([
      r.id, r.ts, r.channel, r.destination, r.page ?? '',
      src.source, src.medium, src.campaign ?? '', src.basis,
      o.first_utm_source ?? o.utm_source ?? '',
      o.first_utm_medium ?? o.utm_medium ?? '',
      o.first_utm_campaign ?? o.utm_campaign ?? '',
      o.first_referrer ?? o.referrer ?? '',
      o.first_landing_page ?? o.landing_page ?? '',
      o.click_page ?? '',
      o.click_referrer ?? '',
      o.first_gclid ?? o.gclid ?? '',
      o.first_fbclid ?? o.fbclid ?? '',
      o.ga_client_id ?? '',
      o.google_ads_click_id ?? '',
      o.facebook_browser_id ?? '',
      o.facebook_click_id ?? '',
      Array.isArray(o.page_history) ? o.page_history.join(' → ') : '',
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
