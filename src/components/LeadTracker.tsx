'use client'
import { useEffect } from 'react'
import { captureFirstTouch, trackLead } from '@/lib/analytics'

// Hosts we treat as "lead intent" outbound clicks.
const OUTBOUND_DESTINATIONS: { match: (url: URL) => boolean; destination: string }[] = [
  { match: u => u.hostname.endsWith('upwork.com'), destination: 'upwork' },
  { match: u => u.hostname === 'www.shopify.com' && u.pathname.startsWith('/partners'), destination: 'shopify_partner' },
  { match: u => u.hostname === 'apps.shopify.com', destination: 'shopify_apps' },
]

function classify(href: string): string | null {
  try {
    const u = new URL(href, window.location.origin)
    for (const rule of OUTBOUND_DESTINATIONS) {
      if (rule.match(u)) return rule.destination
    }
  } catch {}
  return null
}

export default function LeadTracker() {
  useEffect(() => {
    captureFirstTouch()

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      if (!href) return

      const destination = classify(href)
      if (!destination) return

      trackLead('lead_outbound_click', {
        destination,
        href,
        label: (anchor.textContent || '').trim().slice(0, 80),
        page: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
