import type { MetadataRoute } from 'next'
import { jobs } from '@/data/jobs'

const BASE = 'https://miraclewebsoft.com'

// Keep these in sync with src/data/industries.ts
const industryslugs = [
  'womens-clothing-boutiques',
  'activewear-athleisure',
  'streetwear-urban-fashion',
  'sustainable-ethical-fashion',
  'gym-wear-fitness-apparel',
  'yoga-wear-wellness',
  'kids-children-clothing',
  'plus-size-inclusive-apparel',
  'sportswear-performance-apparel',
  'menswear-casual-clothing',
  'occasion-wear-luxury-fashion',
  'online-boutiques-multi-brand',
]

// Keep in sync with src/data/blogPosts.ts
const blogSlugs = [
  'shopify-summer-2025-edition',
  'shopify-may-2025-updates',
  'custom-shopify-section-with-ai',
  'fashion-cart-abandonment',
  'slow-shopify-store-cost',
  'tiktok-shop-shopify-activewear',
  'woocommerce-to-shopify-migration',
  'shopify-product-drop-system',
  'shopify-product-page-conversions',
  'recently-viewed-products-shopify',
  'ai-shopify-theme-sections-builder',
  'custom-pc-builder-shopify',
]

// Keep in sync with src/data/shopify-services.ts
const shopifyServiceSlugs = [
  'development',
  'fashion-apparel',
  'beauty-cosmetics',
  'health-wellness',
  'home-decor',
  'food-beverage',
  'electronics',
  'jewelry',
  'sports-fitness',
  'pets',
  'b2b-wholesale',
  'subscription-dtc',
  'print-on-demand',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const core: MetadataRoute.Sitemap = [
    // ── Tier 1: Homepage & highest-intent pages ──────────────────────────────
    { url: BASE,                                                          priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/contact`,                                             priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${BASE}/pricing`,                                             priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${BASE}/case-studies`,                                        priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/services`,                                            priority: 0.9,  changeFrequency: 'monthly' as const },

    // ── Tier 2: Core service pages ───────────────────────────────────────────
    { url: `${BASE}/services/shopify/development`,        priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-app-development`,                    priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-migration`,                          priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-cro-speed`,                          priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/wordpress-development`,                      priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/custom-web-development`,                     priority: 0.7,  changeFrequency: 'monthly' as const },

    // ── Tier 3: Company & content ────────────────────────────────────────────
    { url: `${BASE}/about`,                                               priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/blog`,                                                priority: 0.8,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/careers`,                                             priority: 0.6,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/tools`,                                               priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/tools/pc-builder`,                                    priority: 0.65, changeFrequency: 'monthly' as const },

    // ── Partner pages (new) ──────────────────────────────────────────────────
    { url: `${BASE}/white-label`,                                         priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${BASE}/referral`,                                            priority: 0.7,  changeFrequency: 'monthly' as const },

    // ── Bio pages ────────────────────────────────────────────────────────────
    { url: `${BASE}/bio/owner`,                                           priority: 0.65, changeFrequency: 'monthly' as const },
    { url: `${BASE}/bio/company`,                                         priority: 0.65, changeFrequency: 'monthly' as const },

    // ── Legal ────────────────────────────────────────────────────────────────
    { url: `${BASE}/privacy`,                                             priority: 0.3,  changeFrequency: 'yearly'  as const },
    { url: `${BASE}/terms`,                                               priority: 0.3,  changeFrequency: 'yearly'  as const },
  ]

  const shopifyServicePages: MetadataRoute.Sitemap = shopifyServiceSlugs.map(slug => ({
    url: `${BASE}/services/shopify/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  const industryPages: MetadataRoute.Sitemap = industryslugs.map(slug => ({
    url: `${BASE}/industries/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    priority: 0.65,
    changeFrequency: 'yearly' as const,
    lastModified: now,
  }))

  const workPages: MetadataRoute.Sitemap = jobs.map(job => ({
    url: `${BASE}/work/${job.id}`,
    priority: 0.60,
    changeFrequency: 'yearly' as const,
    lastModified: now,
  }))

  const workIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/work`,    priority: 0.85, changeFrequency: 'weekly'  as const, lastModified: now },
    { url: `${BASE}/reviews`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: now },
  ]

  return [
    ...core.map(p => ({ ...p, lastModified: now })),
    ...shopifyServicePages,
    ...industryPages,
    ...blogPages,
    ...workIndex,
    ...workPages,
  ]
}
