'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Search, X } from 'lucide-react'

const services = [
  { label: 'Conversion rate optimisation', note: 'More orders from the traffic you have', href: '/services/conversion-rate-optimization' },
  { label: 'Speed optimisation', note: 'Faster pages, better Core Web Vitals', href: '/services/shopify-speed-optimization' },
  { label: 'Store build & redesign', note: 'Custom Shopify & Shopify Plus themes', href: '/services/shopify/development' },
  { label: 'Migration to Shopify', note: 'Woo, Wix, BigCommerce, Magento', href: '/services/shopify-migration' },
  { label: 'Custom Shopify apps', note: 'Private apps, Functions, integrations', href: '/services/shopify-app-development' },
  { label: 'AI automation', note: 'Support, ops and content workflows', href: '/services/ai' },
]

const moreServices = [
  { label: 'All Shopify services', href: '/services/shopify' },
  { label: 'WordPress development', href: '/services/wordpress-development' },
  { label: 'Custom web development', href: '/services/custom-web-development' },
  { label: 'White-label for agencies', href: '/white-label' },
  { label: 'Referral programme', href: '/referral' },
]

const industries = [
  { label: 'Fashion & apparel', href: '/services/shopify/fashion-apparel' },
  { label: 'Beauty & cosmetics', href: '/services/shopify/beauty-cosmetics' },
  { label: 'Health & wellness', href: '/services/shopify/health-wellness' },
  { label: 'Home & furniture', href: '/services/shopify/home-decor' },
  { label: 'Food & beverage', href: '/services/shopify/food-beverage' },
  { label: 'Jewellery & accessories', href: '/services/shopify/jewelry' },
  { label: 'B2B & wholesale', href: '/services/shopify/b2b-wholesale' },
  { label: 'Subscription & DTC', href: '/services/shopify/subscription-dtc' },
]

const workItems = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Recent projects', href: '/work' },
  { label: 'Client stores', href: '/my-portfolio' },
  { label: 'Client reviews', href: '/reviews' },
]

const companyItems = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
]

// Black Friday 2026 is Nov 27; the promo strip retires itself after Cyber Monday.
const BF_ENDS = new Date('2026-12-01T00:00:00Z').getTime()

type OpenMenu = 'services' | 'work' | 'company' | 'search' | null

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [showPromo, setShowPromo] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<{ title: string; href: string; type: string }[]>([])
  const [activeSuggestion, setActiveSuggestion] = useState(-1)
  const navRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setShowPromo(Date.now() < BF_ENDS && !pathname?.startsWith('/black-friday')) }, [pathname])
  useEffect(() => { setOpen(null); setMobileOpen(false) }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => { if (open === 'search') searchInputRef.current?.focus() }, [open])

  // Live suggestions while typing (debounced; stale requests are aborted).
  useEffect(() => {
    const q = searchQuery.trim()
    if (q.length < 2) return
    const controller = new AbortController()
    const t = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        .then(res => (res.ok ? res.json() : { results: [] }))
        .then(data => setSuggestions(data.results ?? []))
        .catch(() => {})
    }, 150)
    return () => { clearTimeout(t); controller.abort() }
  }, [searchQuery])

  function toggle(menu: OpenMenu) { setOpen(o => (o === menu ? null : menu)) }

  function goTo(href: string) {
    setOpen(null)
    setSearchQuery('')
    setSuggestions([])
    router.push(href)
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (activeSuggestion >= 0 && suggestions[activeSuggestion]) return goTo(suggestions[activeSuggestion].href)
    const q = searchQuery.trim()
    if (q) goTo(`/search?q=${encodeURIComponent(q)}`)
  }

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!suggestions.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveSuggestion(i => (i + 1) % suggestions.length) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveSuggestion(i => (i <= 0 ? suggestions.length : i) - 1) }
  }

  const navBtn = 'hdr-link inline-flex items-center gap-1'
  const offset = showPromo ? 100 : 64

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50" ref={navRef}>
        {showPromo && (
          <Link href="/black-friday-sale-setup" className="hdr-promo">
            <span className="hdr-promo-tag">BFCM</span>
            <span className="truncate">Black Friday is Nov 27. We set up your whole sale in 48 hours, $150 fixed.</span>
            <ArrowRight size={14} className="shrink-0" />
          </Link>
        )}
        <header className="hdr">
          <div className="mw-container">
            <div className="flex items-center justify-between h-16 gap-6">
              <Link href="/" aria-label="Miracle Websoft home" className="flex shrink-0 items-center gap-2.5">
                <Image src="/miracle-websoft-logo.png" alt="" width={126} height={52} priority className="h-7 w-auto" />
                <span className="hdr-wordmark">Miracle Websoft</span>
              </Link>

              <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
                <div className="relative">
                  <button className={navBtn} aria-expanded={open === 'services'} onClick={() => toggle('services')}>
                    Services <ChevronDown size={14} className={`transition-transform ${open === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {open === 'services' && (
                    <div className="hdr-panel hdr-mega">
                      <div>
                        <p className="hdr-panel-label">What we do</p>
                        <ul className="grid gap-1">
                          {services.map(s => (
                            <li key={s.href}>
                              <Link href={s.href} className="hdr-mega-item">
                                <span className="font-medium">{s.label}</span>
                                <span className="hdr-mega-note">{s.note}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="hdr-panel-label">By industry</p>
                        <ul className="grid gap-0.5">
                          {industries.map(i => <li key={i.href}><Link href={i.href} className="hdr-panel-link">{i.label}</Link></li>)}
                          <li><Link href="/industries" className="hdr-panel-link hdr-panel-more">All industries →</Link></li>
                        </ul>
                      </div>
                      <div className="hdr-mega-aside">
                        <p className="hdr-panel-label">Also</p>
                        <ul className="grid gap-0.5 mb-5">
                          {moreServices.map(i => <li key={i.href}><Link href={i.href} className="hdr-panel-link">{i.label}</Link></li>)}
                        </ul>
                        <Link href="/free-store-audit" className="hdr-offer">
                          <span className="hdr-offer-kicker">Free · 48h turnaround</span>
                          <span className="hdr-offer-title">Get a 5-minute video teardown of your store</span>
                          <span className="hdr-offer-cta">Request it <ArrowRight size={14} /></span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button className={navBtn} aria-expanded={open === 'work'} onClick={() => toggle('work')}>
                    Work <ChevronDown size={14} className={`transition-transform ${open === 'work' ? 'rotate-180' : ''}`} />
                  </button>
                  {open === 'work' && (
                    <div className="hdr-panel w-56">
                      {workItems.map(w => <Link key={w.href} href={w.href} className="hdr-panel-link">{w.label}</Link>)}
                    </div>
                  )}
                </div>

                <Link href="/pricing" className="hdr-link">Pricing</Link>
                <Link href="/free-store-audit" className="hdr-link">Free audit</Link>

                <div className="relative">
                  <button className={navBtn} aria-expanded={open === 'company'} onClick={() => toggle('company')}>
                    Company <ChevronDown size={14} className={`transition-transform ${open === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {open === 'company' && (
                    <div className="hdr-panel w-52">
                      {companyItems.map(c => <Link key={c.href} href={c.href} className="hdr-panel-link">{c.label}</Link>)}
                    </div>
                  )}
                </div>
              </nav>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <button onClick={() => toggle('search')} className="hdr-icon" aria-label="Search the site" aria-expanded={open === 'search'}>
                    <Search size={18} />
                  </button>
                  {open === 'search' && (
                    <form onSubmit={handleSearch} role="search" className="hdr-panel hdr-panel--right p-2" style={{ width: 'min(24rem, calc(100vw - 2rem))' }}>
                      <div className="flex items-center gap-2">
                        <Search size={15} className="shrink-0 ml-2" style={{ color: 'var(--text-4)' }} />
                        <input
                          ref={searchInputRef}
                          type="search"
                          value={searchQuery}
                          onChange={e => {
                            setSearchQuery(e.target.value)
                            setActiveSuggestion(-1)
                            if (e.target.value.trim().length < 2) setSuggestions([])
                          }}
                          onKeyDown={handleSearchKeyDown}
                          placeholder="Search services, guides, work…"
                          aria-label="Search the site"
                          aria-controls="header-search-suggestions"
                          aria-activedescendant={activeSuggestion >= 0 ? `header-search-suggestion-${activeSuggestion}` : undefined}
                          autoComplete="off"
                          className="flex-1 min-w-0 bg-transparent py-2 text-sm outline-none"
                          style={{ color: 'var(--text-1)' }}
                        />
                        <button type="submit" className="mw-btn-primary shrink-0" style={{ minHeight: 36, padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>Search</button>
                      </div>
                      {suggestions.length > 0 && (
                        <div id="header-search-suggestions" role="listbox" className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                          {suggestions.map((s, i) => (
                            <Link
                              key={s.href}
                              id={`header-search-suggestion-${i}`}
                              role="option"
                              aria-selected={i === activeSuggestion}
                              href={s.href}
                              onClick={e => { e.preventDefault(); goTo(s.href) }}
                              onMouseEnter={() => setActiveSuggestion(i)}
                              className="block px-3 py-2 rounded"
                              style={{ background: i === activeSuggestion ? 'var(--bg-deep)' : 'transparent' }}
                            >
                              <span className="block text-sm truncate" style={{ color: 'var(--text-1)' }}>{s.title}</span>
                              <span className="block mw-num" style={{ fontSize: '0.62rem', textTransform: 'uppercase' }}>{s.type}</span>
                            </Link>
                          ))}
                          <button type="button" onClick={() => goTo(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} className="block w-full text-left px-3 py-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                            See all results for “{searchQuery.trim()}” →
                          </button>
                        </div>
                      )}
                    </form>
                  )}
                </div>
                <Link href="/book" className="mw-btn-accent hidden sm:inline-flex" style={{ minHeight: 40, padding: '0.55rem 1rem', fontSize: '0.86rem' }}>
                  Book a call <ArrowUpRight size={15} />
                </Link>
                <div className="lg:hidden">
                  <button onClick={() => setMobileOpen(o => !o)} className="hdr-icon" aria-label="Toggle menu" aria-expanded={mobileOpen}>
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 overflow-y-auto z-40" style={{ background: 'var(--bg)', top: offset }}>
          <div className="mw-container py-6 flex flex-col">
            <Link href="/free-store-audit" className="hdr-offer mb-6">
              <span className="hdr-offer-kicker">Free · 48h turnaround</span>
              <span className="hdr-offer-title">Get a 5-minute video teardown of your store</span>
              <span className="hdr-offer-cta">Request it <ArrowRight size={14} /></span>
            </Link>
            {[
              { key: 'services', label: 'Services', items: [...services, ...moreServices] },
              { key: 'industries', label: 'Industries', items: [...industries, { label: 'All industries', href: '/industries' }] },
              { key: 'work', label: 'Work', items: workItems },
              { key: 'company', label: 'Company', items: companyItems },
            ].map(g => (
              <div key={g.key} style={{ borderBottom: '1px solid var(--border)' }}>
                <button onClick={() => setMobileSection(s => (s === g.key ? null : g.key))} className="flex items-center justify-between w-full py-4 text-lg" style={{ color: 'var(--text-1)', fontWeight: 500 }} aria-expanded={mobileSection === g.key}>
                  {g.label} <ChevronDown size={18} className={`transition-transform ${mobileSection === g.key ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === g.key && (
                  <div className="pb-3 flex flex-col">
                    {g.items.map(i => <Link key={i.href} href={i.href} className="py-2.5 pl-1" style={{ color: 'var(--text-2)' }}>{i.label}</Link>)}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className="py-4 text-lg" style={{ color: 'var(--text-1)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>Pricing</Link>
            <div className="grid gap-3 mt-8">
              <Link href="/book" className="mw-btn-accent">Book a 15-min call <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="mw-btn-outline">Send a project brief</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
