import type { Metadata } from 'next'
import Link from 'next/link'
import AuditForm from '@/components/landing/AuditForm'
import FaqSection from '@/components/ui/FaqSection'
import { jobs, jobTitle } from '@/data/jobs'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Free Shopify Store Audit (Video Teardown in 48h) | Miracle Websoft',
  description:
    'Send your Shopify store URL and get a free 5-minute video teardown within 48 hours: speed, product page, cart and checkout issues, ranked by revenue impact.',
  alternates: { canonical: 'https://miraclewebsoft.com/free-store-audit' },
  openGraph: {
    title: 'Free Shopify Store Audit: a 5-minute video teardown in 48 hours',
    description: 'Speed, product page, cart and checkout issues, ranked by revenue impact. No call needed.',
    url: 'https://miraclewebsoft.com/free-store-audit',
    type: 'website',
  },
}

const checks = [
  { area: 'Speed', items: ['Mobile load time on home, collection and product pages', 'Apps and scripts loading where they aren’t needed', 'Image weight and above-the-fold rendering'] },
  { area: 'Product page', items: ['Is add to cart visible without scrolling?', 'Sizing, delivery and returns answered on the page', 'Reviews, trust and photography doing their job'] },
  { area: 'Cart & checkout', items: ['Shipping costs and thresholds surfaced early', 'Upsells that help, not distract', 'Checkout friction and payment options'] },
  { area: 'Navigation & search', items: ['Can shoppers find a product in two taps?', 'Collection filters and sorting', 'Search results quality'] },
]

const faqs = [
  { question: 'Is it really free?', answer: 'Yes. It takes us about 20 minutes per store and it’s the clearest way to show how we think. Some people fix everything themselves; some ask us to do it. Either is fine.' },
  { question: 'Do I need to get on a call?', answer: 'No. You get a recorded video and a short written list. If you want to talk it through afterwards, you can book a call, but nobody will chase you.' },
  { question: 'Do you need access to my Shopify admin?', answer: 'No. We review your store the way a shopper sees it, using public speed tools. If you later want a deeper audit with analytics access, we’ll ask then.' },
  { question: 'What kind of stores is this for?', answer: 'Any live Shopify store. It’s most useful for brands already getting traffic, from a few hundred visits a month up to Shopify Plus, who feel the store should be converting better.' },
  { question: 'How fast will I get it?', answer: 'Within 48 hours on working days, usually sooner. Requests are handled in order, and in the BFCM rush it may take the full 48 hours.' },
  { question: 'What if my store isn’t on Shopify?', answer: 'Send it anyway. If you’re on WooCommerce, Wix, BigCommerce or Squarespace, we’ll include what moving to Shopify would fix and what it would cost.' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Free Shopify Store Audit — Miracle Websoft',
    description: 'A free 5-minute video teardown of your Shopify store within 48 hours.',
    url: 'https://miraclewebsoft.com/free-store-audit',
  }),
  breadcrumb([{ name: 'Home', url: '/' }, { name: 'Free store audit', url: '/free-store-audit' }]),
])

export default function FreeStoreAuditPage() {
  const reviews = jobs.filter(j => j.review && j.rating === 5 && j.review.length > 60).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Free Shopify store audit</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
              A 5-minute video of everything <span className="mw-mark">costing you orders.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '46ch' }}>
              Send your store URL. Within 48 hours you get a screen recording of us going through your store on a phone, plus the fixes ranked by how much each one is likely worth.
            </p>
            <dl className="audit-facts">
              <div><dt>Turnaround</dt><dd>48 hours</dd></div>
              <div><dt>Format</dt><dd>Video + list</dd></div>
              <div><dt>Cost</dt><dd>Free</dd></div>
            </dl>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', marginTop: '1.5rem' }}>
              Recorded by the team behind 700+ projects. 4.9 on Clutch, Top Rated Plus on Upwork.
            </p>
          </div>
          <div className="audit-form-card" id="request">
            <p className="mw-num" style={{ marginBottom: '1.25rem' }}>REQUEST YOUR TEARDOWN</p>
            <AuditForm source="audit-page" />
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">What we look at</p>
          <h2 style={{ maxWidth: '20ch', marginBottom: '3rem' }}>The same checklist we use on paid CRO projects.</h2>
          <div className="audit-checks">
            {checks.map(c => (
              <div key={c.area}>
                <h3>{c.area}</h3>
                <ul>{c.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">From store owners we&apos;ve worked with</p>
          <div className="reviews" style={{ marginTop: '1.5rem' }}>
            {reviews.map(r => (
              <figure key={r.id} className="review">
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{r.review}”</blockquote>
                <figcaption>
                  <span className="review-project">{jobTitle(r)}</span>
                  <span className="mw-num">Upwork · {r.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="Before you send your URL" />

      <section className="mw-ink" style={{ padding: '4.5rem 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '18ch' }}>Find out what to fix first. It&apos;s free.</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="#request" className="mw-btn-accent">Request my teardown</Link>
            <Link href="/book" className="mw-btn-outline">Or book a call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
