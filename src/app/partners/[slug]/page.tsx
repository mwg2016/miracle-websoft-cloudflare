import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight, ArrowLeft, DollarSign, Gift, Megaphone, Handshake, Award, Users,
  MessageCircle,
} from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ContactForm from '@/components/contact/ContactForm'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import { partners, getPartner, universalPartnerFaqs, universalPerks } from '@/data/partners'
import { breadcrumb, faqPage, renderJsonLd, service, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

interface Props {
  params: Promise<{ slug: string }>
}

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
    alternates: { canonical: `https://miraclewebsoft.com/partners/${partner.slug}` },
    openGraph: {
      title: partner.metaTitle,
      description: partner.metaDescription,
      url: `https://miraclewebsoft.com/partners/${partner.slug}`,
      type: 'website',
    },
  }
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params
  const partner = getPartner(slug)
  if (!partner) notFound()

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

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 8.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <Breadcrumb items={[{ label: 'Partners', href: '/partners' }, { label: partner.shortName }]} />
          </div>
          <p className="mw-eyebrow">{partner.eyebrow}</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', maxWidth: '20ch' }}>
            {partner.h1} <span className="mw-mark">{partner.h1Accent}</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '54ch' }}>{partner.subtext}</p>
          <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
            <Link href="#apply" className="mw-btn-accent">Send us a lead <ArrowRight size={16} /></Link>
            <Link href="#how-it-works" className="mw-btn-outline">How it works</Link>
          </div>
          <ul className="home-proof">
            <li><strong>{partner.partnershipBadge}</strong></li>
            <li>No sign-up or contract</li>
            <li>Paid when they sign</li>
          </ul>
        </div>
      </section>

      {/* First-touch angle */}
      <section style={{ background: 'var(--bg-deep)', padding: 'clamp(3rem, 6vw, 4.5rem) 0' }}>
        <div className="mw-container grid lg:grid-cols-[0.35fr_1fr] gap-6 lg:gap-12 items-start">
          <p className="mw-eyebrow">Why this partnership exists</p>
          <blockquote className="founder-card">
            <p className="founder-quote" style={{ maxWidth: '36ch' }}>{partner.firstTouchAngle}</p>
          </blockquote>
        </div>
      </section>

      {/* What you get */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">What you get</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>The partnership in detail. Nothing hidden.</h2>
          <div className="grid sm:grid-cols-2 gap-x-12">
            {partner.whatYouGet.map((b) => {
              const Icon = benefitIconMap[b.icon]
              return (
                <div key={b.title} style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0 2rem', display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '0.75rem' }}>
                  <Icon size={18} strokeWidth={1.75} style={{ color: 'var(--text-2)', marginTop: 3 }} aria-hidden />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.45rem' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you do */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16">
          <div>
            <p className="mw-eyebrow">What you do</p>
            <h2 style={{ maxWidth: '12ch' }}>And just as important: what you don&apos;t.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '40ch', fontSize: '0.95rem' }}>
              No quotas, no exclusivity, no required hours. If you stop referring, the partnership goes dormant until you start again.
            </p>
          </div>
          <ol style={{ borderTop: '1px solid var(--text-1)' }}>
            {partner.whatYouDo.map((item, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', padding: '1.1rem 0', borderBottom: '1px solid var(--border)' }}>
                <span className="mw-num" style={{ paddingTop: '0.25rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'var(--text-1)', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">How it works</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Three steps from first lead to first payout.</h2>
          <ol className="steps min-[901px]:!grid-cols-3">
            {partner.steps.map((step, i) => (
              <li key={step.n}>
                <h3><span className="mw-num" style={{ marginRight: '0.5rem' }}>{i + 1}</span>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Universal perks */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">Two more ways to work with us</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '1.25rem' }}>Beyond simple referrals.</h2>
          <p style={{ maxWidth: '54ch', marginBottom: '3rem' }}>
            Two extra offers available to every {partner.shortName.toLowerCase()} partner. Pick what fits, ignore what doesn&apos;t.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {universalPerks.map((perk, i) => (
              <article key={perk.title} style={{ borderTop: '1px solid var(--text-1)', paddingTop: '1.5rem' }}>
                <span className="mw-num">{String.fromCharCode(65 + i)}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0 0.5rem', lineHeight: 1.3 }}>{perk.title}</h3>
                <p style={{ fontWeight: 500, color: 'var(--text-1)', marginBottom: '1rem' }}>{perk.tagline}</p>
                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  {perk.body.map((para, j) => <p key={j} style={{ fontSize: '0.95rem', margin: 0 }}>{para}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (FAQPage JSON-LD is emitted above) */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-14">
          <div>
            <p className="mw-eyebrow">FAQ</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.15, maxWidth: '18ch' }}>What partners ask before they send a lead.</h2>
          </div>
          <FaqAccordionClient faqs={allFaqs} />
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-start">
          <div>
            <p className="mw-eyebrow">Send us a lead</p>
            <h2 style={{ maxWidth: '14ch' }}>Got someone in mind? We take it from here.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '44ch' }}>
              No sign-up, no portal, no contract. Share their details in the form or WhatsApp them to Karam. We follow up
              within 24 hours and credit you when they sign.
            </p>
            <div style={{ marginTop: '1.75rem', padding: '1rem 1.25rem', borderLeft: '2px solid var(--border-hover)', maxWidth: '48ch' }}>
              <p className="mw-num" style={{ marginBottom: '0.4rem' }}>WHAT TO WRITE IN THE MESSAGE</p>
              <p style={{ fontSize: '0.92rem', margin: 0 }}>
                &quot;Referring [client name] for a website. Their business is [X], contact them at [email/phone]. Partner type: {partner.shortName}.&quot;
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3" style={{ marginTop: '2rem' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mw-btn-outline">
                <MessageCircle size={16} /> WhatsApp Karam instead
              </a>
              <Link href="/partners" className="inline-flex items-center gap-1.5" style={{ fontSize: '0.88rem', color: 'var(--text-3)' }}>
                <ArrowLeft size={13} /> All partner types
              </Link>
            </div>
          </div>

          <div className="audit-form-card lg:sticky lg:top-28">
            <p className="mw-num" style={{ marginBottom: '0.35rem' }}>REFERRING AS</p>
            <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: '0.15rem' }}>{partner.shortName}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
              {partner.partnershipBadge}. No sign-up, paid when they sign.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Other partner types */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="mw-num" style={{ flexShrink: 0 }}>OTHER PARTNER TYPES</p>
          <div className="flex flex-wrap gap-2">
            {partners
              .filter((p) => p.slug !== partner.slug)
              .map((p) => (
                <Link key={p.slug} href={`/partners/${p.slug}`} className="social-pill">{p.shortName}</Link>
              ))}
            <Link href="/partners" className="social-pill" style={{ color: 'var(--text-1)', borderColor: 'var(--border-hover)' }}>
              All partner types →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
