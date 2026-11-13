import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { blogDateToIso } from '@/lib/blog-date'
import { blogPosts, getPost, type BlogPost, type BodyLink } from '@/data/blogPosts'
import { article, breadcrumb, renderJsonLd } from '@/lib/jsonld'

function renderTextWithLinks(text: string, links: BodyLink[]) {
  const nodes: ReactNode[] = []
  let remaining = text
  let key = 0
  for (const link of links) {
    const idx = remaining.indexOf(link.text)
    if (idx === -1) continue
    if (idx > 0) nodes.push(remaining.slice(0, idx))
    nodes.push(
      <Link key={key++} href={link.href}>
        {link.text}
      </Link>
    )
    remaining = remaining.slice(idx + link.text.length)
  }
  if (remaining) nodes.push(remaining)
  return nodes
}

type RelatedService = { name: string; line: string; href: string }

// Map a post's tag to the service page a reader of that post is most likely to need next.
function relatedService(tag: string): RelatedService {
  const t = tag.toLowerCase()
  if (/\bai\b/.test(t)) return { name: 'AI for Shopify stores', line: 'Support bots, product content and automations wired into your store and stack.', href: '/services/ai' }
  if (t.includes('conversion') || t.includes('cro')) return { name: 'Shopify conversion rate optimisation', line: 'Product pages, cart and checkout reworked around what stops shoppers buying.', href: '/services/conversion-rate-optimization' }
  if (t.includes('speed')) return { name: 'Shopify speed optimisation', line: 'Image weight, app scripts and theme bloat cut so mobile pages load fast.', href: '/services/shopify-speed-optimization' }
  if (t.includes('migration') || t.includes('bigcommerce')) return { name: 'Migration to Shopify', line: 'Products, customers, orders and SEO moved over without losing rankings.', href: '/services/shopify-migration' }
  if (t.includes('app')) return { name: 'Shopify app development', line: 'Custom and private apps for the jobs off-the-shelf apps can’t do well.', href: '/services/shopify-app-development' }
  if (t.includes('development')) return { name: 'Custom Shopify development', line: 'Custom sections, features and integrations built into your theme by an in-house team.', href: '/services/shopify/development' }
  return { name: 'Shopify development', line: 'Store builds, redesigns, custom features and ongoing care, at fixed prices.', href: '/services/shopify' }
}

// Some older posts store their section headings as plain strings. Treat a short line with no
// sentence-ending punctuation as a heading so those posts still get a scannable structure.
function looksLikeHeading(text: string) {
  const t = text.trim()
  return t.length > 0 && t.length <= 90 && !/[.!:;,]$/.test(t) && !/[.!?]\s/.test(t)
}

function blockText(b: BlogPost['body'][number]): string {
  if (typeof b === 'string') return b
  if ('h2' in b) return b.h2
  if ('h3' in b) return b.h3
  if ('p' in b) return b.p
  return [b.table.headers, ...b.table.rows].flat().join(' ')
}

const css = `
.post-head { max-width: 46rem; }
.post-title { font-size: clamp(34px, 4.6vw, 58px); line-height: 1.06; margin-top: 1.25rem; }
.post-dek { font-size: clamp(1.1rem, 1.5vw, 1.25rem); line-height: 1.6; color: var(--text-2); margin-top: 1.5rem; max-width: 60ch; }
.post-byline { display: flex; flex-wrap: wrap; gap: 0.35rem 1.25rem; margin-top: 2rem; padding: 1rem 0; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); font-size: 0.88rem; color: var(--text-3); }
.post-byline strong { color: var(--text-1); font-weight: 600; }
.post-body { max-width: 68ch; margin-top: 3rem; }
.post-body > * + * { margin-top: 1.35rem; }
.post-body p { font-size: 1.0625rem; line-height: 1.75; color: var(--text-2); }
.post-body h2 { font-size: clamp(1.6rem, 2.6vw, 2.1rem); line-height: 1.15; letter-spacing: -0.02em; margin-top: 3.25rem; }
.post-body h3 { font-size: 1.22rem; line-height: 1.35; margin-top: 2.25rem; }
.post-body h2 + *, .post-body h3 + * { margin-top: 0.9rem; }
.post-body a { color: var(--text-1); text-decoration: underline; text-decoration-color: var(--accent); text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
.post-body a:hover { color: var(--accent-hover); }
.post-table { overflow-x: auto; margin-top: 2rem !important; margin-bottom: 0.75rem; }
.post-table table { width: 100%; border-collapse: collapse; font-size: 0.93rem; border-top: 1px solid var(--text-1); }
.post-table th { text-align: left; padding: 0.75rem 1rem 0.75rem 0; font-family: var(--font-geist-mono); font-size: 0.7rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-3); border-bottom: 1px solid var(--border-hover); white-space: nowrap; }
.post-table td { padding: 0.8rem 1rem 0.8rem 0; color: var(--text-2); border-bottom: 1px solid var(--border); vertical-align: top; line-height: 1.5; min-width: 9rem; }
.post-table td:first-child { color: var(--text-1); font-weight: 500; }
.post-end { max-width: 68ch; margin-top: 4rem; display: grid; gap: 1rem; }
.post-related { display: grid; grid-template-columns: 1fr auto; gap: 0.25rem 1.5rem; align-items: center; padding: 1.5rem; }
.post-related .name { font-family: var(--font-playfair); font-size: 1.45rem; letter-spacing: -0.02em; color: var(--text-1); line-height: 1.2; }
.post-related p { font-size: 0.95rem; margin-top: 0.35rem; }
.post-related .go { color: var(--text-3); transition: color 0.15s, transform 0.15s; }
.post-related:hover .go { color: var(--accent); transform: translateX(3px); }
.post-cta { padding: clamp(1.5rem, 3vw, 2rem); border-radius: 8px; }
.post-nav { display: grid; grid-template-columns: 1fr 1fr; margin-top: 4rem; border-top: 1px solid var(--text-1); }
.post-nav a { padding: 1.25rem 1.5rem 1.25rem 0; }
.post-nav a + a { padding-left: 1.5rem; padding-right: 0; border-left: 1px solid var(--border); text-align: right; }
.post-nav .k { display: block; font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); margin-bottom: 0.4rem; }
.post-nav .t { font-family: var(--font-playfair); font-size: 1.15rem; line-height: 1.3; color: var(--text-1); }
.post-nav a:hover .t { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; }
@media (max-width: 640px) {
  .post-related { grid-template-columns: 1fr; }
  .post-related .go { display: none; }
  .post-nav { grid-template-columns: 1fr; }
  .post-nav a + a { padding-left: 0; border-left: 0; border-top: 1px solid var(--border); text-align: left; }
}
`

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Miracle Websoft Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://miraclewebsoft.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://miraclewebsoft.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: blogDateToIso(post.date),
      authors: ['Karam Singh Mehra'],
      tags: [post.tag, 'Shopify', 'Ecommerce'],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const idx = blogPosts.findIndex(p => p.slug === slug)
  const prev = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null
  const next = idx > 0 ? blogPosts[idx - 1] : null

  const jsonLd = renderJsonLd([
    article({
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      datePublished: blogDateToIso(post.date),
      tag: post.tag,
      body: post.body.map((b) => (typeof b === 'string' ? b : 'h2' in b ? b.h2 : 'h3' in b ? b.h3 : 'p' in b ? b.p : b.table.headers.join(' '))),
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
  ])

  const related = relatedService(post.tag)
  const words = post.body.map(blockText).join(' ').split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 230))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{css}</style>
      <article style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '5rem' }}>
        <div className="mw-container">
          <header className="post-head">
            <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
            <p className="mw-eyebrow" style={{ marginTop: '2rem', marginBottom: 0 }}>{post.tag}</p>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-dek">{post.excerpt}</p>
            <div className="post-byline">
              <span>By <strong>Karam Singh Mehra</strong>, founder, Miracle Websoft</span>
              <time dateTime={blogDateToIso(post.date)}>{post.date}</time>
              <span>{minutes} min read</span>
            </div>
          </header>

          <div className="post-body">
            {post.body.map((block, i) => {
              if (typeof block === 'string') return i > 0 && looksLikeHeading(block) ? <h2 key={i}>{block}</h2> : <p key={i}>{block}</p>
              if ('h2' in block) return <h2 key={i}>{block.h2}</h2>
              if ('h3' in block) return <h3 key={i}>{block.h3}</h3>
              if ('p' in block) return <p key={i}>{renderTextWithLinks(block.p, block.links)}</p>
              return (
                <div key={i} className="post-table">
                  <table>
                    <thead>
                      <tr>{block.table.headers.map((h, hi) => <th key={hi} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row, ri) => (
                        <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>

          <aside className="post-end" aria-label="Next steps">
            <Link href={related.href} className="mw-card post-related">
              <div>
                <span className="mw-num" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Related service</span>
                <span className="name" style={{ display: 'block', marginTop: '0.5rem' }}>{related.name}</span>
                <p>{related.line}</p>
              </div>
              <ArrowRight className="go" size={22} aria-hidden="true" />
            </Link>

            <div className="mw-ink post-cta">
              <p className="mw-eyebrow">Free · 48-hour turnaround</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', maxWidth: '20ch' }}>Want to know what this means for your store?</h2>
              <p style={{ marginTop: '0.9rem', maxWidth: '52ch' }}>
                Send your store URL and we&apos;ll record a 5-minute video teardown with the fixes ranked by how much each is likely worth.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginTop: '1.5rem' }}>
                <Link href="/free-store-audit" className="mw-btn-accent">Get a free store teardown <ArrowRight size={16} /></Link>
                <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
              </div>
            </div>
          </aside>

          {(prev || next) && (
            <nav className="post-nav" aria-label="More posts" style={{ maxWidth: '68ch' }}>
              {prev ? (
                <Link href={`/blog/${prev.slug}`}><span className="k">← Older post</span><span className="t">{prev.title}</span></Link>
              ) : <span />}
              {next && (
                <Link href={`/blog/${next.slug}`}><span className="k">Newer post →</span><span className="t">{next.title}</span></Link>
              )}
            </nav>
          )}

          <div style={{ marginTop: '2rem' }}>
            <Link href="/blog" className="inline-flex items-center gap-1.5" style={{ fontSize: '0.88rem', color: 'var(--text-3)' }}>
              <ArrowLeft size={14} /> All posts
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
