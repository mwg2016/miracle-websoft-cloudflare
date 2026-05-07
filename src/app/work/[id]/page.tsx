import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { jobs } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return jobs.map(job => ({ id: job.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const job = jobs.find(j => j.id === id)
  if (!job) return {}

  const title = `${job.title} — Verified Shopify Project | Miracle Websoft`
  const description = `${job.description.slice(0, 155)}…`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `https://miraclewebsoft.com/work/${id}`,
    },
  }
}

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

function StarRating({ rating }: { rating: number }) {
  if (rating === 0) return null
  const full = Math.floor(rating)
  return (
    <div className="flex items-center gap-1.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < full ? '#F59E0B' : 'rgba(255,255,255,0.15)', fontSize: '1.1rem' }}>★</span>
      ))}
      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', marginLeft: '4px', fontWeight: 600 }}>{rating.toFixed(1)} / 5.0</span>
    </div>
  )
}

function JsonLd({ job }: { job: (typeof jobs)[0] }) {
  const schema: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: job.title,
      description: job.description,
      provider: {
        '@type': 'Organization',
        name: 'Miracle Websoft',
        url: 'https://miraclewebsoft.com',
        founder: { '@type': 'Person', name: 'Karam Singh' },
      },
      serviceType: job.category,
      areaServed: 'Worldwide',
      url: `https://miraclewebsoft.com/work/${job.id}`,
    },
  ]

  if (job.review && job.rating >= 4) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'Review',
      reviewBody: job.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: job.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: job.completedDate,
      author: { '@type': 'Person', name: job.client || 'Verified Upwork Client' },
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Miracle Websoft',
        url: 'https://miraclewebsoft.com',
      },
    })
  }

  // BreadcrumbList for AEO
  schema.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://miraclewebsoft.com' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://miraclewebsoft.com/work' },
      { '@type': 'ListItem', position: 3, name: job.title, item: `https://miraclewebsoft.com/work/${job.id}` },
    ],
  })

  // FAQPage schema for AEO — common questions about this type of work
  const faqItems = [
    {
      q: `What does "${job.category}" work include?`,
      a: `${job.category} projects by Miracle Websoft include ${job.description}`,
    },
    {
      q: 'Is this project verified on Upwork?',
      a: 'Yes — all projects in this portfolio are verified engagements completed through Upwork with documented ratings and client feedback.',
    },
    {
      q: 'Can Miracle Websoft do similar work for my store?',
      a: `Yes. Karam Singh at Miracle Websoft specialises in ${job.category} and has completed 600+ verified Shopify projects. Book a free call at miraclewebsoft.com/contact.`,
    },
  ]

  schema.push({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function JobPage({ params }: Props) {
  const { id } = await params
  const job = jobs.find(j => j.id === id)
  if (!job) notFound()

  const catColor = CATEGORY_COLORS[job.category] || '#6C63FF'
  const relatedJobs = jobs
    .filter(j => j.id !== job.id && j.category === job.category && j.rating >= 4.5)
    .slice(0, 3)

  return (
    <>
      <JsonLd job={job} />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '7rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)' }} />
          <div className="mw-container relative z-10">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/work" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Work</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>{job.title}</span>
            </nav>

            {/* Category + Upwork badge */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: catColor + '18', color: catColor, border: `1px solid ${catColor}35` }}
              >
                {job.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.20)', fontSize: '0.75rem', color: '#10B981', fontWeight: 500 }}>
                <span style={{ fontWeight: 700 }}>✓</span> Verified on Upwork
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.25rem', maxWidth: '800px', lineHeight: 1.25 }}>
              {job.title}
            </h1>

            {/* Rating */}
            {job.rating > 0 && (
              <div className="mb-5">
                <StarRating rating={job.rating} />
              </div>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 mb-6" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>
                <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '0.4rem' }}>Completed</span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{job.completedDate}</span>
              </span>
              {job.client && (
                <span>
                  <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '0.4rem' }}>Client</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{job.company && job.company !== job.client ? job.company : job.client}</span>
                </span>
              )}
              {job.budget && (
                <span>
                  <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '0.4rem' }}>Engagement</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{job.budget}</span>
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span
                  key={tag}
                  style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 9999, padding: '0.25rem 0.65rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="mw-container">
            <div className="grid gap-8 lg:grid-cols-3">

              {/* Left: Description + Review */}
              <div className="lg:col-span-2">
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                  Project Overview
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '2rem' }}>
                  {job.description}
                </p>

                {job.review && (
                  <div>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                      Client Review
                    </h2>
                    <blockquote
                      className="rounded-2xl p-6"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${catColor}` }}
                    >
                      <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1rem' }}>
                        "{job.review}"
                      </p>
                      <footer style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                        — {job.client || 'Verified Upwork Client'} · {job.completedDate}
                        <span className="inline-flex items-center gap-1 ml-3" style={{ color: '#10B981' }}>
                          <span style={{ fontWeight: 700 }}>✓</span> Verified via Upwork
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                )}

                {/* What we delivered */}
                <div className="mt-8">
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                    Skills & Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-2 rounded-xl"
                        style={{ fontSize: '0.82rem', color: catColor, background: catColor + '12', border: `1px solid ${catColor}25`, fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="flex flex-col gap-5">

                {/* Verified badge card */}
                <div className="rounded-2xl p-5" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.18)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10B981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Upwork Verified</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                    This project was completed and rated by a verified Upwork client. All 600+ projects in our portfolio are verified engagements.
                  </p>
                  <a
                    href={UPWORK_FREELANCER}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '0.75rem', fontSize: '0.78rem', color: '#14BD7D', textDecoration: 'none', fontWeight: 500 }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.439-5.439-5.439z"/></svg>
                    View Upwork profile →
                  </a>
                </div>

                {/* Stats card */}
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', fontWeight: 600 }}>
                    Agency Stats
                  </p>
                  {[
                    { value: '600+', label: 'Projects Delivered' },
                    { value: '99%', label: 'Job Success Score' },
                    { value: '10+', label: 'Years Experience' },
                    { value: '5.0', label: 'Avg. Client Rating' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex items-center justify-between py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA card */}
                <div className="rounded-2xl p-5" style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.20)' }}>
                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Need similar work?</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Book a free 30-min call and we'll discuss your project.
                  </p>
                  <Link href="/contact" className="mw-btn-primary block text-center text-sm py-3">
                    Book Free Strategy Call →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {relatedJobs.length > 0 && (
          <section style={{ paddingTop: '2rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="mw-container">
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                Related Projects in {job.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedJobs.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/work/${rel.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="rounded-2xl p-5 transition-all h-full"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-3"
                        style={{ background: catColor + '18', color: catColor, border: `1px solid ${catColor}30` }}
                      >
                        {rel.category}
                      </span>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                        {rel.title}
                      </h3>
                      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
                        {rel.description.slice(0, 100)}…
                      </p>
                      <div className="flex items-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < Math.floor(rel.rating) ? '#F59E0B' : 'rgba(255,255,255,0.12)', fontSize: '0.7rem' }}>★</span>
                        ))}
                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginLeft: '2px' }}>{rel.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/work" style={{ fontSize: '0.85rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                  ← View all 600+ verified projects
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  )
}
