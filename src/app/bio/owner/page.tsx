import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Mail, Phone, Calendar, CreditCard, ArrowUpRight, CheckCircle2, Download } from 'lucide-react'
import { breadcrumb, person, renderJsonLd } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Karam Singh Mehra — Shopify Expert & Founder | Miracle Websoft',
  description: 'Karam Singh Mehra is the founder of Miracle Websoft, a Top Rated Plus Shopify agency on Upwork. 10+ years of Shopify expertise, 600+ projects delivered.',
  alternates: { canonical: 'https://miraclewebsoft.com/bio/owner' },
  robots: { index: true, follow: true },
}

const MEETING_LINK = outboundHref('calendly', 'https://calendly.com/karam-4my/15-mints-discussion?month=2026-03')
const PAYMENT_LINK = outboundHref('external', 'https://razorpay.com/export-link/@miraclewebsoft')

const skills = [
  'Shopify Development', 'Shopify App Dev', 'Theme Customisation',
  'Shopify Migration', 'CRO & Speed', 'Fashion eCommerce',
  'Liquid / React', 'TikTok Shop',
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/'),
    color: '#0077B5',
    bg: 'rgba(0,119,181,0.12)',
    border: 'rgba(0,119,181,0.25)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: outboundHref('external', 'https://www.instagram.com/miracle_websoft/'),
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
    href: outboundHref('external', 'https://www.facebook.com/miraclewebsoft/'),
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
    href: outboundHref('external', 'https://x.com/miraclewebsoft'),
    color: '#fff',
    bg: 'rgba(255,255,255,0.07)',
    border: 'rgba(255,255,255,0.15)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

const profileLinks = [
  {
    label: 'Upwork',
    sub: 'Top Rated Plus · 4.9★ · 600+ reviews',
    href: outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de'),
    color: '#14a800',
    bg: 'rgba(20,168,0,0.07)',
    border: 'rgba(20,168,0,0.18)',
    badge: 'TOP RATED PLUS',
    badgeColor: '#14a800',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.869v7.717c-.002 1.309-1.068 2.375-2.373 2.375s-2.371-1.066-2.371-2.375V3.492H2.349v7.717c0 2.555 2.086 4.641 4.639 4.641s4.641-2.086 4.641-4.641v-1.296c.537 1.116 1.201 2.236 2.008 3.226l-1.703 7.994h1.826l1.26-5.926c1.08.558 2.219.858 3.541.858C20.553 16 22.5 14.055 22.5 12.001c0-2.057-1.947-4-3.939-3.983z"/>
      </svg>
    ),
  },
  {
    label: 'Shopify Partner',
    sub: 'Verified Partner · Certified 2024',
    href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1'),
    color: '#96BF48',
    bg: 'rgba(150,191,72,0.07)',
    border: 'rgba(150,191,72,0.18)',
    badge: 'VERIFIED',
    badgeColor: '#96BF48',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.609-2.625-17.739c-.018-.129-.131-.218-.265-.218-.131 0-2.429-.049-2.429-.049s-1.614-1.558-1.791-1.737v21.304zM11.49.627C11.49.627 10.025.2 8.432.2 4.729.2 2.904 2.613 2.904 5.007c0 .153.009.301.023.447C1.36 5.81.02 6.831.02 8.291c0 1.93 1.513 2.787 2.793 3.486.891.488 1.722.942 1.722 1.879 0 .988-1.013 1.46-2.034 1.46-.989 0-1.762-.338-1.762-.338l-.342 1.63s.915.383 2.183.383c2.048 0 3.684-.998 3.684-2.971 0-1.979-1.571-2.871-2.876-3.584-.836-.454-1.558-.847-1.558-1.6 0-.828.888-1.288 2.023-1.288.818 0 1.54.203 1.54.203L11.49.627z"/>
      </svg>
    ),
  },
  {
    label: 'Clutch',
    sub: '5.0★ rating · Verified agency',
    href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft'),
    color: '#e63329',
    bg: 'rgba(230,51,41,0.07)',
    border: 'rgba(230,51,41,0.18)',
    badge: '5.0 ★',
    badgeColor: '#e63329',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/>
      </svg>
    ),
  },
]

function StarRating({ rating, count }: { rating: number; count: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
      <div style={{ display: 'flex', gap: '0.1rem' }}>
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= Math.round(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)'}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{rating} · {count} reviews</span>
    </div>
  )
}

const jsonLd = renderJsonLd([
  person({
    name: 'Karam Singh Mehra',
    url: 'https://miraclewebsoft.com/bio/owner',
    jobTitle: 'Founder & Lead Shopify Expert',
    description:
      'Founder of Miracle Websoft — 10+ years of Shopify expertise, 600+ projects delivered. Top Rated Plus on Upwork.',
    image: 'https://miraclewebsoft.com/icon-512.png',
    sameAs: [
      'https://www.linkedin.com/in/ecommerce-experts/',
      'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
      'https://www.instagram.com/miracle_websoft/',
      'https://www.facebook.com/miraclewebsoft/',
      'https://x.com/miraclewebsoft',
    ],
    worksFor: { name: 'Miracle Websoft', url: 'https://miraclewebsoft.com' },
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Bio', url: '/bio/owner' },
    { name: 'Karam Singh Mehra', url: '/bio/owner' },
  ]),
])

export default function OwnerBioPage() {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #0a0a0a 0%, #0d0a1a 40%, #0a0f0a 100%)',
      minHeight: '100vh',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Background glow */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,99,255,0.1) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,168,0,0.06) 0%, transparent 70%)' }} />
      </div>

      <div style={{ maxWidth: 500, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>

        {/* Profile header card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          padding: '2.25rem 2rem 1.75rem',
          marginBottom: '0.75rem',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}>
          {/* Avatar */}
          <div style={{ position: 'relative', width: 88, height: 88, margin: '0 auto 1.25rem' }}>
            <div style={{
              width: 88, height: 88, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6C63FF 0%, #3a3580 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 3px rgba(108,99,255,0.2), 0 0 40px rgba(108,99,255,0.25)',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, color: '#fff', fontSize: '2.2rem' }}>K</span>
            </div>
            {/* Online indicator */}
            <div style={{
              position: 'absolute', bottom: 4, right: 4,
              width: 14, height: 14, borderRadius: '50%',
              background: '#14a800', border: '2px solid #0a0a0a',
            }} />
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.25rem', lineHeight: 1.2 }}>
            Karam Singh Mehra
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 400, marginBottom: '0.75rem' }}>
            Founder & Lead Shopify Expert
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.28)', fontSize: '0.75rem', marginBottom: '1.25rem' }}>
            <MapPin size={11} />
            <span>Chandigarh, India | Serving USA, UK & Australia</span>
          </div>

          {/* Upwork Top Rated Plus badge — hero */}
          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(20,168,0,0.08)', border: '1px solid rgba(20,168,0,0.25)',
            borderRadius: 14, padding: '0.75rem 1.25rem', marginBottom: '0.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#14a800' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#14a800' }}>Top Rated Plus on Upwork</span>
            </div>
            <StarRating rating={4.9} count="600+" />
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem' }}>Top 3% of all Upwork freelancers globally</span>
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
            Book a Free 15-Min Call
            <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.9rem',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.83rem',
              borderRadius: 14, border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
            }}>
              <CreditCard size={15} />
              Pay Invoice
            </a>
            <a href="/karam-mehra.vcf" download="Karam-Singh-Mehra.vcf" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.9rem',
              background: 'rgba(108,99,255,0.08)',
              color: 'rgba(180,175,255,0.9)', fontWeight: 600, fontSize: '0.83rem',
              borderRadius: 14, border: '1px solid rgba(108,99,255,0.22)',
              textDecoration: 'none',
            }}>
              <Download size={15} />
              Save Contact
            </a>
          </div>
        </div>

        {/* Social media icons row */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem', textAlign: 'center' }}>Connect with me</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                padding: '0.8rem 0.5rem',
                background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: 14,
                color: s.color,
                textDecoration: 'none',
              }}>
                {s.icon}
                <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Profile / trust links */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>Verified Profiles</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {profileLinks.map(p => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.85rem',
                padding: '0.85rem 1rem',
                background: p.bg, border: `1px solid ${p.border}`,
                borderRadius: 14, textDecoration: 'none',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: `${p.color}15`, border: `1px solid ${p.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: p.color,
                }}>
                  {p.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.1rem' }}>{p.label}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)' }}>{p.sub}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <span style={{
                    fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em',
                    color: p.badgeColor, background: `${p.badgeColor}15`,
                    border: `1px solid ${p.badgeColor}25`,
                    borderRadius: 6, padding: '0.15rem 0.4rem',
                  }}>{p.badge}</span>
                  <ArrowUpRight size={11} style={{ color: 'rgba(255,255,255,0.2)' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>Expertise</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {skills.map(s => (
              <span key={s} style={{
                fontSize: '0.73rem', padding: '0.3rem 0.75rem', borderRadius: 9999,
                border: '1px solid rgba(108,99,255,0.22)',
                background: 'rgba(108,99,255,0.08)',
                color: 'rgba(255,255,255,0.6)', fontWeight: 400,
              }}>{s}</span>
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
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.85rem' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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

        {/* Company link */}
        <Link href="/bio/company" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, textDecoration: 'none', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(16,185,129,0.1))',
              border: '1px solid rgba(108,99,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>MW</span>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Miracle Websoft</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>View company bio</div>
            </div>
          </div>
          <ArrowUpRight size={14} style={{ color: 'rgba(255,255,255,0.25)' }} />
        </Link>

        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· Shopify Agency for Fashion Brands
        </p>
      </div>
    </div>
  )
}
