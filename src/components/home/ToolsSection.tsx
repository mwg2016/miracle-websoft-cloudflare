import Link from 'next/link'
import { Search, Layers, Package, Grid3X3, ArrowUpRight, ExternalLink } from 'lucide-react'

const features = [
  { icon: Layers, label: 'Theme Detection', desc: 'Identify the exact Shopify theme any store is running' },
  { icon: Search, label: 'App Detection', desc: 'Spot 65+ installed apps via script signature analysis' },
  { icon: Package, label: 'Product Count', desc: 'See how many products a store has publicly listed' },
  { icon: Grid3X3, label: 'Collections', desc: 'Count published collections with a single lookup' },
]

export default function ToolsSection() {
  return (
    <section className="mw-section" style={{ background: '#0d0d0d' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Built by Us</span>
          <h2 style={{ color: '#fff' }}>Free tools for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Shopify store owners.</em></h2>
        </div>

        {/* Featured tool card */}
        <div
          className="mw-card"
          style={{
            padding: '0',
            overflow: 'hidden',
            border: '1px solid rgba(108,99,255,0.25)',
            background: 'linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(108,99,255,0.02) 100%)',
          }}
        >
          {/* Top strip accent */}
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #6c63ff, #a78bfa)' }} />

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 0 }}>
            {/* Left — description */}
            <div style={{ padding: '2.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#a78bfa',
                  background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)',
                  padding: '0.2rem 0.6rem', borderRadius: '999px',
                }}>
                  Free Tool
                </span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
                  No login · No API key
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                Shopify Theme Detector
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Instantly find what theme any Shopify store is using — plus detect installed apps,
                product count and collections. Enter any store URL and get results in seconds.
                100% free, built by our team.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link
                  href="https://themedetectorapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'var(--accent)', color: '#fff',
                    padding: '0.65rem 1.4rem', borderRadius: '8px',
                    fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  className="hover:opacity-85"
                >
                  Try it free
                  <ExternalLink size={14} />
                </Link>
                <Link
                  href="https://themedetectorapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)',
                    padding: '0.65rem 1.4rem', borderRadius: '8px',
                    fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  className="hover:border-white/40 hover:text-white"
                >
                  themedetectorapp.com
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — feature grid */}
            <div style={{ padding: '2.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem' }}>
                What it detects
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1rem' }}>
                {features.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '10px',
                      padding: '1rem 1.1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Icon size={15} style={{ color: 'var(--accent)' }} />
                      <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>{label}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.5 }}>
                Built by the Miracle Websoft team as a free resource for the Shopify community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
