import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CareersForm from '@/components/careers/CareersForm'
import { breadcrumb, jobPosting, renderJsonLd, webPage } from '@/lib/jsonld'
import { HIRING_OPEN } from '@/lib/careers'

const metaDescription = HIRING_OPEN
  ? 'We are always looking for talented Shopify developers to join our team — from freshers with basic HTML/CSS/JS to senior developers with deep Liquid and app dev experience.'
  : 'Miracle Websoft is not hiring right now. Check back later for Shopify developer openings.'

export const metadata: Metadata = {
  title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
  description: metaDescription,
  alternates: { canonical: 'https://miraclewebsoft.com/careers' },
  openGraph: {
    title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
    description: metaDescription,
    url: 'https://miraclewebsoft.com/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers — Join Miracle Websoft | Shopify Developer Jobs',
    description: metaDescription,
  },
}

const openRoles = [
  {
    title: 'Shopify Developer — Junior',
    type: 'Full-time',
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
  { label: 'Real projects', sub: '700+ Shopify projects since 2015' },
  { label: 'Growth path', sub: 'Junior → Mid → Senior → Lead' },
  { label: 'Good pay', sub: 'Based on skill, not just title' },
  { label: 'Stable work', sub: 'In business since 2015' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Careers — Miracle Websoft',
    description:
      'Shopify developer jobs at Miracle Websoft — Junior, Mid-level, Senior and Theme Developer roles. Full-time, remote-friendly, based out of Chandigarh, India.',
    url: 'https://miraclewebsoft.com/careers',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]),
  ...(HIRING_OPEN ? openRoles : []).map((r) =>
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

const lookFor = [
  'Reliability — you do what you say you will do',
  'Attention to detail — you notice things others miss',
  'Communication — clear, honest, and timely updates',
  'Curiosity — you want to understand the why, not just the how',
  'Pride in your work — you care whether the end result is good',
]

const hiringSteps = [
  { step: '01', title: 'Apply', desc: 'Fill in the form and attach your resume.' },
  { step: '02', title: 'Review', desc: 'We personally review every application within 3–5 business days.' },
  { step: '03', title: 'Technical chat', desc: 'A short call to discuss your skills and a small practical task.' },
  { step: '04', title: 'Offer', desc: 'If it is a match, we send an offer and agree on a start date.' },
]

const listHead: React.CSSProperties = { fontFamily: 'var(--font-geist-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '0.5rem' }

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2rem' }}><Breadcrumb items={[{ label: 'Careers' }]} /></div>
          <p className="mw-eyebrow">{HIRING_OPEN ? <>We&apos;re hiring</> : 'Careers · not hiring right now'}</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
            Join a small team that ships <span className="mw-mark">good Shopify work.</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '54ch' }}>
            Miracle Websoft is a 16-person, in-house Shopify team in India. Since 2015 we&apos;ve delivered 700+ Shopify projects and hold Top Rated Plus on Upwork{HIRING_OPEN ? '. We are always looking for good developers to grow with us' : ''}.
          </p>
          {HIRING_OPEN && (
            <p style={{ marginTop: '1rem', maxWidth: '54ch' }}>
              Whether you are just starting out with HTML, CSS and JavaScript, or you are an experienced Shopify developer: if you care about quality, we want to hear from you.
            </p>
          )}

          <p style={{ ...listHead, marginTop: '3.5rem' }}>Why work with us</p>
          <dl className="grid grid-cols-2 md:grid-cols-5" style={{ borderTop: '1px solid var(--text-1)' }}>
            {perks.map(p => (
              <div key={p.label} style={{ padding: '1.25rem 1.25rem 1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                <dt style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: '0.3rem' }}>{p.label}</dt>
                <dd style={{ fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{p.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {!HIRING_OPEN && (
        <section style={{ background: 'var(--bg-deep)', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
          <div className="mw-container grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '18ch', marginBottom: '1rem' }}>We&apos;re not hiring at the moment.</h2>
              <p style={{ maxWidth: '54ch' }}>
                All positions are currently filled and we are not accepting applications. New openings will be listed on this page as soon as they come up.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/about" className="mw-btn-outline">About the team</Link>
              <Link href="/work" className="mw-btn-outline">See our work</Link>
            </div>
          </div>
        </section>
      )}

      {HIRING_OPEN && (<>
        <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="mw-container">
            <p className="mw-eyebrow">Open roles</p>
            <h2 style={{ marginBottom: '3rem' }}>Current positions</h2>
            <ol style={{ borderTop: '1px solid var(--text-1)' }}>
              {openRoles.map((role, i) => (
                <li key={role.title} style={{ padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2" style={{ marginBottom: '1.25rem' }}>
                    <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)', letterSpacing: '-0.02em', flex: 1, minWidth: '14rem' }}>{role.title}</h3>
                    <span className="mw-num" style={{ color: 'var(--text-3)' }}>{role.type} · {role.level}</span>
                    <a href="#apply" style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--accent)' }}>Apply →</a>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <p style={{ fontSize: '0.95rem' }}>{role.description}</p>
                    <div>
                      <p style={listHead}>Requirements</p>
                      <ul>{role.requirements.map(r => <li key={r} style={{ padding: '0.45rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-2)' }}>{r}</li>)}</ul>
                    </div>
                    <div>
                      <p style={listHead}>Nice to have</p>
                      <ul>{role.niceToHave.map(r => <li key={r} style={{ padding: '0.45rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-3)' }}>{r}</li>)}</ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center justify-between gap-4" style={{ marginTop: '2rem', paddingLeft: '1.25rem', borderLeft: '3px solid var(--accent)' }}>
              <div style={{ maxWidth: '60ch' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-1)' }}>Don&apos;t see your exact role?</p>
                <p style={{ fontSize: '0.92rem' }}>We welcome open applications. Send your details and we&apos;ll be in touch when the right opportunity comes up.</p>
              </div>
              <a href="#apply" className="mw-btn-outline">Submit an open application</a>
            </div>
          </div>
        </section>

        <section id="apply" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '5rem' }}>
          <div className="mw-container grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-start">
            <div>
              <p className="mw-eyebrow">Apply</p>
              <h2 style={{ maxWidth: '14ch', marginBottom: '1.25rem' }}>Think you&apos;re a good fit?</h2>
              <p style={{ maxWidth: '50ch', marginBottom: '2.5rem' }}>
                We hire at every level, from candidates with basic HTML, CSS and JavaScript to senior Shopify developers. What matters most is attitude, a hunger to learn and care for quality.
              </p>
              <p style={listHead}>What we look for</p>
              <ul className="offer-list" style={{ marginTop: '0.5rem', marginBottom: '2.5rem' }}>
                {lookFor.map(item => <li key={item}>{item}</li>)}
              </ul>
              <p style={listHead}>Our hiring process</p>
              <ol className="book-agenda">
                {hiringSteps.map(s => (
                  <li key={s.step}>
                    <span className="mw-num" style={{ paddingTop: '0.15rem' }}>{s.step}</span>
                    <span><strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>{s.title}.</strong> {s.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="audit-form-card">
              <p className="mw-num" style={{ marginBottom: '0.4rem' }}>APPLY TO MIRACLE WEBSOFT</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                All levels welcome · Full-time · India · Confidential
              </p>
              <CareersForm />
            </div>
          </div>
        </section>
      </>)}
    </>
  )
}
