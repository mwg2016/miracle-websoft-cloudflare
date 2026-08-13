import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight, ArrowDown, ArrowLeft, Calculator, Scale, GraduationCap, Landmark,
  Palette, Printer, Building2, DollarSign, Gift, Megaphone, Handshake, Award, Users,
  MessageCircle,
} from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ContactForm from '@/components/contact/ContactForm'
import { partners, getPartner, universalPartnerFaqs, universalPerks } from '@/data/partners'
import { breadcrumb, faqPage, renderJsonLd, service, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

interface Props {
  params: Promise<{ slug: string }>
}

const iconMap = {
  calculator: Calculator,
  scale: Scale,
  graduation: GraduationCap,
  landmark: Landmark,
  palette: Palette,
  printer: Printer,
  building: Building2,
} as const

const benefitIconMap = {
  dollar: DollarSign,
  gift: Gift,
  megaphone: Megaphone,
  handshake: Handshake,
  badge: Award,
  users: Users,
} as const

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const partner = getPartner(slug)
  if (!partner) return {}
  return {
    title: partner.metaTitle,
    description: partner.metaDescription,
    alternates: { canonical: `https://www.miraclewebsoft.com/partners/${partner.slug}` },
    openGraph: {
      title: partner.metaTitle,
      description: partner.metaDescription,
      url: `https://www.miraclewebsoft.com/partners/${partner.slug}`,
      type: 'website',
    },
  }
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params
  const partner = getPartner(slug)
  if (!partner) notFound()

  const TypeIcon = iconMap[partner.iconKey]
  const url = `/partners/${partner.slug}`
  const allFaqs = [...partner.faqs, ...universalPartnerFaqs]

  const waText = `Hi Karam, I'm a ${partner.shortName.toLowerCase()} and I'd like to send you a lead — here are their details:`
  const whatsappUrl = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent(waText)}`)

  const jsonLd = renderJsonLd([
    webPage({
      name: partner.metaTitle,
      description: partner.metaDescription,
      url,
    }),
    service({
      name: `Miracle Websoft partner program for ${partner.shortName}`,
      description: partner.metaDescription,
      url,
      serviceType: 'Partner program',
      areaServed: ['United States', 'United Kingdom', 'Australia'],
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Partners', url: '/partners' },
      { name: partner.shortName, url },
    ]),
    faqPage(allFaqs),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div style={{ background: '#0a0a0a', paddingTop: '7rem', paddingBottom: '0.5rem' }}>
        <div className="mw-container">
          <Breadcrumb items={[{ label: 'Partners', href: '/partners' }, { label: partner.shortName }]} />
        </div>
      </div>

      {/* Hero */}
      <section
        className="pt-12 pb-20"
        style={{
          background: '#0a0a0a',
          backgroundImage: `radial-gradient(ellipse at 60% 40%, ${partner.accentBg.replace('0.08', '0.12')} 0%, transparent 55%)`,
        }}
      >
        <div className="mw-container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              background: partner.accentBg,
              border: `1px solid ${partner.accentBorder}`,
              marginBottom: '1.25rem',
            }}
          >
            <TypeIcon size={13} style={{ color: partner.accentColor }} />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: partner.accentColor,
              }}
            >
              {partner.eyebrow}
            </span>
          </div>

          <h1 className="text-white mb-5" style={{ maxWidth: '780px' }}>
            {partner.h1}
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>{partner.h1Accent}</em>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              maxWidth: '640px',
              marginBottom: '2.5rem',
            }}
          >
            {partner.subtext}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="#apply" className="mw-btn-primary">
              Send us a lead <ArrowDown size={15} />
            </Link>
            <Link
              href="#how-it-works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              How it works
            </Link>
          </div>

          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 500,
            }}
          >
            No sign-up · No contract · Just share the lead, get paid when they sign
          </p>
        </div>
      </section>

      {/* First-touch angle */}
      <section style={{ background: '#111', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container" style={{ maxWidth: '780px' }}>
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: partner.accentColor,
              marginBottom: '1rem',
            }}
          >
            Why this partnership exists
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.85,
              fontWeight: 300,
              borderLeft: `2px solid ${partner.accentColor}`,
              paddingLeft: '1.5rem',
            }}
          >
            {partner.firstTouchAngle}
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT YOU GET</span>
            <h2 style={{ color: '#fff' }}>
              The partnership in detail.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Nothing hidden.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partner.whatYouGet.map((b) => {
              const Icon = benefitIconMap[b.icon]
              return (
                <div
                  key={b.title}
                  style={{
                    background: partner.accentBg,
                    border: `1px solid ${partner.accentBorder}`,
                    borderRadius: '14px',
                    padding: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      background: partner.accentBg,
                      border: `1px solid ${partner.accentBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={17} style={{ color: partner.accentColor }} />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.55rem' }}>
                    {b.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Universal perks — available to every partner */}
      <section className="mw-section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PLUS — TWO MORE WAYS WE WORK WITH YOU</span>
            <h2 style={{ color: '#fff' }}>
              We&apos;re flexible.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                Beyond simple referrals.
              </em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '560px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              Two extra offers available to every {partner.shortName.toLowerCase()} working with us. Pick what fits,
              ignore what doesn&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {universalPerks.map((perk) => {
              const Icon = perk.icon === 'gift' ? Gift : Handshake
              return (
                <div
                  key={perk.title}
                  style={{
                    borderRadius: '16px',
                    border: `1px solid ${partner.accentBorder}`,
                    background: partner.accentBg,
                    padding: '2rem',
                  }}
                >
                  <div style={{ height: '3px', background: partner.accentGradient, margin: '-2rem -2rem 1.5rem' }} />
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: partner.accentBg,
                      border: `1px solid ${partner.accentBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={20} style={{ color: partner.accentColor }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.55rem', lineHeight: 1.35 }}>
                    {perk.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: partner.accentColor, marginBottom: '1.25rem', fontWeight: 500 }}>
                    {perk.tagline}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {perk.body.map((p, i) => (
                      <p key={i} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you do */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container" style={{ maxWidth: '820px' }}>
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT YOU DO</span>
            <h2 style={{ color: '#fff' }}>
              And just as important:
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>what you don&apos;t.</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {partner.whatYouDo.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: partner.accentBg,
                    border: `1px solid ${partner.accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: partner.accentColor,
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
            No quotas. No exclusivity. No required hours. If you stop referring, the partnership simply goes dormant
            until you start again.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">HOW IT WORKS</span>
            <h2 style={{ color: '#fff' }}>
              Three steps from apply
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>to first payout.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {partner.steps.map((step) => (
              <div
                key={step.n}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: partner.accentColor,
                    marginBottom: '0.9rem',
                    fontFamily: 'monospace',
                  }}
                >
                  {step.n}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container" style={{ maxWidth: '820px' }}>
          <div className="mw-section-header">
            <span className="mw-eyebrow">FAQS</span>
            <h2 style={{ color: '#fff' }}>
              The questions partners ask
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>before they sign up.</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {allFaqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#fff',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      color: partner.accentColor,
                      fontSize: '1.3rem',
                      fontWeight: 300,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.75,
                    margin: '0.85rem 0 0 0',
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section
        id="apply"
        style={{ background: '#0a0a0a', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-start">
            <div>
              <span className="mw-eyebrow">SEND US A LEAD</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
                Got someone in mind?
                <br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                  Share their details, we take it from here.
                </em>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  maxWidth: '440px',
                  marginBottom: '1.5rem',
                }}
              >
                No sign-up, no portal, no contract. Just share their details in the form (or WhatsApp them to Karam
                directly). We&apos;ll follow up with them within 24 hours and credit you when they sign.
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  maxWidth: '440px',
                  marginBottom: '2.5rem',
                  fontStyle: 'italic',
                }}
              >
                In the message field, just write something like: <span style={{ color: 'rgba(255,255,255,0.6)' }}>&quot;Referring [client name] for a website — their business is [X], contact them at [email/phone]. I&apos;m a {partner.shortName.toLowerCase()}.&quot;</span> That&apos;s enough.
              </p>

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
                  marginBottom: '2.5rem',
                }}
              >
                <MessageCircle size={18} style={{ color: '#25D366', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                    Faster — just WhatsApp Karam
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
                    Drop the lead&apos;s details in chat — replies within an hour
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

              <Link
                href="/partners"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={13} /> Back to all partner types
              </Link>
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
                      background: partner.accentBg,
                      border: `2px solid ${partner.accentBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <TypeIcon size={18} style={{ color: partner.accentColor }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                      Referring as: {partner.shortName}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
                      {partner.partnershipBadge}
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
                  No sign-up · No contract · Pay when they sign
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

      {/* Other partner types */}
      <section style={{ background: '#0d0d0d', padding: '3rem 0' }}>
        <div className="mw-container">
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Other partner types we work with
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {partners
              .filter((p) => p.slug !== partner.slug)
              .map((p) => {
                const Icon = iconMap[p.iconKey]
                return (
                  <Link
                    key={p.slug}
                    href={`/partners/${p.slug}`}
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.65)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '999px',
                      padding: '0.45rem 1rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Icon size={12} style={{ color: p.accentColor }} /> {p.shortName}
                  </Link>
                )
              })}
            <Link
              href="/partners"
              style={{
                fontSize: '0.85rem',
                color: 'var(--accent)',
                border: '1px solid rgba(108,99,255,0.3)',
                background: 'rgba(108,99,255,0.06)',
                borderRadius: '999px',
                padding: '0.45rem 1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 600,
              }}
            >
              All partner types <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
