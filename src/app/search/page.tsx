import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { redirect } from 'next/navigation'
import { searchSite, popularPages, directMatch } from '@/lib/site-search'

export const metadata: Metadata = {
  title: 'Search Miracle Websoft',
  description: 'Search Miracle Websoft services, Shopify industry guides, case studies, tools, partner pages and blog posts.',
  alternates: { canonical: 'https://miraclewebsoft.com/search' },
  robots: { index: false, follow: true },
}

type SearchParams = Promise<{ q?: string }>

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams
  const query = (params.q ?? '').trim()
  // A query that clearly names one page goes straight to it.
  const direct = query ? directMatch(query) : null
  if (direct) redirect(direct)
  const results = query ? searchSite(query) : popularPages()

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
                key={query}
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
