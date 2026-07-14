import Link from 'next/link'
import { Search, Layers, Package, Grid3X3, MessageCircle, Bot, Clock, Globe, ArrowUpRight, ExternalLink, ArrowRight, Cpu, ShoppingCart, Sparkles, BarChart2 } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

const tools = [
  {
    badge: 'Free Tool',
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(108,99,255,0.15)',
    badgeBorder: 'rgba(108,99,255,0.3)',
    accentGradient: 'linear-gradient(90deg, #6c63ff, #a78bfa)',
    accentBorder: 'rgba(108,99,255,0.25)',
    accentBg: 'linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(108,99,255,0.02) 100%)',
    tag: 'No login · No API key',
    title: 'Shopify Theme Detector',
    desc: 'Instantly find what theme any Shopify store is using — plus detect installed apps, product count and collections. 100% free.',
    url: outboundHref('external', 'https://themedetectorapp.com/'),
    urlLabel: 'themedetectorapp.com',
    features: [
      { icon: Layers, label: 'Theme Detection' },
      { icon: Search, label: 'App Detection' },
      { icon: Package, label: 'Product Count' },
      { icon: Grid3X3, label: 'Collections' },
    ],
  },
  {
    badge: 'SaaS Tool',
    badgeColor: '#34d399',
    badgeBg: 'rgba(52,211,153,0.12)',
    badgeBorder: 'rgba(52,211,153,0.3)',
    accentGradient: 'linear-gradient(90deg, #059669, #34d399)',
    accentBorder: 'rgba(52,211,153,0.2)',
    accentBg: 'linear-gradient(135deg, rgba(52,211,153,0.06) 0%, rgba(52,211,153,0.01) 100%)',
    tag: 'Free plan available',
    title: 'WA Auto-Reply',
    desc: 'Your WhatsApp replies on autopilot. AI-powered auto-responses, keyword triggers, working hours and smart number filtering — 24/7.',
    url: outboundHref('external', 'https://www.whatsappautomaticreply.com/'),
    urlLabel: 'whatsappautomaticreply.com',
    features: [
      { icon: Bot, label: 'AI-Powered (Claude)' },
      { icon: MessageCircle, label: 'Keyword Triggers' },
      { icon: Clock, label: 'Working Hours' },
      { icon: Globe, label: '8 Languages' },
    ],
  },
  {
    badge: 'Shopify App',
    badgeColor: '#38bdf8',
    badgeBg: 'rgba(56,189,248,0.12)',
    badgeBorder: 'rgba(56,189,248,0.3)',
    accentGradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    accentBorder: 'rgba(56,189,248,0.2)',
    accentBg: 'linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(56,189,248,0.01) 100%)',
    tag: '14-day free trial',
    title: 'Miracle PC Builder',
    desc: 'Interactive PC configurator for Shopify stores. Lets customers build compatible PCs step by step and checkout in one click — with real-time compatibility validation.',
    url: outboundHref('shopify_apps', 'https://apps.shopify.com/pc-builder-mw'),
    urlLabel: 'pcbuilderapp.com',
    features: [
      { icon: Cpu, label: 'Compatibility Engine' },
      { icon: ShoppingCart, label: 'Bundle Checkout' },
      { icon: Sparkles, label: 'AI-Powered Fill' },
      { icon: BarChart2, label: 'Order Analytics' },
    ],
  },
]

export default function ToolsSection() {
  return (
    <section className="mw-section" style={{ background: '#0d0d0d' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Built by Us</span>
          <h2 style={{ color: '#fff' }}>Tools we&apos;ve shipped<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>used by thousands.</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="mw-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                border: `1px solid ${tool.accentBorder}`,
                background: tool.accentBg,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '3px', background: tool.accentGradient }} />
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Badge row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: tool.badgeColor,
                    background: tool.badgeBg, border: `1px solid ${tool.badgeBorder}`,
                    padding: '0.2rem 0.55rem', borderRadius: '999px',
                  }}>
                    {tool.badge}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    {tool.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                  {tool.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem', flex: 1 }}>
                  {tool.desc}
                </p>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {tool.features.map(({ icon: Icon, label }) => (
                    <span key={label} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '6px', padding: '0.3rem 0.65rem',
                      fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500,
                    }}>
                      <Icon size={11} style={{ color: tool.badgeColor }} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <Link
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Try ${tool.title} free`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      background: tool.badgeColor, color: '#000',
                      padding: '0.55rem 1.1rem', borderRadius: '7px',
                      fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none',
                    }}
                  >
                    Try it free <ExternalLink size={12} />
                  </Link>
                  <Link
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${tool.urlLabel}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)',
                      padding: '0.55rem 1.1rem', borderRadius: '7px',
                      fontWeight: 500, fontSize: '0.82rem', textDecoration: 'none',
                    }}
                  >
                    {tool.urlLabel} <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to tools page */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/tools"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', fontWeight: 500,
              textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)',
              paddingBottom: '2px',
            }}
          >
            Need a custom tool built? We do that too <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
