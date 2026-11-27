const stats = [
  // Verified figures only (see src/data/company-facts.ts).
  { value: '700+', label: 'Projects since 2016' },
  { value: '780+', label: 'Upwork jobs' },
  { value: '$600K+', label: 'Earned on Upwork' },
  { value: '2019', label: 'Shopify Partner since' },
]

export default function StatsRow() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid rgb(var(--ink-rgb) / 0.06)', borderBottom: '1px solid rgb(var(--ink-rgb) / 0.06)' }}>
      <div className="mw-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 600, color: 'var(--text-1)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
              <p style={{ fontSize: '0.8rem', color: 'rgb(var(--ink-rgb) / 0.6)', lineHeight: 1.5, fontWeight: 400 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
