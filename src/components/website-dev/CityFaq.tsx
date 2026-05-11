import { universalFaqs, type FaqItem } from '@/data/website-dev-content'

interface Props {
  extraFaqs?: FaqItem[]
}

export function getPageFaqs(extraFaqs?: FaqItem[]): FaqItem[] {
  return extraFaqs && extraFaqs.length > 0 ? [...extraFaqs, ...universalFaqs] : universalFaqs
}

export default function CityFaq({ extraFaqs }: Props) {
  const faqs = getPageFaqs(extraFaqs)

  return (
    <section className="mw-section" style={{ background: '#0d0d0d' }}>
      <div className="mw-container" style={{ maxWidth: '820px' }}>
        <div className="mw-section-header">
          <span className="mw-eyebrow">FAQS</span>
          <h2 style={{ color: '#fff' }}>
            The questions every small business owner asks
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>before they sign up.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#fff',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <span>{faq.question}</span>
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem', fontWeight: 300, flexShrink: 0 }}>+</span>
              </summary>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                  marginTop: '0.85rem',
                  margin: '0.85rem 0 0 0',
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
