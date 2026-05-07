'use client'
import { ExternalLink } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

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
  return (
    <a
      href={outboundHref('external', client.url)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ borderRadius: '20px', overflow: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s, transform 0.25s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${client.accent}55`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
    >
      {/* Brand preview — static, no external requests */}
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: `linear-gradient(135deg, ${client.accent}18 0%, rgba(255,255,255,0.02) 60%, transparent 100%)`, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Background grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${client.accent}08 1px, transparent 1px), linear-gradient(90deg, ${client.accent}08 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        {/* Glow orb */}
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle, ${client.accent}30, transparent 70%)`, filter: 'blur(20px)' }} />

        {/* Browser chrome bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '28px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '5px' }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840' }} />
          <div style={{ flex: 1, margin: '0 8px', background: 'rgba(255,255,255,0.10)', borderRadius: '4px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>🔒 {client.displayUrl}</span>
          </div>
          <ExternalLink size={9} style={{ color: 'rgba(255,255,255,0.6)' }} />
        </div>

        {/* Brand identity center */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', paddingTop: '28px' }}>
          <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>{client.flag}</div>
          <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 600, color: '#fff', fontSize: '1.15rem', letterSpacing: '0.01em' }}>{client.name}</div>
          <div style={{ fontSize: '0.68rem', color: client.accent, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.85 }}>{client.category}</div>
        </div>

        {/* Bottom gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: `linear-gradient(to top, ${client.accent}20, transparent)` }} />
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
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>{client.country}</span>
            </div>
          </div>
          <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, transition: 'color 0.2s' }} className="group-hover:text-white mt-1" />
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 300 }}>{client.desc}</p>
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
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '220px', lineHeight: 1.6, textAlign: 'right' }}>
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
