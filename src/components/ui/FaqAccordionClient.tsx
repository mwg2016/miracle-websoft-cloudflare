'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import type { Faq } from './FaqSection'

export default function FaqAccordionClient({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="max-w-3xl" style={{ borderTop: '1px solid var(--text-1)' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-start justify-between gap-6 text-left"
            style={{ background: 'transparent', padding: '1.25rem 0' }}
          >
            <span style={{ fontWeight: 500, color: 'var(--text-1)', fontSize: '1.02rem', lineHeight: 1.5 }}>{faq.question}</span>
            <Plus size={18} style={{ color: 'var(--text-2)', transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginTop: 3 }} />
          </button>
          {open === i && (
            <div style={{ padding: '0 2.5rem 1.4rem 0', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75 }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
