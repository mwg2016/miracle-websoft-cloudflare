import type { IndustryPage } from '@/data/industries'
interface Props { services: IndustryPage['services'] }
export default function ServicesChecklist({ services }: Props) {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <p className="mw-eyebrow">What we build</p>
        <h2 style={{ maxWidth: '18ch', marginBottom: '2.5rem' }}>Everything your brand needs on Shopify.</h2>
        <ul className="ind-scope">
          {services.map((service, i) => (
            <li key={service}>
              <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .ind-scope { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 2.5rem; border-top: 1px solid var(--text-1); }
        .ind-scope li { display: grid; grid-template-columns: 2.25rem 1fr; align-items: baseline; padding: 0.95rem 0; border-bottom: 1px solid var(--border); color: var(--text-1); font-size: 0.95rem; line-height: 1.45; }
        @media (max-width: 900px) { .ind-scope { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .ind-scope { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
