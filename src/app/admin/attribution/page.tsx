import { readLeads, readOutbound, topBy } from '@/lib/admin/store'
import { Bar, Card, Empty, SectionTitle } from '../_components'

export const dynamic = 'force-dynamic'

const ACCENTS = ['#6C63FF', '#10B981', '#F59E0B', '#EC4899', '#38BDF8', '#FB923C', '#34d399', '#fb923c']

export default async function AdminAttribution() {
  const [leads, outbound] = await Promise.all([readLeads(), readOutbound()])

  const sources = topBy(leads, l => l.origin?.utm_source, 10)
  const mediums = topBy(leads, l => l.origin?.utm_medium, 10)
  const campaigns = topBy(leads, l => l.origin?.utm_campaign, 10)
  const referrers = topBy(leads, l => l.origin?.referrer && l.origin.referrer !== 'direct'
    ? l.origin.referrer.replace(/^https?:\/\//, '').split('/')[0]
    : undefined, 10)
  const outSources = topBy(outbound, o => o.origin?.utm_source, 10)

  const max = (arr: [string, number][]) => arr[0]?.[1] ?? 1

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>Attribution</h1>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          First-touch source breakdown. Tag inbound links with{' '}
          <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 5px', borderRadius: 4 }}>?utm_source=…&utm_medium=…&utm_campaign=…</code>{' '}
          to see this populate.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
        <Card>
          <SectionTitle sub="Form-submission breakdown by utm_source">Sources (leads)</SectionTitle>
          {sources.length === 0 ? <Empty>No utm_source captured yet.</Empty> :
            sources.map(([k, v], i) => <Bar key={k} label={k} count={v} max={max(sources)} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="Form-submission breakdown by utm_medium">Mediums (leads)</SectionTitle>
          {mediums.length === 0 ? <Empty>No utm_medium captured yet.</Empty> :
            mediums.map(([k, v], i) => <Bar key={k} label={k} count={v} max={max(mediums)} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="Form-submission breakdown by utm_campaign">Campaigns (leads)</SectionTitle>
          {campaigns.length === 0 ? <Empty>No utm_campaign captured yet.</Empty> :
            campaigns.map(([k, v], i) => <Bar key={k} label={k} count={v} max={max(campaigns)} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="External hosts that referred converters">Referrers (leads)</SectionTitle>
          {referrers.length === 0 ? <Empty>No external referrers captured yet.</Empty> :
            referrers.map(([k, v], i) => <Bar key={k} label={k} count={v} max={max(referrers)} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="Outbound-click breakdown by utm_source — what brings in the most contact-intent traffic">Sources (outbound)</SectionTitle>
          {outSources.length === 0 ? <Empty>No utm_source captured yet on outbound clicks.</Empty> :
            outSources.map(([k, v], i) => <Bar key={k} label={k} count={v} max={max(outSources)} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
      </div>
    </>
  )
}
