import type { IndustryPage } from '@/data/industries'
import { AlertCircle } from 'lucide-react'
interface Props { painPoints: IndustryPage['painPoints'] }
export default function PainPoints({ painPoints }: Props) {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">The Problem</span>
          <h2 style={{ color: '#fff' }}>Is your store losing<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>money right now?</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <div key={i} className="mw-card" style={{ padding: '2rem', borderLeft: '1px solid rgba(108,99,255,0.4)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(108,99,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <AlertCircle size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem', lineHeight: 1.4 }}>{point.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
