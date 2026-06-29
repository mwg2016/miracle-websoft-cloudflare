import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import { clientVideos, founderIntro } from '@/data/videos'

const testimonials = [
  {
    quote: 'I am happy to recommend Karam Singh, who runs a Shopify agency and is an expert Shopify developer. He has strong knowledge of Shopify development and always delivers quality work.',
    name: 'Satinder Singh',
    source: 'LinkedIn Recommendation',
    href: outboundHref('linkedin', 'https://in.linkedin.com/company/shopify-experts-miracle-websoft'),
  },
  {
    quote: 'Karam helped me out tremendously by recommending and installing a new theme and main page layout for my site. Very professional and responsive.',
    name: 'Susan D.',
    source: 'LinkedIn Recommendation',
    href: outboundHref('linkedin', 'https://in.linkedin.com/company/shopify-experts-miracle-websoft'),
  },
  {
    quote: 'Top Rated Plus on Upwork — top 3% globally. 600+ jobs completed. 98%+ job success score. $500K+ earned. Our track record speaks for itself.',
    name: 'Miracle Websoft',
    source: 'Upwork Agency Profile',
    href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/'),
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
            Proof from merchants<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>who needed results.</em>
          </h2>
        </div>
        {/* Founder intro video — featured */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-5 mb-6">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(108,99,255,0.25)',
            }}
          >
            <YouTubeEmbed
              videoId={founderIntro.videoId}
              title={founderIntro.title}
              aspect="16/9"
              rounded="0"
            />
            <div style={{ padding: '1.25rem 1.5rem' }}>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>{founderIntro.speaker}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.15rem' }}>
                    {founderIntro.role}
                  </div>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', padding: '0.3rem 0.65rem', borderRadius: '999px' }}>
                  ▶ FOUNDER INTRO
                </span>
              </div>
            </div>
          </div>

          {/* Top text testimonial alongside */}
          <a href={testimonials[2].href} target="_blank" rel="noopener noreferrer" className="group block mw-card flex flex-col justify-center" style={{ padding: '2rem' }}>
            <div style={{ fontSize: '1.8rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>{testimonials[2].quote}</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{testimonials[2].name}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{testimonials[2].source}</div>
              </div>
              <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.2)' }} className="group-hover:text-white transition-colors" />
            </div>
          </a>
        </div>

        {/* Client video reviews — 3 featured */}
        <div className="mb-4">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.85rem' }}>
            ▶ Watch real client reviews
          </p>
          <VideoTestimonialGrid videos={clientVideos.slice(0, 3)} theme="dark" />
        </div>

        {/* Original 2 text testimonials beneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-6">
          {testimonials.slice(0, 2).map((t, i) => (
            <a key={i} href={t.href} target="_blank" rel="noopener noreferrer" className="group block mw-card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{t.source}</div>
                </div>
                <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.2)' }} className="group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/work" className="mw-btn-outline" style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem' }}>View Shopify project examples</Link>
          <a href={outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/')} target="_blank" rel="noopener noreferrer" className="mw-btn-outline" style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            See all Upwork reviews <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
