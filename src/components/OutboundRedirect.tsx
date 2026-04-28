'use client'
import { useEffect } from 'react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

interface Props {
  to: string
  channel: string
  /** Delay before forwarding, ms — gives analytics beacons time to fire. */
  delay?: number
}

export default function OutboundRedirect({ to, channel, delay = 700 }: Props) {
  useEffect(() => {
    // The page that initiated the click was the previous in-history entry.
    // /thank-you redirected here, so document.referrer points to that
    // origin page (or empty if we lost it across navigation).
    const referrer = typeof document !== 'undefined' ? document.referrer : ''
    const sourcePage = referrer && referrer.startsWith(window.location.origin)
      ? referrer.slice(window.location.origin.length)
      : window.location.pathname

    // Fan out to GA4 / GTM / Clarity / Meta via the existing helper.
    trackLead('outbound_click', { channel, destination: to, page: sourcePage })

    // Server-side log for the admin panel — uses sendBeacon so the request
    // survives the impending navigation. Falls back to fetch+keepalive.
    try {
      const origin = getEffectiveOrigin()
      // Override click_page with the page that owned the click (referrer),
      // since by the time this code runs the user is already on /thank-you.
      origin.click_page = sourcePage
      const payload = JSON.stringify({
        channel, destination: to, page: sourcePage, origin,
      })
      const blob = new Blob([payload], { type: 'application/json' })
      const sent = typeof navigator.sendBeacon === 'function' && navigator.sendBeacon('/api/track', blob)
      if (!sent) {
        fetch('/api/track', { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {})
      }
    } catch {}

    const t = window.setTimeout(() => {
      window.location.replace(to)
    }, delay)
    return () => window.clearTimeout(t)
  }, [to, channel, delay])

  return null
}
