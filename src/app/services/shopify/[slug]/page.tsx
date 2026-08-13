import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, AlertCircle, Star, Zap, DollarSign, Users, TrendingUp } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import shopifyServices, { getShopifyService } from '@/data/shopify-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

type Params = { slug: string }

export async function generateStaticParams() {
  return shopifyServices.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const svc = getShopifyService(slug)
  if (!svc) return {}
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `https://www.miraclewebsoft.com/services/shopify/${slug}` },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: `https://www.miraclewebsoft.com/services/shopify/${slug}`,
      type: 'website',
    },
  }
}

const shopifyGuarantees = [
  { icon: '⚡', title: 'Built for Mobile Buyers', body: 'Your store is planned for the device most customers use first. Speed, layout, product clarity and checkout flow are treated as revenue issues.' },
  { icon: '🔒', title: 'Fixed Price Before We Start', body: 'You get a detailed proposal before work begins. No open-ended hourly billing, no surprise invoice at the end.' },
  { icon: '🚀', title: 'Launch Planned Carefully', body: 'We manage QA, redirects, tracking, DNS, SSL and post-launch checks so the store can go live without unnecessary disruption.' },
]

const shopifyRelated = [
  { title: 'CRO & Speed Optimisation', desc: 'Already have a store? Improve conversions and page speed.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify App Development', desc: 'Custom apps for drop systems, loyalty, bundles and more.', href: '/services/shopify-app-development' },
  { title: 'Shopify Migrations', desc: 'Moving from WooCommerce, Magento or another platform.', href: '/services/shopify-migration' },
]

const whyReasons = [
  { icon: TrendingUp, title: '10+ years on Shopify', body: 'We have helped merchants through launches, redesigns, migrations, app builds and growth phases since 2015.' },
  { icon: DollarSign, title: 'Business-first recommendations', body: 'We explain what will likely move revenue, what can wait and when a full rebuild is unnecessary.' },
  { icon: Zap, title: 'Performance-first execution', body: 'Speed, app bloat, Core Web Vitals and mobile experience are handled as part of the store strategy.' },
  { icon: Users, title: 'Direct access', body: 'You work with the people responsible for the outcome. Clear updates, practical decisions and no handoff-heavy process.' },
  { icon: Star, title: '600+ projects, 98%+ success', body: 'Top Rated Plus on Upwork with a 98%+ job success score across 600+ completed projects.' },
]

export default async function ShopifyServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const svc = getShopifyService(slug)
  if (!svc) notFound()

  const url = `/services/shopify/${slug}`
  const jsonLd = renderJsonLd([
    service({
      name: svc.h1,
      description: svc.subtext,
      url,
      serviceType: 'Shopify development',
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: svc.h1, url },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: svc.h1 }]} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-end">
            <div className="max-w-3xl">
              <span className="mw-eyebrow">{svc.eyebrow}</span>
              <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>{svc.h1}</h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.72, marginBottom: '1.35rem', maxWidth: '680px', fontWeight: 300 }}>
                {svc.subtext}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#get-quote" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Get My Shopify Plan <ArrowRight size={16} />
                </a>
                <Link href="/work" className="mw-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Shopify Work
                </Link>
              </div>
            </div>

            <aside className="mw-card" style={{ padding: '1.25rem' }} aria-label="Shopify project starting points">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.8rem' }}>
                First we review
              </p>
              <div className="flex flex-col">
                {svc.challenges.slice(0, 3).map((item, index) => (
                  <div key={item.title} className="flex gap-3" style={{ padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,99,255,0.14)', border: '1px solid rgba(108,99,255,0.26)', color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 800, flexShrink: 0 }}>
                      {index + 1}
                    </span>
                    <span>
                      <span style={{ display: 'block', color: '#fff', fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.35 }}>{item.title}</span>
                      <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.74rem', lineHeight: 1.5, marginTop: '0.2rem' }}>{item.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Challenges ────────────────────────────────────────────────────── */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">COMMON CHALLENGES</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              Problems that quietly cost<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>sales in this category.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {svc.challenges.map((c, i) => (
              <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <AlertCircle size={16} style={{ color: 'rgba(108,99,255,0.8)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              What we can build or improve
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {svc.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: '#080808', backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHY MIRACLE WEBSOFT</span>
            <h2 style={{ color: '#fff' }}>A Shopify partner for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>store growth and execution.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyReasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>{r.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{r.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading={`Ready to build your ${svc.eyebrow.toLowerCase().replace('shopify for ', '').replace('shopify ', '')} Shopify store?`}
        sub="Send your store URL, goals and current blockers. We will review the situation and recommend the right next step."
        btnLabel="Request My Shopify Plan"
        btnHref="/contact"
      />

      {/* Guarantees */}
      <GuaranteeBar guarantees={shopifyGuarantees} />

      <FaqSection faqs={svc.faqs} heading={`${svc.h1} — common questions`} />

      <RelatedServices services={shopifyRelated} />

      {/* ── Contact Form ──────────────────────────────────────────────────── */}
      <section id="get-quote" style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundImage: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(108,99,255,0.07) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: trust signals */}
            <div>
              <span className="mw-eyebrow">REQUEST A SHOPIFY PLAN</span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,44px)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Let&apos;s improve your<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Shopify store.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                Send your store URL, project brief or current challenge. We will reply with practical next steps, likely scope and a fixed-price path forward.
              </p>

              {/* Proof points */}
              <div className="flex flex-col gap-4">
                {[
                  { stat: '600+', label: 'Shopify projects delivered' },
                  { stat: '98%+', label: 'Job success score on Upwork' },
                  { stat: '10+', label: 'Years on Shopify' },
                  { stat: '24h', label: 'Proposal turnaround time' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, minWidth: '52px' }}>{p.stat}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>{p.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="mw-card" style={{ padding: '2.5rem' }}>
              <ServiceContactForm
                service={svc.h1}
                heading={svc.formHeading}
                subtext={svc.formSubtext}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
