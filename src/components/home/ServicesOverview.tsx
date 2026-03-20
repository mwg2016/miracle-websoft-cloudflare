import Link from 'next/link'
import { Code2, Puzzle, RefreshCw, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    tag: 'Core Service',
    title: 'Custom Shopify Development',
    body: 'Bespoke Shopify and Shopify Plus stores designed around how your customers shop. Fast, beautiful, conversion-focused.',
    href: '/services/shopify-development-clothing-brands',
    large: true,
  },
  {
    icon: Puzzle,
    tag: 'Apps',
    title: 'Shopify App Development',
    body: 'Private apps and Shopify Functions for product drops, bundles, custom checkout logic and anything the App Store cannot do.',
    href: '/services/shopify-app-development',
    large: false,
  },
  {
    icon: RefreshCw,
    tag: 'Migrations',
    title: 'Platform Migrations',
    body: 'From WooCommerce, Magento or any other platform. Zero data loss, zero SEO traffic drop, zero downtime.',
    href: '/services/shopify-migration',
    large: false,
  },
  {
    icon: TrendingUp,
    tag: 'Growth',
    title: 'CRO & Speed Optimization',
    body: 'Conversion rate audits and speed fixes. Average 42% conversion increase across our fashion brand clients.',
    href: '/services/shopify-cro-speed',
    large: true,
  },
]

export default function ServicesOverview() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">What We Build</span>
          <h2 style={{ color: '#fff' }}>Everything your clothing<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>brand needs on Shopify.</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Row 1: large (7) + small (5) */}
          {[0, 1].map(i => {
            const s = services[i]
            const Icon = s.icon
            const cols = i === 0 ? 'md:col-span-7' : 'md:col-span-5'
            return (
              <Link key={s.href} href={s.href} className={`mw-card group relative overflow-hidden ${cols}`} style={{ padding: '2.5rem', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.2)', transition: 'all 0.2s' }} className="group-hover:text-white group-hover:opacity-100" />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '0.5rem' }}>{s.tag}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{s.body}</p>
                </div>
              </Link>
            )
          })}
          {/* Row 2: small (5) + large (7) */}
          {[2, 3].map(i => {
            const s = services[i]
            const Icon = s.icon
            const cols = i === 2 ? 'md:col-span-5' : 'md:col-span-7'
            return (
              <Link key={s.href} href={s.href} className={`mw-card group relative overflow-hidden ${cols}`} style={{ padding: '2.5rem', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.2)', transition: 'all 0.2s' }} className="group-hover:text-white group-hover:opacity-100" />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '0.5rem' }}>{s.tag}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{s.body}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
