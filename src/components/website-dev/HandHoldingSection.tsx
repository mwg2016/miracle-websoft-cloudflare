import { Globe, Server, Palette, FileText, Search, Rocket } from 'lucide-react'
import { handHolding } from '@/data/website-dev-content'

const icons = [Globe, Server, Palette, FileText, Search, Rocket]

export default function HandHoldingSection() {
  return (
    <section className="mw-section" style={{ background: '#0d0d0d' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">{handHolding.eyebrow}</span>
          <h2 style={{ color: '#fff' }}>
            {handHolding.heading.split('.')[0]}.
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
              You bring the business. We bring the rest.
            </em>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '560px',
              margin: '0 auto',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            {handHolding.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {handHolding.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    background: 'rgba(108,99,255,0.12)',
                    border: '1px solid rgba(108,99,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
