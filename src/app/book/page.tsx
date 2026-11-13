import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyEmbed from './CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a 15-Minute Call | Miracle Websoft',
  description: 'Pick a time for a 15-minute call with Karam Singh Mehra about your Shopify store. No pitch deck, just specific advice on what to fix first.',
  alternates: { canonical: 'https://miraclewebsoft.com/book' },
}

const agenda = [
  'What your store sells and where the traffic comes from',
  'The one or two things most likely costing you orders',
  'Whether that’s a job for us, for you, or for an app',
  'If it’s for us: a fixed quote within 24 hours',
]

export default function BookPage() {
  return (
    <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '5rem' }}>
      <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <div className="lg:sticky lg:top-32">
          <p className="mw-eyebrow">15 minutes · Google Meet or Zoom</p>
          <h1 className="mw-hero-title">Talk to the person who&apos;ll do the work.</h1>
          <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', maxWidth: '42ch' }}>
            You&apos;ll speak with Karam Singh Mehra, founder of Miracle Websoft. Ten-plus years and 650+ Shopify projects, so you&apos;ll get a straight answer on what&apos;s worth doing.
          </p>
          <p className="mw-num" style={{ marginTop: '2.25rem', marginBottom: '0.75rem' }}>WHAT WE&apos;LL COVER</p>
          <ol className="book-agenda">
            {agenda.map((a, i) => <li key={a}><span className="mw-num">{String(i + 1).padStart(2, '0')}</span>{a}</li>)}
          </ol>
          <p style={{ marginTop: '2rem', fontSize: '0.92rem', color: 'var(--text-3)' }}>
            Not ready for a call? <Link href="/free-store-audit" style={{ color: 'var(--accent)', fontWeight: 600 }}>Get a free video teardown</Link> instead, or <Link href="/contact" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>send a written brief</Link>.
          </p>
        </div>
        <div className="book-frame">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  )
}
