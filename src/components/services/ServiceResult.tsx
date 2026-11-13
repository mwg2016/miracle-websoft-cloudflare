import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Props {
  tag: string
  /** Kept for backwards compatibility; results use the forest token now. */
  tagColor?: string
  metric: string
  metricLabel: string
  title: string
  bullets: string[]
  duration: string
  cta?: { label: string; href: string }
}

export default function ServiceResult({
  tag, metric, metricLabel, title, bullets, duration, cta,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(180px,0.35fr)_1fr]" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 8 }}>
      <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r" style={{ padding: '1.75rem', borderColor: 'var(--border)' }}>
        <span className="mw-num" style={{ marginBottom: '0.9rem' }}>{tag}</span>
        <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem,5vw,3.5rem)', color: 'var(--forest)', lineHeight: 1, letterSpacing: '-0.03em' }}>{metric}</div>
        <div style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginTop: '0.4rem' }}>{metricLabel}</div>
      </div>
      <div className="flex flex-col justify-center" style={{ padding: '1.75rem' }}>
        <h3 style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.5, marginBottom: '0.9rem', letterSpacing: 0 }}>{title}</h3>
        <ul className="flex flex-col gap-2 mb-5">
          {bullets.map((b, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '1.25rem 1fr', fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
              <span aria-hidden style={{ color: 'var(--text-4)' }}>–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-3" style={{ paddingTop: '0.9rem', borderTop: '1px solid var(--border)' }}>
          <span className="mw-num">{duration}</span>
          {cta && (
            <Link href={cta.href} className="inline-flex items-center gap-1.5" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              {cta.label} <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
