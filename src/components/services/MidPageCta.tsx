import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Props {
  heading: string
  sub: string
  btnLabel?: string
  btnHref?: string
  /** Secondary text link; defaults to the 15-min call. Pass null to hide. */
  secondary?: { label: string; href: string } | null
}

export default function MidPageCta({
  heading,
  sub,
  btnLabel = 'Get a free store teardown',
  btnHref = '/free-store-audit',
  secondary = { label: 'or book a 15-min call', href: '/book' },
}: Props) {
  return (
    <div className="mw-container" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
      <div
        className="flex flex-col md:flex-row md:items-center justify-between gap-5"
        style={{ borderTop: '1px solid var(--text-1)', borderBottom: '1px solid var(--border)', padding: '1.75rem 0' }}
      >
        <div style={{ maxWidth: '60ch' }}>
          <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--text-1)', fontSize: 'clamp(1.3rem,2vw,1.6rem)', lineHeight: 1.25, letterSpacing: '-0.015em', marginBottom: '0.4rem' }}>{heading}</p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{sub}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
          <Link href={btnHref} className="mw-btn-accent whitespace-nowrap">
            {btnLabel} <ArrowRight size={15} />
          </Link>
          {secondary && (
            <Link href={secondary.href} style={{ fontSize: '0.9rem', color: 'var(--text-2)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
