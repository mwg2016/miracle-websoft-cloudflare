import type { MetadataRoute } from 'next'
import { jobs } from '@/data/jobs'
import { cities, countries, type CountryCode } from '@/data/website-dev-cities'
import { partners } from '@/data/partners'
import { industries } from '@/data/industries'
import { blogPosts } from '@/data/blogPosts'
import shopifyServices from '@/data/shopify-services'
import { aiServices } from '@/data/ai-services'

const BASE = 'https://www.miraclewebsoft.com'
const LAST_MODIFIED = new Date('2026-07-09')
// 'development' is deliberately excluded — it already has an explicit Tier 2 entry above.
const shopifyServiceSlugs = shopifyServices.map((service) => service.slug)

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    // ── Tier 1: Homepage & highest-intent pages ──────────────────────────────
    { url: BASE,                                                          priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/contact`,                                             priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${BASE}/pricing`,                                             priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${BASE}/case-studies`,                                        priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/services`,                                            priority: 0.9,  changeFrequency: 'monthly' as const },

    // ── Tier 2: Core service pages ───────────────────────────────────────────
    { url: `${BASE}/services/ai`,                                         priority: 0.92, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify`,                                    priority: 0.92, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify/development`,        priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-app-development`,                    priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-migration`,                          priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/conversion-rate-optimization`,                priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-speed-optimization`,                  priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-cro-speed`,                          priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/wordpress-development`,                      priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/custom-web-development`,                     priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/shopify-development-clothing-brands`,        priority: 0.75, changeFrequency: 'monthly' as const },

    // ── Tier 3: Company & content ────────────────────────────────────────────
    { url: `${BASE}/about`,                                               priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/resources`,                                           priority: 0.8,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/blog`,                                                priority: 0.8,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/careers`,                                             priority: 0.6,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/tools`,                                               priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/tools/pc-builder`,                                    priority: 0.65, changeFrequency: 'monthly' as const },
    { url: `${BASE}/website-development`,                                 priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${BASE}/industries`,                                          priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${BASE}/partners`,                                            priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${BASE}/lp/shopify-cro`,                                      priority: 0.7,  changeFrequency: 'monthly' as const },

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
    lastModified: LAST_MODIFIED,
  }))

  const aiServicePages: MetadataRoute.Sitemap = aiServices.map(service => ({
    url: `${BASE}/services/ai/${service.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const industryPages: MetadataRoute.Sitemap = industries.map(industry => ({
    url: `${BASE}/industries/${industry.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.65,
    changeFrequency: 'yearly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const workPages: MetadataRoute.Sitemap = jobs.map(job => ({
    url: `${BASE}/work/${job.id}`,
    priority: 0.60,
    changeFrequency: 'yearly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const workIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/work`,    priority: 0.85, changeFrequency: 'weekly'  as const, lastModified: LAST_MODIFIED },
    { url: `${BASE}/reviews`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: LAST_MODIFIED },
  ]

  const webdevCountryPages: MetadataRoute.Sitemap = (Object.keys(countries) as CountryCode[]).map((code) => ({
    url: `${BASE}/website-development/${code}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const webdevCityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/website-development/${c.country}/${c.slug}`,
    priority: 0.65,
    changeFrequency: 'monthly' as const,
    lastModified: LAST_MODIFIED,
  }))

  const partnerPages: MetadataRoute.Sitemap = partners.map((p) => ({
    url: `${BASE}/partners/${p.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: LAST_MODIFIED,
  }))

  return [
    ...core.map(p => ({ ...p, lastModified: LAST_MODIFIED })),
    ...shopifyServicePages,
    ...aiServicePages,
    ...industryPages,
    ...blogPages,
    ...workIndex,
    ...workPages,
    ...webdevCountryPages,
    ...webdevCityPages,
    ...partnerPages,
  ]
}
