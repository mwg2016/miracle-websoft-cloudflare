import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, PenLine } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { getPublicReview, listPublicReviews } from '@/lib/reviews/db'
import { upworkProjectTitle } from '@/lib/reviews/upwork'
import { computeStats, ratingLabel } from '@/lib/reviews/types'
import { reviewSchema, reviewUrl } from '@/lib/reviews/schema'
import { breadcrumb, renderJsonLd, ORG_ID, SITE_URL } from '@/lib/jsonld'
import StarTiles from '@/components/reviews/StarTiles'
import ReviewCard, { Avatar, SourceBadge, formatReviewDate } from '@/components/reviews/ReviewCard'
import ShareButtons from '@/components/share/ShareButtons'

export const dynamic = 'force-dynamic'

type Params = Promise<{ slug: string }>

function excerpt(s: string, n: number) {
  const clean = s.replace(/\s+/g, ' ').trim()
  return clean.length > n ? `${clean.slice(0, n - 1).trimEnd()}…` : clean
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const r = await getPublicReview(slug)
  if (!r) return { title: 'Review not found | Miracle Websoft', robots: { index: false } }
  const title = `"${excerpt(r.title, 60)}": ${r.rating}★ review by ${r.name} | Miracle Websoft`
  const description = `${r.name}${r.company ? ` (${r.company})` : ''} rated Miracle Websoft ${r.rating}/5: ${excerpt(r.body, 140)}`
  const url = reviewUrl(r.slug)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ReviewPage({ params }: { params: Params }) {
  const { slug } = await params
  const review = await getPublicReview(slug)
  if (!review) notFound()

  const all = await listPublicReviews()
  const stats = computeStats(all)
  const idx = all.findIndex(r => r.slug === review.slug)
  const more = all.filter(r => r.slug !== review.slug).slice(Math.max(0, idx - 1), Math.max(0, idx - 1) + 3)
  const projectTitle = review.source === 'upwork' ? upworkProjectTitle(review.slug) : undefined
  const url = reviewUrl(review.slug)

  const schema = [
    {
      ...reviewSchema(review),
      mainEntityOfPage: { '@type': 'WebPage', '@id': url, url, isPartOf: { '@id': `${SITE_URL}/#website` }, publisher: { '@id': ORG_ID } },
    },
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Reviews', url: '/reviews' },
      { name: excerpt(review.title, 60), url: `/reviews/${review.slug}` },
    ]),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(schema) }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem', background: 'var(--bg-deep)' }}>
        <div className="mw-container" style={{ maxWidth: 1000 }}>
          <div className="mb-6"><Breadcrumb items={[{ label: 'Reviews', href: '/reviews' }, { label: excerpt(review.title, 40) }]} /></div>

          <div className="rv-detail-grid">
            <article className="rv-card rv-detail">
              <header className="rv-card-head">
                <Avatar name={review.name} size={52} />
                <div>
                  <div className="rv-name" style={{ fontSize: '1.05rem' }}>{review.name}</div>
                  <div className="rv-meta">
                    {[review.company, review.country].filter(Boolean).join(' · ') || (review.source === 'upwork' ? 'Upwork client' : 'Client')}
                  </div>
                </div>
              </header>

              <div className="rv-card-rating">
                <StarTiles rating={review.rating} size={26} />
                <SourceBadge source={review.source} />
                <time dateTime={review.date.slice(0, 10)} className="rv-date">
                  {formatReviewDate(review.date, review.source)}
                </time>
              </div>

              <h1 className="rv-detail-title">{review.title}</h1>
              <div className="rv-detail-body">
                {review.body.split(/\n{2,}/).map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <dl className="rv-facts">
                {review.service && <div><dt>Service</dt><dd>{review.service}</dd></div>}
                {projectTitle && review.projectUrl && (
                  <div><dt>Project</dt><dd><Link href={review.projectUrl} className="rv-link">{projectTitle}</Link></dd></div>
                )}
                <div><dt>Rating</dt><dd>{review.rating} / 5 · {ratingLabel(review.rating)}</dd></div>
                <div><dt>Source</dt><dd>{review.source === 'upwork' ? 'Upwork (closed contract)' : 'miraclewebsoft.com (verified client)'}</dd></div>
              </dl>

              {review.reply && (
                <div className="rv-reply">
                  <div className="rv-reply-head">Reply from Miracle Websoft</div>
                  {review.reply.split(/\n{2,}/).map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}

              <div className="rv-share">
                <div className="rv-panel-title">Share this review</div>
                <ShareButtons
                  url={url}
                  text={`"${excerpt(review.title, 90)}" — ${review.rating}★ review of Miracle Websoft by ${review.name}`}
                  hashtags={['Shopify', 'ShopifyExpert']}
                  contentType="review"
                  size="sm"
                />
              </div>
            </article>

            <aside className="rv-aside">
              <div className="rv-panel">
                <div className="rv-panel-title">Miracle Websoft</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', margin: '0.4rem 0' }}>
                  <span className="rv-score-num" style={{ fontSize: '2.4rem' }}>{stats.average.toFixed(1)}</span>
                  <span className="rv-score-label">{ratingLabel(stats.average)}</span>
                </div>
                <StarTiles rating={stats.average} size={22} />
                <p className="rv-score-count">{stats.count} reviews</p>
                <div className="flex flex-col gap-2" style={{ marginTop: '1rem' }}>
                  <Link href="/reviews" className="mw-btn-outline justify-center"><ArrowLeft size={14} /> All reviews</Link>
                  <Link href="/reviews/write" className="mw-btn-accent justify-center"><PenLine size={14} /> Write a review</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="mw-section">
          <div className="mw-container">
            <div className="flex flex-wrap items-end justify-between gap-4" style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>More reviews</h2>
              <Link href="/reviews" className="rv-link inline-flex items-center gap-1">See all {stats.count} reviews <ArrowRight size={14} /></Link>
            </div>
            <div className="rv-grid">
              {more.map(r => <ReviewCard key={r.slug} review={r} />)}
            </div>
          </div>
        </section>
      )}

      <section style={{ paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>Want results like this on your store?</h2>
              <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>
                Send your URL and get a free 5-minute video teardown within 48 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/free-store-audit" className="mw-btn-accent">Get a free teardown <ArrowRight size={15} /></Link>
              <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
