const steps = [
  { n: '01', title: 'Free store audit', body: 'We analyse your current store — speed, conversion points, mobile experience and growth blockers. Detailed report, free, no strings.' },
  { n: '02', title: 'Strategy & proposal', body: 'Clear scope, timeline and fixed price. You know exactly what gets built and why before we start.' },
  { n: '03', title: 'Design & build', body: 'Built in staging. You review everything before it goes live. Regular updates throughout.' },
  { n: '04', title: 'Launch & migrate', body: 'We handle DNS, redirects, data migration, SEO preservation. Zero downtime, zero traffic loss.' },
  { n: '05', title: 'Growth & optimisation', body: 'Monthly performance reviews, A/B testing, new features as your brand scales.' },
]

export default function ProcessSteps() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">How We Work</span>
          <h2 style={{ color: '#fff' }}>From audit to launch<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>in 5 clear steps.</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ background: '#0a0a0a', padding: '2rem 1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.5rem', fontWeight: 600, color: 'rgba(108,99,255,0.25)', lineHeight: 1, marginBottom: '1.25rem' }}>{step.n}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
