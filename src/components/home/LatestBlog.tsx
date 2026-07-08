import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

const latestPosts = blogPosts.slice(0, 3)

export default function LatestBlog() {
  return (
    <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="mw-eyebrow">Latest Blog</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15 }}>
              Practical notes on<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ecommerce growth.</em>
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: 'var(--accent)' }}>
            View all articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestPosts.map((post) => (
            <article key={post.slug} className="mw-card flex flex-col" style={{ padding: '1.75rem' }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.24rem 0.62rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.14)', color: 'var(--accent)', border: '1px solid rgba(108,99,255,0.24)' }}>{post.tag}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.45, marginBottom: '0.75rem' }}>{post.title}</h3>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent)', fontSize: '0.84rem', fontWeight: 700 }}>
                Read article <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
