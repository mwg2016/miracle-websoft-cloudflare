import type { CountryCode } from './website-dev-cities'

export type PackageSlug = 'starter' | 'business' | 'ecommerce'

export interface WebDevPackage {
  slug: PackageSlug
  contactSlug: string
  name: string
  tagline: string
  pricesByCountry: Record<CountryCode, number>
  pages: number
  deliveryDays: string
  popular?: boolean
  included: string[]
  notIncluded: string[]
}

export const webDevPackages: WebDevPackage[] = [
  {
    slug: 'starter',
    contactSlug: 'webdev-starter',
    name: 'Starter',
    tagline: 'For a brand new business that just needs to look professional online.',
    pricesByCountry: { us: 299, uk: 249, au: 449 },
    pages: 5,
    deliveryDays: '7 days',
    included: [
      '5-page website (Home, About, Services, Contact, FAQ)',
      'Free domain name — 1 year included',
      'Hosting included — 1 year, SSL, daily backups',
      'Mobile-responsive design',
      'Contact form sending to your email',
      'Google Maps embed + business hours',
      'Basic on-page SEO (titles, descriptions, sitemap)',
      '2 rounds of revisions',
      'Source files handed over on delivery',
      'Free post-launch support — 30 days',
    ],
    notIncluded: [
      'Blog',
      'Online payments or product checkout',
      'Custom illustrations / photography',
    ],
  },
  {
    slug: 'business',
    contactSlug: 'webdev-business',
    name: 'Business',
    tagline: 'For an established business that wants to grow with content and local SEO.',
    pricesByCountry: { us: 499, uk: 429, au: 799 },
    pages: 10,
    deliveryDays: '10 days',
    popular: true,
    included: [
      'Everything in Starter, plus:',
      '10 pages including a blog (5 starter posts written for you)',
      'Newsletter signup — Mailchimp or Brevo integrated',
      'Google Analytics + Search Console connected',
      'Local SEO setup (Google Business Profile linked, local schema)',
      '3 rounds of revisions',
      'Hosting + domain — 1 year',
      'Free post-launch support — 60 days',
    ],
    notIncluded: [
      'Product checkout',
      'Inventory management',
    ],
  },
  {
    slug: 'ecommerce',
    contactSlug: 'webdev-ecommerce',
    name: 'E-commerce',
    tagline: 'For a business ready to sell online — products, payments, the lot.',
    pricesByCountry: { us: 899, uk: 779, au: 1449 },
    pages: 999,
    deliveryDays: '14 days',
    included: [
      'Everything in Business, plus:',
      'Online store on Shopify or WooCommerce — your choice',
      'Up to 50 products loaded for you',
      'Payment gateway (Stripe / PayPal / local)',
      'Inventory management training — 1-hour video call',
      'Abandoned cart email setup',
      'Hosting + domain — 1 year (or Shopify subscription guidance)',
      '90 days free post-launch support',
    ],
    notIncluded: [
      'Custom product photography',
      'Paid advertising management',
    ],
  },
]

export function getPackage(slug: PackageSlug): WebDevPackage {
  const pkg = webDevPackages.find((p) => p.slug === slug)
  if (!pkg) throw new Error(`Unknown package: ${slug}`)
  return pkg
}
