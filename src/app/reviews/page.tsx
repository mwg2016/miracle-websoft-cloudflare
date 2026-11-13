import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { jobs, jobTitle } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import FounderIntro from '@/components/ui/FounderIntro'
import { clientVideos } from '@/data/videos'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')

export const metadata: Metadata = {
  title: 'Client Reviews — 23 Verified Shopify Developer Reviews | Miracle Websoft',
  description:
    'Read verified client reviews for Miracle Websoft on Upwork. 23 reviews from Shopify store owners, unedited and linked to each project. 98% Job Success Score on Upwork.',
  openGraph: {
    title: 'Verified Client Reviews — Miracle Websoft Shopify Developer',
    description: '23 verified Upwork reviews from real Shopify store owners. Read what clients say about working with Karam Singh at Miracle Websoft.',
    url: 'https://miraclewebsoft.com/reviews',
    type: 'website',
  },
  alternates: {
    canonical: 'https://miraclewebsoft.com/reviews',
  },
}

// Pull all jobs that have a review
const reviewedJobs = jobs.filter(j => j.review && j.rating >= 4.0)

// Aggregate rating stats
const avgRating = (reviewedJobs.reduce((s, j) => s + j.rating, 0) / reviewedJobs.length).toFixed(2)
const fiveStarCount = reviewedJobs.filter(j => j.rating === 5.0).length

function JsonLd() {
  const schema = [
    // AggregateRating on the business
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Miracle Websoft',
      description: 'Shopify development agency by Karam Singh. 650+ projects, 98% job success, Top Rated Plus on Upwork.',
      url: 'https://miraclewebsoft.com',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating,
        reviewCount: reviewedJobs.length.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviewedJobs.map(job => ({
        '@type': 'Review',
        reviewBody: job.review,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: job.rating.toString(),
          bestRating: '5',
        },
        datePublished: job.completedDate,
        author: {
          '@type': 'Person',
          name: job.client || 'Verified Upwork Client',
        },
        itemReviewed: {
          '@type': 'Service',
          name: job.title,
          serviceType: job.category,
        },
      })),
    },
    // FAQPage for AEO
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What do clients say about Miracle Websoft?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Clients consistently praise Miracle Websoft for quality, communication, and speed. The agency has ${reviewedJobs.length} verified reviews on Upwork with an average rating of ${avgRating}/5.0 and a 98% Job Success Score.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Is Miracle Websoft verified on Upwork?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Miracle Websoft (Karam Singh) is a Top Rated Plus freelancer and Officially Shopify Verified Partner on Upwork, with 650+ completed projects and 15,000+ hours delivered.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many 5-star reviews does Miracle Websoft have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Miracle Websoft has ${fiveStarCount} five-star reviews out of ${reviewedJobs.length} total verified reviews on Upwork, giving an average rating of ${avgRating} out of 5.`,
          },
        },
      ],
    },
    // BreadcrumbList
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://miraclewebsoft.com' },
        { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://miraclewebsoft.com/reviews' },
      ],
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating)
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(full)}<span style={{ color: 'var(--border-hover)' }}>{'★'.repeat(5 - full)}</span>
    </div>
  )
}

export default function ReviewsPage() {
  const [lead] = [...reviewedJobs].sort((a, b) => (b.rating - a.rating) || ((b.review?.length ?? 0) - (a.review?.length ?? 0)))
  const ordered = reviewedJobs.filter(j => j.id !== lead.id)

  const categoryReviews: Record<string, number> = {}
  reviewedJobs.forEach(j => {
    categoryReviews[j.category] = (categoryReviews[j.category] || 0) + 1
  })

  return (
    <>
      <JsonLd />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Reviews' }]} /></div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">Client reviews · verified on Upwork</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '16ch' }}>
                What store owners said <span className="mw-mark">after the job was done.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '52ch' }}>
                {reviewedJobs.length} reviews left on Upwork by clients once their project closed. Every one is shown here, unedited, linked to the project it was left on.
              </p>
            </div>
            <dl className="stats">
              <div><dt>Average rating</dt><dd>{avgRating}</dd></div>
              <div><dt>Reviews on this page</dt><dd>{reviewedJobs.length}</dd></div>
              <div><dt>Five-star</dt><dd>{fiveStarCount}</dd></div>
              <div><dt>Upwork job success</dt><dd>98%</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <figure style={{ maxWidth: '60rem' }}>
            <Stars rating={lead.rating} />
            <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)', lineHeight: 1.25, letterSpacing: '-0.02em', color: 'var(--text-1)', marginTop: '1.25rem' }}>
              &ldquo;{lead.review}&rdquo;
            </blockquote>
            <figcaption style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem', alignItems: 'baseline' }}>
              <Link href={`/work/${lead.id}`} className="review-project" style={{ fontSize: '0.95rem' }}>{jobTitle(lead)}</Link>
              <span className="mw-num">Upwork · {lead.completedDate}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: '2rem' }}>
            <div>
              <p className="mw-eyebrow">All {reviewedJobs.length} reviews</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>Every review, by project.</h2>
            </div>
            <p className="mw-num" style={{ maxWidth: '40rem', lineHeight: 1.8 }}>
              {Object.entries(categoryReviews).sort((a, b) => b[1] - a[1]).map(([c, n]) => `${c} ${n}`).join('  ·  ')}
            </p>
          </div>
          <div className="reviews">
            {ordered.map(job => (
              <figure key={job.id} className="review">
                <div className="flex items-center justify-between gap-3">
                  <Stars rating={job.rating} />
                  <span className="mw-num">{job.category}</span>
                </div>
                <blockquote style={{ fontSize: '1.1rem' }}>&ldquo;{job.review}&rdquo;</blockquote>
                <figcaption>
                  <Link href={`/work/${job.id}`} className="review-project">{jobTitle(job)}</Link>
                  <span className="mw-num" style={{ whiteSpace: 'nowrap' }}>{job.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--text-3)' }}>
            Want to check them at the source?{' '}
            <a href={UPWORK_FREELANCER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: 'var(--text-1)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              See the full Upwork profile <ArrowUpRight size={14} />
            </a>
          </p>
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
