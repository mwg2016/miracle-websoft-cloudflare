'use client'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

export const UPWORK_URL = outboundHref(
  'upwork',
  'https://www.upwork.com/services/product/development-it-black-friday-sale-setup-for-shopify-store-landing-page-banner-discounts-1988947480012939725?ref=project_share',
)

const GOLD = '#FBBF24'

// Sticky Upwork CTAs for the Black Friday page.
// Mobile (<768px): bottom bar, always visible.
// Desktop: bottom-right teaser, shown only while no in-page Upwork button
// (anything marked data-upwork-cta) is in view. No pulse here — that's for in-section buttons only.
export default function UpworkStickyCta() {
  // Starts hidden so the teaser doesn't flash before the first observer report.
  const [inlineInView, setInlineInView] = useState(true)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-upwork-cta]')
    const visible = new Set<Element>()
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setInlineInView(visible.size > 0)
    })
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile: always-visible bottom bar (+ spacer so it never covers the page end) */}
      <div className="bf-upwork-mobile-spacer" aria-hidden="true" />
      <div className="bf-upwork-mobile">
        <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="bf-upwork-sticky-btn" style={{ width: '100%', justifyContent: 'center' }}>
          Book Service on Upwork <ArrowRight size={16} />
        </a>
      </div>

      {/* Desktop: bottom-right teaser */}
      <a
        href={UPWORK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bf-upwork-sticky-btn bf-upwork-desktop"
        aria-hidden={inlineInView}
        tabIndex={inlineInView ? -1 : 0}
        style={{
          opacity: inlineInView ? 0 : 1,
          transform: inlineInView ? 'translateY(16px)' : 'translateY(0)',
          pointerEvents: inlineInView ? 'none' : 'auto',
        }}
      >
        Book Service on Upwork <ArrowRight size={16} />
      </a>

      <style>{`
        .bf-upwork-sticky-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${GOLD};
          color: #000;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.85rem 1.4rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(251,191,36,0.35), 0 4px 14px rgba(0,0,0,0.6);
        }
        .bf-upwork-sticky-btn:hover { filter: brightness(1.06); }

        .bf-upwork-mobile {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 60;
          padding: 0.65rem 16px calc(0.65rem + env(safe-area-inset-bottom));
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid rgba(251,191,36,0.25);
        }
        .bf-upwork-mobile-spacer { height: 76px; }

        .bf-upwork-desktop {
          display: none;
          position: fixed; right: 24px; bottom: 24px; z-index: 60;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .bf-upwork-mobile, .bf-upwork-mobile-spacer { display: none; }
          .bf-upwork-desktop { display: inline-flex; }
        }

        /* Soft pulsing glow for in-section Upwork buttons (not the sticky ones). */
        @keyframes bf-upwork-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0.55), 0 0 14px 2px rgba(251,191,36,0.25); }
          50%      { box-shadow: 0 0 0 8px rgba(251,191,36,0), 0 0 28px 8px rgba(251,191,36,0.45); }
        }
        .bf-upwork-pulse { animation: bf-upwork-glow 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bf-upwork-pulse { animation: none; }
        }
      `}</style>
    </>
  )
}
