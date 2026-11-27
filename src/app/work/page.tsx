import type { Metadata } from 'next'
import { jobs, jobTitle } from '@/data/jobs'
import WorkList from '@/components/work/WorkList'
import { outboundHref } from '@/lib/outbound'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')

export const metadata: Metadata = {
  title: 'Verified Shopify Work History — 700+ Projects | Miracle Websoft',
  description:
    'Browse 700+ verified projects by Miracle Websoft on Upwork. Store builds, migrations, Shopify Plus checkout, custom features, speed & CRO — all delivered with a 98% job success score.',
  openGraph: {
    title: 'Verified Shopify Work History — 700+ Projects | Miracle Websoft',
    description: '700+ projects verified on Upwork. 98% Job Success · Top Rated Plus · Shopify Verified Partner.',
    url: 'https://miraclewebsoft.com/work',
    type: 'website',
  },
  alternates: { canonical: 'https://miraclewebsoft.com/work' },
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
        description: 'Verified work history of 700+ projects completed by Karam S. at Miracle Websoft, as listed on Upwork.',
        numberOfItems: jobs.length,
        itemListElement: jobs.map((job, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: jobTitle(job),
          description: job.description,
          url: `https://miraclewebsoft.com/work/${job.id}`,
        })),
      },
      {
        '@type': 'Organization',
        '@id': 'https://miraclewebsoft.com/#organization',
        name: 'Miracle Websoft',
        description: 'Shopify development agency specialising in fashion and ecommerce brands. 700+ projects, 98% job success, Top Rated Plus on Upwork.',
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
  const reviewed = jobs.filter(j => j.review).length
  return (
    <>
      <JsonLd />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '3.5rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Work' }]} /></div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">Work history · from Upwork</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '16ch' }}>
                The project log, <span className="mw-mark">not a highlight reel.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '54ch' }}>
                {`${jobs.length} Shopify jobs from our Upwork history: store builds, redesigns, migrations, Shopify Plus work, custom features and ongoing support. ${reviewed} of them carry the client’s written review.`}
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'var(--text-3)' }}>
                Top Rated Plus · Shopify Partner ·{' '}
                <a href={UPWORK_FREELANCER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Check the Upwork profile <ArrowUpRight size={13} />
                </a>
              </p>
            </div>
            <dl className="stats">
              <div><dt>Projects since 2016</dt><dd>700+</dd></div>
              <div><dt>Upwork job success</dt><dd>98%</dd></div>
              <div><dt>Hours delivered</dt><dd>15,000+</dd></div>
              <div><dt>Listed on this page</dt><dd>{jobs.length}</dd></div>
            </dl>
          </div>
          <p className="mw-num" style={{ marginTop: '2.5rem', lineHeight: 1.9 }}>
            CLIENT VOTES ON UPWORK:&nbsp; {CLIENT_INSIGHTS.map(c => `${c.label} ${c.score}`).join('  ·  ')}
          </p>
        </div>
      </section>

      <section style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
        <div className="mw-container">
          <WorkList />
        </div>
      </section>

      <section style={{ paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>Want your store looked at next?</h2>
              <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>Send your URL for a free 5-minute video teardown within 48 hours, or book a 15-minute call with Karam.</p>
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
