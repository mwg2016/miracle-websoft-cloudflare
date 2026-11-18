import Image from 'next/image'
import Link from 'next/link'
import { outboundHref } from '@/lib/outbound'

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'AI Services', href: '/services/ai' },
  { label: 'Shopify Services', href: '/services/shopify' },
  { label: 'Website Development for Small Business', href: '/website-development' },
  { label: 'Custom Shopify Development', href: '/services/shopify/development' },
  { label: 'Shopify Plus Development', href: '/services/shopify/shopify-plus-development' },
  { label: 'Shopify Theme Customization', href: '/services/shopify/theme-customization' },
  { label: 'Shopify App Development', href: '/services/shopify-app-development' },
  { label: 'Shopify Migrations', href: '/services/shopify-migration' },
  { label: 'Conversion Rate Optimization', href: '/services/conversion-rate-optimization' },
  { label: 'Shopify Speed Optimization', href: '/services/shopify-speed-optimization' },
  { label: 'Custom Web Development', href: '/services/custom-web-development' },
  { label: 'Custom Software (Replace SaaS)', href: '/services/custom-software-development' },
  { label: 'Full Stack Development', href: '/services/full-stack-development' },
  { label: 'API Integration', href: '/services/api-integration' },
  { label: 'CRM & SuiteCRM Development', href: '/services/crm-development' },
  { label: 'Moodle LMS Development', href: '/services/moodle-development' },
  { label: 'Laravel & PHP Development', href: '/services/laravel-development' },
  { label: 'WordPress Plugin Development', href: '/services/wordpress-plugin-development' },
  { label: 'Website Maintenance & Bug Fixing', href: '/services/website-maintenance' },
  { label: 'WordPress Development', href: '/services/wordpress-development' },
]

const marketLinks = [
  { label: 'USA — Website Development', href: '/website-development/us' },
  { label: 'UK — Website Development', href: '/website-development/uk' },
  { label: 'Australia — Website Development', href: '/website-development/au' },
]
const industryLinks = [
  { label: "Women's Clothing & Boutiques", href: '/industries/womens-clothing-boutiques' },
  { label: 'Activewear & Athleisure', href: '/industries/activewear-athleisure' },
  { label: 'Streetwear & Urban Fashion', href: '/industries/streetwear-urban-fashion' },
  { label: 'Sustainable Fashion', href: '/industries/sustainable-ethical-fashion' },
  { label: '+ View all industry guides', href: '/industries' },
]
const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Write a Review', href: '/reviews/write' },
  { label: 'Share Our Services', href: '/share' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'White Label', href: '/white-label' },
  { label: 'Referral Program', href: '/referral' },
  { label: 'Partner Program', href: '/partners' },
]

const partnerHighlights = [
  { label: 'Accountants & CPAs', href: '/partners/accountants' },
  { label: 'Business Formation Lawyers', href: '/partners/business-lawyers' },
  { label: 'Branding Agencies', href: '/partners/branding-agencies' },
  { label: 'Co-working Spaces', href: '/partners/coworking-spaces' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: outboundHref('linkedin', 'https://in.linkedin.com/company/shopify-experts-miracle-websoft'),
    icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Instagram',
    href: outboundHref('external', 'https://www.instagram.com/miracle_websoft/'),
    icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: 'Facebook',
    href: outboundHref('external', 'https://www.facebook.com/miraclewebsoft/'),
    icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'X',
    href: outboundHref('external', 'https://x.com/KaramSingh35'),
    icon: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

const linkCls = 'ftr-link'

export default function Footer() {
  return (
    <footer className="mw-ink">
      {/* Closing CTA — the last chance to convert anyone who scrolled this far. */}
      <div className="mw-container" style={{ paddingTop: '5.5rem', paddingBottom: '4.5rem' }}>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <p className="mw-eyebrow">Next step</p>
            <h2 style={{ fontSize: 'clamp(40px,5.5vw,76px)', maxWidth: '14ch' }}>
              Find out what&apos;s costing you orders.
            </h2>
          </div>
          <div className="grid gap-3">
            <Link href="/free-store-audit" className="ftr-cta">
              <span>
                <span className="ftr-cta-kicker">Free · reply in 48h</span>
                <span className="ftr-cta-title">Get a video teardown of your store</span>
              </span>
              <span aria-hidden className="ftr-cta-arrow">→</span>
            </Link>
            <Link href="/book" className="ftr-cta ftr-cta--quiet">
              <span>
                <span className="ftr-cta-kicker">15 minutes · no pitch deck</span>
                <span className="ftr-cta-title">Book a call with Karam</span>
              </span>
              <span aria-hidden className="ftr-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mw-container" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderTop: '1px solid var(--border)' }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr] gap-10">
          <div>
            <p className="ftr-head">Services</p>
            <ul className="grid gap-2.5">
              {serviceLinks.map(l => <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="ftr-head">Industries</p>
            <ul className="grid gap-2.5">
              {industryLinks.map(l => <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>)}
            </ul>
            <p className="ftr-head mt-8">Markets</p>
            <ul className="grid gap-2.5">
              {marketLinks.map(l => <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="ftr-head">Partners</p>
            <ul className="grid gap-2.5">
              <li><Link href="/partners" className={linkCls}>Partner programme</Link></li>
              {partnerHighlights.map(l => <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="ftr-head">Company</p>
            <ul className="grid gap-2.5">
              {companyLinks.map(l => <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="ftr-head">Talk to us</p>
            <div className="grid gap-2.5">
              <a href="mailto:karam@miraclewebsoft.com" className={linkCls}>karam@miraclewebsoft.com</a>
              <a href="https://wa.me/916239269736" target="_blank" rel="noopener noreferrer" className={linkCls}>WhatsApp +91 6239 269736</a>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'var(--text-4)', marginTop: '0.5rem' }}>
                1st Floor, #607, Gagan Chowk, Chaju Majri,<br />Rajpura, Punjab 140401, India
              </p>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'var(--text-4)' }}>
                Working with brands in the US, Canada, UK, Australia and Europe. Overlap with US mornings and UK afternoons.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mw-container" style={{ paddingTop: '1.25rem', paddingBottom: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ fontSize: '0.8rem', color: 'var(--text-4)' }}>
          <div className="flex items-center gap-3">
            <Image src="/miracle-websoft-logo.png" alt="" width={78} height={32} className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} Miracle Websoft</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={linkCls}>
                <Icon />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href={outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1')} target="_blank" rel="noopener noreferrer" className={linkCls}>Shopify Partner</Link>
            <Link href="/privacy" className={linkCls}>Privacy</Link>
            <Link href="/terms" className={linkCls}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
