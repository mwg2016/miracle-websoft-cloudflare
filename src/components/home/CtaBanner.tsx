import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

export default function CtaBanner() {
  return (
    <section style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
      <div className="mw-container grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-end">
        <div>
          <p className="mw-eyebrow">Start here</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', maxWidth: '18ch' }}>
            Find out what to fix first. <span className="mw-mark">It&apos;s free.</span>
          </h2>
          <p style={{ marginTop: '1.25rem', maxWidth: '52ch' }}>
            Send your store URL and get a 5-minute video teardown within 48 hours, with fixes ranked by likely impact. Or book 15 minutes with Karam and talk it through.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/free-store-audit" className="mw-btn-accent">
            Get a free store teardown <ArrowRight size={16} />
          </Link>
          <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
          <a
            href={outboundHref('whatsapp', 'https://wa.me/916239269736?text=Hi%20Karam%2C%20how%20are%20you%3F%20I%20need%20help%20with%20my%20website%20or%20AI%20automation.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.88rem', color: 'var(--text-3)', textAlign: 'center', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Or message Karam on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
