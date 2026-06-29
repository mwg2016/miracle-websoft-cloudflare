import { Target, Zap, TrendingUp, ShieldCheck, Users, Sparkles } from 'lucide-react'

const reasons = [
  { icon: Target,      title: 'Shopify-specific judgment', body: 'You get advice from a team that has solved Shopify problems across 600+ projects, not a general web team learning on your store.' },
  { icon: Zap,         title: 'Speed tied to revenue',      body: 'We treat load time as a sales problem. Faster pages reduce friction, improve mobile experience and support stronger SEO performance.' },
  { icon: TrendingUp,  title: 'Conversion-first decisions', body: 'Every layout, app, product page and checkout improvement is judged by whether it helps customers understand, trust and buy.' },
  { icon: ShieldCheck, title: 'Careful migration planning', body: 'Product data, customers, orders, redirects and tracking are mapped before launch so the move to Shopify does not disrupt sales.' },
  { icon: Users,       title: 'Direct communication',       body: 'You work with the people responsible for the outcome. Clear updates, practical recommendations and no account-manager handoffs.' },
  { icon: Sparkles,    title: 'Long-term store partner',    body: 'After launch, we can keep improving speed, features and conversion so your Shopify store continues to support growth.' },
]

const stats = [
  { value: '42%',  label: 'Average conversion rate uplift reported across CRO work' },
  { value: '1.2s', label: 'Median mobile LCP target achieved on optimized stores' },
  { value: '31%',  label: 'Cart abandonment reduction reported after checkout fixes' },
  { value: '600+', label: 'Shopify projects shipped' },
]

export default function WhyUs() {
  return (
    <section
      className="mw-section relative mw-noise"
      style={{
        background: '#080808',
        backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mw-container relative" style={{ zIndex: 1 }}>
        <div className="mw-section-header">
          <span className="mw-eyebrow">/08 — Why Miracle Websoft</span>
          <h2 style={{ color: '#fff' }}>
            A Shopify expert who<br />
            <span className="mw-italic mw-italic--accent">thinks like a growth partner.</span>
          </h2>
        </div>

        {/* Big stats band */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 0,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '4rem',
            background: 'rgba(255,255,255,0.015)',
          }}
          className="whyus-stats"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '2.25rem 1.5rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 500, color: '#fff', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
                {s.value}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.5, fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.04em' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="mw-card" style={{ padding: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.7rem', color: 'var(--text-4)', letterSpacing: '0.08em' }}>
                  0{i + 1}
                </span>
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{r.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', lineHeight: 1.65 }}>{r.body}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whyus-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .whyus-stats > div {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .whyus-stats > div:nth-child(2n) {
            border-right: none !important;
          }
          .whyus-stats > div:nth-child(n+3) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
