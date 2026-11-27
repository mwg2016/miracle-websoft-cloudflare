import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'
import { COMPANY } from '@/data/company-facts'

export const metadata: Metadata = {
  title: 'Miracle Websoft — Shopify Experts for Growing Stores',
  description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 700+ projects, $600K+ earned on Upwork.',
  alternates: { canonical: 'https://miraclewebsoft.com/bio/company' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Miracle Websoft — Shopify Experts for Growing Stores',
    description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 700+ projects, $600K+ earned on Upwork.',
    url: 'https://miraclewebsoft.com/bio/company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miracle Websoft — Shopify Experts for Growing Stores',
    description: 'Miracle Websoft is a Top Rated Plus Shopify agency helping merchants with custom development, CRO, speed, apps and migrations. 700+ projects, $600K+ earned on Upwork.',
  },
}

const PAYMENT_LINK = outboundHref('external', 'https://razorpay.com/export-link/@miraclewebsoft')

const stats = [
  { value: COMPANY.projects, label: 'Projects' },
  { value: COMPANY.upwork.earnings, label: 'Earned on Upwork' },
  { value: String(COMPANY.foundedYear), label: 'Founded' },
  { value: String(COMPANY.shopifyPartner.since), label: 'Shopify Partner since' },
]

const services = [
  'Custom Shopify Development',
  'Shopify App Development',
  'Platform Migration to Shopify',
  'CRO & Speed Optimisation',
  'Theme Design & Customisation',
  'TikTok Shop Integration',
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft' },
  { label: 'Instagram', href: 'https://www.instagram.com/miracle_websoft/' },
  { label: 'Facebook', href: 'https://www.facebook.com/miraclewebsoft/' },
  { label: 'X / Twitter', href: 'https://x.com/KaramSingh35' },
]

const trustProfiles = [
  { label: 'Upwork agency', sub: 'Top Rated Plus', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/') },
  { label: 'Shopify Partner directory', sub: 'Official partner listing', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { label: 'Clutch', sub: 'Company profile', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft') },
  { label: 'Trustpilot', sub: 'Customer reviews', href: 'https://www.trustpilot.com/review/miraclewebsoft.com' },
  { label: 'DesignRush', sub: 'Agency listing', href: 'https://www.designrush.com/agency/profile/miracle-websoft' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Miracle Websoft — Company bio',
    description:
      'Miracle Websoft company profile — Top Rated Plus Shopify agency for custom development, CRO, speed, apps and migrations. 700+ projects, $600K+ earned on Upwork.',
    url: 'https://miraclewebsoft.com/bio/company',
    type: 'AboutPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Bio', url: '/bio/company' },
    { name: 'Company', url: '/bio/company' },
  ]),
])

function Row({ href, label, sub, external = true }: { href: string; label: string; sub?: string; external?: boolean }) {
  const content = (
    <>
      <span><b>{label}</b>{sub && <span>{sub}</span>}</span>
      {external ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}
    </>
  )
  if (!external) return <Link href={href} className="bio-row">{content}</Link>
  return <a href={href} className="bio-row" target="_blank" rel="noopener noreferrer">{content}</a>
}

export default function CompanyBioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="bio-wrap">
        <header>
          <Image src="/miracle-websoft-logo.png" alt="Miracle Websoft" width={120} height={50} style={{ width: 120, height: 'auto', marginBottom: '1.5rem' }} />
          <p className="mw-eyebrow">Shopify agency · est. 2016</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 3rem)', lineHeight: 1.05 }}>Miracle Websoft</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-2)' }}>
            Shopify development and CRO for growing stores. An in-house team building, fixing and speeding up Shopify stores.
          </p>
          <p className="mw-num" style={{ marginTop: '0.75rem' }}>Rajpura, Punjab, India · USA · UK · Australia</p>
        </header>

        <dl className="stats" style={{ marginTop: '1.75rem' }}>
          {stats.map(s => <div key={s.label}><dt>{s.label}</dt><dd style={{ fontSize: 'clamp(2rem, 6vw, 2.6rem)' }}>{s.value}</dd></div>)}
        </dl>

        <div style={{ display: 'grid', gap: '0.6rem', marginTop: '1.75rem' }}>
          <Link href="/free-store-audit" className="mw-btn-accent" style={{ justifyContent: 'center', width: '100%' }}>Get a free store teardown <ArrowRight size={15} /></Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <Link href="/book" className="mw-btn-outline" style={{ justifyContent: 'center' }}>Book a call</Link>
            <a href="/miracle-websoft.vcf" download="Miracle-Websoft.vcf" className="mw-btn-outline" style={{ justifyContent: 'center' }}>Save contact</a>
          </div>
        </div>

        <section className="bio-sec">
          <p className="mw-num">WHAT WE DO</p>
          <ul>
            {services.map((s, i) => <li key={s} className="bio-li"><span className="mw-num">0{i + 1}</span>{s}</li>)}
          </ul>
        </section>

        <section className="bio-sec">
          <p className="mw-num">VERIFIED ON</p>
          {trustProfiles.map(p => <Row key={p.label} href={p.href} label={p.label} sub={p.sub} />)}
        </section>

        <section className="bio-sec">
          <p className="mw-num">GET IN TOUCH</p>
          <Row href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} label="karam@miraclewebsoft.com" sub="Email" />
          <Row href={outboundHref('phone', 'tel:+916239269736')} label="+91 62392 69736" sub="Phone" />
          <Row href={PAYMENT_LINK} label="Make a payment" sub="Razorpay" />
        </section>

        <section className="bio-sec">
          <p className="mw-num">FOLLOW</p>
          <div className="bio-social">
            {socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </div>
        </section>

        <section className="bio-sec">
          <p className="mw-num">MORE</p>
          <Row href="/bio/owner" label="Karam Singh Mehra" sub="Founder · personal bio" external={false} />
          <Row href="/case-studies" label="Case studies" sub="Selected work and brands" external={false} />
          <Row href="/pricing" label="Pricing" sub="Fixed-price builds and monthly care" external={false} />
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
.bio-wrap { max-width: 560px; margin: 0 auto; padding: clamp(7.5rem, 11vw, 9rem) 1.25rem 5rem; }
.bio-sec { margin-top: 2.5rem; }
.bio-sec > .mw-num { padding-bottom: 0.6rem; border-bottom: 1px solid var(--text-1); }
.bio-row { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 0.95rem 0; border-bottom: 1px solid var(--border); }
.bio-row:hover { background: var(--bg-raised); }
.bio-row b { display: block; font-weight: 600; color: var(--text-1); }
.bio-row span span { font-size: 0.88rem; color: var(--text-3); }
.bio-row svg { color: var(--text-4); }
.bio-li { display: grid; grid-template-columns: 2.25rem 1fr; padding: 0.8rem 0; border-bottom: 1px solid var(--border); color: var(--text-1); align-items: baseline; }
.bio-social { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; padding-top: 0.9rem; }
.bio-social a { color: var(--text-1); font-weight: 500; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--border-hover); }
` }} />
    </>
  )
}
