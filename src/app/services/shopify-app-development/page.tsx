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
    answer: 'We build private apps (for a single store), public apps (for the Shopify App Store), and Shopify Plus checkout extensions. Common projects include product drop and waitlist systems, bundle builders, custom size guides, loyalty programs, B2B wholesale portals, ERP integrations, and custom engraving or personalisation tools.',
  },
  {
    question: 'What is the difference between a private app and a public app?',
    answer: 'A private app is built exclusively for one store and is never published. A public app can be installed by any Shopify merchant and is listed on the App Store. Private apps are faster and cheaper to build. Public apps require passing Shopify\'s review process and take longer to launch.',
  },
  {
    question: 'Can you build Shopify Functions?',
    answer: 'Yes. Shopify Functions let you customise checkout logic — discounts, shipping methods, payment options, and cart validation — at a deep level that standard apps cannot access. Functions are only available on Shopify Plus. We have built Functions for custom discount stacking, tiered pricing, and conditional free shipping rules.',
  },
  {
    question: 'Can you replace a paid Shopify app with custom code?',
    answer: 'Often yes. Many stores pay $50–200/month for app functionality that can be built once as custom code. We audit which apps in your stack are replaceable and rebuild them — eliminating recurring costs and typically improving store speed at the same time.',
  },
  {
    question: 'How long does it take to build a Shopify app?',
    answer: 'A simple private app (e.g. a metafield editor, basic webhook integration) typically takes 1–3 weeks. A complex app with Shopify Functions, billing, admin UI, and App Store submission takes 6–12 weeks.',
  },
  {
    question: 'Do you maintain the apps you build after launch?',
    answer: 'Yes. We offer ongoing maintenance and update packages. This includes handling Shopify API version upgrades, adding new features, and monitoring for any issues caused by Shopify platform changes.',
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
  'Private admin apps for internal tools',
  'Storefront API integrations',
]

const guarantees = [
  { title: 'Fixed price before we start', body: 'Every app is scoped and priced before a line of code is written. No hourly billing, no surprise invoices.' },
  { title: 'Shopify-native architecture', body: 'Built on Shopify\'s official APIs, App Bridge and CLI, so it is straightforward to keep current as the platform changes.' },
  { title: 'Maintained after launch', body: 'Shopify ships new API versions four times a year. Our maintenance packages keep your app compatible.' },
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
      'Private and public Shopify apps — custom admin tools, storefront extensions, Shopify Functions and integrations.',
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
    title: 'Private apps',
    tag: 'Most common',
    desc: 'Built only for your store and never published. Faster and cheaper to build, with no review process. Ideal for replacing paid apps or adding internal tools.',
    examples: ['Product drop systems', 'Custom loyalty programs', 'ERP sync apps', 'Internal admin tools'],
  },
  {
    title: 'Shopify Functions',
    tag: 'Shopify Plus',
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
        title={<>When apps almost fit, <span className="mw-mark">we build the one that does.</span></>}
        lede="Manual work, a stack of overlapping subscriptions, or a buying flow Shopify can't do out of the box. We build custom Shopify apps that fit your store, your operations and your customers."
        bullets={['Private apps, public apps and Shopify Functions', 'Replace paid apps you only half use', 'Custom development from $1,500, fixed price']}
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
          <SectionHead eyebrow="Example project" title="Four paid apps, replaced by one." />
          <ServiceResult
            tag="Private Shopify app"
            metric="$340"
            metricLabel="saved per month"
            title="Beauty brand: replaced 4 paid Shopify apps with a single custom private app. Mobile PageSpeed improved from 54 to 88."
            bullets={[
              'Loyalty, rewards, bundle builder and pre-order apps replaced by one private app',
              '$340/month in app fees removed; build cost recovered in under 6 months',
              'Four fewer third-party scripts took mobile PageSpeed from 54 to 88',
            ]}
            duration="4-week build"
            cta={{ label: 'See all our work', href: '/work' }}
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
