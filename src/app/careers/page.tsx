import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { CheckCircle2, Code2, Layers, Zap, Users } from 'lucide-react'
import CareersForm from '@/components/careers/CareersForm'
import { breadcrumb, jobPosting, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
  description: 'We are always looking for talented Shopify developers to join our team — from freshers with basic HTML/CSS/JS to senior developers with deep Liquid and app dev experience.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/careers' },
  openGraph: {
    title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
    description: 'We are always looking for talented Shopify developers to join our team — from freshers with basic HTML/CSS/JS to senior developers with deep Liquid and app dev experience.',
    url: 'https://www.miraclewebsoft.com/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
    description: 'We are always looking for talented Shopify developers to join our team — from freshers with basic HTML/CSS/JS to senior developers with deep Liquid and app dev experience.',
  },
}

const openRoles = [
  {
    title: 'Shopify Developer — Junior',
    type: 'Full-time',
    icon: Code2,
    color: '#6C63FF',
    colorDim: 'rgba(108,99,255,0.12)',
    level: 'Entry level',
    description: 'Perfect if you know the basics of web development and want to grow into a Shopify specialist. We will teach you Liquid, theme customisation, and everything Shopify — you bring the eagerness to learn.',
    requirements: [
      'Solid understanding of HTML, CSS, and JavaScript',
      'Basic understanding of how websites work',
      'Willingness to learn Shopify Liquid templating',
      'Good communication and attention to detail',
      'Ability to follow design specs and instructions',
    ],
    niceToHave: [
      'Any prior experience with Shopify themes',
      'Familiarity with Git / version control',
      'Experience with any CSS framework (Bootstrap, Tailwind)',
    ],
  },
  {
    title: 'Shopify Developer — Mid-Level',
    type: 'Full-time',
    icon: Layers,
    color: '#10B981',
    colorDim: 'rgba(16,185,129,0.12)',
    level: '1–3 years',
    description: 'You have worked on Shopify projects before and understand the platform. You can customise themes, solve layout issues, and work with clients to bring designs to life.',
    requirements: [
      '1–3 years of Shopify development experience',
      'Proficiency in Liquid, HTML, CSS, and JavaScript',
      'Experience customising Shopify themes (Dawn or custom)',
      'Ability to implement pixel-perfect designs',
      'Basic understanding of Shopify sections and blocks',
    ],
    niceToHave: [
      'Experience with Shopify metafields and metaobjects',
      'Familiarity with Shopify 2.0 architecture',
      'Basic React / Next.js knowledge',
      'Experience with third-party Shopify app integrations',
    ],
  },
  {
    title: 'Shopify Developer — Senior',
    type: 'Full-time',
    icon: Zap,
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.12)',
    level: '3+ years',
    description: 'You are comfortable building complex Shopify solutions end-to-end — custom themes, private apps, Hydrogen storefronts, and performance optimisation. You take ownership and deliver.',
    requirements: [
      '3+ years of Shopify development experience',
      'Expert in Liquid, JavaScript, and CSS',
      'Experience building custom Shopify apps (Node.js / React)',
      'Deep knowledge of Shopify APIs (REST, GraphQL, Storefront)',
      'Track record of handling complex, large-scale projects',
    ],
    niceToHave: [
      'Experience with Shopify Hydrogen / Remix',
      'Knowledge of CRO and Core Web Vitals optimisation',
      'Experience with Shopify Plus features (Checkout Extensibility)',
      'Upwork or freelance portfolio with verified reviews',
    ],
  },
  {
    title: 'Shopify Theme Developer',
    type: 'Full-time',
    icon: Users,
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.12)',
    level: '1–4 years',
    description: 'Your focus is on the front end — beautiful, fast, and conversion-optimised Shopify themes. You are great at translating Figma designs into pixel-perfect Shopify stores.',
    requirements: [
      '1–4 years of Shopify theme development',
      'Strong CSS skills — animations, layouts, responsive design',
      'Comfortable working from Figma / design specs',
      'Experience building custom sections and blocks',
      'Eye for detail and pixel-perfect implementation',
    ],
    niceToHave: [
      'Experience with CSS animations and micro-interactions',
      'Knowledge of Shopify speed / performance optimisation',
      'Familiarity with Shopify metafields for dynamic content',
      'Experience in the fashion / clothing niche on Shopify',
    ],
  },
]

const perks = [
  { label: 'Full-time', sub: 'Stable full-time position' },
  { label: 'Real projects', sub: '600+ completed — fashion & clothing brands' },
  { label: 'Growth path', sub: 'Junior → Mid → Senior → Lead' },
  { label: 'Good pay', sub: 'Based on skill, not just title' },
  { label: 'Stable work', sub: '10+ years in business, consistent clients' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Careers — Miracle Websoft',
    description:
      'Shopify developer jobs at Miracle Websoft — Junior, Mid-level, Senior and Theme Developer roles. Full-time, remote-friendly, based out of Chandigarh, India.',
    url: 'https://www.miraclewebsoft.com/careers',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]),
  ...openRoles.map((r) =>
    jobPosting({
      title: r.title,
      description: `${r.description} Experience level: ${r.level}. Requirements: ${r.requirements.join('; ')}. Nice to have: ${r.niceToHave.join('; ')}.`,
      datePosted: '2026-01-01',
      validThrough: '2026-12-31',
      employmentType: 'FULL_TIME',
      url: '/careers',
      experienceRequirements: r.level,
      skills: r.requirements,
      qualifications: r.requirements,
    })
  ),
])

export default function CareersPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container">
        <div className="mb-6"><Breadcrumb items={[{ label: 'Careers' }]} /></div>

        {/* Hero */}
        <div style={{ maxWidth: '720px', marginBottom: '5rem' }}>
          <span className="mw-eyebrow">We&apos;re hiring</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(30px,4.5vw,54px)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Join a team that ships<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>great Shopify work.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            We are Miracle Websoft — a Shopify-specialist agency with 10+ years experience, 600+ completed projects, and a Top Rated Plus badge on Upwork. We work with fashion and clothing brands worldwide, and we are always looking for good developers to grow with us.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
            Whether you are just starting out with basic HTML/CSS/JS, or you are an experienced Shopify developer — if you are talented, hard-working, and care about quality, we want to hear from you.
          </p>
        </div>

        {/* Perks row */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Why work with us</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {perks.map(p => (
              <div key={p.label} style={{ padding: '1rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>{p.label}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles */}
        <div style={{ marginBottom: '6rem' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>Open roles</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.15, marginBottom: '2.5rem' }}>
            Current positions
          </h2>

          <div className="flex flex-col gap-5">
            {openRoles.map((role) => {
              const Icon = role.icon
              return (
                <div key={role.title} style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  {/* Role header */}
                  <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: role.colorDim, border: `1px solid ${role.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: role.color }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0 }}>{role.title}</h3>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: '9999px', background: role.colorDim, color: role.color, border: `1px solid ${role.color}35` }}>{role.level}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{role.type}</div>
                    </div>
                    <a href="#apply" style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', background: role.colorDim, color: role.color, fontSize: '0.78rem', fontWeight: 600, border: `1px solid ${role.color}30`, textDecoration: 'none', flexShrink: 0, transition: 'all 0.2s' }}>
                      Apply now
                    </a>
                  </div>

                  {/* Role body */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-0" style={{ padding: '1.75rem 2rem', gap: '1.5rem' }}>
                    {/* Description */}
                    <div>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{role.description}</p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem' }}>Requirements</p>
                      <div className="flex flex-col gap-2">
                        {role.requirements.map(r => (
                          <div key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={13} style={{ color: role.color, flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nice to have */}
                    <div>
                      <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem' }}>Nice to have</p>
                      <div className="flex flex-col gap-2">
                        {role.niceToHave.map(r => (
                          <div key={r} className="flex items-start gap-2">
                            <div style={{ width: '13px', height: '13px', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                            </div>
                            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Open application note */}
          <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.75rem', borderRadius: '14px', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>Don&apos;t see your exact role?</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>We always welcome open applications. If you believe you can add value to our team, send us your details and we will be in touch when the right opportunity arises.</div>
            </div>
            <a href="#apply" style={{ padding: '0.55rem 1.25rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: '#a5a0ff', fontSize: '0.78rem', fontWeight: 600, border: '1px solid rgba(108,99,255,0.25)', textDecoration: 'none', flexShrink: 0 }}>
              Submit open application
            </a>
          </div>
        </div>

        {/* Application Form Section */}
        <div id="apply" style={{ scrollMarginTop: '7rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 xl:gap-16 items-start">

            {/* Left */}
            <div>
              <span className="mw-eyebrow">Apply now</span>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(26px,3.5vw,44px)', lineHeight: 1.15, marginBottom: '1rem' }}>
                Think you&apos;re a good fit?<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Let&apos;s talk.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
                We hire at every level — from candidates with just basic HTML, CSS, and JavaScript knowledge all the way to senior developers with years of Shopify experience. What matters most is your attitude, your hunger to learn, and your care for quality.
              </p>

              {/* What we look for */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>What we look for in every candidate</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    'Reliability — you do what you say you will do',
                    'Attention to detail — you notice things others miss',
                    'Communication — clear, honest, and timely updates',
                    'Curiosity — you want to understand the why, not just the how',
                    'Pride in your work — you care whether the end result is good',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>Our hiring process</p>
                <div className="flex flex-col gap-3">
                  {[
                    { step: '01', title: 'Apply', desc: 'Fill in the form and attach your resume.' },
                    { step: '02', title: 'Review', desc: 'We personally review every application within 3–5 business days.' },
                    { step: '03', title: 'Technical chat', desc: 'A short call to discuss your skills and a small practical task.' },
                    { step: '04', title: 'Offer', desc: 'If it is a match, we send an offer and agree on a start date.' },
                  ].map(s => (
                    <div key={s.step} className="flex items-start gap-4">
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent)', minWidth: '28px', paddingTop: '2px' }}>{s.step}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.15rem' }}>{s.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div style={{ position: 'sticky', top: '7rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2rem' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(108,99,255,0.3),rgba(108,99,255,0.1))', border: '2px solid rgba(108,99,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>K</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Apply to Miracle Websoft</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>All levels welcome · Full-time · India</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  We review every application · Response within 3–5 days
                </div>

                <CareersForm />
              </div>

              <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
                {['🔒 Confidential', '📄 Resume optional', '✓ All levels welcome'].map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
