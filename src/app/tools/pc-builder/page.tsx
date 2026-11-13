import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { breadcrumb, renderJsonLd, softwareApplication } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

const PC_BUILDER_OUTBOUND = outboundHref('shopify_apps', 'https://apps.shopify.com/pc-builder-mw')

export const metadata: Metadata = {
  title: 'Miracle PC Builder App for Shopify — Interactive PC Configurator | Miracle Websoft',
  description: 'Let customers build compatible PCs step by step and checkout in one click. Real-time compatibility validation, AI-powered fill, bundle checkout. Built for Shopify.',
  alternates: { canonical: 'https://miraclewebsoft.com/tools/pc-builder' },
  openGraph: {
    title: 'Miracle PC Builder App for Shopify | Miracle Websoft',
    description: 'Interactive PC configurator for Shopify stores. Real-time compatibility, bundle checkout, AI-powered fill.',
    url: 'https://miraclewebsoft.com/tools/pc-builder',
    type: 'website',
  },
}

const features = [
  {
    title: 'Compatibility Engine',
    desc: 'Real-time part validation across CPU socket, RAM speed, power draw and form factor. Customers can only build PCs that actually work — eliminating returns and support tickets.',
  },
  {
    title: 'Bundle Checkout',
    desc: 'The full PC build — every component — gets added to cart in a single click. No friction, no missed items. Customers go from configurator to checkout instantly.',
  },
  {
    title: 'AI-Powered Fill',
    desc: 'Auto-populate component data, specifications and compatibility notes using AI. Save hours of manual product setup and keep your catalogue accurate.',
  },
  {
    title: 'Order Analytics',
    desc: 'Track builds created, configurations saved, conversion rates and average order value per widget. Know exactly how the configurator is impacting your revenue.',
  },
  {
    title: 'Lightning Fast',
    desc: 'Lazy-loaded widget with zero performance impact on your store. Your Shopify speed scores stay intact while your customers get a rich interactive experience.',
  },
  {
    title: 'Deep Customisation',
    desc: 'Configure colours, layout, step names and widget behaviour to match your brand. Drop it into any Shopify page as a native section block — no developer needed.',
  },
  {
    title: 'Mobile Optimised',
    desc: 'Fully responsive design across all devices. Customers can configure and buy a full PC build from their phone just as easily as from a desktop.',
  },
  {
    title: 'Theme Embedding',
    desc: 'Embed the builder into any Shopify page as a section block using the native theme editor. Works with every Shopify theme — no code required.',
  },
]

const stats = [
  { value: '10k+', label: 'Builds created' },
  { value: '40%', label: 'Higher AOV' },
  { value: '98%', label: 'Compatibility accuracy' },
  { value: '15 min', label: 'Setup time' },
]

const jsonLd = renderJsonLd([
  softwareApplication({
    name: 'Miracle PC Builder — Shopify App',
    description:
      'Interactive PC configurator for Shopify stores. Real-time compatibility validation, AI-powered fill and one-click bundle checkout.',
    url: 'https://apps.shopify.com/pc-builder-mw',
    category: 'BusinessApplication',
    operatingSystem: 'Shopify',
    priceRange: '9.99',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Miracle PC Builder', url: '/tools/pc-builder' },
  ]),
])

const whyPoints = [
  'Real-time compatibility stops incompatible builds before checkout',
  'One-click bundle add-to-cart removes multi-product friction',
  'AI fills component data so setup takes minutes, not days',
  '40% higher average order value reported by stores using the app',
  'Lazy-loaded widget, so page speed is unaffected',
]

const useCases = [
  'PC parts & electronics Shopify stores',
  'Custom PC build services selling online',
  'Computer hardware retailers on Shopify',
  'Gaming gear stores with build bundles',
]

export default function PcBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4rem' }}>
        <div className="mw-container">
          <nav aria-label="Breadcrumb" className="mw-num" style={{ marginBottom: '1.75rem' }}>
            <Link href="/tools" style={{ color: 'var(--text-3)' }}>Tools</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: 'var(--text-2)' }}>Miracle PC Builder</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
            <div>
              <p className="mw-eyebrow">Shopify app · by Miracle Websoft</p>
              <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '14ch' }}>
                Let customers build <span className="mw-mark">their own PC</span> on your store.
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>
                An interactive PC configurator for Shopify. Real-time compatibility checks, AI-assisted component data and one-click bundle checkout, live in about 15 minutes with no developer.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
                <Link href={PC_BUILDER_OUTBOUND} target="_blank" rel="noopener noreferrer" className="mw-btn-accent">
                  Install on Shopify <ArrowUpRight size={16} />
                </Link>
                <Link href={outboundHref('external', 'https://pcbuilderapp.com/')} target="_blank" rel="noopener noreferrer" className="mw-btn-outline">
                  View pcbuilderapp.com
                </Link>
              </div>
              <p className="mw-num" style={{ marginTop: '1.25rem', color: 'var(--text-3)' }}>
                $9.99/mo · 14-day free trial · No credit card required
              </p>
            </div>
            <dl className="audit-facts" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 0 }}>
              {stats.map((s, i) => (
                <div key={s.label} style={i === 2 ? { paddingLeft: 0, borderLeft: 0, borderTop: '1px solid var(--border)' } : i === 3 ? { borderTop: '1px solid var(--border)' } : undefined}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Features</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '1rem' }}>Everything a store needs to sell complete builds.</h2>
          <p style={{ maxWidth: '52ch', marginBottom: '3rem' }}>
            Built specifically for Shopify stores selling PC parts and electronics.
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: '1px solid var(--text-1)' }}>
            {features.map((f, i) => (
              <li key={f.title} style={{ padding: '1.5rem 1.5rem 1.75rem 0', borderBottom: '1px solid var(--border)' }}>
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: '0.9rem 0 0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.92rem' }}>{f.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why it works */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="mw-eyebrow">Why it works</p>
            <h2 style={{ maxWidth: '16ch', marginBottom: '1.5rem' }}>Built for stores that sell complete PC builds.</h2>
            <p style={{ fontSize: '1.02rem', maxWidth: '52ch' }}>
              Selling individual components is easy. Selling complete builds is hard: customers need to know the parts are compatible, and adding 8–12 products to a cart is friction that kills conversions. Miracle PC Builder solves both in one widget.
            </p>
            <ul className="offer-list">
              {whyPoints.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>

          <div className="mw-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Made for</p>
            <ul>
              {useCases.map((u) => (
                <li key={u} style={{ padding: '0.85rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text-1)' }}>{u}</li>
              ))}
            </ul>
            <Link href={PC_BUILDER_OUTBOUND} target="_blank" rel="noopener noreferrer" className="mw-btn-accent" style={{ width: '100%', marginTop: '1.75rem' }}>
              Start the 14-day free trial <ArrowUpRight size={16} />
            </Link>
            <p className="mw-num" style={{ textAlign: 'center', marginTop: '0.75rem', color: 'var(--text-3)' }}>No credit card required</p>
          </div>
        </div>
      </section>

      {/* Built by MW */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '20ch' }}>We build Shopify apps, and the stores around them.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '52ch' }}>
              PC Builder is one of several tools we&apos;ve shipped. Since 2015 we&apos;ve built apps, stores and custom tools for Shopify merchants.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/services/shopify-app-development" className="mw-btn-primary">Talk to us about an app</Link>
            <Link href="/tools" className="mw-btn-outline">All our tools</Link>
          </div>
        </div>
      </section>
    </>
  )
}
