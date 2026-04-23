// Shared analytics helpers — fans out lead events to GTM/GA4/Clarity/Meta
// and carries a first-touch origin (landing page, referrer, utm_*) on every event.

type Origin = {
  first_landing_page?: string
  first_referrer?: string
  first_utm_source?: string
  first_utm_medium?: string
  first_utm_campaign?: string
  first_utm_term?: string
  first_utm_content?: string
  first_gclid?: string
  first_fbclid?: string
}

type LeadParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    __mwOrigin?: Origin
  }
}

const STORAGE_KEY = 'mw_origin_v1'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const

function readStoredOrigin(): Origin | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Origin) : null
  } catch {
    return null
  }
}

function writeStoredOrigin(o: Origin) {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(o)) } catch {}
}

// Run once per session — stashes the first-touch origin so it sticks across
// internal navigation. Subsequent visits in the same tab don't overwrite it.
export function captureFirstTouch(): Origin {
  if (typeof window === 'undefined') return {}

  const existing = readStoredOrigin()
  if (existing) {
    window.__mwOrigin = existing
    syncClarityTags(existing)
    return existing
  }

  const params = new URLSearchParams(window.location.search)
  const origin: Origin = {
    first_landing_page: window.location.pathname + window.location.search,
    first_referrer: document.referrer || 'direct',
  }

  for (const k of UTM_KEYS) {
    const v = params.get(k)
    if (v) (origin as Record<string, string>)[`first_${k}`] = v
  }

  writeStoredOrigin(origin)
  window.__mwOrigin = origin
  syncClarityTags(origin)
  return origin
}

// Clarity custom tags make sessions filterable by UTM / landing page.
function syncClarityTags(o: Origin) {
  if (typeof window === 'undefined' || typeof window.clarity !== 'function') return
  const pairs: [string, string | undefined][] = [
    ['utm_source', o.first_utm_source],
    ['utm_medium', o.first_utm_medium],
    ['utm_campaign', o.first_utm_campaign],
    ['referrer', o.first_referrer],
    ['landing_page', o.first_landing_page],
  ]
  for (const [k, v] of pairs) {
    if (v) try { window.clarity!('set', k, v) } catch {}
  }
}

function getOrigin(): Origin {
  if (typeof window === 'undefined') return {}
  return window.__mwOrigin || readStoredOrigin() || {}
}

// Single fan-out: GTM dataLayer + GA4 gtag + Clarity event + Meta Pixel.
export function trackLead(event: string, params: LeadParams = {}) {
  if (typeof window === 'undefined') return

  const origin = getOrigin()
  const payload = { ...origin, ...params }

  try { (window.dataLayer = window.dataLayer || []).push({ event, ...payload }) } catch {}
  try { window.gtag?.('event', event, payload) } catch {}
  try {
    window.clarity?.('event', event)
    if (params.form) window.clarity?.('set', 'lead_form', String(params.form))
    if (params.destination) window.clarity?.('set', 'lead_destination', String(params.destination))
  } catch {}
  try {
    window.fbq?.('trackCustom', event, payload)
    if (event === 'lead_form_submit') window.fbq?.('track', 'Lead', payload)
  } catch {}
}
