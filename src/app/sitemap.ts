import type { MetadataRoute } from 'next'

const BASE = 'https://miraclewebsoft.com'

const industries = [
  'womens-clothing-boutiques',
  'activewear-athleisure',
  'streetwear-urban-fashion',
  'sustainable-ethical-fashion',
  'gym-wear-fitness-apparel',
  'luxury-fashion',
  'swimwear-beachwear',
  'plus-size-fashion',
  'kidswear-childrens-clothing',
  'bridal-occasion-wear',
  'accessories-jewellery',
  'footwear-shoes',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/shopify-development-clothing-brands`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-app-development`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-migration`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-cro-speed`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const industryPages = industries.map(slug => ({
    url: `${BASE}/industries/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...industryPages].map(page => ({
    ...page,
    lastModified: now,
  }))
}
