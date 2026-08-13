import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import RecentWork from '@/components/home/RecentWork'
import BrandGrid from '@/components/case-studies/BrandGrid'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
  description:
    'Real results from 600+ Shopify projects. See how we have helped merchants improve conversion rates, cut cart abandonment, speed up stores and migrate without losing SEO traffic.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/case-studies' },
  openGraph: {
    title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
    description: 'Real results from 600+ Shopify projects. See how we have helped merchants improve conversion rates, cut cart abandonment, speed up stores and migrate without losing SEO traffic.',
    url: 'https://www.miraclewebsoft.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
    description: 'Real results from 600+ Shopify projects. See how we have helped merchants improve conversion rates, cut cart abandonment, speed up stores and migrate without losing SEO traffic.',
  },
}

const csFaqs = [
  { question: 'How many Shopify projects has Miracle Websoft completed?', answer: 'Over 600 Shopify projects since 2015 — across custom builds, migrations, app development, and CRO. Our clients range from DTC startups to established brands with thousands of SKUs and years of order history.' },
  { question: 'Can I see specific client results?', answer: 'We share anonymised results on this page — average +48% conversion rate, -35% cart abandonment, and 1.1s mobile load times. We keep individual client names confidential unless the client has given explicit permission to be named. All results shown are real, verified metrics from completed projects.' },
  { question: 'What fashion verticals have you worked in?', answer: 'We have worked across women\'s clothing, activewear, streetwear, sustainable fashion, luxury fashion, swimwear, menswear, jewelry, accessories, fragrance, beauty, footwear, and home goods.' },
  { question: 'Do you show before/after comparisons?', answer: 'We can share before/after speed scores, conversion rate data, and design comparisons during our discovery call for projects similar to yours. This helps set realistic expectations for your specific situation.' },
  { question: 'How long does it take to see results after a CRO project?', answer: 'Speed improvements are immediate — the day we launch. Conversion rate improvements typically become statistically significant within 4–8 weeks, depending on your traffic volume.' },
]

const featuredCaseStudies = [
  {
    tag: 'Activewear',
    result: '+48%',
    resultLabel: 'Conversion Rate',
    title: 'Activewear brand grows conversions after TikTok Shop integration',
    bullets: [
      'Built TikTok Shop product sync with automated inventory updates',
      'Product drop system with waitlists and countdown timers',
      'Rebuilt mobile product pages with sticky ATC and zoom',
    ],
    duration: '6-week project',
    color: '#6C63FF',
  },
  {
    tag: "Women's Fashion",
    result: '-35%',
    resultLabel: 'Cart Abandonment',
    title: "Women's boutique cuts abandonment with a rebuilt checkout flow",
    bullets: [
      'Rebuilt checkout flow with progress indicators and trust badges',
      'Size guide with fit recommendations built into the product page',
      'Integrated Klaviyo abandoned cart sequences with dynamic content',
    ],
    duration: '4-week project',
    color: '#EC4899',
  },
  {
    tag: 'Migration',
    result: '0%',
    resultLabel: 'SEO Traffic Loss',
    title: 'Streetwear brand migrates from WooCommerce with zero ranking drops',
    bullets: [
      'Full WooCommerce → Shopify migration: 4,000 products, 15,000 customers',
      'All 8 years of order history preserved and imported',
      'URL redirect mapping and meta data migration — rankings held day one',
    ],
    duration: '3-week project',
    color: '#10B981',
  },
  {
    tag: 'Speed & CRO',
    result: '1.1s',
    resultLabel: 'Mobile Load Time',
    title: 'Luxury fashion store achieves 1.1s mobile load after full speed overhaul',
    bullets: [
      'Complete Lighthouse audit — eliminated 11 conflicting apps',
      'Image compression, lazy loading, and critical CSS inlining',
      'Custom theme rebuild replacing 40KB of third-party JavaScript',
    ],
    duration: '5-week project',
    color: '#F59E0B',
  },
]

const portfolioClients = [
  // Jewelry & Accessories
  { name: 'Klarity London',      category: 'Jewelry',          desc: 'Bespoke fine jewelry crafted in London',                               href: 'https://klarity.london' },
  { name: 'Marco Dal Maso',      category: 'Jewelry',          desc: 'Handcrafted luxury jewelry from Italy',                                href: 'https://marcodalmasojewelry.com' },
  { name: 'Jeweladi',            category: 'Jewelry',          desc: 'Timeless gold-filled jewelry for everyday wear',                       href: null },
  { name: 'Alpha Rings',         category: 'Jewelry',          desc: "Premium men's wedding bands crafted for strength and style",           href: null },
  { name: 'OTAA',                category: 'Accessories',      desc: "Australia's premier destination for men's accessories — 16,500+ reviews", href: 'https://otaa.com' },
  { name: 'Dark Hampton',        category: 'Accessories',      desc: 'Luxury scarves designed in New Zealand',                              href: null },
  { name: 'Kimeze',              category: 'Eyewear',          desc: 'Luxury eyewear crafted for Black features',                           href: 'https://kimeze.com' },
  // Fashion & Apparel
  { name: 'Corridor NYC',        category: 'Menswear',         desc: 'Contemporary American menswear rooted in craft',                      href: 'https://corridornyc.com' },
  { name: 'Cali Clothing',       category: 'Menswear',         desc: 'Premium British menswear tailored for the modern physique',           href: null },
  { name: 'Nicholas K',          category: 'Fashion',          desc: 'Urban minimalism meets conscious design',                             href: 'https://nicholask.com' },
  { name: 'Shirtonomy',          category: 'Menswear',         desc: 'Made-to-measure shirts with Scandinavian precision',                  href: null },
  { name: 'SF Citywear',         category: 'Streetwear',       desc: 'Iconic San Francisco apparel for every style',                        href: null },
  { name: 'Globalhooper',        category: 'Streetwear',       desc: 'Basketball streetwear for the underdog spirit',                       href: null },
  { name: 'Momifa',              category: 'Sustainable',      desc: 'Premium polo shirts and everyday essentials — USA',                   href: null },
  { name: 'Farmers Atelier',     category: 'Sustainable',      desc: 'Earthy minimalist knitwear serving 20+ EU markets',                   href: 'https://farmersatelier.com' },
  { name: 'Angel De Palma',      category: 'Swimwear',         desc: 'Handcrafted resort swimwear — Mexican Caribbean',                     href: null },
  { name: 'Buddha Trends',       category: "Women's Fashion",  desc: 'Bohemian plus-size clothing for women — USA',                         href: 'https://buddhatrends.com' },
  // Fragrance & Beauty
  { name: 'Afnan Perfumes UK',   category: 'Fragrance',        desc: 'Luxury fragrance brand — UK market expansion',                        href: 'https://afnanperfumes.co.uk' },
  { name: 'Rue Broca',           category: 'Fragrance',        desc: 'Luxury fragrance ecommerce — USA',                                    href: null },
  { name: 'Amuerte Gin',         category: 'Spirits',          desc: 'Belgian craftsmanship meets Peruvian botanicals',                     href: 'https://amuertegin.com' },
  { name: 'Lash Shark',          category: 'Beauty',           desc: 'Premium lash tools for professionals',                                href: null },
  { name: 'Francis Global',      category: 'Skincare',         desc: 'Cutting-edge skincare and beauty tech',                               href: null },
  { name: 'Camellia Alise',      category: 'Beauty',           desc: 'Holistic day spa and beauty academy — Houston',                       href: null },
  // Home & Living
  { name: 'Nathan James',        category: 'Furniture',        desc: 'Affordable, stylish furniture for modern living',                     href: 'https://nathanjamesfurniture.com' },
  { name: 'Lenasi',              category: 'Furniture',        desc: 'Premium commercial-grade outdoor seating',                            href: null },
  { name: 'Azado AG',            category: 'Outdoor',          desc: 'Swiss premium grills and custom outdoor kitchens',                    href: null },
  { name: 'Oak Nashville',       category: 'Home Goods',       desc: 'Curated home goods and signature candles',                            href: null },
  { name: 'Galerie North',       category: 'Design',           desc: 'Curated mid-century modern design — Stockholm',                       href: null },
  // Food & Drink
  { name: 'Youbooze',            category: 'Spirits',          desc: 'Premium wine and spirits ecommerce',                                  href: null },
  { name: 'Noodie',              category: 'Food',             desc: 'Revolutionising instant ramen with healthier alternatives',           href: null },
  { name: 'Hodgins Harvest',     category: 'Food',             desc: 'Certified organic mushroom farm — New York',                          href: null },
  { name: 'Raw Himalayas',       category: 'Food',             desc: 'Premium unbleached flours from the Himalayas',                        href: null },
  // Health & Sports
  { name: 'The Speed Hound',     category: 'Sports',           desc: 'Advanced recovery technology for everyday athletes',                  href: null },
  { name: 'VKTRY',               category: 'Sports',           desc: 'Carbon fiber performance insoles for athletes',                       href: 'https://vktry.com' },
  // Tech
  { name: 'Phone Loops',         category: 'Tech',             desc: 'Minimalist phone straps for secure one-handed use',                   href: 'https://phoneloops.com' },
  { name: 'Shoppetite',          category: 'Tech',             desc: 'One-stop shop for tech accessories',                                  href: null },
  // Aquatics & Plants
  { name: 'Aqua Essentials',     category: 'Aquatics',         desc: 'Premium aquarium plants and aquascaping supplies — UK',               href: 'https://aquaessentials.co.uk' },
  { name: 'Plants for All Seasons', category: 'Plants',        desc: "UK's premier destination for quality houseplants",                    href: null },
  // Other
  { name: 'Panic Panties',       category: 'Underwear',        desc: "Ready-to-wear undies for life's unexpected moments",                  href: null },
  { name: 'Beam Solo Indonesia', category: 'Tech',             desc: 'E-scooter rental and retail platform',                                href: null },
  { name: 'Firewize',            category: 'Safety',           desc: 'Premium fire safety equipment for homes and businesses',              href: null },
  { name: 'Saint Mcqueen',       category: 'Fashion',          desc: 'Where fashion meets florals',                                         href: null },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Case Studies — Shopify results for growing stores',
    description:
      'Real results from 600+ Shopify projects — conversion lifts, migration success, speed and CRO outcomes.',
    url: 'https://www.miraclewebsoft.com/case-studies',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]),
  itemList({
    name: 'Featured case studies',
    items: featuredCaseStudies.map((cs) => ({
      name: cs.title,
      url: '/case-studies',
      description: `${cs.result} ${cs.resultLabel} — ${cs.tag}`,
    })),
  }),
])

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.10) 0%, transparent 70%)' }} />
          <div className="mw-container relative z-10">
            <div className="mb-6"><Breadcrumb items={[{ label: 'Case Studies' }]} /></div>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: 'rgba(108,99,255,0.10)', border: '1px solid rgba(108,99,255,0.22)' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                600+ Projects · 98%+ Job Success · Top Rated Plus on Upwork
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.25rem', maxWidth: '680px' }}>
              Real Shopify results<br />
              <span style={{ color: 'var(--accent)' }}>from stores built to grow</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem,2vw,1.1rem)', maxWidth: '540px', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Every number on this page is from a real completed project — not estimates or industry averages. Browse verified results from 600+ Shopify builds, migrations, and optimisations.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '+48%',  label: 'Avg. conversion rate lift' },
                { value: '-35%',  label: 'Cart abandonment reduction' },
                { value: '1.1s',  label: 'Mobile load time achieved' },
                { value: '0%',    label: 'SEO traffic lost on migrations' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Case Studies ──────────────────────── */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="mw-container">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.6rem' }}>Featured Results</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '2.5rem' }}>What we actually did — and what changed</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredCaseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {/* Tag */}
                  <span
                    className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: cs.color + '18', color: cs.color, border: `1px solid ${cs.color}30` }}
                  >
                    {cs.tag}
                  </span>

                  {/* Big result */}
                  <div className="flex items-baseline gap-3 mb-1">
                    <span style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800, color: cs.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{cs.result}</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{cs.resultLabel}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', lineHeight: 1.5, marginBottom: '1.25rem', fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                    {cs.title}
                  </h3>

                  {/* What we did */}
                  <div style={{ marginBottom: '1.25rem', flex: 1 }}>
                    <p style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.6rem' }}>What we did</p>
                    <ul className="flex flex-col gap-2">
                      {cs.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span style={{ color: cs.color, fontWeight: 700, marginTop: '0.1rem', flexShrink: 0, fontSize: '0.78rem' }}>→</span>
                          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.55 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)' }}>{cs.duration}</span>
                    <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 700, letterSpacing: '0.06em' }}>✓ REAL PROJECT</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ─────────────────────────────────── */}
        <section style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
          <div className="mw-container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-5" style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)' }}>
              <div>
                <p style={{ fontWeight: 600, color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Want results like these for your store?</p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>Request a free store review and we will tell you what is holding back speed, conversion or growth.</p>
              </div>
              <Link href="/contact" className="mw-btn-primary whitespace-nowrap text-sm">
                Get Free Store Review <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Client Brand Grid ─────────────────────────────── */}
        <section style={{ paddingTop: '2rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mw-container">
            <div className="mb-8">
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Our Clients</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '0.5rem' }}>
                {portfolioClients.length}+ Brands We&apos;ve Built on Shopify
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', lineHeight: 1.7 }}>
                From DTC fashion startups to established global brands across jewelry, beauty, sports, food, and more.
              </p>
            </div>
            <BrandGrid brands={portfolioClients} />
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────── */}
        <section style={{ paddingBottom: '5rem' }}>
          <div className="mw-container">
            <div className="rounded-3xl px-8 py-12 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.75rem' }}>Ready to start?</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1rem' }}>
                Your brand could be next.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '0.95rem' }}>
                Join 600+ stores and ecommerce teams who trusted Miracle Websoft. Request a free review and get a practical plan for your store.
              </p>
              <Link href="/contact" className="mw-btn-primary inline-flex text-sm px-8 py-4">
                Get My Shopify Plan <ArrowRight size={15} />
              </Link>
              <p style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
                No commitment · 30-min call · Response within 4–8 hrs · 98%+ Job Success on Upwork
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Verified work strip */}
      <RecentWork />

      <FaqSection faqs={csFaqs} heading="About our work & results" />
    </>
  )
}
