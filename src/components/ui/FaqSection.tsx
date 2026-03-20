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
    <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mw-container">
        <div style={{ marginBottom: '3rem' }}>
          <p className="mw-eyebrow">{eyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(26px,3.5vw,40px)', lineHeight: 1.15 }}>{heading}</h2>
        </div>
        <FaqAccordionClient faqs={faqs} />
      </div>
    </section>
  )
}
