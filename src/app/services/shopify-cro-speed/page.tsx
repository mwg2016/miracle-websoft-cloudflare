import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO and Speed Optimization for Fashion Brands | Miracle Websoft',
  description: 'Average 42% conversion rate increase and 1.2s mobile load time. Free CRO audit for Shopify fashion brands. Guaranteed 90+ PageSpeed score.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-cro-speed' },
}

const faqs = [
  { question: 'What is CRO (conversion rate optimisation)?', answer: 'CRO is the process of improving your store so a higher percentage of visitors become buyers. For a fashion brand doing $500K/year, a 1% lift in conversion rate is worth $5,000 in extra revenue — with no extra ad spend. We improve product pages, checkout flows, mobile experience, imagery, size guides, and cart recovery.' },
  { question: 'What is a good Shopify page speed score?', answer: 'A Google PageSpeed Insights score of 90+ on mobile is the target. Most unoptimised Shopify stores score 40–65. We consistently achieve 90+ and a Largest Contentful Paint (LCP) under 1.5 seconds after our optimisation work.' },
  { question: 'What most affects Shopify store speed?', answer: 'The three biggest culprits are: unoptimised images (often the single largest issue), too many third-party apps loading JavaScript, and an unoptimised theme with render-blocking code. We audit all three and fix them systematically — usually eliminating 3–8 unnecessary app scripts alone.' },
  { question: 'How much can you improve my conversion rate?', answer: 'Our average across completed CRO projects is a 42% conversion rate increase. Results vary — some stores see 20%, others see 60%+. We show you the specific changes planned and their expected impact before we start, so you know exactly what you are getting.' },
  { question: 'Do you guarantee a page speed improvement?', answer: 'Yes. We guarantee a Google PageSpeed Insights score of 90+ on mobile for speed optimisation projects. If we do not achieve this, we keep working until we do — at no additional cost.' },
  { question: 'How long does a CRO and speed project take?', answer: 'A focused speed optimisation project typically takes 1–3 weeks. A full CRO programme — including product page redesign, checkout improvements, A/B test setup, and ongoing monthly reporting — runs for 3–6 months.' },
  { question: 'Do I need to rebuild my whole store for speed improvements?', answer: 'No. Speed optimisation can be done on your existing store without a full rebuild. We work with your current theme, removing bloat, compressing images, deferring scripts, and inlining critical CSS. A full rebuild is only recommended if the theme itself is fundamentally unoptimisable.' },
]

const deliverables = [
  'Full Lighthouse audit — mobile and desktop',
  'Core Web Vitals improvement plan',
  'Image compression and next-gen format conversion',
  'JavaScript bundle analysis and reduction',
  'Critical CSS extraction and inlining',
  'Third-party script audit and deferral',
  'Product page conversion audit',
  'Checkout flow analysis and fixes',
  'Add-to-cart rate optimisation',
  'Homepage and collection page CRO',
  'A/B test setup and analysis',
  'Monthly performance reporting',
]

const guarantees = [
  { icon: '⚡', title: '90+ PageSpeed Guaranteed', body: 'We guarantee a Google PageSpeed Insights score of 90+ on mobile. If we don\'t hit it, we keep working at no additional cost until we do.' },
  { icon: '📊', title: 'Upfront Impact Plan', body: 'Before we start, we show you every change planned and its expected impact on conversion rate. You know exactly what you\'re getting before paying anything.' },
  { icon: '🔒', title: 'Fixed-Price, No Surprises', body: 'Every CRO and speed project is quoted at a fixed price. No hourly billing, no scope creep, no surprises. The price we quote is the price you pay.' },
]

const related = [
  { title: 'Custom Shopify Development', desc: 'Sometimes a full rebuild is the fastest path to 90+ scores.', href: '/services/shopify/development' },
  { title: 'Shopify Migrations', desc: 'Moving to Shopify? We include speed optimisation in every migration.', href: '/services/shopify-migration' },
  { title: 'Shopify App Development', desc: 'Replace slow third-party apps with lean custom-built alternatives.', href: '/services/shopify-app-development' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify CRO & Speed Optimisation',
    description:
      'Sub-1.5s mobile load time, 90+ PageSpeed scores and conversion rate optimisation for existing Shopify stores.',
    url: '/services/shopify-cro-speed',
    serviceType: 'Conversion rate optimisation',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'CRO & Speed Optimisation', url: '/services/shopify-cro-speed' },
  ]),
  faqPage(faqs),
])

export default function CROSpeedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'CRO & Speed Optimisation' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">CRO & SPEED</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>Your Store Is Getting Traffic. We Make Sure More of It Converts.</h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '580px', fontWeight: 300 }}>
              Average results across our CRO projects: <strong style={{ color: '#fff', fontWeight: 600 }}>42% conversion rate increase</strong> and a <strong style={{ color: '#fff', fontWeight: 600 }}>1.2s mobile load time</strong>. Guaranteed 90+ PageSpeed or we keep working.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['42% avg conversion lift', '90+ PageSpeed guaranteed', 'No full rebuild needed', 'Fixed-price quote'].map(t => (
                <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="mw-btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator callout */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Case study result */}
            <ServiceResult
              tag="Speed & CRO"
              tagColor="#F59E0B"
              metric="+42%"
              metricLabel="Conversion Rate"
              title="Luxury fashion store: PageSpeed 44 → 91. Conversion rate up 42% in 5 weeks."
              bullets={[
                'Lighthouse audit identified 8 unnecessary app scripts — all removed',
                'Image compression reduced page weight from 4.2MB to 680KB',
                'Checkout flow rebuilt — 2-step to 1-page, cart abandonment dropped 28%',
              ]}
              duration="5-week project"
              cta={{ label: 'See all results', href: '/case-studies' }}
            />

            {/* ROI example */}
            <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.5rem' }}>What This Means in Revenue</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.4, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                  A 1% conversion lift pays for our entire CRO service in 30–60 days.
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { revenue: '$500K/year', lift: '+1%', extra: '+$5,000/month' },
                    { revenue: '$1M/year',   lift: '+1%', extra: '+$10,000/month' },
                    { revenue: '$2M/year',   lift: '+1%', extra: '+$20,000/month' },
                  ].map(row => (
                    <div key={row.revenue} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>Store doing {row.revenue}</span>
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>{row.lift} conv. lift</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#10B981' }}>{row.extra}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.25rem', lineHeight: 1.5 }}>
                Our average is a 42% conversion rate increase — not 1%. The numbers above are conservative. This is with zero increase in ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After speed visual */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Before & After</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(20px,2.5vw,28px)' }}>What your PageSpeed score looks like after we're done</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {/* Before */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.18)' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#EF4444', marginBottom: '0.75rem' }}>Before</p>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#EF4444', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>44</div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Google PageSpeed Mobile</p>
              <div className="flex flex-col gap-1.5">
                {['4.2MB page weight', '11 app scripts loading', '6.8s LCP (Largest Content Paint)', 'CLS score 0.42 (layout shifting)'].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 700 }}>✕</span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#10B981', marginBottom: '0.75rem' }}>After</p>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#10B981', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>91</div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Google PageSpeed Mobile</p>
              <div className="flex flex-col gap-1.5">
                {['680KB page weight', '3 scripts (deferred)', '1.1s LCP — below 1.5s target', 'CLS score 0.03 (no shifting)'].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '3rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What's Included</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>A complete CRO and speed programme</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading="See exactly what's slowing your store down — free."
        sub="We'll audit your store's speed and conversion blockers at no cost. You get a full written report either way."
        btnLabel="Contact Us"
      />

      {/* Guarantees */}
      <GuaranteeBar guarantees={guarantees} />

      <WhyUs />

      <FaqSection faqs={faqs} heading="CRO & speed optimisation — common questions" />

      <RelatedServices services={related} />

      <CtaBanner />
    </>
  )
}
