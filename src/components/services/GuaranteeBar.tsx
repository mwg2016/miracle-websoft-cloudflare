interface Guarantee {
  /** Kept for backwards compatibility; emoji icons are no longer rendered. */
  icon?: string
  title: string
  body: string
}

interface Props {
  guarantees: Guarantee[]
  heading?: string
}

export default function GuaranteeBar({ guarantees, heading = 'What you can hold us to.' }: Props) {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-14">
          <div>
            <p className="mw-eyebrow">How we work</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,36px)', maxWidth: '16ch' }}>{heading}</h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2" style={{ borderTop: '1px solid var(--text-1)' }}>
            {guarantees.map((g, i) => (
              <li key={i} style={{ padding: '1.25rem 1.25rem 1.25rem 0', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '2.25rem 1fr', gap: '0.5rem' }}>
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '0.98rem', marginBottom: '0.35rem' }}>{g.title}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{g.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
