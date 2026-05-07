import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Code2, LayoutDashboard, Cpu, Globe2, Database, Lock, Zap, ShieldCheck, DollarSign, Users, Star } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Web Application Development — React, Node.js & Laravel | Miracle Websoft',
  description: 'Bespoke web application development using React, Next.js, Node.js and Laravel. SaaS apps, dashboards, APIs and marketplace platforms — built from scratch.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/custom-web-development' },
}

const techStack = [
  {
    label: 'React & Next.js',
    tag: 'FRONTEND',
    description: 'Modern, component-based UIs with server-side rendering, static generation, and real-time interactivity. Optimised for performance and SEO from the ground up.',
    highlights: ['React 18 with concurrent features', 'Next.js App Router (SSR / SSG / ISR)', 'TypeScript throughout', 'Tailwind CSS and custom design systems', 'Real-time updates with WebSockets'],
    color: '#61DAFB',
  },
  {
    label: 'Node.js & Express',
    tag: 'BACKEND',
    description: 'Scalable server-side applications, RESTful APIs and real-time services. Ideal for high-throughput data pipelines, webhook processors and microservice architectures.',
    highlights: ['REST and GraphQL API development', 'WebSocket and real-time services', 'JWT and OAuth authentication', 'Webhook processors and event-driven systems', 'Queue-based background jobs'],
    color: '#68A063',
  },
  {
    label: 'Laravel & PHP',
    tag: 'BACKEND',
    description: 'Structured, maintainable backend applications with Laravel\'s powerful toolset — ideal for complex business logic, admin panels, and full-stack web applications.',
    highlights: ['Laravel 11 with Livewire or Inertia.js', 'Eloquent ORM and database design', 'Laravel Sanctum / Passport auth', 'Queue workers and scheduled jobs', 'REST API backends for SPA and mobile'],
    color: '#FF2D20',
  },
]

const whatWeBuild = [
  { icon: Cpu, title: 'SaaS Applications', body: 'Multi-tenant software platforms — subscription billing, role-based access, onboarding flows, usage dashboards and per-tenant configuration.' },
  { icon: LayoutDashboard, title: 'Admin Dashboards & Portals', body: 'Internal tools, ops dashboards, CRM-adjacent portals, client portals and analytics interfaces. Built for the people who actually use them daily.' },
  { icon: Database, title: 'APIs & Backend Services', body: 'REST and GraphQL APIs, webhook processors, data sync services, and microservice backends — documented, versioned, and built for reliability.' },
  { icon: Globe2, title: 'Marketplace Platforms', body: 'Two-sided marketplaces connecting buyers and sellers, service providers and clients, or landlords and tenants — with payments, reviews and custom matching logic.' },
  { icon: Code2, title: 'Custom Integrations', body: 'Third-party API integrations, data pipeline connectors, middleware layers and ERP/CRM bridges — when off-the-shelf tools can\'t bridge the gap.' },
  { icon: Lock, title: 'Authentication & Access Systems', body: 'Custom auth flows, SSO integrations, role and permission engines, and secure multi-tenancy — built correctly, not bolted on.' },
]

const features = [
  'Custom React / Next.js frontend builds',
  'Node.js and Laravel API development',
  'PostgreSQL, MySQL and MongoDB database design',
  'Multi-tenant SaaS architecture',
  'Stripe / payment gateway integration',
  'OAuth2 and SSO (Google, GitHub, SAML)',
  'Role-based access control (RBAC)',
  'Real-time features via WebSocket / Pusher',
  'Background jobs and queue processing',
  'AWS, Vercel and DigitalOcean deployment',
  'CI/CD pipeline setup (GitHub Actions)',
  'API documentation and testing (Postman / Swagger)',
]

const whyUs = [
  { icon: Code2, title: 'Full-stack capability', body: 'We work across the entire stack — UI, backend, database, DevOps. No gaps in ownership, no hand-off problems, no finger-pointing when something doesn\'t work.' },
  { icon: Zap, title: 'Performance engineered in', body: 'We think about query performance, caching, load handling and bundle size from day one — not after you\'ve hit problems in production.' },
  { icon: ShieldCheck, title: 'Security from the start', body: 'OWASP Top 10, input validation, CSRF protection, secrets management, and proper authentication are defaults in every build — not extras.' },
  { icon: DollarSign, title: 'Fixed-price proposals', body: 'Scoped clearly, priced accurately, delivered as agreed. No hourly billing, no change-order surprises. You know what you\'re paying before we start.' },
  { icon: Users, title: 'Direct access to developers', body: 'You talk to the engineers building your product. No PMs translating requirements, no handoffs. Faster decisions, less miscommunication.' },
  { icon: Star, title: '600+ projects, 10+ years', body: 'Top Rated Plus on Upwork with a 98% job success score. We\'ve built everything from internal tools to production SaaS platforms serving thousands of users.' },
]

const guarantees = [
  { icon: '🔒', title: 'Fixed-Price Proposals', body: 'Scoped clearly, priced accurately, delivered as agreed. No hourly billing, no change-order surprises. You know exactly what you\'re paying before we start.' },
  { icon: '🛡️', title: 'Security by Default', body: 'OWASP Top 10, input validation, CSRF protection, proper secrets management and secure auth are defaults in every build — not extras you have to ask for.' },
  { icon: '📦', title: 'Full-Stack, Single Vendor', body: 'We own the entire stack — frontend, backend, database, deployment. No hand-off gaps, no finger-pointing. If it breaks, we fix it.' },
]

const related = [
  { title: 'Shopify App Development', desc: 'Need a custom Shopify app as part of your platform?', href: '/services/shopify-app-development' },
  { title: 'Custom Shopify Development', desc: 'Building an ecommerce-first product on Shopify.', href: '/services/shopify/development' },
  { title: 'WordPress Development', desc: 'Content-heavy or membership-based platform on WordPress.', href: '/services/wordpress-development' },
]

const faqs = [
  {
    question: 'When should I choose custom development over a no-code or SaaS tool?',
    answer: 'When your requirements exceed what off-the-shelf tools can handle cleanly — unique business logic, complex integrations, white-label requirements, or margins that can\'t sustain per-seat SaaS fees at scale. Custom development has higher upfront cost but lower ongoing costs and full ownership of your product.',
  },
  {
    question: 'Do you build full-stack or only front-end / back-end?',
    answer: 'Full-stack. We handle React/Next.js frontend, Node.js or Laravel backend, database design, third-party integrations, and production deployment. You don\'t need to co-ordinate multiple vendors.',
  },
  {
    question: 'Can you build a multi-tenant SaaS application?',
    answer: 'Yes. Multi-tenant SaaS is a significant part of our custom development work. We architect tenant isolation (shared schema or database-per-tenant depending on your requirements), subscription billing via Stripe, onboarding flows, and usage-based feature gating.',
  },
  {
    question: 'Do you integrate with existing systems and APIs?',
    answer: 'Yes. Third-party integrations — CRM, ERP, payment processors, logistics APIs, marketing platforms — are a large part of custom development projects. We work with REST and GraphQL APIs, OAuth flows, and webhook-based event systems.',
  },
  {
    question: 'What infrastructure and hosting do you recommend?',
    answer: 'It depends on scale. For most projects: Vercel for Next.js frontends, Railway or Render for Node.js/Laravel backends, and Supabase or PlanetScale for managed databases. For larger scale: AWS (ECS, RDS, S3) or GCP. We advise based on your traffic, compliance needs and budget.',
  },
  {
    question: 'Do you provide ongoing maintenance after launch?',
    answer: 'Yes. We offer retained engineering support — bug fixes, feature development, dependency updates, security patches, and performance monitoring. Most clients work with us on an ongoing basis after the initial build.',
  },
  {
    question: 'How do you price custom development projects?',
    answer: 'Fixed-price proposals for scoped builds, retainer for ongoing development. We scope thoroughly before pricing — which means fewer surprises for both sides. We don\'t do open-ended hourly contracts for project work.',
  },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Custom Web Application Development',
    description:
      'Bespoke web applications in React, Next.js, Node.js and Laravel — SaaS platforms, APIs, dashboards and marketplaces.',
    url: '/services/custom-web-development',
    serviceType: 'Custom web development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Custom Web Development', url: '/services/custom-web-development' },
  ]),
  faqPage(faqs),
])

export default function CustomWebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 60% 45%, rgba(108,99,255,0.18) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services' }, { label: 'Custom Web Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">CUSTOM WEB DEVELOPMENT</span>
            <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Custom Web Application<br />Development
              <em style={{ display: 'block', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: '0.85em', marginTop: '0.25rem' }}>React · Node.js · Laravel</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px', fontWeight: 300 }}>
              When off-the-shelf tools can&apos;t do what your business needs, we build it. Full-stack web applications — SaaS platforms, dashboards, APIs and marketplace systems — engineered for performance, security and scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#get-quote" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Discuss Your Project <ArrowRight size={16} />
              </a>
              <Link href="/case-studies" className="mw-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Result */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Real Project Result</p>
          <ServiceResult
            tag="SaaS Platform"
            tagColor="#6C63FF"
            metric="12 wks"
            metricLabel="From Brief to Launch"
            title="Logistics SaaS: multi-tenant platform with role-based access, Stripe billing, and a real-time driver tracking dashboard — launched in 12 weeks."
            bullets={[
              'Multi-tenant architecture with organisation-level data isolation and per-seat Stripe billing',
              'Real-time driver tracking dashboard built with WebSockets — updates every 3 seconds',
              'Role-based access control: Admin, Dispatcher, Driver — 3 permission levels, 40+ guarded routes',
            ]}
            duration="12-week build"
            cta={{ label: 'See all case studies', href: '/case-studies' }}
          />
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">OUR TECH STACK</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              Modern tools. Proven patterns.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>No hype, no buzzword-chasing.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}>
                    {tech.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>{tech.label}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>{tech.description}</p>
                <ul className="flex flex-col gap-2">
                  {tech.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#10B981', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build ─────────────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">WHAT WE BUILD</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              Applications that solve<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>real business problems.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeBuild.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">CAPABILITIES</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              Full-stack coverage,<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>front to back.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading="Have a complex web application in mind?"
        sub="Describe what you need to build — even roughly. We'll respond with a preliminary approach and fixed-price proposal within 24 hours."
        btnLabel="Discuss Your Project"
        btnHref="/contact"
      />

      {/* ── Why Us ────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHY MIRACLE WEBSOFT</span>
            <h2 style={{ color: '#fff' }}>
              Engineers who ship.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Accountable for the outcome.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((r, i) => {
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

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Custom web development — common questions" />

      <RelatedServices services={related} />

      {/* ── Contact Form ──────────────────────────────────────────────────── */}
      <section id="get-quote" style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundImage: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span className="mw-eyebrow">GET A FREE PROPOSAL</span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,44px)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Let&apos;s discuss<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>your project.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                Describe what you need to build — even roughly. We&apos;ll respond with questions, a preliminary approach, and a fixed-price proposal within 24 hours.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { stat: '600+', label: 'Projects delivered' },
                  { stat: '98%', label: 'Job success score on Upwork' },
                  { stat: '10+', label: 'Years of full-stack experience' },
                  { stat: '24h', label: 'Proposal turnaround' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, minWidth: '52px' }}>{p.stat}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>{p.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mw-card" style={{ padding: '2.5rem' }}>
              <ServiceContactForm
                service="Custom Web Development"
                heading="Start your custom build"
                subtext="Tell us what you need to build, your tech preferences, and timeline. We'll come back with a detailed proposal within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
