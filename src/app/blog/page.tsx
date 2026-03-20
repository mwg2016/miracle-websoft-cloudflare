import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Shopify Tips for Fashion & Clothing Brands',
  description: 'Shopify development tips, conversion tactics and growth strategies for clothing and fashion brands.',
  alternates: { canonical: 'https://miraclewebsoft.com/blog' },
}

const posts = [
  { date: 'March 2025', tag: 'Conversion', title: 'Why 77% of fashion shoppers abandon their cart — and how to stop it', excerpt: 'Cart abandonment in fashion runs higher than almost any other ecommerce vertical. Here is why it happens and the Shopify changes that fix it.' },
  { date: 'February 2025', tag: 'Speed', title: 'The real cost of a slow Shopify store for clothing brands', excerpt: 'Every extra second of load time costs you sales. We break down the exact numbers for fashion ecommerce and what to do about it.' },
  { date: 'February 2025', tag: 'TikTok', title: 'How to set up TikTok Shop on Shopify for activewear brands', excerpt: 'A step-by-step guide to connecting TikTok Shop to Shopify, syncing your catalog and making sure orders flow correctly.' },
  { date: 'January 2025', tag: 'Migration', title: 'WooCommerce to Shopify: the complete migration guide for fashion brands', excerpt: 'Everything you need to know about migrating from WooCommerce to Shopify — what data transfers, what does not, and how to protect your SEO.' },
  { date: 'January 2025', tag: 'Product Drops', title: 'How to set up a product drop system on Shopify', excerpt: 'Waitlists, countdown timers, pre-orders and sell-out handling. Here is how to build the infrastructure for a successful Shopify drop.' },
  { date: 'December 2024', tag: 'CRO', title: '10 Shopify product page changes that increase fashion conversions', excerpt: 'Small changes to your product pages can make a big difference. Here are the ten highest-impact improvements for clothing brand stores.' },
]

export default function BlogPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'Blog' }]} /></div>
        <div className="mb-12">
          <span className="mw-eyebrow">Blog</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff' }}>Shopify insights for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>fashion brands.</em></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <article key={i} className="mw-card flex flex-col" style={{ padding: '2rem' }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)' }}>{post.tag}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
              </div>
              <h2 style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.5, flex: 1 }}>{post.title}</h2>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>{post.excerpt}</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.83rem', fontWeight: 600, color: 'var(--accent)' }}>Read more <ArrowRight size={13} /></Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
