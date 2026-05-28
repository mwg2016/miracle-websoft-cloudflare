import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
  description: 'Bespoke Shopify and Shopify Plus stores for clothing and fashion brands. Mobile-first, sub-1.5s load times, TikTok & Instagram Shop ready. USA, UK, Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-development-clothing-brands' },
}

const features = [
  'Custom theme design — no templates, no generic layouts',
  'Mobile-first build — 375px is the primary canvas',
  'Sub-1.5s load time target on every project',
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
  { icon: '📱', title: 'TikTok Shop Integration', desc: 'Sync your Shopify catalog to TikTok Shop. Live product links, creator affiliate tracking, and real-time inventory sync so drops don\'t oversell.' },
  { icon: '📸', title: 'Instagram Shopping', desc: 'Tag products in posts and Reels. Customers buy without leaving Instagram. Full Meta catalog sync with automatic variant-level updates.' },
  { icon: '🎯', title: 'Meta Ads Pixel & CAPI', desc: 'Server-side Conversions API setup alongside browser pixel for accurate attribution. Vital for fashion brands running Meta ads to warm audiences.' },
  { icon: '✨', title: 'Shoppable Lookbooks', desc: 'Editorial-style lookbook pages where customers can tap any item and add to cart. Converts browsing sessions into multi-item baskets.' },
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
  { question: 'How much does a custom Shopify store cost?', answer: 'Custom Shopify theme builds typically start from $3,000–$5,000 for a focused fashion brand. Complex builds with custom apps and Shopify Plus features range from $10,000–$30,000+. We always provide a fixed-price proposal before any work begins — no hourly billing.' },
]

const guarantees = [
  { icon: '⚡', title: 'Sub-1.5s Load Time Target', body: 'Every build targets sub-1.5s mobile load time. Fashion shoppers on Instagram and TikTok won\'t wait — your store needs to be instant.' },
  { icon: '📱', title: 'Mobile-First, Always', body: 'We design for 375px first. 80%+ of fashion traffic is mobile. If it doesn\'t look perfect on a phone, we don\'t ship it.' },
  { icon: '🔒', title: 'Fixed Price Before We Start', body: 'You get a detailed fixed-price proposal before a single line of code is written. No hourly billing, no surprise invoices at the end.' },
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
  faqPage(faqs),
])

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Custom Shopify Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY FOR FASHION BRANDS</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>Custom Shopify Stores Built for How Fashion Brands Actually Sell</h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '580px', fontWeight: 300 }}>
              Not a template. Not a theme store. A store built around your brand, your product structure, and how your customers shop — on their phones, on Instagram, on TikTok.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['TikTok & Instagram Shop ready', 'Mobile-first design', 'Sub-1.5s load time', 'Fixed-price proposal'].map(t => (
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

      {/* Case Study Result */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Real Project Result</p>
          <ServiceResult
            tag="Activewear Brand"
            tagColor="#6C63FF"
            metric="+48%"
            metricLabel="Conversion Rate"
            title="Activewear DTC brand: TikTok Shop integration, product drop system and rebuilt mobile pages — conversions up 48% in 6 weeks."
            bullets={[
              'Custom TikTok Shop sync with real-time inventory and automatic variant mapping',
              'Product drop system with waitlists, countdown timers and Klaviyo email flows',
              'Rebuilt mobile product pages with sticky ATC, image zoom and size guide modal',
            ]}
            duration="6-week build"
            cta={{ label: 'See all case studies', href: '/case-studies' }}
          />
        </div>
      </section>

      {/* What's included */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '3rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What's Included</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Everything in every build</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '500px', lineHeight: 1.7 }}>Standard across every project — not optional extras.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Commerce Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Social Commerce</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '0.5rem' }}>Built for brands that sell on TikTok and Instagram</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', maxWidth: '520px', lineHeight: 1.7 }}>Your Shopify store is the hub. TikTok, Instagram, and Meta ads are the traffic channels. We connect them properly — not with generic plugins.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialCommerceFeatures.map((f, i) => (
              <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.92rem', marginBottom: '0.35rem' }}>{f.title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion-specific features */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Fashion-Specific Features</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Built for how fashion brands actually operate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fashionSpecific.map((f, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(108,99,255,0.05)', border: '1px solid rgba(108,99,255,0.15)' }}>
                <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{f.title}</p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading="Ready to build a store that converts your Meta ads traffic?"
        sub="Free store audit — we'll review your current store (or brief) and tell you exactly what we'd build and why."
      />

      {/* Guarantees */}
      <GuaranteeBar guarantees={guarantees} />

      <WhyUs />

      <ClientPortfolio />

      <FaqSection faqs={faqs} heading="Custom Shopify development — common questions" />

      <RelatedServices services={related} />

      <CtaBanner />
    </>
  )
}
