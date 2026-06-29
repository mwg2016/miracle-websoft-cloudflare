import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { blogPosts, getPost } from '@/data/blogPosts'
import { article, breadcrumb, renderJsonLd } from '@/lib/jsonld'

const MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
}

function toIso(date: string): string {
  const [m, y] = date.trim().split(' ')
  const mm = MONTHS[m] ?? '01'
  return `${y}-${mm}-01`
}

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
      publishedTime: toIso(post.date),
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
      datePublished: toIso(post.date),
      tag: post.tag,
      body: post.body,
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="mw-container" style={{ maxWidth: '780px' }}>
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)' }}>{post.tag}</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{post.date}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(26px,4vw,42px)', lineHeight: 1.2, marginBottom: '1.5rem' }}>{post.title}</h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 300, borderLeft: '2px solid var(--accent)', paddingLeft: '1.25rem' }}>{post.excerpt}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mb-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>K</span>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Karam Singh Mehra</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Founder · Miracle Websoft · Shopify Expert since 2015</div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 mb-14">
            {post.body.map((para, i) => (
              <p key={i} style={{ fontSize: '0.975rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontWeight: 300 }}>{para}</p>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '20px', padding: '2rem', marginBottom: '3rem' }}>
            <p className="mw-eyebrow">Need help?</p>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>Want us to implement this for your store?</h2>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>We build, optimize and improve Shopify stores for merchants who need better speed, conversion and customer experience. Get a free store review and see what we would change first.</p>
            <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get Free Store Review <ArrowRight size={15} />
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="mw-card group" style={{ padding: '1.25rem 1.5rem', display: 'block' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>← Older post</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }} className="group-hover:text-[var(--accent)] transition-colors">{prev.title}</div>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="mw-card group" style={{ padding: '1.25rem 1.5rem', display: 'block', textAlign: 'right', marginLeft: prev ? undefined : 'auto' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Newer post →</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }} className="group-hover:text-[var(--accent)] transition-colors">{next.title}</div>
              </Link>
            )}
          </div>

          <div className="mt-8">
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }} className="hover:text-white transition-colors">
              <ArrowLeft size={13} /> Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
