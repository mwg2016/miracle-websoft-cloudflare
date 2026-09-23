import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Star } from 'lucide-react'
import { jobs, jobTitle, fixTypos } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import { breadcrumb, person, webPage, itemList, renderJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Portfolio — Karam Singh Mehra, Shopify Expert | Miracle Websoft',
  description:
    'Portfolio of Karam Singh Mehra, founder of Miracle Websoft — 600+ Shopify projects, 40+ brands across fashion, beauty, home and food, Top Rated Plus on Upwork.',
  alternates: { canonical: 'https://miraclewebsoft.com/my-portfolio' },
  openGraph: {
    title: 'Portfolio — Karam Singh Mehra, Shopify Expert | Miracle Websoft',
    description: '600+ Shopify projects. 40+ brands. Top Rated Plus on Upwork, verified Shopify Partner.',
    url: 'https://miraclewebsoft.com/my-portfolio',
    type: 'profile',
  },
}

const UPWORK_PROFILE = outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de')
const SHOPIFY_PARTNER = outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1')
const CLUTCH_PROFILE = outboundHref('external', 'https://clutch.co/profile/miracle-websoft')
const MEETING_LINK = outboundHref('calendly', 'https://calendly.com/karam-4my/15-mints-discussion?month=2026-03')

const STATS = [
  { value: '600+', label: 'Shopify projects' },
  { value: '40+', label: 'Brands worked with' },
  { value: '10+', label: 'Years experience' },
  { value: '5.0', label: 'Avg. client rating' },
]

const SKILLS = [
  'Shopify Development', 'Shopify App Dev', 'Theme Customisation',
  'Shopify Migration', 'CRO & Speed', 'Fashion eCommerce',
  'Liquid / React', 'TikTok Shop',
]

const CREDENTIALS = [
  { label: 'Upwork', sub: 'Top Rated Plus · 4.9★ · 600+ reviews', href: UPWORK_PROFILE, accent: '#14a800' },
  { label: 'Shopify Partner', sub: 'Verified Partner · Certified 2024', href: SHOPIFY_PARTNER, accent: '#96BF48' },
  { label: 'Clutch', sub: '5.0★ rating · Verified agency', href: CLUTCH_PROFILE, accent: '#e63329' },
]

const featuredJobs = jobs.filter(j => j.featured)

// Brands worked with — same roster shown on /case-studies, presented here as
// a portfolio wall rather than a case-study grid.
const brands = [
  { name: 'Klarity London', category: 'Jewelry', href: 'https://klarity.london' },
  { name: 'Marco Dal Maso', category: 'Jewelry', href: 'https://marcodalmasojewelry.com' },
  { name: 'Jeweladi', category: 'Jewelry', href: null },
  { name: 'Alpha Rings', category: 'Jewelry', href: null },
  { name: 'OTAA', category: 'Accessories', href: 'https://otaa.com' },
  { name: 'Dark Hampton', category: 'Accessories', href: null },
  { name: 'Kimeze', category: 'Eyewear', href: 'https://kimeze.com' },
  { name: 'Corridor NYC', category: 'Menswear', href: 'https://corridornyc.com' },
  { name: 'Cali Clothing', category: 'Menswear', href: null },
  { name: 'Nicholas K', category: 'Fashion', href: 'https://nicholask.com' },
  { name: 'Shirtonomy', category: 'Menswear', href: null },
  { name: 'SF Citywear', category: 'Streetwear', href: null },
  { name: 'Globalhooper', category: 'Streetwear', href: null },
  { name: 'Momifa', category: 'Sustainable', href: null },
  { name: 'Farmers Atelier', category: 'Sustainable', href: 'https://farmersatelier.com' },
  { name: 'Angel De Palma', category: 'Swimwear', href: null },
  { name: 'Buddha Trends', category: "Women's Fashion", href: 'https://buddhatrends.com' },
  { name: 'Afnan Perfumes UK', category: 'Fragrance', href: 'https://afnanperfumes.co.uk' },
  { name: 'Rue Broca', category: 'Fragrance', href: null },
  { name: 'Amuerte Gin', category: 'Spirits', href: 'https://amuertegin.com' },
  { name: 'Lash Shark', category: 'Beauty', href: null },
  { name: 'Francis Global', category: 'Skincare', href: null },
  { name: 'Camellia Alise', category: 'Beauty', href: null },
  { name: 'Nathan James', category: 'Furniture', href: 'https://nathanjamesfurniture.com' },
  { name: 'Lenasi', category: 'Furniture', href: null },
  { name: 'Azado AG', category: 'Outdoor', href: null },
  { name: 'Oak Nashville', category: 'Home Goods', href: null },
  { name: 'Galerie North', category: 'Design', href: null },
  { name: 'Youbooze', category: 'Spirits', href: null },
  { name: 'Noodie', category: 'Food', href: null },
  { name: 'Hodgins Harvest', category: 'Food', href: null },
  { name: 'Raw Himalayas', category: 'Food', href: null },
  { name: 'The Speed Hound', category: 'Sports', href: null },
  { name: 'VKTRY', category: 'Sports', href: 'https://vktry.com' },
  { name: 'Phone Loops', category: 'Tech', href: 'https://phoneloops.com' },
  { name: 'Shoppetite', category: 'Tech', href: null },
  { name: 'Aqua Essentials', category: 'Aquatics', href: 'https://aquaessentials.co.uk' },
  { name: 'Plants for All Seasons', category: 'Plants', href: null },
  { name: 'Panic Panties', category: 'Underwear', href: null },
  { name: 'Beam Solo Indonesia', category: 'Tech', href: null },
  { name: 'Firewize', category: 'Safety', href: null },
  { name: 'Saint Mcqueen', category: 'Fashion', href: null },
]

const jsonLd = renderJsonLd([
  person({
    name: 'Karam Singh Mehra',
    url: 'https://miraclewebsoft.com/my-portfolio',
    jobTitle: 'Founder & Lead Shopify Expert',
    description: 'Founder of Miracle Websoft — 600+ verified Shopify projects across 40+ brands. Top Rated Plus on Upwork, verified Shopify Partner.',
    image: 'https://miraclewebsoft.com/icon-512.png',
    sameAs: [
      'https://www.linkedin.com/in/ecommerce-experts/',
      'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
      'https://www.shopify.com/partners/directory/partner/miracle-websoft1',
    ],
    worksFor: { name: 'Miracle Websoft', url: 'https://miraclewebsoft.com' },
  }),
  webPage({
    name: 'Portfolio — Karam Singh Mehra, Shopify Expert',
    description: 'Portfolio of 600+ Shopify projects and 40+ brands built by Karam Singh Mehra, founder of Miracle Websoft.',
    url: 'https://miraclewebsoft.com/my-portfolio',
    type: 'ProfilePage',
  }),
  itemList({
    name: 'Featured Shopify Projects',
    items: featuredJobs.map(j => ({ name: jobTitle(j), url: `/work/${j.id}`, description: j.description })),
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/my-portfolio' },
  ]),
])

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.10) 0%, transparent 70%)' }} />
          <div className="mw-container relative z-10">

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div
                style={{
                  width: 84, height: 84, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(145deg, var(--accent) 0%, #5A52E0 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.9rem', fontWeight: 500, color: '#fff',
                }}
              >
                KM
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Portfolio
                </p>
                <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                  Karam Singh Mehra
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>Founder &amp; Lead Shopify Expert, Miracle Websoft</p>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem,1.6vw,1.15rem)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Ten-plus years building Shopify stores for fashion, beauty, home and food brands — from ground-up custom themes to Shopify Plus checkout extensions. 600+ projects delivered, all verified on Upwork.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/work" className="mw-btn-primary inline-flex items-center gap-2 text-sm px-6 py-3">
                View Work History <ArrowUpRight size={15} />
              </Link>
              <a href={MEETING_LINK} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none' }}>
                Book a Call
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Core skills
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map(skill => (
                <span key={skill} style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', borderRadius: 9999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
                Selected Work
              </h2>
              <Link href="/work" style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}>
                All 600+ projects →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map(job => (
                <Link key={job.id} href={`/work/${job.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    className="flex flex-col h-full rounded-2xl p-5 transition-all"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="inline-block mb-3"
                      style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}
                    >
                      {job.category}
                    </span>
                    <h3
                      className="mb-2"
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
                    >
                      {jobTitle(job)}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '0.75rem', flex: 1 }}>
                      {fixTypos(job.description).slice(0, 140)}{job.description.length > 140 ? '…' : ''}
                    </p>
                    {job.review && (
                      <blockquote
                        className="rounded-xl px-4 py-3 mb-3"
                        style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '2px solid var(--accent)' }}
                      >
                        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, fontStyle: 'italic' }}>
                          &ldquo;{job.review}&rdquo;
                        </p>
                      </blockquote>
                    )}
                    <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < Math.floor(job.rating) ? '#F59E0B' : 'none'} stroke={i < Math.floor(job.rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)'} />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)' }}>{job.completedDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brands worked with */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)', marginBottom: '0.5rem' }}>
              Brands I&rsquo;ve Built For
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: 560 }}>
              A cross-section of the fashion, beauty, home and lifestyle brands I&rsquo;ve delivered Shopify work for.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map(brand => {
                const inner = (
                  <div
                    className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 h-full transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{brand.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.1rem' }}>{brand.category}</div>
                    </div>
                    {brand.href && <ArrowUpRight size={15} color="rgba(255,255,255,0.35)" />}
                  </div>
                )
                return brand.href ? (
                  <a key={brand.name} href={brand.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={brand.name}>{inner}</div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Credentials + CTA */}
        <section style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <div className="mw-container">
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {CREDENTIALS.map(cred => (
                <a
                  key={cred.label}
                  href={cred.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-5 py-4 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}
                >
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{cred.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.15rem' }}>{cred.sub}</div>
                  </div>
                  <ArrowUpRight size={16} color={cred.accent} />
                </a>
              ))}
            </div>

            <div className="rounded-3xl p-8 sm:p-12 text-center" style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.20)' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem' }}>
                Have a Shopify project in mind?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.60)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Book a free 30-minute strategy call and let&rsquo;s talk through what you&rsquo;re building.
              </p>
              <Link href="/contact" className="mw-btn-primary inline-flex text-sm px-8 py-4">
                Get Free Store Review →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
