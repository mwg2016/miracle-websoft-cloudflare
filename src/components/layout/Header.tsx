'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { label: 'Custom Shopify Development', href: '/services/shopify/development' },
  { label: 'Shopify App Development', href: '/services/shopify-app-development' },
  { label: 'Shopify Migrations', href: '/services/shopify-migration' },
  { label: 'CRO & Speed Optimisation', href: '/services/shopify-cro-speed' },
  { label: 'WordPress Development', href: '/services/wordpress-development' },
  { label: 'Custom Web Development', href: '/services/custom-web-development' },
]

const partnerLinks = [
  { label: 'White Label Development', href: '/white-label', badge: 'For Agencies', badgeColor: '#6C63FF' },
  { label: 'Referral Program', href: '/referral', badge: 'Earn 20%', badgeColor: '#10B981' },
]
const industries = [
  { label: 'Fashion & Apparel',     href: '/services/shopify/fashion-apparel' },
  { label: 'Beauty & Cosmetics',    href: '/services/shopify/beauty-cosmetics' },
  { label: 'Health & Wellness',     href: '/services/shopify/health-wellness' },
  { label: 'Home & Furniture',      href: '/services/shopify/home-decor' },
  { label: 'Food & Beverage',       href: '/services/shopify/food-beverage' },
  { label: 'Electronics & Gadgets', href: '/services/shopify/electronics' },
  { label: 'Jewelry & Accessories', href: '/services/shopify/jewelry' },
  { label: 'Sports & Outdoors',     href: '/services/shopify/sports-fitness' },
  { label: 'Pet Supplies',          href: '/services/shopify/pets' },
  { label: 'B2B & Wholesale',       href: '/services/shopify/b2b-wholesale' },
  { label: 'Subscription & DTC',    href: '/services/shopify/subscription-dtc' },
  { label: 'Print on Demand',       href: '/services/shopify/print-on-demand' },
]

const workItems = [
  { label: 'Recent Work', href: '/work' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Reviews', href: '/reviews' },
]

const companyItems = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)

  function closeAllDesktop() {
    setServicesOpen(false)
    setIndustriesOpen(false)
    setWorkOpen(false)
    setCompanyOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false)
      if (workRef.current && !workRef.current.contains(e.target as Node)) setWorkOpen(false)
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}}
    >
      <div className="mw-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-white hover:opacity-80 transition-opacity" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            Miracle<span style={{ color: 'var(--accent)' }}>Websoft</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <div ref={servicesRef} className="relative">
              <button onClick={() => { const next = !servicesOpen; closeAllDesktop(); setServicesOpen(next) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: servicesOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                Services <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl py-2 z-50" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-sm transition-colors rounded-lg mx-1" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }} onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.target as HTMLElement).style.background = 'transparent' }}>
                      {s.label}
                    </Link>
                  ))}
                  <div style={{ margin: '6px 8px 4px', borderTop: '1px solid rgba(255,255,255,0.08)' }} />
                  <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', padding: '0.4rem 1rem 0.2rem' }}>For Partners</p>
                  {partnerLinks.map(p => (
                    <Link key={p.href} href={p.href} onClick={() => setServicesOpen(false)} className="flex items-center justify-between px-4 py-2.5 text-sm rounded-lg mx-1 transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                      {p.label}
                      <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', color: p.badgeColor, background: `${p.badgeColor}18`, border: `1px solid ${p.badgeColor}30`, borderRadius: 9999, padding: '0.1rem 0.45rem' }}>{p.badge}</span>
                    </Link>
                  ))}
                  <div style={{ margin: '6px 8px 4px', borderTop: '1px solid rgba(255,255,255,0.08)' }} />
                  <Link href="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-sm rounded-lg mx-1 font-medium" style={{ color: '#6c63ff' }} onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(108,99,255,0.08)' }} onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent' }}>
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            <div ref={industriesRef} className="relative">
              <button onClick={() => { const next = !industriesOpen; closeAllDesktop(); setIndustriesOpen(next) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: industriesOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                Industries <ChevronDown size={13} className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl py-2 z-50 max-h-[70vh] overflow-y-auto" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {industries.map(i => (
                    <Link key={i.href} href={i.href} onClick={() => setIndustriesOpen(false)} className="block px-4 py-2.5 text-sm transition-colors rounded-lg mx-1" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }} onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.target as HTMLElement).style.background = 'transparent' }}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-sm font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}>
              Pricing
            </Link>

            <div ref={workRef} className="relative">
              <button onClick={() => { const next = !workOpen; closeAllDesktop(); setWorkOpen(next) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: workOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                Our Work <ChevronDown size={13} className={`transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`} />
              </button>
              {workOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl py-2 z-50" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {workItems.map(w => (
                    <Link key={w.href} href={w.href} onClick={() => setWorkOpen(false)} className="block px-4 py-2.5 text-sm transition-colors rounded-lg mx-1" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }} onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.target as HTMLElement).style.background = 'transparent' }}>
                      {w.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={companyRef} className="relative">
              <button onClick={() => { const next = !companyOpen; closeAllDesktop(); setCompanyOpen(next) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: companyOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                Company <ChevronDown size={13} className={`transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl py-2 z-50" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {companyItems.map(c => (
                    <Link key={c.href} href={c.href} onClick={() => setCompanyOpen(false)} className="block px-4 py-2.5 text-sm transition-colors rounded-lg mx-1" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }} onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.target as HTMLElement).style.background = 'transparent' }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="sm:hidden text-xs font-medium" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Free Audit
            </Link>
            <Link href="/contact" className="mw-btn-primary hidden sm:inline-flex text-xs px-4 py-2.5 sm:text-sm sm:px-5">
              Get Free Audit
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

    </header>

      {/* Mobile menu — outside <header> to avoid backdrop-filter containing-block trap */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 overflow-y-auto z-40" style={{ background: '#0a0a0a' }}>
          <div className="mw-container py-6 flex flex-col gap-1">
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {services.map(s => <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</Link>)}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '0.25rem', paddingTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.25rem' }}>For Partners</p>
                    {partnerLinks.map(p => (
                      <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm flex items-center justify-between" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {p.label}
                        <span style={{ fontSize: '0.58rem', fontWeight: 700, color: p.badgeColor, background: `${p.badgeColor}18`, border: `1px solid ${p.badgeColor}28`, borderRadius: 9999, padding: '0.1rem 0.45rem' }}>{p.badge}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium" style={{ color: '#6c63ff' }}>View all services →</Link>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="flex items-center justify-between w-full py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Industries <ChevronDown size={16} className={`transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {industries.map(i => <Link key={i.href} href={i.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{i.label}</Link>)}
                </div>
              )}
            </div>

            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Pricing</Link>

            <div>
              <button onClick={() => setMobileWorkOpen(!mobileWorkOpen)} className="flex items-center justify-between w-full py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Our Work <ChevronDown size={16} className={`transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileWorkOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {workItems.map(w => <Link key={w.href} href={w.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{w.label}</Link>)}
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="flex items-center justify-between w-full py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Company <ChevronDown size={16} className={`transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCompanyOpen && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {companyItems.map(c => <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.label}</Link>)}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mw-btn-primary mt-6 justify-center">Get Free Audit</Link>
          </div>
        </div>
      )}
    </>
  )
}
