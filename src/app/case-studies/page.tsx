import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { jobs, jobTitle } from '@/data/jobs'
import FaqSection from '@/components/ui/FaqSection'
import BrandGrid from '@/components/case-studies/BrandGrid'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
  description:
    'Selected Shopify projects from 700+ since 2016: store builds, redesigns, migrations and custom features, with what we did and what clients said.',
  alternates: { canonical: 'https://miraclewebsoft.com/case-studies' },
  openGraph: {
    title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
    description: 'Selected Shopify projects from 700+ since 2016: store builds, redesigns, migrations and custom features, with what we did and what clients said.',
    url: 'https://miraclewebsoft.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies — Shopify Results for Growing Stores | Miracle Websoft',
    description: 'Selected Shopify projects from 700+ since 2016: store builds, redesigns, migrations and custom features, with what we did and what clients said.',
  },
}

const csFaqs = [
  { question: 'How many Shopify projects has Miracle Websoft completed?', answer: 'More than 700 projects since 2016, across custom builds, redesigns, migrations, app and feature development, and CRO. Clients range from new DTC brands to established stores with thousands of SKUs and years of order history.' },
  { question: 'Can I see specific client results?', answer: 'Each project on this page links to its own write-up with the brief, what we built and the client’s Upwork review where one was left. Many clients ask us not to publish their revenue or conversion numbers, so we don’t; on a call we can walk you through comparable projects in more detail.' },
  { question: 'Which kinds of brands have you worked with?', answer: 'Fashion and apparel (women’s, menswear, streetwear, swimwear, sustainable), jewelry and accessories, fragrance and beauty, home and furniture, food and drink, sports, tech accessories and more. The brand list on this page is a sample.' },
  { question: 'Do you show before/after comparisons?', answer: 'For projects similar to yours we can share before/after speed scores and design comparisons on a call, with the client’s permission. The free store teardown is the quickest way to see how we’d approach your store specifically.' },
  { question: 'How long does it take to see results after a CRO project?', answer: 'Speed improvements show up the day they ship. Conversion changes usually need 4–8 weeks of traffic before you can trust the numbers, depending on your volume.' },
]

const portfolioClients = [
  // Jewelry & Accessories
  { name: 'Klarity London',      category: 'Jewelry',          desc: 'Bespoke fine jewelry crafted in London',                               href: 'https://klarity.london' },
  { name: 'Marco Dal Maso',      category: 'Jewelry',          desc: 'Handcrafted luxury jewelry from Italy',                                href: 'https://marcodalmasojewelry.com' },
  { name: 'Jeweladi',            category: 'Jewelry',          desc: 'Timeless gold-filled jewelry for everyday wear',                       href: null },
  { name: 'Alpha Rings',         category: 'Jewelry',          desc: "Premium men's wedding bands crafted for strength and style",           href: null },
  { name: 'Australian clothing brand', category: 'Accessories', desc: "Australia's premier destination for men's accessories — 16,500+ reviews", href: 'https://otaa.com' },
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

const caseStudyJob = jobs.find(j => j.caseStudy)
const featured = [
  ...(caseStudyJob ? [caseStudyJob] : []),
  ...jobs.filter(j => j.featured && j.id !== caseStudyJob?.id),
].slice(0, 7)

const jsonLd = renderJsonLd([
  webPage({
    name: 'Case Studies — Shopify results for growing stores',
    description:
      'Selected Shopify projects from 700+ since 2016 — builds, redesigns, migrations and custom features.',
    url: 'https://miraclewebsoft.com/case-studies',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]),
  itemList({
    name: 'Featured Shopify projects',
    items: featured.map((j) => ({
      name: jobTitle(j),
      url: `/work/${j.id}`,
      description: `${j.category} — ${j.completedDate}`,
    })),
  }),
])

export default function CaseStudiesPage() {
  const [lead, ...rest] = featured
  const cs = lead?.caseStudy
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Case Studies' }]} /></div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">Case studies</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '17ch' }}>
                What we built, and what <span className="mw-mark">the client said after.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '52ch' }}>
                A selection from 700+ projects since 2016. Each one links to a write-up of the brief, the work, and the client&apos;s own Upwork review.
              </p>
            </div>
            <dl className="stats">
              <div><dt>Projects</dt><dd>700+</dd></div>
              <div><dt>Hours delivered</dt><dd>15,000+</dd></div>
              <div><dt>Brands listed below</dt><dd>{portfolioClients.length}</dd></div>
              <div><dt>Rating on Clutch</dt><dd>4.9</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {lead && cs && (
        <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
          <div className="mw-container">
            <p className="mw-eyebrow">Full case study · {lead.category}</p>
            <h2 style={{ maxWidth: '24ch', marginBottom: '3rem' }}>{jobTitle(lead)}</h2>
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '1.75rem' }}>
              {[
                { k: 'The brief', v: cs.challenge },
                { k: 'What we built', v: cs.approach },
                { k: 'Outcome', v: cs.outcome },
              ].map(x => x.v && (
                <div key={x.k}>
                  <p className="mw-num" style={{ marginBottom: '0.75rem' }}>{x.k.toUpperCase()}</p>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{x.v}</p>
                </div>
              ))}
            </div>
            <Link href={`/work/${lead.id}`} className="mw-btn-outline" style={{ marginTop: '2.5rem' }}>
              Read the full case study <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}

      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">Selected projects</p>
          <h2 style={{ maxWidth: '22ch', marginBottom: '2.5rem' }}>Recent builds, redesigns and fixes.</h2>
          <ol className="cs-list">
            {rest.map((j, i) => (
              <li key={j.id}>
                <Link href={`/work/${j.id}`}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="cs-title">{jobTitle(j)}</h3>
                    <p className="cs-desc">{j.description}</p>
                    {j.review && <p className="cs-quote">&ldquo;{j.review}&rdquo; <span className="mw-num">Upwork review</span></p>}
                  </div>
                  <span className="mw-num cs-meta">{j.category}<br />{j.completedDate}</span>
                  <ArrowRight size={18} className="cs-arrow" />
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.75rem', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-1)' }}>
            Browse the full work history <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2rem' }}>
            <div>
              <p className="mw-eyebrow">Brands</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', maxWidth: '20ch' }}>{portfolioClients.length} of the brands we&apos;ve built for.</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-3)', maxWidth: '40ch' }}>From new DTC labels to established stores across jewelry, beauty, sports, food and more.</p>
          </div>
          <BrandGrid brands={portfolioClients} />
        </div>
      </section>

      <section style={{ paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>See what we&apos;d change on your store.</h2>
              <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>A free 5-minute video teardown within 48 hours, with fixes ranked by what each is likely worth.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/free-store-audit" className="mw-btn-accent">Get a free teardown <ArrowRight size={15} /></Link>
              <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={csFaqs} heading="About our work & results" />

      <style dangerouslySetInnerHTML={{ __html: `
.cs-list { border-top: 1px solid var(--text-1); }
.cs-list li { border-bottom: 1px solid var(--border); }
.cs-list a { display: grid; grid-template-columns: 2.5rem 1fr 9rem 1.5rem; gap: 1.25rem; padding: 1.75rem 0.25rem; align-items: start; transition: background .15s ease; }
.cs-list a:hover { background: var(--bg-raised); }
.cs-title { font-size: clamp(1.25rem, 2vw, 1.6rem); margin-bottom: 0.5rem; }
.cs-desc { color: var(--text-3); font-size: 0.95rem; max-width: 70ch; }
.cs-quote { margin-top: 0.85rem; font-family: var(--font-playfair); font-size: 1.1rem; color: var(--text-1); max-width: 60ch; }
.cs-quote .mw-num { font-family: var(--font-geist-mono); margin-left: 0.4rem; }
.cs-meta { text-align: right; line-height: 1.7; }
.cs-arrow { color: var(--text-4); margin-top: 0.3rem; transition: color .15s ease, transform .15s ease; }
.cs-list a:hover .cs-arrow { color: var(--accent); transform: translateX(2px); }
@media (max-width: 760px) {
  .cs-list a { grid-template-columns: 2rem 1fr 1.25rem; }
  .cs-meta { grid-column: 2; grid-row: 2; text-align: left; }
  .cs-arrow { grid-column: 3; grid-row: 1; }
}
` }} />
    </>
  )
}
