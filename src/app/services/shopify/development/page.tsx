import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Shopify Store Development | Miracle Websoft',
  description: 'Launch or rebuild a custom Shopify store with mobile first UX, fast performance, conversion focused pages, integrations and Shopify Plus capabilities.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify/development' },
  openGraph: {
    title: 'Custom Shopify Store Development | Miracle Websoft',
    description: 'Launch or rebuild a custom Shopify store with mobile first UX, fast performance, conversion focused pages, integrations and Shopify Plus capabilities.',
    url: 'https://miraclewebsoft.com/services/shopify/development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify Store Development | Miracle Websoft',
    description: 'Launch or rebuild a custom Shopify store with mobile first UX, fast performance, conversion focused pages, integrations and Shopify Plus capabilities.',
  },
}

const features = [
  'Custom theme design built from scratch — no templates',
  'Mobile-first build with an agreed speed budget',
  'Shopify Plus builds and enterprise architecture',
  'Custom app and third-party integration development',
  'Complex product variant & catalogue architecture',
  'Checkout flow optimisation and upsell logic',
  'Multi-currency, multi-language, international markets',
  'B2B wholesale portals and gated pricing',
  'ERP, CRM and logistics API integrations',
  'SEO-optimised site architecture and structured data',
  'Full cross-device and cross-browser QA',
  'Post-launch support and CRO retainer',
]

const buildTypes = [
  {
    title: 'New Store Builds',
    price: 'From $600',
    desc: 'Your store built from a blank canvas. Custom theme, navigation, product architecture and checkout — designed around your brand and how your customers actually shop.',
    examples: ['Custom theme from scratch', 'Brand-aligned design system', 'Product structure planning', 'Launch-day checklist included'],
  },
  {
    title: 'Store Redesigns',
    price: 'From $1,000',
    desc: 'Your live store rebuilt for speed, conversion and mobile. We keep your customer data and URL structure, and set up redirects wherever a URL has to change, so search value is protected.',
    examples: ['Full theme replacement', 'Product & collection pages', 'Checkout flow rebuild', 'SEO preserved throughout'],
  },
  {
    title: 'Shopify Plus Builds',
    price: 'Fixed quote',
    desc: 'For stores doing $1M+ per year. Custom checkout extensibility, Shopify Functions, B2B wholesale channels, Launchpad automation and dedicated performance engineering.',
    examples: ['Custom checkout extensions', 'Shopify Functions (discounts, shipping)', 'B2B wholesale portals', 'Expansion stores & markets'],
  },
]

const integrations = [
  { name: 'Klaviyo', category: 'Email & SMS' },
  { name: 'Gorgias', category: 'Customer support' },
  { name: 'Yotpo', category: 'Reviews & loyalty' },
  { name: 'ReCharge', category: 'Subscriptions' },
  { name: 'Netsuite', category: 'ERP' },
  { name: 'ShipStation', category: 'Fulfilment' },
  { name: 'Meta CAPI', category: 'Ads attribution' },
  { name: 'TikTok Shop', category: 'Social commerce' },
  { name: 'Attentive', category: 'SMS marketing' },
  { name: 'Afterpay / Klarna', category: 'BNPL' },
  { name: 'Searchanise', category: 'Search & filter' },
  { name: 'Custom ERPs', category: 'API integration' },
]

const faqs = [
  {
    question: 'How much does a custom Shopify store cost?',
    answer: 'A Basic Store build is $600 and an Advanced Store is $1,000. Custom development starts at $1,500, and projects with custom apps, integrations or Shopify Plus features are quoted after a short scoping call. You always get a fixed-price proposal before any work begins, with no hourly billing.',
  },
  {
    question: 'Do you use themes or build from scratch?',
    answer: 'Depends on the scope and budget. For most projects we build a fully custom theme from a blank canvas. For others we heavily customise an existing theme as a starting point. We\'ll always recommend the right approach — we never oversell a full custom build if a theme customisation achieves the same result.',
  },
  {
    question: 'What is Shopify Plus and do I need it?',
    answer: 'Shopify Plus is Shopify\'s enterprise plan (see shopify.com/plus/pricing for current pricing). It adds checkout customization on the information, shipping and payment steps, custom apps that use Shopify Functions, B2B features, higher API limits and dedicated support. Most brands need it once they exceed $1M/year in revenue or require checkout customisations not possible on standard Shopify.',
  },
  {
    question: 'How long does a custom Shopify build take?',
    answer: 'A standard custom theme build takes 4–8 weeks depending on scope. Complex projects with custom apps, third-party integrations or Shopify Plus features typically take 10–16 weeks. We give a clear timeline in every proposal — and we hold to it.',
  },
  {
    question: 'Do you work on existing stores or only new builds?',
    answer: 'Both. We do full rebuilds, redesigns of live stores, and targeted improvements (product pages, checkout, speed, specific features) on existing Shopify stores without requiring a full rebuild.',
  },
  {
    question: 'Can you handle complex product catalogues and variants?',
    answer: 'Yes. Complex variant architecture — multiple sizes, colours and materials; bundle builders; configurable products; high-SKU catalogues — is a core part of what we build. We also handle B2B wholesale pricing, tiered discounts, and customer-group-specific catalogues.',
  },
  {
    question: 'Do you integrate with ERPs, CRMs and third-party platforms?',
    answer: 'Yes. We have built integrations with NetSuite, SAP, Salesforce, HubSpot, ShipStation, various 3PL platforms, and custom internal systems. Both webhook-based and polling integrations, REST and GraphQL APIs.',
  },
  {
    question: 'What happens after launch?',
    answer: 'We offer ongoing support and optimisation retainers. Most clients work with us on a retained basis — monthly CRO testing, new feature development, Shopify platform updates and performance monitoring. Launch is the beginning, not the end.',
  },
]

const guarantees = [
  { title: 'A speed budget, agreed up front', body: 'We set a mobile performance target with you before the build and test against it before launch, not after.' },
  { title: 'Fixed price before we start', body: 'A detailed fixed-price proposal before a line of code is written. No hourly billing, no surprise invoices.' },
  { title: 'Mobile first, always', body: 'Most Shopify traffic is on a phone, so that is where we design and test first.' },
  { title: 'A planned launch', body: 'QA across devices, redirects, tracking and post-launch checks are part of the scope, not extras.' },
]

const related = [
  { title: 'Shopify App Development', desc: 'Custom apps, Functions and checkout extensions.', href: '/services/shopify-app-development' },
  { title: 'CRO & Speed Optimisation', desc: 'Improve conversions and PageSpeed on your existing store.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify Migrations', desc: 'Move from WooCommerce, Magento or BigCommerce to Shopify.', href: '/services/shopify-migration' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Custom Shopify Development',
    description:
      'Bespoke Shopify stores built from scratch — custom themes, Shopify Plus builds, app integrations and migrations.',
    url: '/services/shopify/development',
    serviceType: 'Shopify development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Custom Shopify Development', url: '/services/shopify/development' },
  ]),
])

const industries = [
  { name: 'Fashion & Clothing', href: '/services/shopify/fashion-apparel', highlight: 'TikTok Shop, size guides, drops' },
  { name: 'Electronics', href: '/services/shopify/electronics', highlight: 'Spec comparison, B2B, high SKU' },
  { name: 'Beauty & Cosmetics', href: '/services/shopify/beauty-cosmetics', highlight: 'Shade matching, subscriptions, quiz funnels' },
  { name: 'Health & Wellness', href: '/services/shopify/health-wellness', highlight: 'Compliant claims, subscriptions, trust signals' },
  { name: 'Jewelry', href: '/services/shopify/jewelry', highlight: 'Engraving, ring sizers, luxury UX' },
  { name: 'Food & Beverage', href: '/services/shopify/food-beverage', highlight: 'Delivery, allergens, age gates' },
  { name: 'Home & Furniture', href: '/services/shopify/home-decor', highlight: 'Configurators, freight, swatches' },
  { name: 'Sports & Fitness', href: '/services/shopify/sports-fitness', highlight: 'Subscriptions, bundles, B2B' },
  { name: 'Pet Supplies', href: '/services/shopify/pets', highlight: 'Breed filtering, subscriptions' },
  { name: 'B2B & Wholesale', href: '/services/shopify/b2b-wholesale', highlight: 'Company accounts, price lists, net terms' },
  { name: 'Subscription & DTC', href: '/services/shopify/subscription-dtc', highlight: 'Recurring orders, bundles, retention' },
  { name: 'Print on Demand', href: '/services/shopify/print-on-demand', highlight: 'Product personalisation, fulfilment apps' },
]

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Custom Shopify Development' }]}
        eyebrow="Custom Shopify development"
        title={<>Custom Shopify store development, <span className="mw-mark">built to sell and easy to run.</span></>}
        lede="If your store feels generic, loads slowly or fails to turn traffic into orders, we rebuild it around your customers, your products and how your team actually works. Fixed price, agreed before we start."
        bullets={['Custom theme or a heavily adapted one, whichever fits the budget', 'Mobile-first, with a speed budget agreed up front', 'Shopify Plus, B2B and integrations when you need them']}
        aside={
          <HeroScope
            label="Prices"
            items={['Basic store build: $600', 'Advanced store build: $1,000', 'Custom development: from $1,500', 'Care plans after launch: from $99/mo']}
            foot={<>Every project gets a written fixed quote within 24 hours. <Link href="/pricing" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>See pricing</Link></>}
          />
        }
      />

      {/* Build types */}
      <section className="mw-section">
        <div className="mw-container">
          <SectionHead
            eyebrow="What we build"
            title="Launches, redesigns and Shopify Plus."
            intro="Starting from zero, replacing a slow theme or getting ready for more volume, the goal is the same: a store shoppers trust and your team can run without us."
          />
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--text-1)' }}>
            {buildTypes.map((type, i) => (
              <div key={type.title} className={i ? 'md:border-l md:pl-8' : ''} style={{ padding: '1.5rem 1.5rem 1.5rem 0', borderColor: 'var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-baseline justify-between gap-3" style={{ marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 400, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{type.title}</h3>
                  <span className="svc-price" style={{ whiteSpace: 'nowrap' }}>{type.price}</span>
                </div>
                <p style={{ fontSize: '0.93rem', marginBottom: '1rem' }}>{type.desc}</p>
                <ul className="offer-list" style={{ marginTop: 0, gap: '0.4rem' }}>
                  {type.examples.map((ex) => <li key={ex} style={{ fontSize: '0.9rem' }}>{ex}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="Verified project" title="A recent custom store build." />
          <ServiceResult
            tag="Custom store build"
            metric="5.0"
            metricLabel="Client rating on Upwork"
            title="Flowers A Million: complete Shopify store on a custom theme, built for mobile occasion buying."
            bullets={[
              'Bespoke homepage and collection sections so seasonal ranges can be merchandised without code',
              'Image-forward product pages and a mobile-first purchase flow',
              'Client: “Great work and delivered exactly what was asked.”',
            ]}
            duration="Jul 2025 · Upwork"
            cta={{ label: 'Read the case study', href: '/work/shopify-ecomerce-store-2025' }}
          />
        </div>
      </section>

      <MidPageCta
        heading="Not sure you need a rebuild?"
        sub="Often you don't. Send your URL and we will show you, on video, what to fix on the store you already have."
      />

      {/* What's included */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="What's included"
            title="What every serious build should include."
            intro="Not technical decoration: the foundation for a store that loads quickly, ranks, converts on mobile and stays flexible as you grow."
          />
          <NumberedList items={features.map((f) => ({ title: f }))} columns={3} />
        </div>
      </section>

      {/* Integrations */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Integrations</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>Connected to the tools that run the business.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '42ch' }}>Email, reviews, fulfilment, support, ERP, analytics and payments, working together so your team spends less time fighting systems.</p>
          </div>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-8" style={{ borderTop: '1px solid var(--text-1)' }}>
            {integrations.map((item) => (
              <div key={item.name} style={{ padding: '0.9rem 0', borderBottom: '1px solid var(--border)' }}>
                <dt style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '0.95rem' }}>{item.name}</dt>
                <dd className="mw-num" style={{ marginTop: '0.2rem' }}>{item.category}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Industries */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="By industry" title="Built around how your customers buy." />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{ borderTop: '1px solid var(--text-1)' }}>
            {industries.map((ind) => (
              <li key={ind.href} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link href={ind.href} className="group flex items-start justify-between gap-3" style={{ padding: '1rem 0' }}>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.2rem', color: 'var(--text-1)' }}>{ind.name}</span>
                    <span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '0.2rem' }}>{ind.highlight}</span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-4)', marginTop: 4 }} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />
    </>
  )
}
