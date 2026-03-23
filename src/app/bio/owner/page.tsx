import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin, Mail, Phone, Calendar, CreditCard,
  ExternalLink, Star, Award, Briefcase, Globe,
  Linkedin, ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Karam Singh Mehra — Shopify Expert & Founder | Miracle Websoft',
  description: 'Karam Singh Mehra is the founder of Miracle Websoft, a Top Rated Plus Shopify agency on Upwork. 10+ years of Shopify expertise, 600+ projects delivered.',
  alternates: { canonical: 'https://miraclewebsoft.com/bio/owner' },
  robots: { index: true, follow: true },
}

const MEETING_LINK = 'https://calendly.com/karam-4my/15-mints-discussion?month=2026-03'
const PAYMENT_LINK = 'https://razorpay.com/export-link/@miraclewebsoft'

const skills = [
  'Shopify Development',
  'Shopify App Dev',
  'Theme Customisation',
  'Shopify Migration',
  'CRO & Speed',
  'Fashion eCommerce',
  'Liquid / React',
  'TikTok Shop',
]

const badges = [
  { icon: Star, label: 'Top Rated Plus', sub: 'Upwork · Top 3% globally', color: '#14a800' },
  { icon: Award, label: 'Shopify Verified Partner', sub: 'Certified 2024', color: '#96BF48' },
  { icon: Briefcase, label: '600+ Projects', sub: '98% Job Success', color: '#6C63FF' },
]

const links = [
  { label: 'Upwork Profile', href: 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de', icon: ExternalLink },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ecommerce-experts/', icon: Linkedin },
  { label: 'miraclewebsoft.com', href: 'https://miraclewebsoft.com', icon: Globe },
]

export default function OwnerBioPage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0a1e 50%, #0a0a0a 100%)',
      minHeight: '100vh',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      {/* Glow orb */}
      <div style={{
        position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>

        {/* Card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 28,
          padding: '2.5rem 2rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,99,255,0.08)',
        }}>

          {/* Avatar + Name */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: 96, height: 96, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(108,99,255,0.05))',
              border: '2px solid rgba(108,99,255,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 40px rgba(108,99,255,0.2)',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, color: '#6C63FF', fontSize: '2.5rem' }}>K</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#fff', fontSize: '1.75rem', fontWeight: 700,
              marginBottom: '0.35rem', lineHeight: 1.2,
            }}>
              Karam Singh Mehra
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 400, marginBottom: '0.6rem' }}>
              Founder & Lead Shopify Expert
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
              <MapPin size={12} />
              <span>Chandigarh, India · Serving USA, UK & Australia</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1.75rem' }} />

          {/* About */}
          <p style={{
            fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
            fontWeight: 300, textAlign: 'center', marginBottom: '1.75rem',
          }}>
            Building high-converting Shopify stores for clothing and fashion brands since 2015. I personally lead every project — you talk directly to the person building your store.
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <a
              href={MEETING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '0.9rem 1.5rem',
                background: '#6C63FF',
                color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                borderRadius: 14, border: '1px solid rgba(108,99,255,0.5)',
                textDecoration: 'none', transition: 'all 0.2s ease',
                boxShadow: '0 8px 24px rgba(108,99,255,0.3)',
              }}
            >
              <Calendar size={16} />
              Book a Free 15-min Call
              <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
            </a>
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '0.9rem 1.5rem',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                borderRadius: 14, border: '1px solid rgba(255,255,255,0.12)',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
            >
              <CreditCard size={16} />
              Pay Online (Razorpay)
              <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
            </a>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
            {badges.map(b => (
              <div key={b.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: '0.75rem 1rem',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: `${b.color}18`, border: `1px solid ${b.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <b.icon size={15} style={{ color: b.color }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>{b.label}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Expertise</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {skills.map(s => (
                <span key={s} style={{
                  fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: 9999,
                  border: '1px solid rgba(108,99,255,0.25)',
                  background: 'rgba(108,99,255,0.07)',
                  color: 'rgba(255,255,255,0.55)',
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
            <a href="mailto:karam@miraclewebsoft.com" style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
            }}>
              <Mail size={13} style={{ color: 'rgba(108,99,255,0.7)' }} />
              karam@miraclewebsoft.com
            </a>
            <a href="tel:+916239269736" style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
            }}>
              <Phone size={13} style={{ color: 'rgba(108,99,255,0.7)' }} />
              +91 62392 69736
            </a>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1.25rem' }} />

          {/* External links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <l.icon size={13} style={{ color: 'rgba(255,255,255,0.35)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{l.label}</span>
                </div>
                <ArrowUpRight size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', marginTop: '1.5rem' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· Shopify Agency for Fashion Brands
        </p>
      </div>
    </div>
  )
}
