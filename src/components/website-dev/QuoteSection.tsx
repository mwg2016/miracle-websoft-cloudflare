import { MessageCircle, Zap, Calendar, DollarSign, CheckCircle2 } from 'lucide-react'
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
    <section
      id="get-quote"
      style={{ background: '#0d0d0d', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="mw-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-start">
          <div>
            <span className="mw-eyebrow">GET A QUOTE</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
              Ready to get online?
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                Tell us about your business.
              </em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                maxWidth: '440px',
                marginBottom: '2.5rem',
              }}
            >
              Send a quick message. We&apos;ll reply within 24 hours with a fixed price, a delivery date and the 4–5
              questions we need answered to begin. No paperwork, no pressure.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {[
                { icon: Zap, text: 'Fixed-price quote within 24 hours' },
                { icon: Calendar, text: 'Site live in 7–14 days' },
                { icon: DollarSign, text: 'Domain + hosting + design included' },
                { icon: CheckCircle2, text: 'You own everything we build' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{text}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.9rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.2)',
                textDecoration: 'none',
                maxWidth: '360px',
              }}
            >
              <MessageCircle size={18} style={{ color: '#25D366', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                  Prefer WhatsApp?
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
                  Message Karam directly — replies within an hour
                </div>
              </div>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: '#25D366',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                Chat
              </span>
            </a>
          </div>

          <div style={{ position: 'sticky', top: '7rem' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '2rem',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,rgba(108,99,255,0.3),rgba(108,99,255,0.1))',
                    border: '2px solid rgba(108,99,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>K</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                    {cityName ? `Tell Karam about your ${cityName} business` : 'Tell Karam about your business'}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
                    Founder · quotes within 24 h · fixed price
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                  marginBottom: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                No commitment · Fixed pricing · You own everything
              </div>
              <ContactForm />
            </div>
            <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
              {['🔒 SSL encrypted', '📄 NDA on request', '✓ No spam ever'].map((t) => (
                <span key={t} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
