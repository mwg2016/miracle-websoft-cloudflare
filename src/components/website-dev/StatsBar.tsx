import { stats } from '@/data/website-dev-content'

export default function StatsBar() {
  return (
    <section
      style={{
        background: '#111',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mw-container">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                {s.value}
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{s.unit}</span>
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '0.35rem',
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
