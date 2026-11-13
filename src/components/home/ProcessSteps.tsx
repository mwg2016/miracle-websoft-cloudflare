const steps = [
  { time: '48 hours', title: 'Teardown or call', body: 'We look at your store, website, workflow and goals so the first conversation is grounded in what will actually move the business.' },
  { time: '24 hours', title: 'Fixed quote', body: 'You get a practical recommendation, fixed price and timeline before work begins. No vague estimates or open-ended hourly billing.' },
  { time: 'Build', title: 'Build safely', body: 'Stores, features and automations are built on a staging copy, so the live store keeps selling while work is in progress.' },
  { time: 'Launch', title: 'Launch & look after', body: 'QA, tracking, redirects, mobile testing and launch monitoring, then ongoing CRO, speed and Shopify support if you want it.' },
]

export default function ProcessSteps() {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <p className="mw-eyebrow">How it works</p>
        <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>What happens after you reach out.</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="steps-time">{s.time}</span>
              <h3><span className="mw-num" style={{ marginRight: '0.5rem' }}>{i + 1}</span>{s.title}</h3>
              <p style={{ fontSize: '0.93rem' }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
