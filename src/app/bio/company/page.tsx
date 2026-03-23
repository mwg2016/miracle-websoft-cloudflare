import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin, Mail, Phone, Calendar, CreditCard,
  ExternalLink, Star, Award, Users, Globe,
  ArrowUpRight, CheckCircle2, Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Miracle Websoft — Shopify Agency for Fashion Brands',
  description: 'Miracle Websoft is a Top Rated Plus Shopify agency specialising in clothing and fashion brands. 600+ projects, 98% job success, 16 team members. Based in India, serving USA, UK & Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/bio/company' },
  robots: { index: true, follow: true },
}

const MEETING_LINK = 'https://calendly.com/karam-4my/15-mints-discussion?month=2026-03'
const PAYMENT_LINK = 'https://razorpay.com/export-link/@miraclewebsoft'

const stats = [
  { value: '600+', label: 'Projects Delivered' },
  { value: '98%', label: 'Job Success' },
  { value: '10+', label: 'Years Active' },
  { value: '16', label: 'Specialists' },
]

const services = [
  'Custom Shopify Development',
  'Shopify App Development',
  'Platform Migration (Shopify)',
  'CRO & Speed Optimisation',
  'Theme Design & Customisation',
  'TikTok Shop Integration',
]

const profiles = [
  { label: 'Upwork Agency', href: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/', sub: 'Top Rated Plus' },
  { label: 'Shopify Partner', href: 'https://www.shopify.com/partners/directory/partner/miracle-websoft1', sub: 'Verified 2024' },
  { label: 'Clutch Reviews', href: 'https://clutch.co/profile/miracle-websoft', sub: '5-star rated' },
  { label: 'Trustpilot', href: 'https://www.trustpilot.com/review/miraclewebsoft.com', sub: 'Verified reviews' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft' },
  { label: 'Instagram', href: 'https://www.instagram.com/miracle_websoft/' },
  { label: 'Facebook', href: 'https://www.facebook.com/miraclewebsoft/' },
  { label: 'Website', href: 'https://miraclewebsoft.com' },
]

export default function CompanyBioPage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #070d14 50%, #0a0a0a 100%)',
      minHeight: '100vh',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', bottom: '10%', right: '20%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 540, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>

        {/* Main card */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 28,
          padding: '2.5rem 2rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(16,185,129,0.06)',
          marginBottom: '1rem',
        }}>

          {/* Logo + Name */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: 80, height: 80, borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(16,185,129,0.1))',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 8px 32px rgba(108,99,255,0.2)',
            }}>
              <span style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontWeight: 700, color: '#fff', fontSize: '1.6rem', letterSpacing: '-0.02em',
              }}>MW</span>
            </div>
            <div style={{ marginBottom: '0.25rem' }}>
              <span style={{
                fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(16,185,129,0.8)',
                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 9999, padding: '0.2rem 0.65rem',
              }}>Shopify Agency</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#fff', fontSize: '1.7rem', fontWeight: 700,
              marginTop: '0.85rem', marginBottom: '0.35rem', lineHeight: 1.2,
            }}>
              Miracle Websoft
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontWeight: 300, marginBottom: '0.6rem' }}>
              Fashion-focused Shopify development since 2015
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
              <MapPin size={11} />
              <span>Chandigarh, India · USA · UK · Australia</span>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem',
            marginBottom: '1.75rem',
          }}>
            {stats.map(s => (
              <div key={s.label} style={{
                textAlign: 'center', padding: '0.9rem 0.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
              }}>
                <div style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.4rem', fontWeight: 700, color: '#fff', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.3rem', lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '1.75rem' }} />

          {/* Action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <a
              href={MEETING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '0.95rem 1.5rem',
                background: 'linear-gradient(135deg, #6C63FF, #5A52E0)',
                color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                borderRadius: 14, border: 'none',
                textDecoration: 'none', transition: 'all 0.2s ease',
                boxShadow: '0 8px 24px rgba(108,99,255,0.35)',
              }}
            >
              <Calendar size={16} />
              Book a Free Discovery Call
              <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
            </a>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.8rem 1rem',
                  background: 'rgba(16,185,129,0.08)',
                  color: '#10B981', fontWeight: 600, fontSize: '0.82rem',
                  borderRadius: 12, border: '1px solid rgba(16,185,129,0.2)',
                  textDecoration: 'none',
                }}
              >
                <CreditCard size={14} />
                Pay Online
              </a>
              <a
                href="https://miraclewebsoft.com/contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.8rem 1rem',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.82rem',
                  borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                }}
              >
                <Mail size={14} />
                Get a Quote
              </a>
            </div>
          </div>

          {/* Services */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.85rem' }}>
              What We Do
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={13} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '1.75rem' }} />

          {/* Trust profiles */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.85rem' }}>
              Our Profiles
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {profiles.map(p => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                    textDecoration: 'none',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{p.label}</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', marginLeft: '0.5rem' }}>{p.sub}</span>
                  </div>
                  <ArrowUpRight size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
            <a href="mailto:karam@miraclewebsoft.com" style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
            }}>
              <Mail size={13} style={{ color: 'rgba(108,99,255,0.7)' }} />
              karam@miraclewebsoft.com
            </a>
            <a href="tel:+916239269736" style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
            }}>
              <Phone size={13} style={{ color: 'rgba(108,99,255,0.7)' }} />
              +91 62392 69736
            </a>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '1.25rem' }} />

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {socialLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.72rem', padding: '0.3rem 0.75rem', borderRadius: 9999,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}
              >
                <Globe size={10} />
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Owner card link */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16,
          padding: '1.25rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, color: '#6C63FF', fontSize: '1rem' }}>K</span>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>Meet the Founder</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>Karam Singh Mehra · Personal Bio</div>
            </div>
          </div>
          <Link href="/bio/owner" style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            fontSize: '0.75rem', color: 'rgba(108,99,255,0.8)',
            textDecoration: 'none', fontWeight: 500,
          }}>
            View <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.5rem' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· Shopify Agency for Fashion &amp; Clothing Brands
        </p>
      </div>
    </div>
  )
}
