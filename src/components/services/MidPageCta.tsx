import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Props {
  heading: string
  sub: string
  btnLabel?: string
  btnHref?: string
}

export default function MidPageCta({
  heading,
  sub,
  btnLabel = 'Contact Us',
  btnHref = '/contact',
}: Props) {
  return (
    <div className="mw-container" style={{ paddingBottom: '3rem' }}>
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-6"
        style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.20)' }}
      >
        <div>
          <p style={{ fontWeight: 600, color: '#fff', fontSize: '1rem', marginBottom: '0.3rem' }}>{heading}</p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.6 }}>{sub}</p>
        </div>
        <Link href={btnHref} className="mw-btn-primary whitespace-nowrap text-sm shrink-0">
          {btnLabel} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
