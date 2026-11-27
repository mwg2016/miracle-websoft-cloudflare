import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { jobs, jobTitle, fixTypos } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import { breadcrumb, person, webPage, itemList, renderJsonLd } from '@/lib/jsonld'
import { COMPANY } from '@/data/company-facts'

export const metadata: Metadata = {
  title: 'Portfolio — Karam Singh Mehra, Shopify Expert | Miracle Websoft',
  description:
    'Portfolio of Karam Singh Mehra, founder of Miracle Websoft — 700+ projects, 40+ brands across fashion, beauty, home and food, Top Rated Plus on Upwork.',
  alternates: { canonical: 'https://miraclewebsoft.com/my-portfolio' },
  openGraph: {
    title: 'Portfolio — Karam Singh Mehra, Shopify Expert | Miracle Websoft',
    description: '700+ projects. 40+ brands. Top Rated Plus on Upwork, verified Shopify Partner.',
    url: 'https://miraclewebsoft.com/my-portfolio',
    type: 'profile',
  },
}

const UPWORK_PROFILE = outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de')
const SHOPIFY_PARTNER = outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1')
const CLUTCH_PROFILE = outboundHref('external', 'https://clutch.co/profile/miracle-websoft')

const STATS = [
  { value: COMPANY.projects, label: 'Projects' },
  { value: COMPANY.upwork.earnings, label: 'Earned on Upwork' },
  { value: String(COMPANY.foundedYear), label: 'Building since' },
  { value: COMPANY.upwork.founderJobSuccess, label: 'Upwork job success' },
]

const SKILLS = [
  'Shopify Development', 'Shopify App Dev', 'Theme Customisation',
  'Shopify Migration', 'CRO & Speed', 'Fashion eCommerce',
  'Liquid / React', 'TikTok Shop',
]

const CREDENTIALS = [
  { label: 'Upwork', sub: 'Top Rated Plus · 99% job success', href: UPWORK_PROFILE },
  { label: 'Shopify Partner', sub: 'Official partner directory', href: SHOPIFY_PARTNER },
  { label: 'Clutch', sub: 'Company profile', href: CLUTCH_PROFILE },
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
    description: 'Founder of Miracle Websoft — 700+ verified projects across 40+ brands. Top Rated Plus on Upwork, verified Shopify Partner.',
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
    description: 'Portfolio of 700+ projects and 40+ brands built by Karam Singh Mehra, founder of Miracle Websoft.',
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

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Portfolio' }]} /></div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">Portfolio · Karam Singh Mehra</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '16ch' }}>
                Ten years of Shopify work for <span className="mw-mark">fashion, beauty and home brands.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '52ch' }}>
                I&apos;m the founder and lead Shopify developer at Miracle Websoft. From ground-up custom themes to Shopify Plus checkout extensions, here&apos;s a cross-section of what my team and I have shipped.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
                <Link href="/book" className="mw-btn-accent">Book a 15-min call <ArrowRight size={15} /></Link>
                <Link href="/work" className="mw-btn-outline">Full work history</Link>
              </div>
            </div>
            <dl className="stats">
              {STATS.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
            </dl>
          </div>
          <p className="mw-num" style={{ marginTop: '2.5rem', lineHeight: 1.9 }}>CORE SKILLS:&nbsp; {SKILLS.join('  ·  ')}</p>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex items-end justify-between flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
            <div>
              <p className="mw-eyebrow">Selected work</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>Recent projects, with the client&apos;s words.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-1.5" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-1)' }}>All 700+ projects <ArrowRight size={14} /></Link>
          </div>
          <ol className="pf-list">
            {featuredJobs.map((job, i) => (
              <li key={job.id}>
                <Link href={`/work/${job.id}`}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{jobTitle(job)}</h3>
                    <p className="pf-desc">{fixTypos(job.description).slice(0, 170)}{job.description.length > 170 ? '…' : ''}</p>
                    {job.review && <p className="pf-quote">&ldquo;{job.review}&rdquo;</p>}
                  </div>
                  <span className="mw-num pf-meta">{job.category}<br />{job.completedDate}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Brands</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', maxWidth: '22ch', marginBottom: '2rem' }}>{brands.length} brands I&apos;ve delivered Shopify work for.</h2>
          <ul className="pf-brands">
            {brands.map(b => (
              <li key={b.name}>
                {b.href ? (
                  <a href={b.href} target="_blank" rel="noopener noreferrer"><b>{b.name}</b><span className="mw-num">{b.category}</span><ArrowUpRight size={13} /></a>
                ) : (
                  <div><b>{b.name}</b><span className="mw-num">{b.category}</span><span /></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <p className="mw-eyebrow">Verified elsewhere</p>
            <h2 style={{ maxWidth: '14ch' }}>Don&apos;t take my word for it.</h2>
          </div>
          <div>
            <div className="pf-creds">
              {CREDENTIALS.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                  <span><b>{c.label}</b><span>{c.sub}</span></span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <Link href="/free-store-audit" className="mw-btn-accent">Get a free store teardown <ArrowRight size={15} /></Link>
              <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
.pf-list { border-top: 1px solid var(--text-1); }
.pf-list li { border-bottom: 1px solid var(--border); }
.pf-list a { display: grid; grid-template-columns: 2.5rem 1fr 9rem; gap: 1.25rem; padding: 1.6rem 0.25rem; align-items: start; }
.pf-list a:hover { background: var(--bg-raised); }
.pf-list h3 { font-size: clamp(1.2rem, 2vw, 1.5rem); margin-bottom: 0.4rem; }
.pf-desc { color: var(--text-3); font-size: 0.95rem; max-width: 70ch; }
.pf-quote { margin-top: 0.75rem; font-family: var(--font-playfair); font-size: 1.08rem; color: var(--text-1); max-width: 62ch; }
.pf-meta { text-align: right; line-height: 1.7; }
@media (max-width: 760px) { .pf-list a { grid-template-columns: 2rem 1fr; } .pf-meta { grid-column: 2; text-align: left; } }
.pf-brands { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 2.5rem; border-top: 1px solid var(--text-1); }
.pf-brands li > * { display: grid; grid-template-columns: 1fr auto 1rem; gap: 0.75rem; align-items: baseline; padding: 0.8rem 0; border-bottom: 1px solid var(--border); }
.pf-brands b { font-weight: 600; color: var(--text-1); }
.pf-brands svg { color: var(--text-4); }
.pf-brands a:hover b { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 900px) { .pf-brands { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .pf-brands { grid-template-columns: 1fr; } }
.pf-creds { border-top: 1px solid var(--text-1); }
.pf-creds a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 1.1rem 0; border-bottom: 1px solid var(--border); }
.pf-creds a:hover { background: var(--bg-raised); }
.pf-creds b { display: block; font-family: var(--font-playfair); font-weight: 400; font-size: 1.3rem; color: var(--text-1); }
.pf-creds span span { font-size: 0.9rem; color: var(--text-3); }
.pf-creds svg { color: var(--text-4); }
` }} />
    </>
  )
}
