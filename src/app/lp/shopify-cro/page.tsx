import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  ShoppingCart,
  Smartphone,
  CreditCard,
  Search,
  BarChart3,
  Target,
  Layers,
  Image as ImageIcon,
  TestTube,
  Mail,
  Sparkles,
  FileText,
  Download,
  Star,
  Quote,
  Trophy,
  ShieldCheck,
  Clock,
} from 'lucide-react'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import StickyTabs from './StickyTabs'
import { clientVideos, founderIntro } from '@/data/videos'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO Services — Boost Conversions, Cut Bounce, Lift Revenue | Miracle Websoft',
  description:
    'Shopify CRO services that turn your existing traffic into more customers. Free conversion audit, 90+ PageSpeed guarantee, fixed-price quotes. 600+ Shopify stores, 10+ years.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/lp/shopify-cro' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Shopify CRO Services — Boost Conversions, Cut Bounce, Lift Revenue',
    description:
      'Free conversion audit for your Shopify store. 42% average lift, 90+ PageSpeed guaranteed.',
    url: 'https://www.miraclewebsoft.com/lp/shopify-cro',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What exactly is Shopify CRO and how does it differ from speed optimization?',
    answer:
      'CRO (Conversion Rate Optimization) is the process of redesigning, restructuring and testing parts of your store so that more of your visitors actually buy. Speed optimization is a subset — faster pages convert better, but CRO also covers product page layout, copy, trust signals, cart and checkout UX, mobile experience, popups, search, filters, recommendations, email/SMS recovery flows and analytics. We do both, together.',
  },
  {
    question: 'How much can my conversion rate realistically improve?',
    answer:
      'Average across the Shopify CRO projects we have completed: a 42% lift in conversion rate within 60–90 days. Some stores see 20%, some see 80%+. We always run the audit first and tell you what is realistic for your store before you commit a dollar.',
  },
  {
    question: 'Is the conversion audit really free? What do I get?',
    answer:
      'Yes — completely free, no credit card. You get a written report covering: PageSpeed and Core Web Vitals scores, top 5–10 conversion blockers we found, mobile vs desktop UX issues, product page and PDP gaps, checkout friction, missing trust signals, and a prioritized action plan. We deliver it within 48 hours.',
  },
  {
    question: 'How long until I see results?',
    answer:
      'Speed and quick UX wins typically ship in week 1–2 and you will see measurable change in PageSpeed and add-to-cart rate. Full CRO programs run 90 days with ongoing A/B tests. We send you a Looker Studio dashboard so you can watch the numbers move daily.',
  },
  {
    question: 'Will I need to rebuild my whole Shopify store?',
    answer:
      'In 90% of cases no. We work directly on your existing theme — removing bloat, rewriting product pages, fixing checkout, deferring scripts, swapping bad apps. A full rebuild only makes sense if your theme is fundamentally broken or you are also rebranding.',
  },
  {
    question: 'Do you work with Shopify Plus stores?',
    answer:
      'Yes. We are a Shopify Verified Partner and have shipped CRO work on Shopify Plus stores including custom checkout extensions, B2B portals, Shopify Functions and Launchpad-driven campaign automation. Plus-specific upgrades like 1-page checkout and custom upsell apps are part of what we recommend when relevant.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Fixed-price quotes — no hourly billing. A targeted speed + quick-win CRO sprint starts at $1,500. A full 90-day CRO program with PDP/checkout rebuild, A/B testing and monthly reporting starts around $4,500. We quote your exact scope after the free store review.',
  },
  {
    question: 'Why should I trust Miracle Websoft over a generic agency?',
    answer:
      "We have been a Shopify-only agency since 2015 — 600+ stores delivered, Top Rated Plus on Upwork (top 3% globally) and an officially Verified Shopify Partner. We don't outsource. The same senior developer who scopes your project is the one writing the code.",
  },
]

const audits = [
  {
    icon: Search,
    title: 'Free 48-Hour Conversion Audit',
    desc: 'Written report covering speed, mobile UX, PDP, cart, checkout and trust signals — with a prioritized action plan.',
    tag: 'Most popular',
  },
  {
    icon: Zap,
    title: 'Free PageSpeed Diagnosis',
    desc: 'Lighthouse, Core Web Vitals and a script-by-script breakdown of what is dragging your store down.',
    tag: 'Fastest',
  },
  {
    icon: Smartphone,
    title: 'Free Mobile UX Walkthrough',
    desc: 'A Loom video where a senior dev walks your live mobile checkout, flagging every friction point we see.',
    tag: 'Highest ROI',
  },
  {
    icon: ShoppingCart,
    title: 'Free Cart & Checkout Review',
    desc: '14-point inspection of your cart drawer, checkout fields, payment options and abandonment recovery setup.',
  },
]

const guides = [
  {
    icon: FileText,
    title: 'The 27-Point Shopify PDP Checklist',
    sub: 'PDF · 8 pages',
    desc: 'Every element a high-converting product page needs — layout, copy, trust, urgency, recommendations.',
  },
  {
    icon: FileText,
    title: 'Cart Abandonment Recovery Playbook',
    sub: 'PDF · 12 pages',
    desc: 'The exact email + SMS flow we install on $1M+ Shopify stores to recover 8–14% of abandoned carts.',
  },
  {
    icon: FileText,
    title: 'Shopify Speed: 90+ Without Touching Code',
    sub: 'PDF · 6 pages',
    desc: '11 wins your store owner can ship today — no developer needed. Apps to remove, images to compress.',
  },
  {
    icon: FileText,
    title: 'A/B Testing Framework for Shopify',
    sub: 'PDF · 10 pages',
    desc: 'How we prioritize tests, calculate sample size, and avoid the false-positive trap that kills most CRO programs.',
  },
  {
    icon: FileText,
    title: 'Mobile Checkout Friction Audit',
    sub: 'PDF · 7 pages',
    desc: 'The 19 micro-frictions that cause 60–70% of your mobile shoppers to bail before paying.',
  },
  {
    icon: FileText,
    title: 'Trust Signal Stack for Shopify',
    sub: 'PDF · 5 pages',
    desc: 'Reviews, guarantees, badges and social proof — placed in the right order, on the right pages.',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Speed & Core Web Vitals',
    desc: 'Sub-1.5s LCP, 90+ mobile PageSpeed. Image compression, script deferral, critical CSS, app cleanup.',
  },
  {
    icon: ShoppingCart,
    title: 'Product Page Rebuild',
    desc: 'Layouts, gallery, sticky ATC, size guide, urgency, social proof — every element optimized to convert.',
  },
  {
    icon: CreditCard,
    title: 'Cart & Checkout',
    desc: 'Drawer cart, upsells, 1-page checkout (Plus), Apple/Google/Shop Pay, address autocomplete, less friction.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First UX',
    desc: '70%+ of your traffic is mobile. We design checkout, navigation and PDP for thumbs first, desktops second.',
  },
  {
    icon: Search,
    title: 'Search, Filters & PLP',
    desc: 'Instant predictive search, faceted filtering, smart sort. The fastest way to lift revenue per visitor.',
  },
  {
    icon: TestTube,
    title: 'A/B Testing Setup',
    desc: 'Convert, GA4, Optimizely or VWO. We design, ship and read tests that move actual revenue, not vanity stats.',
  },
  {
    icon: Mail,
    title: 'Recovery & Retention',
    desc: 'Klaviyo, Postscript, abandoned-cart, browse-abandon, win-back flows. Recover 8–14% of lost carts.',
  },
  {
    icon: Target,
    title: 'Personalisation',
    desc: 'Recommendations, dynamic content, geo-targeting, returning-vs-new visitor logic. Higher AOV per session.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Dashboarding',
    desc: 'GA4, Looker Studio, server-side tracking, Triple Whale. You see funnel drop-off in real time.',
  },
  {
    icon: ImageIcon,
    title: 'Brand & Visual Polish',
    desc: 'Hero, copy, photography direction, micro-interactions. The thousand small things that build trust in 3 seconds.',
  },
  {
    icon: Layers,
    title: 'App Stack Cleanup',
    desc: 'Audit every app, kill the dead weight, replace heavy ones with custom lean alternatives. Faster + cheaper.',
  },
  {
    icon: ShieldCheck,
    title: '90+ PageSpeed Guarantee',
    desc: "If we don't hit Google's 90+ mobile PageSpeed score, we keep working free until we do. In writing.",
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder · Atelier Nord (UK)',
    quote:
      'Conversion went from 1.8% to 3.1% in eight weeks. Mobile checkout used to be our biggest leak — now it is the strongest part of the funnel. Worth every penny.',
    metric: '+72% conversion',
  },
  {
    name: 'David Klein',
    role: 'CEO · Klein Supplements (USA)',
    quote:
      'PageSpeed jumped from 38 to 94 on mobile. Add-to-cart rate up 40%. We had three other agencies look at this before — Miracle was the only one that actually delivered.',
    metric: '38 → 94 PageSpeed',
  },
  {
    name: 'Priya Anand',
    role: 'Founder · Anand Jewels',
    quote:
      'They rebuilt our PDP, cart and checkout in 4 weeks at a fixed price. Revenue per visitor up 51%. Their team replied within hours, never missed a deadline.',
    metric: '+51% RPV',
  },
  {
    name: 'Marcus Chen',
    role: 'COO · Pulse Apparel (AU)',
    quote:
      "We were burning $40K/mo on Meta and the LP was killing us. After the CRO sprint our ROAS doubled. Same ad spend, twice the revenue. That is the whole story.",
    metric: '2× ROAS',
  },
  {
    name: 'Emma Hughes',
    role: 'CMO · Botanika Skincare',
    quote:
      'The audit alone was worth more than what 2 other agencies charged us combined. Then they actually fixed everything. Cart abandonment dropped from 78% to 64%.',
    metric: '-14pt cart abandon',
  },
  {
    name: 'Jonathan Reyes',
    role: 'Founder · Reyes Outdoor',
    quote:
      'Honest about what we needed and what we did not. They talked us out of a feature we wanted because it would have hurt conversion. That is rare. Trust earned.',
    metric: '+38% AOV',
  },
]

const process = [
  {
    week: 'Day 1–2',
    phase: 'Free Audit',
    deliverable: 'Written CRO + speed report with prioritized fixes',
    impact: 'Baseline + roadmap',
  },
  {
    week: 'Week 1',
    phase: 'Quick Wins',
    deliverable: 'Image compression, app cleanup, script deferral, critical CSS',
    impact: 'PageSpeed 40s → 80s',
  },
  {
    week: 'Week 2–3',
    phase: 'PDP Rebuild',
    deliverable: 'Product page redesigned: layout, copy, trust, sticky ATC, social proof',
    impact: '+15–25% ATC rate',
  },
  {
    week: 'Week 3–4',
    phase: 'Cart & Checkout',
    deliverable: 'Drawer cart, upsells, payment methods, address autocomplete, 1-page (Plus)',
    impact: '-10–20% checkout friction',
  },
  {
    week: 'Week 4–6',
    phase: 'Mobile + PLP',
    deliverable: 'Mobile UX overhaul, instant search, faceted filters, smart sort',
    impact: '+10–20% mobile CVR',
  },
  {
    week: 'Week 6–8',
    phase: 'Recovery Flows',
    deliverable: 'Klaviyo + Postscript: abandoned-cart, browse-abandon, win-back',
    impact: 'Recover 8–14% of carts',
  },
  {
    week: 'Week 8–12',
    phase: 'Test & Iterate',
    deliverable: 'A/B testing program, monthly Looker Studio reports, ongoing optimization',
    impact: 'Compounding gains',
  },
]

const navTabs = [
  { id: 'audits', label: 'Free Audits' },
  { id: 'guides', label: 'Free Resources' },
  { id: 'features', label: 'What You Get' },
  { id: 'mentor', label: 'Your CRO Lead' },
  { id: 'reviews', label: 'Client Reviews' },
  { id: 'videos', label: 'Video Stories' },
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

export default function ShopifyCROLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-20"
        style={{
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse at 75% 35%, rgba(108,99,255,0.16) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(16,185,129,0.10) 0%, transparent 50%)',
        }}
      >
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
            {/* Left — copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 mb-5 px-3 py-1.5"
                style={{
                  background: 'rgba(16,185,129,0.10)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  color: '#10B981',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                <Sparkles size={12} /> SHOPIFY CONVERSION RATE OPTIMIZATION
              </div>
              <h1 style={{ color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Turn Your Existing Shopify Traffic Into{' '}
                <span style={{ color: '#10B981' }}>2× More Revenue</span> — Without Spending More on Ads.
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1.08rem',
                  lineHeight: 1.75,
                  marginBottom: '1.75rem',
                  maxWidth: '560px',
                  fontWeight: 300,
                }}
              >
                Average across our Shopify CRO projects:{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>+42% conversion rate</strong>,{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>1.2s mobile load time</strong> and{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>+38% revenue per visitor</strong>. Free
                audit. Fixed price. 90+ PageSpeed guaranteed.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {[
                  '600+ Shopify stores',
                  '10+ years, since 2015',
                  'Top Rated Plus · Upwork',
                  'Verified Shopify Partner',
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5"
                    style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}
                  >
                    <CheckCircle2 size={14} style={{ color: '#10B981' }} /> {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <a href="#lead-form" className="mw-btn-primary" style={{ background: '#10B981', borderColor: '#10B981', color: '#fff' }}>
                  Get My Free CRO Review <ArrowRight size={16} />
                </a>
                <a href="#process" className="mw-btn-outline">
                  See the process
                </a>
              </div>

              {/* Trust strip */}
              <div
                className="mt-10 grid grid-cols-3 gap-4 max-w-md"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '1.25rem',
                }}
              >
                {[
                  { v: '+42%', l: 'avg CVR lift' },
                  { v: '1.2s', l: 'mobile LCP' },
                  { v: '90+', l: 'PageSpeed' },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: '#10B981',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'rgba(255,255,255,0.6)',
                        marginTop: '0.4rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — lead form */}
            <div
              id="lead-form"
              className="rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                padding: '2rem',
                boxShadow: '0 30px 80px -30px rgba(16,185,129,0.25)',
              }}
            >
              <div
                className="inline-flex items-center gap-2 mb-3 px-2.5 py-1"
                style={{
                  background: 'rgba(16,185,129,0.12)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '999px',
                  fontSize: '0.68rem',
                  color: '#10B981',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                FREE · NO CARD · 48 HOURS
              </div>
              <ServiceContactForm
                service="Shopify CRO (Google Ads LP)"
                heading="Get your free Shopify CRO audit"
                subtext="Tell us about your store. We send a written CRO + speed report with prioritized fixes within 48 hours — no obligation, no card."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY SECTION NAV ──────────────────────────────────────────── */}
      <StickyTabs tabs={navTabs} />

      {/* ─── FREE AUDITS ─────────────────────────────────────────────────── */}
      <section id="audits" style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#0a0a0a' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <p className="mw-eyebrow" style={{ color: '#10B981' }}>FREE — TAKE ANY OF THESE</p>
            <h2 style={{ color: '#fff' }}>Free Audits & Diagnostics</h2>
            <p style={{ maxWidth: '600px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
              Pick whichever fits your store. All four are free, all delivered in 48 hours, all written by a
              senior Shopify dev — not an SDR with a checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audits.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.title} className="mw-card" style={{ padding: '1.5rem', position: 'relative' }}>
                  {a.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '12px',
                        background: '#10B981',
                        color: '#fff',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                      }}
                    >
                      {a.tag.toUpperCase()}
                    </span>
                  )}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(16,185,129,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={18} style={{ color: '#10B981' }} />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.02rem', marginBottom: '0.55rem', lineHeight: 1.35 }}>{a.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1rem' }}>{a.desc}</p>
                  <a
                    href="#lead-form"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#10B981',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Get a CRO Review <ArrowRight size={13} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FREE GUIDES / RESOURCES ─────────────────────────────────────── */}
      <section id="guides" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <p className="mw-eyebrow" style={{ color: 'var(--accent)' }}>FREE DOWNLOADS · NO EMAIL WALL</p>
            <h2 style={{ color: '#fff' }}>Shopify CRO Resources & Playbooks</h2>
            <p style={{ maxWidth: '600px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
              The exact frameworks we use on $1M+ Shopify stores. Steal them. Use them. No email gate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.title} className="mw-card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(108,99,255,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} style={{ color: 'var(--accent)' }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        color: 'rgba(255,255,255,0.6)',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {g.sub.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '0.5rem', lineHeight: 1.35 }}>{g.title}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1rem' }}>{g.desc}</p>
                  <a
                    href="#lead-form"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Download size={13} /> Get this resource
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MID PAGE CTA ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="mw-container">
          <div
            className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background:
                'linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.05) 100%)',
              border: '1px solid rgba(16,185,129,0.35)',
              padding: '2.25rem 2.5rem',
            }}
          >
            <div>
              <h3 style={{ color: '#fff', fontSize: 'clamp(20px,2.5vw,26px)', marginBottom: '0.5rem' }}>
                Stop sending paid traffic to a leaky store.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.94rem', maxWidth: '560px' }}>
                Free store review focused on speed, buyer friction and revenue leaks. No card. No sales pressure.
              </p>
            </div>
            <a
              href="#lead-form"
              className="mw-btn-primary shrink-0"
              style={{ background: '#10B981', borderColor: '#10B981', color: '#fff' }}
            >
              Get My Free CRO Review <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── EVERYTHING YOU GET ──────────────────────────────────────────── */}
      <section
        id="features"
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          background: '#0a0a0a',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <p className="mw-eyebrow" style={{ color: '#10B981' }}>EVERYTHING YOU GET</p>
            <h2 style={{ color: '#fff' }}>Everything you need to lift Shopify conversions</h2>
            <p style={{ maxWidth: '620px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
              CRO is not one fix — it is twelve fixes shipped in the right order. Here is the full stack we
              ship inside a 90-day program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="mw-card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(16,185,129,0.10)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} style={{ color: '#10B981' }} />
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '0.98rem', lineHeight: 1.3 }}>{f.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MEET YOUR CRO LEAD (green block) ────────────────────────────── */}
      <section
        id="mentor"
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          background:
            'linear-gradient(180deg, #064E3B 0%, #065F46 100%)',
        }}
      >
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              MEET YOUR CRO LEAD
            </p>
            <h2 style={{ color: '#fff' }}>The same expert who scopes your project ships the code.</h2>
          </div>

          <div
            className="rounded-2xl grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 items-center"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ width: '100%' }}>
              <YouTubeEmbed
                videoId={founderIntro.videoId}
                title={founderIntro.title}
                aspect="16/9"
                rounded="14px"
              />
              <p
                style={{
                  fontSize: '0.72rem',
                  color: '#A7F3D0',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginTop: '0.85rem',
                  textAlign: 'center',
                }}
              >
                ▶ WATCH KARAM&apos;S 60-SEC INTRO
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span
                  style={{
                    background: '#FBBF24',
                    color: '#064E3B',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '999px',
                  }}
                >
                  TOP RATED PLUS · UPWORK
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem' }}>
                  Top 3% of agencies globally
                </span>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Karam Singh Mehra
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Founder, Miracle Websoft. 10+ years on Shopify, 600+ stores delivered, lead developer on every
                CRO engagement we take. No SDR loop, no junior hand-off, no offshore relay race. You email me,
                you get me.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                {[
                  { v: '600+', l: 'Stores shipped' },
                  { v: '4.9/5', l: '600+ reviews' },
                  { v: '10y', l: 'Shopify-only' },
                  { v: '24h', l: 'Reply time' },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, lineHeight: 1 }}>
                      {s.v}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem', marginTop: '0.3rem', letterSpacing: '0.05em' }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#lead-form"
                className="mw-btn-primary"
                style={{ background: '#fff', color: '#064E3B', borderColor: '#fff' }}
              >
                Talk to Karam directly <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT TESTIMONIALS ─────────────────────────────────────────── */}
      <section
        id="reviews"
        style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#0a0a0a' }}
      >
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <p className="mw-eyebrow" style={{ color: 'var(--accent)' }}>WHAT CLIENTS SAY</p>
            <h2 style={{ color: '#fff' }}>Real Shopify brands. Real numbers.</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} style={{ color: '#FBBF24', fill: '#FBBF24' }} />
              ))}
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                4.9/5 across 600+ projects
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="mw-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <Quote size={22} style={{ color: 'var(--accent)', marginBottom: '0.75rem', opacity: 0.6 }} />
                <p
                  style={{
                    fontSize: '0.93rem',
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  “{t.quote}”
                </p>
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                      {t.role}
                    </div>
                  </div>
                  <span
                    style={{
                      background: 'rgba(16,185,129,0.12)',
                      color: '#10B981',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.65rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(16,185,129,0.25)',
                    }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO TESTIMONIALS (green block) ────────────────────────────── */}
      <section
        id="videos"
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          background: 'linear-gradient(180deg, #065F46 0%, #047857 100%)',
        }}
      >
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              VIDEO STORIES
            </p>
            <h2 style={{ color: '#fff' }}>Watch real Shopify clients talk about working with us.</h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                marginTop: '0.75rem',
                maxWidth: '620px',
                fontSize: '0.95rem',
              }}
            >
              Unscripted, on-camera reviews from store owners who hired us. No staged testimonials.
            </p>
          </div>

          <VideoTestimonialGrid videos={clientVideos} theme="green" />

          <p
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '1.5rem',
              textAlign: 'center',
            }}
          >
            Click any thumbnail to play. Hosted on YouTube — open them on your channel anytime.
          </p>
        </div>
      </section>

      {/* ─── PROCESS / ROADMAP TABLE ─────────────────────────────────────── */}
      <section
        id="process"
        style={{
          paddingTop: '5rem',
          paddingBottom: '4rem',
          background: '#0a0a0a',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="mw-eyebrow" style={{ color: '#10B981' }}>YOUR 90-DAY ROADMAP</p>
            <h2 style={{ color: '#fff' }}>Shopify CRO program — week by week</h2>
            <p style={{ maxWidth: '600px', marginTop: '0.75rem', fontSize: '0.95rem' }}>
              No vague timelines. Every phase ships on a fixed schedule with a measurable target. You see
              progress every Friday.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="hidden md:grid"
              style={{
                gridTemplateColumns: '120px 220px 1fr 200px',
                background: 'rgba(16,185,129,0.08)',
                borderBottom: '1px solid rgba(16,185,129,0.2)',
                padding: '1rem 1.5rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#10B981',
                textTransform: 'uppercase',
              }}
            >
              <div>Timeline</div>
              <div>Phase</div>
              <div>What ships</div>
              <div style={{ textAlign: 'right' }}>Expected impact</div>
            </div>
            {process.map((p, i) => (
              <div
                key={p.phase}
                className="grid grid-cols-1 md:grid-cols-[120px_220px_1fr_200px] gap-3 md:gap-4"
                style={{
                  padding: '1.1rem 1.5rem',
                  borderBottom:
                    i === process.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#10B981',
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.week}
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{p.phase}</div>
                <div style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                  {p.deliverable}
                </div>
                <div
                  className="md:text-right"
                  style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
                >
                  {p.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: ShieldCheck, title: '90+ PageSpeed guaranteed', desc: 'In writing. We keep working until we hit it.' },
              { icon: Clock, title: 'Fixed timeline, fixed price', desc: 'No hourly billing. No scope creep. Ever.' },
              { icon: Trophy, title: 'Money-back week 1', desc: 'If you do not love the audit, we refund week one.' },
            ].map((g) => {
              const Icon = g.icon
              return (
                <div key={g.title} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                  <Icon size={18} style={{ color: '#10B981', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {g.title}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', lineHeight: 1.55 }}>
                      {g.desc}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ + STICKY FORM ───────────────────────────────────────────── */}
      <section
        id="faq"
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          background: '#0a0a0a',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <p className="mw-eyebrow" style={{ color: 'var(--accent)' }}>FREQUENTLY ASKED</p>
              <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Questions before you book the audit</h2>
              <FaqAccordionClient faqs={faqs} />
            </div>

            {/* Sticky lead form */}
            <div>
              <div
                className="lg:sticky rounded-2xl"
                style={{
                  top: '6rem',
                  background:
                    'linear-gradient(160deg, rgba(16,185,129,0.10) 0%, rgba(255,255,255,0.04) 100%)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  padding: '1.75rem',
                }}
              >
                <div
                  className="inline-flex items-center gap-2 mb-3 px-2.5 py-1"
                  style={{
                    background: 'rgba(16,185,129,0.18)',
                    borderRadius: '999px',
                    fontSize: '0.66rem',
                    color: '#10B981',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  STILL HAVE QUESTIONS?
                </div>
                <ServiceContactForm
                  service="Shopify CRO (Google Ads LP - FAQ sidebar)"
                  heading="Or just ask us anything"
                  subtext="Drop your store URL and your question. A senior dev replies within 24 hours — usually faster."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (green) ───────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          background:
            'linear-gradient(135deg, #047857 0%, #064E3B 100%)',
          textAlign: 'center',
        }}
      >
        <div className="mw-container">
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            YOUR CRO JOURNEY
          </p>
          <h2 style={{ color: '#fff', maxWidth: '720px', margin: '0 auto 1.25rem', letterSpacing: '-0.02em' }}>
            Your higher-converting Shopify store starts today.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: '1.05rem',
              maxWidth: '580px',
              margin: '0 auto 2rem',
              lineHeight: 1.75,
            }}
          >
            Free 48-hour audit. Fixed price. 90+ PageSpeed guaranteed. The same Shopify dev who scopes your
            project is the one writing the code.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#lead-form"
              className="mw-btn-primary"
              style={{ background: '#fff', color: '#064E3B', borderColor: '#fff' }}
            >
              Get My Free CRO Review <ArrowRight size={16} />
            </a>
            <Link href="/work" className="mw-btn-outline">
              See our work
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {[
              'No credit card',
              'Reply in 24 hours',
              'Fixed-price quote',
              'Cancel anytime',
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5"
                style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}
              >
                <CheckCircle2 size={13} style={{ color: '#A7F3D0' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
