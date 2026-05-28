import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden mw-noise"
      style={{
        background: 'var(--bg-deep)',
        backgroundImage:
          'radial-gradient(ellipse 90% 70% at 50% 60%, rgba(108,99,255,0.22) 0%, transparent 70%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
      }}
    >
      {/* Big editorial wordmark behind */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: 'clamp(12rem, 24vw, 28rem)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        miracle
      </div>

      <div className="mw-container relative" style={{ zIndex: 1, textAlign: 'center' }}>
        <span className="mw-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>/12 — Start here</span>
        <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>
          Let&apos;s find what your store<br />
          is <span className="mw-italic mw-italic--accent">leaving on the table.</span>
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 3rem', lineHeight: 1.65 }}>
          Free, written audit. 48-hour turnaround. No sales call required.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <Link href="/contact" className="mw-btn-primary" style={{ fontSize: '1rem', padding: '1.15rem 2rem' }}>
            Contact Us <ArrowRight size={17} />
          </Link>
          <Link
            href={outboundHref('whatsapp', 'https://wa.me/916239269736?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20Shopify%20store%20audit.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mw-btn-outline"
            style={{ fontSize: '1rem', padding: '1.15rem 2rem' }}
          >
            WhatsApp us instead
          </Link>
        </div>
        <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.75rem', color: 'var(--text-4)', letterSpacing: '0.04em' }}>
          karam@miraclewebsoft.com &nbsp;·&nbsp; +91 6239 269736 &nbsp;·&nbsp; reply within 24 h
        </p>
      </div>
    </section>
  )
}
