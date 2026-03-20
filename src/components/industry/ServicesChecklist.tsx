import type { IndustryPage } from '@/data/industries'
import { CheckCircle2 } from 'lucide-react'
interface Props { services: IndustryPage['services'] }
export default function ServicesChecklist({ services }: Props) {
  return (
    <section className="mw-section" style={{ background: '#080808' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">What We Build</span>
          <h2 style={{ color: '#fff' }}>Everything your brand<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>needs on Shopify.</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
