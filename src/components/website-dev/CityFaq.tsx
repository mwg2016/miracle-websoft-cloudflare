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
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <p className="mw-eyebrow">FAQ</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '14ch' }}>
            What small business owners ask before they sign up.
          </h2>
        </div>

        <div style={{ borderTop: '1px solid var(--text-1)' }}>
          {faqs.map((faq, i) => (
            <details key={i} className="wd-faq">
              <summary>
                <span>{faq.question}</span>
                <span aria-hidden className="wd-faq-icon">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        .wd-faq { border-bottom: 1px solid var(--border); }
        .wd-faq summary { cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.2rem 0; font-size: 1rem; font-weight: 500; color: var(--text-1); }
        .wd-faq summary::-webkit-details-marker { display: none; }
        .wd-faq-icon { font-size: 1.3rem; font-weight: 300; color: var(--text-3); transition: transform 0.2s ease; flex-shrink: 0; }
        .wd-faq[open] .wd-faq-icon { transform: rotate(45deg); color: var(--text-1); }
        .wd-faq p { padding: 0 0 1.35rem; max-width: 62ch; }
      `}</style>
    </section>
  )
}
