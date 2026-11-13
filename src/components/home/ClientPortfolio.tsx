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
    name: 'Australian clothing brand',
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

function ClientRow({ client, index }: { client: PortfolioStore; index: number }) {
  return (
    <li style={{ borderBottom: '1px solid var(--border)' }}>
      <a
        href={outboundHref('external', client.url)}
        target="_blank"
        rel="noopener noreferrer"
        className="cp-row group"
      >
        <span className="mw-num">{String(index + 1).padStart(2, '0')}</span>
        <span>
          <span className="cp-name">{client.name}</span>
          <span className="cp-meta">{client.category} · {client.country}</span>
        </span>
        <span className="cp-desc">{client.desc}</span>
        <span className="cp-url">
          {client.displayUrl}
          <ExternalLink size={13} aria-hidden />
        </span>
      </a>
    </li>
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
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
          <div>
            <p className="mw-eyebrow">{eyebrow ?? 'Our work'}</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', maxWidth: '22ch' }}>
              {heading ?? 'Stores we\u2019ve built for real brands.'}
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-3)' }}>Live stores. Each link opens the site.</p>
        </div>
        <ul style={{ borderTop: '1px solid var(--text-1)' }}>
          {list.map((client, i) => (
            <ClientRow key={client.name} client={client} index={i} />
          ))}
        </ul>
      </div>
      <style>{`
        .cp-row { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr) minmax(0, 1.4fr) 15rem; gap: 1.25rem; align-items: baseline; padding: 1.35rem 0.25rem; transition: background 0.15s ease; }
        .cp-row:hover { background: var(--bg-raised); }
        .cp-name { display: block; font-family: var(--font-playfair); font-size: clamp(1.2rem, 1.8vw, 1.45rem); letter-spacing: -0.02em; color: var(--text-1); }
        .cp-meta { display: block; margin-top: 0.2rem; font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-4); }
        .cp-desc { font-size: 0.92rem; color: var(--text-3); line-height: 1.55; }
        .cp-url { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--font-geist-mono); font-size: 0.75rem; color: var(--text-3); overflow-wrap: anywhere; justify-content: flex-end; text-align: right; }
        .cp-row:hover .cp-url { color: var(--accent); }
        @media (max-width: 860px) {
          .cp-row { grid-template-columns: 2rem 1fr; row-gap: 0.5rem; }
          .cp-desc, .cp-url { grid-column: 2; }
          .cp-url { justify-content: flex-start; text-align: left; }
        }
      `}</style>
    </section>
  )
}
