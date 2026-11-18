import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import AuditForm from '@/components/landing/AuditForm'
import { jobs, jobTitle } from '@/data/jobs'
import { blogPosts } from '@/data/blogPosts'
import { blogDateToIso } from '@/lib/blog-date'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

const homeFaqs = [
  { question: 'Do you only work on Shopify?', answer: 'No. Shopify is our biggest specialty, with 700+ Shopify projects since 2015, but Miracle Websoft is a full stack development team. We also build custom web applications in React, Node.js, Laravel and PHP, WordPress sites and plugins, Moodle LMS platforms, SuiteCRM and custom CRMs, API integrations and AI automation.' },
  { question: 'What does a project usually cost?', answer: 'A Basic Shopify Store build is $600 and an Advanced Store is $1,000. Custom development, including Shopify apps, web applications, plugins and integrations, starts at $1,500, and ongoing care plans run from $99 to $500 a month. Every project gets a fixed written quote before work starts.' },
  { question: 'Can you replace our SaaS subscriptions with custom software?', answer: 'Often, yes. We build custom alternatives to CRM and ERP systems, invoicing and billing tools, inventory and order management, Shopify apps, WordPress plugins and internal SaaS tools. You pay once for development and own the code, with no per-user licence fees. Hosting, maintenance and any third-party services can still have costs, and we tell you what they are up front.' },
  { question: 'Do you develop for Moodle?', answer: 'Yes. We build Moodle plugins and themes, customize enrollment, roles and permissions, restore and migrate courses, and connect Moodle to other systems through the Moodle web services API, including WordPress integrations. We have done Moodle work since 2017 and every Moodle job has been rated 5.0 on Upwork.' },
  { question: 'Do you build WordPress sites and plugins?', answer: 'Yes. We build custom WordPress sites, custom plugins and WooCommerce extensions, and we fix, speed up and maintain existing WordPress sites. If a WooCommerce store has outgrown WordPress, we also migrate it to Shopify without losing SEO.' },
  { question: 'What technologies do you work with?', answer: 'React and Next.js on the frontend; Node.js, PHP, Laravel and Yii2 on the backend; MySQL and Firebase for data; REST and GraphQL APIs and webhooks for integrations; and Shopify (Liquid, apps, Functions), WordPress, Moodle and SuiteCRM as platforms.' },
  { question: 'Who will actually work on my project?', answer: 'Karam Singh Mehra leads every project and is your point of contact. The work is done by our 16-person in-house team in India, not subcontracted, and you get regular progress updates and a staging link throughout.' },
  { question: 'What exactly is the free Shopify teardown?', answer: 'You send your store URL. Within 48 hours you get a 5-minute screen-recorded video of us going through your store on mobile and desktop, plus a short list of fixes ranked by likely revenue impact. No call, no obligation. For software projects, book a free technical consultation instead.' },
  { question: 'Do you work with Shopify Plus?', answer: 'Yes. We build Shopify Plus themes, checkout extensions, Shopify Functions (including migrations off the retired Shopify Scripts), B2B setups and private apps.' },
  { question: 'Can you work with my agency as a white-label partner?', answer: 'Yes. We work under NDA as a white-label development team for agencies in the US, UK and Australia. See the white-label page for how that works.' },
  { question: 'What time zones do you cover?', answer: 'We are based in India and overlap with US mornings and UK/EU afternoons. Most messages get a reply the same working day.' },
]

const TITLE = 'Shopify & Full Stack Development Company | Miracle Websoft'
const DESCRIPTION =
  'Shopify, WordPress, Moodle, CRM and custom software development. 700+ projects since 2015, Top Rated Plus on Upwork, fixed prices. Free technical consultation.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: {
    title: TITLE,
    description: 'Shopify stores, WordPress sites, Moodle platforms, CRMs, custom web apps and API integrations, built by one in-house team since 2015.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Shopify, WordPress, Moodle, CRM and custom software development. 700+ projects since 2015.',
  },
}

// What we build: every service on the site, grouped. Also feeds the ItemList schema.
const pillars = [
  {
    id: 'shopify',
    name: 'Shopify & ecommerce',
    line: 'Custom Shopify and Shopify Plus stores, apps, migrations, and the speed and conversion work that turns traffic into orders.',
    proof: '700+ Shopify projects since 2015',
    links: [
      { name: 'Store build & redesign', href: '/services/shopify/development' },
      { name: 'Custom Shopify apps', href: '/services/shopify-app-development' },
      { name: 'Migration to Shopify', href: '/services/shopify-migration' },
      { name: 'Conversion rate optimisation', href: '/services/conversion-rate-optimization' },
      { name: 'Speed optimisation', href: '/services/shopify-speed-optimization' },
      { name: 'All Shopify services', href: '/services/shopify' },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom software & full stack',
    line: 'Web applications, dashboards, portals and internal tools in React, Node.js, Laravel and PHP. Built to your process, owned by you.',
    proof: '2,942-hour full stack retainer, rated 5.0',
    links: [
      { name: 'Custom software (replace SaaS)', href: '/services/custom-software-development' },
      { name: 'Full stack development', href: '/services/full-stack-development' },
      { name: 'Custom web development', href: '/services/custom-web-development' },
      { name: 'Laravel, Yii2 & PHP', href: '/services/laravel-development' },
    ],
  },
  {
    id: 'wordpress',
    name: 'WordPress & WooCommerce',
    line: 'Custom WordPress sites, plugins and WooCommerce extensions, plus fixes, speed work and ongoing maintenance for sites you already have.',
    proof: 'Custom plugins, themes and WooCommerce',
    links: [
      { name: 'WordPress development', href: '/services/wordpress-development' },
      { name: 'WordPress plugin development', href: '/services/wordpress-plugin-development' },
      { name: 'Website maintenance', href: '/services/website-maintenance' },
    ],
  },
  {
    id: 'moodle',
    name: 'Moodle & e-learning',
    line: 'Moodle plugins and themes, enrollment and permission changes, course restores, and Moodle connected to WordPress and your other systems.',
    proof: '5.0 on every Moodle job since 2017',
    links: [
      { name: 'Moodle development', href: '/services/moodle-development' },
      { name: 'Moodle & LMS integrations', href: '/services/api-integration' },
    ],
  },
  {
    id: 'crm-integrations',
    name: 'CRM & API integrations',
    line: 'SuiteCRM customization or a custom CRM you own, and REST, GraphQL and webhook integrations that keep your systems in sync.',
    proof: 'eSIM provider API integration, rated 5.0',
    links: [
      { name: 'CRM & SuiteCRM development', href: '/services/crm-development' },
      { name: 'API integration', href: '/services/api-integration' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & automation',
    line: 'AI chatbots, support automation, OpenAI integrations and workflow automation that take repetitive work off your team.',
    proof: 'OpenAI, chatbots and workflow automation',
    links: [
      { name: 'AI automation', href: '/services/ai' },
      { name: 'AI chatbots', href: '/services/ai/ai-chatbots' },
      { name: 'AI workflow automation', href: '/services/ai/ai-workflow-automation' },
      { name: 'OpenAI integrations', href: '/services/ai/openai-integrations' },
    ],
  },
]

const techStack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Liquid'] },
  { group: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Yii2'] },
  { group: 'Platforms', items: ['Shopify & Shopify Plus', 'WordPress', 'WooCommerce', 'Moodle', 'SuiteCRM'] },
  { group: 'Data, APIs & AI', items: ['MySQL', 'Firebase', 'REST', 'GraphQL', 'Webhooks', 'OpenAI'] },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify & Full Stack Development Company - Miracle Websoft',
    description: 'Miracle Websoft is a full stack development company in Chandigarh, India that builds Shopify stores, WordPress sites, Moodle platforms, CRMs, custom software, API integrations and AI automation.',
    url: 'https://miraclewebsoft.com/',
  }),
  itemList({
    name: 'Miracle Websoft services',
    description: 'Development services offered by Miracle Websoft.',
    items: pillars.flatMap(p => p.links)
      .filter((l, i, all) => all.findIndex(x => x.href === l.href) === i)
      .map(l => ({ name: l.name, url: l.href })),
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
])

const clients = ['Farmers Atelier', 'Shirtonomy', 'Buddha Trends', 'Momifa', 'Flowers A Million', 'Esparda']

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

const steps = [
  { t: '24–48 hours', title: 'Free consultation', body: 'A technical consultation for software projects, or a recorded teardown of your Shopify store with fixes ranked by likely impact.' },
  { t: '24 hours', title: 'Fixed quote', body: 'Scope, price and timeline in writing, agreed before any work starts.' },
  { t: 'Ongoing', title: 'Build in the open', body: 'Regular progress updates and a staging link you can click through at any point.' },
  { t: 'Launch', title: 'Launch & look after', body: 'We launch, watch how it performs with you, and stay on for maintenance and care plans if you want us.' },
]

export default function HomePage() {
  // Lead with the full stack retainer review so the mix isn't Shopify-only.
  const featured = jobs.find(j => j.id === 'web-development-long-retainer-2025')
  const reviews = [
    ...(featured ? [featured] : []),
    ...jobs.filter(j => j !== featured && j.review && j.rating === 5 && j.review.length > 45),
  ].slice(0, 6)
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
            <p className="mw-eyebrow">Shopify Partner · Full stack development since 2015</p>
            <h1 style={{ maxWidth: '15ch' }}>
              We build the software your <span className="mw-mark">business runs on.</span>
            </h1>
            <p className="home-lede">
              Shopify and Shopify Plus stores, WordPress sites, Moodle learning platforms, CRMs, custom web apps and API integrations. 700+ projects since 2015, fixed prices, and a 16-person in-house team led by the person you actually talk to.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/book" className="mw-btn-accent" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                Free technical consultation <ArrowRight size={18} />
              </Link>
              <Link href="/free-store-audit" className="mw-btn-outline" style={{ minHeight: 54, padding: '0 1.5rem', fontSize: '1rem' }}>
                Free Shopify store teardown
              </Link>
            </div>
            <ul className="home-proof">
              <li><strong>4.9★</strong> on Clutch</li>
              <li><strong>Top Rated Plus</strong> on Upwork</li>
              <li><strong>98%</strong> job success</li>
            </ul>
          </div>

          <figure className="teardown" aria-label="What Miracle Websoft builds">
            <div className="teardown-head">
              <span className="mw-num">ONE TEAM · THE WHOLE STACK</span>
              <span className="mw-num">since 2015</span>
            </div>
            <ol className="stack-list">
              {pillars.map(p => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>
                    <span className="stack-name">{p.name}</span>
                    <span className="stack-proof">{p.proof}</span>
                  </a>
                </li>
              ))}
            </ol>
            <figcaption className="teardown-foot">
              Shopify is where we started. Today the same team builds the systems around your store, and the ones that have nothing to do with ecommerce.
            </figcaption>
          </figure>
        </div>

        <div className="mw-container">
          <div className="home-clients">
            <span className="mw-num">BUSINESSES WE&apos;VE WORKED WITH</span>
            <ul>
              {clients.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What we build: every service ──────────────────────────────────── */}
      <section className="mw-section" id="services" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">What we build</p>
              <h2 style={{ maxWidth: '20ch' }}>Shopify, WordPress, Moodle, CRM and custom software. One team.</h2>
              <p style={{ marginTop: '1.25rem', maxWidth: '60ch' }}>
                Miracle Websoft is a full stack development company in Chandigarh, India. We build Shopify stores, WordPress sites, Moodle platforms, CRMs, custom web applications, API integrations and AI automation for businesses in the US, UK, Canada, Australia and Europe.
              </p>
            </div>
            <Link href="/services" className="mw-btn-outline self-start md:self-auto">All services <ArrowRight size={16} /></Link>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <article key={p.id} id={p.id} className="pillar">
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.name}</h3>
                <p>{p.line}</p>
                <p className="pillar-proof">{p.proof}</p>
                <ul>
                  {p.links.map(l => (
                    <li key={l.href + l.name}>
                      <Link href={l.href}>{l.name} <ArrowUpRight size={14} /></Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-3)' }}>
            Also: <Link href="/services/website-maintenance" className="underline underline-offset-4">maintenance &amp; bug fixing</Link> for sites we didn&apos;t build, and <Link href="/white-label" className="underline underline-offset-4">white-label development for agencies</Link>.
          </p>
        </div>
      </section>

      {/* ── Own your software ───────────────────────────────────────────────── */}
      <section className="mw-ink mw-section" id="own-your-software">
        <div className="mw-container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="mw-eyebrow">Custom software</p>
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
          </div>
        </div>
      </section>

      {/* ── Shopify: where stores leak revenue ────────────────────────────── */}
      <section className="mw-section">
        <div className="mw-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div className="lg:sticky lg:top-32 self-start">
              <p className="mw-eyebrow">For Shopify stores</p>
              <h2>More orders from the traffic you already have.</h2>
              <p style={{ marginTop: '1.25rem', maxWidth: '38ch' }}>
                Most stores don&apos;t have a traffic problem. They have a leak. After 700+ Shopify projects, it&apos;s nearly always one of these four.
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
            <p className="mw-eyebrow">Free Shopify teardown · 48-hour turnaround</p>
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

      {/* ── Shopify pricing ────────────────────────────────────────────────── */}
      <section className="mw-section">
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">Shopify services</p>
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
        </div>
      </section>

      {/* ── Technology ─────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Technology</p>
          <h2 style={{ maxWidth: '24ch', marginBottom: '2.5rem' }}>The stack we work in every day.</h2>
          <dl className="tech-groups">
            {techStack.map(g => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd>{g.items.map(t => <span key={t} className="rv-chip">{t}</span>)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="mw-eyebrow">Verified Upwork reviews</p>
              <h2 style={{ maxWidth: '18ch' }}>What clients say after the invoice is paid.</h2>
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
              “I started taking Shopify projects in 2015. Since then the work has grown into custom software, CRMs, Moodle platforms and API integrations, but the approach hasn&apos;t changed: understand how the business actually runs, then build the simplest thing that does the job well.”
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
