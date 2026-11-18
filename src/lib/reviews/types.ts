// Shared review types + pure helpers. Safe to import from client components.

export type ReviewStatus = 'pending' | 'approved' | 'rejected'
export type ReviewSource = 'website' | 'upwork'

/** A review as shown on the public site (no email / IP). */
export type PublicReview = {
  slug: string
  source: ReviewSource
  rating: number
  title: string
  body: string
  name: string
  company?: string
  country?: string
  service?: string
  /** ISO date (YYYY-MM-DD or full ISO) the review was published. */
  date: string
  /** Owner reply, shown under the review. */
  reply?: string
  /** For Upwork reviews: the /work/<id> project page. */
  projectUrl?: string
}

/** Full DB row — admin only. */
export type ReviewRecord = {
  id: string
  slug: string
  status: ReviewStatus
  rating: number
  title: string
  body: string
  name: string
  email: string
  company: string | null
  website: string | null
  country: string | null
  service: string | null
  reply: string | null
  ip: string | null
  user_agent: string | null
  created_at: string
  updated_at: string
  approved_at: string | null
}

export type RatingStats = {
  count: number
  average: number
  /** index 0 = 1 star … index 4 = 5 stars */
  distribution: [number, number, number, number, number]
}

export function computeStats(reviews: { rating: number }[]): RatingStats {
  const distribution: RatingStats['distribution'] = [0, 0, 0, 0, 0]
  let sum = 0
  for (const r of reviews) {
    const star = Math.min(5, Math.max(1, Math.round(r.rating)))
    distribution[star - 1] += 1
    sum += r.rating
  }
  const count = reviews.length
  return { count, average: count ? Math.round((sum / count) * 10) / 10 : 0, distribution }
}

/** Trustpilot-style label for an average score. */
export function ratingLabel(avg: number): string {
  if (avg >= 4.5) return 'Excellent'
  if (avg >= 4) return 'Great'
  if (avg >= 3) return 'Average'
  if (avg >= 2) return 'Poor'
  return 'Bad'
}

export const REVIEW_SERVICES = [
  'Shopify store build or redesign',
  'Shopify theme customization',
  'Custom Shopify app or feature',
  'Shopify migration',
  'Conversion rate optimization',
  'Shopify speed optimization',
  'Store maintenance & support',
  'AI automation or chatbot',
  'Custom web development',
  'WordPress development',
  'Other',
] as const

export const REVIEW_LIMITS = {
  name: 80,
  email: 160,
  company: 120,
  website: 200,
  country: 60,
  title: 120,
  bodyMin: 30,
  bodyMax: 4000,
  reply: 2000,
} as const
