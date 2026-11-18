import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { breadcrumb, person, renderJsonLd } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import { clientVideos, founderIntro } from '@/data/videos'

export const metadata: Metadata = {
  title: 'Karam Singh Mehra — Shopify Expert & Founder | Miracle Websoft',
  description: 'Karam Singh Mehra is the founder of Miracle Websoft and a Top Rated Plus full stack and Shopify developer on Upwork. 10+ years, 700+ Shopify projects, $600K+ earned on Upwork.',
  alternates: { canonical: 'https://miraclewebsoft.com/bio/owner' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Karam Singh Mehra — Shopify Expert & Founder | Miracle Websoft',
    description: 'Karam Singh Mehra is the founder of Miracle Websoft and a Top Rated Plus full stack and Shopify developer on Upwork. 10+ years, 700+ Shopify projects, $600K+ earned on Upwork.',
    url: 'https://miraclewebsoft.com/bio/owner',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karam Singh Mehra — Shopify Expert & Founder | Miracle Websoft',
    description: 'Karam Singh Mehra is the founder of Miracle Websoft and a Top Rated Plus full stack and Shopify developer on Upwork. 10+ years, 700+ Shopify projects, $600K+ earned on Upwork.',
  },
}

const WHATSAPP_LINK = outboundHref('whatsapp', `https://wa.me/919530835358?text=${encodeURIComponent('Hi Karam, I found your profile and would like to discuss a project.')}`)

const skills = [
  'Shopify Development', 'Shopify App Dev', 'Theme Customisation',
  'Shopify Migration', 'CRO & Speed', 'Fashion eCommerce',
  'Liquid / React', 'TikTok Shop',
]

const socialLinks = [
  { label: 'LinkedIn', href: outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/') },
  { label: 'Instagram', href: outboundHref('external', 'https://www.instagram.com/miracle_websoft/') },
  { label: 'Facebook', href: outboundHref('external', 'https://www.facebook.com/miraclewebsoft/') },
  { label: 'X / Twitter', href: outboundHref('external', 'https://x.com/KaramSingh35') },
]

const profileLinks = [
  { label: 'Upwork', sub: 'Top Rated Plus · 98% job success', href: outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de') },
  { label: 'Shopify Partner', sub: 'Official partner directory', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { label: 'Clutch', sub: '4.9 rating · verified reviews', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft') },
]

const jsonLd = renderJsonLd([
  person({
    name: 'Karam Singh Mehra',
    url: 'https://miraclewebsoft.com/bio/owner',
    jobTitle: 'Founder & Lead Shopify Expert',
    description:
      'Founder of Miracle Websoft — 10+ years of Shopify expertise, 700+ projects delivered. Top Rated Plus on Upwork.',
    image: 'https://miraclewebsoft.com/icon-512.png',
    sameAs: [
      'https://www.linkedin.com/in/ecommerce-experts/',
      'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
      'https://www.instagram.com/miracle_websoft/',
      'https://www.facebook.com/miraclewebsoft/',
      'https://x.com/KaramSingh35',
    ],
    worksFor: { name: 'Miracle Websoft', url: 'https://miraclewebsoft.com' },
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Bio', url: '/bio/owner' },
    { name: 'Karam Singh Mehra', url: '/bio/owner' },
  ]),
])

function Row({ href, label, sub, external = true, download }: { href: string; label: string; sub?: string; external?: boolean; download?: string }) {
  const content = (
    <>
      <span><b>{label}</b>{sub && <span>{sub}</span>}</span>
      {download ? <Download size={15} /> : external ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}
    </>
  )
  if (!external) return <Link href={href} className="bio-row">{content}</Link>
  return <a href={href} className="bio-row" {...(download ? { download } : { target: '_blank', rel: 'noopener noreferrer' })}>{content}</a>
}

export default function OwnerBioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="bio-wrap">
        <header style={{ textAlign: 'left' }}>
          <p className="mw-eyebrow">Founder · Miracle Websoft</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 3rem)', lineHeight: 1.05 }}>Karam Singh Mehra</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-2)' }}>
            Full stack and lead Shopify developer. 700+ Shopify projects since 2015, $600K+ earned and Top Rated Plus on Upwork.
          </p>
          <p className="mw-num" style={{ marginTop: '0.75rem' }}>Chandigarh, India · working with the US, UK &amp; Australia</p>
        </header>

        <div style={{ marginTop: '1.75rem', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', background: 'var(--bg-raised)' }}>
          <YouTubeEmbed videoId={founderIntro.videoId} title={founderIntro.title} aspect="16/9" rounded="0" />
          <p className="mw-num" style={{ padding: '0.7rem 1rem' }}>A 60-second intro</p>
        </div>

        <div style={{ display: 'grid', gap: '0.6rem', marginTop: '1.5rem' }}>
          <Link href="/book" className="mw-btn-accent" style={{ justifyContent: 'center', width: '100%' }}>Book a 15-min call <ArrowRight size={15} /></Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mw-btn-outline" style={{ justifyContent: 'center' }}>WhatsApp</a>
            <a href="/karam-mehra.vcf" download="Karam-Singh-Mehra.vcf" className="mw-btn-outline" style={{ justifyContent: 'center' }}>Save contact</a>
          </div>
        </div>

        <section className="bio-sec">
          <p className="mw-num">VERIFIED PROFILES</p>
          {profileLinks.map(p => <Row key={p.label} href={p.href} label={p.label} sub={p.sub} />)}
        </section>

        <section className="bio-sec">
          <p className="mw-num">CONTACT</p>
          <Row href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} label="karam@miraclewebsoft.com" sub="Email" />
          <Row href={outboundHref('phone', 'tel:+916239269736')} label="+91 62392 69736" sub="Phone" />
        </section>

        <section className="bio-sec">
          <p className="mw-num">ELSEWHERE</p>
          <div className="bio-social">
            {socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </div>
        </section>

        <section className="bio-sec">
          <p className="mw-num">EXPERTISE</p>
          <p style={{ marginTop: '0.75rem', color: 'var(--text-2)', lineHeight: 1.8 }}>{skills.join(' · ')}</p>
        </section>

        <section className="bio-sec">
          <p className="mw-num">CLIENT VIDEO REVIEWS</p>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '0.9rem' }}>
            {clientVideos.slice(0, 3).map(v => (
              <div key={v.videoId} style={{ border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
                <YouTubeEmbed videoId={v.videoId} title={v.title} aspect={v.aspect ?? '16/9'} rounded="0" />
              </div>
            ))}
          </div>
        </section>

        <section className="bio-sec">
          <p className="mw-num">MORE</p>
          <Row href="/free-store-audit" label="Free store teardown" sub="A 5-minute video of what to fix, in 48 hours" external={false} />
          <Row href="/bio/company" label="Miracle Websoft" sub="Company bio" external={false} />
          <Row href="/my-portfolio" label="Portfolio" sub="Selected work and brands" external={false} />
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: BIO_CSS }} />
    </>
  )
}

const BIO_CSS = `
.bio-wrap { max-width: 560px; margin: 0 auto; padding: clamp(7.5rem, 11vw, 9rem) 1.25rem 5rem; }
.bio-sec { margin-top: 2.5rem; }
.bio-sec > .mw-num { padding-bottom: 0.6rem; border-bottom: 1px solid var(--text-1); }
.bio-row { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 0.95rem 0; border-bottom: 1px solid var(--border); }
.bio-row:hover { background: var(--bg-raised); }
.bio-row b { display: block; font-weight: 600; color: var(--text-1); }
.bio-row span span { font-size: 0.88rem; color: var(--text-3); }
.bio-row svg { color: var(--text-4); }
.bio-social { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; padding-top: 0.9rem; }
.bio-social a { color: var(--text-1); font-weight: 500; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--border-hover); }
`
