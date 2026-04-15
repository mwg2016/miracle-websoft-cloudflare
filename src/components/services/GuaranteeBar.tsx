interface Guarantee {
  icon: string
  title: string
  body: string
}

interface Props {
  guarantees: Guarantee[]
}

export default function GuaranteeBar({ guarantees }: Props) {
  return (
    <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mb-8">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#10B981', fontWeight: 700, marginBottom: '0.5rem' }}>Our Guarantees</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>
            We stand behind our work — in writing.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guarantees.map((g, i) => (
            <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{g.icon}</span>
              <div>
                <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.35rem' }}>{g.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
