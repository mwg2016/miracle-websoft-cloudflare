const stats = [
  { value: '42%', label: 'Average conversion rate increase' },
  { value: '1.2s', label: 'Average mobile load time' },
  { value: '31%', label: 'Reduction in cart abandonment' },
  { value: '50+', label: 'Fashion brands launched' },
]

export default function StatsRow() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 600, color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontWeight: 400 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
