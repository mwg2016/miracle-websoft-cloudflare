import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://miraclewebsoft.com/website-development/${country.slug}/${city.slug}` },
    // City pages are ~95% identical apart from the city name, which Google
    // treats as doorway pages. Keep them for visitors, keep them out of the index
    // until each has genuinely local content (local clients, case studies).
    robots: { index: false, follow: true },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
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

      <HeroLocal
        top={
          <Breadcrumb
            items={[
              { label: 'Website Development', href: '/website-development' },
              { label: country.shortName, href: `/website-development/${country.slug}` },
              { label: city.name },
            ]}
          />
        }
        eyebrow={`Website development · ${city.name}`}
        title={`Website development for small businesses in ${city.name}.`}
        titleAccent={`From ${country.currencySymbol}${starter}, live in 7 days.`}
        fromPrice={`${country.currencySymbol}${starter}`}
        subtext={city.introSentence}
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Packages · {country.currency}</p>
              <h2 style={{ maxWidth: '16ch' }}>Pricing for {city.name} small businesses.</h2>
            </div>
            <p style={{ maxWidth: '44ch', fontSize: '0.95rem' }}>
              All prices in {country.currency}. {country.tld}{' '}domain and one year of hosting included. Same fixed pricing
              whether you&apos;re in {city.name} city centre or the surrounding suburbs.
            </p>
          </div>

          <PackageTiers country={country.code} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Local context</p>
            <h2 style={{ maxWidth: '15ch', marginBottom: '1.5rem' }}>Built for {city.name} businesses like yours.</h2>
            <p style={{ maxWidth: '58ch', marginBottom: '1rem' }}>
              Whether you run one of the {city.localBusinessExamples[0]}, one of the {city.localBusinessExamples[1]},
              or one of the {city.localBusinessExamples[2]}, the build process is the same. You tell us about the
              business, we handle the rest.
            </p>
            <p style={{ maxWidth: '58ch' }}>
              We deliver across {city.name} and surrounding areas including{' '}
              {city.nearbyAreas.slice(0, -1).join(', ')} and {city.nearbyAreas[city.nearbyAreas.length - 1]}. Same
              pricing, same delivery time, same support. Everything is remote.
            </p>
          </div>

          <div>
            <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{city.name} at a glance</p>
            <dl style={{ borderTop: '1px solid var(--text-1)' }}>
              {[
                { label: 'Region', value: city.region },
                { label: 'Country', value: country.shortName },
                { label: 'Local currency', value: country.currency },
                { label: 'Domain we register', value: country.tld },
                { label: 'Payments we set up', value: country.paymentLocal },
                { label: 'Areas covered', value: city.nearbyAreas.slice(0, 4).join(', ') },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline gap-4" style={{ padding: '0.85rem 0', borderBottom: '1px solid var(--border)' }}>
                  <dt style={{ fontSize: '0.88rem', color: 'var(--text-3)', flexShrink: 0 }}>{label}</dt>
                  <dd style={{ fontSize: '0.92rem', color: 'var(--text-1)', fontWeight: 500, textAlign: 'right' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ReferencesGrid />

      <CityFaq extraFaqs={citySpecificFaqs} />

      {sisterCities.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
          <div className="mw-container flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
            <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>
              Other {country.shortName} cities
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {sisterCities.map((sc) => (
                <li key={sc.slug}>
                  <Link
                    href={`/website-development/${country.slug}/${sc.slug}`}
                    style={{ fontSize: '0.95rem', color: 'var(--text-2)', textDecoration: 'underline', textDecorationColor: 'var(--border-hover)', textUnderlineOffset: '4px' }}
                  >
                    {sc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/website-development/${country.slug}`}
                  style={{ fontSize: '0.95rem', color: 'var(--text-1)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  All {country.shortName} cities <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      <QuoteSection cityName={city.name} countryShortName={country.shortName} />
    </>
  )
}
