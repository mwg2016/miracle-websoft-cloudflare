import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify, CRO & Ecommerce Growth Blog | Miracle Websoft',
  description: 'Shopify development tips, CRO tactics, speed advice, AI automation ideas and ecommerce growth guides from Miracle Websoft.',
  alternates: { canonical: 'https://miraclewebsoft.com/blog' },
  openGraph: {
    title: 'Blog — Shopify, CRO, Speed, AI & Ecommerce Growth',
    description: 'Shopify development tips, CRO tactics, speed advice, AI automation ideas and ecommerce growth guides from Miracle Websoft.',
    url: 'https://miraclewebsoft.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Shopify, CRO, Speed, AI & Ecommerce Growth',
    description: 'Shopify development tips, CRO tactics, speed advice, AI automation ideas and ecommerce growth guides from Miracle Websoft.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Miracle Websoft Blog - Shopify, CRO, speed, AI and ecommerce growth insights',
    description:
      'Development tips, conversion tactics, speed advice, AI automation ideas and ecommerce growth guides.',
    url: 'https://miraclewebsoft.com/blog',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]),
  itemList({
    name: 'Blog posts',
    description: 'All posts published on the Miracle Websoft blog.',
    items: blogPosts.map((p) => ({
      name: p.title,
      url: `/blog/${p.slug}`,
      description: p.excerpt,
    })),
  }),
])

export default function BlogPage() {
  const [lead, ...rest] = blogPosts

  return (
    <div style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container">
        <Breadcrumb items={[{ label: 'Blog' }]} />
        <header style={{ marginTop: '2rem', marginBottom: '3.5rem', maxWidth: '46rem' }}>
          <p className="mw-eyebrow">Blog</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
            Notes for ecommerce teams that <span className="mw-mark">need to grow.</span>
          </h1>
          <p style={{ marginTop: '1.25rem', fontSize: '1.08rem', maxWidth: '54ch' }}>
            Practical Shopify, conversion, speed, AI automation and custom development advice, written by the team that does the work.
          </p>
        </header>

        {lead && (
          <Link href={`/blog/${lead.slug}`} className="blog-lead">
            <span className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Latest · {lead.tag} · {lead.date}</span>
            <h2>{lead.title}</h2>
            <p>{lead.excerpt}</p>
            <span className="blog-read">Read the post →</span>
          </Link>
        )}

        <div className="blog-grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <span className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.tag} · {post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .blog-lead { display: grid; gap: 1rem; padding: 2rem 0 2.5rem; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); margin-bottom: 1rem; }
        .blog-lead h2 { font-size: clamp(30px, 3.8vw, 48px); max-width: 22ch; }
        .blog-lead p { max-width: 62ch; font-size: 1.05rem; }
        .blog-lead:hover h2 { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 6px; }
        .blog-read { font-weight: 600; font-size: 0.92rem; color: var(--accent); }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 2.5rem; }
        @media (max-width: 960px) { .blog-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
