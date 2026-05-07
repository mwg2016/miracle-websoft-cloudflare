import Link from 'next/link'
import { Shirt, Sparkles, HeartPulse, Sofa, UtensilsCrossed, Cpu, Gem, Trophy, PawPrint, Building2, Repeat, Printer, ArrowUpRight, type LucideIcon } from 'lucide-react'

interface Vertical {
  slug: string
  title: string
  desc: string
  icon: LucideIcon
}

const verticals: Vertical[] = [
  { slug: 'fashion-apparel',      title: 'Fashion & Apparel',     desc: 'DTC, activewear, streetwear, boutiques and luxury — our deepest specialism.',     icon: Shirt },
  { slug: 'beauty-cosmetics',     title: 'Beauty & Cosmetics',    desc: 'Quiz funnels, shade matching, subscription and ingredient-led PDPs.',             icon: Sparkles },
  { slug: 'health-wellness',      title: 'Health & Wellness',     desc: 'Supplements, vitamins and nutraceuticals with compliant claims architecture.',    icon: HeartPulse },
  { slug: 'home-decor',           title: 'Home & Furniture',      desc: 'Visualisation, configurators, freight shipping and trade portals.',                icon: Sofa },
  { slug: 'food-beverage',        title: 'Food & Beverage',       desc: 'Subscription delivery, allergen displays, age gating and corporate gifting.',     icon: UtensilsCrossed },
  { slug: 'electronics',          title: 'Electronics & Gadgets', desc: 'Spec tables, complex variants, B2B wholesale and ERP integration.',                icon: Cpu },
  { slug: 'jewelry',              title: 'Jewelry & Accessories', desc: 'Luxury checkout, engraving, custom configurators and bespoke ordering.',           icon: Gem },
  { slug: 'sports-fitness',       title: 'Sports & Outdoors',     desc: 'Equipment, supplements, B2B gym orders and performance-first builds.',             icon: Trophy },
  { slug: 'pets',                 title: 'Pet Supplies',          desc: 'Breed-based filtering, food subscription, vet-approved trust signals.',             icon: PawPrint },
  { slug: 'b2b-wholesale',        title: 'B2B & Wholesale',       desc: 'Shopify Plus B2B portals, net terms, volume pricing and ERP sync.',                 icon: Building2 },
  { slug: 'subscription-dtc',     title: 'Subscription & DTC',    desc: 'Recharge, Skio, Loop builds with custom portals and churn-reduction flows.',       icon: Repeat },
  { slug: 'print-on-demand',      title: 'Print on Demand',       desc: 'Printful, Printify, Gelato sync, mockup generators and personalisation.',          icon: Printer },
]

export default function IndustryGrid() {
  return (
    <section className="mw-section" style={{ background: '#0a0a0a' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Industries We Serve</span>
          <h2 style={{ color: '#fff' }}>Shopify experts across<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>every ecommerce vertical.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', fontSize: '0.95rem', fontWeight: 300, maxWidth: '640px' }}>
            10+ years building Shopify and Shopify Plus stores across fashion, beauty, health, home, food, electronics, B2B and subscription. Deep niche expertise where it matters — full coverage where you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verticals.map(v => {
            const Icon = v.icon
            return (
              <Link
                key={v.slug}
                href={`/services/shopify/${v.slug}`}
                className="mw-card group relative"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', minHeight: '180px' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.2)', transition: 'all 0.2s' }} className="group-hover:text-white" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{v.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
              </Link>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
          Not sure which fits? <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 500 }}>Tell us about your store →</Link>
        </p>
      </div>
    </section>
  )
}
