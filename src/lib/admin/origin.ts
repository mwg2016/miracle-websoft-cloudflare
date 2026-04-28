// Server-side helper: parse the JSON `_source` field that forms POST and
// turn it into a normalized Origin record for the admin store.

import type { Origin } from './store'

function asString(v: unknown): string | undefined {
  return typeof v === 'string' && v.length > 0 ? v : undefined
}

function asStringArray(v: unknown): string[] | undefined {
  if (!Array.isArray(v)) return undefined
  const out = v.filter((x): x is string => typeof x === 'string').slice(0, 50)
  return out.length > 0 ? out : undefined
}

export function parseClientOrigin(raw: string | undefined): Origin | undefined {
  if (!raw) return undefined
  let s: Record<string, unknown>
  try { s = JSON.parse(raw) as Record<string, unknown> } catch { return undefined }

  return {
    // Legacy "current page" fields the form already sent
    landing_page: asString(s.page),
    referrer: asString(s.referrer),
    utm_source: asString(s.utm_source),
    utm_medium: asString(s.utm_medium),
    utm_campaign: asString(s.utm_campaign),
    utm_term: asString(s.utm_term),
    utm_content: asString(s.utm_content),
    gclid: asString(s.gclid),
    fbclid: asString(s.fbclid),
    // First-touch fields
    first_landing_page: asString(s.first_landing_page),
    first_referrer: asString(s.first_referrer),
    first_utm_source: asString(s.first_utm_source),
    first_utm_medium: asString(s.first_utm_medium),
    first_utm_campaign: asString(s.first_utm_campaign),
    first_utm_term: asString(s.first_utm_term),
    first_utm_content: asString(s.first_utm_content),
    first_gclid: asString(s.first_gclid),
    first_fbclid: asString(s.first_fbclid),
    // Cookie attribution
    ga_client_id: asString(s.ga_client_id),
    ga_session_id: asString(s.ga_session_id),
    google_ads_click_id: asString(s.google_ads_click_id),
    facebook_browser_id: asString(s.facebook_browser_id),
    facebook_click_id: asString(s.facebook_click_id),
    // Click-time / last-touch
    click_page: asString(s.click_page),
    click_referrer: asString(s.click_referrer),
    page_history: asStringArray(s.page_history),
  }
}
