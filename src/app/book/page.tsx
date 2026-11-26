import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import { ContactAlternatives, ContactProof, NextSteps, contactCss } from '@/components/contact/ContactShared'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import CalendlyEmbed from './CalendlyEmbed'

// Same layout as /contact: pitch + every other way to reach us on the left,
// the booking calendar on the right, then next steps, proof and FAQ.

const TITLE = 'Book a 15-Minute Shopify Call | Miracle Websoft'
const DESCRIPTION = 'Pick a time for a free 15-minute call with Karam Singh Mehra about your Shopify store. Or send a brief, get a free teardown, or message us on WhatsApp.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://miraclewebsoft.com/book' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://miraclewebsoft.com/book', type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const agenda = [
  'What your store sells and what is not working',
  'The one or two fixes most likely to make a difference',
  'Whether it is a job for us, for you, or for an app',
]

const steps = [
  { t: 'Calendar invite', d: 'A Google Meet or Zoom link lands in your inbox as soon as you pick a time.' },
  { t: '15-minute call with Karam', d: 'Straight answers on what to fix first. No pitch deck, no sales team.' },
  { t: 'Fixed quote within 24 hours', d: 'If it is a job for us: scope, timeline and price in writing.' },
  { t: 'You decide', d: 'Nothing to pay until you approve the quote. No follow-up sequence if you do not.' },
]

const bookFaqs = [
  { question: 'Is the call free?', answer: 'Yes. 15 minutes, no cost and no obligation.' },
  { question: 'Who will I talk to?', answer: 'Karam Singh Mehra, founder of Miracle Websoft. 10+ years and 700+ Shopify projects. Not a salesperson.' },
  { question: 'What should I prepare?', answer: 'Just your store URL and what you want to change. Screenshots or a short list help but are not needed.' },
  { question: 'None of the times work for me. What now?', answer: 'Message us on WhatsApp or email karam@miraclewebsoft.com with a few times that suit you, or send a written brief instead.' },
  { question: 'Can I just get a quote without a call?', answer: 'Yes. Send a written brief on the contact page and you get a fixed quote within 24 hours.' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Book a 15-minute Shopify call - Miracle Websoft',
    description: DESCRIPTION,
    url: 'https://miraclewebsoft.com/book',
    type: 'ContactPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Book a call', url: '/book' },
  ]),
])

export default function BookPage() {
  const alternatives = <ContactAlternatives exclude="call" />
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style dangerouslySetInnerHTML={{ __html: contactCss }} />

      <section style={{ paddingTop: 'clamp(7rem, 10vw, 8.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container">
          <div className="mb-6"><Breadcrumb items={[{ label: 'Book a call' }]} /></div>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="mw-eyebrow">Free · 15 minutes · Google Meet or Zoom</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '14ch' }}>
                Talk to the person who&apos;ll <span className="mw-mark">do the work.</span>
              </h1>
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', maxWidth: '46ch' }}>
                Pick a time with Karam Singh Mehra, founder of Miracle Websoft. You get a straight answer on what&apos;s worth doing for your store.
              </p>
              <p className="mw-num" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>WHAT WE&apos;LL COVER</p>
              <ol className="book-agenda">
                {agenda.map((a, i) => <li key={a}><span className="mw-num">{String(i + 1).padStart(2, '0')}</span>{a}</li>)}
              </ol>
              <div className="hidden lg:block" style={{ marginTop: '2.5rem' }}>{alternatives}</div>
            </div>

            <div>
              <div className="audit-form-card" style={{ padding: 0, overflow: 'hidden' }}>
                <p className="mw-num" style={{ padding: '1.25rem 1.5rem 0' }}>PICK A TIME</p>
                <CalendlyEmbed />
              </div>
              <div className="lg:hidden" style={{ marginTop: '2.5rem' }}>{alternatives}</div>
            </div>
          </div>
        </div>
      </section>

      <NextSteps heading="A short call, then a price in writing." steps={steps} />

      <ContactProof founderHeading="A 60-second hello from Karam." />

      <FaqSection faqs={bookFaqs} heading="Before you book" eyebrow="FAQ" />
    </>
  )
}
