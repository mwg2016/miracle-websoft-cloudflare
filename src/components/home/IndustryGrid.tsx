import Link from 'next/link'
import { industries } from '@/data/industries'
import { ShoppingBag, Zap, Tag, Leaf, Dumbbell, Heart, Baby, Users, Trophy, Shirt, Sparkles, Store, type LucideIcon } from 'lucide-react'

const industryIcons: Record<string, LucideIcon> = {
  'womens-clothing-boutiques':      ShoppingBag,
  'activewear-athleisure':          Zap,
  'streetwear-urban-fashion':       Tag,
  'sustainable-ethical-fashion':    Leaf,
  'gym-wear-fitness-apparel':       Dumbbell,
  'yoga-wear-wellness':             Heart,
  'kids-children-clothing':         Baby,
  'plus-size-inclusive-apparel':    Users,
  'sportswear-performance-apparel': Trophy,
  'menswear-casual-clothing':       Shirt,
  'occasion-wear-luxury-fashion':   Sparkles,
  'online-boutiques-multi-brand':   Store,
}

const verticals = [
  'Fashion & Apparel', 'Beauty & Cosmetics', 'Health & Wellness',
  'Home & Furniture', 'Food & Beverage', 'Electronics & Gadgets',
  'Jewelry & Accessories', 'Sports & Outdoors', 'Pet Supplies',
  'B2B & Wholesale', 'Subscription & DTC', 'Print on Demand',
]

export default function IndustryGrid() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Industries We Serve</span>
          <h2 style={{ color: '#fff' }}>Shopify experts across<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>every ecommerce vertical.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '1rem', fontSize: '0.95rem', fontWeight: 300, maxWidth: '640px' }}>
            10+ years building Shopify and Shopify Plus stores across fashion, beauty, health, home, food, electronics, B2B and subscription. Deep niche expertise where it matters — generalist range where you need it.
          </p>
        </div>

        {/* Vertical chips — broad ecommerce coverage */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {verticals.map(v => (
            <span key={v} className="px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              {v}
            </span>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '1.75rem' }}>
          Featured specialism — Fashion &amp; Apparel
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map(industry => {
            const Icon = industryIcons[industry.slug]
            return (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="mw-card group flex flex-col items-center text-center" style={{ padding: '1.75rem 1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'all 0.25s' }}>
                  {Icon && <Icon size={18} style={{ color: 'var(--accent)' }} />}
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, transition: 'color 0.2s' }} className="group-hover:text-white">
                  {industry.title}
                </span>
              </Link>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
          Not in fashion? We deliver the same depth across every vertical above.{' '}
          <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 500 }}>Talk to us about your store →</Link>
        </p>
      </div>
    </section>
  )
}
