export type PricingPlan = {
  slug: string
  name: string
  price: string
  priceLabel: string
  type: 'build' | 'maintenance'
}

export const PRICING_PLANS: Record<string, PricingPlan> = {
  'basic-store': {
    slug: 'basic-store',
    name: 'Basic Store',
    price: '$600',
    priceLabel: 'Basic Store ($600 one-time build)',
    type: 'build',
  },
  'advanced-store': {
    slug: 'advanced-store',
    name: 'Advanced Store',
    price: '$1,000',
    priceLabel: 'Advanced Store ($1,000 one-time build)',
    type: 'build',
  },
  'custom-development': {
    slug: 'custom-development',
    name: 'Custom Development',
    price: '$1,500',
    priceLabel: 'Custom Development (from $1,500)',
    type: 'build',
  },
  'care': {
    slug: 'care',
    name: 'Care',
    price: '$99/mo',
    priceLabel: 'Care maintenance plan ($99/mo)',
    type: 'maintenance',
  },
  'care-plus': {
    slug: 'care-plus',
    name: 'Care+',
    price: '$299/mo',
    priceLabel: 'Care+ maintenance plan ($299/mo)',
    type: 'maintenance',
  },
  'pro': {
    slug: 'pro',
    name: 'Pro',
    price: '$500/mo',
    priceLabel: 'Pro maintenance plan ($500/mo)',
    type: 'maintenance',
  },
}

export function getPlanBySlug(slug: string | null | undefined): PricingPlan | null {
  if (!slug) return null
  return PRICING_PLANS[slug] ?? null
}
