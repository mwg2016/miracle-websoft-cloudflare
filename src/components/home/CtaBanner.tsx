import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section style={{ background: '#080808', backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,99,255,0.18) 0%, transparent 70%)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="mw-container text-center">
        <span className="mw-eyebrow">Ready to grow?</span>
        <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>
          Build a store that<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>actually converts.</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem', fontWeight: 300, lineHeight: 1.8 }}>
          Get a free audit of your current store. We will show you exactly what is losing you money and how to fix it.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="mw-btn-primary px-8 py-4 text-base">
            Get Your Free Audit <ArrowRight size={16} />
          </Link>
          <Link href="/case-studies" className="mw-btn-outline px-8 py-4 text-base">
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
