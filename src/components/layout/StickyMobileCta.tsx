'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

const HIDDEN_PREFIXES = ['/contact', '/admin', '/thank-you']

export default function StickyMobileCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // show only after the user has scrolled past the hero
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (HIDDEN_PREFIXES.some((p) => pathname?.startsWith(p))) return null

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 60,
        display: 'flex',
        gap: 8,
        padding: '0.55rem 0.55rem 0.55rem 1rem',
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 9999,
        alignItems: 'center',
        boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
        transform: visible ? 'translateY(0)' : 'translateY(140%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.35s ease',
      }}
      className="sticky-mobile-cta"
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-4)', lineHeight: 1, marginBottom: 2 }}>
          Reply within 24 h · free
        </div>
        <div style={{ fontSize: '0.86rem', color: '#fff', fontWeight: 600, lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Talk to a Shopify expert
        </div>
      </div>
      <a
        href={outboundHref('whatsapp', 'https://wa.me/916239269736?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20Shopify%20store%20audit.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        style={{
          width: 38,
          height: 38,
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.15)',
          border: '1px solid rgba(37,211,102,0.4)',
          color: '#25D366',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
      <Link
        href="/contact"
        className="mw-btn-primary"
        style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', boxShadow: 'none' }}
      >
        Contact <ArrowRight size={14} />
      </Link>

      <style jsx>{`
        @media (min-width: 768px) {
          .sticky-mobile-cta { display: none !important; }
        }
      `}</style>
    </div>
  )
}
