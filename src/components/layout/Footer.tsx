'use client'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Custom Shopify Development', href: '/services/shopify-development-clothing-brands' },
  { label: 'Shopify App Development', href: '/services/shopify-app-development' },
  { label: 'Shopify Migrations', href: '/services/shopify-migration' },
  { label: 'CRO & Speed Optimization', href: '/services/shopify-cro-speed' },
]
const industryLinks = [
  { label: "Women's Clothing & Boutiques", href: '/industries/womens-clothing-boutiques' },
  { label: 'Activewear & Athleisure', href: '/industries/activewear-athleisure' },
  { label: 'Streetwear & Urban Fashion', href: '/industries/streetwear-urban-fashion' },
  { label: 'Sustainable Fashion', href: '/industries/sustainable-ethical-fashion' },
  { label: '+ View all industries', href: '/industries/gym-wear-fitness-apparel' },
]
const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Big CTA top */}
      <div className="mw-container" style={{ paddingTop: '6rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p className="mw-eyebrow">START A PROJECT</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1.1, color: '#fff', marginBottom: '1.5rem' }}>
              Let&apos;s build your<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Shopify store.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Free audit included. We will show you exactly what your store is missing and how to fix it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="mw-btn-primary text-base px-8 py-4">Get Free Audit</Link>
            <Link href="https://wa.me/916239269736?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20Shopify%20store%20audit." target="_blank" rel="noopener noreferrer" className="mw-btn-outline text-base px-8 py-4">WhatsApp Us</Link>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div className="mw-container" style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="mw-eyebrow">Services</p>
            <ul className="flex flex-col gap-3 mt-1">
              {serviceLinks.map(l => <li key={l.href}><Link href={l.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')} className="transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mw-eyebrow">Industries</p>
            <ul className="flex flex-col gap-3 mt-1">
              {industryLinks.map(l => <li key={l.href}><Link href={l.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')} className="transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mw-eyebrow">Company</p>
            <ul className="flex flex-col gap-3 mt-1">
              {companyLinks.map(l => <li key={l.href}><Link href={l.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')} className="transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mw-eyebrow">Contact</p>
            <div className="flex flex-col gap-3 mt-1">
              <a href="mailto:karam@miraclewebsoft.com" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }} className="transition-colors hover:text-white">karam@miraclewebsoft.com</a>
              <a href="https://wa.me/916239269736" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }} className="transition-colors hover:text-white">+91 6239 269736</a>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', lineHeight: 1.5 }}>India<br />Serving USA · UK · Australia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mw-container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">Miracle<span style={{ color: 'var(--accent)' }}>Websoft</span></span>
            <span>© 2025 All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Shopify Partner</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
