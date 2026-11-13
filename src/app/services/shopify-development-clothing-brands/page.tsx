import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
  description: 'Bespoke Shopify and Shopify Plus stores for clothing and fashion brands. Mobile-first, built to a speed budget, TikTok & Instagram Shop ready. USA, UK, Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-development-clothing-brands' },
  openGraph: {
    title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
    description: 'Bespoke Shopify and Shopify Plus stores for clothing and fashion brands. Mobile-first, built to a speed budget, TikTok & Instagram Shop ready. USA, UK, Australia.',
    url: 'https://miraclewebsoft.com/services/shopify-development-clothing-brands',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
    description: 'Bespoke Shopify and Shopify Plus stores for clothing and fashion brands. Mobile-first, built to a speed budget, TikTok & Instagram Shop ready. USA, UK, Australia.',
  },
}

const features = [
  'Custom theme design — no templates, no generic layouts',
  'Mobile-first build — 375px is the primary canvas',
  'A speed budget agreed before the build',
  'Shopify Plus builds for scaling brands',
  'Advanced product filtering and collection architecture',
  'Size guides and fit recommendation tools',
  'Wishlist, saved items and product comparison',
  'Instagram and TikTok Shop integration',
  'Klaviyo and email platform integration',
  'Custom checkout flows and upsell logic',
  'Full QA across all devices and browsers',
  'Ongoing support and optimisation retainer',
]

const socialCommerceFeatures = [
  { title: 'TikTok Shop Integration', desc: 'Sync your Shopify catalog to TikTok Shop. Live product links, creator affiliate tracking, and real-time inventory sync so drops don\'t oversell.' },
  { title: 'Instagram Shopping', desc: 'Tag products in posts and Reels. Customers buy without leaving Instagram. Full Meta catalog sync with automatic variant-level updates.' },
  { title: 'Meta Ads Pixel & CAPI', desc: 'Server-side Conversions API setup alongside browser pixel for accurate attribution. Vital for fashion brands running Meta ads to warm audiences.' },
  { title: 'Shoppable Lookbooks', desc: 'Editorial-style lookbook pages where customers can tap any item and add to cart. Converts browsing sessions into multi-item baskets.' },
]

const fashionSpecific = [
  { title: 'Size Guide Builder', desc: 'Custom size chart modals with measurement guides, fit notes, and model stats. Reduces returns by setting the right expectations.' },
  { title: 'Variant Architecture', desc: 'Handle XS–3XL × 8 colours × 3 lengths cleanly. Custom swatch displays, out-of-stock variant handling, and "notify me" flows.' },
  { title: 'Returns & Exchanges Flow', desc: 'Fashion has the highest return rate in ecommerce. We build self-serve return portals and exchange flows that reduce customer service load.' },
  { title: 'Waitlist & Drop System', desc: 'Limited drops with countdown timers, waitlist registration, and automatic email sequences when restocked. Builds hype and captures demand.' },
]

const faqs = [
  { question: 'What is custom Shopify development?', answer: 'Custom Shopify development means building your store without using pre-made templates. Every layout, interaction and feature is designed specifically for your brand and how your customers shop — not copied from a theme library.' },
  { question: 'Do you use themes or build from scratch?', answer: 'It depends on the project and budget. For some brands we build a fully custom theme from a blank canvas. For others we heavily customise an existing theme as a starting point. We always recommend the right approach for your goals — we will never oversell a full custom build if a theme customisation achieves the same result.' },
  { question: 'What is Shopify Plus and do I need it?', answer: 'Shopify Plus is Shopify\'s enterprise tier (from ~$2,300/month). It unlocks custom checkout extensibility, Shopify Functions, higher API limits, B2B wholesale features, and dedicated support. Most brands need it once they exceed $1M/year in revenue or require checkout customisations not available on standard Shopify.' },
  { question: 'How long does a custom Shopify build take?', answer: 'A standard custom theme build takes 4–8 weeks depending on scope. Complex projects with custom apps, third-party integrations or Shopify Plus checkout features typically take 10–16 weeks. We give a clear timeline in every proposal.' },
  { question: 'Do you work on existing stores or only new builds?', answer: 'Both. We do full rebuilds, redesigns of live stores, and targeted improvements (product pages, checkout, speed) on existing Shopify stores without a full rebuild.' },
  { question: 'What happens after launch?', answer: 'We offer ongoing support and optimisation packages. Most clients work with us on a retained basis — monthly CRO testing, new feature development, Shopify platform updates, and performance monitoring.' },
  { question: 'How much does a custom Shopify store cost?', answer: 'A Basic Store build is $600 and an Advanced Store is $1,000. Custom development starts at $1,500, and builds with custom apps or Shopify Plus features are quoted after a short scoping call. You always get a fixed-price proposal before any work begins, with no hourly billing.' },
]

const guarantees = [
  { title: 'A speed budget, agreed up front', body: 'Shoppers arriving from Instagram and TikTok won\'t wait. We set a mobile performance target before the build and test against it before launch.' },
  { title: 'Mobile first, always', body: 'We design for a 375px screen first, because that is where most fashion traffic lands.' },
  { title: 'Fixed Price Before We Start', body: 'You get a detailed fixed-price proposal before a single line of code is written. No hourly billing, no surprise invoices at the end.' },
]

const related = [
  { title: 'CRO & Speed Optimisation', desc: 'Already have a store? Improve conversions without a full rebuild.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify App Development', desc: 'Build custom apps: drop systems, size finders, loyalty, bundles.', href: '/services/shopify-app-development' },
  { title: 'Shopify Migrations', desc: 'Moving from WooCommerce or another platform to Shopify.', href: '/services/shopify-migration' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify Development for Clothing Brands',
    description:
      'Custom Shopify stores for clothing, apparel and fashion brands. Mobile-first builds, size guides, lookbooks, TikTok Shop and Instagram integrations.',
    url: '/services/shopify-development-clothing-brands',
    serviceType: 'Shopify development for fashion',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify for Clothing Brands', url: '/services/shopify-development-clothing-brands' },
  ]),
])

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Shopify for Clothing Brands' }]}
        eyebrow="Shopify for fashion brands"
        title={<>Shopify stores built for <span className="mw-mark">how fashion actually sells.</span></>}
        lede="On a phone, from Instagram and TikTok, in drops, with sizes that have to be right first time. We build the store around your products and your customers, not around a theme demo."
        bullets={['Size guides, fit tools and clean variant handling', 'TikTok Shop, Instagram and Meta CAPI set up properly', 'Drops, waitlists and restock flows']}
        aside={
          <HeroScope
            label="Prices"
            items={['Basic store build: $600', 'Advanced store build: $1,000', 'Custom features and apps: from $1,500']}
            foot="Fixed quote within 24 hours, agreed before any work starts."
          />
        }
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Example project" title="An activewear brand, rebuilt for mobile." />
          <ServiceResult
            tag="Activewear brand"
            metric="+48%"
            metricLabel="Conversion rate"
            title="Activewear DTC brand: TikTok Shop integration, a product drop system and rebuilt mobile pages. Conversions up 48% in 6 weeks."
            bullets={[
              'TikTok Shop sync with real-time inventory and automatic variant mapping',
              'Product drop system with waitlists, countdowns and Klaviyo flows',
              'Mobile product pages rebuilt with sticky add to cart, image zoom and size guide',
            ]}
            duration="6-week build"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Fashion-specific</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>The details that decide returns and repeat orders.</h2>
          </div>
          <NumberedList items={fashionSpecific.map((f) => ({ title: f.title, body: f.desc }))} columns={2} />
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Social commerce</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>Built for brands that sell on TikTok and Instagram.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '42ch' }}>Your Shopify store is the hub; TikTok, Instagram and Meta ads are the traffic. We connect them properly, not with generic plugins.</p>
          </div>
          <NumberedList items={socialCommerceFeatures.map((f) => ({ title: f.title, body: f.desc }))} columns={2} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="Standard in every build, not extras." />
          <NumberedList items={features.map((f) => ({ title: f }))} columns={3} />
        </div>
      </section>

      <MidPageCta
        heading="Paying for Meta traffic that doesn't buy?"
        sub="Send your URL. Within 48 hours you get a short video of what is stopping shoppers on your product pages and cart, ranked by likely impact."
      />

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />
    </>
  )
}
