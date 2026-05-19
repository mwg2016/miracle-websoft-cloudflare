import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Props {
  tag: string
  tagColor?: string
  metric: string
  metricLabel: string
  title: string
  bullets: string[]
  duration: string
  cta?: { label: string; href: string }
}

export default function ServiceResult({
  tag, tagColor = '#6C63FF', metric, metricLabel, title, bullets, duration, cta,
}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex flex-col sm:flex-row">
        {/* Left — metric */}
        <div className="flex flex-col justify-center items-center px-8 py-8 sm:py-0 sm:min-w-[160px] text-center" style={{ background: tagColor + '12', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: tagColor + '20', color: tagColor, border: `1px solid ${tagColor}35` }}>{tag}</span>
          <div style={{ fontSize: 'clamp(2.2rem,5vw,3rem)', fontWeight: 800, color: tagColor, lineHeight: 1, letterSpacing: '-0.03em' }}>{metric}</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem', fontWeight: 500 }}>{metricLabel}</div>
        </div>

        {/* Right — detail */}
        <div className="flex flex-col justify-center p-6 flex-1">
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.4rem' }}>Real project result</p>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', lineHeight: 1.5, marginBottom: '0.9rem', fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>{title}</h3>
          <ul className="flex flex-col gap-1.5 mb-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span style={{ color: tagColor, fontWeight: 700, fontSize: '0.78rem', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.55 }}>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{duration} · Verified project</span>
            {cta && (
              <Link href={cta.href} className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors" style={{ color: tagColor }}>
                {cta.label} <ArrowRight size={11} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
