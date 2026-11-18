import Link from 'next/link'
import { adminListReviews, isReviewsDbConfigured, listPublicReviews } from '@/lib/reviews/db'
import { computeStats, ratingLabel, type ReviewRecord, type ReviewStatus } from '@/lib/reviews/types'
import StarTiles from '@/components/reviews/StarTiles'
import { Bar, Card, Empty, SectionTitle, Stat, fmtTime } from '../_components'
import { ReviewActions } from './ReviewActions'
import { StatusPill } from './StatusPill'

export const dynamic = 'force-dynamic'

const TABS: { key: ReviewStatus | 'all'; label: string }[] = [
  { key: 'pending', label: 'Pending' },
  { key: 'approved', label: 'Approved' },
  { key: 'rejected', label: 'Rejected' },
  { key: 'all', label: 'All' },
]

type SP = Promise<{ status?: string }>

export default async function AdminReviewsPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams
  const configured = await isReviewsDbConfigured()
  const tab = (TABS.find(t => t.key === sp.status)?.key ?? 'pending') as ReviewStatus | 'all'

  let all: ReviewRecord[] = []
  let dbError = ''
  try {
    all = await adminListReviews()
  } catch (err) {
    dbError = (err as Error).message
  }
  const publicReviews = await listPublicReviews()

  const counts = {
    pending: all.filter(r => r.status === 'pending').length,
    approved: all.filter(r => r.status === 'approved').length,
    rejected: all.filter(r => r.status === 'rejected').length,
    all: all.length,
  }
  const shown = tab === 'all' ? all : all.filter(r => r.status === tab)

  const publicStats = computeStats(publicReviews)
  const siteApprovedStats = computeStats(all.filter(r => r.status === 'approved'))
  const submittedStats = computeStats(all)
  const distMax = Math.max(1, ...publicStats.distribution)

  return (
    <>
      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>
            Reviews
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            Approve reviews submitted on /reviews/write. Only approved reviews are shown on the site and in schema.
          </p>
        </div>
        <Link href="/reviews" target="_blank" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>View public page ↗</Link>
      </div>

      {(!configured || dbError) && (
        <div style={{ marginBottom: '1.5rem', padding: '1rem 1.2rem', borderRadius: 12, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)', color: '#FBBF24', fontSize: '0.88rem' }}>
          {!configured
            ? 'The REVIEWS_DB D1 binding is not configured, so submitted reviews cannot be stored. See wrangler.jsonc for setup.'
            : `Could not read reviews: ${dbError}. Did you run the D1 migration?`}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
        <Stat label="Pending approval" value={counts.pending} sub={counts.pending ? 'Needs your review' : 'All caught up'} />
        <Stat label="Public rating" value={publicStats.average.toFixed(1)} sub={`${ratingLabel(publicStats.average)} · ${publicStats.count} public reviews`} />
        <Stat label="Website reviews · approved" value={counts.approved} sub={siteApprovedStats.count ? `avg ${siteApprovedStats.average.toFixed(1)}★` : 'None yet'} />
        <Stat label="Submitted · all time" value={counts.all} sub={submittedStats.count ? `avg ${submittedStats.average.toFixed(1)}★ · ${counts.rejected} rejected` : 'None yet'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <Card>
          <SectionTitle sub="All public reviews: approved website + Upwork">Rating distribution</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.4rem', color: '#fff', lineHeight: 1 }}>{publicStats.average.toFixed(1)}</span>
            <StarTiles rating={publicStats.average} size={22} />
          </div>
          {[5, 4, 3, 2, 1].map(s => (
            <Bar key={s} label={`${s} star`} count={publicStats.distribution[s - 1]} max={distMax} accent={s >= 4 ? '#10B981' : s === 3 ? '#F59E0B' : '#EF4444'} />
          ))}
        </Card>
        <Card>
          <SectionTitle sub="Everything submitted through the website">Website submissions</SectionTitle>
          {[5, 4, 3, 2, 1].map(s => (
            <Bar key={s} label={`${s} star`} count={submittedStats.distribution[s - 1]} max={Math.max(1, ...submittedStats.distribution)} accent={s >= 4 ? '#10B981' : s === 3 ? '#F59E0B' : '#EF4444'} />
          ))}
        </Card>
      </div>

      <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {TABS.map(t => {
          const active = t.key === tab
          return (
            <Link key={t.key} href={`/admin/reviews?status=${t.key}`} style={{
              padding: '0.45rem 0.9rem', borderRadius: 999, fontSize: '0.82rem', textDecoration: 'none',
              background: active ? '#fff' : 'rgba(255,255,255,0.04)', color: active ? '#0a0a0a' : 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.12)', fontWeight: active ? 600 : 400,
            }}>
              {t.label} <span style={{ opacity: 0.6 }}>{counts[t.key]}</span>
            </Link>
          )
        })}
      </div>

      {shown.length === 0 ? (
        <Empty>{tab === 'pending' ? 'No reviews waiting for approval.' : 'No reviews here yet.'}</Empty>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {shown.map(r => (
            <Card key={r.id}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                <StarTiles rating={r.rating} size={18} />
                <StatusPill status={r.status} />
                <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>{r.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>{r.email}</span>
                {r.company && <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>· {r.company}</span>}
                <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontVariantNumeric: 'tabular-nums' }}>{fmtTime(r.created_at)}</span>
              </div>
              <Link href={`/admin/reviews/${r.id}`} style={{ color: '#fff', textDecoration: 'none' }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.3rem' }}>{r.title}</div>
                <p style={{
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0,
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{r.body}</p>
              </Link>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.9rem' }}>
                <ReviewActions id={r.id} status={r.status} />
                <div style={{ display: 'flex', gap: '0.9rem', fontSize: '0.8rem' }}>
                  <Link href={`/admin/reviews/${r.id}`} style={{ color: 'rgba(255,255,255,0.75)' }}>Open</Link>
                  {r.status === 'approved' && (
                    <Link href={`/reviews/${r.slug}`} target="_blank" style={{ color: 'rgba(255,255,255,0.75)' }}>Public page ↗</Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
