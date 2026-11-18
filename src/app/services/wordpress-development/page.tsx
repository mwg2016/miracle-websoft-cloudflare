import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, QuoteSection, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'WordPress Development Services | Miracle Websoft',
  description: 'Build a fast, manageable WordPress website or WooCommerce experience with clean development, responsive design and functionality tailored to your business.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/wordpress-development' },
  openGraph: {
    title: 'WordPress Development Services | Miracle Websoft',
    description: 'Build a fast, manageable WordPress website or WooCommerce experience with clean development, responsive design and functionality tailored to your business.',
    url: 'https://miraclewebsoft.com/services/wordpress-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Development Services | Miracle Websoft',
    description: 'Build a fast, manageable WordPress website or WooCommerce experience with clean development, responsive design and functionality tailored to your business.',
  },
}

const whatWeBuild = [
  { title: 'Corporate & Business Sites', body: 'Professional multi-page websites for businesses, agencies and service providers. Custom theme design, no page-builder bloat, fast and SEO-ready.' },
  { title: 'WooCommerce Stores', body: 'Full WooCommerce builds for businesses that need WordPress\'s content flexibility alongside e-commerce. Custom product pages, checkout flows, and payment integrations.' },
  { title: 'Membership & LMS Sites', body: 'Members-only content, course platforms (LearnDash, LifterLMS, MemberPress), and subscription-gated portals — fully customised to your structure.' },
  { title: 'Content & Media Sites', body: 'High-volume content sites, news portals, blog platforms and editorial sites. Custom post types, advanced taxonomies, and performance-optimised at scale.' },
  { title: 'Multi-site & Networks', body: 'WordPress Multisite setups for agencies, franchises and multi-brand organisations — centralised management with site-level customisation.' },
  { title: 'Landing Pages & Funnels', body: 'High-conversion standalone landing pages and sales funnels — custom-coded for speed, built to A/B test, and free from drag-and-drop overhead.' },
]

const features = [
  'Custom theme development — no builders, no bloat',
  'Mobile-first, with a speed budget agreed up front',
  'SEO-optimised code structure and schema markup',
  'WooCommerce integration and custom checkout',
  'Custom post types and advanced custom fields',
  'REST API and headless WordPress builds',
  'Third-party plugin and API integration',
  'Membership and gated content systems',
  'Role-based access and permissions',
  'Contact forms, lead capture and CRM integration',
  'Security hardening and malware prevention',
  'Ongoing maintenance and update management',
]

const whyUs = [
  { title: 'Performance-first development', body: 'We build WordPress sites without page builders. That means leaner code, faster load times, and stores that don\'t slow down as content grows.' },
  { title: 'Security baked in', body: 'WordPress is the most-targeted CMS on the internet. We harden every build — hardened configs, limited attack surface, proper role management — from the start.' },
  { title: 'Fixed-price proposals', body: 'Every project starts with a scoped proposal at a fixed price. No hourly surprises, no scope creep billing. You know what you\'re paying before we begin.' },
  { title: '700+ projects since 2015', body: 'Top Rated Plus on Upwork with a 98% job success score, and 4.9 on Clutch.' },
  { title: 'Direct team access', body: 'You work directly with the developers and strategists. No account managers, no ticketing systems, no handoffs.' },
]

const guarantees = [
  { title: 'No Page Builders — Ever', body: 'We build custom themes without Elementor, Divi or WPBakery. Leaner code, faster load times, and no technical debt that comes back to haunt you a year later.' },
  { title: 'Fixed-Price Before We Start', body: 'Every project is scoped at a fixed price. No hourly billing, no scope creep invoices. The price we quote is the price you pay.' },
  { title: 'Security Baked In', body: 'WordPress is the most-targeted CMS on the internet. We harden every build from the start — hardened configs, proper role management, limited attack surface.' },
]

const related = [
  { title: 'Custom Web Development', desc: 'Need more than WordPress? React, Node.js or Laravel builds.', href: '/services/custom-web-development' },
  { title: 'Custom Shopify Development', desc: 'Moving to an ecommerce-first platform instead.', href: '/services/shopify/development' },
  { title: 'Shopify Migrations', desc: 'Migrating from WooCommerce to Shopify.', href: '/services/shopify-migration' },
]

const faqs = [
  {
    question: 'Do you build with Gutenberg, Elementor or custom themes?',
    answer: 'We build custom themes without page builders by default — Gutenberg block editor where content editing is needed, but zero Elementor, Divi or WPBakery. Page builders add significant technical debt, performance overhead and security risk. Custom-built themes are faster, cleaner and far easier to maintain long-term.',
  },
  {
    question: 'Can you build a WooCommerce store that also has strong content pages?',
    answer: 'Yes — this is actually one of WordPress\'s strongest use cases versus a pure e-commerce platform. We build WooCommerce stores with rich editorial content, blog integration, and category-level landing pages that Shopify can\'t easily replicate.',
  },
  {
    question: 'Can you build membership and course sites on WordPress?',
    answer: 'Yes. We build membership sites using MemberPress, LearnDash or LifterLMS — with custom theme integration, gated content flows, subscription billing, and member portals. These are common builds for coaches, educators and professional communities.',
  },
  {
    question: 'Do you migrate existing sites to WordPress?',
    answer: 'Yes. We migrate from other CMS platforms (Wix, Squarespace, Joomla, Drupal) to WordPress, with full content migration, SEO redirect mapping, and protecting search traffic as the priority.',
  },
  {
    question: 'How do you handle WordPress security?',
    answer: 'Every build includes: server-level hardening, limited wp-admin exposure, strong authentication requirements, a managed update process, and malware scanning. We also configure backups and monitoring. WordPress security is mostly about disciplined configuration — not magic plugins.',
  },
  {
    question: 'Can you build a headless WordPress site?',
    answer: 'Yes. We build headless WordPress setups using the REST API or WPGraphQL with a decoupled front-end (typically Next.js). This is the right choice for high-performance editorial sites and complex multi-channel content architectures.',
  },
  {
    question: 'What is your development and deployment process?',
    answer: 'We build in a staging environment, use version control throughout, and deploy with zero-downtime workflows. Every project goes through structured QA before launch — cross-browser, cross-device, performance and accessibility checks.',
  },
]

const jsonLd = renderJsonLd([
  service({
    name: 'WordPress Development',
    description:
      'Custom WordPress themes, WooCommerce stores, membership platforms and corporate websites — built without page-builder bloat.',
    url: '/services/wordpress-development',
    serviceType: 'WordPress development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'WordPress Development', url: '/services/wordpress-development' },
  ]),
])

export default function WordPressDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'WordPress Development' }]}
        eyebrow="WordPress development"
        title={<>WordPress sites built properly, <span className="mw-mark">without page-builder bloat.</span></>}
        lede="Business websites, WooCommerce stores, membership platforms and content sites. Custom themes, fast pages and a setup your team can edit without breaking anything."
        bullets={['No Elementor, Divi or WPBakery', 'Security hardening and backups from day one', 'Fixed-price proposal within 24 hours']}
        primary={{ label: 'Request a fixed-price quote', href: '#get-quote' }}
        secondary={{ label: 'Book a 15-min call', href: '/book' }}
        aside={<HeroScope label="Good fit when you need" items={whatWeBuild.slice(0, 5).map((w) => w.title)} foot="Selling physical products? Shopify is often the simpler choice. We will tell you honestly." />}
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Example project" title="An Elementor site, rebuilt properly." />
          <ServiceResult
            tag="Membership & LMS site"
            metric="2.1s"
            metricLabel="mobile load time"
            title="Online education platform: Elementor theme replaced with a custom WordPress build. Load time from 8.4s to 2.1s, membership sign-ups up 31%."
            bullets={[
              'Elementor theme rebuilt from scratch, removing 1.8 MB of unused CSS and JS',
              'LearnDash integrated with custom membership tiers and content gating',
              'Mobile load time from 8.4s to 2.1s; sign-up conversion up 31%',
            ]}
            duration="6-week build"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What we build" title="WordPress for every business model." />
          <NumberedList items={whatWeBuild.map((w) => ({ title: w.title, body: w.body }))} columns={3} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="Standard in every build." />
          <NumberedList items={features.map((f) => ({ title: f }))} columns={3} />
        </div>
      </section>

      <MidPageCta
        heading="Need a WordPress site that brings in leads or sales?"
        sub="Talk it through on a 15-minute call, or send your requirements and get a fixed-price quote within a day."
        btnLabel="Book a 15-min call"
        btnHref="/book"
        secondary={{ label: 'or request a quote', href: '#get-quote' }}
      />

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">Why Miracle Websoft</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>Not a generic WordPress shop.</h2>
          </div>
          <NumberedList items={whyUs} columns={2} />
        </div>
      </section>

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />

      <QuoteSection
        eyebrow="Request a quote"
        title="Let's scope your WordPress site."
        body="Tell us what the site needs to do for the business. We reply with a fixed-price quote, a timeline and the approach we recommend."
      >
        <ServiceContactForm
          service="WordPress Development"
          heading="Start your WordPress project"
          subtext="Tell us what you need built. We'll review it and send a detailed, fixed-price proposal within 24 hours."
          urlLabel="Current website URL"
          urlPlaceholder="yourcompany.com"
        />
      </QuoteSection>
    </>
  )
}
