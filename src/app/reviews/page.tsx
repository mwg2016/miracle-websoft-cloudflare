import type { Metadata } from 'next'
import Link from 'next/link'
import { jobs } from '@/data/jobs'

export const metadata: Metadata = {
  title: 'Client Reviews — 23 Verified Shopify Developer Reviews | Miracle Websoft',
  description:
    'Read verified client reviews for Miracle Websoft on Upwork. 23 five-star reviews from real Shopify store owners praising quality, speed, communication, and results. 99% Job Success Score.',
  openGraph: {
    title: 'Verified Client Reviews — Miracle Websoft Shopify Developer',
    description: '23 verified five-star Upwork reviews from real Shopify store owners. Read what clients say about working with Karam Singh at Miracle Websoft.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://miraclewebsoft.com/reviews',
  },
}

// Pull all jobs that have a review
const reviewedJobs = jobs.filter(j => j.review && j.rating >= 4.0)

const CATEGORY_COLORS: Record<string, string> = {
  'Store Development': '#6C63FF',
  'Store Redesign':    '#8B5CF6',
  'Migration':         '#10B981',
  'Custom Features':   '#3B82F6',
  'Shopify Plus':      '#F59E0B',
  'Speed & CRO':       '#EF4444',
  'Design & Figma':    '#EC4899',
  'Ongoing Support':   '#06B6D4',
}

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
      description: 'Shopify development agency by Karam Singh. 600+ verified projects, 99% job success, Top Rated Plus on Upwork.',
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
            text: `Clients consistently praise Miracle Websoft for quality, communication, and speed. The agency has ${reviewedJobs.length} verified reviews on Upwork with an average rating of ${avgRating}/5.0 and a 99% Job Success Score.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Is Miracle Websoft verified on Upwork?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Miracle Websoft (Karam Singh) is a Top Rated Plus freelancer and Officially Shopify Verified Partner on Upwork, with 600+ completed projects and 17,773+ hours logged.',
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

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const full = Math.floor(rating)
  const fontSize = size === 'lg' ? '1.2rem' : '0.85rem'
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < full ? '#F59E0B' : 'rgba(255,255,255,0.15)', fontSize }}> ★</span>
      ))}
    </div>
  )
}

// Highlight key phrases in review text
function ReviewText({ text }: { text: string }) {
  return <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontStyle: 'italic' }}>"{text}"</p>
}

export default function ReviewsPage() {
  // Pick 3 featured reviews (long, glowing, 5-star)
  const featured = reviewedJobs
    .filter(j => j.rating === 5.0 && j.review && j.review.length > 60)
    .slice(0, 3)

  // Category breakdown
  const categoryReviews: Record<string, number> = {}
  reviewedJobs.forEach(j => {
    categoryReviews[j.category] = (categoryReviews[j.category] || 0) + 1
  })

  return (
    <>
      <JsonLd />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: '7rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
          />
          <div className="mw-container relative z-10">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Reviews</span>
            </nav>

            {/* Upwork badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(20,189,125,0.10)', border: '1px solid rgba(20,189,125,0.25)' }}
            >
              <span style={{ color: '#14BD7D', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                All Reviews Verified on Upwork
              </span>
            </div>

            <h1
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem', maxWidth: '700px' }}
            >
              What Clients Say About<br />
              <span style={{ color: '#F59E0B' }}>Miracle Websoft</span>
            </h1>

            <p
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem,2vw,1.15rem)', maxWidth: '560px', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}
            >
              {reviewedJobs.length} verified reviews from real Shopify store owners — left directly on Upwork after completed projects. No testimonials page, no cherry-picking. Just the real thing.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { value: avgRating, label: 'Average Rating' },
                { value: `${reviewedJobs.length}`, label: 'Verified Reviews' },
                { value: `${fiveStarCount}`, label: '5-Star Reviews' },
                { value: '99%', label: 'Job Success Score' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)', marginTop: '0.2rem' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Star display */}
            <div className="flex items-center gap-3">
              <StarRating rating={5} size="lg" />
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
                {avgRating} / 5.0 from {reviewedJobs.length} Upwork reviews
              </span>
            </div>
          </div>
        </section>

        {/* Featured Reviews — 3 cards full-width */}
        <section style={{ paddingTop: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Featured reviews
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map(job => (
                <div
                  key={job.id}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)' }}
                >
                  <StarRating rating={job.rating} />
                  <div className="mt-4 flex-1">
                    <ReviewText text={job.review!} />
                  </div>
                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.50)', fontWeight: 500 }}>
                      {job.client || 'Verified Upwork Client'}
                      {job.company && job.company !== job.client && (
                        <span style={{ color: 'rgba(255,255,255,0.25)' }}> · {job.company}</span>
                      )}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.2rem' }}>
                      {job.category} · {job.completedDate}
                    </p>
                    <Link
                      href={`/work/${job.id}`}
                      style={{ display: 'inline-block', marginTop: '0.6rem', fontSize: '0.75rem', color: '#F59E0B', textDecoration: 'none', fontWeight: 500 }}
                    >
                      View project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category breakdown bar */}
        <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Reviews by service category
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryReviews)
                .sort((a, b) => b[1] - a[1])
                .map(([cat, count]) => {
                  const color = CATEGORY_COLORS[cat] || '#6C63FF'
                  return (
                    <div
                      key={cat}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                      style={{ background: color + '10', border: `1px solid ${color}28` }}
                    >
                      <span style={{ fontSize: '0.82rem', color, fontWeight: 600 }}>{count}</span>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>{cat}</span>
                    </div>
                  )
                })}
            </div>
          </div>
        </section>

        {/* All reviews grid */}
        <section style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', fontWeight: 600, marginBottom: '1.5rem' }}>
              All {reviewedJobs.length} verified reviews
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviewedJobs.map(job => {
                const color = CATEGORY_COLORS[job.category] || '#6C63FF'
                return (
                  <div
                    key={job.id}
                    className="rounded-2xl p-5 flex flex-col"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: color + '18', color, border: `1px solid ${color}30` }}
                      >
                        {job.category}
                      </span>
                      <StarRating rating={job.rating} />
                    </div>

                    {/* Review text */}
                    <div className="flex-1 mb-4">
                      <blockquote style={{ margin: 0, padding: 0 }}>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, fontStyle: 'italic' }}>
                          "{job.review}"
                        </p>
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.50)', fontWeight: 500, marginBottom: '0.15rem' }}>
                        {job.client || 'Verified Upwork Client'}
                        {job.company && job.company !== job.client && (
                          <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400 }}> · {job.company}</span>
                        )}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', marginBottom: '0.6rem' }}>
                        {job.title} · {job.completedDate}
                      </p>
                      <div className="flex items-center justify-between">
                        <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 600, letterSpacing: '0.05em' }}>
                          ✓ VERIFIED · UPWORK
                        </span>
                        <Link
                          href={`/work/${job.id}`}
                          style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
                        >
                          Project details →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Upwork profile link */}
            <div className="mt-10 text-center">
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.40)', marginBottom: '1rem' }}>
                Want to see more? All reviews are publicly visible on Upwork.
              </p>
              <a
                href="https://www.upwork.com/freelancers/shopifydeveloperupwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all"
                style={{ background: 'rgba(20,189,125,0.10)', border: '1px solid rgba(20,189,125,0.28)', fontSize: '0.85rem', fontWeight: 600, color: '#14BD7D', textDecoration: 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.439-5.439-5.439z"/>
                </svg>
                View Full Profile on Upwork
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ paddingBottom: '6rem' }}>
          <div className="mw-container">
            <div
              className="rounded-3xl p-8 sm:p-12 text-center"
              style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.20)' }}
            >
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem' }}>
                Ready to join them?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Join 600+ store owners who trusted Miracle Websoft with their Shopify store. Book a free 30-minute strategy call — no commitment required.
              </p>
              <Link href="/contact" className="mw-btn-primary inline-flex text-sm px-8 py-4">
                Book Your Free Strategy Call →
              </Link>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.30)', marginTop: '1rem' }}>
                99% Job Success · Top Rated Plus on Upwork · Response within 4–8 hrs
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
