import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const testimonials = [
  {
    quote: 'I am happy to recommend Karam Singh, who runs a Shopify agency and is an expert Shopify developer. He has strong knowledge of Shopify development and always delivers quality work.',
    name: 'Satinder Singh',
    source: 'LinkedIn Recommendation',
    href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft',
  },
  {
    quote: 'Karam helped me out tremendously by recommending and installing a new theme and main page layout for my site. Very professional and responsive.',
    name: 'Susan D.',
    source: 'LinkedIn Recommendation',
    href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft',
  },
  {
    quote: 'Top Rated Plus on Upwork — top 3% globally. 600+ jobs completed. 98% job success score. $500K+ earned. Our track record speaks for itself.',
    name: 'Miracle Websoft',
    source: 'Upwork Agency Profile',
    href: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/',
    isAgency: true,
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-10">
          <p className="mw-eyebrow">Client Reviews</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15 }}>
            Trusted by brands<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worldwide.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {testimonials.map((t, i) => (
            <a key={i} href={t.href} target="_blank" rel="noopener noreferrer" className="group block mw-card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{t.source}</div>
                </div>
                <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.2)' }} className="group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/case-studies" className="mw-btn-outline" style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem' }}>View case studies</Link>
          <a href="https://www.upwork.com/agencies/shopifyexpertsdevelopers/" target="_blank" rel="noopener noreferrer" className="mw-btn-outline" style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            See all Upwork reviews <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
