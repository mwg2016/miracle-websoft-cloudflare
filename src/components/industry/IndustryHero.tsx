import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { IndustryPage } from '@/data/industries'

interface Props { industry: IndustryPage }

export default function IndustryHero({ industry }: Props) {
  return (
    <section
      className="pt-32 pb-16 relative overflow-hidden"
      style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(108,99,255,0.12) 0%, transparent 65%)' }}
    >
      <div className="mw-container relative z-10">
        <div className="max-w-3xl">
          <span className="mw-eyebrow">Shopify Development</span>
          <h1 className="mw-hero-title" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>{industry.h1}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(1rem,1.8vw,1.15rem)', lineHeight: 1.8, maxWidth: '580px', marginBottom: '2.5rem', fontWeight: 300 }}>{industry.subtext}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="mw-btn-primary text-sm px-7 py-3.5">
              Contact Us <ArrowRight size={15} />
            </Link>
            <Link href="/case-studies" className="mw-btn-outline text-sm px-7 py-3.5">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
