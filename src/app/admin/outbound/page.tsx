import { readOutbound, topBy } from '@/lib/admin/store'
import { Bar, Card, Empty, fmtTime, SectionTitle } from '../_components'

export const dynamic = 'force-dynamic'

const ACCENTS = ['#6C63FF', '#10B981', '#F59E0B', '#EC4899', '#38BDF8', '#FB923C']

export default async function AdminOutbound({ searchParams }: { searchParams: Promise<{ channel?: string }> }) {
  const { channel } = await searchParams
  const all = await readOutbound()
  const filtered = channel ? all.filter(o => o.channel === channel) : all
  const sorted = [...filtered].sort((a, b) => b.ts.localeCompare(a.ts))

  const channelCounts = topBy(all, o => o.channel, 12)
  const channelMax = channelCounts[0]?.[1] ?? 1

  const pageCounts = topBy(filtered, o => o.page, 12)
  const pageMax = pageCounts[0]?.[1] ?? 1

  return (
    <>
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>Outbound clicks</h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{filtered.length} of {all.length} total clicks</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <a href="/admin/outbound" style={chipStyle(!channel)}>All ({all.length})</a>
          {channelCounts.map(([c, n]) => (
            <a key={c} href={`/admin/outbound?channel=${encodeURIComponent(c)}`} style={chipStyle(channel === c)}>
              {c} ({n})
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <Card>
          <SectionTitle sub="Across all clicks">By channel</SectionTitle>
          {channelCounts.length === 0 ? <Empty>No clicks yet.</Empty> :
            channelCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={channelMax} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="Where the click came from">By source page</SectionTitle>
          {pageCounts.length === 0 ? <Empty>No pages captured yet.</Empty> :
            pageCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={pageMax} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
      </div>

      <Card>
        <SectionTitle sub={`${sorted.length} click${sorted.length === 1 ? '' : 's'}`}>Click log</SectionTitle>
        {sorted.length === 0 ? <Empty>No clicks for this filter.</Empty> : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sorted.map((o, i) => (
              <div key={o.id} style={{
                display: 'grid', gridTemplateColumns: '110px 90px 1fr 1fr', gap: '0.85rem',
                alignItems: 'center', padding: '0.7rem 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                fontSize: '0.83rem',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontVariantNumeric: 'tabular-nums' }}>{fmtTime(o.ts)}</span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.55rem', borderRadius: 9999, textAlign: 'center',
                  background: 'rgba(108,99,255,0.12)', color: '#a78bfa',
                  border: '1px solid rgba(108,99,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>{o.channel}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  from {o.page ?? '—'}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  → {o.destination}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
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
