import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface RelatedService {
  title: string
  desc: string
  href: string
}

export default function RelatedServices({ services, heading = 'Related services' }: { services: RelatedService[]; heading?: string }) {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <p className="mw-eyebrow">{heading}</p>
        <ul className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--text-1)' }}>
          {services.map((s, i) => (
            <li key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <Link href={s.href} className="group flex items-start justify-between gap-4 h-full" style={{ padding: '1.25rem 1.25rem 1.25rem 0' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--text-1)', fontSize: '1.2rem', letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: '0.35rem' }}>{s.title}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
                <ArrowUpRight size={17} className="shrink-0 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-4)', marginTop: 4 }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
