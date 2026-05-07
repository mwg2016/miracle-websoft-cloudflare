'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
      <div className="mw-container text-center" style={{ maxWidth: '600px' }}>
        <p style={{ fontSize: '7rem', fontWeight: 800, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(28px,4vw,48px)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
          Page not found.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="mw-btn-primary text-base px-8 py-4">Back to Home</Link>
          <Link href="/contact" className="mw-btn-outline text-base px-8 py-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>You might be looking for:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Services', href: '/services/shopify/development' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', padding: '0.35rem 0.9rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
