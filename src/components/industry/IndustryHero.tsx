import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { IndustryPage } from '@/data/industries'

interface Props { industry: IndustryPage }

export default function IndustryHero({ industry }: Props) {
  return (
    <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
      <div className="mw-container grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-end">
        <div>
          <p className="mw-eyebrow">Shopify for {industry.title.toLowerCase()}</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', maxWidth: '17ch' }}>{industry.h1}</h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>{industry.subtext}</p>
          <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
            <Link href="/free-store-audit" className="mw-btn-accent">
              Get a free store teardown <ArrowRight size={16} />
            </Link>
            <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '1.5rem' }}>
            700+ projects since 2016 · Top Rated Plus on Upwork
          </p>
        </div>
        <IndustryFacts stats={industry.stats} />
      </div>
    </section>
  )
}

function IndustryFacts({ stats }: { stats: IndustryPage['stats'] }) {
  return (
    <div>
      <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>The category in numbers</p>
      <dl className="stats">
        {stats.map(s => (
          <div key={s.label}>
            <dd style={{ marginTop: 0 }}>{s.value}</dd>
            <dt style={{ marginTop: '0.35rem', lineHeight: 1.45 }}>{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
