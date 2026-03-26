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
const industries = [
  { label: "Women's Clothing & Boutiques", href: '/industries/womens-clothing-boutiques' },
  { label: 'Activewear & Athleisure', href: '/industries/activewear-athleisure' },
  { label: 'Streetwear & Urban Fashion', href: '/industries/streetwear-urban-fashion' },
  { label: 'Sustainable Fashion', href: '/industries/sustainable-ethical-fashion' },
  { label: 'Gym Wear & Fitness', href: '/industries/gym-wear-fitness-apparel' },
  { label: 'Yoga Wear & Wellness', href: '/industries/yoga-wear-wellness' },
  { label: "Kids & Children's Clothing", href: '/industries/kids-children-clothing' },
  { label: 'Plus-Size & Inclusive', href: '/industries/plus-size-inclusive-apparel' },
  { label: 'Sportswear & Performance', href: '/industries/sportswear-performance-apparel' },
  { label: 'Menswear & Casual', href: '/industries/menswear-casual-clothing' },
  { label: 'Occasion Wear & Luxury', href: '/industries/occasion-wear-luxury-fashion' },
  { label: 'Online Boutiques & Multi-Brand', href: '/industries/online-boutiques-multi-brand' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false)
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
              <button onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: servicesOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
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
                  <Link href="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-sm rounded-lg mx-1 font-medium" style={{ color: '#6c63ff' }} onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(108,99,255,0.08)' }} onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent' }}>
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            <div ref={industriesRef} className="relative">
              <button onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false) }} className="flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: industriesOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}>
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

            {[{ l: 'Tools', h: '/tools' }, { l: 'Case Studies', h: '/case-studies' }, { l: 'Blog', h: '/blog' }, { l: 'About', h: '/about' }, { l: 'Careers', h: '/careers' }].map(({ l, h }) => (
              <Link key={h} href={h} className="text-sm font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}>
                {l}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="mw-btn-primary hidden sm:inline-flex text-sm">
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
            {[{ l: 'Tools', h: '/tools' }, { l: 'Case Studies', h: '/case-studies' }, { l: 'Blog', h: '/blog' }, { l: 'About', h: '/about' }, { l: 'Careers', h: '/careers' }].map(({ l, h }) => (
              <Link key={h} href={h} onClick={() => setMobileOpen(false)} className="py-3 text-base font-semibold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{l}</Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mw-btn-primary mt-6 justify-center">Get Free Audit</Link>
          </div>
        </div>
      )}
    </>
  )
}
