'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Faq } from './FaqSection'

export default function FaqAccordionClient({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: `1px solid ${open === i ? 'rgba(108,99,255,0.35)' : 'rgba(255,255,255,0.08)'}`, transition: 'border-color 0.2s' }}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left" style={{ background: 'transparent' }}>
            <span style={{ fontWeight: 500, color: '#fff', fontSize: '0.95rem', lineHeight: 1.55 }}>{faq.question}</span>
            <ChevronDown size={15} style={{ color: 'var(--accent)', transition: 'transform 0.25s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
          </button>
          {open === i && (
            <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontWeight: 300, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
