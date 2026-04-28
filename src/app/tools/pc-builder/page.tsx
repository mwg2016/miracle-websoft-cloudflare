import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Cpu, ShoppingCart, Sparkles, BarChart2,
  Shield, Smartphone, Palette, Zap,
  ArrowRight, ExternalLink, CheckCircle2,
} from 'lucide-react'
import { breadcrumb, renderJsonLd, softwareApplication } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

const PC_BUILDER_OUTBOUND = outboundHref('shopify_apps', 'https://apps.shopify.com/pc-builder-mw')

export const metadata: Metadata = {
  title: 'PC Builder App for Shopify — Interactive PC Configurator | Miracle Websoft',
  description: 'Let customers build compatible PCs step by step and checkout in one click. Real-time compatibility validation, AI-powered fill, bundle checkout. Built for Shopify.',
  alternates: { canonical: 'https://miraclewebsoft.com/tools/pc-builder' },
  openGraph: {
    title: 'PC Builder App for Shopify | Miracle Websoft',
    description: 'Interactive PC configurator for Shopify stores. Real-time compatibility, bundle checkout, AI-powered fill.',
    url: 'https://miraclewebsoft.com/tools/pc-builder',
    type: 'website',
  },
}

const features = [
  {
    icon: Shield,
    title: 'Compatibility Engine',
    desc: 'Real-time part validation across CPU socket, RAM speed, power draw and form factor. Customers can only build PCs that actually work — eliminating returns and support tickets.',
  },
  {
    icon: ShoppingCart,
    title: 'Bundle Checkout',
    desc: 'The full PC build — every component — gets added to cart in a single click. No friction, no missed items. Customers go from configurator to checkout instantly.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Fill',
    desc: 'Auto-populate component data, specifications and compatibility notes using AI. Save hours of manual product setup and keep your catalogue accurate.',
  },
  {
    icon: BarChart2,
    title: 'Order Analytics',
    desc: 'Track builds created, configurations saved, conversion rates and average order value per widget. Know exactly how the configurator is impacting your revenue.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Lazy-loaded widget with zero performance impact on your store. Your Shopify speed scores stay intact while your customers get a rich interactive experience.',
  },
  {
    icon: Palette,
    title: 'Deep Customisation',
    desc: 'Configure colours, layout, step names and widget behaviour to match your brand. Drop it into any Shopify page as a native section block — no developer needed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimised',
    desc: 'Fully responsive design across all devices. Customers can configure and buy a full PC build from their phone just as easily as from a desktop.',
  },
  {
    icon: Cpu,
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
    name: 'PC Builder — Shopify App',
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
    { name: 'PC Builder', url: '/tools/pc-builder' },
  ]),
])

export default function PcBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{
          background: '#0a0a0a',
          backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(56,189,248,0.15) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(2,132,199,0.07) 0%, transparent 50%)',
        }}
      >
        <div className="mw-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/tools" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontWeight: 500 }}>
              Tools
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>/</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>PC Builder</span>
          </div>

          <span className="mw-eyebrow">SHOPIFY APP</span>
          <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>
            Let customers build<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>their perfect PC.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '540px', marginBottom: '2.5rem' }}>
            Interactive PC configurator for Shopify stores. Real-time compatibility validation,
            AI-powered component fill and bundle checkout — live in 15 minutes, no developer needed.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href={PC_BUILDER_OUTBOUND}
              target="_blank"
              rel="noopener noreferrer"
              className="mw-btn-primary"
            >
              Install on Shopify <ExternalLink size={15} />
            </Link>
            <Link
              href={outboundHref('external', 'https://pcbuilderapp.com/')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)',
                padding: '0.65rem 1.4rem', borderRadius: '8px', fontWeight: 500,
                fontSize: '0.9rem', textDecoration: 'none',
              }}
            >
              View website
            </Link>
          </div>

          <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
            14-day free trial · No credit card required · Shopify Certified
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '1.75rem 1.5rem', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">FEATURES</span>
            <h2 style={{ color: '#fff' }}>Everything your store needs<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>to sell PCs at scale.</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Built specifically for Shopify stores selling PC parts and electronics. No workarounds, no duct tape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: 'rgba(56,189,248,0.03)',
                  border: '1px solid rgba(56,189,248,0.12)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <f.icon size={18} style={{ color: '#38bdf8' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mw-eyebrow">WHY IT WORKS</span>
              <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>
                Built for stores that sell<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>complete PC builds.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Selling individual components is easy. Selling complete builds is hard — customers need
                to know parts are compatible, and adding 8–12 products to a cart is friction that kills conversions.
                PC Builder solves both problems in one widget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  'Real-time compatibility stops incompatible builds before checkout',
                  'One-click bundle add-to-cart eliminates multi-product friction',
                  'AI fills component data so setup takes minutes, not days',
                  '40% higher average order value reported by stores using the app',
                  'Zero impact on page speed — lazy-loaded widget architecture',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={15} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'rgba(56,189,248,0.04)',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: '20px',
              padding: '2.5rem',
            }}>
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #0284c7, #38bdf8)', borderRadius: '2px', marginBottom: '2rem' }} />
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: '1rem' }}>
                Perfect for
              </div>
              {[
                'PC parts & electronics Shopify stores',
                'Custom PC build services selling online',
                'Computer hardware retailers on Shopify',
                'Gaming gear stores with build bundles',
              ].map((use) => (
                <div key={use} style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>{use}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Link
                  href={PC_BUILDER_OUTBOUND}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    background: '#38bdf8', color: '#000',
                    padding: '0.8rem 1.5rem', borderRadius: '10px',
                    fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  }}
                >
                  Install on Shopify — Free Trial <ArrowRight size={15} />
                </Link>
                <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
                  14-day free trial · No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by MW */}
      <section style={{ background: '#0a0a0a', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container" style={{ textAlign: 'center' }}>
          <span className="mw-eyebrow">BUILT BY MIRACLE WEBSOFT</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            We build Shopify apps.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>And everything around them.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            PC Builder is one of several tools we&apos;ve built and shipped. We&apos;re a Shopify development agency
            with 10+ years of experience — we build apps, stores, and custom tools for Shopify merchants.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={PC_BUILDER_OUTBOUND}
              target="_blank"
              rel="noopener noreferrer"
              className="mw-btn-primary"
            >
              Install PC Builder <ExternalLink size={15} />
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)',
              padding: '0.65rem 1.4rem', borderRadius: '8px', fontWeight: 500,
              fontSize: '0.9rem', textDecoration: 'none',
            }}>
              Talk to us about your store
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
