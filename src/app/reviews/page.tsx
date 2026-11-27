import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, PenLine } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { outboundHref } from '@/lib/outbound'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import FounderIntro from '@/components/ui/FounderIntro'
import { clientVideos } from '@/data/videos'
import { listPublicReviews } from '@/lib/reviews/db'
import { computeStats, ratingLabel } from '@/lib/reviews/types'
import { reviewsIndexSchema } from '@/lib/reviews/schema'
import { breadcrumb, renderJsonLd, SITE_URL } from '@/lib/jsonld'
import FaqSection from '@/components/ui/FaqSection'
import RatingSummary from '@/components/reviews/RatingSummary'
import ReviewCard from '@/components/reviews/ReviewCard'
import ShareButtons from '@/components/share/ShareButtons'

// Approved reviews come from D1, so render per request.
export const dynamic = 'force-dynamic'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')
const PAGE_SIZE = 20

export async function generateMetadata(): Promise<Metadata> {
  const stats = computeStats(await listPublicReviews())
  const title = `Miracle Websoft Reviews: ${stats.average.toFixed(1)}/5 from ${stats.count} Verified Clients`
  const description = `Read ${stats.count} verified reviews of Miracle Websoft, the Shopify development agency. Rated ${stats.average.toFixed(1)} out of 5 (${ratingLabel(stats.average)}) by store owners on Upwork and on our site.`
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/reviews` },
    openGraph: { title, description, url: `${SITE_URL}/reviews`, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

type SearchParams = Promise<{ rating?: string; source?: string; sort?: string; page?: string }>

export default async function ReviewsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams
  const all = await listPublicReviews()
  const stats = computeStats(all)

  const ratingFilter = Number(sp.rating)
  const activeRating = ratingFilter >= 1 && ratingFilter <= 5 ? ratingFilter : undefined
  const source = sp.source === 'upwork' || sp.source === 'website' ? sp.source : undefined
  const sort = sp.sort === 'highest' || sp.sort === 'lowest' ? sp.sort : 'recent'

  // Shopify reviews first by default; everything else follows in date order.
  const isShopify = (r: (typeof all)[number]) => /shopify/i.test(`${r.title} ${r.service ?? ''} ${r.body}`)
  let list = sort === 'recent' ? [...all.filter(isShopify), ...all.filter(r => !isShopify(r))] : all
  if (activeRating) list = list.filter(r => Math.round(r.rating) === activeRating)
  if (source) list = list.filter(r => r.source === source)
  if (sort === 'highest') list = [...list].sort((a, b) => b.rating - a.rating || b.date.localeCompare(a.date))
  if (sort === 'lowest') list = [...list].sort((a, b) => a.rating - b.rating || b.date.localeCompare(a.date))

  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE))
  const page = Math.min(pages, Math.max(1, Number(sp.page) || 1))
  const visible = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const qs = (patch: Record<string, string | undefined>) => {
    const p = new URLSearchParams()
    const merged = { rating: activeRating ? String(activeRating) : undefined, source, sort: sort === 'recent' ? undefined : sort, ...patch }
    for (const [k, v] of Object.entries(merged)) if (v) p.set(k, v)
    const s = p.toString()
    return s ? `/reviews?${s}` : '/reviews'
  }

  const fiveStar = stats.distribution[4]
  const websiteCount = all.filter(r => r.source === 'website').length
  const upworkCount = all.length - websiteCount

  const reviewFaqs = [
      {
        question: 'What do clients say about Miracle Websoft?',
        answer: `Miracle Websoft is rated ${stats.average.toFixed(1)} out of 5 (${ratingLabel(stats.average)}) across ${stats.count} verified client reviews. Clients most often mention code quality, clear communication and fast delivery on Shopify projects.`,
      },
      {
        question: 'Are Miracle Websoft reviews verified?',
        answer: `Yes. ${upworkCount} reviews were left by clients on Upwork when their contract closed, and ${websiteCount} were submitted on miraclewebsoft.com and checked against real projects before being published.`,
      },
      {
        question: 'How many 5-star reviews does Miracle Websoft have?',
        answer: `${fiveStar} of ${stats.count} reviews are 5 stars (${stats.count ? Math.round((fiveStar / stats.count) * 100) : 0}%).`,
      },
  ]

  const schema = [
    reviewsIndexSchema(all),
    breadcrumb([{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews' }]),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(schema) }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Reviews' }]} /></div>
          <div className="rv-hero">
            <div>
              <p className="mw-eyebrow">Client reviews · verified</p>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', maxWidth: '18ch' }}>
                Miracle Websoft reviews
              </h1>
              <div className="rv-hero-line">
                <span className="rv-hero-score">{stats.average.toFixed(1)}</span>
                <span className="rv-hero-label">{ratingLabel(stats.average)}</span>
                <span className="rv-hero-sep" aria-hidden="true">·</span>
                <span>{stats.count} reviews</span>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem', maxWidth: '56ch', color: 'var(--text-2)' }}>
                Reviews from Shopify store owners we&apos;ve worked with, left on Upwork when the job closed or submitted here.
                Every review is checked against a real project. Nothing is edited.
              </p>
            </div>
            <div className="rv-hero-cta">
              <Link href="/reviews/write" className="mw-btn-accent"><PenLine size={15} /> Write a review</Link>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '0.6rem' }}>Worked with us? We&apos;d value your honest feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '2.5rem 0 4rem', background: 'var(--bg-deep)' }}>
        <div className="mw-container rv-layout">
          <aside className="rv-aside">
            <div className="rv-panel">
              <RatingSummary stats={stats} activeRating={activeRating} />
            </div>
            <div className="rv-panel">
              <div className="rv-panel-title">Sources</div>
              <ul className="rv-sources">
                <li><span>Upwork (verified contracts)</span><strong>{upworkCount}</strong></li>
                <li><span>miraclewebsoft.com</span><strong>{websiteCount}</strong></li>
              </ul>
              <a href={UPWORK_FREELANCER} target="_blank" rel="noopener noreferrer" className="rv-link inline-flex items-center gap-1" style={{ marginTop: '0.8rem' }}>
                Check the Upwork profile <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="rv-panel">
              <div className="rv-panel-title">Share these reviews</div>
              <ShareButtons url={`${SITE_URL}/reviews`} text={`Miracle Websoft: rated ${stats.average.toFixed(1)}/5 by ${stats.count} Shopify clients`} contentType="reviews" size="sm" />
            </div>
          </aside>

          <div>
            <div className="rv-toolbar">
              <div className="rv-chips" role="group" aria-label="Filter by source">
                <Link href={qs({ source: undefined, page: undefined })} className={`rv-chip${!source ? ' is-active' : ''}`} scroll={false}>All</Link>
                <Link href={qs({ source: 'upwork', page: undefined })} className={`rv-chip${source === 'upwork' ? ' is-active' : ''}`} scroll={false}>Upwork</Link>
                <Link href={qs({ source: 'website', page: undefined })} className={`rv-chip${source === 'website' ? ' is-active' : ''}`} scroll={false}>Website</Link>
                {activeRating && (
                  <Link href={qs({ rating: undefined, page: undefined })} className="rv-chip is-active" scroll={false}>{activeRating}-star ✕</Link>
                )}
              </div>
              <div className="rv-chips" role="group" aria-label="Sort">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>Sort:</span>
                <Link href={qs({ sort: undefined, page: undefined })} className={`rv-chip${sort === 'recent' ? ' is-active' : ''}`} scroll={false}>Most recent</Link>
                <Link href={qs({ sort: 'highest', page: undefined })} className={`rv-chip${sort === 'highest' ? ' is-active' : ''}`} scroll={false}>Highest</Link>
                <Link href={qs({ sort: 'lowest', page: undefined })} className={`rv-chip${sort === 'lowest' ? ' is-active' : ''}`} scroll={false}>Lowest</Link>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', margin: '0 0 1rem' }}>
              Showing {visible.length ? (page - 1) * PAGE_SIZE + 1 : 0}–{(page - 1) * PAGE_SIZE + visible.length} of {list.length} review{list.length === 1 ? '' : 's'}
            </p>

            {visible.length === 0 ? (
              <div className="rv-card" style={{ textAlign: 'center' }}>
                <p>No reviews match this filter yet.</p>
                <Link href="/reviews" className="rv-link">Show all reviews</Link>
              </div>
            ) : (
              <div className="rv-list">
                {visible.map(r => <ReviewCard key={r.slug} review={r} />)}
              </div>
            )}

            {pages > 1 && (
              <nav className="rv-pager" aria-label="Review pages">
                {page > 1 && <Link href={qs({ page: page > 2 ? String(page - 1) : undefined })} className="rv-chip">← Previous</Link>}
                <span style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>Page {page} of {pages}</span>
                {page < pages && <Link href={qs({ page: String(page + 1) })} className="rv-chip">Next →</Link>}
              </nav>
            )}
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">On camera</p>
          <h2 style={{ maxWidth: '22ch', marginBottom: '2rem' }}>Hear it from clients, and from Karam.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">
            <VideoTestimonialGrid videos={clientVideos.slice(0, 3)} />
            <FounderIntro variant="compact" caption="A 60-second intro from Karam, who leads every project." />
          </div>
          {clientVideos.length > 3 && (
            <div className="mt-5">
              <VideoTestimonialGrid videos={clientVideos.slice(3)} />
            </div>
          )}
        </div>
      </section>

      <FaqSection faqs={reviewFaqs} heading="About these reviews" />

      <section style={{ paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>See what we&apos;d fix on your store.</h2>
              <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>
                Send your URL and get a free 5-minute video teardown within 48 hours, ranked by what each fix is likely worth.
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
