import Link from 'next/link'
import { ArrowRight, CheckCircle2, X, Calendar, Star } from 'lucide-react'
import { webDevPackages } from '@/data/website-dev-packages'
import type { CountryCode, Country } from '@/data/website-dev-cities'
import { countries } from '@/data/website-dev-cities'

interface Props {
  country?: CountryCode
}

const colorByTier: Record<string, { color: string; bg: string; border: string }> = {
  starter: { color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.25)' },
  business: { color: '#a78bfa', bg: 'rgba(108,99,255,0.08)', border: 'rgba(108,99,255,0.3)' },
  ecommerce: { color: '#34d399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.2)' },
}

function formatPrice(amount: number, country: Country): string {
  return `${country.currencySymbol}${amount.toLocaleString()}`
}

export default function PackageTiers({ country = 'us' }: Props) {
  const c = countries[country]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {webDevPackages.map((pkg) => {
        const tone = colorByTier[pkg.slug]
        const price = formatPrice(pkg.pricesByCountry[country], c)
        return (
          <div
            key={pkg.slug}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: `1px solid ${tone.border}`,
              background: tone.bg,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {pkg.popular && (
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <Star size={9} /> Most popular
              </div>
            )}
            <div style={{ height: '3px', background: `linear-gradient(90deg, ${tone.color}, ${tone.color}88)` }} />
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: tone.color,
                  marginBottom: '0.4rem',
                }}
              >
                {pkg.name}
              </p>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>{price}</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginLeft: '0.4rem' }}>
                  one-time
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                <Calendar size={12} style={{ color: tone.color }} />
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  Live in {pkg.deliveryDays}
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {pkg.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {pkg.included.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2
                      size={13}
                      style={{ color: tone.color, flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {pkg.notIncluded.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Not included
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {pkg.notIncluded.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <X size={12} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href={`/contact?package=${pkg.contactSlug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  background: tone.color,
                  color: '#000',
                  padding: '0.8rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  marginTop: 'auto',
                }}
              >
                Get {pkg.name} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
