import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedService {
  title: string
  desc: string
  href: string
}

export default function RelatedServices({ services }: { services: RelatedService[] }) {
  return (
    <section style={{ paddingTop: '3rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '1rem' }}>
          You might also need
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group flex items-center justify-between gap-3 rounded-2xl p-5 transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}
            >
              <div>
                <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.88rem', marginBottom: '0.25rem', lineHeight: 1.3 }}>{s.title}</p>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--accent)', flexShrink: 0, opacity: 0.7 }} className="group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
