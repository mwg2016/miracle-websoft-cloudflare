import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone, Calendar, CreditCard, ArrowUpRight, CheckCircle2, Download } from 'lucide-react'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Miracle Websoft — Shopify Experts for Growing Stores',
  description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 600+ projects, 98%+ job success, 16 team members.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/bio/company' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Miracle Websoft — Shopify Experts for Growing Stores',
    description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 600+ projects, 98%+ job success, 16 team members.',
    url: 'https://www.miraclewebsoft.com/bio/company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miracle Websoft — Shopify Experts for Growing Stores',
    description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 600+ projects, 98%+ job success, 16 team members.',
  },
}

const MEETING_LINK = outboundHref('calendly', 'https://calendly.com/karam-4my/15-mints-discussion?month=2026-03')
const PAYMENT_LINK = outboundHref('external', 'https://razorpay.com/export-link/@miraclewebsoft')

const stats = [
  { value: '600+', label: 'Projects' },
  { value: '98%+', label: 'Success Rate' },
  { value: '10+', label: 'Years' },
  { value: '16', label: 'Specialists' },
]

const services = [
  'Custom Shopify Development',
  'Shopify App Development',
  'Platform Migration to Shopify',
  'CRO & Speed Optimisation',
  'Theme Design & Customisation',
  'TikTok Shop Integration',
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft',
    color: '#0077B5',
    bg: 'rgba(0,119,181,0.1)',
    border: 'rgba(0,119,181,0.22)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/miracle_websoft/',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.1)',
    border: 'rgba(225,48,108,0.22)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/miraclewebsoft/',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.1)',
    border: 'rgba(24,119,242,0.22)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/KaramSingh35',
    color: '#fff',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.14)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

const trustProfiles = [
  {
    label: 'Upwork Agency',
    sub: 'Top Rated Plus · 4.9★ · 600+ reviews',
    href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/'),
    color: '#14a800',
    bg: 'rgba(20,168,0,0.07)',
    border: 'rgba(20,168,0,0.18)',
    badge: 'TOP RATED PLUS',
    stars: 5,
  },
  {
    label: 'Shopify Partner Directory',
    sub: 'Verified Partner · Certified 2024',
    href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1'),
    color: '#96BF48',
    bg: 'rgba(150,191,72,0.07)',
    border: 'rgba(150,191,72,0.18)',
    badge: 'VERIFIED',
    stars: 5,
  },
  {
    label: 'Clutch',
    sub: '5.0★ · Top B2B company',
    href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft'),
    color: '#e63329',
    bg: 'rgba(230,51,41,0.07)',
    border: 'rgba(230,51,41,0.18)',
    badge: '5.0 ★',
    stars: 5,
  },
  {
    label: 'Trustpilot',
    sub: 'Verified reviews · Excellent',
    href: 'https://www.trustpilot.com/review/miraclewebsoft.com',
    color: '#00B67A',
    bg: 'rgba(0,182,122,0.07)',
    border: 'rgba(0,182,122,0.18)',
    badge: 'EXCELLENT',
    stars: 5,
  },
  {
    label: 'DesignRush',
    sub: 'Verified agency listing',
    href: 'https://www.designrush.com/agency/profile/miracle-websoft',
    color: '#6C63FF',
    bg: 'rgba(108,99,255,0.07)',
    border: 'rgba(108,99,255,0.18)',
    badge: 'LISTED',
    stars: 4,
  },
]

function MiniStars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '1px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i <= count ? '#F59E0B' : 'rgba(255,255,255,0.12)'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Miracle Websoft — Company bio',
    description:
      'Miracle Websoft company profile — Top Rated Plus Shopify agency for custom development, CRO, speed, apps and migrations. 600+ projects, 98%+ job success, 16 specialists.',
    url: 'https://www.miraclewebsoft.com/bio/company',
    type: 'AboutPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Bio', url: '/bio/company' },
    { name: 'Company', url: '/bio/company' },
  ]),
])

export default function CompanyBioPage() {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #0a0a0a 0%, #080e14 40%, #0a0a10 100%)',
      minHeight: '100vh',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Background glow */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 450, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)' }} />
      </div>

      <div style={{ maxWidth: 500, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>

        {/* Company header card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          padding: '2.25rem 2rem 1.75rem',
          marginBottom: '0.75rem',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
          textAlign: 'center',
        }}>
          {/* Logo */}
          <div style={{
            width: 148, height: 72, borderRadius: 18,
            background: 'rgba(10,10,10,0.72)',
            border: '1px solid rgba(153,195,70,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: '0 0 0 3px rgba(153,195,70,0.08), 0 8px 32px rgba(153,195,70,0.12)',
          }}>
            <Image src="/miracle-websoft-logo.png" alt="Miracle Websoft" width={120} height={50} style={{ width: 120, height: 'auto' }} />
          </div>

          {/* Badge */}
          <span style={{
            fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(16,185,129,0.9)',
            background: 'rgba(16,185,129,0.09)', border: '1px solid rgba(16,185,129,0.22)',
            borderRadius: 9999, padding: '0.22rem 0.75rem',
            display: 'inline-block', marginBottom: '0.85rem',
          }}>Shopify Agency · Est. 2015</span>

          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: '1.7rem', fontWeight: 700, marginBottom: '0.3rem', lineHeight: 1.2 }}>
            Miracle Websoft
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 300, marginBottom: '0.75rem' }}>
            Shopify development, CRO, speed, apps and migrations
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.74rem', marginBottom: '1.5rem' }}>
            <MapPin size={11} />
            <span>Chandigarh, India · USA · UK · Australia</span>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12, padding: '0.75rem 0.25rem', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem', lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
            color: '#fff', fontWeight: 700, fontSize: '0.95rem',
            borderRadius: 16, border: '1px solid rgba(108,99,255,0.4)',
            textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(108,99,255,0.4)',
          }}>
            <Calendar size={17} />
            Book a Free Discovery Call
            <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)',
              color: '#10B981', fontWeight: 600, fontSize: '0.78rem',
              borderRadius: 14, textDecoration: 'none',
            }}>
              <CreditCard size={14} />
              Pay Online
            </a>
            <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.65)', fontWeight: 600, fontSize: '0.78rem',
              borderRadius: 14, textDecoration: 'none',
            }}>
              <Mail size={14} />
              Get a Quote
            </a>
            <a href="/miracle-websoft.vcf" download="Miracle-Websoft.vcf" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.22)',
              color: 'rgba(180,175,255,0.9)', fontWeight: 600, fontSize: '0.78rem',
              borderRadius: 14, textDecoration: 'none',
            }}>
              <Download size={14} />
              Save Contact
            </a>
          </div>
        </div>

        {/* Social media */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem', textAlign: 'center' }}>Follow Us</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                padding: '0.8rem 0.5rem',
                background: s.bg, border: `1px solid ${s.border}`,
                borderRadius: 14, color: s.color, textDecoration: 'none',
              }}>
                {s.icon}
                <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>What We Do</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {services.map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={13} style={{ color: '#10B981', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust profiles */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>Verified On</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {trustProfiles.map(p => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.8rem 0.9rem',
                background: p.bg, border: `1px solid ${p.border}`,
                borderRadius: 13, textDecoration: 'none',
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.83rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>{p.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MiniStars count={p.stars} />
                    <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)' }}>{p.sub}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.07em',
                    color: p.color, background: `${p.color}15`,
                    border: `1px solid ${p.color}28`,
                    borderRadius: 6, padding: '0.15rem 0.4rem',
                  }}>{p.badge}</span>
                  <ArrowUpRight size={11} style={{ color: 'rgba(255,255,255,0.18)' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>Get In Touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.7rem 0.85rem',
              background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)',
              borderRadius: 12, textDecoration: 'none',
            }}>
              <Mail size={14} style={{ color: '#6C63FF', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>karam@miraclewebsoft.com</span>
            </a>
            <a href={outboundHref('phone', 'tel:+916239269736')} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.7rem 0.85rem',
              background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)',
              borderRadius: 12, textDecoration: 'none',
            }}>
              <Phone size={14} style={{ color: '#6C63FF', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>+91 62392 69736</span>
            </a>
          </div>
        </div>

        {/* Founder link */}
        <Link href="/bio/owner" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, textDecoration: 'none', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6C63FF, #3a3580)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>K</span>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Karam Singh Mehra</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Founder · View personal bio</div>
            </div>
          </div>
          <ArrowUpRight size={14} style={{ color: 'rgba(255,255,255,0.25)' }} />
        </Link>

        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· Shopify Agency for Fashion & Clothing Brands
        </p>
      </div>
    </div>
  )
}
