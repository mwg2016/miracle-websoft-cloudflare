import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'Blog — Shopify Tips for Fashion & Clothing Brands',
  description: 'Shopify development tips, conversion tactics and growth strategies for clothing and fashion brands. Expert guides from Miracle Websoft.',
  alternates: { canonical: 'https://miraclewebsoft.com/blog' },
}

export default function BlogPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'Blog' }]} /></div>
        <div className="mb-12">
          <span className="mw-eyebrow">Blog</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff' }}>Shopify insights for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>fashion brands.</em></h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '480px', marginTop: '0.75rem', fontWeight: 300 }}>Development tips, conversion tactics and platform updates — written by the team that builds Shopify stores for clothing brands every day.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="mw-card flex flex-col" style={{ padding: '2rem' }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)' }}>{post.tag}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
              </div>
              <h2 style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.5, flex: 1 }}>{post.title}</h2>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.83rem', fontWeight: 600, color: 'var(--accent)' }}>Read more <ArrowRight size={13} /></Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
