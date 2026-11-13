import type { ReactNode } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export type LegalSection = { id: string; title: string; body: ReactNode }

/** Shared long-form layout for /privacy and /terms: numbered contents on the left, a ~68ch reading column on the right. */
export default function LegalDoc({
  title,
  updated,
  intro,
  sections,
  related,
}: {
  title: string
  updated: string
  intro: ReactNode
  sections: LegalSection[]
  related: { href: string; label: string }
}) {
  return (
    <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: 'clamp(4rem, 8vw, 6.5rem)' }}>
      <div className="mw-container">
        <div style={{ marginBottom: '2rem' }}><Breadcrumb items={[{ label: title }]} /></div>
        <p className="mw-eyebrow">Legal</p>
        <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>{title}</h1>
        <p className="mw-num" style={{ marginTop: '1rem', color: 'var(--text-3)' }}>Last updated: {updated}</p>

        <div className="legal-grid" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
          <nav aria-label="Contents" className="legal-toc">
            <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Contents</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}><span className="mw-num">{String(i + 1).padStart(2, '0')}</span>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal-body">
            <div className="legal-intro">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id}>
                <h2><span className="mw-num">{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
                {s.body}
              </section>
            ))}
            <p style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <Link href={related.href} className="legal-related">{related.label} →</Link>
            </p>
          </article>
        </div>
      </div>

      <style>{`
        .legal-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        @media (min-width: 1024px) { .legal-grid { grid-template-columns: 240px minmax(0, 1fr); gap: 5rem; } .legal-toc { position: sticky; top: 7rem; align-self: start; } }
        .legal-toc ol { border-top: 1px solid var(--border); }
        .legal-toc li { border-bottom: 1px solid var(--border); }
        .legal-toc a { display: grid; grid-template-columns: 2rem 1fr; padding: 0.6rem 0; font-size: 0.9rem; color: var(--text-2); transition: color 0.15s ease; }
        .legal-toc a:hover { color: var(--text-1); }
        .legal-body { max-width: 68ch; font-size: 1.0625rem; }
        .legal-body p { line-height: 1.75; color: var(--text-2); }
        .legal-body p + p { margin-top: 1em; }
        .legal-intro p { font-size: 1.15rem; line-height: 1.65; color: var(--text-1); }
        .legal-body section { scroll-margin-top: 7rem; margin-top: 2.75rem; }
        .legal-body h2 { font-size: clamp(1.5rem, 2.4vw, 1.9rem); line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 0.85rem; display: flex; align-items: baseline; gap: 0.85rem; }
        .legal-body h2 .mw-num { font-size: 0.8rem; flex-shrink: 0; }
        .legal-body a { color: var(--text-1); text-decoration: underline; text-decoration-color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .legal-body a:hover { text-decoration-thickness: 2px; }
        .legal-body a.legal-related { text-decoration: none; font-weight: 600; }
      `}</style>
    </section>
  )
}
