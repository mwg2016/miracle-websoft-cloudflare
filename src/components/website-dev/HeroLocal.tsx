import Link from 'next/link'
import { ArrowRight, ShieldCheck, Globe2, Zap } from 'lucide-react'

interface Props {
  eyebrow: string
  title: string
  titleAccent?: string
  subtext: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
}

export default function HeroLocal({
  eyebrow,
  title,
  titleAccent,
  subtext,
  primaryCta = { href: '#get-quote', label: 'Get a quote' },
  secondaryCta = { href: '#packages', label: 'See packages' },
}: Props) {
  return (
    <section
      className="pt-32 pb-20"
      style={{
        background: '#0a0a0a',
        backgroundImage:
          'radial-gradient(ellipse at 60% 40%, rgba(108,99,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(52,211,153,0.08) 0%, transparent 50%)',
      }}
    >
      <div className="mw-container">
        <span className="mw-eyebrow">{eyebrow}</span>
        <h1 className="text-white mb-5" style={{ maxWidth: '760px' }}>
          {title}
          {titleAccent && (
            <>
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>{titleAccent}</em>
            </>
          )}
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.1rem',
            lineHeight: 1.75,
            maxWidth: '600px',
            marginBottom: '2.5rem',
          }}
        >
          {subtext}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Link href={primaryCta.href} className="mw-btn-primary">
            {primaryCta.label} <ArrowRight size={16} />
          </Link>
          <Link
            href={secondaryCta.href}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.65)',
              padding: '0.65rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            {secondaryCta.label}
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { icon: ShieldCheck, text: 'Domain + hosting included' },
            { icon: Zap, text: 'Live in 7–14 days' },
            { icon: Globe2, text: 'Built for English-speaking markets' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icon size={14} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
