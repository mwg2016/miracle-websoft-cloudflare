import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Pricing — Shopify Build & Maintenance Packages | Miracle Websoft',
  description:
    'Transparent, fixed-price Shopify packages. Builds from $600. Monthly maintenance from $99/mo. Pick a plan, fill the form, and we reply within 24 hours.',
  alternates: { canonical: 'https://miraclewebsoft.com/pricing' },
  openGraph: {
    title: 'Pricing — Shopify Build & Maintenance Packages | Miracle Websoft',
    description: 'Transparent, fixed-price Shopify packages. Builds from $600. Monthly maintenance from $99/mo. Pick a plan, fill the form, and we reply within 24 hours.',
    url: 'https://miraclewebsoft.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Shopify Build & Maintenance Packages | Miracle Websoft',
    description: 'Transparent, fixed-price Shopify packages. Builds from $600. Monthly maintenance from $99/mo. Pick a plan, fill the form, and we reply within 24 hours.',
  },
}

const WHATSAPP_URL = outboundHref(
  'whatsapp',
  `https://wa.me/916239269736?text=${encodeURIComponent("Hi Karam, I'm exploring your pricing packages and have a question.")}`,
)

type Plan = {
  slug: string
  name: string
  price: string
  priceSub: string
  promise: string
  bestFor: string
  outcomes: string[]
  meta: string
  popular?: boolean
}

const buildPlans: Plan[] = [
  {
    slug: 'basic-store',
    name: 'Basic Store',
    price: '$600',
    priceSub: 'one-time · 50% to start',
    promise: 'Your store, live and selling within 7 days.',
    bestFor: 'New brands launching their first Shopify store.',
    outcomes: [
      'A premium-looking store on a properly configured theme',
      'Up to 15 products + collections set up correctly',
      'Payment, taxes, shipping zones, and checkout tested live',
      'Mobile-first layout, checked on real phones',
      'Basic SEO foundation so Google can find you from day one',
    ],
    meta: '7-day delivery · 1 revision round · 7 days post-launch support',
  },
  {
    slug: 'advanced-store',
    name: 'Advanced Store',
    price: '$1,000',
    priceSub: 'one-time · 50% to start',
    promise: "A store that doesn't just look good — it converts.",
    bestFor: 'Brands doing $5k–$50k/month who feel the site is the bottleneck.',
    outcomes: [
      'Custom-designed homepage and product page (not generic)',
      'Conversion-tuned PDP: trust signals, sizing, reviews, sticky cart',
      'Up to 30 products / OR clean migration from another platform',
      'Klaviyo or Mailchimp + welcome & abandoned-cart flows',
      'Speed pass on mobile: image weight, app scripts, above-the-fold',
    ],
    meta: '10–14 day delivery · 2 revision rounds · 30 days post-launch support',
    popular: true,
  },
  {
    slug: 'custom-development',
    name: 'Custom Development',
    price: '$1,500',
    priceSub: 'starting · scoped per project',
    promise: 'Build the thing your store needs that no app actually does.',
    bestFor: 'Stores that have outgrown apps, or have one feature blocking growth.',
    outcomes: [
      'Custom Shopify section, feature, or integration coded for you',
      'Bundle builders, size charts, ERP sync, B2B, configurators',
      'Designed, built, QA-tested, and documented for your team',
      'Source-controlled — no copy-paste hacks left behind',
      'Full discovery → scoped statement of work → launch',
    ],
    meta: '14–21 day delivery · scoped quote · 30 days post-launch support',
  },
]

const maintenancePlans: Plan[] = [
  {
    slug: 'care',
    name: 'Care',
    price: '$99',
    priceSub: 'per month · cancel anytime',
    promise: 'Your store stays online and up-to-date — without you thinking about it.',
    bestFor: 'Live stores that are running fine and just need a safety net.',
    outcomes: [
      'Monthly Shopify, app, and theme updates handled for you',
      'Up to 10 new products added per month (images, descriptions, variants)',
      '1 hour/month of small content tweaks (banners, text, products)',
      'Monthly uptime + speed health check',
      'Email response within 48 hours on weekdays',
      'A real developer responsible for your store not breaking',
    ],
    meta: 'Cancel anytime · billed at start of month',
  },
  {
    slug: 'care-plus',
    name: 'Care+',
    price: '$299',
    priceSub: 'per month · cancel anytime',
    promise: 'Your store keeps getting better, every month.',
    bestFor: 'Brands actively shipping changes — drops, campaigns, A/B tests.',
    outcomes: [
      'Everything in Care, plus 4 hours/month of dev/design work',
      'Up to 30 new products added per month (images, descriptions, variants)',
      'Weekly speed, broken-link, SEO, and Klaviyo/GA4 sanity checks',
      'Monthly performance report (LCP, conversion, top pages)',
      'Email response within 24 hours on weekdays',
      'Like a part-time Shopify dev for the price of one freelance task',
    ],
    meta: '4 hrs/mo + up to 2 hrs rollover · cancel anytime',
    popular: true,
  },
  {
    slug: 'pro',
    name: 'Pro',
    price: '$500',
    priceSub: 'per month · cancel anytime',
    promise: 'Treat your store like your most important employee.',
    bestFor: 'Growing brands where the store directly drives revenue.',
    outcomes: [
      'Everything in Care+, plus 8 hours/month of dev/design work',
      'Up to 50 new products added per month (images, descriptions, variants)',
      'Direct Slack channel + same-day response on weekdays',
      'Monthly CRO review with one recommended A/B test',
      'Quarterly site audit + roadmap',
      'Priority handling — your work jumps ahead of project clients',
    ],
    meta: '8 hrs/mo + up to 4 hrs rollover · cancel anytime',
  },
]

const howItWorks = [
  {
    n: '01',
    title: 'Pick the plan that fits',
    body: "Click 'Choose' on the package that fits. We'll take you to a short form with your selection already attached.",
  },
  {
    n: '02',
    title: 'Tell us about your brand',
    body: 'A few details about your store, products, and what you want to achieve. Takes 60 seconds. No payment, no commitment yet.',
  },
  {
    n: '03',
    title: 'We reply within 24 hours',
    body: 'Karam personally reviews every enquiry. You get a response with next steps, a brief discovery call link, and any clarifying questions.',
  },
  {
    n: '04',
    title: 'Proposal, kickoff, and launch',
    body: 'We send a fixed-price proposal with timeline. You approve, pay 50% to start (or month 1 for maintenance), and we begin the same week.',
  },
]

const pricingFaqs = [
  {
    question: 'Do I have to pay before talking to you?',
    answer: 'No. Choosing a plan only sends us your contact details and what you\'re interested in. There\'s no payment until we\'ve had a discovery call, you\'ve received a written proposal with full scope, and you\'ve approved it. The first invoice (50% for builds, month 1 for maintenance) only goes out after that.',
  },
  {
    question: 'What if my project doesn\'t fit any of these packages?',
    answer: 'Most projects fit one of these tiers, but if yours doesn\'t we\'ll send a custom quote. Just pick the closest plan and tell us what\'s different in the message — or use the "Get a custom quote" button on this page.',
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'No. The price you see is what you pay for the work listed. Third-party app subscriptions (Klaviyo, reviews apps, etc.) and Shopify\'s own subscription are billed by them directly — we\'ll always tell you in advance which paid apps are recommended for your build.',
  },
  {
    question: 'Can I switch maintenance plans later?',
    answer: 'Yes. Upgrade, downgrade, or cancel any month — we\'ll prorate where it makes sense. You\'re never locked in.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'For builds: if we haven\'t started development yet, we refund the deposit in full. Once development begins, we keep working with you until it matches the agreed scope; we don\'t close a project until it\'s right. For maintenance: cancel any month, no questions.',
  },
  {
    question: 'How fast can you actually start?',
    answer: 'Usually within 3–5 business days of you approving the proposal. For Care/Care+/Pro maintenance, we onboard your store within 48 hours of the first invoice clearing.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Pricing — Miracle Websoft Shopify packages',
    description:
      'Transparent fixed pricing for Shopify builds and monthly maintenance. From $600 to launch a store and $99/month to keep it healthy.',
    url: 'https://miraclewebsoft.com/pricing',
    type: 'WebPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' },
  ]),
])

function PlanRow({ plan, n }: { plan: Plan; n: string }) {
  return (
    <li className="price-row" id={plan.slug}>
      <div className="price-head">
        <span className="mw-num">{n}</span>
        <div>
          <h3 className="price-name">
            {plan.name}
            {plan.popular && <span className="price-tag">Most chosen</span>}
          </h3>
          <div className="price-amount">{plan.price}</div>
          <div className="mw-num" style={{ marginTop: '0.35rem' }}>{plan.priceSub}</div>
        </div>
      </div>
      <div className="price-body">
        <p style={{ fontSize: '1.05rem', color: 'var(--text-1)', lineHeight: 1.5 }}>{plan.promise}</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', marginTop: '0.4rem' }}>Best for: {plan.bestFor}</p>
        <ul className="price-includes">
          {plan.outcomes.map(o => <li key={o}>{o}</li>)}
        </ul>
      </div>
      <div className="price-cta">
        <p className="mw-num" style={{ lineHeight: 1.6 }}>{plan.meta}</p>
        <Link href={`/contact?package=${plan.slug}`} aria-label={`Choose ${plan.name}`} className={plan.popular ? 'mw-btn-primary' : 'mw-btn-outline'} style={{ justifyContent: 'center' }}>
          Choose this plan <ArrowRight size={15} />
        </Link>
      </div>
    </li>
  )
}

const priceCss = `
.price-index { border-top: 1px solid var(--text-1); }
.price-index a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: baseline; padding: 0.8rem 0; border-bottom: 1px solid var(--border); color: var(--text-2); font-size: 0.95rem; }
.price-index a:hover { color: var(--text-1); background: var(--bg-raised); }
.price-index b { font-family: var(--font-geist-mono); font-weight: 500; font-size: 0.85rem; color: var(--text-1); }
.price-group { border-top: 1px solid var(--text-1); }
.price-row { display: grid; grid-template-columns: 1fr 1.7fr 0.85fr; gap: 2.5rem; padding: 2.25rem 0; border-bottom: 1px solid var(--border); scroll-margin-top: 7rem; }
.price-head { display: grid; grid-template-columns: 2.5rem 1fr; gap: 0.5rem; align-items: baseline; }
.price-name { font-size: clamp(1.4rem, 2.2vw, 1.75rem); display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem; }
.price-tag { font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-hover); border: 1px solid rgb(224 79 37 / 0.35); background: var(--accent-dim); padding: 0.15rem 0.45rem; border-radius: 4px; }
.price-amount { font-family: var(--font-playfair); font-size: clamp(2.4rem, 4vw, 3.25rem); letter-spacing: -0.03em; line-height: 1; margin-top: 0.75rem; color: var(--text-1); }
.price-includes { display: grid; grid-template-columns: 1fr 1fr; column-gap: 1.5rem; margin-top: 1.25rem; }
.price-includes li { font-size: 0.9rem; color: var(--text-2); padding: 0.55rem 0 0.55rem 1.1rem; border-top: 1px solid var(--border); position: relative; line-height: 1.45; }
.price-includes li::before { content: ''; position: absolute; left: 0; top: 1.05rem; width: 0.5rem; height: 1px; background: var(--text-1); }
.price-cta { display: flex; flex-direction: column; justify-content: space-between; gap: 1.25rem; }
@media (max-width: 1023px) {
  .price-row { grid-template-columns: 1fr; gap: 1.25rem; }
  .price-body, .price-cta { padding-left: 3rem; }
}
@media (max-width: 640px) {
  .price-includes { grid-template-columns: 1fr; }
  .price-head { grid-template-columns: 1fr; }
  .price-body, .price-cta { padding-left: 0; }
}
`

export default function PricingPage() {
  const groups = [
    { id: 'builds', eyebrow: 'Build packages', title: 'One-time builds', sub: 'Pay 50% to start, 50% on launch. Every package includes a discovery call, a written proposal and post-launch support.', plans: buildPlans },
    { id: 'maintenance', eyebrow: 'Monthly maintenance', title: 'Monthly care plans', sub: 'Month to month, cancel anytime. A Shopify developer looking after your store every month: updates, fixes and small improvements.', plans: maintenancePlans },
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style dangerouslySetInnerHTML={{ __html: priceCss }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '3.5rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Pricing' }]} /></div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">Pricing</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '16ch' }}>
                Fixed prices for Shopify builds and <span className="mw-mark">monthly care.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '50ch' }}>
                Pick the closest fit and tell us about your store. Karam replies within 24 hours with scope, timeline and next steps. Nothing is paid until you approve a written proposal.
              </p>
              <p style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: 'var(--text-3)' }}>
                700+ Shopify projects since 2015 · 98% job success on Upwork · no hourly billing
              </p>
            </div>
            <nav aria-label="Price list" className="price-index">
              {groups.flatMap(g => g.plans).map(p => (
                <a key={p.slug} href={`#${p.slug}`}>
                  <span>{p.name}</span>
                  <b>{p.price}{p.priceSub.startsWith('per month') ? '/mo' : p.priceSub.startsWith('starting') ? '+' : ''}</b>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.id} id={g.id} className="mw-section" style={{ paddingTop: gi === 0 ? '2rem' : '3rem', scrollMarginTop: '6rem' }}>
          <div className="mw-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2rem' }}>
              <div>
                <p className="mw-eyebrow">{g.eyebrow}</p>
                <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>{g.title}</h2>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-3)', maxWidth: '44ch' }}>{g.sub}</p>
            </div>
            <ol className="price-group">
              {g.plans.map((p, i) => <PlanRow key={p.slug} plan={p} n={String(i + 1).padStart(2, '0')} />)}
            </ol>
          </div>
        </section>
      ))}

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">What happens next</p>
          <h2 style={{ maxWidth: '22ch', marginBottom: '1rem' }}>From choosing a plan to a launched store.</h2>
          <p style={{ color: 'var(--text-3)', maxWidth: '52ch', marginBottom: '3rem' }}>
            No payment until you&apos;ve had a call, seen the proposal and said yes.
          </p>
          <ol className="steps">
            {howItWorks.map(s => (
              <li key={s.n}>
                <span className="steps-time">Step {s.n}</span>
                <h3 style={{ fontSize: '1.2rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-3)' }}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mw-section" style={{ paddingBottom: '2rem' }}>
        <div className="mw-container"><div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>Not sure which plan fits?</h2>
            <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>
              Talk it through on a 15-minute call, or send a written brief and we&apos;ll come back with a custom quote. Prefer chat?{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Message Karam on WhatsApp</a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book" className="mw-btn-accent">Book a 15-min call <ArrowRight size={15} /></Link>
            <Link href="/contact" className="mw-btn-outline">Get a custom quote</Link>
          </div>
        </div></div>
      </section>

      <FaqSection faqs={pricingFaqs} heading="Pricing FAQ" eyebrow="Common questions" />
    </>
  )
}
