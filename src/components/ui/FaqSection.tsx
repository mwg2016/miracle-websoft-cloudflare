import FaqAccordionClient from './FaqAccordionClient'

export interface Faq { question: string; answer: string }
interface Props { faqs: Faq[]; heading?: string; eyebrow?: string }

export default function FaqSection({ faqs, heading = 'Common questions', eyebrow = 'FAQ' }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mw-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-14">
          <div>
            <p className="mw-eyebrow">{eyebrow}</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.15, maxWidth: '18ch' }}>{heading}</h2>
          </div>
          <FaqAccordionClient faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
