import Link from 'next/link'
import { notFound } from 'next/navigation'
import { adminGetReview } from '@/lib/reviews/db'
import { ratingLabel } from '@/lib/reviews/types'
import StarTiles from '@/components/reviews/StarTiles'
import { Card, SectionTitle, fmtTime } from '../../_components'
import { ReplyEditor, ReviewActions } from '../ReviewActions'
import { StatusPill } from '../StatusPill'

export const dynamic = 'force-dynamic'

type Params = Promise<{ id: string }>

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '0.75rem', padding: '0.55rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.86rem' }}>
      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{k}</span>
      <span style={{ color: 'rgba(255,255,255,0.85)', wordBreak: 'break-word' }}>{v || '—'}</span>
    </div>
  )
}

export default async function AdminReviewDetail({ params }: { params: Params }) {
  const { id } = await params
  const r = await adminGetReview(id)
  if (!r) notFound()

  return (
    <>
      <Link href={`/admin/reviews?status=${r.status}`} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
        ← Back to {r.status} reviews
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginTop: '1rem', alignItems: 'start' }}>
        <Card style={{ gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <StarTiles rating={r.rating} size={24} />
            <span style={{ color: '#fff', fontWeight: 600 }}>{r.rating}/5 · {ratingLabel(r.rating)}</span>
            <StatusPill status={r.status} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.8rem', fontWeight: 600, color: '#fff', margin: '0 0 0.8rem', lineHeight: 1.2 }}>
            {r.title}
          </h1>
          <div style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{r.body}</div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <ReviewActions id={r.id} status={r.status} afterDelete="/admin/reviews" />
            {r.status === 'approved' && (
              <p style={{ fontSize: '0.82rem', marginTop: '0.8rem' }}>
                Live at <Link href={`/reviews/${r.slug}`} target="_blank" style={{ color: '#a78bfa' }}>/reviews/{r.slug} ↗</Link>
              </p>
            )}
          </div>
        </Card>

        <Card>
          <SectionTitle sub="Not shown publicly except name, company, country">Reviewer</SectionTitle>
          <Row k="Name" v={r.name} />
          <Row k="Email" v={<a href={`mailto:${r.email}`} style={{ color: '#a78bfa' }}>{r.email}</a>} />
          <Row k="Company" v={r.company} />
          <Row k="Website" v={r.website} />
          <Row k="Country" v={r.country} />
          <Row k="Service" v={r.service} />
        </Card>

        <Card>
          <SectionTitle>Meta</SectionTitle>
          <Row k="Submitted" v={fmtTime(r.created_at)} />
          <Row k="Updated" v={fmtTime(r.updated_at)} />
          <Row k="Approved" v={r.approved_at ? fmtTime(r.approved_at) : null} />
          <Row k="Slug" v={r.slug} />
          <Row k="IP" v={r.ip} />
          <Row k="User agent" v={<span style={{ fontSize: '0.75rem' }}>{r.user_agent}</span>} />
        </Card>

        <Card style={{ gridColumn: '1 / -1' }}>
          <SectionTitle sub="Shown under the review on the public site (and in its schema)">Public reply</SectionTitle>
          <ReplyEditor id={r.id} initial={r.reply ?? ''} />
        </Card>
      </div>
    </>
  )
}
