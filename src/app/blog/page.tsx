import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Blog — Shopify CRO, Speed & Growth Tips | Miracle Websoft',
  description: 'Shopify development tips, conversion tactics, speed advice and growth strategies for merchants and DTC brands. Expert guides from Miracle Websoft.',
  alternates: { canonical: 'https://miraclewebsoft.com/blog' },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Miracle Websoft Blog — Shopify CRO, speed and growth insights',
    description:
      'Development tips, conversion tactics, speed advice and platform updates for Shopify merchants.',
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
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'Blog' }]} /></div>
        <div className="mb-12">
          <span className="mw-eyebrow">Blog</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff' }}>Shopify insights for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>stores that need to grow.</em></h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '520px', marginTop: '0.75rem', fontWeight: 300 }}>Practical development, conversion, speed and platform advice for Shopify merchants who want a faster store and more qualified sales.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="mw-card flex flex-col" style={{ padding: '2rem' }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)' }}>{post.tag}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{post.date}</span>
              </div>
              <h2 style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.5, flex: 1 }}>{post.title}</h2>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.83rem', fontWeight: 600, color: 'var(--accent)' }}>Read more <ArrowRight size={13} /></Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
