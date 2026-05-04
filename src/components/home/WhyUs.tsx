import { Target, Zap, TrendingUp, ShieldCheck, Users } from 'lucide-react'

const reasons = [
  { icon: Target, title: 'Shopify-only specialists', body: 'We do one thing — Shopify and Shopify Plus development. 10+ years, 600+ stores delivered across every ecommerce vertical.' },
  { icon: Zap, title: 'Performance-first', body: 'Every store targets sub-1.5s mobile load times. Speed is the foundation of every decision we make.' },
  { icon: TrendingUp, title: 'Conversion built in', body: 'CRO thinking is in every page layout, button placement and checkout flow — not an afterthought.' },
  { icon: ShieldCheck, title: 'Zero-risk migrations', body: 'Full product catalog, customer data, SEO URLs all preserved. Zero downtime, zero traffic loss — guaranteed.' },
  { icon: Users, title: 'Direct communication', body: 'You work directly with the people building your store. No account managers, no handoffs.' },
]

export default function WhyUs() {
  return (
    <section className="mw-section" style={{ background: '#080808', backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Why Miracle Websoft</span>
          <h2 style={{ color: '#fff' }}>Not a generic web shop.<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>A dedicated Shopify specialist.</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{r.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
