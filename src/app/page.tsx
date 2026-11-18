import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import AuditForm from '@/components/landing/AuditForm'
import { jobs, jobTitle } from '@/data/jobs'
import { blogPosts } from '@/data/blogPosts'
import { blogDateToIso } from '@/lib/blog-date'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'

const homeFaqs = [
  { question: 'What does a project usually cost?', answer: 'A Basic Store build is $600 and an Advanced Store is $1,000. Custom development starts at $1,500, and ongoing care plans run from $99 to $500 a month. CRO and speed work is quoted as a fixed price after the free teardown, so you know the number before anything starts.' },
  { question: 'What exactly is the free teardown?', answer: 'You send your store URL. Within 48 hours you get a 5-minute screen-recorded video of us going through your store on mobile and desktop, plus a short list of fixes ranked by likely revenue impact. No call, no obligation. Most people use it to fix the easy items themselves.' },
  { question: 'Who will actually work on my store?', answer: 'Karam Singh Mehra leads every project and is your point of contact. The build work is done by our 16-person in-house team in India, not subcontracted, and you get regular progress updates and a staging link throughout.' },
  { question: 'Do you work with Shopify Plus?', answer: 'Yes. We build Shopify Plus themes, checkout extensions, Shopify Functions (including migrations off the retired Shopify Scripts), B2B setups and private apps.' },
  { question: 'Can you work with my agency as a white-label partner?', answer: 'Yes. We work under NDA as a white-label development team for agencies in the US, UK and Australia. See the white-label page for how that works.' },
  { question: 'What time zones do you cover?', answer: 'We are based in India and overlap with US mornings and UK/EU afternoons. Most messages get a reply the same working day.' },
]

export const metadata: Metadata = {
  title: 'Shopify Development & CRO Agency | Miracle Websoft',
  description:
    'Shopify development, conversion rate optimisation and speed work for DTC brands. 700+ Shopify projects, fixed prices, and a free 5-minute video teardown of your store.',
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: {
    title: 'Shopify Development & CRO Agency | Miracle Websoft',
    description: 'More orders from the traffic you already have. Shopify builds, CRO and speed work with fixed prices. Get a free video teardown of your store.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development & CRO Agency | Miracle Websoft',
    description: 'More orders from the traffic you already have. Get a free video teardown of your store.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Development & CRO Agency - Miracle Websoft',
    description: 'Shopify development, conversion rate optimisation and speed optimisation for ecommerce brands.',
    url: 'https://miraclewebsoft.com/',
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
])

const clients = ['Farmers Atelier', 'Shirtonomy', 'Buddha Trends', 'Momifa', 'Flowers A Million', 'Esparda']

const findings = [
  { sev: 'High', area: 'Speed', text: 'Mobile LCP is 4.6s. The hero is a 2.1 MB PNG served at desktop size.' },
  { sev: 'High', area: 'CRO', text: 'Add to cart sits below the fold on a 375px screen.' },
  { sev: 'Med', area: 'Speed', text: '7 apps inject scripts on every page. 3 of them are no longer used.' },
  { sev: 'Med', area: 'CRO', text: 'Free-shipping threshold only appears inside the cart.' },
  { sev: 'Low', area: 'UX', text: 'Collection filters reset when shoppers press back.' },
]

const leaks = [
  { n: '01', title: 'Slow mobile pages', body: 'Heavy images, render-blocking apps and theme bloat. Most of your traffic is on a phone, and every extra second shows up in bounce rate.', fix: 'Speed optimisation', href: '/services/shopify-speed-optimization' },
  { n: '02', title: 'Product pages that don’t answer the question', body: 'Shoppers can’t find sizing, delivery dates or returns, so they open a new tab and leave. We rebuild the page around the objections.', fix: 'Conversion rate optimisation', href: '/services/conversion-rate-optimization' },
  { n: '03', title: 'A theme you’ve outgrown', body: 'Ten years of patches, sections you can’t edit and a mobile layout nobody tested. Sometimes the right fix is a clean rebuild.', fix: 'Store build & redesign', href: '/services/shopify/development' },
  { n: '04', title: 'A platform holding you back', body: 'WooCommerce plugins breaking, Wix limits, Magento costs. We move products, customers, orders and SEO without losing rankings.', fix: 'Migration to Shopify', href: '/services/shopify-migration' },
]

const services = [
  { name: 'Conversion rate optimisation', line: 'Audit, product-page and cart rebuilds, A/B-tested changes.', price: 'Fixed quote after teardown', href: '/services/conversion-rate-optimization' },
  { name: 'Speed optimisation', line: 'Core Web Vitals, app clean-up, image and script work.', price: 'Fixed quote after teardown', href: '/services/shopify-speed-optimization' },
  { name: 'Store build & redesign', line: 'Custom Shopify and Shopify Plus themes built to convert.', price: 'From $600', href: '/services/shopify/development' },
  { name: 'Migration to Shopify', line: 'WooCommerce, Wix, BigCommerce, Squarespace, Magento.', price: 'Fixed quote', href: '/services/shopify-migration' },
  { name: 'Custom apps & Functions', line: 'Private apps, Shopify Functions, checkout extensions, APIs.', price: 'From $1,500', href: '/services/shopify-app-development' },
  { name: 'Care plans', line: 'Monthly development hours, monitoring and fixes.', price: 'From $99/mo', href: '/pricing' },
]

const ownSoftware = [
  'CRM & ERP systems',
  'Shopify apps & WordPress plugins',
  'Invoicing & billing platforms',
  'Inventory & order management',
  'Business automation tools',
  'Custom SaaS applications',
]

const beyondShopify = [
  { name: 'Full stack development', href: '/services/full-stack-development' },
  { name: 'API integration', href: '/services/api-integration' },
  { name: 'CRM & SuiteCRM', href: '/services/crm-development' },
  { name: 'Moodle LMS', href: '/services/moodle-development' },
  { name: 'Laravel & PHP', href: '/services/laravel-development' },
  { name: 'WordPress plugins', href: '/services/wordpress-plugin-development' },
  { name: 'Maintenance & bug fixing', href: '/services/website-maintenance' },
]

const steps = [
  { t: '48 hours', title: 'Teardown', body: 'A recorded walkthrough of your store with fixes ranked by likely impact.' },
  { t: '24 hours', title: 'Fixed quote', body: 'Scope, price and timeline in writing, agreed before any work starts.' },
  { t: 'Ongoing', title: 'Build in the open', body: 'Regular progress updates and a staging link you can click through at any point.' },
  { t: 'Launch', title: 'Launch & look after', body: 'We launch, watch the numbers with you, and stay on for care plans if you want us.' },
]

export default function HomePage() {
  const reviews = jobs
    .filter(j => j.review && j.rating === 5 && j.review.length > 45)
    .slice(0, 6)
  const latestPosts = [...blogPosts]
    .sort((a, b) => blogDateToIso(b.date).localeCompare(blogDateToIso(a.date)))
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="mw-container grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="mw-eyebrow">Shopify development &amp; CRO · Shopify Partner</p>
            <h1 style={{ maxWidth: '13ch' }}>
              More orders from the traffic you <span className="mw-mark">already have.</span>
            </h1>
            <p className="home-lede">
              We build, fix and speed up Shopify stores for DTC brands. 700+ Shopify projects since 2015, fixed prices, and a 16-person in-house team led by the person you actually talk to.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/free-store-audit" className="mw-btn-accent" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                Get a free store teardown <ArrowRight size={18} />
              </Link>
              <Link href="/book" className="mw-btn-outline" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                Book a 15-min call
              </Link>
            </div>
            <ul className="home-proof">
              <li><strong>4.9★</strong> on Clutch</li>
              <li><strong>Top Rated Plus</strong> on Upwork</li>
              <li><strong>98%</strong> job success</li>
            </ul>
          </div>

          {/* A real artefact instead of a fake dashboard: what the teardown looks like. */}
          <figure className="teardown" aria-label="Example store teardown">
            <div className="teardown-head">
              <span className="mw-num">SAMPLE TEARDOWN</span>
              <span className="mw-num">mobile · 375px</span>
            </div>
            <p className="teardown-store">your-store.com</p>
            <ol className="teardown-list">
              {findings.map((f, i) => (
                <li key={i}>
                  <span className={`sev sev--${f.sev.toLowerCase()}`}>{f.sev}</span>
                  <span>
                    <span className="teardown-area">{f.area}</span>
                    {f.text}
                  </span>
                </li>
              ))}
            </ol>
            <figcaption className="teardown-foot">
              A typical teardown has 12–20 findings, ranked by how much revenue each one is likely costing you.
            </figcaption>
          </figure>
        </div>

        <div className="mw-container">
          <div className="home-clients">
            <span className="mw-num">STORES WE&apos;VE WORKED ON</span>
            <ul>
              {clients.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Where stores leak revenue ─────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div className="lg:sticky lg:top-32 self-start">
              <p className="mw-eyebrow">The usual suspects</p>
              <h2>Most stores don&apos;t have a traffic problem.</h2>
              <p style={{ marginTop: '1.25rem', maxWidth: '38ch' }}>
                They have a leak. After 700+ Shopify projects, it&apos;s nearly always one of these four.
              </p>
            </div>
            <ol className="leaks">
              {leaks.map(l => (
                <li key={l.n}>
                  <span className="mw-num">{l.n}</span>
                  <div>
                    <h3>{l.title}</h3>
                    <p>{l.body}</p>
                    <Link href={l.href} className="leaks-link">{l.fix} <ArrowRight size={15} /></Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Offer band ─────────────────────────────────────────────────────── */}
      <section className="mw-ink mw-section" id="teardown">
        <div className="mw-container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="mw-eyebrow">Free · 48-hour turnaround</p>
            <h2>See your store the way a CRO specialist does.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '44ch', fontSize: '1.05rem' }}>
              Send us your URL. You&apos;ll get a 5-minute video of us going through your store on a phone, pointing at exactly what&apos;s slowing shoppers down.
            </p>
            <ul className="offer-list">
              <li>Speed check on your three most important pages</li>
              <li>Product page and cart reviewed against what shoppers look for</li>
              <li>Fixes ranked by likely revenue impact, with effort estimates</li>
              <li>Yours to keep. Fix them yourself or ask us for a quote</li>
            </ul>
          </div>
          <div className="offer-card">
            <AuditForm variant="ink" source="home" />
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section className="mw-section">
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">Services</p>
              <h2 style={{ maxWidth: '16ch' }}>Everything a Shopify store needs, priced up front.</h2>
            </div>
            <Link href="/pricing" className="mw-btn-outline self-start md:self-auto">See full pricing <ArrowRight size={16} /></Link>
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
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-3)' }}>
            Also: <Link href="/services/ai" className="underline underline-offset-4">AI automation</Link>, <Link href="/services/wordpress-development" className="underline underline-offset-4">WordPress</Link>, <Link href="/services/custom-web-development" className="underline underline-offset-4">custom web apps</Link>, <Link href="/services/full-stack-development" className="underline underline-offset-4">full stack development</Link> and <Link href="/white-label" className="underline underline-offset-4">white-label work for agencies</Link>.
          </p>
        </div>
      </section>

      {/* ── Own your software ───────────────────────────────────────────────── */}
      <section className="mw-ink mw-section" id="own-your-software">
        <div className="mw-container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="mw-eyebrow">Beyond Shopify · Custom software</p>
            <h2>Still paying per-user licence fees for your business software?</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '46ch', fontSize: '1.05rem' }}>
              In the AI era, custom applications are faster and more affordable to build than ever. Why keep renting expensive monthly subscriptions when you can own software built for your business?
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '1.75rem' }}>
              <Link href="/services/custom-software-development" className="mw-btn-accent">Stop renting, start owning <ArrowRight size={16} /></Link>
              <Link href="/book" className="mw-btn-outline" style={{ color: 'var(--on-ink)', borderColor: 'rgb(244 241 234 / 0.35)' }}>Free technical consultation</Link>
            </div>
          </div>
          <div>
            <p className="mw-num" style={{ marginBottom: '0.75rem', color: 'rgb(244 241 234 / 0.6)' }}>WE BUILD CUSTOM ALTERNATIVES TO</p>
            <ul className="offer-list" style={{ marginTop: 0 }}>
              {ownSoftware.map(x => <li key={x}>{x}</li>)}
            </ul>
            <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: 'rgb(244 241 234 / 0.7)', maxWidth: '50ch' }}>
              One-time development investment. No recurring per-user licence fees for your own software. Hosting, maintenance and third-party services may still have costs.
            </p>
            <p className="mw-num" style={{ margin: '1.75rem 0 0.75rem', color: 'rgb(244 241 234 / 0.6)' }}>FULL STACK SERVICES</p>
            <div className="flex flex-wrap gap-2">
              {beyondShopify.map(b => (
                <Link key={b.href} href={b.href} className="home-chip-ink">{b.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">Verified Upwork reviews</p>
              <h2 style={{ maxWidth: '18ch' }}>What store owners say after the invoice is paid.</h2>
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

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">How it works</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3.5rem' }}>No discovery phase you pay for. No surprise invoices.</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps-time">{s.t}</span>
                <h3><span className="mw-num" style={{ marginRight: '0.6rem' }}>{i + 1}</span>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Founder note ───────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="founder-card">
            <p className="mw-num" style={{ marginBottom: '1rem' }}>A NOTE FROM THE FOUNDER</p>
            <p className="founder-quote">
              “I started taking Shopify projects in 2015. More than ten years and 700+ stores later, the work that pays off fastest is still the unglamorous stuff: a faster product page, a clearer cart, one less app. That&apos;s where we start.”
            </p>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-1)', fontWeight: 600 }}>Karam Singh Mehra</p>
            <p style={{ fontSize: '0.9rem' }}>Founder, Miracle Websoft</p>
          </div>
          <dl className="stats">
            <div><dt>Shopify projects</dt><dd>700+</dd></div>
            <div><dt>Hours logged on Upwork</dt><dd>15,000+</dd></div>
            <div><dt>Earned on Upwork</dt><dd>$600K+</dd></div>
            <div><dt>Upwork job success</dt><dd>98%</dd></div>
          </dl>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FaqSection faqs={homeFaqs} heading="Questions people ask before they get in touch" />

      {/* ── Latest writing ─────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="mw-eyebrow">From the blog</p>
              <h2>Notes from the work.</h2>
            </div>
            <Link href="/blog" className="hdr-link hidden sm:inline-flex items-center gap-1">All articles <ArrowRight size={15} /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
                <span className="mw-num">{p.tag.toUpperCase()} · {p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
