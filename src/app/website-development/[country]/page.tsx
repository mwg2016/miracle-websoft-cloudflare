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
import { countries, citiesInCountry, type CountryCode } from '@/data/website-dev-cities'
import { webDevPackages } from '@/data/website-dev-packages'
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
    title: country.metaTitle,
    description: country.metaDescription,
    alternates: { canonical: `https://miraclewebsoft.com/website-development/${country.slug}` },
    openGraph: {
      title: country.metaTitle,
      description: country.metaDescription,
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
      description: `All-in-one website development packages for ${country.adjective} small businesses. Domain, hosting, design and SEO included.`,
      url,
      type: 'CollectionPage',
    }),
    service({
      name: `Small business website development in ${country.shortName}`,
      description: `Done-for-you websites for ${country.adjective} small businesses. Domain, hosting, design, content and SEO included.`,
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

  const fromPrice = `${country.currencySymbol}${webDevPackages[0].pricesByCountry[country.code].toLocaleString()}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <HeroLocal
        top={
          <Breadcrumb
            items={[
              { label: 'Website Development', href: '/website-development' },
              { label: country.shortName },
            ]}
          />
        }
        eyebrow={`Website development · ${country.shortName}`}
        title={`Websites for ${country.adjective} small businesses.`}
        titleAccent={`Live in 7 days, from ${fromPrice}.`}
        fromPrice={fromPrice}
        subtext={`We build complete websites for small businesses across ${country.name}. Prices in ${country.currency}, ${country.tld} domain included, ${country.paymentLocal} payments ready. Done for you: you don't touch anything technical.`}
      />

      <StatsBar />

      <HandHoldingSection />

      <section id="packages" className="mw-section" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Packages · {country.currency}</p>
              <h2 style={{ maxWidth: '16ch' }}>Pricing for {country.adjective} small businesses.</h2>
            </div>
            <p style={{ maxWidth: '42ch', fontSize: '0.95rem' }}>
              All prices are in {country.currency}. Domain ({country.tld}) and one year of hosting included.
            </p>
          </div>

          <PackageTiers country={country.code} />

          <p className="mw-num" style={{ marginTop: '1.5rem', textTransform: 'uppercase' }}>
            Fixed price in {country.currency} · You own the {country.tld} domain · 30–90 days free post-launch support
          </p>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Cities we serve · {country.shortName}</p>
              <h2 style={{ maxWidth: '16ch' }}>Pick your city for local context.</h2>
            </div>
            <p style={{ maxWidth: '42ch', fontSize: '0.95rem' }}>
              Each city page covers the local business landscape, neighbourhood-level examples and pricing in {country.currency}.
            </p>
          </div>

          <ul className="wd-cities">
            {cities.map((c, i) => (
              <li key={c.slug}>
                <Link href={`${url}/${c.slug}`}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="wd-city-name">{c.name}</span>
                    <span className="wd-city-region">{c.region}</span>
                  </span>
                  <ArrowRight size={16} className="svc-arrow" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>

          <p style={{ marginTop: '1.5rem', fontSize: '0.93rem', color: 'var(--text-3)' }}>
            Not in the list? We work remotely across {country.name}.{' '}
            <Link href="#get-quote" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Get a quote anyway
            </Link>
            .
          </p>
        </div>
        <style>{`
          .wd-cities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 2.5rem; border-top: 1px solid var(--text-1); }
          .wd-cities li { border-bottom: 1px solid var(--border); }
          .wd-cities a { display: grid; grid-template-columns: 2.5rem 1fr 1.25rem; align-items: baseline; padding: 1.1rem 0.25rem; transition: background 0.15s ease; }
          .wd-cities a:hover { background: var(--bg-raised); }
          .wd-cities a:hover .svc-arrow { color: var(--accent); }
          .wd-city-name { font-family: var(--font-playfair); font-size: 1.35rem; letter-spacing: -0.02em; color: var(--text-1); margin-right: 0.75rem; }
          .wd-city-region { font-size: 0.85rem; color: var(--text-3); }
          @media (max-width: 700px) { .wd-cities { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <ReferencesGrid />

      <CityFaq />

      <QuoteSection countryShortName={country.shortName} />
    </>
  )
}
