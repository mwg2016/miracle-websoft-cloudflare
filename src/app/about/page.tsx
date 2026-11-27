import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FounderIntro from '@/components/ui/FounderIntro'
import { jobs, jobTitle } from '@/data/jobs'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'
import { COMPANY } from '@/data/company-facts'

export const metadata: Metadata = {
  title: 'About Miracle Websoft — Shopify Development Agency Since 2016',
  description: 'Miracle Websoft is a Shopify development agency in Rajpura, Punjab, founded in 2016 by Karam Singh Mehra. 700+ projects, Top Rated Plus on Upwork, Shopify Partner since 2019.',
  alternates: { canonical: 'https://miraclewebsoft.com/about' },
  openGraph: {
    title: 'About Miracle Websoft — Shopify Development Agency Since 2016',
    description: 'Miracle Websoft is a Shopify development agency in Rajpura, Punjab, founded in 2016 by Karam Singh Mehra. 700+ projects, Top Rated Plus on Upwork, Shopify Partner since 2019.',
    url: 'https://miraclewebsoft.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Miracle Websoft — Shopify Development Agency Since 2016',
    description: 'Miracle Websoft is a Shopify development agency in Rajpura, Punjab, founded in 2016 by Karam Singh Mehra. 700+ projects, Top Rated Plus on Upwork, Shopify Partner since 2019.',
  },
}

const values = [
  { t: 'Ecommerce first', d: 'Shopify builds, CRO and speed work are most of what we do, every week, for brands in the US, UK, Canada, Australia and Europe.' },
  { t: 'Outcomes over output', d: 'Technical decisions are tied to revenue and customer experience, not to how many features we can bill.' },
  { t: 'Performance matters', d: 'Faster mobile pages, cleaner themes and fewer unnecessary scripts. Every build is checked on a real phone.' },
  { t: 'You talk to the people doing the work', d: 'No account-manager layer. Karam scopes every project and the developers are in the same thread.' },
  { t: 'Careful launches', d: 'Data, tracking, URLs, apps and integrations are protected through every migration and release.' },
]

const facts = [
  { dt: 'Founded', dd: String(COMPANY.foundedYear) },
  { dt: 'Projects', dd: COMPANY.projects },
  { dt: 'Upwork jobs', dd: COMPANY.upwork.jobs },
  { dt: 'Earned on Upwork', dd: COMPANY.upwork.earnings },
  { dt: 'Shopify Partner since', dd: String(COMPANY.shopifyPartner.since) },
  { dt: 'Upwork status', dd: COMPANY.upwork.badge },
]

const credentials = [
  { name: 'Shopify Partner', sub: 'Official partner directory', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { name: 'Upwork Top Rated Plus', sub: 'Agency profile', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/') },
  { name: 'Clutch', sub: 'Company profile', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft') },
  { name: 'Shopify Foundations', sub: 'Certified · 2023', href: null },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'About Miracle Websoft - Shopify development agency',
    description:
      'Shopify development agency with 700+ projects, serving merchants in the US, UK, Canada, Australia and Europe since 2016.',
    url: 'https://miraclewebsoft.com/about',
    type: 'AboutPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]),
])

export default function AboutPage() {
  const reviews = jobs.filter(j => j.review && j.rating === 5 && j.review.length > 90).slice(3, 6)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'About' }]} /></div>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="mw-eyebrow">About Miracle Websoft</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '17ch' }}>
                A Shopify studio built by <span className="mw-mark">the person you talk to.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '54ch' }}>
                Miracle Websoft is a Shopify development and CRO agency founded in 2016 by Karam Singh Mehra. An in-house team in India builds, fixes and speeds up stores for brands across the USA, Canada, UK, Australia and Europe.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--text-3)', maxWidth: '54ch' }}>
                We also take on custom web development and AI automation when a client needs it, but ecommerce is the core: slow stores, low mobile conversion, migrations, and the custom features apps can&apos;t do.
              </p>
            </div>
            <dl className="stats">
              {facts.map(f => <div key={f.dt}><dt>{f.dt}</dt><dd>{f.dd}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <p className="mw-eyebrow">How we work</p>
            <h2 style={{ maxWidth: '14ch' }}>What we hold ourselves to.</h2>
          </div>
          <ol className="leaks">
            {values.map((v, i) => (
              <li key={v.t}>
                <span className="mw-num">0{i + 1}</span>
                <div>
                  <h3>{v.t}</h3>
                  <p style={{ color: 'var(--text-3)' }}>{v.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">The founder</p>
          <h2 style={{ maxWidth: '20ch', marginBottom: '3rem' }}>From a ten-dollar first job to 700+ projects.</h2>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <FounderIntro />
              <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--text-1)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-1)' }}>Karam Singh Mehra</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-3)' }}>Founder &amp; lead Shopify developer · Top Rated Plus · Shopify Partner</div>
                <div className="flex gap-5" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                  <a href={outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Upwork <ArrowUpRight size={13} /></a>
                  <a href={outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>LinkedIn <ArrowUpRight size={13} /></a>
                  <Link href="/bio/owner" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Full bio</Link>
                </div>
              </div>
            </div>
            <div className="about-story" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '62ch' }}>
              <p >
                I grew up in a small village in India where &ldquo;IT&rdquo; meant data entry or a call-center job — that was the only kind of computer work anyone around me had heard of. After school I found a six-month course in website development and took it. That led to my first job at a small web company, then a second one where I could go deeper into programming.
              </p>
              <p >
                What I noticed working there was that most clients walking in were quietly pushed toward pre-built templates, because real custom work felt out of budget. That gap bothered me, and it&apos;s the gap this company was built to fill.
              </p>
              <p >
                My first attempts at running something on my own failed. The break came in an unexpected way. A friend who was sharing a room with me started bidding for freelance projects from our flat — he didn&apos;t have a laptop, so he used mine. I sat next to him in the evenings and watched how he wrote proposals, priced work, and handled clients. Eventually I made my own Upwork profile. Within a few days I landed my first job: ten dollars. He looked at me and said, <em>&ldquo;You&apos;re lucky. It&apos;s hard to get hired on a new profile that fast.&rdquo;</em> I still remember that job more clearly than the larger ones — it was the first proof that a career could be built from a laptop in a small town.
              </p>
              <p >
                I kept freelancing in the evenings while holding down my full-time job. The month my Upwork earnings crossed my salary, I quit. For a long stretch I did everything alone — sales, scoping, development, support, invoicing. Hiring only started when I couldn&apos;t keep up. The team has grown around the same idea I started with: useful Shopify work for real businesses, priced honestly, built by the people you actually speak with.
              </p>
              <p >
                Ten years in, that&apos;s still the company. Over $400,000 earned on Upwork, hundreds of stores and ecommerce projects shipped, and the same instinct that made me leave a stable job in the first place — that good technical work should help the business, not confuse the owner.
              </p>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: 'var(--text-1)' }}>— Karam</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20" style={{ marginBottom: '4.5rem' }}>
            <div>
              <p className="mw-eyebrow">Credentials</p>
              <h2 style={{ maxWidth: '14ch' }}>Checked by someone other than us.</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-3)' }}>Languages spoken: English, Hindi, Punjabi.</p>
            </div>
            <div className="about-creds">
              {credentials.map(c => c.href ? (
                <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer">
                  <span><b>{c.name}</b><span>{c.sub}</span></span>
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <div key={c.name}><span><b>{c.name}</b><span>{c.sub}</span></span></div>
              ))}
            </div>
          </div>

          <p className="mw-eyebrow">From store owners we&apos;ve worked with</p>
          <div className="reviews" style={{ marginTop: '1.5rem' }}>
            {reviews.map(r => (
              <figure key={r.id} className="review">
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>&ldquo;{r.review}&rdquo;</blockquote>
                <figcaption>
                  <Link href={`/work/${r.id}`} className="review-project">{jobTitle(r)}</Link>
                  <span className="mw-num">Upwork · {r.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex flex-wrap gap-3" style={{ marginTop: '2.5rem' }}>
            <Link href="/free-store-audit" className="mw-btn-accent">Get a free store teardown <ArrowRight size={15} /></Link>
            <Link href="/reviews" className="mw-btn-outline">Read all reviews</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
.about-story p + p { margin-top: 1.1rem; }
.about-story em { color: var(--text-1); }
.about-creds { border-top: 1px solid var(--text-1); }
.about-creds > * { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 1.1rem 0; border-bottom: 1px solid var(--border); }
.about-creds a:hover { background: var(--bg-raised); }
.about-creds b { display: block; font-family: var(--font-playfair); font-weight: 400; font-size: 1.3rem; color: var(--text-1); }
.about-creds span span { font-size: 0.9rem; color: var(--text-3); }
.about-creds svg { color: var(--text-4); }
` }} />
    </>
  )
}
