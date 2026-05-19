import Link from 'next/link'
import { Code2, Puzzle, RefreshCw, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    n: '01',
    icon: Code2,
    tag: 'Build',
    title: 'Custom Shopify development',
    body: 'Bespoke Shopify and Shopify Plus stores designed around how your customers shop. Fast, beautiful, conversion-focused — across every ecommerce vertical.',
    href: '/services/shopify/development',
    span: 7,
  },
  {
    n: '02',
    icon: Puzzle,
    tag: 'Apps',
    title: 'Shopify app development',
    body: 'Private apps and Shopify Functions for product drops, bundles, custom checkout logic and anything the App Store cannot do.',
    href: '/services/shopify-app-development',
    span: 5,
  },
  {
    n: '03',
    icon: RefreshCw,
    tag: 'Migrate',
    title: 'Platform migrations',
    body: 'From WooCommerce, Magento or any other platform. Zero data loss, zero SEO traffic drop, zero downtime.',
    href: '/services/shopify-migration',
    span: 5,
  },
  {
    n: '04',
    icon: TrendingUp,
    tag: 'Optimise',
    title: 'CRO &amp; speed optimisation',
    body: 'Conversion rate audits, Core Web Vitals fixes and checkout optimisation. Average 42% conversion lift across our store builds.',
    href: '/services/shopify-cro-speed',
    span: 7,
  },
]

export default function ServicesOverview() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">/04 — Services</span>
          <h2 style={{ color: '#fff' }}>
            Four things, done<br />
            <span className="mw-italic mw-italic--accent">deeply.</span>
          </h2>
          <p style={{ color: 'var(--text-3)', marginTop: '1.25rem', maxWidth: '520px', fontSize: '1rem' }}>
            We do Shopify only. No WordPress side projects, no generic web work — every engineer here ships Shopify five days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((s) => {
            const Icon = s.icon
            const spanClass = s.span === 7 ? 'md:col-span-7' : 'md:col-span-5'
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`mw-card group relative overflow-hidden ${spanClass}`}
                style={{
                  padding: '2.5rem',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* hover accent line */}
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="group-hover:opacity-100"
                />
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.75rem', color: 'var(--text-4)', letterSpacing: '0.08em' }}>
                      /{s.n}
                    </span>
                    <ArrowUpRight size={18} style={{ color: 'var(--text-4)', transition: 'all 0.25s ease' }} className="group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(108,99,255,0.12)',
                      border: '1px solid rgba(108,99,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Icon size={22} style={{ color: 'var(--accent)' }} />
                  </div>

                  <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '0.6rem' }}>
                    {s.tag}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#fff', marginBottom: '0.85rem', lineHeight: 1.25, letterSpacing: '-0.01em' }} dangerouslySetInnerHTML={{ __html: s.title }} />
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.65 }}>
                    {s.body}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
