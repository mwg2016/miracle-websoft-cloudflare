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
  'webdev-starter': {
    slug: 'webdev-starter',
    name: 'Starter Website',
    price: '$299',
    priceLabel: 'Starter Website ($299 — 5 pages, domain + hosting included)',
    type: 'build',
  },
  'webdev-business': {
    slug: 'webdev-business',
    name: 'Business Website',
    price: '$499',
    priceLabel: 'Business Website ($499 — 10 pages + blog + SEO, domain + hosting included)',
    type: 'build',
  },
  'webdev-ecommerce': {
    slug: 'webdev-ecommerce',
    name: 'E-commerce Website',
    price: '$899',
    priceLabel: 'E-commerce Website ($899 — online store up to 50 products, domain + hosting included)',
    type: 'build',
  },
}

export function getPlanBySlug(slug: string | null | undefined): PricingPlan | null {
  if (!slug) return null
  return PRICING_PLANS[slug] ?? null
}
