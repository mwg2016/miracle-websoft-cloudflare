'use client'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

type Brand = {
  name: string
  category: string
  desc: string
  href: string | null
}

const ACCENT = '#6C63FF'

export default function BrandGrid({ brands }: { brands: Brand[] }) {
  const categories = ['All', ...Array.from(new Set(brands.map(b => b.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? brands : brands.filter(b => b.category === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: active === cat ? ACCENT : 'rgba(255,255,255,0.05)',
              color: active === cat ? '#fff' : 'rgba(255,255,255,0.50)',
              border: active === cat ? `1px solid ${ACCENT}` : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {cat}{cat === 'All' ? ` (${brands.length})` : ''}
          </button>
        ))}
      </div>

      {/* Brand grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((client, i) => (
          <div
            key={i}
            className="mw-card flex items-center justify-between gap-3"
            style={{ padding: '1.1rem 1.4rem' }}
          >
            <div style={{ minWidth: 0 }}>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.88rem' }}>{client.name}</span>
                <span style={{
                  fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0.18rem 0.5rem', borderRadius: 9999,
                  background: 'rgba(108,99,255,0.12)', color: 'var(--accent)',
                  border: '1px solid rgba(108,99,255,0.20)', flexShrink: 0,
                }}>
                  {client.category}
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.5 }}>{client.desc}</p>
            </div>
            {client.href ? (
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.20)', flexShrink: 0, transition: 'color 0.2s' }}
                className="hover:text-white"
                aria-label={`Visit ${client.name}`}
              >
                <ExternalLink size={13} />
              </a>
            ) : (
              <div style={{ width: 13, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
