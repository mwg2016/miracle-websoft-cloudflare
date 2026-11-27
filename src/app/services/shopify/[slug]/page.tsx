import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, QuoteSection, SectionHead } from '@/components/services/ServiceHero'
import shopifyServices, { getShopifyService } from '@/data/shopify-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'
import { COMPANY } from '@/data/company-facts'
import ServiceResult from '@/components/services/ServiceResult'
import { jobs, jobTitle } from '@/data/jobs'

// One verified Upwork project per service page (unique, non-templated record).
const RELATED_JOB: Record<string, string> = {
  'shopify-plus-development': 'shopify-plus-checkout-3-features-2025',
  'theme-customization': 'figma-to-shopify-dessert-2026',
  'custom-features': 'shopify-cart-disclaimer-2025',
  'app-integration': 'klaviyo-theme-tracking-2024',
  'shopify-maintenance': 'sparktrendz-store-maintenance-2025',
  'api-private-apps': 'shopify-esim-api-integration-2025',
  'fashion-apparel': 'eco-brand-turnkey-shopify-2026',
}

function firstSentence(text: string) {
  const m = text.match(/^.*?[.!?](\s|$)/)
  return (m ? m[0] : text).trim()
}

type Params = { slug: string }

export async function generateStaticParams() {
  return shopifyServices.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const svc = getShopifyService(slug)
  if (!svc) return {}
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `https://miraclewebsoft.com/services/shopify/${slug}` },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: `https://miraclewebsoft.com/services/shopify/${slug}`,
      type: 'website',
    },
  }
}

const shopifyGuarantees = [
  { title: 'Built for mobile buyers', body: 'Your store is planned for the device most customers use first. Speed, layout, product clarity and checkout flow are treated as revenue issues.' },
  { title: 'Fixed price before we start', body: 'You get a detailed proposal before work begins. No open-ended hourly billing, no surprise invoice at the end.' },
  { title: 'A planned launch', body: 'We manage QA, redirects, tracking, DNS, SSL and post-launch checks so the store can go live without unnecessary disruption.' },
]

const shopifyRelated = [
  { title: 'CRO & Speed Optimisation', desc: 'Already have a store? Improve conversions and page speed.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify App Development', desc: 'Custom apps for drop systems, loyalty, bundles and more.', href: '/services/shopify-app-development' },
  { title: 'Shopify Migrations', desc: 'Moving from WooCommerce, Magento or another platform.', href: '/services/shopify-migration' },
]

const whyReasons = [
  { title: 'Shopify since 2016', body: 'Launches, redesigns, migrations, app builds and growth work across 700+ projects.' },
  { title: 'Business-first advice', body: 'We tell you what is likely to move revenue, what can wait, and when a full rebuild is unnecessary.' },
  { title: 'Speed is part of the build', body: 'App bloat, Core Web Vitals and mobile layout are handled as part of the store, not as an afterthought.' },
  { title: 'You talk to the people doing the work', body: 'An in-house team in India. Clear updates, practical decisions, no hand-off chain.' },
]

export default async function ShopifyServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const svc = getShopifyService(slug)
  if (!svc) notFound()

  const url = `/services/shopify/${slug}`
  const jsonLd = renderJsonLd([
    service({
      name: svc.h1,
      description: svc.subtext,
      url,
      serviceType: 'Shopify development',
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: svc.h1, url },
    ]),
  ])

  const category = svc.eyebrow.toLowerCase().replace('shopify for ', '').replace('shopify ', '')

  const relatedJobId = RELATED_JOB[slug]
  const relatedJob = relatedJobId ? jobs.find(j => j.id === relatedJobId) : undefined

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: svc.h1 }]}
        eyebrow={svc.eyebrow}
        title={svc.h1}
        lede={svc.subtext}
        aside={<HeroScope items={svc.features.slice(0, 5)} foot={<>Fixed price, agreed before work starts. <a href="#get-quote" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Request a quote</a></>} />}
      />

      {/* Challenges */}
      <section className="mw-section">
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="mw-eyebrow">Common problems</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>What quietly costs sales here.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '40ch' }}>
              The issues we see most often on {category} stores, and the first things we check.
            </p>
          </div>
          <NumberedList items={svc.challenges} columns={1} />
        </div>
      </section>

      {/* Features */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="What we can build or improve." />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{ borderTop: '1px solid var(--text-1)' }}>
            {svc.features.map((f) => (
              <li key={f} style={{ padding: '0.95rem 0 0.95rem 1.6rem', borderBottom: '1px solid var(--border)', position: 'relative', color: 'var(--text-2)', fontSize: '0.95rem' }}>
                <span aria-hidden style={{ position: 'absolute', left: 0, top: '1.55rem', width: '0.9rem', height: 1, background: 'var(--text-4)' }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Why Miracle Websoft</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>A Shopify team that ships, not a hand-off chain.</h2>
            <dl className="stats" style={{ marginTop: '2rem', maxWidth: 420 }}>
              <div><dt>Projects since {COMPANY.foundedYear}</dt><dd style={{ fontSize: '2.4rem' }}>{COMPANY.projects}</dd></div>
              <div><dt>Upwork status</dt><dd style={{ fontSize: '1.6rem' }}>{COMPANY.upwork.badge}</dd></div>
            </dl>
          </div>
          <NumberedList items={whyReasons} columns={2} />
        </div>
      </section>

      <MidPageCta
        heading={`See what is holding your ${category} store back.`}
        sub="Send your URL. Within 48 hours you get a short screen recording of the biggest problems on your store, ranked by likely impact."
      />

      {relatedJob && (
        <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="mw-container">
            <SectionHead eyebrow="Verified project" title="A recent project like this." />
            <ServiceResult
              tag={relatedJob.category}
              metric={relatedJob.rating.toFixed(1)}
              metricLabel="Client rating on Upwork"
              title={jobTitle(relatedJob)}
              bullets={[
                firstSentence(relatedJob.description),
                ...(relatedJob.review ? [`Client: “${relatedJob.review}”`] : []),
              ]}
              duration={`${relatedJob.completedDate} · Upwork`}
              cta={{ label: 'Read the project record', href: `/work/${relatedJob.id}` }}
            />
          </div>
        </section>
      )}

      <GuaranteeBar guarantees={shopifyGuarantees} />

      <FaqSection faqs={svc.faqs} heading="Common questions" />

      <RelatedServices services={shopifyRelated} />

      <QuoteSection
        title="Send the brief, get a fixed price."
        body="Send your store URL, the project or the current problem. We reply within one business day with practical next steps, likely scope and a fixed-price path forward."
      >
        <ServiceContactForm
          service={svc.h1}
          heading={svc.formHeading}
          subtext={svc.formSubtext}
        />
      </QuoteSection>
    </>
  )
}
