import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
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
    <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '5rem' }}>
      <div className="mw-container" style={{ maxWidth: '960px' }}>
        <p className="mw-eyebrow">Site search</p>
        <h1 className="mw-hero-title" style={{ marginBottom: '1rem' }}>
          {query ? <>Results for <span className="mw-mark">&ldquo;{query}&rdquo;</span></> : 'Search Miracle Websoft'}
        </h1>
        <p style={{ color: 'var(--text-3)', maxWidth: '56ch', marginBottom: '2rem' }}>
          Services, Shopify industry guides, blog posts, partner pages, reviews and project examples.
        </p>

        <form action="/search" method="get" role="search" style={{ marginBottom: '2.5rem' }}>
          <label htmlFor="site-search" className="sr-only">Search the site</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={17} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-4)', pointerEvents: 'none' }} />
              <input
                key={query}
                id="site-search"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="Try Shopify migration, speed, activewear, reviews…"
                className="mw-field"
                style={{ minHeight: 52, paddingLeft: '2.75rem' }}
              />
            </div>
            <button type="submit" className="mw-btn-primary" style={{ minHeight: 52, justifyContent: 'center' }}>Search</button>
          </div>
        </form>

        <p className="mw-num" style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--text-1)' }}>
          {query ? `${results.length} RESULT${results.length === 1 ? '' : 'S'}` : 'POPULAR PAGES'}
        </p>

        {results.length > 0 ? (
          <ul className="search-list">
            {results.slice(0, 24).map(result => (
              <li key={`${result.type}-${result.href}`}>
                <Link href={result.href}>
                  <span className="mw-num search-type">{result.type}</span>
                  <div>
                    <h2 className="search-title">{result.title}</h2>
                    <p className="search-desc">{result.description}</p>
                    <p className="mw-num" style={{ marginTop: '0.35rem', textTransform: 'none', letterSpacing: 0 }}>{result.href}</p>
                  </div>
                  <ArrowRight size={16} className="search-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ padding: '2rem 0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No exact matches.</h2>
            <p style={{ color: 'var(--text-3)', marginBottom: '1.25rem', maxWidth: '56ch' }}>
              Try a broader phrase like Shopify development, migration, speed, fashion, reviews or pricing. Or ask us directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
              <Link href="/contact" className="mw-btn-outline">Send a written brief</Link>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
.search-list li { border-bottom: 1px solid var(--border); }
.search-list a { display: grid; grid-template-columns: 8rem 1fr 1rem; gap: 1.25rem; padding: 1.25rem 0.25rem; align-items: baseline; }
.search-list a:hover { background: var(--bg-raised); }
.search-title { font-size: 1.25rem; margin-bottom: 0.3rem; }
.search-desc { color: var(--text-3); font-size: 0.93rem; }
.search-arrow { color: var(--text-4); }
.search-list a:hover .search-arrow { color: var(--accent); }
@media (max-width: 640px) { .search-list a { grid-template-columns: 1fr 1rem; } .search-type { grid-column: 1 / -1; } }
` }} />
    </section>
  )
}
