import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const destinations = [
  { href: '/free-store-audit', name: 'Free store teardown', line: 'A 5-minute video of what’s costing your store orders, in 48 hours.' },
  { href: '/services', name: 'Services', line: 'Shopify builds, CRO and speed, migrations, apps and custom development.' },
  { href: '/work', name: 'Work', line: 'Stores we’ve built and fixed, with the details.' },
  { href: '/pricing', name: 'Pricing', line: 'Fixed prices, agreed before any work starts.' },
  { href: '/blog', name: 'Blog', line: 'Guides on Shopify, CRO, speed and growth.' },
  { href: '/contact', name: 'Contact', line: 'Send a written brief and we’ll reply with a plan.' },
]

export default function NotFound() {
  return (
    <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: 'clamp(4rem, 8vw, 6.5rem)' }}>
      <div className="mw-container grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <p className="mw-eyebrow">Error 404</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '12ch' }}>
            This page <span className="mw-mark">doesn&apos;t exist.</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '40ch' }}>
            It may have moved, or the link was mistyped. If you came here to get your store looked at, start with the free teardown.
          </p>
          <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
            <Link href="/free-store-audit" className="mw-btn-accent">Get a free store teardown <ArrowRight size={16} /></Link>
            <Link href="/" className="mw-btn-outline">Back to home</Link>
          </div>
        </div>

        <nav aria-label="Popular pages">
          <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Where people usually head</p>
          <ul style={{ borderTop: '1px solid var(--text-1)' }}>
            {destinations.map((d) => (
              <li key={d.href} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link href={d.href} className="group" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25rem', gap: '1rem', alignItems: 'center', padding: '1.1rem 0' }}>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-playfair)', fontSize: '1.35rem', letterSpacing: '-0.02em', color: 'var(--text-1)' }}>{d.name}</span>
                    <span style={{ display: 'block', fontSize: '0.92rem', color: 'var(--text-3)', marginTop: '0.15rem' }}>{d.line}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-[var(--text-4)] group-hover:text-[var(--accent)] transition-colors" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
