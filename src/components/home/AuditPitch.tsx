import Link from 'next/link'
import { ArrowRight, Zap, ShoppingCart, Search, BarChart2, Smartphone, Lock } from 'lucide-react'

const checks = [
  { icon: Zap,        title: 'Speed & Core Web Vitals',  body: 'LCP, INP, CLS measured on real mobile devices — and exactly what to fix to pass.' },
  { icon: Smartphone, title: 'Mobile experience',         body: 'Where touch targets, sticky cart and PDP layout silently lose mobile orders.' },
  { icon: ShoppingCart, title: 'Cart & checkout flow',    body: 'Friction points causing 70% of carts to abandon — with prioritised fixes.' },
  { icon: Search,     title: 'SEO & technical health',    body: 'Indexing issues, redirects, schema, internal linking and Shopify-specific traps.' },
  { icon: BarChart2,  title: 'Conversion rate blockers',  body: 'PDP, collection, search and homepage CRO issues benchmarked against your category.' },
  { icon: Lock,       title: 'Theme & code quality',      body: 'Bloat, deprecated patterns, app conflicts, security flags. What to keep vs. rebuild.' },
]

export default function AuditPitch() {
  return (
    <section
      className="mw-section"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="mw-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="audit-grid"
        >
          {/* LEFT: the pitch */}
          <div style={{ position: 'sticky', top: '6rem' }} className="audit-left">
            <span className="mw-eyebrow">/02 — The Audit</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>
              A written report on<br />
              what your store<br />
              <span className="mw-italic mw-italic--accent">is leaving on the table.</span>
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '440px' }}>
              Free. No sales call required. We open your store like the senior engineer who&apos;d be building it, and document every blocker we find &mdash; with priority and fix path.
            </p>

            {/* deliverable card */}
            <div
              style={{
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <p style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '0.5rem' }}>
                What you get back
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  '12 – 20 page PDF report, written by a senior Shopify engineer',
                  'Prioritised fix list — what moves revenue first',
                  'Loom walkthrough of the top three findings',
                  'Honest call on whether your store needs a rebuild or just fixes',
                  'Delivered within 48 hours of audit request',
                ].map((line) => (
                  <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'var(--font-geist-mono), monospace' }}>→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="mw-btn-accent" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
              Book a free audit <ArrowRight size={16} />
            </Link>
            <p style={{ marginTop: '0.85rem', fontSize: '0.78rem', color: 'var(--text-4)', fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.04em' }}>
              No commitment &nbsp;·&nbsp; reply within 24 h
            </p>
          </div>

          {/* RIGHT: the checks */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '1.5rem' }}>
              We look at — six surfaces, end to end
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0' }} className="audit-checks">
              {checks.map((c, i) => {
                const Icon = c.icon
                const isLastRow = i >= checks.length - 2
                const isRight = i % 2 === 1
                return (
                  <div
                    key={c.title}
                    style={{
                      padding: '1.5rem 1.5rem',
                      borderBottom: isLastRow ? 'none' : '1px solid rgba(255,255,255,0.06)',
                      borderRight: isRight ? 'none' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.7rem' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.22)' }}>
                        <Icon size={15} style={{ color: 'var(--accent)' }} />
                      </span>
                      <span style={{ color: 'var(--text-4)', fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                        0{i + 1}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.45rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-3)', lineHeight: 1.55 }}>{c.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .audit-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .audit-left {
            position: static !important;
          }
          .audit-checks {
            grid-template-columns: 1fr !important;
          }
          .audit-checks > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .audit-checks > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
