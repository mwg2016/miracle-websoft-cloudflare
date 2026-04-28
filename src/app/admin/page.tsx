import { readLeads, readOutbound, topBy } from '@/lib/admin/store'
import { resolveSource, sourceKey } from '@/lib/admin/source'
import { Bar, Card, Empty, SectionTitle, Stat, fmtTime } from './_components'

export const dynamic = 'force-dynamic'

const ACCENTS = ['#6C63FF', '#10B981', '#F59E0B', '#EC4899', '#38BDF8', '#FB923C']

export default async function AdminDashboard() {
  const [leads, outbound] = await Promise.all([readLeads(), readOutbound()])
  const now = Date.now()
  const dayAgo = now - 24 * 60 * 60 * 1000
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000

  const inWindow = <T extends { ts: string }>(items: T[], since: number) =>
    items.filter(i => Date.parse(i.ts) >= since)

  const leadsToday = inWindow(leads, dayAgo).length
  const leadsWeek = inWindow(leads, weekAgo).length
  const outToday = inWindow(outbound, dayAgo).length
  const outWeek = inWindow(outbound, weekAgo).length

  // Top channels by outbound clicks (your "which channel gives me leads" question).
  const channelCounts = topBy(outbound, o => o.channel, 8)
  const channelMax = channelCounts[0]?.[1] ?? 1

  // Top resolved sources for leads — UTM > click ID > referrer > direct.
  const sourceCounts = topBy(leads, l => sourceKey(resolveSource(l.origin)), 8)
  const sourceMax = sourceCounts[0]?.[1] ?? 1

  // Same priority resolution applied to outbound clicks.
  const outboundSourceCounts = topBy(outbound, o => sourceKey(resolveSource(o.origin)), 8)
  const outboundSourceMax = outboundSourceCounts[0]?.[1] ?? 1

  // Top landing pages — where converters arrived.
  const pageCounts = topBy(leads, l => l.origin?.first_landing_page ?? l.origin?.landing_page, 8)
  const pageMax = pageCounts[0]?.[1] ?? 1

  // Top form types.
  const formCounts = topBy(leads, l => l.form, 5)
  const formMax = formCounts[0]?.[1] ?? 1

  // Recent activity: union of leads + outbound, latest 15.
  type Activity =
    | { kind: 'lead'; ts: string; sub: string; detail: string }
    | { kind: 'outbound'; ts: string; sub: string; detail: string }
  const activity: Activity[] = [
    ...leads.map((l): Activity => ({
      kind: 'lead',
      ts: l.ts,
      sub: l.form,
      detail: String((l.payload.name ?? l.payload.contactName ?? l.payload.referrerName ?? l.payload.email ?? '—')),
    })),
    ...outbound.map((o): Activity => ({
      kind: 'outbound',
      ts: o.ts,
      sub: o.channel,
      detail: o.destination,
    })),
  ].sort((a, b) => b.ts.localeCompare(a.ts)).slice(0, 15)

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          Form leads and outbound contact clicks across the site.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
        <Stat label="Leads · today" value={leadsToday} sub={`${leadsWeek} this week · ${leads.length} total`} />
        <Stat label="Outbound · today" value={outToday} sub={`${outWeek} this week · ${outbound.length} total`} />
        <Stat label="Top channel" value={channelCounts[0]?.[0] ?? '—'} sub={channelCounts[0] ? `${channelCounts[0][1]} clicks` : 'No clicks yet'} />
        <Stat label="Top source" value={sourceCounts[0]?.[0] ?? '—'} sub={sourceCounts[0] ? `${sourceCounts[0][1]} leads` : 'No leads yet'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <Card>
          <SectionTitle sub="Outbound clicks per channel">Channels</SectionTitle>
          {channelCounts.length === 0 ? (
            <Empty>No outbound clicks yet — share the site and try clicking WhatsApp/email/Upwork buttons.</Empty>
          ) : (
            channelCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={channelMax} accent={ACCENTS[i % ACCENTS.length]} />)
          )}
        </Card>

        <Card>
          <SectionTitle sub="UTM > click-id > referrer > direct (priority)">Lead sources</SectionTitle>
          {sourceCounts.length === 0 ? (
            <Empty>No leads yet.</Empty>
          ) : (
            sourceCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={sourceMax} accent={ACCENTS[i % ACCENTS.length]} />)
          )}
        </Card>

        <Card>
          <SectionTitle sub="UTM > click-id > referrer > direct (priority)">Outbound sources</SectionTitle>
          {outboundSourceCounts.length === 0 ? (
            <Empty>No outbound clicks yet.</Empty>
          ) : (
            outboundSourceCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={outboundSourceMax} accent={ACCENTS[i % ACCENTS.length]} />)
          )}
        </Card>

        <Card>
          <SectionTitle sub="Where converters first landed">Top landing pages</SectionTitle>
          {pageCounts.length === 0 ? (
            <Empty>No landing pages captured yet.</Empty>
          ) : (
            pageCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={pageMax} accent={ACCENTS[i % ACCENTS.length]} />)
          )}
        </Card>

        <Card>
          <SectionTitle sub="Submissions per form type">Forms</SectionTitle>
          {formCounts.length === 0 ? (
            <Empty>No form submissions yet.</Empty>
          ) : (
            formCounts.map(([k, v], i) => <Bar key={k} label={k} count={v} max={formMax} accent={ACCENTS[i % ACCENTS.length]} />)
          )}
        </Card>
      </div>

      <Card>
        <SectionTitle sub="Latest 15 events">Recent activity</SectionTitle>
        {activity.length === 0 ? (
          <Empty>No activity yet.</Empty>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {activity.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '110px 90px 1fr', gap: '0.85rem',
                alignItems: 'center',
                padding: '0.75rem 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                fontSize: '0.85rem',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontVariantNumeric: 'tabular-nums' }}>{fmtTime(a.ts)}</span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.55rem', borderRadius: 9999, textAlign: 'center',
                  background: a.kind === 'lead' ? 'rgba(16,185,129,0.12)' : 'rgba(108,99,255,0.12)',
                  color: a.kind === 'lead' ? '#10B981' : '#a78bfa',
                  border: a.kind === 'lead' ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(108,99,255,0.25)',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>{a.sub}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.detail}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  )
}
