import { ExternalLink } from 'lucide-react'
import { realCases, categoryDemos } from '@/data/website-dev-content'
import { outboundHref } from '@/lib/outbound'

const countryLabel: Record<string, string> = {
  us: 'USA',
  uk: 'UK',
  au: 'Australia',
  global: 'Global',
}

export default function ReferencesGrid() {
  return (
    <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
      <div className="mw-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
          <div>
            <p className="mw-eyebrow">Proof of work</p>
            <h2 style={{ maxWidth: '16ch' }}>Sites we&apos;ve built, and ones we can build for you.</h2>
          </div>
          <p style={{ maxWidth: '42ch', fontSize: '0.95rem' }}>
            Three live client sites, then the three small-business builds we&apos;re asked for most.
          </p>
        </div>

        <ul style={{ borderTop: '1px solid var(--text-1)' }}>
          {realCases.map((rc, i) => (
            <li key={rc.name} style={{ borderBottom: '1px solid var(--border)' }}>
              <a href={outboundHref('external', rc.url)} target="_blank" rel="noopener noreferrer" className="wd-ref">
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="wd-ref-name">{rc.name}</span>
                  <span className="wd-ref-meta">{rc.category} · {countryLabel[rc.countryFlag] ?? rc.countryFlag}</span>
                </span>
                <span className="wd-ref-desc">{rc.blurb}</span>
                <span className="wd-ref-link">Live site <ExternalLink size={13} aria-hidden /></span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.12em', margin: '3.5rem 0 1rem' }}>Common small-business builds</p>
        <div className="wd-demos">
          {categoryDemos.map((demo) => (
            <div key={demo.name} className="wd-demo">
              <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{demo.category}</p>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontSize: '1.5rem', letterSpacing: '-0.02em', margin: '0.6rem 0 0.6rem' }}>{demo.name}</h3>
              <p style={{ fontSize: '0.92rem' }}>{demo.blurb}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .wd-ref { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr) minmax(0, 1.5fr) 7rem; gap: 1.25rem; align-items: baseline; padding: 1.35rem 0.25rem; transition: background 0.15s ease; }
        .wd-ref:hover { background: var(--bg-raised); }
        .wd-ref-name { display: block; font-family: var(--font-playfair); font-size: clamp(1.2rem, 1.8vw, 1.45rem); letter-spacing: -0.02em; color: var(--text-1); }
        .wd-ref-meta { display: block; margin-top: 0.2rem; font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-4); }
        .wd-ref-desc { font-size: 0.92rem; color: var(--text-3); line-height: 1.55; }
        .wd-ref-link { display: inline-flex; align-items: center; justify-content: flex-end; gap: 0.4rem; font-size: 0.85rem; font-weight: 500; color: var(--text-2); }
        .wd-ref:hover .wd-ref-link { color: var(--accent); }
        .wd-demos { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); }
        .wd-demo { padding: 1.5rem 1.5rem 0 0; }
        .wd-demo + .wd-demo { padding-left: 1.5rem; border-left: 1px solid var(--border); }
        @media (max-width: 860px) {
          .wd-ref { grid-template-columns: 2rem 1fr; row-gap: 0.5rem; }
          .wd-ref-desc, .wd-ref-link { grid-column: 2; }
          .wd-ref-link { justify-content: flex-start; }
          .wd-demos { grid-template-columns: 1fr; }
          .wd-demo, .wd-demo + .wd-demo { padding: 1.25rem 0; border-left: 0; border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </section>
  )
}
