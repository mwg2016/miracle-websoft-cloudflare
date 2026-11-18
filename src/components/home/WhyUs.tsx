const reasons = [
  { title: 'Business-first technical judgment', body: 'You get recommendations tied to revenue, operations and customer experience, not isolated development tasks.' },
  { title: 'Performance tied to outcomes', body: 'We treat load time, Core Web Vitals and app bloat as sales and SEO problems, not cosmetic technical scores.' },
  { title: 'Conversion-first decisions', body: 'Every layout, feature, automation and workflow improvement is judged by whether it helps customers understand, trust or buy.' },
  { title: 'Careful implementation planning', body: 'Store launches, migrations, APIs and AI automations are mapped before build so data, tracking and operations stay controlled.' },
  { title: 'Direct communication', body: 'You work with the people responsible for the outcome. Clear updates, practical recommendations and no account-manager handoffs.' },
  { title: 'Long-term technology partner', body: 'After launch, we can keep improving Shopify, CRO, speed, AI workflows and custom software as the business grows.' },
]

const stats = [
  { value: '700+', label: 'Projects completed' },
  { value: '15k+', label: 'Hours delivered' },
  { value: '$600K+', label: 'Earned on Upwork' },
  { value: '4.9', label: 'Rating on Clutch' },
]

export default function WhyUs() {
  return (
    <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
      <div className="mw-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end" style={{ marginBottom: '3.5rem' }}>
          <div>
            <p className="mw-eyebrow">Why Miracle Websoft</p>
            <h2 style={{ maxWidth: '16ch' }}>A technical team that thinks like a growth partner.</h2>
          </div>
          <dl className="whyus-stats">
            {stats.map(s => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="whyus-list">
          {reasons.map((r, i) => (
            <li key={r.title}>
              <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .whyus-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--text-1); }
        .whyus-stats > div { padding: 1rem 1rem 0 0; }
        .whyus-stats > div + div { padding-left: 1rem; border-left: 1px solid var(--border); }
        .whyus-stats dt { font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
        .whyus-stats dd { font-family: var(--font-playfair); font-size: clamp(1.9rem, 3.4vw, 2.75rem); letter-spacing: -0.03em; color: var(--text-1); line-height: 1.1; margin-top: 0.3rem; }
        .whyus-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 2.5rem; border-top: 1px solid var(--border); }
        .whyus-list li { display: grid; grid-template-columns: 2.25rem 1fr; gap: 0.5rem; padding: 1.75rem 0; border-bottom: 1px solid var(--border); }
        .whyus-list h3 { font-size: 1.05rem; margin-bottom: 0.5rem; }
        .whyus-list p { font-size: 0.92rem; }
        @media (max-width: 900px) {
          .whyus-list { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .whyus-stats { grid-template-columns: 1fr 1fr; }
          .whyus-stats > div:nth-child(3) { padding-left: 0; border-left: 0; }
          .whyus-stats > div:nth-child(n+3) { border-top: 1px solid var(--border); margin-top: 1rem; }
          .whyus-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
