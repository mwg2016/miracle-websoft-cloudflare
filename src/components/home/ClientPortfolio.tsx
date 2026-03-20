'use client'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

export type PortfolioStore = {
  name: string
  url: string
  displayUrl: string
  category: string
  country: string
  flag: string
  desc: string
  accent: string
}

const clients: PortfolioStore[] = [
  {
    name: 'Farmers Atelier',
    url: 'https://farmersatelier.com',
    displayUrl: 'farmersatelier.com',
    category: 'Knitwear & Basics',
    country: 'Austria',
    flag: '🇦🇹',
    desc: 'Contemporary comfort-focused knitwear and hoodies with an earthy minimalist aesthetic. Serving 20+ EU markets.',
    accent: '#8B7355',
  },
  {
    name: 'OTAA',
    url: 'https://www.otaa.com',
    displayUrl: 'otaa.com',
    category: "Men's Accessories",
    country: 'Australia',
    flag: '🇦🇺',
    desc: 'Award-winning luxury ties, non-iron shirts and handcrafted men\'s accessories. 16,500+ five-star reviews.',
    accent: '#FFB800',
  },
  {
    name: 'Shirtonomy',
    url: 'https://shirtonomy.se',
    displayUrl: 'shirtonomy.se',
    category: 'Bespoke Shirts',
    country: 'Sweden',
    flag: '🇸🇪',
    desc: 'Made-to-measure and ready-to-wear shirts. Scandinavian precision, Portuguese and Italian craftsmanship.',
    accent: '#4A6FA5',
  },
  {
    name: 'Buddha Trends',
    url: 'https://buddhatrends.com',
    displayUrl: 'buddhatrends.com',
    category: "Women's Fashion",
    country: 'USA',
    flag: '🇺🇸',
    desc: 'Loose, trendy plus-size bohemian clothing for women. Free shipping on orders $99+.',
    accent: '#FFB503',
  },
  {
    name: 'Momifa',
    url: 'https://momifa.com',
    displayUrl: 'momifa.com',
    category: 'Premium Basics',
    country: 'USA',
    flag: '🇺🇸',
    desc: 'Premium polo shirts and everyday essentials with video commerce, size guides and Judge.me reviews.',
    accent: '#FDCC0D',
  },
  {
    name: 'Esparda',
    url: 'https://www.esparda.in',
    displayUrl: 'esparda.in',
    category: 'Fashion',
    country: 'India',
    flag: '🇮🇳',
    desc: 'Contemporary fashion brand with Shopify store featuring Shiprocket logistics and full regional checkout.',
    accent: '#108474',
  },
]

function ClientCard({ client }: { client: typeof clients[0] }) {
  const [imgError, setImgError] = useState(false)
  const screenshotUrl = `https://image.thum.io/get/width/1200/crop/750/noanimate/${client.url}`

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ borderRadius: '20px', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s, transform 0.25s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${client.accent}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
    >
      {/* Screenshot */}
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={screenshotUrl}
            alt={`${client.name} Shopify store screenshot`}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
            className="group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${client.accent}15, transparent)` }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{client.flag}</div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>{client.name}</div>
            </div>
          </div>
        )}
        {/* Browser chrome overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '28px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '5px' }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840' }} />
          <div style={{ flex: 1, margin: '0 8px', background: 'rgba(255,255,255,0.12)', borderRadius: '4px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>{client.displayUrl}</span>
          </div>
          <ExternalLink size={9} style={{ color: 'rgba(255,255,255,0.35)' }} />
        </div>
        {/* Accent glow on hover */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${client.accent}20, transparent 50%)`, opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100" />
      </div>

      {/* Info */}
      <div style={{ padding: '1.25rem 1.5rem' }}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{client.name}</span>
              <span style={{ fontSize: '0.9rem' }}>{client.flag}</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${client.accent}18`, color: client.accent, border: `1px solid ${client.accent}35` }}>
                {client.category}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{client.country}</span>
            </div>
          </div>
          <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, transition: 'color 0.2s' }} className="group-hover:text-white mt-1" />
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontWeight: 300 }}>{client.desc}</p>
      </div>
    </a>
  )
}

interface Props {
  stores?: PortfolioStore[]
  heading?: string
  eyebrow?: string
}

export default function ClientPortfolio({ stores, heading, eyebrow }: Props) {
  const list = stores ?? clients
  return (
    <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="mw-eyebrow">{eyebrow ?? 'Our Work'}</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15 }}>
              {heading ? (
                <>{heading}</>
              ) : (
                <>Stores we&apos;ve built<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>for real brands.</em></>
              )}
            </h2>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', maxWidth: '220px', lineHeight: 1.6, textAlign: 'right' }}>
            Click any store to visit the live site
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(client => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
