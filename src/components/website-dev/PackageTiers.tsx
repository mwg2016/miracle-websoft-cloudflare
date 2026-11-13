import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { webDevPackages } from '@/data/website-dev-packages'
import type { CountryCode, Country } from '@/data/website-dev-cities'
import { countries } from '@/data/website-dev-cities'

interface Props {
  country?: CountryCode
}

function formatPrice(amount: number, country: Country): string {
  return `${country.currencySymbol}${amount.toLocaleString()}`
}

export default function PackageTiers({ country = 'us' }: Props) {
  const c = countries[country]

  return (
    <div className="wd-tiers">
      {webDevPackages.map((pkg) => {
        const price = formatPrice(pkg.pricesByCountry[country], c)
        return (
          <div key={pkg.slug} className={`wd-tier${pkg.popular ? ' is-popular' : ''}`}>
            <div className="flex items-center justify-between gap-3" style={{ minHeight: "1.6rem" }}>
              <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-2)' }}>{pkg.name}</p>
              {pkg.popular && <span className="mw-pill mw-pill--accent" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>Most chosen</span>}
            </div>
            <p style={{ marginTop: '1rem', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 3.6vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--text-1)' }}>{price}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginLeft: '0.5rem' }}>one-time</span>
            </p>
            <p className="mw-num" style={{ marginTop: '0.75rem' }}>LIVE IN {pkg.deliveryDays.toUpperCase()}</p>
            <p style={{ fontSize: '0.93rem', marginTop: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>{pkg.tagline}</p>

            <ul className="wd-tier-list">
              {pkg.included.map((feat) => <li key={feat}>{feat}</li>)}
            </ul>

            {pkg.notIncluded.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Not included</p>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-3)', lineHeight: 1.6 }}>{pkg.notIncluded.join(' · ')}</p>
              </div>
            )}

            <div style={{ flex: 1, minHeight: '1.75rem' }} />
            <Link
              href={`/contact?package=${pkg.contactSlug}`}
              className={pkg.popular ? 'mw-btn-accent' : 'mw-btn-outline'}
              style={{ width: '100%' }}
            >
              Choose {pkg.name} <ArrowRight size={15} />
            </Link>
          </div>
        )
      })}
      <style>{`
        .wd-tiers { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; align-items: stretch; }
        .wd-tier { display: flex; flex-direction: column; background: var(--bg-raised); border: 1px solid var(--border); border-radius: 8px; padding: clamp(1.4rem, 2.5vw, 2rem); }
        .wd-tier.is-popular { border-color: var(--text-1); box-shadow: 0 30px 60px -40px rgb(23 21 15 / 0.35); }
        .wd-tier-list { display: grid; gap: 0.55rem; margin: 1.25rem 0 0; }
        .wd-tier-list li { position: relative; padding-left: 1.4rem; font-size: 0.9rem; line-height: 1.5; color: var(--text-2); }
        .wd-tier-list li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 0.75rem; height: 1px; background: var(--text-1); }
        @media (max-width: 900px) { .wd-tiers { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
