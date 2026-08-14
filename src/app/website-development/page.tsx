import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import HeroLocal from '@/components/website-dev/HeroLocal'
import StatsBar from '@/components/website-dev/StatsBar'
import HandHoldingSection from '@/components/website-dev/HandHoldingSection'
import PackageTiers from '@/components/website-dev/PackageTiers'
import ReferencesGrid from '@/components/website-dev/ReferencesGrid'
import CityFaq, { getPageFaqs } from '@/components/website-dev/CityFaq'
import QuoteSection from '@/components/website-dev/QuoteSection'
import { countries, citiesInCountry } from '@/data/website-dev-cities'
import { breadcrumb, faqPage, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Website Development for Small Business — $299 All-In | Miracle Websoft',
  description:
    'Website development for small businesses across the US, UK and Australia. Domain + hosting + design + SEO from $299. Live in 7 days. We handle everything.',
  alternates: { canonical: 'https://miraclewebsoft.com/website-development' },
  openGraph: {
    title: 'Website Development for Small Business — $299 All-In',
    description:
      'Done-for-you websites for small businesses across the US, UK and AU. Domain + hosting + design included. Live in 7 days.',
    url: 'https://miraclewebsoft.com/website-development',
    type: 'website',
  },
}

const countryCards = [
  { code: 'us' as const, flag: '🇺🇸', cityCount: '50 cities' },
  { code: 'uk' as const, flag: '🇬🇧', cityCount: '50 cities' },
  { code: 'au' as const, flag: '🇦🇺', cityCount: '50 cities' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Website Development for Small Business — Miracle Websoft',
    description:
      'Done-for-you website packages for small businesses across the US, UK and Australia. Domain + hosting + design + SEO included from $299.',
    url: 'https://miraclewebsoft.com/website-development',
    type: 'CollectionPage',
  }),
  service({
    name: 'Small business website development',
    description:
      'All-in-one website development package for small businesses. Domain, hosting, design, SEO and content included.',
    url: '/website-development',
    serviceType: 'Website development',
    areaServed: ['United States', 'United Kingdom', 'Australia'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Website Development', url: '/website-development' },
  ]),
  faqPage(getPageFaqs()),
])

export default function WebsiteDevelopmentHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <HeroLocal
        eyebrow="WEBSITE DEVELOPMENT — US · UK · AU"
        title="A real website for your small business."
        titleAccent="Without learning a single technical thing."
        subtext="We build complete websites for small businesses across the United States, United Kingdom and Australia — domain, hosting, design, SEO and content all included. You tell us about your business. We launch the site within 7 to 14 days."
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PACKAGES — USD</span>
            <h2 style={{ color: '#fff' }}>
              Three packages.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Everything is included.</em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '500px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              Prices below are in USD. Pick your country page for local currency (£ for UK, A$ for Australia).
            </p>
          </div>

          <PackageTiers country="us" />

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            Fixed-price · You own the domain, hosting and source code · Free 30–90 day post-launch support
          </p>
        </div>
      </section>

      {/* Country selector */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PICK YOUR COUNTRY</span>
            <h2 style={{ color: '#fff' }}>
              We build for small businesses
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>across three countries.</em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '500px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              Pricing in your local currency, domain on your local TLD (.com, .co.uk, .com.au), and payment options
              your customers actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {countryCards.map(({ code, flag, cityCount }) => {
              const c = countries[code]
              const liveCount = citiesInCountry(code).length
              return (
                <Link
                  key={code}
                  href={`/website-development/${c.slug}`}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{flag}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{c.shortName}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, flex: 1 }}>
                    Pricing in {c.currency} · {c.tld} domains · {c.paymentLocal}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                    <MapPin size={12} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      {liveCount} cities live · {cityCount} coming
                    </span>
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--accent)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginTop: '0.75rem',
                    }}
                  >
                    See {c.shortName} packages <ArrowRight size={13} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ReferencesGrid />

      <CityFaq />

      <QuoteSection />
    </>
  )
}
