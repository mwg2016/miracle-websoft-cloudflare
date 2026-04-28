import { readLeads, type LeadRecord } from '@/lib/admin/store'
import { Card, Empty, fmtTime, SectionTitle } from '../_components'

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

function origin(lead: LeadRecord): string {
  const o = lead.origin
  if (!o) return '—'
  const parts = []
  if (o.utm_source) parts.push(`${o.utm_source}/${o.utm_medium ?? '?'}`)
  else if (o.referrer && o.referrer !== 'direct') parts.push(`ref: ${o.referrer.replace(/^https?:\/\//, '').split('/')[0]}`)
  else parts.push('direct')
  if (o.landing_page) parts.push(o.landing_page)
  return parts.join(' · ')
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
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
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
                    {typeof message === 'string' && message && (
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: '0.4rem 0', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                        {message}
                      </div>
                    )}
                    {lead.form === 'careers' && typeof (lead.payload as Record<string, unknown>).resumeStored === 'string' && (
                      <a
                        href={`/api/admin/resume/${(lead.payload as Record<string, unknown>).resumeStored}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#a78bfa', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)', padding: '0.3rem 0.7rem', borderRadius: 8, textDecoration: 'none', marginTop: '0.4rem' }}
                      >
                        ↓ Resume ({String((lead.payload as Record<string, unknown>).resumeName ?? 'file')})
                      </a>
                    )}
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.6rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {origin(lead)}
                    </div>
                  </div>
                  <details style={{ fontSize: '0.78rem' }}>
                    <summary style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.4)', listStyle: 'none', userSelect: 'none' }}>raw</summary>
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
