import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, ArrowDown, Calculator, Scale, GraduationCap, Landmark,
  Palette, Printer, Building2, DollarSign, Zap, Users, CheckCircle2,
  Repeat, Sparkles,
} from 'lucide-react'
import { partners, type Partner } from '@/data/partners'
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

const iconMap = {
  calculator: Calculator,
  scale: Scale,
  graduation: GraduationCap,
  landmark: Landmark,
  palette: Palette,
  printer: Printer,
  building: Building2,
} as const

// First-touchpoint journey — the bedrock argument for this whole program.
const journey = [
  { step: '1', title: 'Files an LLC', partner: 'Business lawyer' },
  { step: '2', title: 'Opens a bank account', partner: 'Local bank' },
  { step: '3', title: 'Hires an accountant', partner: 'CPA' },
  { step: '4', title: 'Gets advice', partner: 'Business coach' },
  { step: '5', title: 'Designs a logo', partner: 'Branding agency' },
  { step: '6', title: 'Prints business cards', partner: 'Printer' },
  { step: '7', title: 'Moves into co-working', partner: 'Co-working space' },
  { step: '★', title: 'NEEDS A WEBSITE', partner: 'Miracle Websoft' },
]

const stats = [
  { value: '$150', unit: 'max', label: 'Per referral, paid monthly' },
  { value: '7', unit: '', label: 'Partner types covered' },
  { value: '24h', unit: '', label: 'Onboarding turnaround' },
  { value: '$0', unit: '', label: 'Cost to partner' },
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
      <section
        className="pt-32 pb-20"
        style={{
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse at 60% 40%, rgba(108,99,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(52,211,153,0.08) 0%, transparent 50%)',
        }}
      >
        <div className="mw-container">
          <span className="mw-eyebrow">CHANNEL PARTNER PROGRAM</span>
          <h1 className="text-white mb-5" style={{ maxWidth: '760px' }}>
            If your business serves small businesses,
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
              you&apos;re a website referral waiting to happen.
            </em>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              maxWidth: '600px',
              marginBottom: '2.5rem',
            }}
          >
            By the time a new business owner reaches you, they&apos;re weeks away from realising they need a website.
            We pay accountants, lawyers, coaches, banks, branding studios, printers and co-working spaces $50–$150 per
            converted referral. Monthly payouts. No quotas. No cost to join.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="#partner-types" className="mw-btn-primary">
              See partner types <ArrowDown size={16} />
            </Link>
            <Link
              href="#apply"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              Apply to partner
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          background: '#111',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '1.75rem 1.5rem',
                  textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                  {s.value}
                  <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{s.unit}</span>
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '0.35rem',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Funnel — why this works */}
      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">THE NEW-BUSINESS JOURNEY</span>
            <h2 style={{ color: '#fff' }}>
              You&apos;re the first 7 steps.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                We&apos;re step 8 — the one they search for on Google.
              </em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              Every new business owner walks the same path. They touch a partner at every step — the lawyer,
              the bank, the accountant, the coach, the designer, the printer, the co-working space. Then, weeks
              later, they hit Google and search &quot;website developer near me.&quot; That last step is the one we
              want to skip. So we pay you for it.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {journey.map((j, i) => {
              const isLast = i === journey.length - 1
              return (
                <div
                  key={j.step}
                  style={{
                    border: `1px solid ${isLast ? 'rgba(108,99,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    background: isLast ? 'rgba(108,99,255,0.08)' : 'rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    padding: '1.15rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: isLast ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {j.step}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isLast ? '#fff' : 'rgba(255,255,255,0.85)',
                      lineHeight: 1.3,
                    }}
                  >
                    {j.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      color: isLast ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                      lineHeight: 1.3,
                      fontWeight: isLast ? 700 : 400,
                    }}
                  >
                    {j.partner}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner type cards */}
      <section id="partner-types" className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PARTNER TYPES</span>
            <h2 style={{ color: '#fff' }}>
              Seven partnerships.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>One reason: your clients need a website.</em>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '520px',
                margin: '0 auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              Each partner type has its own dedicated program — different model, different fee, different assets.
              Click into the one that matches your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p) => {
              const Icon = iconMap[p.iconKey]
              return (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}`}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: `1px solid ${p.accentBorder}`,
                    background: p.accentBg,
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ height: '3px', background: p.accentGradient }} />
                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: p.accentBg,
                        border: `1px solid ${p.accentBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      <Icon size={20} style={{ color: p.accentColor }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: p.accentColor,
                        marginBottom: '0.55rem',
                      }}
                    >
                      {p.partnershipBadge}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
                      {p.shortName}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.65,
                        flex: 1,
                        marginBottom: '1rem',
                      }}
                    >
                      {p.firstTouchAngle}
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: p.accentColor,
                        fontWeight: 700,
                      }}
                    >
                      See {p.shortName} program <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* The economics */}
      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">THE ECONOMICS</span>
            <h2 style={{ color: '#fff' }}>
              Three tiers. One simple structure.
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Paid monthly. No cap.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { name: 'Starter referral', fee: '$50', pkg: 'Customer buys our Starter package ($299)' },
              { name: 'Business referral', fee: '$75', pkg: 'Customer buys our Business package ($499)' },
              { name: 'E-commerce referral', fee: '$150', pkg: 'Customer buys our E-commerce package ($899)' },
            ].map((tier, i) => (
              <div
                key={tier.name}
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '2rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Tier {i + 1}
                </p>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                  {tier.fee}
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                  {tier.name}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  {tier.pkg}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(108,99,255,0.04)',
              border: '1px solid rgba(108,99,255,0.15)',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Sparkles size={11} /> Math example
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              An accountant with 200 active small business clients refers 1 in 10 over a year = 20 referrals. Half
              convert. Average tier 2 = $75. <strong style={{ color: '#fff' }}>= $750 / year</strong> for what is
              essentially handing out a one-pager. Multiply by 5 years of compounding referrals and it becomes a real
              line item. No overhead, no risk.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHY US, NOT THE FREELANCER NEXT DOOR</span>
            <h2 style={{ color: '#fff' }}>
              The reason you can send clients
              <br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>without embarrassment.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: 'Fixed pricing', desc: 'Your client always knows the cost upfront. No surprises, no scope creep, no awkward conversation.' },
              { icon: CheckCircle2, title: '7-day delivery', desc: 'Sites go live in 7–14 days. You look fast because we are.' },
              { icon: DollarSign, title: 'All-in package', desc: 'Domain + hosting + design + content included. Your client doesn\'t need to learn anything.' },
              { icon: Repeat, title: 'White-label option', desc: 'Lawyers and branding studios can resell under their brand. Your client never knows we exist.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                }}
              >
                <Icon size={20} style={{ color: 'var(--accent)', marginBottom: '0.9rem' }} />
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section
        id="apply"
        style={{ background: '#0a0a0a', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="mw-container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <span className="mw-eyebrow">READY TO PARTNER?</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            Pick your partner type.
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Apply on the right page.</em>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}
          >
            Each program has its own application form so we can tailor your onboarding (different kits, different
            assets, different payout terms). Pick yours below — applications reviewed within 24 hours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {partners.map((p) => {
              const Icon = iconMap[p.iconKey]
              return (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}#apply`}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255,255,255,0.02)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: '#fff',
                  }}
                >
                  <Icon size={16} style={{ color: p.accentColor }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, textAlign: 'left' }}>
                    Apply as a {p.shortName}
                  </span>
                  <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
