const cards = [
  { icon: '⚡', title: 'Your store is too slow for mobile', body: 'Over 53% of visitors abandon a site that takes longer than 3 seconds to load. Fashion shoppers on mobile will not wait.' },
  { icon: '🛒', title: '77% of shoppers leave before buying', body: 'Fashion has the highest cart abandonment rate of any ecommerce category. Most of it is fixable with the right Shopify setup.' },
  { icon: '📦', title: 'Returns are cutting your margin', body: 'Poor product pages, weak size guides and unclear fit information drive returns. Every return is a development problem.' },
]

export default function ProblemSection() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">The Problem</span>
          <h2 style={{ color: '#fff' }}>Your store is losing money.<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>We find out why — and fix it.</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="mw-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.4 }}>{card.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{card.body}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '3rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
          These are not marketing problems. They are Shopify development problems — and exactly what we fix.
        </p>
      </div>
    </section>
  )
}
