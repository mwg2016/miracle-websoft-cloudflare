import { ChevronDown } from 'lucide-react'
import type { IndustryPage } from '@/data/industries'
interface Props { faqs: IndustryPage['faqs'] }

// Native <details>: answers are in the initial HTML (crawlable, matches any
// FAQPage JSON-LD) and the accordion works without client JavaScript.
export default function FaqAccordion({ faqs }: Props) {
  return (
    <section className="mw-section" style={{ background: 'var(--bg)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">FAQ</span>
          <h2 style={{ color: 'var(--text-1)' }}>Common questions</h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details key={i} className="mw-faq mw-faq-card rounded-lg overflow-hidden" style={{ background: 'var(--bg-raised)' }}>
              <summary className="w-full flex items-center justify-between gap-4 p-6 text-left" style={{ cursor: 'pointer', listStyle: 'none' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-1)', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.question}</span>
                <ChevronDown aria-hidden size={16} className="mw-faq-chevron" style={{ color: 'var(--accent)', flexShrink: 0 }} />
              </summary>
              <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7, borderTop: '1px solid rgb(var(--ink-rgb) / 0.07)', paddingTop: '1rem' }}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
