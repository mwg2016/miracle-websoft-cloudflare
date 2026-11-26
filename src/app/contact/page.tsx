import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import ContactForm from '@/components/contact/ContactForm'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { getPlanBySlug } from '@/lib/pricing'
import { ContactAlternatives, ContactProof, NextSteps, contactCss } from '@/components/contact/ContactShared'

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
  description: 'Tell us what your Shopify store needs. Karam replies within 24 hours with a fixed-price quote. Or book a call, get a free teardown, or message us on WhatsApp.',
  alternates: { canonical: 'https://miraclewebsoft.com/contact' },
  openGraph: {
    title: 'Contact Miracle Websoft | Send a Project Brief',
    description: 'Shopify development, support and improvements. Fixed-price quote within 24 hours.',
    url: 'https://miraclewebsoft.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Miracle Websoft | Send a Project Brief',
    description: 'Shopify development, support and improvements. Fixed-price quote within 24 hours.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Contact Miracle Websoft - send a project brief',
    description:
      'Send a Shopify project brief, book a call or message us on WhatsApp. Response within 24 hours.',
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
  const steps = [
    { t: 'Confirmation email', d: 'A copy of your brief lands in your inbox straight away.' },
    { t: 'Personal reply within 24 hours', d: 'Karam reads every brief and replies with questions or a rough scope.' },
    { t: 'Short discovery call', d: 'Only if needed: 15–30 minutes to align on goals, timeline and anything custom.' },
    { t: 'Written fixed-price proposal', d: plan ? `Full scope and timeline for the ${plan.name} plan. You only pay after you approve.` : 'Scope, timeline and price in writing. You only pay after you approve.' },
  ]

  const alternatives = <ContactAlternatives exclude="brief" />

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

      <NextSteps heading="A reply from the founder, then a price in writing." steps={steps} />

      <ContactProof founderHeading="A 60-second hello from Karam." />

      <FaqSection faqs={contactFaqs} heading="Before you reach out" eyebrow="FAQ" />
    </>
  )
}
