import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { stats } from '@/data/website-dev-content'

interface Props {
  eyebrow: string
  title: string
  titleAccent?: string
  subtext: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  /** Optional breadcrumb or other node rendered above the eyebrow. */
  top?: React.ReactNode
  /** Localised starting price, e.g. "£249". Replaces the USD figure in the fact grid. */
  fromPrice?: string
}

export default function HeroLocal({
  eyebrow,
  title,
  titleAccent,
  subtext,
  primaryCta = { href: '#get-quote', label: 'Get a fixed-price quote' },
  secondaryCta = { href: '#packages', label: 'See packages' },
  top,
  fromPrice,
}: Props) {
  const facts = stats.map(s => (fromPrice && s.value.startsWith('$') ? { ...s, value: fromPrice } : s))
  return (
    <section style={{ paddingTop: top ? 'clamp(7.5rem, 11vw, 8.5rem)' : 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4.5rem' }}>
      <div className="mw-container">
        {top && <div style={{ marginBottom: '2.5rem' }}>{top}</div>}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="mw-eyebrow">{eyebrow}</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', maxWidth: '18ch' }}>
              {title}
              {titleAccent && (
                <>
                  {' '}
                  <span className="mw-mark">{titleAccent}</span>
                </>
              )}
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '52ch' }}>{subtext}</p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <Link href={primaryCta.href} className="mw-btn-accent">
                {primaryCta.label} <ArrowRight size={16} />
              </Link>
              <Link href={secondaryCta.href} className="mw-btn-outline">
                {secondaryCta.label}
              </Link>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '1.5rem' }}>
              Domain, hosting, design, SEO and copy included. Fixed price, agreed before we start.
            </p>
          </div>
          <dl className="wd-facts">
            {facts.map(s => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}<span>{s.unit}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <style>{`
        .wd-facts { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--text-1); }
        .wd-facts > div { padding: 1.1rem 0; border-bottom: 1px solid var(--border); }
        .wd-facts > div:nth-child(odd) { padding-right: 1.25rem; border-right: 1px solid var(--border); }
        .wd-facts > div:nth-child(even) { padding-left: 1.25rem; }
        .wd-facts dt { font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
        .wd-facts dd { font-family: var(--font-playfair); font-size: clamp(1.6rem, 2.6vw, 2.2rem); letter-spacing: -0.02em; color: var(--text-1); margin-top: 0.3rem; line-height: 1.1; }
        .wd-facts dd span { font-size: 0.6em; color: var(--text-3); }
      `}</style>
    </section>
  )
}
