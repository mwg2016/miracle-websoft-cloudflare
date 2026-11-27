import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import AuditForm from '@/components/landing/AuditForm'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import { jobs, jobTitle, isShopifyJob } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'
import { COMPANY } from '@/data/company-facts'

// Homepage is Shopify-only by design. Structure: one clear promise → proof
// right under it → why us → services (one line each) → real stores → reviews
// → agencies → free teardown → FAQ. Keep every block short.

const TITLE = 'Shopify Development Agency | Miracle Websoft'
const DESCRIPTION =
  'Shopify development for growing brands: store builds, migrations, speed, conversion, Shopify Plus and dedicated developers. 700+ projects since 2016. Fixed prices.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://miraclewebsoft.com', type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const badges = [
  { label: 'Shopify Partner', note: `since ${COMPANY.shopifyPartner.since}`, href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { label: 'Top Rated Plus', note: 'Upwork', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/') },
  { label: COMPANY.upwork.earnings, note: 'earned on Upwork', href: outboundHref('upwork', COMPANY.founder.upworkUrl) },
  { label: COMPANY.projects, note: 'projects', href: '/work' },
]

const clients = ['Farmers Atelier', 'Shirtonomy', 'Buddha Trends', 'Momifa', 'Flowers A Million', 'Esparda']

// Service name = what it is. Line = what you get. Price = what it costs.
const services = [
  { name: 'Shopify Store Development', line: 'Launch-ready in 7 days. Mobile first, payments and shipping tested.', price: 'From $600', href: '/services/shopify-store-launch' },
  { name: 'Shopify Migration', line: 'From WooCommerce, Wix or Magento. Data checked, old URLs redirected, SEO protected.', price: 'From ~$1,500', href: '/services/shopify-migration' },
  { name: 'Speed Optimization', line: 'Faster mobile pages, measured before and after. No improvement, no fee.', price: 'Fixed price', href: '/services/shopify-speed-optimization' },
  { name: 'Conversion Optimization', line: 'Find where shoppers drop off. Fix the biggest leaks first.', price: 'Free teardown', href: '/services/conversion-rate-optimization' },
  { name: 'Dedicated Shopify Developer', line: 'Same developer every month, working through your list.', price: 'From $299/mo', href: '/services/dedicated-shopify-developer' },
  { name: 'Shopify Plus Checkout', line: 'Upsells, delivery dates and custom fields, built natively.', price: 'Per feature', href: '/services/shopify-checkout-customization' },
  { name: 'International Selling', line: 'Markets, currencies and native translations.', price: 'Per market', href: '/services/shopify-international-expansion' },
  { name: 'Custom Shopify Apps', line: 'Custom apps and integrations that replace paid subscriptions.', price: 'From $1,500', href: '/services/shopify-app-development' },
  { name: 'Store Care Plans', line: 'Updates, health checks and small fixes every month.', price: 'From $99/mo', href: '/services/shopify/shopify-maintenance' },
]

const homeFaqs = [
  { question: 'Do you only work on Shopify?', answer: 'Yes. Shopify and Shopify Plus are what we do: store builds, migrations, speed, conversion, checkout, apps and ongoing development. 700+ projects since 2016.' },
  { question: 'How much does a Shopify project cost?', answer: 'Store builds are $600 (Basic) or $1,000 (Advanced). Custom apps start at $1,500. Care plans and dedicated developer hours run $99 to $500 a month. Everything else gets a fixed quote within 24 hours. You see the price before any work starts.' },
  { question: 'How fast can you start?', answer: 'Usually within 3 to 5 working days of approving the quote. Care and dedicated developer plans onboard within 48 hours.' },
  { question: 'Who works on my store?', answer: `Our ${COMPANY.teamSize}-person in-house team in India, led by founder Karam Singh Mehra. No subcontracting. On monthly plans you keep the same developer.` },
  { question: 'Do you work with agencies?', answer: 'Yes. We work as a white-label Shopify team for agencies in the US, UK and Australia, under NDA, with no contact with your clients.' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Development Agency - Miracle Websoft',
    description: 'Miracle Websoft is a Shopify development agency: store builds, migrations, speed, conversion, Shopify Plus, custom apps and dedicated Shopify developers. 700+ projects since 2016.',
    url: 'https://miraclewebsoft.com/',
  }),
  itemList({
    name: 'Shopify services by Miracle Websoft',
    description: 'Shopify development services with fixed prices.',
    items: services.map(s => ({ name: s.name, url: s.href })),
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
])

export default function HomePage() {
  const featured = jobs.find(j => j.id === 'web-development-long-retainer-2025')
  const reviews = [
    ...(featured ? [featured] : []),
    ...jobs.filter(j => j !== featured && isShopifyJob(j) && j.review && j.rating === 5 && j.review.length > 45),
  ].slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="mw-container">
          <div style={{ maxWidth: '52rem' }}>
            <p className="mw-eyebrow">Since {COMPANY.foundedYear} · Shopify Partner</p>
            <h1 style={{ maxWidth: '18ch' }}>
              Shopify development agency: builds, support and improvements <span className="mw-mark">in one team.</span>
            </h1>
            <p className="home-lede" style={{ maxWidth: '50ch' }}>
              We help ecommerce brands and agencies launch, migrate, speed up and scale Shopify stores. Fixed prices, an in-house team, and results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/book" className="mw-btn-accent" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                Book a free call <ArrowRight size={18} />
              </Link>
              <a href="#work" className="mw-btn-outline" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                See our Shopify work
              </a>
            </div>
            <ul className="home-proof">
              {badges.map(b => (
                <li key={b.label}>
                  <a href={b.href} target="_blank" rel="noopener noreferrer"><strong>{b.label}</strong> {b.note}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-clients">
            <span className="mw-num">SHOPIFY BRANDS WE WORK WITH</span>
            <ul>{clients.map(c => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ── Why us ─────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mw-eyebrow">Why Miracle Websoft</p>
            <h2 style={{ maxWidth: '18ch' }}>A Shopify team, not a generalist agency.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '46ch' }}>
              Shopify is all we do. You get a fixed price before work starts, a staging link while we build, and before-and-after numbers when we finish.
            </p>
          </div>
          <dl className="stats">
            <div><dt>Projects</dt><dd>700+</dd></div>
            <div><dt>Years on Shopify</dt><dd>10+</dd></div>
            <div><dt>In-house team</dt><dd>16</dd></div>
            <div><dt>Hours on one retainer</dt><dd>2,942</dd></div>
          </dl>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section className="mw-section" id="services" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">Shopify services</p>
              <h2 style={{ maxWidth: '18ch' }}>Everything your store needs. Priced up front.</h2>
            </div>
            <Link href="/pricing" className="mw-btn-outline self-start md:self-auto">See pricing <ArrowRight size={16} /></Link>
          </div>
          <ul className="svc-table">
            {services.map((s, i) => (
              <li key={s.href}>
                <Link href={s.href}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-name">{s.name}</span>
                  <span className="svc-line">{s.line}</span>
                  <span className="svc-price">{s.price}</span>
                  <ArrowUpRight size={18} className="svc-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Selected work ──────────────────────────────────────────────────── */}
      <div id="work" style={{ scrollMarginTop: 96 }}>
        <ClientPortfolio eyebrow="Selected work" heading="Shopify brands we've worked with." />
      </div>

      {/* ── Client stories ─────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="mw-eyebrow">Client stories</p>
              <h2 style={{ maxWidth: '18ch' }}>Brands that stayed with us.</h2>
            </div>
            <Link href="/reviews" className="mw-btn-outline self-start md:self-auto">All reviews <ArrowRight size={16} /></Link>
          </div>
          <div className="reviews">
            {reviews.map(r => (
              <figure key={r.id} className="review">
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{r.review}”</blockquote>
                <figcaption>
                  <Link href={`/work/${r.id}`} className="review-project">{jobTitle(r)}</Link>
                  <span className="mw-num">{r.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── For agencies ───────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="mw-eyebrow">For agencies</p>
            <h2 style={{ maxWidth: '18ch' }}>Your white-label Shopify team.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '50ch' }}>
              You keep the client. We build under your name, under NDA, and never contact your clients.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Link href="/white-label" className="mw-btn-outline">White-label partnership <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── Free teardown ──────────────────────────────────────────────────── */}
      <section className="mw-ink mw-section" id="teardown">
        <div className="mw-container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="mw-eyebrow">Free · 48-hour turnaround</p>
            <h2>Not sure where to start?</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '44ch', fontSize: '1.05rem' }}>
              Send your store URL. You get a 5-minute video of your store with the top fixes, ranked by impact. No call, no obligation.
            </p>
          </div>
          <div className="offer-card">
            <AuditForm variant="ink" source="home" />
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} heading="Common questions" />
    </>
  )
}
