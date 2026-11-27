import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, QuoteSection, SectionHead, TypeColumns } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Custom Web App Development Company | Miracle Websoft',
  description: 'Build scalable SaaS platforms, dashboards, portals, APIs and marketplaces with custom React, Next.js, Node.js and Laravel development.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/custom-web-development' },
  openGraph: {
    title: 'Custom Web App Development Company | Miracle Websoft',
    description: 'Build scalable SaaS platforms, dashboards, portals, APIs and marketplaces with custom React, Next.js, Node.js and Laravel development.',
    url: 'https://miraclewebsoft.com/services/custom-web-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web App Development Company | Miracle Websoft',
    description: 'Build scalable SaaS platforms, dashboards, portals, APIs and marketplaces with custom React, Next.js, Node.js and Laravel development.',
  },
}

const techStack = [
  {
    label: 'React & Next.js',
    tag: 'FRONTEND',
    description: 'Modern, component-based UIs with server-side rendering, static generation, and real-time interactivity. Optimised for performance and SEO from the ground up.',
    highlights: ['React 18 with concurrent features', 'Next.js App Router (SSR / SSG / ISR)', 'TypeScript throughout', 'Tailwind CSS and custom design systems', 'Real-time updates with WebSockets'],
  },
  {
    label: 'Node.js & Express',
    tag: 'BACKEND',
    description: 'Scalable server-side applications, RESTful APIs and real-time services. Ideal for high-throughput data pipelines, webhook processors and microservice architectures.',
    highlights: ['REST and GraphQL API development', 'WebSocket and real-time services', 'JWT and OAuth authentication', 'Webhook processors and event-driven systems', 'Queue-based background jobs'],
  },
  {
    label: 'Laravel & PHP',
    tag: 'BACKEND',
    description: 'Structured, maintainable backend applications with Laravel\'s powerful toolset — ideal for complex business logic, admin panels, and full-stack web applications.',
    highlights: ['Laravel 11 with Livewire or Inertia.js', 'Eloquent ORM and database design', 'Laravel Sanctum / Passport auth', 'Queue workers and scheduled jobs', 'REST API backends for SPA and mobile'],
  },
]

const whatWeBuild = [
  { title: 'SaaS Applications', body: 'Multi-tenant software platforms — subscription billing, role-based access, onboarding flows, usage dashboards and per-tenant configuration.' },
  { title: 'Admin Dashboards & Portals', body: 'Internal tools, ops dashboards, CRM-adjacent portals, client portals and analytics interfaces. Built for the people who actually use them daily.' },
  { title: 'APIs & Backend Services', body: 'REST and GraphQL APIs, webhook processors, data sync services, and microservice backends — documented, versioned, and built for reliability.' },
  { title: 'Marketplace Platforms', body: 'Two-sided marketplaces connecting buyers and sellers, service providers and clients, or landlords and tenants — with payments, reviews and custom matching logic.' },
  { title: 'Custom Integrations', body: 'Third-party API integrations, data pipeline connectors, middleware layers and ERP/CRM bridges — when off-the-shelf tools can\'t bridge the gap.' },
  { title: 'Authentication & Access Systems', body: 'Custom auth flows, SSO integrations, role and permission engines, and secure multi-tenancy — built correctly, not bolted on.' },
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
  { title: 'Full-stack capability', body: 'We work across the entire stack — UI, backend, database, DevOps. No gaps in ownership, no hand-off problems, no finger-pointing when something doesn\'t work.' },
  { title: 'Performance engineered in', body: 'We think about query performance, caching, load handling and bundle size from day one — not after you\'ve hit problems in production.' },
  { title: 'Security from the start', body: 'OWASP Top 10, input validation, CSRF protection, secrets management, and proper authentication are defaults in every build — not extras.' },
  { title: 'Fixed-price proposals', body: 'Scoped clearly, priced accurately, delivered as agreed. No hourly billing, no change-order surprises. You know what you\'re paying before we start.' },
  { title: 'Direct access to developers', body: 'You talk to the engineers building your product. No PMs translating requirements, no handoffs. Faster decisions, less miscommunication.' },
  { title: '700+ projects since 2016', body: 'Top Rated Plus on Upwork with $600K+ earned. Internal tools through to production SaaS platforms.' },
]

const guarantees = [
  { title: 'Fixed-Price Proposals', body: 'Scoped clearly, priced accurately, delivered as agreed. No hourly billing, no change-order surprises. You know exactly what you\'re paying before we start.' },
  { title: 'Security by Default', body: 'OWASP Top 10, input validation, CSRF protection, proper secrets management and secure auth are defaults in every build — not extras you have to ask for.' },
  { title: 'Full-Stack, Single Vendor', body: 'We own the entire stack — frontend, backend, database, deployment. No hand-off gaps, no finger-pointing. If it breaks, we fix it.' },
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
])

export default function CustomWebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Custom Web Development' }]}
        eyebrow="Custom web development · React, Node.js, Laravel"
        title={<>When off-the-shelf tools can&apos;t do it, <span className="mw-mark">we build it.</span></>}
        lede="Portals, dashboards, APIs, SaaS platforms and the integrations between your systems. Full-stack, built by one in-house team, at a fixed price."
        bullets={['One team across frontend, backend, database and deployment', 'Security and performance treated as defaults', 'Custom development from $1,500']}
        primary={{ label: 'Book a 15-min scoping call', href: '/book' }}
        secondary={{ label: 'Send a written brief', href: '#get-quote' }}
        aside={<HeroScope label="What we build" items={whatWeBuild.map((w) => w.title)} foot="Fixed-price proposal within 24 hours of a clear brief." />}
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Example project" title="A logistics SaaS, brief to launch." />
          <ServiceResult
            tag="SaaS platform"
            metric="12 wks"
            metricLabel="from brief to launch"
            title="Logistics SaaS: multi-tenant platform with role-based access, Stripe billing and a real-time driver tracking dashboard, launched in 12 weeks."
            bullets={[
              'Multi-tenant architecture with organisation-level data isolation and per-seat Stripe billing',
              'Real-time driver tracking dashboard over WebSockets, updating every 3 seconds',
              'Role-based access for admin, dispatcher and driver across 40+ guarded routes',
            ]}
            duration="12-week build"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What we build" title="Software for the work your tools can't do." />
          <NumberedList items={whatWeBuild.map((w) => ({ title: w.title, body: w.body }))} columns={3} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="Stack" title="Proven tools, chosen for your case." />
          <TypeColumns items={techStack.map((t) => ({ title: t.label, tag: t.tag, desc: t.description, examples: t.highlights }))} />
        </div>
      </section>

      <MidPageCta
        heading="Have a portal, workflow or app in mind?"
        sub="Describe it on a 15-minute call, even roughly. We will tell you the practical approach and what a fixed-price first version looks like."
        btnLabel="Book a 15-min call"
        btnHref="/book"
        secondary={{ label: 'or send a written brief', href: '#get-quote' }}
      />

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="Engineering defaults, not extras." />
          <NumberedList items={features.map((f) => ({ title: f }))} columns={3} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Why Miracle Websoft</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>One team owns the whole stack.</h2>
          </div>
          <NumberedList items={whyUs} columns={2} />
        </div>
      </section>

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />

      <QuoteSection
        eyebrow="Start a project"
        title="Tell us what it needs to do."
        body="Send the messy version: what the software should do, who uses it, the systems involved and any deadline. You'll get a practical scope and a fixed price."
      >
        <ServiceContactForm
          service="Custom Web Development"
          heading="Start your custom build"
          subtext="Tell us what you need to build, your tech preferences, and timeline. We'll come back with a detailed proposal within 24 hours."
          urlLabel="Website or product URL"
          urlPlaceholder="yourcompany.com"
        />
      </QuoteSection>
    </>
  )
}
