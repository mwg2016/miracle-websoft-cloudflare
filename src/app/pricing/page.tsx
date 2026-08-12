import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, ShieldCheck, Clock, MessageCircle, ChevronRight } from 'lucide-react'
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
      'Mobile-first layout (where 80% of your buyers shop)',
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
      'Mobile LCP under 1.5s — directly tied to higher conversion',
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
    body: "Click 'Choose this plan' on the package below. We'll take you to a short form with your selection already attached.",
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

const trustPoints = [
  { icon: ShieldCheck, label: 'Fixed pricing — no surprise invoices' },
  { icon: Clock, label: '< 24 h response from the founder personally' },
  { icon: Sparkles, label: '600+ Shopify projects · 98%+ job success' },
]

const pricingFaqs = [
  {
    question: 'Do I have to pay before talking to you?',
    answer: 'No. Choosing a plan only sends us your contact details and what you\'re interested in. There\'s no payment until we\'ve had a discovery call, you\'ve received a written proposal with full scope, and you\'ve approved it. The first invoice (50% for builds, month 1 for maintenance) only goes out after that.',
  },
  {
    question: 'What if my project doesn\'t fit any of these packages?',
    answer: 'Most projects fit one of these tiers, but if yours doesn\'t we\'ll send a custom quote. Just pick the closest plan and tell us what\'s different in the message — or use the "Get a custom quote" button below.',
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
    answer: 'For builds: if we haven\'t started development yet, we refund the deposit in full. Once development begins, we work with you until you\'re satisfied — we\'ve had zero refund requests in 10 years because we don\'t close projects until they\'re right. For maintenance: cancel any month, no questions.',
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

function PlanCard({ plan, badge }: { plan: Plan; badge: string }) {
  const isPopular = !!plan.popular
  return (
    <div
      style={{
        position: 'relative',
        background: isPopular ? 'rgba(108,99,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: isPopular ? '1px solid rgba(108,99,255,0.35)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isPopular ? '0 24px 48px rgba(108,99,255,0.12)' : 'none',
      }}
    >
      {isPopular && (
        <span
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            background: 'var(--accent)',
            color: '#fff',
            whiteSpace: 'nowrap',
          }}
        >
          ★ Most popular
        </span>
      )}

      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.6rem' }}>
        {badge}
      </div>
      <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
        {plan.name}
      </h3>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.4rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
          {plan.price}
        </span>
      </div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.25rem' }}>{plan.priceSub}</div>

      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.55, marginBottom: '0.75rem', fontWeight: 300 }}>
        &ldquo;{plan.promise}&rdquo;
      </p>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        {plan.bestFor}
      </p>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '1.25rem' }} />

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem', flex: 1 }}>
        {plan.outcomes.map((o, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <Check size={15} style={{ color: isPopular ? 'var(--accent)' : '#10B981', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>{o}</span>
          </li>
        ))}
      </ul>

      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.25rem', lineHeight: 1.5, paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {plan.meta}
      </div>

      <Link
        href={`/contact?package=${plan.slug}`}
        className={isPopular ? 'mw-btn-primary' : ''}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          padding: '0.85rem 1rem',
          borderRadius: '12px',
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none',
          ...(isPopular
            ? {}
            : {
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }),
        }}
      >
        Request {plan.name} <ArrowRight size={14} />
      </Link>
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem' }}>
        <div className="mw-container" style={{ paddingBottom: '5rem' }}>
          <div className="mb-8"><Breadcrumb items={[{ label: 'Pricing' }]} /></div>

          {/* Hero */}
          <div className="max-w-3xl mb-14">
            <span className="mw-eyebrow">Transparent pricing</span>
            <h1 className="mw-hero-title" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>
              Choose a clear Shopify path.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Then get a fixed-price plan.</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>
              Use these packages as a starting point. Choose the closest fit, tell us about your store, and Karam personally replies within 24 hours with scope, timeline and next steps before any payment.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
              {trustPoints.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <t.icon size={14} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{t.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#builds" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                See build packages <ChevronRight size={14} />
              </a>
              <a
                href="#maintenance"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.7rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Maintenance plans <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Build packages */}
          <div id="builds" style={{ scrollMarginTop: '6rem', marginBottom: '5rem' }}>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="mw-eyebrow">Build packages</p>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3.4vw,36px)' }}>
                  One-time builds.<br />
                  <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Pay 50% to start, 50% on launch.</em>
                </h2>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '320px', lineHeight: 1.6 }}>
                Every package includes a discovery call, a written proposal, and post-launch support. You only pay if you approve the proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {buildPlans.map(p => <PlanCard key={p.slug} plan={p} badge="One-time build" />)}
            </div>
          </div>

          {/* Maintenance plans */}
          <div id="maintenance" style={{ scrollMarginTop: '6rem', marginBottom: '5rem' }}>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="mw-eyebrow">Monthly maintenance</p>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3.4vw,36px)' }}>
                  Keep your store healthy.<br />
                  <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Month-to-month. Cancel anytime.</em>
                </h2>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '320px', lineHeight: 1.6 }}>
                A real Shopify developer on call every month. Updates, fixes, and small improvements handled — so your store keeps working while you focus on the brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {maintenancePlans.map(p => <PlanCard key={p.slug} plan={p} badge="Monthly plan" />)}
            </div>
          </div>

          {/* How it works */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <p className="mw-eyebrow">What happens next</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3.4vw,36px)' }}>
                From clicking a plan<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>to a launched store.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: 1.7 }}>
                No payment until you&apos;ve had a call, seen the proposal, and said yes. Here&apos;s exactly how it goes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {howItWorks.map(s => (
                <div key={s.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.6rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0.04) 100%)',
              border: '1px solid rgba(108,99,255,0.25)',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '0.75rem' }}>
              Not sure which plan fits?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              Tell us about your store and goals. We&apos;ll recommend the right package — or send a custom quote if nothing fits perfectly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Get a custom quote <ArrowRight size={15} />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '12px',
                  background: '#25D366',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={15} /> WhatsApp Karam
              </a>
            </div>
          </div>

        </div>

        <FaqSection faqs={pricingFaqs} heading="Pricing FAQ" eyebrow="Common questions" />
      </div>
    </>
  )
}
