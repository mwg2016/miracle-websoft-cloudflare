// Helper for routing outbound contact clicks through /thank-you.
// The thank-you page tracks the click (GA4 + Clarity + GTM + Meta) and
// then auto-forwards the visitor to `url`. Use this for WhatsApp, email,
// phone, Upwork, Shopify Partners, Calendly, etc.

export type OutboundChannel =
  | 'whatsapp'
  | 'email'
  | 'phone'
  | 'upwork'
  | 'shopify_partners'
  | 'shopify_apps'
  | 'calendly'
  | 'linkedin'
  | 'external'

export function outboundHref(channel: OutboundChannel, url: string): string {
  return `/thank-you?to=${encodeURIComponent(url)}&channel=${encodeURIComponent(channel)}`
}

// Schemes the thank-you page is willing to redirect to. http(s) is broad
// on purpose so portfolio / industry store links work without us having
// to maintain a whitelist of every client domain.
export const OUTBOUND_ALLOWED_SCHEMES = ['mailto:', 'tel:'] as const

export const CHANNEL_LABEL: Record<OutboundChannel, string> = {
  whatsapp: 'WhatsApp',
  email: 'Email',
  phone: 'Phone',
  upwork: 'Upwork',
  shopify_partners: 'Shopify Partners',
  shopify_apps: 'Shopify App Store',
  calendly: 'Booking Calendar',
  linkedin: 'LinkedIn',
  external: 'External Link',
}

export function isOutboundUrlSafe(raw: string): boolean {
  if (!raw) return false
  for (const scheme of OUTBOUND_ALLOWED_SCHEMES) {
    if (raw.startsWith(scheme)) return true
  }
  try {
    const u = new URL(raw)
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return false
    // Block redirects back to our own host (would loop) and obviously-bad
    // patterns. Anything else is allowed.
    const host = u.hostname.toLowerCase()
    if (host === 'localhost' || host === '0.0.0.0') return false
    if (host === 'miraclewebsoft.com' || host.endsWith('.miraclewebsoft.com')) return false
    return host.length > 0
  } catch {
    return false
  }
}
