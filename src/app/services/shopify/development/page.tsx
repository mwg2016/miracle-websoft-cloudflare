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

export const metadata: Metadata = {
  title: 'Custom Shopify Development Services | Miracle Websoft',
  description: 'Expert custom Shopify development — bespoke themes, Shopify Plus builds, app integrations and migrations. 600+ projects delivered, sub-1.5s load time, fixed-price proposals. USA, UK, Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify/development' },
}

const features = [
  'Custom theme design built from scratch — no templates',
  'Mobile-first build — sub-1.5s load time target',
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
    badge: 'Most common',
    color: '#6C63FF',
    desc: 'Your store built from a blank canvas. Custom theme, navigation, product architecture and checkout — designed around your brand and how your customers actually shop.',
    examples: ['Custom theme from scratch', 'Brand-aligned design system', 'Product structure planning', 'Launch-day checklist included'],
  },
  {
    title: 'Store Redesigns',
    badge: 'High ROI',
    color: '#F59E0B',
    desc: 'Your live store rebuilt for speed, conversion and mobile. We keep your URL structure, SEO rankings and customer data intact — only the experience improves.',
    examples: ['Full theme replacement', 'Product & collection pages', 'Checkout flow rebuild', 'SEO preserved throughout'],
  },
  {
    title: 'Shopify Plus Builds',
    badge: 'Enterprise',
    color: '#10B981',
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
    answer: 'Custom Shopify theme builds start from $3,000–$5,000 for a focused build. Projects with custom apps, third-party integrations or Shopify Plus features range from $10,000–$30,000+. We always provide a detailed fixed-price proposal before any work begins — no hourly billing.',
  },
  {
    question: 'Do you use themes or build from scratch?',
    answer: 'Depends on the scope and budget. For most projects we build a fully custom theme from a blank canvas. For others we heavily customise an existing theme as a starting point. We\'ll always recommend the right approach — we never oversell a full custom build if a theme customisation achieves the same result.',
  },
  {
    question: 'What is Shopify Plus and do I need it?',
    answer: 'Shopify Plus is Shopify\'s enterprise tier (from ~$2,300/month). It unlocks custom checkout extensibility, Shopify Functions, higher API limits, B2B wholesale features and dedicated support. Most brands need it once they exceed $1M/year in revenue or require checkout customisations not possible on standard Shopify.',
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
  { icon: '⚡', title: 'Sub-1.5s Mobile Load Time', body: 'Every build targets sub-1.5s mobile load time. We treat performance as a first-class engineering concern — not an afterthought bolted on after launch.' },
  { icon: '🔒', title: 'Fixed-Price Before We Start', body: 'You get a detailed fixed-price proposal before a single line of code is written. No hourly billing, no surprise invoices, no scope creep charges.' },
  { icon: '📱', title: 'Mobile-First, Always', body: 'We design and build for mobile first. 70–80% of Shopify traffic is mobile — your store is engineered for the device your customers actually use.' },
]

const related = [
  { title: 'Shopify App Development', desc: 'Custom private apps, Functions and checkout extensions.', href: '/services/shopify-app-development' },
  { title: 'CRO & Speed Optimisation', desc: 'Improve conversions and PageSpeed on your existing store.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify Migrations', desc: 'Move from WooCommerce, Magento or BigCommerce to Shopify.', href: '/services/shopify-migration' },
]

export default function ShopifyDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Custom Shopify Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">CUSTOM SHOPIFY DEVELOPMENT</span>
            <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
              Custom Shopify Stores Built to Convert — Not Templates, Not Shortcuts
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '580px', fontWeight: 300 }}>
              600+ Shopify stores delivered across fashion, electronics, health, food and B2B. Every build is engineered around your brand, your product structure, and how your customers shop — not reverse-engineered from a theme store template.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['Custom theme, no templates', 'Sub-1.5s mobile load time', 'Shopify Plus capable', 'Fixed-price proposal'].map(t => (
                <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="mw-btn-primary">
                Get a Free Store Audit <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="mw-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {[
              { stat: '600+', label: 'Shopify projects' },
              { stat: '10+', label: 'Years on Shopify' },
              { stat: '98%', label: 'Upwork job success' },
              { stat: '24h', label: 'Proposal turnaround' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#080808', padding: '1.25rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.stat}</div>
                <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Result */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Real Project Result</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ServiceResult
              tag="Custom Store Build"
              tagColor="#6C63FF"
              metric="+61%"
              metricLabel="Revenue (90 days)"
              title="DTC brand: custom Shopify theme replacing a slow template — 90-day revenue up 61%, mobile conversion rate up 44%."
              bullets={[
                'Custom theme replacing a $280 purchased template that was slow and inflexible',
                'Mobile product pages rebuilt from scratch — sticky ATC, image zoom, size guide modal',
                'Checkout redesigned with one-click upsells — average order value up 18%',
              ]}
              duration="7-week build"
              cta={{ label: 'See all case studies', href: '/case-studies' }}
            />

            {/* ROI callout */}
            <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontWeight: 600, marginBottom: '0.5rem' }}>Why Custom vs. Theme</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                  A 1% conversion lift on a $500K store pays for our entire build within 60 days.
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { store: '$300K/year store', lift: '+1% conversion', extra: '+$3K/month' },
                    { store: '$500K/year store', lift: '+1% conversion', extra: '+$5K/month' },
                    { store: '$1M/year store',   lift: '+1% conversion', extra: '+$10K/month' },
                  ].map(row => (
                    <div key={row.store} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{row.store}</span>
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{row.lift}</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#10B981' }}>{row.extra}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)', marginTop: '1.25rem', lineHeight: 1.5 }}>
                Our average across completed builds is a 42% conversion rate improvement. These figures use 1% as a conservative floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Types */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '3rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What We Build</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>New stores, redesigns and Shopify Plus</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '520px', lineHeight: 1.7 }}>Whether you&apos;re launching from scratch, replacing a slow template, or scaling to enterprise — we&apos;ve built it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {buildTypes.map((type, i) => (
              <div key={i} className="rounded-2xl p-5 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${type.color}22` }}>
                <div className="flex items-center gap-2 mb-3">
                  <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{type.title}</p>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em', padding: '2px 7px', borderRadius: '4px', background: `${type.color}18`, color: type.color, border: `1px solid ${type.color}30` }}>{type.badge}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{type.desc}</p>
                <div className="flex flex-col gap-1">
                  {type.examples.map(ex => (
                    <div key={ex} className="flex items-center gap-2">
                      <span style={{ color: type.color, fontSize: '0.7rem', fontWeight: 700 }}>→</span>
                      <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)' }}>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What&apos;s Included</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Everything in every build</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '500px', lineHeight: 1.7 }}>Standard on every project — not optional extras you need to negotiate for.</p>
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

      {/* Integrations */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Integrations</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Your tech stack, connected properly</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '520px', lineHeight: 1.7 }}>We integrate with the tools your business runs on — not generic copy-paste connections, but proper implementations.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {integrations.map((item, i) => (
              <div key={i} className="rounded-xl px-4 py-3 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.15rem' }}>{item.name}</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry specialisms */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>By Industry</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Deep experience across every vertical</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '520px', lineHeight: 1.7 }}>Every industry has different buying journeys, product structures and technical requirements. We know them all.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: 'Fashion & Clothing', href: '/services/shopify/development#fashion', highlight: 'TikTok Shop, size guides, drops' },
              { name: 'Electronics', href: '/services/shopify/electronics', highlight: 'Spec comparison, B2B, high SKU' },
              { name: 'Health & Beauty', href: '/services/shopify/health-beauty', highlight: 'Subscriptions, quiz funnels, loyalty' },
              { name: 'Jewelry', href: '/services/shopify/jewelry', highlight: 'Engraving, ring sizers, luxury UX' },
              { name: 'Food & Beverage', href: '/services/shopify/food-beverage', highlight: 'Delivery, allergens, age gates' },
              { name: 'Home & Furniture', href: '/services/shopify/home-decor', highlight: 'Configurators, freight, swatches' },
              { name: 'Sports & Fitness', href: '/services/shopify/sports-fitness', highlight: 'Subscriptions, bundles, B2B' },
              { name: 'Pet Supplies', href: '/services/shopify/pets', highlight: 'Breed filtering, subscriptions' },
            ].map((ind, i) => (
              <Link key={i} href={ind.href} style={{ textDecoration: 'none' }} className="group">
                <div className="rounded-xl p-4 h-full transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.88rem', marginBottom: '0.25rem', lineHeight: 1.3 }}>{ind.name}</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.4 }}>{ind.highlight}</p>
                  <div className="flex items-center gap-1 mt-2" style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600 }}>
                    View <ArrowRight size={10} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading="Free store audit — we'll review your store and tell you what we'd build."
        sub="Whether you're starting from scratch or rebuilding a live store, we'll give you a clear plan and fixed price before you commit to anything."
        btnLabel="Get a Free Audit"
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
