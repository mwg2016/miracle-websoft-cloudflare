import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import ContactForm from '@/components/contact/ContactForm'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'
import { getPlanBySlug } from '@/lib/pricing'
import FounderIntro from '@/components/ui/FounderIntro'
import { jobs, jobTitle } from '@/data/jobs'

const contactFaqs = [
  { question: 'How do I get started with Miracle Websoft?', answer: 'Send the form, book a 15-minute call or message us on WhatsApp. We reply within 24 hours. If your project is a good fit, we schedule a short discovery call, then send a detailed proposal with clear scope, timeline, and fixed pricing. No vague estimates.' },
  { question: 'Should I send a brief, book a call or ask for a teardown?', answer: 'Send a brief here if you already know roughly what you need and want a written quote. Book a 15-minute call if it is easier to talk it through. If you just want to know what is holding your store back, request the free video teardown: no call needed.' },
  { question: 'Do you work on a fixed price or hourly basis?', answer: 'Fixed price on all projects. We send a detailed proposal before any work begins. You know exactly what you are paying before we start. No hourly billing, no surprise invoices.' },
  { question: 'How long does it take to get a proposal?', answer: 'After our discovery call, we typically send a full proposal within 2–3 business days. For smaller projects or straightforward audits, it is often the same day.' },
  { question: 'Do you sign NDAs?', answer: 'Yes. We sign NDAs on request before any discovery or audit work begins. All client information is treated as strictly confidential.' },
  { question: 'Do you work with brands outside the USA/UK/Australia?', answer: 'Yes. Our primary markets are the United States, Canada, United Kingdom, Australia and Europe. All communication is in English, and we work across time zones.' },
]

export const metadata: Metadata = {
  title: 'Contact Miracle Websoft | Send a Shopify Project Brief',
  description: 'Tell us what is not working in your Shopify store, website, AI workflow or custom software project. Get practical fixed-price next steps from Miracle Websoft.',
  alternates: { canonical: 'https://miraclewebsoft.com/contact' },
  openGraph: {
    title: 'Contact Miracle Websoft | Send a Project Brief',
    description: 'Shopify development, CRO, speed optimization, AI automation and custom web development consultation.',
    url: 'https://miraclewebsoft.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Miracle Websoft | Send a Project Brief',
    description: 'Get practical next steps for Shopify, CRO, speed, AI automation or custom web development.',
  },
}

const WHATSAPP_URL = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent('Hi Karam, how are you? I need help with Shopify, AI automation or a website project.')}`)
const EMAIL_URL = outboundHref('email', 'mailto:karam@miraclewebsoft.com?subject=Project%20consultation')
const LINKEDIN_URL = outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')

const platforms = [
  { name: 'Upwork', sub: 'Top Rated Plus · 98% job success', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/') },
  { name: 'Clutch', sub: '4.9 rating · verified reviews', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft') },
  { name: 'Shopify Partners', sub: 'Official partner directory', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { name: 'DesignRush', sub: 'Agency directory listing', href: outboundHref('external', 'https://www.designrush.com/agency/profile/miracle-websoft') },
]

const contactCss = `
.contact-alt { border-top: 1px solid var(--text-1); }
.contact-alt a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 1.1rem 0; border-bottom: 1px solid var(--border); }
.contact-alt a:hover { background: var(--bg-raised); }
.contact-alt strong { display: block; font-family: var(--font-playfair); font-weight: 400; font-size: 1.3rem; letter-spacing: -0.01em; color: var(--text-1); }
.contact-alt span { font-size: 0.9rem; color: var(--text-3); }
.contact-alt svg { color: var(--text-4); transition: color .15s ease, transform .15s ease; }
.contact-alt a:hover svg { color: var(--accent); transform: translateX(2px); }
.contact-direct { display: flex; flex-wrap: wrap; gap: 0.4rem 1.25rem; margin-top: 1.25rem; font-size: 0.9rem; color: var(--text-3); }
.contact-direct a { color: var(--text-1); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--border-hover); }
.contact-direct a:hover { text-decoration-color: var(--text-1); }
.contact-verified a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--border); align-items: baseline; }
.contact-verified a:hover { background: var(--bg-raised); }
`

const jsonLd = renderJsonLd([
  webPage({
    name: 'Contact Miracle Websoft - send a project brief',
    description:
      'Send a project brief for Shopify development, CRO, speed optimization, AI automation or custom web development. Response within 24 hours.',
    url: 'https://miraclewebsoft.com/contact',
    type: 'ContactPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]),
])

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const params = await searchParams
  const plan = getPlanBySlug(params?.package)
  const reviews = jobs.filter(j => j.review && j.rating === 5 && j.review.length > 80).slice(0, 3)
  const steps = [
    { t: 'Confirmation email', d: 'A copy of your brief lands in your inbox straight away.' },
    { t: 'Personal reply within 24 hours', d: 'Karam reads every brief and replies with questions or a rough scope.' },
    { t: 'Short discovery call', d: 'Only if needed: 15–30 minutes to align on goals, timeline and anything custom.' },
    { t: 'Written fixed-price proposal', d: plan ? `Full scope and timeline for the ${plan.name} plan. You only pay after you approve.` : 'Scope, timeline and price in writing. You only pay after you approve.' },
  ]

  const alternatives = (
    <div>
      <p className="mw-num" style={{ marginBottom: '0.75rem' }}>OR, IF IT&apos;S EASIER</p>
      <div className="contact-alt">
        <Link href="/book">
          <div><strong>Prefer a call?</strong><span>Book 15 minutes with Karam. No pitch deck.</span></div>
          <ArrowRight size={18} />
        </Link>
        <Link href="/free-store-audit">
          <div><strong>Just want a quick look?</strong><span>Get a free 5-minute video teardown of your store in 48 hours.</span></div>
          <ArrowRight size={18} />
        </Link>
      </div>
      <div className="contact-direct">
        <span>Or directly:</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href={EMAIL_URL}>karam@miraclewebsoft.com</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style dangerouslySetInnerHTML={{ __html: contactCss }} />

      <section style={{ paddingTop: 'clamp(7rem, 10vw, 8.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container">
          <div className="mb-6"><Breadcrumb items={plan ? [{ label: 'Pricing', href: '/pricing' }, { label: plan.name }] : [{ label: 'Contact' }]} /></div>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="mw-eyebrow">{plan ? `${plan.name} · ${plan.price}` : 'Send a written brief'}</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '14ch' }}>
                {plan ? <>Tell us about your brand. <span className="mw-mark">We&apos;ll take it from there.</span></> : <>Tell us what you need. <span className="mw-mark">Get a fixed quote.</span></>}
              </h1>
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', maxWidth: '46ch' }}>
                {plan
                  ? 'No payment yet. Send the form and Karam replies within 24 hours with next steps and a written proposal. You only pay if you approve it.'
                  : 'A few lines about your store and the problem is enough. Karam replies personally within 24 hours with questions or a rough scope, then a fixed-price proposal.'}
              </p>
              <div className="hidden lg:block" style={{ marginTop: '2.5rem' }}>{alternatives}</div>
            </div>

            <div>
              <div className="audit-form-card">
                <p className="mw-num" style={{ marginBottom: '1.25rem' }}>{plan ? `CONFIRM YOUR ${plan.name.toUpperCase()} PLAN` : 'YOUR BRIEF'}</p>
                <ContactForm />
              </div>
              <div className="lg:hidden" style={{ marginTop: '2.5rem' }}>{alternatives}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">What happens after you send</p>
          <h2 style={{ maxWidth: '22ch', marginBottom: '3rem' }}>A reply from the founder, then a price in writing.</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="steps-time">Step 0{i + 1}</span>
                <h3 style={{ fontSize: '1.2rem' }}>{s.t}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-3)' }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="mw-eyebrow">Who you&apos;ll be writing to</p>
              <h2 style={{ maxWidth: '18ch', marginBottom: '1.5rem' }}>A 60-second hello from Karam.</h2>
              <FounderIntro caption="" />
            </div>
            <div>
              <p className="mw-eyebrow">Verified on</p>
              <div className="contact-verified" style={{ borderTop: '1px solid var(--text-1)', marginTop: '1.5rem' }}>
                {platforms.map(p => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                    <span><span style={{ fontWeight: 600, color: 'var(--text-1)' }}>{p.name}</span><span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-3)' }}>{p.sub}</span></span>
                    <ArrowUpRight size={16} style={{ color: 'var(--text-4)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mw-eyebrow" style={{ marginTop: '5rem' }}>From store owners we&apos;ve worked with</p>
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
          <Link href="/reviews" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.5rem', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-1)' }}>
            Read more client reviews <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} heading="Before you reach out" eyebrow="FAQ" />
    </>
  )
}
