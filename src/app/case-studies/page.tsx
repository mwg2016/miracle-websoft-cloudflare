import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Shopify Results for Fashion Brands',
  description: 'See how we have helped clothing and fashion brands improve speed, conversions and revenue on Shopify. 600+ projects completed.',
  alternates: { canonical: 'https://miraclewebsoft.com/case-studies' },
}

const featuredCaseStudies = [
  { tag: 'Activewear', title: 'Activewear brand increases conversions by 48% after TikTok Shop integration', result: '+48% conversion rate', detail: 'Built a full TikTok Shop integration, product drop system with waitlists and countdown timers, and rebuilt mobile product pages from scratch.' },
  { tag: "Women's Fashion", title: "Women's boutique cuts cart abandonment by 35% with new checkout flow", result: '-35% cart abandonment', detail: 'Rebuilt checkout flow, added size guide with fit recommendations, and integrated Klaviyo abandoned cart sequences.' },
  { tag: 'Migration', title: 'Streetwear brand migrates from WooCommerce with zero SEO traffic loss', result: '0% SEO traffic drop', detail: 'Full WooCommerce to Shopify migration — 4,000 products, 15,000 customers, 8 years of order history. All SEO URLs preserved.' },
  { tag: 'Speed', title: 'Luxury fashion store achieves 1.1s mobile load time after speed overhaul', result: '1.1s mobile load time', detail: 'Complete Lighthouse audit, image optimisation, JavaScript elimination, critical CSS inlining and Shopify theme rebuild.' },
]

const portfolioClients = [
  // Jewelry & Accessories
  { name: 'Klarity London', category: 'Jewelry', desc: 'Bespoke fine jewelry crafted in the heart of London', href: 'https://klarity.london' },
  { name: 'Marco Dal Maso', category: 'Jewelry', desc: 'Handcrafted luxury jewelry from Italy', href: 'https://marcodalmasojewelry.com' },
  { name: 'Jeweladi', category: 'Jewelry', desc: 'Timeless gold-filled jewelry for everyday wear', href: null },
  { name: 'Alpha Rings', category: 'Jewelry', desc: "Premium men's wedding bands crafted for strength and style", href: null },
  { name: 'OTAA', category: 'Accessories', desc: "Australia's premier destination for handcrafted men's accessories", href: 'https://otaa.com' },
  { name: 'Dark Hampton', category: 'Accessories', desc: 'Luxury scarves designed in New Zealand', href: null },
  { name: 'Kimeze', category: 'Eyewear', desc: 'Luxury eyewear crafted for Black features', href: 'https://kimeze.com' },

  // Fashion & Apparel
  { name: 'Corridor NYC', category: 'Menswear', desc: 'Contemporary American menswear rooted in craft and culture', href: 'https://corridornyc.com' },
  { name: 'Cali Clothing', category: 'Menswear', desc: 'Premium British menswear tailored for the modern physique', href: null },
  { name: 'Nicholas K', category: 'Fashion', desc: 'Urban minimalism meets conscious design', href: 'https://nicholask.com' },
  { name: 'Shirtonomy', category: 'Menswear', desc: 'Tailored shirts crafted with precision and passion', href: null },
  { name: 'SF Citywear', category: 'Streetwear', desc: 'Iconic San Francisco apparel for every style', href: null },
  { name: 'Globalhooper', category: 'Streetwear', desc: 'Basketball streetwear for the underdog spirit', href: null },
  { name: 'Momifa', category: 'Sustainable', desc: 'Sustainable minimalist fashion for everyday comfort', href: null },

  // Swimwear & Resort
  { name: 'Angel De Palma', category: 'Swimwear', desc: 'Handcrafted resort swimwear inspired by the Mexican Caribbean', href: null },

  // Fragrance & Beauty
  { name: 'Afnan Perfumes UK', category: 'Fragrance', desc: 'Luxury fragrance brand showcase', href: 'https://afnanperfumes.co.uk' },
  { name: 'Rue Broca', category: 'Fragrance', desc: 'Luxury fragrance brand e-commerce, USA', href: null },
  { name: 'Amuerte Gin', category: 'Spirits', desc: 'Belgian craftsmanship meets Peruvian botanicals', href: 'https://amuertegin.com' },
  { name: 'Lash Shark', category: 'Beauty', desc: 'Premium lash tools and accessories for professionals', href: null },
  { name: 'Francis Global', category: 'Skincare', desc: 'Cutting-edge skincare and beauty tech', href: null },
  { name: 'Camellia Alise', category: 'Spa', desc: 'Holistic day spa and beauty academy in Houston', href: null },

  // Home & Living
  { name: 'Nathan James', category: 'Furniture', desc: 'Affordable, stylish furniture for modern living', href: 'https://nathanjamesfurniture.com' },
  { name: 'Lenasi', category: 'Outdoor Furniture', desc: 'Premium commercial-grade outdoor seating', href: null },
  { name: 'Azado AG', category: 'Outdoor', desc: 'Swiss premium grills and custom outdoor kitchens', href: null },
  { name: 'Oak Nashville', category: 'Home Goods', desc: 'Curated home goods and signature candles', href: null },
  { name: 'Galerie North', category: 'Design', desc: 'Curated mid-century modern design in Stockholm', href: null },

  // Food & Drink
  { name: 'Youbooze', category: 'Spirits', desc: 'Premium wine and spirits e-commerce store', href: null },
  { name: 'Noodie', category: 'Food', desc: 'Revolutionising instant ramen with healthier alternatives', href: null },
  { name: 'Hodgins Harvest', category: 'Food', desc: 'Certified organic mushroom farm in New York', href: null },
  { name: 'Raw Himalayas', category: 'Food', desc: 'Premium unbleached flours from the Himalayas', href: null },

  // Health & Sports
  { name: 'The Speed Hound', category: 'Sports Recovery', desc: 'Advanced recovery technology for everyday athletes', href: null },
  { name: 'VKTRY', category: 'Sports', desc: 'Carbon fiber performance insoles for athletes', href: 'https://vktry.com' },

  // Tech & Accessories
  { name: 'Phone Loops', category: 'Tech', desc: 'Minimalist phone straps for secure one-handed use', href: 'https://phoneloops.com' },
  { name: 'Shoppetite', category: 'Tech', desc: 'One-stop shop for tech accessories', href: null },

  // Aquatics & Plants
  { name: 'Aqua Essentials', category: 'Aquatics', desc: 'Premium aquarium plants and aquascaping supplies, UK', href: 'https://aquaessentials.co.uk' },
  { name: 'Plants for All Seasons', category: 'Plants', desc: "UK's premier destination for quality houseplants", href: null },

  // Other
  { name: 'Panic Panties', category: 'Underwear', desc: "Ready-to-wear undies for life's unexpected moments", href: null },
  { name: 'Beam Solo Indonesia', category: 'E-Scooter', desc: 'E-scooter rental and retail platform', href: null },
  { name: 'Firewize', category: 'Safety', desc: 'Premium fire safety equipment for homes and businesses', href: null },
  { name: 'Saint Mcqueen', category: 'Florals', desc: 'Where fashion meets florals', href: null },
]

const categories = ['All', ...Array.from(new Set(portfolioClients.map(c => c.category)))]

export default function CaseStudiesPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'Case Studies' }]} /></div>
        <div className="mb-12">
          <span className="mw-eyebrow">Case Studies</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff' }}>Real results for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>fashion brands.</em></h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '520px', marginTop: '1rem', fontWeight: 300 }}>Over 600 Shopify projects completed since 2015. Here are some of the brands we have built, migrated, and optimised.</p>
        </div>

        {/* Featured case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {featuredCaseStudies.map((cs, i) => (
            <div key={i} className="mw-card" style={{ padding: '2rem' }}>
              <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)', marginBottom: '1.25rem' }}>{cs.tag}</span>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.5 }}>{cs.title}</h2>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>{cs.result}</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{cs.detail}</p>
            </div>
          ))}
        </div>

        {/* Portfolio client grid */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4rem', marginBottom: '3rem' }}>
          <div className="mb-8">
            <p className="mw-eyebrow">Our Clients</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>Brands we&apos;ve built on Shopify</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolioClients.map((client, i) => (
              <div key={i} className="mw-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ minWidth: 0 }}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{client.name}</span>
                    <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.15rem 0.55rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.12)', color: 'var(--accent)', flexShrink: 0 }}>{client.category}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{client.desc}</p>
                </div>
                {client.href && (
                  <a href={client.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} className="hover:text-white transition-colors">
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Get similar results for your brand <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
