import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import HeroLocal from '@/components/website-dev/HeroLocal'
import StatsBar from '@/components/website-dev/StatsBar'
import HandHoldingSection from '@/components/website-dev/HandHoldingSection'
import PackageTiers from '@/components/website-dev/PackageTiers'
import ReferencesGrid from '@/components/website-dev/ReferencesGrid'
import CityFaq, { getPageFaqs } from '@/components/website-dev/CityFaq'
import QuoteSection from '@/components/website-dev/QuoteSection'
import { countries, citiesInCountry, type CountryCode } from '@/data/website-dev-cities'
import { breadcrumb, faqPage, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

interface Props {
  params: Promise<{ country: string }>
}

export function generateStaticParams() {
  return Object.keys(countries).map((country) => ({ country }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug } = await params
  const country = countries[countrySlug as CountryCode]
  if (!country) return {}
  return {
    title: `Website Development for Small Business in ${country.shortName} — ${country.currencySymbol}${country.code === 'au' ? 449 : country.code === 'uk' ? 249 : 299}+ | Miracle Websoft`,
    description: `Done-for-you website development for ${country.adjective.toLowerCase()} small businesses. Domain (${country.tld}), hosting, design, SEO and content included. Live in 7–14 days.`,
    alternates: { canonical: `https://miraclewebsoft.com/website-development/${country.slug}` },
    openGraph: {
      title: `Website Development for ${country.shortName} Small Businesses`,
      description: `All-in-one website packages from ${country.currencySymbol}${country.code === 'au' ? 449 : country.code === 'uk' ? 249 : 299}. Domain, hosting and design included.`,
      url: `https://miraclewebsoft.com/website-development/${country.slug}`,
      type: 'website',
    },
  }
}

export default async function CountryPage({ params }: Props) {
  const { country: countrySlug } = await params
  const country = countries[countrySlug as CountryCode]
  if (!country) notFound()

  const cities = citiesInCountry(country.code)
  const url = `/website-development/${country.slug}`
  const fullUrl = `https://miraclewebsoft.com${url}`

  const jsonLd = renderJsonLd([
    webPage({
      name: `Website Development for Small Business in ${country.shortName}`,
      description: `All-in-one website development packages for ${country.adjective.toLowerCase()} small businesses. Domain, hosting, design and SEO included.`,
      url,
      type: 'CollectionPage',
    }),
    service({
      name: `Small business website development in ${country.shortName}`,
      description: `Done-for-you websites for ${country.adjective.toLowerCase()} small businesses. Domain, hosting, design, content and SEO included.`,
      url,
      serviceType: 'Website development',
      areaServed: [country.shortName === 'USA' ? 'United States' : country.shortName === 'UK' ? 'United Kingdom' : 'Australia'],
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Website Development', url: '/website-development' },
      { name: country.shortName, url },
    ]),
    itemList({
      name: `Cities served in ${country.shortName}`,
      description: `Cities where Miracle Websoft delivers website development for small businesses across ${country.name}.`,
      items: cities.map((c) => ({
        name: `Website Development in ${c.name}`,
        url: `${fullUrl}/${c.slug}`,
        description: `Website development for small businesses in ${c.name}, ${c.region}.`,
      })),
    }),
    faqPage(getPageFaqs()),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div style={{ background: '#0a0a0a', paddingTop: '7rem', paddingBottom: '0.5rem' }}>
        <div className="mw-container">
          <Breadcrumb
            items={[
              { label: 'Website Development', href: '/website-development' },
              { label: country.shortName },
            ]}
          />
        </div>
      </div>

      <HeroLocal
        eyebrow={`WEBSITE DEVELOPMENT — ${country.shortName}`}
        title={`Websites for ${country.adjective.toLowerCase()} small businesses.`}
        titleAccent={`Live in 7 days. From ${country.currencySymbol}${country.code === 'au' ? 449 : country.code === 'uk' ? 249 : 299}.`}
        subtext={`We build complete websites for small businesses across ${country.name}. Prices in ${country.currency}, ${country.tld} domain included, ${country.paymentLocal.toLowerCase()} payment integration ready. Done-for-you — you don't touch a thing technical.`}
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PACKAGES — {country.currency}</span>
            <h2 style={{ color: '#fff' }}>
              Pricing for {country.adjective.toLowerCase()}
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>small businesses.</em>
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
              All prices below are in {country.currency}. Domain ({country.tld}) and 1 year of hosting included.
            </p>
          </div>

          <PackageTiers country={country.code} />

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            Fixed-price in {country.currency} · You own the {country.tld} domain · Free 30–90 day post-launch support
          </p>
        </div>
      </section>

      {/* City list */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">CITIES WE SERVE — {country.shortName}</span>
            <h2 style={{ color: '#fff' }}>
              Pick your city
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>for local context.</em>
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
              Each city page covers the local business landscape, neighbourhood-level examples and pricing in{' '}
              {country.currency}.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`${url}/${c.slug}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '12px',
                  padding: '1rem 1.1rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={11} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{c.name}</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', paddingLeft: '1.15rem' }}>
                  {c.region}
                </span>
              </Link>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            More {country.shortName} cities being added each week. Not in the list?{' '}
            <Link href="#get-quote" style={{ color: 'var(--accent)' }}>
              Get a quote anyway
            </Link>{' '}
            — we deliver remotely across the country.
          </p>
        </div>
      </section>

      <ReferencesGrid />

      <CityFaq />

      <QuoteSection countryShortName={country.shortName} />
    </>
  )
}
