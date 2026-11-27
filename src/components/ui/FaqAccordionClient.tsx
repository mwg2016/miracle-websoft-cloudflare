import { Plus } from 'lucide-react'
import type { Faq } from './FaqSection'

// Native <details>/<summary>: every answer ships in the initial HTML (so it
// matches the FAQPage JSON-LD and is readable by crawlers and AI search),
// while still collapsing for visitors and staying keyboard-accessible
// without client JavaScript.
export default function FaqAccordionClient({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="max-w-3xl" style={{ borderTop: '1px solid var(--text-1)' }}>
      {faqs.map((faq, i) => (
        <details key={i} className="mw-faq" style={{ borderBottom: '1px solid var(--border)' }}>
          <summary
            className="w-full flex items-start justify-between gap-6 text-left"
            style={{ padding: '1.25rem 0', cursor: 'pointer', listStyle: 'none' }}
          >
            <span style={{ fontWeight: 500, color: 'var(--text-1)', fontSize: '1.02rem', lineHeight: 1.5 }}>{faq.question}</span>
            <Plus aria-hidden size={18} className="mw-faq-icon" style={{ color: 'var(--text-2)', flexShrink: 0, marginTop: 3 }} />
          </summary>
          <div style={{ padding: '0 2.5rem 1.4rem 0', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75 }}>
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
