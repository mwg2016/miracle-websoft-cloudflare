import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { partners, universalPerks } from '@/data/partners'
import { breadcrumb, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Partner Program — Refer Web Clients & Get Paid | Miracle Websoft',
  description:
    'Partner with us if you serve small businesses — accountants, lawyers, coaches, banks, branding agencies, printers, co-working spaces. Earn $50–$150 per converted referral. Monthly payouts.',
  alternates: { canonical: 'https://miraclewebsoft.com/partners' },
  openGraph: {
    title: 'Partner Program — Refer Web Clients & Get Paid',
    description:
      "If your business serves small businesses, you're a website referral waiting to happen. Earn $50–$150 per project.",
    url: 'https://miraclewebsoft.com/partners',
    type: 'website',
  },
}

// First-touchpoint journey — the bedrock argument for this whole program.
const journey = [
  { title: 'Files an LLC', partner: 'Business lawyer' },
  { title: 'Opens a bank account', partner: 'Local bank' },
  { title: 'Hires an accountant', partner: 'CPA' },
  { title: 'Gets advice', partner: 'Business coach' },
  { title: 'Designs a logo', partner: 'Branding agency' },
  { title: 'Prints business cards', partner: 'Printer' },
  { title: 'Moves into co-working', partner: 'Co-working space' },
  { title: 'Needs a website', partner: 'Miracle Websoft' },
]

const tiers = [
  { name: 'Starter referral', fee: '$50', pkg: 'Customer buys our Starter package ($299)' },
  { name: 'Business referral', fee: '$75', pkg: 'Customer buys our Business package ($499)' },
  { name: 'E-commerce referral', fee: '$150', pkg: 'Customer buys our E-commerce package ($899)' },
]

const whyUs = [
  { title: 'Fixed pricing', desc: 'Your client knows the cost up front. No scope creep, no awkward conversation.' },
  { title: '7–14 day delivery', desc: 'Most sites go live within two weeks, so you look fast too.' },
  { title: 'All-in package', desc: 'Domain, hosting, design and content included. Your client doesn’t need to learn anything.' },
  { title: 'White-label option', desc: 'Lawyers and branding studios can resell under their own brand.' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Partner Program — Miracle Websoft',
    description:
      'Channel partner program for accountants, lawyers, coaches, banks, branding agencies, printers and co-working spaces. Refer small business web clients and earn $50–$150 per converted project.',
    url: 'https://miraclewebsoft.com/partners',
    type: 'CollectionPage',
  }),
  service({
    name: 'Miracle Websoft Partner Program',
    description: 'Channel partner program for small-business-adjacent service providers. Tiered referral fees, co-branded kits, white-label options.',
    url: '/partners',
    serviceType: 'Partner program',
    areaServed: ['United States', 'United Kingdom', 'Australia'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Partners', url: '/partners' },
  ]),
  itemList({
    name: 'Partner types',
    description: 'Channel partner types we work with — each with a dedicated partnership model.',
    items: partners.map((p) => ({
      name: p.shortName,
      url: `https://miraclewebsoft.com/partners/${p.slug}`,
      description: p.firstTouchAngle,
    })),
  }),
])

export default function PartnersHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="mw-eyebrow">Channel partner program</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', maxWidth: '18ch' }}>
              If your business serves small businesses, you&apos;re a <span className="mw-mark">website referral</span> waiting to happen.
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '50ch' }}>
              By the time a new business owner reaches you, they&apos;re weeks away from needing a website. We pay accountants,
              lawyers, coaches, banks, branding studios, printers and co-working spaces $50–$150 per converted referral.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <Link href="#apply" className="mw-btn-accent">Send your first lead <ArrowRight size={16} /></Link>
              <Link href="#partner-types" className="mw-btn-outline">See partner types</Link>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--text-3)' }}>
              No sign-up, no contract. Share the lead and get paid when they sign.
            </p>
          </div>
          <dl className="audit-facts" style={{ marginTop: 0 }}>
            <div><dt>Per referral</dt><dd>$50–150</dd></div>
            <div><dt>Payouts</dt><dd>Monthly</dd></div>
            <div><dt>Cost to join</dt><dd>$0</dd></div>
          </dl>
        </div>
      </section>

      {/* The journey */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16" style={{ marginBottom: '3rem' }}>
            <div>
              <p className="mw-eyebrow">The new-business journey</p>
              <h2 style={{ maxWidth: '14ch' }}>You&apos;re the first seven steps. We&apos;re the eighth.</h2>
            </div>
            <p style={{ alignSelf: 'end', maxWidth: '54ch' }}>
              Every new business owner walks the same path: the lawyer, the bank, the accountant, the coach, the designer,
              the printer, the co-working space. Weeks later they search &quot;website developer near me&quot;. We&apos;d rather
              they asked you first, so we pay you for it.
            </p>
          </div>

          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8" style={{ borderTop: '1px solid var(--text-1)' }}>
            {journey.map((j, i) => {
              const isLast = i === journey.length - 1
              return (
                <li
                  key={j.title}
                  style={{
                    padding: '1.1rem 1rem 1.25rem 0',
                    borderBottom: '1px solid var(--border)',
                    borderTop: isLast ? '2px solid var(--accent)' : undefined,
                    marginTop: isLast ? -1 : undefined,
                    paddingLeft: isLast ? '0.75rem' : undefined,
                    background: isLast ? 'var(--bg-raised)' : undefined,
                  }}
                >
                  <span className="mw-num" style={{ color: isLast ? 'var(--accent)' : undefined }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-1)', marginTop: '0.6rem', lineHeight: 1.3 }}>{j.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.25rem' }}>{j.partner}</div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Partner types */}
      <section id="partner-types" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Partner types</p>
          <h2 style={{ maxWidth: '20ch' }}>Seven partnerships. One reason: your clients need a website.</h2>
          <p style={{ marginTop: '1.25rem', marginBottom: '2.5rem', maxWidth: '54ch' }}>
            Each partner type has its own model, fee and assets. Pick the one that matches your business.
          </p>
          <ul className="svc-table">
            {partners.map((p, i) => (
              <li key={p.slug}>
                <Link href={`/partners/${p.slug}`}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-name">{p.shortName}</span>
                  <span className="svc-line">{p.firstTouchAngle}</span>
                  <span className="svc-price">{p.partnershipBadge}</span>
                  <ArrowUpRight size={18} className="svc-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The economics */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">The economics</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Three tiers. Paid monthly. No cap.</h2>
          <dl className="grid md:grid-cols-3" style={{ borderTop: '1px solid var(--text-1)' }}>
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={i > 0 ? 'md:border-l md:pl-6 border-t md:border-t-0' : ''}
                style={{ padding: '1.5rem 1.5rem 1.75rem 0', borderColor: 'var(--border)' }}
              >
                <dt className="mw-num" style={{ letterSpacing: '0.1em' }}>TIER {i + 1} · {t.name.toUpperCase()}</dt>
                <dd style={{ margin: 0 }}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.75rem, 5vw, 3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0.5rem 0', color: 'var(--text-1)' }}>{t.fee}</div>
                  <p style={{ fontSize: '0.92rem', margin: 0 }}>{t.pkg}</p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="founder-card" style={{ marginTop: '3.5rem', maxWidth: '62ch' }}>
            <p className="mw-num" style={{ marginBottom: '0.75rem' }}>A WORKED EXAMPLE</p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)' }}>
              An accountant with 200 small-business clients refers 1 in 10 over a year: 20 referrals. Half convert at an
              average tier 2 fee of $75. <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>That&apos;s $750 a year</strong> for
              handing out a one-pager, with no overhead and no risk.
            </p>
          </div>
        </div>
      </section>

      {/* Universal perks */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Two more ways to work with us</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Refer, resell, or both. Pick per client.</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {universalPerks.map((perk, i) => (
              <article key={perk.title} style={{ borderTop: '1px solid var(--text-1)', paddingTop: '1.5rem' }}>
                <span className="mw-num">{String.fromCharCode(65 + i)}</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0 0.5rem', lineHeight: 1.3 }}>{perk.title}</h3>
                <p style={{ fontWeight: 500, color: 'var(--text-1)', marginBottom: '1rem' }}>{perk.tagline}</p>
                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  {perk.body.map((para, j) => <p key={j} style={{ fontSize: '0.95rem', margin: 0 }}>{para}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">Why us, not the freelancer next door</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Send clients without worrying how it&apos;ll go.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {whyUs.map((w, i) => (
              <div key={w.title} style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0 2rem' }}>
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: '1.05rem', margin: '0.75rem 0 0.5rem' }}>{w.title}</h3>
                <p style={{ fontSize: '0.93rem', margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="mw-ink" style={{ padding: '5rem 0', scrollMarginTop: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Ready to refer?</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', maxWidth: '14ch' }}>Pick your partner type and send the lead.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '42ch' }}>
              No application, no contract. Each page has a referral form tagged for your partner type, or just WhatsApp
              Karam directly. We reply within 24 hours.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8" style={{ borderTop: '1px solid var(--border-hover)' }}>
            {partners.map((p) => (
              <li key={p.slug} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link
                  href={`/partners/${p.slug}#apply`}
                  className="flex items-center justify-between gap-4 group"
                  style={{ padding: '1rem 0', color: 'var(--text-1)', fontWeight: 500 }}
                >
                  <span>{p.shortName}</span>
                  <ArrowRight size={15} style={{ color: 'var(--text-3)' }} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
