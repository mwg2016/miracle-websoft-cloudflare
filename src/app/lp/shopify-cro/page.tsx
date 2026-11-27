import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import StickyTabs from './StickyTabs'
import LpStickyCta from './LpStickyCta'
import { clientVideos, founderIntro } from '@/data/videos'
import { jobs, jobTitle } from '@/data/jobs'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO Services | Miracle Websoft',
  description:
    'Turn more Shopify traffic into orders with conversion analysis, product page improvements, cart and checkout fixes, speed optimization and testing.',
  alternates: { canonical: 'https://miraclewebsoft.com/lp/shopify-cro' },
  // Paid-ads landing page: noindex so it doesn't compete with /services/conversion-rate-optimization.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Shopify CRO Services | Miracle Websoft',
    description:
      'Turn more Shopify traffic into orders with conversion analysis, product page improvements, cart and checkout fixes, speed optimization and testing.',
    url: 'https://miraclewebsoft.com/lp/shopify-cro',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What exactly is Shopify CRO, and how is it different from speed optimization?',
    answer:
      'CRO (conversion rate optimization) is redesigning, restructuring and testing parts of your store so more visitors buy. Speed is one part of it: faster pages convert better. CRO also covers product page layout, copy, trust signals, cart and checkout UX, mobile experience, search, filters, recovery flows and analytics. We do both, together.',
  },
  {
    question: 'How much can my conversion rate improve?',
    answer:
      'It depends on where your store starts and how much traffic it gets, so we don’t quote a number before we’ve looked. The free review tells you what’s realistic for your store before you commit a dollar.',
  },
  {
    question: 'Is the review really free? What do I get?',
    answer:
      'Yes, free and no card. You get your speed and Core Web Vitals picture, the biggest conversion blockers we found, mobile vs desktop UX issues, product page gaps, checkout friction, missing trust signals, and a prioritized list of fixes. Delivered within 48 hours.',
  },
  {
    question: 'How long until I see results?',
    answer:
      'Speed fixes and quick UX wins usually ship in the first week or two, and you can see the change in PageSpeed and add-to-cart rate. Bigger programs run around 90 days with ongoing tests and regular reporting.',
  },
  {
    question: 'Will I need to rebuild my whole Shopify store?',
    answer:
      'Usually not. We work on your existing theme: removing bloat, reworking product pages, fixing checkout, deferring scripts and swapping heavy apps. A rebuild only makes sense if the theme is fundamentally broken or you’re also rebranding.',
  },
  {
    question: 'Do you work with Shopify Plus stores?',
    answer:
      'Yes. We’re a Shopify Partner and have worked on Shopify Plus stores, including checkout extensions, B2B setups and Shopify Functions. Plus-specific upgrades come into the recommendations when they’re relevant.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Fixed-price quotes, no hourly billing. We scope and price your exact work after the free review, in writing, before anything starts.',
  },
  {
    question: 'Why Miracle Websoft over a generic agency?',
    answer:
      'We’ve been building on Shopify since 2016: 700+ projects, an in-house team in India and Top Rated Plus on Upwork with 99% job success. We don’t outsource, and the person who scopes your project stays on it.',
  },
]

const fixes = [
  { title: 'Speed & Core Web Vitals', desc: 'Image weight, script deferral, critical CSS and app cleanup, so mobile pages load before shoppers give up.' },
  { title: 'Product pages', desc: 'Layout, gallery, sticky add to cart, size guides, delivery and returns answered on the page, reviews where they help.' },
  { title: 'Cart & checkout', desc: 'Drawer cart, sensible upsells, Apple / Google / Shop Pay, shipping thresholds shown early, less friction.' },
  { title: 'Mobile UX', desc: 'Most of your traffic is on a phone. Navigation, product pages and checkout designed for thumbs first.' },
  { title: 'Search, filters & collections', desc: 'Predictive search, faceted filters and sorting that help shoppers find a product in two taps.' },
  { title: 'A/B testing & analytics', desc: 'GA4 and testing tools set up properly, so decisions are made on revenue, not opinions.' },
  { title: 'Recovery flows', desc: 'Abandoned cart, browse abandonment and win-back flows in Klaviyo or your email platform.' },
  { title: 'App stack cleanup', desc: 'Every app audited. Dead weight removed, heavy ones replaced with lean custom code where it pays off.' },
]

const process = [
  { week: 'Day 1–2', phase: 'Free review', deliverable: 'Speed + CRO review of your store with prioritized fixes' },
  { week: 'Week 1', phase: 'Quick wins', deliverable: 'Image compression, app cleanup, script deferral, critical CSS' },
  { week: 'Week 2–3', phase: 'Product pages', deliverable: 'Layout, copy, trust, sticky add to cart, social proof' },
  { week: 'Week 3–4', phase: 'Cart & checkout', deliverable: 'Drawer cart, upsells, payment methods, address autocomplete' },
  { week: 'Week 4–6', phase: 'Mobile + collections', deliverable: 'Mobile UX pass, search, filters and sorting' },
  { week: 'Week 6–8', phase: 'Recovery flows', deliverable: 'Abandoned cart, browse abandonment and win-back flows' },
  { week: 'Week 8–12', phase: 'Test & iterate', deliverable: 'A/B tests, monthly reporting, ongoing optimization' },
]

const navTabs = [
  { id: 'what-we-fix', label: 'What we fix' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'founder', label: 'Who you work with' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify CRO Services',
    description:
      'Conversion rate optimization for Shopify and Shopify Plus stores. Speed, PDP, cart, checkout, mobile, A/B testing and recovery flows.',
    url: '/lp/shopify-cro',
    serviceType: 'Conversion rate optimization',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Shopify CRO Services', url: '/lp/shopify-cro' },
  ]),
  faqPage(faqs),
])

// Paid landing page: keep the visitor on this page. Hides the site-wide promo bar, the desktop nav
// and the site-wide sticky CTA (this page has its own, pointing at the form below).
const css = `
.hdr-promo, .hdr nav[aria-label="Main"], .sticky-cta:not(.lp-sticky) { display: none !important; }
.lp-facts { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 2.25rem; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); max-width: 34rem; }
.lp-facts div { padding: 1rem 0; }
.lp-facts div + div { padding-left: 1.25rem; border-left: 1px solid var(--border); }
.lp-facts dt { font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
.lp-facts dd { font-family: var(--font-playfair); font-size: clamp(1.4rem, 2.4vw, 1.9rem); color: var(--text-1); margin-top: 0.2rem; }
.lp-fixes { display: grid; grid-template-columns: 1fr 1fr; column-gap: 3rem; border-top: 1px solid var(--text-1); }
.lp-fixes li { display: grid; grid-template-columns: 2.5rem 1fr; padding: 1.4rem 0; border-bottom: 1px solid var(--border); }
.lp-fixes h3 { font-size: 1.1rem; margin-bottom: 0.35rem; }
.lp-fixes p { font-size: 0.95rem; }
@media (max-width: 760px) { .lp-fixes { grid-template-columns: 1fr; } }
.lp-table { border-top: 1px solid var(--text-1); }
.lp-table li { display: grid; grid-template-columns: 8rem 13rem 1fr; gap: 0.25rem 1.5rem; padding: 1.1rem 0; border-bottom: 1px solid var(--border); align-items: baseline; }
.lp-table .w { font-family: var(--font-geist-mono); font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-3); }
.lp-table .p { font-weight: 600; color: var(--text-1); }
.lp-table .d { color: var(--text-2); font-size: 0.95rem; }
@media (max-width: 700px) { .lp-table li { grid-template-columns: 1fr; } }
`

export default function ShopifyCROLandingPage() {
  const cro = jobs.filter(j => j.review && j.rating === 5 && j.review.length > 60)
  const reviews = [...cro.filter(j => j.category === 'Speed & CRO'), ...cro.filter(j => j.category !== 'Speed & CRO')].slice(0, 6)

  return (
    <div className="lp-cro">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{css}</style>

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Shopify conversion rate optimization</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
              Turn the traffic you already pay for into <span className="mw-mark">more orders.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>
              We find where your Shopify store loses buyers (slow mobile pages, product pages that don’t answer the question,
              a clumsy checkout) and fix them in order of how much they’re costing you. Fixed prices, no hourly billing.
            </p>
            <div className="flex flex-wrap gap-3 items-center" style={{ marginTop: '2rem' }}>
              <a href="#lead-form" className="mw-btn-accent">Get my free CRO review <ArrowRight size={16} /></a>
              <a href="#process" className="mw-btn-outline">See the process</a>
            </div>
            <dl className="lp-facts">
              <div><dt>Since</dt><dd>2016</dd></div>
              <div><dt>Projects</dt><dd>700+</dd></div>
              <div><dt>Upwork</dt><dd>$600K+</dd></div>
            </dl>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', marginTop: '1.25rem' }}>
              Top Rated Plus on Upwork · 99% founder job success · Shopify Partner
            </p>
          </div>

          <div id="lead-form" className="audit-form-card" style={{ scrollMarginTop: '7rem' }}>
            <p className="mw-num" style={{ marginBottom: '1.25rem' }}>FREE · NO CARD · 48 HOURS</p>
            <ServiceContactForm
              service="Shopify CRO (Google Ads LP)"
              heading="Get your free Shopify CRO review"
              subtext="Tell us about your store. Within 48 hours you get a speed + CRO review with the fixes ranked by impact. No obligation, no card."
              buttonLabel="Get my free CRO review"
            />
          </div>
        </div>
      </section>

      <StickyTabs tabs={navTabs} cta={{ href: '#lead-form', label: 'Get my free review' }} />

      {/* ─── WHAT WE FIX ─────────────────────────────────────────────────── */}
      <section id="what-we-fix" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">What we fix</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>CRO isn’t one fix. It’s eight, shipped in the right order.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '58ch' }}>
              The free review tells you which of these matter most for your store, so the first week of work goes where the money is.
            </p>
          </div>
          <ol className="lp-fixes">
            {fixes.map((f, i) => (
              <li key={f.title}>
                <span className="mw-num" style={{ paddingTop: '0.3rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3" style={{ marginTop: '2.5rem' }}>
            <a href="#lead-form" className="mw-btn-accent">Find out what to fix first <ArrowRight size={16} /></a>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-3)' }}>Free, within 48 hours, no sales pressure.</span>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─────────────────────────────────────────────────────── */}
      <section id="reviews" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">Verified Upwork reviews</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>What store owners say after the work ships.</h2>
          </div>
          <div className="reviews">
            {reviews.map(r => (
              <figure key={r.id} className="review">
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{r.review}”</blockquote>
                <figcaption>
                  <span className="review-project">{jobTitle(r)}</span>
                  <span className="mw-num">{r.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <h3 style={{ fontSize: '1.15rem', margin: '4rem 0 1.25rem' }}>On camera, unscripted</h3>
          <VideoTestimonialGrid videos={clientVideos} />
        </div>
      </section>

      {/* ─── FOUNDER ─────────────────────────────────────────────────────── */}
      <section id="founder" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <YouTubeEmbed videoId={founderIntro.videoId} title={founderIntro.title} aspect="16/9" rounded="8px" />
            <p className="mw-num" style={{ marginTop: '0.75rem' }}>Karam’s 60-second intro</p>
          </div>
          <div>
            <p className="mw-eyebrow">Who you work with</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', maxWidth: '16ch' }}>The person who scopes your project stays on it.</h2>
            <div className="founder-card" style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.02rem' }}>
                Karam Singh Mehra founded Miracle Websoft in 2016 and leads every CRO engagement with the in-house team.
                No sales loop, no junior hand-off. You email him, you get him.
              </p>
              <a href="#lead-form" className="mw-btn-primary" style={{ marginTop: '1.5rem' }}>
                Start with the free review <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────────────── */}
      <section id="process" className="mw-section" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">A typical 90-day program</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>Week by week, in writing, before we start.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '58ch' }}>
              Your plan is built from the free review, so the order changes store to store. This is the usual shape.
            </p>
          </div>
          <ol className="lp-table">
            {process.map(p => (
              <li key={p.phase}>
                <span className="w">{p.week}</span>
                <span className="p">{p.phase}</span>
                <span className="d">{p.deliverable}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="mw-eyebrow">Frequently asked</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', maxWidth: '12ch' }}>Before you ask for the review.</h2>
          </div>
          <FaqAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="mw-ink" style={{ padding: 'clamp(4.5rem, 8vw, 6rem) 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', maxWidth: '18ch' }}>Find out what your store is leaking. It’s free.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '52ch' }}>A speed + CRO review within 48 hours, with every fix ranked by impact. Fixed-price quote if you want us to do the work.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="#lead-form" className="mw-btn-accent">Get my free CRO review <ArrowRight size={16} /></a>
            <Link href="/book" className="mw-btn-outline">Or book a 15-min call</Link>
          </div>
        </div>
      </section>

      <LpStickyCta />
    </div>
  )
}
