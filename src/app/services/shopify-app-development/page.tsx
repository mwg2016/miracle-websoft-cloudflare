import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, SectionHead, TypeColumns } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Shopify App Developers | Miracle Websoft',
  description: 'Build custom Shopify apps, Functions and private tools that replace costly apps, automate store workflows and support unique ecommerce experiences.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-app-development' },
  openGraph: {
    title: 'Custom Shopify App Developers | Miracle Websoft',
    description: 'Build custom Shopify apps, Functions and private tools that replace costly apps, automate store workflows and support unique ecommerce experiences.',
    url: 'https://miraclewebsoft.com/services/shopify-app-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify App Developers | Miracle Websoft',
    description: 'Build custom Shopify apps, Functions and private tools that replace costly apps, automate store workflows and support unique ecommerce experiences.',
  },
}

const faqs = [
  {
    question: 'What kind of Shopify apps do you build?',
    answer: 'We build custom apps (for a single store, formerly called private apps), public apps (for the Shopify App Store), and checkout extensions. Common projects include product drop and waitlist systems, bundle builders, custom size guides, loyalty programs, B2B wholesale portals, ERP integrations, and custom engraving or personalisation tools.',
  },
  {
    question: 'What is the difference between a custom app and a public app?',
    answer: 'A custom app is built for one store and is never listed on the App Store. Shopify retired the older "private app" type in 2022, and new custom apps are now created through Shopify\'s Dev Dashboard. A public app can be installed by any merchant and is listed on the App Store after passing Shopify\'s review. Custom apps are usually faster and cheaper to build.',
  },
  {
    question: 'Can you build Shopify Functions?',
    answer: 'Yes. Shopify Functions let you customise checkout logic — discounts, shipping methods, payment options, and cart validation — at a deep level that standard apps cannot access. Stores on any plan can use public App Store apps that contain Functions, but a custom app containing Functions only runs on Shopify Plus, so we recommend the right route for your plan. We have built Functions for custom discount stacking, tiered pricing, and conditional free shipping rules.',
  },
  {
    question: 'Can you replace a paid Shopify app with custom code?',
    answer: 'Often yes. Many stores pay $50–200/month for app functionality that can be built once as custom code. We audit which apps in your stack are replaceable and rebuild them. That usually cuts the subscription cost, but a custom app still has costs of its own: hosting if it runs a backend, and maintenance as Shopify releases new API versions.',
  },
  {
    question: 'How long does it take to build a Shopify app?',
    answer: 'A simple custom app (e.g. a metafield editor, basic webhook integration) typically takes 1–3 weeks. A complex app with Shopify Functions, billing, admin UI, and App Store submission takes 6–12 weeks.',
  },
  {
    question: 'Do you maintain the apps you build after launch?',
    answer: 'Yes. We offer ongoing maintenance and update packages. This includes handling Shopify API version upgrades (Shopify releases a new API version every quarter and supports each for at least 12 months), adding new features, and monitoring for any issues caused by Shopify platform changes.',
  },
]

const apps = [
  'Product drop and waitlist apps',
  'Bundle builder and kit builder apps',
  'Custom size guide and fit recommendation apps',
  'Loyalty and rewards program apps',
  'Subscription and membership apps',
  'B2B wholesale and tiered pricing apps',
  'Custom checkout extensions (Shopify Plus)',
  'ERP and inventory sync apps',
  'Social proof and review apps',
  'Shopify Functions for discount and shipping logic',
  'Custom admin apps for internal tools',
  'Storefront API integrations',
]

const guarantees = [
  { title: 'Fixed price before we start', body: 'Every app is scoped and priced before a line of code is written. No hourly billing, no surprise invoices.' },
  { title: 'Shopify-native architecture', body: 'Built on Shopify\'s official APIs, App Bridge and CLI, so it is straightforward to keep current as the platform changes.' },
  { title: 'Maintained after launch', body: 'Shopify releases a new API version every quarter, each supported for at least 12 months. Our maintenance packages keep your app compatible.' },
  { title: 'You own the code', body: 'The app is built for your store and handed over with documentation, not rented back to you.' },
]

const related = [
  { title: 'Custom Shopify Development', desc: 'Build a full custom Shopify theme alongside your app.', href: '/services/shopify/development' },
  { title: 'CRO & Speed Optimisation', desc: 'Remove slow third-party apps and improve store performance.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify Migrations', desc: 'Migrate to Shopify and rebuild your app stack cleanly.', href: '/services/shopify-migration' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify App Development',
    description:
      'Custom and public Shopify apps — admin tools, storefront and checkout extensions, Shopify Functions and integrations.',
    url: '/services/shopify-app-development',
    serviceType: 'Shopify app development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify App Development', url: '/services/shopify-app-development' },
  ]),
])

const appTypes = [
  {
    title: 'Custom apps',
    tag: 'Most common',
    desc: 'Built only for your store and never listed on the App Store (formerly called private apps). Faster and cheaper to build, with no App Store review. Ideal for replacing paid apps or adding internal tools.',
    examples: ['Product drop systems', 'Custom loyalty programs', 'ERP sync apps', 'Internal admin tools'],
  },
  {
    title: 'Shopify Functions',
    tag: 'Custom: Plus only',
    desc: 'Checkout logic no standard app can reach: discounts, shipping, payment options and cart validation.',
    examples: ['Custom discount stacking', 'Tiered B2B pricing', 'Conditional shipping rules', 'Cart validation logic'],
  },
  {
    title: 'Public apps',
    tag: 'App Store',
    desc: 'Listed on the Shopify App Store for any merchant to install. We handle architecture, OAuth, billing and the review submission.',
    examples: ['App Store apps', 'Embedded admin apps', 'Checkout UI extensions', 'Theme app extensions'],
  },
]

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Shopify App Development' }]}
        eyebrow="Shopify app development"
        title={<>Custom Shopify app development: <span className="mw-mark">when apps almost fit, we build the one that does.</span></>}
        lede="Manual work, a stack of overlapping subscriptions, or a buying flow Shopify can't do out of the box. We build custom Shopify apps that fit your store, your operations and your customers."
        bullets={['Custom apps, public apps and Shopify Functions', 'Replace paid apps you only half use', 'Custom development from $1,500, fixed price']}
        primary={{ label: 'Book a 15-min scoping call', href: '/book' }}
        secondary={{ label: 'Send a written brief', href: '/contact' }}
        aside={
          <HeroScope
            label="App replacement maths"
            items={['2 apps at $99/mo: $2,376 a year', '3 apps at $79/mo: $2,844 a year', '4 apps at $49 to $149/mo: $4,080 a year']}
            foot="A custom build typically costs $1,500 to $6,000 depending on complexity, then nothing recurring."
          />
        }
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Verified project" title="A custom integration, built into the store." />
          <ServiceResult
            tag="Custom Shopify integration"
            metric="5.0"
            metricLabel="Client rating on Upwork"
            title="Custom eSIM management page and third-party API integration inside a Shopify store."
            bullets={[
              'Integrated a third-party eSIM provider API with the store',
              'Customers view, activate, top up and manage eSIMs from their Shopify account area',
              'Client: “Karam is patient, knowledgeable and communicates quickly. Understood our needs exactly and worked to find solutions to unique problems.”',
            ]}
            duration="Apr 2025 · Upwork"
            cta={{ label: 'Read the project record', href: '/work/shopify-esim-api-integration-2025' }}
          />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="App types" title="From private tools to App Store products." />
          <TypeColumns items={appTypes} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="What we build"
            title="Apps that solve real store problems."
            intro="The best app saves time, improves the customer experience, or opens a sales path you couldn't offer before."
          />
          <NumberedList items={apps.map((a) => ({ title: a }))} columns={3} />
        </div>
      </section>

      <MidPageCta
        heading="Paying for apps that still don't fit?"
        sub="Show us your app stack on a 15-minute call. We will tell you what can be simplified, replaced or built custom."
        btnLabel="Book a 15-min call"
        btnHref="/book"
        secondary={{ label: 'or get a free store teardown', href: '/free-store-audit' }}
      />

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />
    </>
  )
}
