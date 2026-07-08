const steps = [
  { n: '01', title: 'Free consultation',       body: 'We look at your store, website, workflow and goals so the first conversation is grounded in what will actually move the business.' },
  { n: '02', title: 'Clear action plan',       body: 'You get a practical recommendation, fixed price and timeline before work begins. No vague estimates or open-ended hourly billing.' },
  { n: '03', title: 'Build safely',            body: 'Stores, features, automations and web apps are built in controlled environments so live operations can continue while work is in progress.' },
  { n: '04', title: 'Launch with checks',      body: 'We handle QA, tracking, redirects, data checks, integrations, mobile testing and launch monitoring so release day is controlled.' },
  { n: '05', title: 'Keep improving',          body: 'After launch, we can support ongoing CRO, speed, Shopify improvements, AI workflow tuning and custom development.' },
]

export default function ProcessSteps() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Process</span>
          <h2 style={{ color: '#fff' }}>
            What happens after<br />
            <span className="mw-italic mw-italic--accent">you reach out.</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connecting line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(108,99,255,0.4), transparent)',
              zIndex: 0,
            }}
            className="process-line"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8" style={{ position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: '#0a0a0a',
                    border: '1px solid rgba(108,99,255,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    boxShadow: '0 0 0 4px #0a0a0a, 0 0 24px rgba(108,99,255,0.2)',
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.65, paddingRight: '0.5rem' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .process-line { display: none; }
        }
      `}</style>
    </section>
  )
}
