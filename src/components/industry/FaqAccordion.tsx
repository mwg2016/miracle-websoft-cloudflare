'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { IndustryPage } from '@/data/industries'
interface Props { faqs: IndustryPage['faqs'] }
export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="mw-section" style={{ background: 'var(--bg)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">FAQ</span>
          <h2 style={{ color: 'var(--text-1)' }}>Common questions</h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg overflow-hidden" style={{ background: 'var(--bg-raised)', border: `1px solid ${openIndex === i ? 'var(--border-hover)' : 'var(--border)'}`, transition: 'border-color 0.2s' }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left" style={{ background: 'transparent' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-1)', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.question}</span>
                <ChevronDown size={16} style={{ color: 'var(--accent)', transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
              </button>
              {openIndex === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7, borderTop: '1px solid rgb(var(--ink-rgb) / 0.07)', paddingTop: '1rem' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
