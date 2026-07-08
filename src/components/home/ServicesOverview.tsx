import Link from 'next/link'
import { Bot, Code2, Gauge, Puzzle, RefreshCw, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    n: '01',
    icon: Code2,
    tag: 'Build',
    title: 'Shopify development',
    body: 'Custom Shopify and Shopify Plus stores, theme customization, integrations and features built around how customers browse, trust and buy.',
    href: '/services/shopify',
    span: 4,
  },
  {
    n: '02',
    icon: TrendingUp,
    tag: 'Convert',
    title: 'CRO services',
    body: 'User journey analysis, Microsoft Clarity review, heatmaps, checkout optimization and A/B testing for more revenue from existing traffic.',
    href: '/services/conversion-rate-optimization',
    span: 4,
  },
  {
    n: '03',
    icon: Gauge,
    tag: 'Speed',
    title: 'Performance optimization',
    body: 'Core Web Vitals, Shopify speed optimization, PageSpeed improvements and performance audits for faster mobile shopping.',
    href: '/services/shopify-speed-optimization',
    span: 4,
  },
  {
    n: '04',
    icon: Bot,
    tag: 'AI',
    title: 'AI automation',
    body: 'AI business automation, OpenAI integrations, chatbots, internal tools, AI agents and content workflows for leaner operations.',
    href: '/services/ai',
    span: 4,
  },
  {
    n: '05',
    icon: Puzzle,
    tag: 'Software',
    title: 'Custom web development',
    body: 'Business websites, custom web applications, CRM tools, admin panels, client portals and API integrations.',
    href: '/services/custom-web-development',
    span: 6,
  },
  {
    n: '06',
    icon: RefreshCw,
    tag: 'Migrate',
    title: 'Shopify migrations',
    body: 'Move from WooCommerce, Magento, BigCommerce or a custom platform without risking orders, customers, product data or SEO visibility.',
    href: '/services/shopify-migration',
    span: 6,
  },
]

export default function ServicesOverview() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Services</span>
          <h2 style={{ color: '#fff' }}>
            Ecommerce growth and AI services<br />
            built around <span className="mw-italic mw-italic--accent">business outcomes.</span>
          </h2>
          <p style={{ color: 'var(--text-3)', marginTop: '1.25rem', maxWidth: '520px', fontSize: '1rem' }}>
            You do not need a vendor who simply completes tickets. You need a technical partner who understands revenue, buyer behavior, speed, SEO, automation and the daily reality of running a growing business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((s) => {
            const Icon = s.icon
            const spanClass = s.span === 7 ? 'md:col-span-7' : s.span === 6 ? 'md:col-span-6' : 'md:col-span-4'
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
