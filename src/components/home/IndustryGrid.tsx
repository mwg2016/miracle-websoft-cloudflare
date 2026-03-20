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

export default function IndustryGrid() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Who We Work With</span>
          <h2 style={{ color: '#fff' }}>Built for fashion.<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Every niche covered.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '1rem', fontSize: '0.95rem', fontWeight: 300 }}>
            We work exclusively with clothing, fashion and apparel brands. We already know your customers and your problems.
          </p>
        </div>
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
      </div>
    </section>
  )
}
