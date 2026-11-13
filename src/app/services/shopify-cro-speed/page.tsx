import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { NumberedList, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO & Speed Optimization Services | Miracle Websoft',
  description: 'Improve Shopify speed and conversion together by fixing Core Web Vitals, app bloat, product page friction, cart issues and checkout abandonment.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-cro-speed' },
  openGraph: {
    title: 'Shopify CRO & Speed Optimization Services | Miracle Websoft',
    description: 'Improve Shopify speed and conversion together by fixing Core Web Vitals, app bloat, product page friction, cart issues and checkout abandonment.',
    url: 'https://miraclewebsoft.com/services/shopify-cro-speed',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify CRO & Speed Optimization Services | Miracle Websoft',
    description: 'Improve Shopify speed and conversion together by fixing Core Web Vitals, app bloat, product page friction, cart issues and checkout abandonment.',
  },
}

const faqs = [
  { question: 'What is CRO (conversion rate optimisation)?', answer: 'CRO is the process of improving your store so a higher percentage of visitors become buyers. For a fashion brand doing $500K/year, a 1% lift in conversion rate is worth $5,000 in extra revenue — with no extra ad spend. We improve product pages, checkout flows, mobile experience, imagery, size guides, and cart recovery.' },
  { question: 'What is a good Shopify page speed score?', answer: 'Scores matter less than real load times, but 90+ on mobile PageSpeed Insights is a good target. Many unoptimised Shopify stores score in the 40s to 60s. We agree a realistic target for your theme and app stack before we start.' },
  { question: 'What most affects Shopify store speed?', answer: 'The three biggest culprits are: unoptimised images (often the single largest issue), too many third-party apps loading JavaScript, and an unoptimised theme with render-blocking code. We audit all three and fix them systematically — usually eliminating 3–8 unnecessary app scripts alone.' },
  { question: 'How much can you improve my conversion rate?', answer: 'It depends on your traffic, products and where the friction is, so we will not promise a number. We show you the specific changes planned and why we expect each to help before we start, then measure the result.' },
  { question: 'Do you guarantee a page speed improvement?', answer: 'We agree a measurable target before work starts, based on your theme and the apps you need to keep, and we report before-and-after numbers on your real templates. Some apps cannot be made fast, so we tell you up front where the limits are.' },
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
  { title: 'A target agreed up front', body: 'We agree a measurable speed and conversion target before work starts, and report before-and-after numbers.' },
  { title: 'A plan before you pay', body: 'Every planned change is listed with why we expect it to help. You know what you are getting before paying anything.' },
  { title: 'Fixed price, no surprises', body: 'Quoted at a fixed price after the free teardown. No hourly billing, no scope creep.' },
  { title: 'No rebuild unless it is needed', body: 'Most of the work happens on your current theme. We only recommend a rebuild when the theme itself is the problem.' },
]

const related = [
  { title: 'Custom Shopify Development', desc: 'When the theme itself is the bottleneck, a rebuild can be faster.', href: '/services/shopify/development' },
  { title: 'Shopify Migrations', desc: 'Moving to Shopify? We include speed optimisation in every migration.', href: '/services/shopify-migration' },
  { title: 'Shopify App Development', desc: 'Replace slow third-party apps with lean custom-built alternatives.', href: '/services/shopify-app-development' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify CRO & Speed Optimisation',
    description:
      'Speed optimisation and conversion rate optimisation for existing Shopify stores.',
    url: '/services/shopify-cro-speed',
    serviceType: 'Conversion rate optimisation',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'CRO & Speed Optimisation', url: '/services/shopify-cro-speed' },
  ]),
])

export default function CROSpeedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'CRO & Speed Optimisation' }]}
        eyebrow="CRO & speed"
        title={<>Your store gets traffic. <span className="mw-mark">Let&apos;s get more of it to buy.</span></>}
        lede="Slow pages, confusing product pages, app bloat and checkout friction quietly waste your ad spend. We find what stops shoppers buying, then fix speed and conversion together, in priority order."
        bullets={['Works on your current theme, no rebuild needed', 'Fixes ranked by likely revenue impact', 'Fixed-price quote after the free teardown']}
        aside={
          <figure className="audit-form-card" style={{ boxShadow: 'none' }} aria-label="Before and after example">
            <p className="mw-num" style={{ marginBottom: '1rem' }}>EXAMPLE · LUXURY FASHION STORE</p>
            <div className="grid grid-cols-2" style={{ borderTop: '1px solid var(--text-1)' }}>
              {[
                { label: 'Before', score: '44', rows: ['4.2 MB page weight', '11 app scripts', '6.8s LCP', 'CLS 0.42'], color: 'var(--text-3)' },
                { label: 'After', score: '91', rows: ['680 KB page weight', '3 scripts, deferred', '1.1s LCP', 'CLS 0.03'], color: 'var(--forest)' },
              ].map((c, i) => (
                <div key={c.label} style={{ padding: '1rem 0 0', paddingLeft: i ? '1.25rem' : 0, borderLeft: i ? '1px solid var(--border)' : undefined }}>
                  <p className="mw-num">{c.label.toUpperCase()}</p>
                  <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '3.25rem', lineHeight: 1, color: c.color, margin: '0.4rem 0 0.25rem' }}>{c.score}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: '0.75rem' }}>Mobile PageSpeed</p>
                  <ul>
                    {c.rows.map((r) => <li key={r} style={{ fontSize: '0.88rem', color: 'var(--text-2)', padding: '0.4rem 0', borderTop: '1px solid var(--border)' }}>{r}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <figcaption style={{ fontSize: '0.84rem', color: 'var(--text-3)', marginTop: '1rem' }}>Five-week project. Conversion rate up 42% over the same period.</figcaption>
          </figure>
        }
      />

      {/* Proof */}
      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Example project" title="Speed and conversion, fixed together." />
          <ServiceResult
            tag="Speed & CRO"
            metric="+42%"
            metricLabel="Conversion rate"
            title="Luxury fashion store: mobile PageSpeed 44 to 91, conversion rate up 42% in 5 weeks."
            bullets={[
              'Lighthouse audit found 8 unnecessary app scripts; all removed',
              'Image work cut page weight from 4.2 MB to 680 KB',
              'Checkout simplified from two steps to one page; cart abandonment down 28%',
            ]}
            duration="5-week project"
            cta={{ label: 'See all our work', href: '/work' }}
          />
          <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', marginTop: '1.25rem', maxWidth: '70ch' }}>
            Why it matters: on a store doing $500K a year, every extra percent of conversion is roughly $5,000 a month, with no extra ad spend.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="A practical CRO and speed programme." />
          <NumberedList items={deliverables.map((d) => ({ title: d }))} columns={3} />
        </div>
      </section>

      <MidPageCta
        heading="See exactly what is slowing buyers down."
        sub="Send your URL. Within 48 hours you get a short screen recording of your store's speed and conversion problems, ranked by likely impact."
      />

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />
    </>
  )
}
