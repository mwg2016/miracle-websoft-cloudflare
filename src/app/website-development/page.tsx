import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
  title: 'Small Business Web Development | Miracle Websoft',
  description:
    'Build a professional small business website focused on speed, usability, lead generation and easy management with experienced web development support.',
  alternates: { canonical: 'https://miraclewebsoft.com/website-development' },
  openGraph: {
    title: 'Small Business Web Development | Miracle Websoft',
    description:
      'Build a professional small business website focused on speed, usability, lead generation and easy management with experienced web development support.',
    url: 'https://miraclewebsoft.com/website-development',
    type: 'website',
  },
}

const countryCards = [{ code: 'us' as const }, { code: 'uk' as const }, { code: 'au' as const }]

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
        eyebrow="Website development · US · UK · AU"
        title="A real website for your small business,"
        titleAccent="without learning a single technical thing."
        subtext="We build complete websites for small businesses across the United States, United Kingdom and Australia: domain, hosting, design, SEO and content included. You tell us about your business. We launch the site within 7 to 14 days."
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Packages · USD</p>
              <h2 style={{ maxWidth: '16ch' }}>Three packages. Everything is included.</h2>
            </div>
            <p style={{ maxWidth: '42ch', fontSize: '0.95rem' }}>
              Prices below are in USD. Pick your country page for local currency (£ for UK, A$ for Australia).
            </p>
          </div>

          <PackageTiers country="us" />

          <p className="mw-num" style={{ marginTop: '1.5rem' }}>
            FIXED PRICE · YOU OWN THE DOMAIN, HOSTING AND SOURCE CODE · 30–90 DAYS FREE POST-LAUNCH SUPPORT
          </p>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Pick your country</p>
              <h2 style={{ maxWidth: '16ch' }}>Built for small businesses in three countries.</h2>
            </div>
            <p style={{ maxWidth: '42ch', fontSize: '0.95rem' }}>
              Pricing in your local currency, a domain on your local TLD (.com, .co.uk, .com.au), and payment options your customers actually use.
            </p>
          </div>

          <ul className="svc-table">
            {countryCards.map(({ code }, i) => {
              const c = countries[code]
              const liveCount = citiesInCountry(code).length
              return (
                <li key={code}>
                  <Link href={`/website-development/${c.slug}`}>
                    <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc-name">{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</span>
                    <span className="svc-line">{c.currency} pricing · {c.tld} domains · {c.paymentLocal}</span>
                    <span className="svc-price">{liveCount} city pages</span>
                    <ArrowRight size={18} className="svc-arrow" aria-hidden />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <ReferencesGrid />

      <CityFaq />

      <QuoteSection />
    </>
  )
}
