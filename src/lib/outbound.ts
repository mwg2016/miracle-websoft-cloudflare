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

// Allow-list for the thank-you page to validate `?to=` and prevent open
// redirect abuse. Schemes (mailto:/tel:) and host suffixes are matched.
export const OUTBOUND_ALLOWED_SCHEMES = ['mailto:', 'tel:'] as const
export const OUTBOUND_ALLOWED_HOSTS = [
  'wa.me',
  'api.whatsapp.com',
  'upwork.com',
  'shopify.com',
  'apps.shopify.com',
  'calendly.com',
  'linkedin.com',
  'clutch.co',
  'designrush.com',
  'trustpilot.com',
  'techbehemoths.com',
  'facebook.com',
  'instagram.com',
  'x.com',
  'twitter.com',
  'github.com',
  'razorpay.com',
  'themedetectorapp.com',
  'whatsappautomaticreply.com',
  'pcbuilderapp.com',
] as const

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
    const host = u.hostname.toLowerCase()
    return OUTBOUND_ALLOWED_HOSTS.some(allowed => host === allowed || host.endsWith(`.${allowed}`))
  } catch {
    return false
  }
}
