import { readLeads, readOutbound, topBy } from '@/lib/admin/store'
import { resolveSource, sourceKey } from '@/lib/admin/source'
import { Bar, Card, Empty, SectionTitle } from '../_components'

export const dynamic = 'force-dynamic'

const ACCENTS = ['#6C63FF', '#10B981', '#F59E0B', '#EC4899', '#38BDF8', '#FB923C', '#34d399', '#fb923c']

export default async function AdminAttribution() {
  const [leads, outbound] = await Promise.all([readLeads(), readOutbound()])

  const sources = topBy(leads, l => l.origin?.first_utm_source ?? l.origin?.utm_source, 10)
  const mediums = topBy(leads, l => l.origin?.first_utm_medium ?? l.origin?.utm_medium, 10)
  const campaigns = topBy(leads, l => l.origin?.first_utm_campaign ?? l.origin?.utm_campaign, 10)
  const referrers = topBy(leads, l => {
    const r = l.origin?.first_referrer ?? l.origin?.referrer
    if (!r || r === 'direct') return undefined
    try { return new URL(r).hostname } catch { return r.replace(/^https?:\/\//, '').split('/')[0] }
  }, 10)
  const outSources = topBy(outbound, o => o.origin?.first_utm_source ?? o.origin?.utm_source, 10)

  // Resolved (priority) source for both leads and outbound.
  const resolvedLeadSources = topBy(leads, l => sourceKey(resolveSource(l.origin)), 12)
  const resolvedLeadMax = resolvedLeadSources[0]?.[1] ?? 1
  const resolvedOutSources = topBy(outbound, o => sourceKey(resolveSource(o.origin)), 12)
  const resolvedOutMax = resolvedOutSources[0]?.[1] ?? 1

  // Click-ID exposure — how many leads/clicks have which kind of click identifier.
  const clickIdStats = (() => {
    const counts = { gclid: 0, fbclid: 0, gcl_aw: 0, fbp: 0, fbc: 0 }
    for (const l of leads) {
      if (l.origin?.first_gclid || l.origin?.gclid) counts.gclid++
      if (l.origin?.first_fbclid || l.origin?.fbclid) counts.fbclid++
      if (l.origin?.google_ads_click_id) counts.gcl_aw++
      if (l.origin?.facebook_browser_id) counts.fbp++
      if (l.origin?.facebook_click_id) counts.fbc++
    }
    return counts
  })()

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

      {/* Resolved sources — the priority view */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
        <Card>
          <SectionTitle sub="UTM > click-id > referrer > direct (priority) · Form submissions">
            Resolved sources — leads
          </SectionTitle>
          {resolvedLeadSources.length === 0 ? <Empty>No leads yet.</Empty> :
            resolvedLeadSources.map(([k, v], i) => <Bar key={k} label={k} count={v} max={resolvedLeadMax} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
        <Card>
          <SectionTitle sub="UTM > click-id > referrer > direct (priority) · Outbound clicks">
            Resolved sources — outbound clicks
          </SectionTitle>
          {resolvedOutSources.length === 0 ? <Empty>No outbound clicks yet.</Empty> :
            resolvedOutSources.map(([k, v], i) => <Bar key={k} label={k} count={v} max={resolvedOutMax} accent={ACCENTS[i % ACCENTS.length]} />)
          }
        </Card>
      </div>

      {/* Click-ID exposure — how many leads carried each kind of click identifier */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {[
          { k: 'gclid', label: 'gclid (Google query)', val: clickIdStats.gclid },
          { k: 'gcl_aw', label: '_gcl_aw (Google Ads cookie)', val: clickIdStats.gcl_aw },
          { k: 'fbclid', label: 'fbclid (Meta query)', val: clickIdStats.fbclid },
          { k: 'fbp', label: '_fbp (Meta browser)', val: clickIdStats.fbp },
          { k: 'fbc', label: '_fbc (Meta click)', val: clickIdStats.fbc },
        ].map(c => (
          <Card key={c.k}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.4rem' }}>
              {c.label}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff' }}>
              {c.val} <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>leads</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Raw UTM / referrer breakdowns — diagnostic */}
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
