import { readLeads, type LeadRecord } from '@/lib/admin/store'
import { resolveSource, type ResolvedSource } from '@/lib/admin/source'
import { Card, Empty, fmtTime } from '../_components'

const BASIS_COLORS: Record<ResolvedSource['basis'], string> = {
  utm: '#10B981',
  click_id: '#F59E0B',
  referrer: '#6C63FF',
  direct: '#6B7280',
}

function SourceBadge({ s }: { s: ResolvedSource }) {
  const color = BASIS_COLORS[s.basis]
  // Render as a single string to keep "source / medium" in one text node —
  // {a} / {b} JSX renders as separate React children, which serialises into
  // disjoint DOM text nodes and breaks substring search in the HTML.
  const label = `${s.source} / ${s.medium}`
  return (
    <span title={s.detail ? `${s.basis}: ${s.detail}` : s.basis} style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
      fontSize: '0.7rem', fontWeight: 600,
      padding: '0.2rem 0.55rem', borderRadius: 9999,
      background: `${color}1f`, color, border: `1px solid ${color}40`,
      textTransform: 'lowercase', letterSpacing: '0.02em',
    }}>
      <span>{label}</span>
      {s.campaign && <span style={{ opacity: 0.7 }}>· {s.campaign}</span>}
    </span>
  )
}

export const dynamic = 'force-dynamic'

const FORMS = ['contact', 'services', 'careers', 'referral', 'white_label'] as const

function summary(lead: LeadRecord): { name: string; email: string; extra?: string } {
  const p = lead.payload as Record<string, unknown>
  const get = (k: string) => (typeof p[k] === 'string' ? (p[k] as string) : undefined)
  switch (lead.form) {
    case 'careers':
      return { name: get('name') ?? '—', email: get('email') ?? '—', extra: get('position') }
    case 'referral':
      return { name: `${get('referrerName') ?? '—'} → ${get('clientName') ?? '?'}`, email: get('referrerEmail') ?? '—', extra: get('projectType') }
    case 'white_label':
      return { name: `${get('contactName') ?? '—'} (${get('companyName') ?? '?'})`, email: get('email') ?? '—', extra: get('engagementType') }
    case 'services':
      return { name: get('name') ?? '—', email: get('email') ?? '—', extra: get('service') }
    default:
      return { name: get('name') ?? '—', email: get('email') ?? '—', extra: get('service') }
  }
}

function originDetail(lead: LeadRecord): string {
  const o = lead.origin
  if (!o) return '—'
  const parts: string[] = []
  const landing = o.first_landing_page ?? o.landing_page
  const referrer = o.first_referrer ?? o.referrer
  if (landing) parts.push(`landing: ${landing}`)
  if (referrer && referrer !== 'direct') {
    let host = referrer
    try { host = new URL(referrer).hostname } catch {}
    parts.push(`ref: ${host}`)
  }
  if (o.click_page && o.click_page !== landing) parts.push(`clicked from: ${o.click_page}`)
  return parts.join(' · ') || '—'
}

export default async function AdminLeads({ searchParams }: { searchParams: Promise<{ form?: string }> }) {
  const { form } = await searchParams
  const all = await readLeads()
  const filtered = form && (FORMS as readonly string[]).includes(form)
    ? all.filter(l => l.form === form)
    : all
  const sorted = [...filtered].sort((a, b) => b.ts.localeCompare(a.ts))

  const counts = FORMS.map(f => ({ form: f, count: all.filter(l => l.form === f).length }))

  return (
    <>
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>Leads</h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{filtered.length} of {all.length} total submissions</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <a href="/admin/leads" style={chipStyle(!form)}>All ({all.length})</a>
          {counts.map(c => (
            <a key={c.form} href={`/admin/leads?form=${c.form}`} style={chipStyle(form === c.form)}>
              {c.form} ({c.count})
            </a>
          ))}
        </div>
      </div>

      {sorted.length === 0 ? (
        <Empty>No submissions yet for this filter.</Empty>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {sorted.map(lead => {
            const s = summary(lead)
            const message = (lead.payload as Record<string, unknown>).message ||
                            (lead.payload as Record<string, unknown>).description ||
                            (lead.payload as Record<string, unknown>).notes
            return (
              <Card key={lead.id}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
                    <div style={{ fontVariantNumeric: 'tabular-nums', marginBottom: '0.25rem' }}>{fmtTime(lead.ts)}</div>
                    <span style={{
                      fontSize: '0.66rem', fontWeight: 600, padding: '0.18rem 0.5rem', borderRadius: 9999,
                      background: 'rgba(16,185,129,0.12)', color: '#10B981',
                      border: '1px solid rgba(16,185,129,0.25)',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>{lead.form}</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{s.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.4rem' }}>
                      {s.email}{s.extra ? ` · ${s.extra}` : ''}
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <SourceBadge s={resolveSource(lead.origin)} />
                    </div>
                    {typeof message === 'string' && message && (
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: '0.4rem 0', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                        {message}
                      </div>
                    )}
                    {lead.form === 'careers' && typeof (lead.payload as Record<string, unknown>).resumeName === 'string' && (
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem' }}>
                        📎 Resume sent by email: {String((lead.payload as Record<string, unknown>).resumeName)}
                      </div>
                    )}
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.6rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {originDetail(lead)}
                    </div>
                    {lead.origin?.page_history && lead.origin.page_history.length > 1 && (
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
                        <span style={{ opacity: 0.7 }}>journey:</span>
                        {lead.origin.page_history.map((p, i, arr) => (
                          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                            <code style={{ background: 'rgba(255,255,255,0.04)', padding: '1px 5px', borderRadius: 4, fontSize: '0.68rem' }}>{p}</code>
                            {i < arr.length - 1 && <span style={{ opacity: 0.4 }}>→</span>}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <details style={{ fontSize: '0.78rem' }}>
                    <summary style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.6)', listStyle: 'none', userSelect: 'none' }}>raw</summary>
                    <pre style={{
                      marginTop: '0.5rem', maxWidth: 360, maxHeight: 300, overflow: 'auto',
                      background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 8, padding: '0.6rem 0.75rem',
                      fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                    }}>
                      {JSON.stringify({ ip: lead.ip, ua: lead.userAgent, origin: lead.origin, payload: lead.payload }, null, 2)}
                    </pre>
                  </details>
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </>
  )
}

function chipStyle(active: boolean): React.CSSProperties {
  return {
    padding: '0.4rem 0.85rem',
    fontSize: '0.78rem',
    borderRadius: 9999,
    textDecoration: 'none',
    textTransform: 'capitalize',
    background: active ? 'rgba(108,99,255,0.18)' : 'rgba(255,255,255,0.04)',
    border: active ? '1px solid rgba(108,99,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
    color: active ? '#a78bfa' : 'rgba(255,255,255,0.55)',
  }
}
