import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { industries } from '@/data/industries'
import { partners } from '@/data/partners'
import shopifyServices from '@/data/shopify-services'

export const metadata: Metadata = {
  title: 'Search Miracle Websoft',
  description: 'Search Miracle Websoft services, Shopify industry guides, case studies, tools, partner pages and blog posts.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/search' },
  robots: { index: false, follow: true },
}

type SearchParams = Promise<{ q?: string }>

type Result = {
  title: string
  description: string
  href: string
  type: string
}

const coreResults: Result[] = [
  {
    title: 'Custom Shopify Development',
    description: 'Custom Shopify and Shopify Plus stores, theme builds, integrations, product pages, checkout extensions and CRO-ready storefronts.',
    href: '/services/shopify/development',
    type: 'Service',
  },
  {
    title: 'Shopify App Development',
    description: 'Private and public Shopify apps, custom admin workflows, Storefront API builds, Shopify Functions and app integrations.',
    href: '/services/shopify-app-development',
    type: 'Service',
  },
  {
    title: 'Shopify Migration',
    description: 'WooCommerce, Magento, BigCommerce and custom platform migrations to Shopify with SEO URL mapping and data protection.',
    href: '/services/shopify-migration',
    type: 'Service',
  },
  {
    title: 'CRO and Speed Optimisation',
    description: 'Core Web Vitals, PageSpeed, Shopify speed optimization, product-page conversion and checkout improvement.',
    href: '/services/shopify-cro-speed',
    type: 'Service',
  },
  {
    title: 'Pricing',
    description: 'Fixed-price Shopify development packages, migration pricing, CRO packages and website development tiers.',
    href: '/pricing',
    type: 'Pricing',
  },
  {
    title: 'Work',
    description: 'Browse 600+ verified Shopify projects completed by Miracle Websoft and Karam Singh Mehra.',
    href: '/work',
    type: 'Portfolio',
  },
  {
    title: 'Reviews',
    description: 'Verified Shopify developer reviews, Upwork client feedback, video testimonials and trust signals.',
    href: '/reviews',
    type: 'Reviews',
  },
  {
    title: 'Contact',
    description: 'Request a free Shopify store audit or send project details directly to Miracle Websoft.',
    href: '/contact',
    type: 'Contact',
  },
]

const indexedResults: Result[] = [
  ...coreResults,
  ...shopifyServices.map((service) => ({
    title: service.h1,
    description: service.metaDescription,
    href: `/services/shopify/${service.slug}`,
    type: 'Shopify vertical',
  })),
  ...industries.map((industry) => ({
    title: industry.h1,
    description: industry.metaDescription,
    href: `/industries/${industry.slug}`,
    type: 'Industry guide',
  })),
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    type: post.tag,
  })),
  ...partners.map((partner) => ({
    title: partner.metaTitle,
    description: partner.metaDescription,
    href: `/partners/${partner.slug}`,
    type: 'Partner program',
  })),
]

function scoreResult(result: Result, terms: string[]) {
  const haystack = `${result.title} ${result.description} ${result.type}`.toLowerCase()
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0)
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams
  const query = (params.q ?? '').trim()
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const results = terms.length
    ? indexedResults
        .map((result) => ({ result, score: scoreResult(result, terms) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.result.title.localeCompare(b.result.title))
        .map((item) => item.result)
    : coreResults

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div style={{ maxWidth: '760px', marginBottom: '2.5rem' }}>
          <p className="mw-eyebrow">Site search</p>
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Search Miracle Websoft</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.75 }}>
            Search services, Shopify industry guides, blog posts, partner pages, reviews and project examples.
          </p>
        </div>

        <form action="/search" method="get" style={{ maxWidth: '760px', marginBottom: '2rem' }}>
          <label htmlFor="site-search" style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.65rem' }}>
            What are you looking for?
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={17} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.45)' }} />
              <input
                id="site-search"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="Try Shopify migration, speed, activewear, reviews..."
                style={{
                  width: '100%',
                  minHeight: 52,
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  padding: '0 1rem 0 2.8rem',
                  outline: 'none',
                }}
              />
            </div>
            <button type="submit" className="mw-btn-primary" style={{ minHeight: 52, justifyContent: 'center' }}>
              Search
            </button>
          </div>
        </form>

        <div style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem' }}>
          {query ? `${results.length} result${results.length === 1 ? '' : 's'} for "${query}"` : 'Popular pages'}
        </div>

        <div className="grid gap-3" style={{ maxWidth: '900px' }}>
          {results.length > 0 ? (
            results.slice(0, 24).map((result) => (
              <Link key={`${result.type}-${result.href}`} href={result.href} className="mw-card group" style={{ padding: '1.2rem 1.35rem', textDecoration: 'none' }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                      {result.type}
                    </p>
                    <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>{result.title}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.84rem', lineHeight: 1.65 }}>{result.description}</p>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', flexShrink: 0 }}>{result.href}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="mw-card" style={{ padding: '1.5rem' }}>
              <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>No exact matches found</h2>
              <p style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Try a broader phrase like Shopify development, migration, speed, activewear, fashion, reviews or pricing.
              </p>
              <Link href="/contact" className="mw-btn-primary inline-flex">
                Ask us directly
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
