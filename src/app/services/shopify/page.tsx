import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import MidPageCta from '@/components/services/MidPageCta'
import ServiceHero, { HeroScope, SectionHead, ServiceTable, NumberedList } from '@/components/services/ServiceHero'
import { breadcrumb, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Experts for Development & Growth | Miracle Websoft',
  description:
    'Improve your Shopify store with custom development, migrations, integrations, CRO, speed optimization and ongoing technical support from Shopify experts.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify' },
  openGraph: {
    title: 'Shopify Experts for Development & Growth | Miracle Websoft',
    description:
      'Improve your Shopify store with custom development, migrations, integrations, CRO, speed optimization and ongoing technical support from Shopify experts.',
    url: 'https://miraclewebsoft.com/services/shopify',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Experts for Development & Growth | Miracle Websoft',
    description:
      'Improve your Shopify store with custom development, migrations, integrations, CRO, speed optimization and ongoing technical support from Shopify experts.',
  },
}

const shopifyServices: { title: string; desc: string; href: string; price?: string }[] = [
  {
    title: 'Shopify Store Development',
    desc: 'Custom Shopify stores, redesigns and launch-ready ecommerce experiences built for conversion and easy management.',
    href: '/services/shopify/development',
    price: 'From $600',
  },
  {
    title: 'Shopify Plus Development',
    desc: 'Shopify Plus builds, B2B, checkout extensions, Functions, Markets, expansion stores and enterprise integrations.',
    href: '/services/shopify/shopify-plus-development',
  },
  {
    title: 'Shopify Theme Customization',
    desc: 'Theme sections, product pages, collection templates, checkout-adjacent UX and custom storefront improvements.',
    href: '/services/shopify/theme-customization',
  },
  {
    title: 'Shopify Custom Features',
    desc: 'Build the specific buying flow, configurator, bundle, quiz, portal or workflow that standard apps cannot handle.',
    href: '/services/shopify/custom-features',
    price: 'From $1,500',
  },
  {
    title: 'Shopify App Integration',
    desc: 'Integrate Klaviyo, Gorgias, ReCharge, Yotpo, ERPs, CRMs, fulfilment, analytics, marketplaces and custom APIs.',
    href: '/services/shopify/app-integration',
  },
  {
    title: 'Shopify Migration',
    desc: 'Move from WooCommerce, Magento, BigCommerce or custom platforms with data, redirects and launch checks handled.',
    href: '/services/shopify-migration',
    price: 'Fixed quote',
  },
  {
    title: 'Shopify Maintenance',
    desc: 'Ongoing support, theme updates, app checks, speed monitoring, product changes and long-term improvement retainers.',
    href: '/services/shopify/shopify-maintenance',
    price: 'From $99/mo',
  },
  {
    title: 'Shopify API & Private Apps',
    desc: 'Custom Shopify APIs, private apps, admin tools, storefront integrations, webhooks and automation for unique operations.',
    href: '/services/shopify/api-private-apps',
    price: 'From $1,500',
  },
]

const faqs = [
  {
    question: 'What Shopify services do you provide?',
    answer: 'We provide Shopify store development, Shopify Plus development, theme customization, custom features, app integration, migration, maintenance, API development and private apps.',
  },
  {
    question: 'Do you work with existing Shopify stores?',
    answer: 'Yes. We work on new builds, redesigns, feature development, CRO, speed optimization, app cleanup, migration support and ongoing maintenance for existing stores.',
  },
  {
    question: 'Can you work as a long-term Shopify partner?',
    answer: 'Yes. Many clients retain us for ongoing feature work, technical support, speed improvements, CRO, app integrations and campaign support after the first project.',
  },
  {
    question: 'Do you serve clients outside India?',
    answer: 'Yes. Our primary markets are the United States, Canada, United Kingdom, Australia and Europe, and all communication is in English.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Services - Miracle Websoft',
    description:
      'Shopify development, Shopify Plus, theme customization, custom features, app integration, migrations, maintenance, APIs and private apps.',
    url: 'https://miraclewebsoft.com/services/shopify',
  }),
  service({
    name: 'Shopify Services',
    description:
      'Shopify development, Shopify Plus, theme customization, custom features, app integrations, migrations, maintenance and private apps.',
    url: '/services/shopify',
    serviceType: 'Shopify development agency',
    areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify Services', url: '/services/shopify' },
  ]),
  itemList({
    name: 'Shopify services offered by Miracle Websoft',
    items: shopifyServices.map((item) => ({
      name: item.title,
      url: item.href,
      description: item.desc,
    })),
  }),
])

export default function ShopifyServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Shopify Services' }]}
        eyebrow="Shopify services · Shopify Partner"
        title={<>Shopify builds, fixes and support, <span className="mw-mark">at a fixed price.</span></>}
        lede="New stores, redesigns, custom features, integrations and ongoing care for Shopify merchants. 700+ projects since 2015, done by a 16-person in-house team."
        aside={
          <HeroScope
            label="Where to start"
            items={[
              'Launching or redesigning: store build from $600',
              'Need something apps cannot do: custom features from $1,500',
              'Keeping it running: care plans from $99/mo',
            ]}
            foot="Not sure which one you need? The free teardown tells you what to fix first."
          />
        }
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Shopify services" title="Pick the service that matches the blocker." />
          <ServiceTable items={shopifyServices.map((s) => ({ name: s.title, line: s.desc, price: s.price, href: s.href }))} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">How we work</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>No open-ended hourly billing.</h2>
          </div>
          <NumberedList
            columns={2}
            items={[
              { title: 'Fixed quote in 24 hours', body: 'Scope, price and timeline in writing, agreed before any work starts.' },
              { title: 'Mobile first', body: 'Most of your shoppers are on a phone, so that is where we design and test first.' },
              { title: 'Speed is part of the build', body: 'App bloat, image weight and Core Web Vitals are handled as part of the work.' },
              { title: 'Direct access', body: 'You talk to the people building your store, not an account manager.' },
            ]}
          />
        </div>
      </section>

      <MidPageCta
        heading="Already on Shopify? Start with what is costing you orders."
        sub="Send your URL. Within 48 hours you get a short screen recording of the biggest problems on your store, ranked by likely impact."
      />

      <FaqSection faqs={faqs} heading="Common questions" />
    </>
  )
}
