import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { value: '600+', label: 'Shopify Projects Delivered' },
  { value: '10+',  label: 'Years in Ecommerce' },
  { value: '99%',  label: 'Job Success on Upwork' },
]

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(108,99,255,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(108,99,255,0.07) 0%, transparent 60%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="mw-container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">

          {/* Tag pill */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Shopify Development Agency · Since 2015</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            High-Converting Shopify<br />
            Stores, Apps &amp; <span style={{ color: 'var(--accent)' }}>Migrations<br />Built to Scale</span>
          </h1>

          {/* Sub-copy */}
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(1rem,2vw,1.2rem)', lineHeight: 1.8, maxWidth: '580px', marginBottom: '2rem', fontWeight: 300 }}>
            We design, develop and optimize Shopify and Shopify Plus stores for ecommerce brands across fashion, beauty, health, home, food, electronics, B2B and subscription — serving clients in the USA, UK and Australia.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1, fontFamily: 'var(--font-inter), system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                  {value}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.50)', marginTop: '0.25rem', fontWeight: 400 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-3">
            <Link href="/contact" className="mw-btn-primary text-sm px-7 py-3.5">
              Book Your Free Strategy Call <ArrowRight size={15} />
            </Link>
            <Link href="/case-studies" className="mw-btn-outline text-sm px-7 py-3.5">
              View Our Work
            </Link>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', marginBottom: '2.5rem', letterSpacing: '0.01em' }}>
            No commitment &nbsp;·&nbsp; 30-min call &nbsp;·&nbsp; Response within 24hrs
          </p>

          {/* Testimonial snippet */}
          <div className="mb-8 px-5 py-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', maxWidth: '560px' }}>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#F59E0B', fontSize: '0.85rem' }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '0.6rem' }}>
              "Had a great experience working with Karam. He developed new custom sections for my store and optimized existing ones. The work was clean, efficient, and exactly what I needed."
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>
              Verified Upwork Client &nbsp;·&nbsp; Top Rated Plus
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-7 gap-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem' }}>
            {[
              { label: 'Officially Shopify Verified Partner', icon: '✓' },
              { label: 'Top Rated Plus on Upwork', icon: '✓' },
              { label: 'USA · UK · Australia', icon: '✓' },
              { label: '600+ Stores Delivered', icon: '✓' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 700, lineHeight: 1 }}>{item.icon}</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.78)', fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(108,99,255,0.7), transparent)' }} />
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>scroll</span>
      </div>
    </section>
  )
}
