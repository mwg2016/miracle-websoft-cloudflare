import Link from 'next/link'
import { ExternalLink, Sparkles } from 'lucide-react'
import { realCases, categoryDemos } from '@/data/website-dev-content'
import { outboundHref } from '@/lib/outbound'

const flagEmoji: Record<string, string> = {
  us: '🇺🇸',
  uk: '🇬🇧',
  au: '🇦🇺',
  global: '🌍',
}

export default function ReferencesGrid() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">PROOF OF WORK</span>
          <h2 style={{ color: '#fff' }}>
            Sites we&apos;ve built.
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>And ones we can build for you.</em>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '500px',
              margin: '0 auto',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            Three live client stores below, then three example builds for the most common small business types. Yours
            can look like any of them.
          </p>
        </div>

        {/* Real cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {realCases.map((rc) => (
            <Link
              key={rc.name}
              href={outboundHref('external', rc.url)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
              }}
            >
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #6c63ff, #a78bfa)' }} />
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(108,99,255,0.9)',
                      background: 'rgba(108,99,255,0.1)',
                      border: '1px solid rgba(108,99,255,0.25)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '999px',
                    }}
                  >
                    Live client
                  </span>
                  <span style={{ fontSize: '1.05rem' }}>{flagEmoji[rc.countryFlag]}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                  {rc.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: '0.9rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {rc.category}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1rem',
                  }}
                >
                  {rc.blurb}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}
                >
                  View live site <ExternalLink size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Category demos */}
        <div className="mb-6 text-center">
          <span className="mw-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={11} /> Common small-business builds
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categoryDemos.map((demo) => (
            <div
              key={demo.name}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: '140px',
                  background: demo.bgGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.95)',
                    textShadow: '0 2px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  {demo.name}
                </span>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    fontSize: '0.7rem',
                    color: demo.accentColor,
                    marginBottom: '0.75rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {demo.category}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                  }}
                >
                  {demo.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
