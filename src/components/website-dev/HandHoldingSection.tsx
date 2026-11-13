import { handHolding } from '@/data/website-dev-content'

export default function HandHoldingSection() {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <p className="mw-eyebrow">{handHolding.eyebrow}</p>
          <h2 style={{ maxWidth: '13ch' }}>You bring the business. We bring the rest.</h2>
          <p style={{ marginTop: '1.25rem', maxWidth: '42ch' }}>{handHolding.intro}</p>
        </div>
        <ol className="leaks">
          {handHolding.items.map((item, i) => (
            <li key={item.title} style={{ padding: '1.5rem 0' }}>
              <span className="mw-num" style={{ paddingTop: '0.3rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
