// Resolves an effective marketing source from a lead/click's Origin record,
// using priority: UTM params > click-ID (cookie or query) > referrer hostname >
// direct. Returns enough info for the admin to render a single source badge.

import type { Origin } from './store'

export type SourceBasis = 'utm' | 'click_id' | 'referrer' | 'direct'

export type ResolvedSource = {
  source: string
  medium: string
  campaign?: string
  basis: SourceBasis
  detail?: string  // e.g. originating referrer host or click-id value
}

function pickHost(rawReferrer?: string): string | undefined {
  if (!rawReferrer || rawReferrer === 'direct') return undefined
  try {
    return new URL(rawReferrer).hostname.toLowerCase()
  } catch {
    return rawReferrer.toLowerCase()
  }
}

function mapReferrerHost(host: string): { source: string; medium: string } {
  const h = host.replace(/^www\./, '')
  if (/^(?:[a-z]+\.)?google\.[a-z.]+$/.test(h)) return { source: 'google', medium: 'organic' }
  if (/^(?:[a-z]+\.)?bing\.com$/.test(h)) return { source: 'bing', medium: 'organic' }
  if (/duckduckgo\.com$/.test(h)) return { source: 'duckduckgo', medium: 'organic' }
  if (/yahoo\.com$/.test(h)) return { source: 'yahoo', medium: 'organic' }
  if (/yandex\./.test(h)) return { source: 'yandex', medium: 'organic' }
  if (/baidu\.com$/.test(h)) return { source: 'baidu', medium: 'organic' }

  if (/(?:^|\.)facebook\.com$/.test(h) || /^fb\.com$/.test(h) || /^l\.facebook\.com$/.test(h)) return { source: 'facebook', medium: 'social' }
  if (/(?:^|\.)instagram\.com$/.test(h) || /^l\.instagram\.com$/.test(h)) return { source: 'instagram', medium: 'social' }
  if (/(?:^|\.)linkedin\.com$/.test(h) || /^lnkd\.in$/.test(h)) return { source: 'linkedin', medium: 'social' }
  if (/^(?:[a-z]+\.)?(?:x|twitter)\.com$/.test(h) || /^t\.co$/.test(h)) return { source: 'x', medium: 'social' }
  if (/youtube\.com$/.test(h) || /youtu\.be$/.test(h)) return { source: 'youtube', medium: 'social' }
  if (/reddit\.com$/.test(h)) return { source: 'reddit', medium: 'social' }
  if (/pinterest\.com$/.test(h)) return { source: 'pinterest', medium: 'social' }
  if (/threads\.net$/.test(h)) return { source: 'threads', medium: 'social' }
  if (/tiktok\.com$/.test(h)) return { source: 'tiktok', medium: 'social' }

  if (/upwork\.com$/.test(h)) return { source: 'upwork', medium: 'referral' }
  if (/(?:^|\.)shopify\.com$/.test(h)) return { source: 'shopify', medium: 'referral' }
  if (/clutch\.co$/.test(h)) return { source: 'clutch', medium: 'referral' }
  if (/designrush\.com$/.test(h)) return { source: 'designrush', medium: 'referral' }
  if (/trustpilot\.com$/.test(h)) return { source: 'trustpilot', medium: 'referral' }
  if (/techbehemoths\.com$/.test(h)) return { source: 'techbehemoths', medium: 'referral' }
  if (/github\.com$/.test(h)) return { source: 'github', medium: 'referral' }

  // Fallback: use the host as the source name
  return { source: h, medium: 'referral' }
}

export function resolveSource(o?: Origin): ResolvedSource {
  if (!o) return { source: '(direct)', medium: '(none)', basis: 'direct' }

  // Priority 1 — UTM params (prefer first-touch flavour but fall back).
  const utm_source = o.first_utm_source ?? o.utm_source
  const utm_medium = o.first_utm_medium ?? o.utm_medium
  const utm_campaign = o.first_utm_campaign ?? o.utm_campaign
  if (utm_source) {
    return {
      source: utm_source,
      medium: utm_medium ?? '(not set)',
      campaign: utm_campaign,
      basis: 'utm',
    }
  }

  // Priority 2 — click IDs from query or cookie.
  if (o.first_gclid || o.gclid || o.google_ads_click_id) {
    return {
      source: 'google',
      medium: 'cpc',
      basis: 'click_id',
      detail: o.first_gclid || o.gclid || o.google_ads_click_id,
    }
  }
  if (o.first_fbclid || o.fbclid || o.facebook_click_id) {
    return {
      source: 'facebook',
      medium: 'cpc',
      basis: 'click_id',
      detail: o.first_fbclid || o.fbclid || o.facebook_click_id,
    }
  }

  // Priority 3 — referrer hostname (first-touch wins over click-time).
  const referrer = o.first_referrer ?? o.referrer
  const host = pickHost(referrer)
  if (host) {
    const m = mapReferrerHost(host)
    return { ...m, basis: 'referrer', detail: host }
  }

  return { source: '(direct)', medium: '(none)', basis: 'direct' }
}

// Stable, short label for grouping. Matches what the admin chips render.
export function sourceKey(s: ResolvedSource): string {
  return s.medium === '(none)' ? s.source : `${s.source} / ${s.medium}`
}
