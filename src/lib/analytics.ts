// Shared analytics helpers — fans out lead events to GTM/GA4/Clarity/Meta
// and carries a rich attribution payload on every event.
//
// Sources we collect, in roughly priority order:
//   1. UTM params on the current URL (first-touch — captured once per session)
//   2. Click-ID query params (gclid / fbclid) — first-touch
//   3. Click-ID cookies set by GA / Google Ads / Meta Pixel (read at click time)
//   4. document.referrer at first-touch (external host the visitor came from)
//   5. document.referrer at click time (last-touch, e.g. internal page they were on)
//   6. Path history within this session (last 20 in-site routes)
//   7. Landing page + click page (pathname + query)

export type Origin = {
  // ── First-touch (set once per session, immutable) ───────────────────────
  first_landing_page?: string
  first_referrer?: string
  first_utm_source?: string
  first_utm_medium?: string
  first_utm_campaign?: string
  first_utm_term?: string
  first_utm_content?: string
  first_gclid?: string
  first_fbclid?: string

  // ── Cookie-based attribution (read at trackLead time) ───────────────────
  ga_client_id?: string          // _ga    — GA4 client identifier
  ga_session_id?: string         // _ga_<MEASUREMENT_ID> — current GA4 session
  google_ads_click_id?: string   // _gcl_aw — Google Ads click linker
  facebook_browser_id?: string   // _fbp   — Meta Pixel browser identifier
  facebook_click_id?: string     // _fbc   — Meta click identifier

  // ── Click-time / last-touch context ─────────────────────────────────────
  click_page?: string
  click_referrer?: string
  page_history?: string[]
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

const ORIGIN_KEY = 'mw_origin_v1'
const HISTORY_KEY = 'mw_path_history_v1'
const HISTORY_MAX = 20
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const

function readStoredOrigin(): Origin | null {
  try {
    const raw = sessionStorage.getItem(ORIGIN_KEY)
    return raw ? (JSON.parse(raw) as Origin) : null
  } catch {
    return null
  }
}

function writeStoredOrigin(o: Origin) {
  try { sessionStorage.setItem(ORIGIN_KEY, JSON.stringify(o)) } catch {}
}

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const m = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : undefined
}

function readGaSessionCookie(): string | undefined {
  if (typeof document === 'undefined') return undefined
  // GA4 stores per-property session in `_ga_<MEASUREMENT_ID>`. Pick the first.
  const m = document.cookie.match(/(?:^|; )(_ga_[^=]+)=([^;]*)/)
  return m ? decodeURIComponent(m[2]) : undefined
}

function readCookieAttribution(): Pick<Origin, 'ga_client_id' | 'ga_session_id' | 'google_ads_click_id' | 'facebook_browser_id' | 'facebook_click_id'> {
  return {
    ga_client_id: readCookie('_ga'),
    ga_session_id: readGaSessionCookie(),
    google_ads_click_id: readCookie('_gcl_aw'),
    facebook_browser_id: readCookie('_fbp'),
    facebook_click_id: readCookie('_fbc'),
  }
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

// Push a visited path to in-session history. Called on every route change.
export function recordPathVisit(path: string) {
  if (typeof window === 'undefined') return
  try {
    const raw = sessionStorage.getItem(HISTORY_KEY)
    const list: string[] = raw ? JSON.parse(raw) : []
    if (list[list.length - 1] !== path) list.push(path)
    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(-HISTORY_MAX)))
  } catch {}
}

function getPathHistory(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = sessionStorage.getItem(HISTORY_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch { return [] }
}

function getFirstTouch(): Origin {
  if (typeof window === 'undefined') return {}
  return window.__mwOrigin || readStoredOrigin() || {}
}

// Returns the full attribution payload — first-touch + cookies + last-touch.
export function getEffectiveOrigin(): Origin {
  if (typeof window === 'undefined') return {}
  return {
    ...getFirstTouch(),
    ...readCookieAttribution(),
    click_page: window.location.pathname + window.location.search,
    click_referrer: document.referrer || 'direct',
    page_history: getPathHistory(),
  }
}

// Single fan-out: GTM dataLayer + GA4 gtag + Clarity event + Meta Pixel.
export function trackLead(event: string, params: LeadParams = {}) {
  if (typeof window === 'undefined') return

  const origin = getEffectiveOrigin()
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
