import Link from 'next/link'
import { ArrowRight, Bot, Code2, Search, BarChart2, Smartphone, Zap } from 'lucide-react'

const checks = [
  { icon: Zap,        title: 'Speed & Core Web Vitals',  body: 'Why your store or website feels slow on mobile, what affects rankings, and which fixes matter first.' },
  { icon: Smartphone, title: 'Mobile buying experience', body: 'Where shoppers struggle to browse, compare, add to cart, book or complete checkout on a phone.' },
  { icon: BarChart2,  title: 'Conversion blockers',       body: 'Product page, landing page, homepage and checkout issues that make buyers hesitate before ordering.' },
  { icon: Bot,        title: 'AI automation opportunities', body: 'Which repeat tasks, support workflows, reports or internal processes could be automated safely.' },
  { icon: Code2,      title: 'Custom software gaps',      body: 'Where portals, dashboards, APIs or internal tools could replace manual work or disconnected SaaS tools.' },
  { icon: Search,     title: 'SEO & technical health',    body: 'Indexing issues, redirects, schema, internal links and page structure problems that hide revenue pages.' },
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
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="audit-grid"
        >
          {/* LEFT: the pitch */}
          <div className="audit-left">
            <span className="mw-eyebrow">Free Consultation</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Find the problems<br />
              slowing growth<br />
              <span className="mw-italic mw-italic--accent">and fix the right ones first.</span>
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '440px' }}>
              Send your store, website or workflow challenge and we will review it like a growth and technology partner. You get a clear written list of the issues hurting speed, conversion, operations or SEO, plus the order we would fix them in.
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
                  'Written review focused on revenue, speed, automation and buyer friction',
                  'Prioritized fix list so you know what to solve first',
                  'Plain-English explanation of what is technical, what is UX and what is operations',
                  'Honest recommendation: improve the current system or rebuild only if needed',
                  'Personal reply from Karam within 24 hours',
                ].map((line) => (
                  <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'var(--font-geist-mono), monospace' }}>→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="mw-btn-accent" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <p style={{ marginTop: '0.85rem', fontSize: '0.78rem', color: 'var(--text-4)', fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.04em' }}>
              No commitment &nbsp;·&nbsp; no sales pressure &nbsp;·&nbsp; reply within 24 h
            </p>
          </div>

          {/* RIGHT: the checks */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '1.5rem' }}>
              We review the parts of your store, site or workflow that influence growth
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
