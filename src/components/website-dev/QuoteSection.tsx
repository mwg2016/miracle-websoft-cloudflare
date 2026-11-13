import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import { outboundHref } from '@/lib/outbound'

interface Props {
  cityName?: string
  countryShortName?: string
}

export default function QuoteSection({ cityName, countryShortName }: Props) {
  const waText = cityName
    ? `Hi Karam, I'm a small business in ${cityName}${countryShortName ? `, ${countryShortName}` : ''} looking to get a website built.`
    : `Hi Karam, I'd like to get a website built for my small business.`
  const whatsappUrl = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent(waText)}`)

  return (
    <section id="get-quote" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '5rem' }}>
      <div className="mw-container grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-start">
        <div>
          <p className="mw-eyebrow">Get a quote</p>
          <h2 style={{ maxWidth: '14ch' }}>
            Ready to get online? Tell us about your {cityName ? `${cityName} ` : ''}business.
          </h2>
          <p style={{ marginTop: '1.25rem', maxWidth: '46ch' }}>
            Send a quick message. We&apos;ll reply within 24 hours with a fixed price, a delivery date and the 4–5
            questions we need answered to begin. No paperwork, no pressure.
          </p>

          <ul className="offer-list" style={{ maxWidth: '40ch' }}>
            <li>Fixed-price quote within 24 hours</li>
            <li>Site live in 7–14 days</li>
            <li>Domain, hosting and design included</li>
            <li>You own everything we build</li>
          </ul>

          <p style={{ marginTop: '2.5rem', fontSize: '0.93rem', color: 'var(--text-3)' }}>
            Rather talk?{' '}
            <Link href="/book" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Book a 15-min call</Link>
            {' '}or{' '}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>message Karam on WhatsApp</a>.
          </p>
        </div>

        <div className="audit-form-card">
          <p className="mw-num" style={{ marginBottom: '0.35rem' }}>
            {cityName ? `TELL KARAM ABOUT YOUR ${cityName.toUpperCase()} BUSINESS` : 'TELL KARAM ABOUT YOUR BUSINESS'}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: '1.25rem' }}>
            No commitment · fixed pricing · you own everything
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
