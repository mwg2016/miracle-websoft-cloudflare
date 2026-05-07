import type { Metadata } from 'next'
import { jobs } from '@/data/jobs'
import WorkList from '@/components/work/WorkList'
import { outboundHref } from '@/lib/outbound'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')

export const metadata: Metadata = {
  title: 'Verified Shopify Work History — 600+ Projects | Miracle Websoft',
  description:
    'Browse 600+ verified Shopify projects by Miracle Websoft on Upwork. Store builds, migrations, Shopify Plus checkout, custom features, speed & CRO — all delivered with a 99% job success score.',
  openGraph: {
    title: 'Verified Shopify Work History — 600+ Projects | Miracle Websoft',
    description: '600+ Shopify projects verified on Upwork. 99% Job Success · Top Rated Plus · Shopify Verified Partner.',
  },
}

// AEO / structured data
function JsonLd() {
  const fiveStarJobs = jobs.filter(j => j.rating === 5 && j.review)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Shopify Development Projects by Miracle Websoft',
        description: 'Verified work history of 600+ Shopify projects completed by Karam S. at Miracle Websoft, as listed on Upwork.',
        numberOfItems: jobs.length,
        itemListElement: jobs.map((job, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: job.title,
          description: job.description,
        })),
      },
      {
        '@type': 'LocalBusiness',
        name: 'Miracle Websoft',
        description: 'Shopify development agency specialising in fashion and ecommerce brands. 600+ projects, 99% job success, Top Rated Plus on Upwork.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: fiveStarJobs.length.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        review: fiveStarJobs.slice(0, 5).map(job => ({
          '@type': 'Review',
          reviewBody: job.review,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: job.rating.toString(),
            bestRating: '5',
          },
          datePublished: job.completedDate,
          author: { '@type': 'Person', name: 'Verified Upwork Client' },
        })),
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

const CLIENT_INSIGHTS = [
  { label: 'Committed to Quality', score: 98 },
  { label: 'Collaborative',        score: 88 },
  { label: 'Reliable',             score: 79 },
  { label: 'Clear Communicator',   score: 75 },
  { label: 'Solution Oriented',    score: 33 },
  { label: 'Detail Oriented',      score: 16 },
]

export default function WorkPage() {
  return (
    <>
      <JsonLd />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.10) 0%, transparent 70%)' }} />
          <div className="mw-container relative z-10">

            {/* Upwork verified badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.25)' }}>
              <span style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                All Projects Verified on Upwork
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem', maxWidth: '700px' }}>
              600+ Shopify Projects.<br />
              <span style={{ color: 'var(--accent)' }}>All Verified. All Real.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem,2vw,1.15rem)', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              A verified work history of Shopify store builds, migrations, custom features, Shopify Plus development, and ongoing support engagements — all completed through Upwork with a 99% job success score.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { value: '600+', label: 'Projects Delivered' },
                { value: '99%',  label: 'Job Success Score' },
                { value: '10+',  label: 'Years Experience' },
                { value: '5.0',  label: 'Avg. Client Rating' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Upwork badges + profile link */}
            <div className="flex flex-wrap items-center gap-3">
              {['Top Rated Plus', 'Officially Shopify Verified Partner', '17,773 Hours Logged'].map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span> {badge}
                </span>
              ))}
              <a
                href={UPWORK_FREELANCER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all"
                style={{ background: 'rgba(20,189,125,0.12)', border: '1px solid rgba(20,189,125,0.30)', fontSize: '0.78rem', fontWeight: 600, color: '#14BD7D', textDecoration: 'none' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.439-5.439-5.439z"/></svg>
                View Full Profile on Upwork
              </a>
            </div>
          </div>
        </section>

        {/* Client Insights from Upwork */}
        <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Insights from completed jobs — voted by clients on Upwork
            </p>
            <div className="flex flex-wrap gap-3">
              {CLIENT_INSIGHTS.map(({ label, score }) => (
                <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ position: 'relative', width: 36, height: 36 }}>
                    <svg viewBox="0 0 36 36" width="36" height="36" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                      <circle
                        cx="18" cy="18" r="15" fill="none"
                        stroke="var(--accent)" strokeWidth="3"
                        strokeDasharray={`${(score / 100) * 94.2} 94.2`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, color: '#fff' }}>
                      {score}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job list with filter */}
        <section style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
          <div className="mw-container">
            <WorkList />
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ paddingBottom: '6rem' }}>
          <div className="mw-container">
            <div className="rounded-3xl p-8 sm:p-12 text-center" style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.20)' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem' }}>
                Ready to be the next success story?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Join 600+ brands who trusted Miracle Websoft with their Shopify store. Book a free 30-minute strategy call — no commitment required.
              </p>
              <a href="/contact" className="mw-btn-primary inline-flex text-sm px-8 py-4">
                Book Your Free Strategy Call →
              </a>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem', marginBottom: '1.25rem' }}>
                99% Job Success · Top Rated Plus on Upwork · Response within 4–8 hrs
              </p>
              <a
                href={UPWORK_FREELANCER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ fontSize: '0.75rem', color: '#14BD7D', textDecoration: 'none', fontWeight: 500 }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.439-5.439-5.439z"/></svg>
                See all 600+ jobs on my Upwork profile →
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
