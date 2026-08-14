import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import HeroLocal from '@/components/website-dev/HeroLocal'
import StatsBar from '@/components/website-dev/StatsBar'
import HandHoldingSection from '@/components/website-dev/HandHoldingSection'
import PackageTiers from '@/components/website-dev/PackageTiers'
import ReferencesGrid from '@/components/website-dev/ReferencesGrid'
import CityFaq, { getPageFaqs } from '@/components/website-dev/CityFaq'
import QuoteSection from '@/components/website-dev/QuoteSection'
import { cities, countries, getCity, citiesInCountry, type CountryCode } from '@/data/website-dev-cities'
import { webDevPackages } from '@/data/website-dev-packages'
import { breadcrumb, faqPage, renderJsonLd, service, webPage } from '@/lib/jsonld'

interface Props {
  params: Promise<{ country: string; city: string }>
}

export function generateStaticParams() {
  return cities.map((c) => ({ country: c.country, city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params
  const country = countries[countrySlug as CountryCode]
  const city = getCity(countrySlug, citySlug)
  if (!country || !city) return {}
  const starter = webDevPackages[0].pricesByCountry[country.code]
  return {
    title: `Website Development in ${city.name} for Small Business — ${country.currencySymbol}${starter}+ All-In | Miracle Websoft`,
    description: `Done-for-you website development for ${city.name} small businesses. Domain (${country.tld}), hosting, design and SEO included from ${country.currencySymbol}${starter}. Live in 7 days.`,
    alternates: { canonical: `https://miraclewebsoft.com/website-development/${country.slug}/${city.slug}` },
    openGraph: {
      title: `Website Development in ${city.name} — Small Business Packages`,
      description: `All-in-one website packages for ${city.name} businesses. Domain, hosting and design included from ${country.currencySymbol}${starter}.`,
      url: `https://miraclewebsoft.com/website-development/${country.slug}/${city.slug}`,
      type: 'website',
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params
  const country = countries[countrySlug as CountryCode]
  const city = getCity(countrySlug, citySlug)
  if (!country || !city) notFound()

  const url = `/website-development/${country.slug}/${city.slug}`
  const starter = webDevPackages[0].pricesByCountry[country.code]

  const sisterCities = citiesInCountry(country.code).filter((c) => c.slug !== city.slug).slice(0, 4)

  const citySpecificFaqs = [
    {
      question: `Do you work with ${city.name} businesses if you're not based there?`,
      answer: `Yes — we deliver every project remotely and have built websites for businesses across ${country.name}, including ${city.name}. The build process is the same wherever you are: a short call, a design round, revisions, launch. You'll never need to meet in person, and our pricing is the same regardless of your location.`,
    },
  ]

  const jsonLd = renderJsonLd([
    webPage({
      name: `Website Development for Small Business in ${city.name}`,
      description: `All-in-one website packages for ${city.name} small businesses. Domain, hosting, design, content and SEO included.`,
      url,
    }),
    service({
      name: `Website development in ${city.name}`,
      description: `Done-for-you websites for small businesses in ${city.name}, ${country.shortName}. Domain, hosting, design, SEO and content all included.`,
      url,
      serviceType: 'Website development',
      areaServed: [country.shortName === 'USA' ? 'United States' : country.shortName === 'UK' ? 'United Kingdom' : 'Australia'],
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Website Development', url: '/website-development' },
      { name: country.shortName, url: `/website-development/${country.slug}` },
      { name: city.name, url },
    ]),
    faqPage(getPageFaqs(citySpecificFaqs)),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div style={{ background: '#0a0a0a', paddingTop: '7rem', paddingBottom: '0.5rem' }}>
        <div className="mw-container">
          <Breadcrumb
            items={[
              { label: 'Website Development', href: '/website-development' },
              { label: country.shortName, href: `/website-development/${country.slug}` },
              { label: city.name },
            ]}
          />
        </div>
      </div>

      <HeroLocal
        eyebrow={`WEBSITE DEVELOPMENT — ${city.name.toUpperCase()}`}
        title={`Website development for small businesses in ${city.name}.`}
        titleAccent={`From ${country.currencySymbol}${starter}. Live in 7 days.`}
        subtext={city.introSentence}
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PACKAGES — {country.currency}</span>
            <h2 style={{ color: '#fff' }}>
              Pricing for {city.name}
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>small businesses.</em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '520px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              All prices in {country.currency}. {country.tld} domain + 1 year hosting included. Same fixed pricing
              whether you&apos;re in {city.name} city centre or the surrounding suburbs.
            </p>
          </div>

          <PackageTiers country={country.code} />
        </div>
      </section>

      {/* Local context block */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="mw-eyebrow">
                <Building2 size={11} style={{ display: 'inline', marginRight: '0.3rem', verticalAlign: '-1px' }} />
                LOCAL CONTEXT
              </span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
                We&apos;ve built sites for {city.name}
                <br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>businesses like yours.</em>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                Whether you run one of the {city.localBusinessExamples[0]}, one of the {city.localBusinessExamples[1]},
                or one of the {city.localBusinessExamples[2]}, the build process is the same. You tell us about the
                business, we handle the rest.
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                }}
              >
                We deliver across {city.name} and surrounding areas including{' '}
                {city.nearbyAreas.slice(0, -1).join(', ')} and {city.nearbyAreas[city.nearbyAreas.length - 1]}. Same
                pricing, same delivery time, same support — everything is remote.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(108,99,255,0.04)',
                border: '1px solid rgba(108,99,255,0.15)',
                borderRadius: '16px',
                padding: '2rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                {city.name} at a glance
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { label: 'Region', value: city.region },
                  { label: 'Country', value: country.shortName },
                  { label: 'Local currency', value: country.currency },
                  { label: 'Local TLD we register', value: country.tld },
                  { label: 'Payment options we set up', value: country.paymentLocal },
                  { label: 'Areas covered', value: city.nearbyAreas.slice(0, 4).join(', ') },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '1rem',
                      paddingBottom: '0.6rem',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>{label}</span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: '#fff',
                        fontWeight: 500,
                        textAlign: 'right',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReferencesGrid />

      <CityFaq extraFaqs={citySpecificFaqs} />

      {/* Sister cities — internal linking */}
      {sisterCities.length > 0 && (
        <section className="mw-section" style={{ background: '#0a0a0a', paddingTop: '2rem' }}>
          <div className="mw-container">
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Other {country.shortName} cities we serve
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {sisterCities.map((sc) => (
                <Link
                  key={sc.slug}
                  href={`/website-development/${country.slug}/${sc.slug}`}
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.65)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    padding: '0.45rem 1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <MapPin size={11} /> {sc.name}
                </Link>
              ))}
              <Link
                href={`/website-development/${country.slug}`}
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  background: 'rgba(108,99,255,0.06)',
                  borderRadius: '999px',
                  padding: '0.45rem 1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 600,
                }}
              >
                All {country.shortName} cities <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <QuoteSection cityName={city.name} countryShortName={country.shortName} />
    </>
  )
}
