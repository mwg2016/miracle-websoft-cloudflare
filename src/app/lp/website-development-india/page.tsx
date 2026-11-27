import type { Metadata } from 'next'
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import StickyTabs from '@/app/lp/shopify-cro/StickyTabs'
import LeadForm, { PickPackage } from './LeadForm'
import StickyBar from './StickyBar'
import { packages, inr, waForPackage, waGeneral, PHONE } from './packages'
import { COMPANY } from '@/data/company-facts'
import { jobs, jobTitle } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import { breadcrumb, faqPage, renderJsonLd, service, SITE_URL } from '@/lib/jsonld'

const PATH = '/lp/website-development-india'
const TITLE = 'Website Development from ₹4,999 | Miracle Websoft'
const DESCRIPTION =
  'Fixed-price business websites for Indian businesses: ₹4,999, ₹9,999, ₹14,999 and ₹19,999. Mobile-friendly, WhatsApp-ready, delivered in 5–14 working days. You own everything.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  // Paid-ads landing page: noindex so it doesn't compete with the Shopify-first organic pages.
  robots: { index: false, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', locale: 'en_IN' },
}

const WA = outboundHref('whatsapp', waGeneral)

const inEveryPlan = [
  { title: 'Fixed price, written scope', desc: 'The price you see is the price you pay for that scope. Anything extra is quoted before we do it.' },
  { title: 'You own it', desc: 'Domain, website, logins and files are in your name. No lock-in.' },
  { title: 'Made for mobile', desc: 'Most of your customers open it on a phone, so we design for the phone first.' },
  { title: 'WhatsApp + call buttons', desc: 'One tap from your website to a conversation with you.' },
  { title: 'Ready for Google', desc: 'Titles, descriptions and sitemap set up so Google can find and list your pages.' },
  { title: 'A real team, since 2016', desc: `${COMPANY.teamSize} people in-house in ${COMPANY.address.display}. No outsourcing.` },
]

const forWho = [
  'Shops & showrooms', 'Clinics & doctors', 'Coaching & tuition', 'Restaurants & cafés',
  'Real estate', 'Salons & gyms', 'CA & consultants', 'Manufacturers & exporters',
  'Schools & institutes', 'Travel agents', 'Interior designers', 'D2C brands',
]

const steps = [
  { step: '01', title: 'Tell us about your business', desc: 'WhatsApp, call or the form. We suggest the right package in a 10-minute chat.' },
  { step: '02', title: 'Share your content', desc: 'Logo, photos, services and contact details. Don’t have text? We help you write it.' },
  { step: '03', title: 'Review the design', desc: 'You see the website before it goes live and ask for changes.' },
  { step: '04', title: 'Go live', desc: 'We connect your domain, test forms and buttons, and hand over all logins.' },
]

const faqs = [
  {
    question: 'Are domain and hosting included?',
    answer:
      'Every package includes free SSL. Domain and hosting for the first year can be included or set up on your own account; we confirm the exact cost in writing before you pay, so there are no surprises. Renewals after the first year are paid directly to the provider at their price.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Starter 5 working days, Business 7, Growth 10 and E-commerce 14. The clock starts once we have your logo, photos and basic details.',
  },
  {
    question: 'How do I pay?',
    answer: 'UPI or bank transfer. You pay part in advance to start and the balance before the website goes live. Exact terms are in your written quote.',
  },
  {
    question: 'Can I update the website myself?',
    answer:
      'Yes on Growth and E-commerce: you get an easy admin panel and we show you how to use it. On Starter and Business, small text changes during the support period are on us.',
  },
  {
    question: 'I don’t have content or photos. Can you help?',
    answer:
      'Yes. Tell us about your business on a call and we draft the text for you. We can use good-quality stock photos until you have your own.',
  },
  {
    question: 'Will my website rank on Google?',
    answer:
      'We set up the SEO basics properly so Google can find and list your pages. Nobody can honestly guarantee a #1 ranking; it depends on your market, your reviews and content over time. We can advise on next steps after launch.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. Start on Starter and move up when you grow; you only pay the difference for the extra work, quoted upfront.',
  },
  {
    question: 'Which platform do you use?',
    answer:
      'For online stores we use Shopify, which handles payments, orders and security for you. For business websites we pick the simplest platform that fits your needs and explain why.',
  },
]

const navTabs = [
  { id: 'packages', label: 'Packages' },
  { id: 'included', label: 'What you get' },
  { id: 'process', label: 'Process' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Website development packages for Indian businesses',
    description: DESCRIPTION,
    url: PATH,
    serviceType: 'Website development',
    areaServed: ['India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Website development from ₹4,999', url: PATH },
  ]),
  faqPage(faqs),
])

// Paid landing page: keep the visitor here (hide promo bar, desktop nav and the site-wide sticky CTA).
const css = `
.hdr-promo, .hdr nav[aria-label="Main"], .sticky-cta:not(.lp-sticky) { display: none !important; }
.in-facts { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 2rem; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); max-width: 34rem; }
.in-facts div { padding: 0.9rem 0; }
.in-facts div + div { padding-left: 1.1rem; border-left: 1px solid var(--border); }
.in-facts dt { font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
.in-facts dd { font-family: var(--font-playfair); font-size: clamp(1.3rem, 2.2vw, 1.75rem); color: var(--text-1); margin-top: 0.2rem; }
.in-pkgs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; align-items: stretch; }
@media (max-width: 1100px) { .in-pkgs { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .in-pkgs { grid-template-columns: 1fr; } }
.in-pkg { position: relative; display: flex; flex-direction: column; background: var(--bg-raised); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; }
.in-pkg.is-popular { border-color: var(--accent); box-shadow: 0 30px 60px -40px rgb(224 79 37 / 0.55); }
.in-badge { position: absolute; top: -0.7rem; left: 1.5rem; background: var(--accent); color: #fff; font-family: var(--font-geist-mono); font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.25rem 0.6rem; border-radius: 4px; }
.in-pkg h3 { font-size: 1.15rem; }
.in-price { font-family: var(--font-playfair); font-size: 2.4rem; line-height: 1; color: var(--text-1); margin-top: 0.75rem; }
.in-price small { font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-4); margin-left: 0.4rem; }
.in-for { font-size: 0.9rem; color: var(--text-3); margin-top: 0.75rem; min-height: 3.6em; }
.in-del { font-family: var(--font-geist-mono); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-2); padding: 0.6rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin: 1rem 0; }
.in-feat { display: grid; gap: 0.55rem; flex: 1; }
.in-feat li { display: grid; grid-template-columns: 1.1rem 1fr; gap: 0.5rem; font-size: 0.9rem; color: var(--text-2); }
.in-feat li.lead { grid-template-columns: 1fr; font-weight: 600; color: var(--text-1); }
.in-feat svg { margin-top: 0.2rem; color: var(--accent); }
.in-ctas { display: grid; gap: 0.5rem; margin-top: 1.5rem; }
.in-ctas a { justify-content: center; }
.in-grid { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 2.5rem; border-top: 1px solid var(--text-1); }
.in-grid li { padding: 1.3rem 0; border-bottom: 1px solid var(--border); }
.in-grid h3 { font-size: 1.05rem; margin-bottom: 0.3rem; }
.in-grid p { font-size: 0.93rem; }
@media (max-width: 900px) { .in-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .in-grid { grid-template-columns: 1fr; } }
.in-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.in-chips li { border: 1px solid var(--border); background: var(--bg-raised); border-radius: 999px; padding: 0.45rem 0.9rem; font-size: 0.9rem; color: var(--text-2); }
.in-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid var(--text-1); padding-top: 1.5rem; }
@media (max-width: 900px) { .in-steps { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .in-steps { grid-template-columns: 1fr; } }
.in-steps h3 { font-size: 1.05rem; margin: 0.5rem 0 0.35rem; }
.in-steps p { font-size: 0.93rem; }
`

export default function WebsiteDevelopmentIndiaPage() {
  const good = jobs.filter(j => j.review && j.rating === 5 && j.review.length > 60)
  const reviews = [...good.filter(j => j.tags.includes('India')), ...good.filter(j => !j.tags.includes('India'))].slice(0, 6)

  return (
    <div className="lp-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{css}</style>

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Fixed-price websites for Indian businesses</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 5vw, 62px)', maxWidth: '16ch' }}>
              A professional website for your business, <span className="mw-mark">from ₹4,999.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>
              Mobile-friendly, WhatsApp-ready and set up for Google. Four fixed packages, live in 5–14 working days,
              and everything is in your name.
            </p>
            <div className="flex flex-wrap gap-3 items-center" style={{ marginTop: '2rem' }}>
              <a href="#packages" className="mw-btn-accent">See packages & prices <ArrowRight size={16} /></a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="mw-btn-outline">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp us
              </a>
            </div>
            <dl className="in-facts">
              <div><dt>Since</dt><dd>{COMPANY.foundedYear}</dd></div>
              <div><dt>Projects</dt><dd>{COMPANY.projects}</dd></div>
              <div><dt>Team</dt><dd>{COMPANY.teamSize} in-house</dd></div>
            </dl>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', marginTop: '1.1rem' }}>
              {COMPANY.upwork.badge} on Upwork · Shopify Partner · Based in {COMPANY.address.display}
            </p>
          </div>

          <div id="lead-form" className="audit-form-card" style={{ scrollMarginTop: '7rem' }}>
            <p className="mw-num" style={{ marginBottom: '0.75rem' }}>FREE CALLBACK · NO OBLIGATION</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Get your website quote</h2>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Leave your number. We call or WhatsApp you, suggest the right package and confirm the price in writing.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      <StickyTabs tabs={navTabs} cta={{ href: '#lead-form', label: 'Get a free callback' }} />

      {/* ─── PACKAGES ────────────────────────────────────────────────────── */}
      <section id="packages" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">Packages</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>Four packages. Fixed prices. No hidden charges.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '58ch' }}>
              Pick one, or tell us about your business and we’ll recommend the right fit.
            </p>
          </div>
          <div className="in-pkgs">
            {packages.map(p => (
              <article key={p.slug} className={`in-pkg ${p.popular ? 'is-popular' : ''}`}>
                {p.popular && <span className="in-badge">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="in-price">{inr(p.price)}<small>one-time</small></p>
                <p className="in-for">{p.forWho}</p>
                <p className="in-del">Live in {p.delivery}</p>
                <ul className="in-feat">
                  {p.features.map(f =>
                    f.endsWith(':') ? (
                      <li key={f} className="lead">{f}</li>
                    ) : (
                      <li key={f}><Check size={15} aria-hidden="true" /><span>{f}</span></li>
                    ),
                  )}
                </ul>
                <div className="in-ctas">
                  <PickPackage slug={p.slug} label={`Choose ${p.name}`} className={p.popular ? 'mw-btn-accent' : 'mw-btn-primary'} />
                  <a href={outboundHref('whatsapp', waForPackage(p))} target="_blank" rel="noopener noreferrer" className="mw-btn-outline">
                    <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-4)', marginTop: '1.5rem', maxWidth: '75ch' }}>
            Prices are one-time for the scope listed. Domain/hosting renewals, paid plugins or apps, Shopify subscription,
            payment gateway fees and ad spend are paid directly to the provider. Bigger or custom projects are quoted separately.
          </p>
        </div>
      </section>

      {/* ─── IN EVERY PLAN ───────────────────────────────────────────────── */}
      <section id="included" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">In every package</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>Low price doesn’t mean cutting corners.</h2>
          </div>
          <ul className="in-grid">
            {inEveryPlan.map(f => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
          <h3 style={{ fontSize: '1.1rem', margin: '3.5rem 0 1rem' }}>Built for businesses like yours</h3>
          <ul className="in-chips">
            {forWho.map(w => <li key={w}>{w}</li>)}
          </ul>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────────────── */}
      <section id="process" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">How it works</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>From first message to live website in four steps.</h2>
          </div>
          <ol className="in-steps">
            {steps.map(s => (
              <li key={s.step}>
                <span className="mw-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '2.5rem' }}>
            <a href="#lead-form" className="mw-btn-accent">Start with a free callback <ArrowRight size={16} /></a>
            <a href={outboundHref('phone', PHONE.href)} className="mw-btn-outline"><Phone size={16} aria-hidden="true" /> {PHONE.label}</a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─────────────────────────────────────────────────────── */}
      <section id="reviews" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <p className="mw-eyebrow">Verified Upwork reviews</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>{COMPANY.projects} projects since {COMPANY.foundedYear}. Here’s what clients say.</h2>
          </div>
          <div className="reviews">
            {reviews.map(r => (
              <figure key={r.id} className="review">
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{r.review}”</blockquote>
                <figcaption>
                  <span className="review-project">{jobTitle(r)}</span>
                  <span className="mw-num">{r.completedDate}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="mw-eyebrow">Questions</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', maxWidth: '12ch' }}>Before you choose a package.</h2>
          </div>
          <FaqAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="mw-ink" style={{ padding: 'clamp(4.5rem, 8vw, 6rem) 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', maxWidth: '18ch' }}>Your business website, live in days. From ₹4,999.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '52ch' }}>Message us on WhatsApp or leave your number. We reply within one working day with the right package and a written quote.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mw-btn-accent"><MessageCircle size={16} aria-hidden="true" /> WhatsApp us</a>
            <a href="#lead-form" className="mw-btn-outline">Get a free callback</a>
          </div>
        </div>
      </section>

      <StickyBar whatsapp={WA} />
    </div>
  )
}
