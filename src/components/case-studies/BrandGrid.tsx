'use client'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Brand = {
  name: string
  category: string
  desc: string
  href: string | null
  /** What we delivered — only from a verified project record. */
  delivered?: string
  /** Internal project record, e.g. /work/<id>. */
  record?: string
}

export default function BrandGrid({ brands }: { brands: Brand[] }) {
  const categories = ['All', ...Array.from(new Set(brands.map(b => b.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? brands : brands.filter(b => b.category === active)

  return (
    <>
      <div className="flex flex-wrap gap-x-1 gap-y-1 mb-6" role="tablist" aria-label="Filter brands by category">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            role="tab"
            aria-selected={active === cat}
            style={{
              fontSize: '0.82rem',
              padding: '0.35rem 0.7rem',
              borderRadius: '4px',
              background: active === cat ? 'var(--text-1)' : 'transparent',
              color: active === cat ? 'var(--bg)' : 'var(--text-2)',
              border: '1px solid',
              borderColor: active === cat ? 'var(--text-1)' : 'var(--border)',
              cursor: 'pointer',
            }}
          >
            {cat}{cat === 'All' ? ` (${brands.length})` : ''}
          </button>
        ))}
      </div>

      <ul className="brand-grid">
        {filtered.map(client => {
          const inner = (
            <>
              <span>
                <b>{client.name}</b>
                <span className="brand-desc">{client.desc}</span>
                {client.delivered && <span className="brand-desc brand-delivered"><strong>We delivered:</strong> {client.delivered}</span>}
              </span>
              <span className="mw-num brand-cat">{client.category}</span>
              {client.href ? <ArrowUpRight size={14} className="brand-arrow" /> : <span />}
            </>
          )
          return (
            <li key={client.name}>
              {client.href
                ? <a href={client.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.name}`}>{inner}</a>
                : <div>{inner}</div>}
              {client.record && <a href={client.record} className="brand-record">Project record →</a>}
            </li>
          )
        })}
      </ul>
      <style dangerouslySetInnerHTML={{ __html: `
.brand-grid { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; border-top: 1px solid var(--text-1); }
.brand-grid li { border-bottom: 1px solid var(--border); }
.brand-grid li > * { display: grid; grid-template-columns: 1fr auto 1rem; gap: 1rem; align-items: baseline; padding: 0.95rem 0; }
.brand-grid a:hover { background: var(--bg-raised); }
.brand-grid b { display: block; font-weight: 600; color: var(--text-1); }
.brand-desc { font-size: 0.88rem; color: var(--text-3); }
.brand-arrow { color: var(--text-4); }
.brand-delivered { display: block; margin-top: 0.3rem; color: var(--text-2); }
.brand-grid li > .brand-record { display: block; padding: 0 0 0.9rem; font-size: 0.85rem; color: var(--text-1); text-decoration: underline; text-underline-offset: 3px; }
.brand-grid a:hover .brand-arrow { color: var(--accent); }
@media (max-width: 760px) { .brand-grid { grid-template-columns: 1fr; } .brand-cat { display: none; } }
` }} />
    </>
  )
}
