import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Shield,
  Clock, Layers, Users, Zap, Code2, Globe, Palette,
  ShoppingBag, TrendingUp, RefreshCw,
  MessageSquare, GitBranch, Star,
} from 'lucide-react'
import WhiteLabelForm from '@/components/WhiteLabelForm'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'White Label Shopify Team for Agencies | Miracle Websoft',
  description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
  alternates: { canonical: 'https://miraclewebsoft.com/white-label' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'White Label Shopify Team for Agencies | Miracle Websoft',
    description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
    url: 'https://miraclewebsoft.com/white-label',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label Shopify Team for Agencies | Miracle Websoft',
    description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
  },
}

const models = [
  {
    icon: <ShoppingBag size={22} />,
    title: 'Per Project',
    sub: 'Fixed scope · Fixed price',
    color: '#6C63FF',
    from: 'From $500',
    description: 'Best for one-off builds, migrations, or feature additions. We quote within 24 hours of receiving the brief.',
    includes: [
      'Detailed scope of work document',
      'Fixed price — no surprises',
      'Delivery in agreed timeline',
      'Code handover or direct deploy',
      'Post-launch support (7 days)',
    ],
    ideal: 'Agencies with occasional Shopify needs or a specific client project in hand.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Hourly',
    sub: 'Flexible · Weekly reports',
    color: '#10B981',
    from: 'From $25/hr',
    description: 'Flexible hours billed weekly. Ideal for ongoing tweaks, support, feature development, or testing us out.',
    includes: [
      'Minimum 10 hrs/week',
      'Weekly time reports',
      'Slack or email communication',
      'Your choice of PM tool',
      'Pause or scale any week',
    ],
    ideal: 'Agencies with a steady stream of smaller Shopify tasks or existing store maintenance.',
    highlight: true,
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Monthly Retainer',
    sub: 'Dedicated capacity · Priority queue',
    color: '#F59E0B',
    from: 'From $1,500/mo',
    description: 'Dedicated team capacity reserved for your agency every month. Priority queue, consistent team, maximum output.',
    includes: [
      '20 dedicated hours/week',
      'Same team, every month',
      'Priority over ad-hoc requests',
      'Monthly strategy call',
      'Rollover unused hours (up to 10)',
    ],
    ideal: 'Agencies with consistent Shopify volume who need a reliable, always-on dev partner.',
  },
]

const services = [
  { icon: <ShoppingBag size={16} />, label: 'Custom Shopify Store Builds', color: '#6C63FF' },
  { icon: <Globe size={16} />, label: 'Platform Migrations to Shopify', color: '#10B981' },
  { icon: <Palette size={16} />, label: 'Theme Design & Customisation', color: '#E1306C' },
  { icon: <Code2 size={16} />, label: 'Shopify App Development', color: '#F59E0B' },
  { icon: <Zap size={16} />, label: 'CRO & Speed Optimisation', color: '#6C63FF' },
  { icon: <TrendingUp size={16} />, label: 'TikTok Shop Integration', color: '#10B981' },
  { icon: <RefreshCw size={16} />, label: 'Ongoing Support & Maintenance', color: '#E1306C' },
  { icon: <Layers size={16} />, label: 'Headless / Hydrogen Builds', color: '#F59E0B' },
]

const portfolio = [
  { name: 'Corridor NYC', category: 'Menswear', location: 'USA', desc: 'Full theme rebuild + custom product builder', result: '+31% mobile CVR', href: 'https://corridornyc.com' },
  { name: 'OTAA', category: 'Accessories', location: 'Australia', desc: 'Store migration + new collections architecture', result: '0% SEO drop', href: 'https://otaa.com' },
  { name: 'Klarity London', category: 'Fine Jewelry', location: 'UK', desc: 'Custom configurator + Shopify app integration', result: '1.2s load time', href: 'https://klarity.london' },
  { name: 'VKTRY', category: 'Sports', location: 'USA', desc: 'Custom landing pages + checkout optimisation', result: '+44% conversion', href: 'https://vktry.com' },
  { name: 'Afnan Perfumes', category: 'Fragrance', location: 'UK', desc: 'WooCommerce → Shopify migration, 5k+ SKUs', result: 'Full migration', href: 'https://afnanperfumes.co.uk' },
  { name: 'Phone Loops', category: 'Tech', location: 'Canada', desc: 'Subscription app + TikTok Shop integration', result: '2× repeat orders', href: 'https://phoneloops.com' },
  { name: 'Nathan James', category: 'Furniture', location: 'USA', desc: 'Bulk variant importer + custom room builder', result: '-28% support tickets', href: 'https://nathanjamesfurniture.com' },
  { name: 'Amuerte Gin', category: 'Spirits', location: 'Belgium', desc: 'Age gate + international shipping rules', result: 'EU + US launch', href: 'https://amuertegin.com' },
]

const whyUs = [
  {
    icon: <Shield size={20} />,
    title: 'NDA before the brief',
    body: 'We sign a mutual NDA before you share any client details, brief, or assets. Confidentiality is non-negotiable for us.',
    color: '#6C63FF',
  },
  {
    icon: <Users size={20} />,
    title: 'We never contact your client',
    body: 'Your client relationship is yours. We never reach out to them directly. All communication flows through you.',
    color: '#10B981',
  },
  {
    icon: <GitBranch size={20} />,
    title: 'White-label deliverables',
    body: 'Code, reports, proposals, and communication — all delivered under your agency branding if you need it.',
    color: '#F59E0B',
  },
  {
    icon: <MessageSquare size={20} />,
    title: 'Your tools, your workflow',
    body: 'We work inside your PM setup — Asana, Jira, ClickUp, Notion, Linear. Slack or email for daily comms.',
    color: '#E1306C',
  },
  {
    icon: <Clock size={20} />,
    title: '48-hour onboarding',
    body: 'Brief received today, dev work starts within 48 hours. No lengthy onboarding cycles or committee approvals.',
    color: '#6C63FF',
  },
  {
    icon: <Star size={20} />,
    title: 'Shopify-only specialists',
    body: 'We don\'t do WordPress, Webflow, or "a bit of everything". 100% Shopify — 10 years deep. That focus is our edge.',
    color: '#10B981',
  },
]

const techStack = [
  { label: 'Shopify Liquid', cat: 'Theming' },
  { label: 'React / Next.js', cat: 'Frontend' },
  { label: 'Shopify Hydrogen', cat: 'Headless' },
  { label: 'Shopify App Bridge', cat: 'Apps' },
  { label: 'Node.js', cat: 'Backend' },
  { label: 'GraphQL / REST API', cat: 'API' },
  { label: 'Figma', cat: 'Design' },
  { label: 'Git / GitHub', cat: 'Delivery' },
]

const faqs = [
  {
    q: 'Do you sign NDAs?',
    a: 'Yes — always, before any brief is shared. We send a mutual NDA the same day you request one. Your client details, project specs, and business information stay strictly confidential.',
  },
  {
    q: 'Can you communicate directly with my client if needed?',
    a: 'Only if you explicitly want us to, and only under your agency brand. By default all communication goes through you so your client never knows we exist.',
  },
  {
    q: 'What is the minimum engagement?',
    a: 'For per-project work there\'s no minimum — one project is fine. For hourly, we ask for a minimum of 10 hours per week. For retainers, the entry point is 20 hours per week.',
  },
  {
    q: 'How fast can you start?',
    a: 'Once the brief is received and scope is agreed, we can start work within 48 hours. For retainer partners, capacity is pre-reserved so work starts the same day.',
  },
  {
    q: 'Do you use our project management tools?',
    a: 'Yes. We work inside Asana, Jira, ClickUp, Notion, Basecamp, Linear — wherever your team already operates. We also use Slack, Teams, or email for day-to-day comms.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'Our team in Chandigarh, India covers significant overlap with USA (EST/PST), UK, and Australia. We also have flexible hours to cover early/late standups across time zones.',
  },
]

const jsonLd = renderJsonLd([
  service({
    name: 'White Label Shopify Development',
    description:
      'Silent Shopify development partner for agencies — build under your brand per project, hourly, or on a monthly retainer. NDA always signed.',
    url: '/white-label',
    serviceType: 'White label Shopify development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'White Label', url: '/white-label' },
  ]),
])

export default function WhiteLabelPage() {
  return (
    <div style={{
      background: 'linear-gradient(170deg, #0a0a0a 0%, #080d14 50%, #0a0a0a 100%)',
      minHeight: '100vh',
      paddingTop: '5rem',
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Background glows */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', left: '20%', width: 900, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,99,255,0.07) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', top: '55%', right: '5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: '4.5rem', paddingBottom: '5.5rem' }}>
        <div className="mw-container">
          <div style={{ maxWidth: 800 }}>
            {/* Badge */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
              <span style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(108,99,255,0.9)', background: 'rgba(108,99,255,0.1)',
                border: '1px solid rgba(108,99,255,0.25)', borderRadius: 9999, padding: '0.3rem 0.9rem',
              }}>White Label Partner Program</span>
              <span style={{
                fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(16,185,129,0.85)', background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)', borderRadius: 9999, padding: '0.3rem 0.9rem',
              }}>NDA Always Signed</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#fff',
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Your agency&apos;s<br />
              <span style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>secret Shopify team.</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: '2.5rem',
              fontWeight: 300,
            }}>
              We build under your brand. You keep the client, the credit, and the margin.
              Hire us per project, by the hour, or on a monthly retainer — no contracts, no lock-in.
            </p>

            {/* Engagement model pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.75rem' }}>
              {[
                { label: 'Per Project', color: '#6C63FF' },
                { label: 'Hourly', color: '#10B981' },
                { label: 'Monthly Retainer', color: '#F59E0B' },
              ].map(m => (
                <span key={m.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.8rem', fontWeight: 600,
                  color: m.color, background: `${m.color}12`,
                  border: `1px solid ${m.color}28`,
                  borderRadius: 9999, padding: '0.45rem 1rem',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.color, display: 'inline-block' }} />
                  {m.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
              {[
                { val: '600+', label: 'Projects delivered' },
                { val: '10+', label: 'Years Shopify-only' },
                { val: '48h', label: 'Onboarding time' },
                { val: '16', label: 'Shopify specialists' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.65rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="#quote-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                borderRadius: 9999, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(108,99,255,0.4)',
              }}>
                Get a Private Quote
                <ArrowRight size={16} />
              </a>
              <Link href="/work" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 1.75rem',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.65)', fontWeight: 600, fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 9999, textDecoration: 'none',
              }}>
                See Our Work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">How it works</span>
            <h2>You front it. We build it.</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Your client never knows we exist unless you want them to.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', maxWidth: 860, margin: '0 auto' }}>
            {[
              {
                n: '01', color: '#6C63FF',
                icon: <Users size={20} />,
                title: 'Share the brief privately',
                body: 'Send us the client brief under NDA. We review and send a detailed proposal with timeline and cost within 24 hours.',
              },
              {
                n: '02', color: '#10B981',
                icon: <Code2 size={20} />,
                title: 'We build — silently',
                body: 'Our team delivers the project inside your PM tools. All code, assets and comms go to you. Your brand, your voice.',
              },
              {
                n: '03', color: '#F59E0B',
                icon: <CheckCircle2 size={20} />,
                title: 'You deliver & invoice',
                body: 'You present to the client, take the credit, and invoice at your rate. We never communicate with them directly.',
              },
            ].map(s => (
              <div key={s.n} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '2rem 1.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -10, right: 14,
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '5rem', fontWeight: 700,
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1, userSelect: 'none',
                }}>{s.n}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${s.color}15`, border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: s.color, marginBottom: '1.25rem',
                }}>{s.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Engagement models</span>
            <h2>Hire us the way that fits your agency</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>One-off project, ongoing hours, or a dedicated monthly team — you choose.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', maxWidth: 1000, margin: '0 auto' }}>
            {models.map(m => (
              <div key={m.title} style={{
                background: m.highlight
                  ? 'linear-gradient(145deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.04) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${m.highlight ? 'rgba(16,185,129,0.28)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 22,
                padding: '2rem 1.75rem',
                position: 'relative',
                display: 'flex', flexDirection: 'column', gap: '1.1rem',
              }}>
                {m.highlight && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#10B981', background: '#0a0a0a',
                    border: '1px solid rgba(16,185,129,0.35)',
                    borderRadius: 9999, padding: '0.2rem 0.75rem',
                    whiteSpace: 'nowrap',
                  }}>Most Popular</div>
                )}

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 13,
                    background: `${m.color}15`, border: `1px solid ${m.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: m.color, flexShrink: 0,
                  }}>{m.icon}</div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    color: m.color, background: `${m.color}12`,
                    border: `1px solid ${m.color}25`,
                    borderRadius: 9999, padding: '0.25rem 0.75rem',
                    whiteSpace: 'nowrap', alignSelf: 'flex-start',
                  }}>{m.from}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{m.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>{m.sub}</p>
                </div>

                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{m.description}</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {m.includes.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={13} style={{ color: m.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: `${m.color}08`, border: `1px solid ${m.color}15`,
                  borderRadius: 10, padding: '0.75rem 0.9rem',
                }}>
                  <span style={{ fontSize: '0.7rem', color: `${m.color}cc`, fontWeight: 500, lineHeight: 1.5 }}>
                    <strong style={{ color: m.color }}>Ideal for:</strong> {m.ideal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '2.5rem 2rem',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
                <span className="mw-eyebrow" style={{ display: 'block' }}>What we deliver</span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: 0 }}>Every Shopify service under one roof</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {services.map(s => (
                  <div key={s.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.9rem 1rem',
                    background: `${s.color}08`, border: `1px solid ${s.color}18`,
                    borderRadius: 12,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                      background: `${s.color}12`, border: `1px solid ${s.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color,
                    }}>{s.icon}</div>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.58)', fontWeight: 400 }}>{s.label}</span>
                  </div>
                ))}
              </div>
              {/* Tech stack */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>Tech Stack</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {techStack.map(t => (
                    <span key={t.label} style={{
                      fontSize: '0.75rem', padding: '0.3rem 0.85rem',
                      borderRadius: 9999,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.5)',
                    }}>
                      {t.label}
                      <span style={{ marginLeft: '0.4rem', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}>· {t.cat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Our work</span>
            <h2>Brands we&apos;ve built & grown</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              A sample of real projects across fashion, beauty, sports, and home goods.
              Many more delivered anonymously for agency partners.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1rem', maxWidth: 1100, margin: '0 auto 2rem' }}>
            {portfolio.map(p => (
              <div key={p.name} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 18,
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
              }}>
                {/* Colour bar top */}
                <div style={{ height: 3, borderRadius: 9999, background: 'linear-gradient(90deg, #6C63FF, #10B981)', opacity: 0.5 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.15rem' }}>{p.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>{p.category} · {p.location}</div>
                  </div>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.6)',
                    }}>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.72rem', fontWeight: 700,
                  color: '#10B981', background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 8, padding: '0.3rem 0.7rem',
                  alignSelf: 'flex-start',
                }}>
                  <CheckCircle2 size={11} />
                  {p.result}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/work" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.85rem', fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 9999, padding: '0.7rem 1.5rem',
              textDecoration: 'none', background: 'rgba(255,255,255,0.03)',
            }}>
              View all 600+ projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Why agencies choose us</span>
            <h2>Built for agency partnerships</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Everything we do is designed to make you look good in front of your client.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: 1000, margin: '0 auto' }}>
            {whyUs.map(w => (
              <div key={w.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18,
                padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: `${w.color}12`, border: `1px solid ${w.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: w.color,
                }}>{w.icon}</div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', margin: 0 }}>{w.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center',
            padding: '2rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, maxWidth: 900, margin: '0 auto',
          }}>
            {[
              { label: 'Top Rated Plus on Upwork', sub: 'Top 3% globally', color: '#14a800' },
              { label: 'Shopify Partner Directory', sub: 'Verified since 2015', color: '#96BF48' },
              { label: 'Clutch 5.0★', sub: 'Verified agency reviews', color: '#e63329' },
              { label: 'Trustpilot Excellent', sub: 'Verified reviews', color: '#00B67A' },
            ].map(t => (
              <div key={t.label} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
                padding: '0.85rem 1.5rem',
                background: `${t.color}08`, border: `1px solid ${t.color}18`,
                borderRadius: 14, textAlign: 'center',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: t.color }}>{t.label}</span>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)' }}>{t.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE FORM ─── */}
      <section id="quote-form" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Get started</span>
            <h2>Get a private quote</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Tell us what you need. We&apos;ll reply with a tailored proposal within 24 hours — NDA signed first if you need it.
            </p>
          </div>
          <WhiteLabelForm />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">FAQ</span>
            <h2>Common questions from agencies</h2>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map(f => (
              <div key={f.q} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '1.4rem 1.6rem',
              }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{f.q}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
        <div className="mw-container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(16,185,129,0.07) 100%)',
            border: '1px solid rgba(108,99,255,0.2)',
            borderRadius: 24,
            padding: '3.5rem 2rem',
            textAlign: 'center',
            maxWidth: 640,
            margin: '0 auto',
          }}>
            <div style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}>
              Ready to scale your<br />agency&apos;s Shopify output?
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: 440, margin: '0 auto 2rem' }}>
              Send us a brief. We&apos;ll come back with a proposal, timeline, and price — no obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="#quote-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.95rem 1.9rem',
                background: 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
                color: '#fff', fontWeight: 700, fontSize: '0.92rem',
                borderRadius: 9999, textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(108,99,255,0.4)',
              }}>
                Get a Private Quote
                <ArrowRight size={15} />
              </a>
              <Link href="/bio/owner" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 1.75rem',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 9999, textDecoration: 'none',
              }}>
                Talk to Karam directly
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· White Label Shopify Development · Confidential
        </p>
      </div>
    </div>
  )
}
