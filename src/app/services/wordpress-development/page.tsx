import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, Users, BookOpen, Layers, Zap, ShieldCheck, Star, TrendingUp, DollarSign } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'WordPress Website Development Services | Miracle Websoft',
  description: 'Professional WordPress development — custom themes, WooCommerce stores, membership sites and corporate websites. Fast, secure and built to convert.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/services/wordpress-development' },
  openGraph: {
    title: 'WordPress Website Development Services | Miracle Websoft',
    description: 'Professional WordPress development — custom themes, WooCommerce stores, membership sites and corporate websites. Fast, secure and built to convert.',
    url: 'https://www.miraclewebsoft.com/services/wordpress-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Website Development Services | Miracle Websoft',
    description: 'Professional WordPress development — custom themes, WooCommerce stores, membership sites and corporate websites. Fast, secure and built to convert.',
  },
}

const whatWeBuild = [
  { icon: Globe, title: 'Corporate & Business Sites', body: 'Professional multi-page websites for businesses, agencies and service providers. Custom theme design, no page-builder bloat, fast and SEO-ready.' },
  { icon: ShoppingCart, title: 'WooCommerce Stores', body: 'Full WooCommerce builds for businesses that need WordPress\'s content flexibility alongside e-commerce. Custom product pages, checkout flows, and payment integrations.' },
  { icon: Users, title: 'Membership & LMS Sites', body: 'Members-only content, course platforms (LearnDash, LifterLMS, MemberPress), and subscription-gated portals — fully customised to your structure.' },
  { icon: BookOpen, title: 'Content & Media Sites', body: 'High-volume content sites, news portals, blog platforms and editorial sites. Custom post types, advanced taxonomies, and performance-optimised at scale.' },
  { icon: Layers, title: 'Multi-site & Networks', body: 'WordPress Multisite setups for agencies, franchises and multi-brand organisations — centralised management with site-level customisation.' },
  { icon: TrendingUp, title: 'Landing Pages & Funnels', body: 'High-conversion standalone landing pages and sales funnels — custom-coded for speed, built to A/B test, and free from drag-and-drop overhead.' },
]

const features = [
  'Custom theme development — no builders, no bloat',
  'Mobile-first, sub-2s load time target',
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
  { icon: Zap, title: 'Performance-first development', body: 'We build WordPress sites without page builders. That means leaner code, faster load times, and stores that don\'t slow down as content grows.' },
  { icon: ShieldCheck, title: 'Security baked in', body: 'WordPress is the most-targeted CMS on the internet. We harden every build — hardened configs, limited attack surface, proper role management — from the start.' },
  { icon: DollarSign, title: 'Fixed-price proposals', body: 'Every project starts with a scoped proposal at a fixed price. No hourly surprises, no scope creep billing. You know what you\'re paying before we begin.' },
  { icon: Star, title: '600+ projects delivered', body: 'A track record built across 600+ projects and 10+ years. Top Rated Plus on Upwork with a 98%+ job success score.' },
  { icon: Users, title: 'Direct team access', body: 'You work directly with the developers and strategists. No account managers, no ticketing systems, no handoffs.' },
]

const guarantees = [
  { icon: '⚡', title: 'No Page Builders — Ever', body: 'We build custom themes without Elementor, Divi or WPBakery. Leaner code, faster load times, and no technical debt that comes back to haunt you a year later.' },
  { icon: '🔒', title: 'Fixed-Price Before We Start', body: 'Every project is scoped at a fixed price. No hourly billing, no scope creep invoices. The price we quote is the price you pay.' },
  { icon: '🛡️', title: 'Security Baked In', body: 'WordPress is the most-targeted CMS on the internet. We harden every build from the start — hardened configs, proper role management, limited attack surface.' },
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
    answer: 'Yes. We migrate from other CMS platforms (Wix, Squarespace, Joomla, Drupal) to WordPress, with full content migration, SEO redirect mapping, and zero traffic loss as the priority.',
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
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 65% 45%, rgba(108,99,255,0.15) 0%, transparent 58%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services' }, { label: 'WordPress Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">WORDPRESS DEVELOPMENT</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
              WordPress Development<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Built properly. Built to last.</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px', fontWeight: 300 }}>
              Custom WordPress websites — no page builders, no bloated themes, no compromise on performance. From WooCommerce stores to membership platforms to corporate sites, built to the specification your business actually needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#get-quote" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Request a Fixed-Price Quote <ArrowRight size={16} />
              </a>
              <Link href="/work" className="mw-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Project Work
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
            tag="Membership & LMS Site"
            tagColor="#6C63FF"
            metric="2.1s"
            metricLabel="Mobile Load Time"
            title="Online education platform: replaced Elementor theme with custom WordPress build — page load dropped from 8.4s to 2.1s, membership sign-ups up 31%."
            bullets={[
              'Rebuilt Elementor-based theme from scratch — removed 1.8MB of unused page-builder CSS/JS',
              'Integrated LearnDash LMS with custom-coded membership tiers and content gating',
              'Mobile load time dropped from 8.4s to 2.1s — membership sign-up conversion up 31%',
            ]}
            duration="6-week build"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      {/* ── What We Build ─────────────────────────────────────────────────── */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">WHAT WE BUILD</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              WordPress for every<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>business model.</em>
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
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>
              Everything in every build
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
        heading="Need a WordPress site that supports leads or sales?"
        sub="Send your requirements and we will reply with the cleanest path, likely scope and a fixed-price quote."
        btnLabel="Request a Quote"
        btnHref="/contact"
      />

      {/* ── Why Us ────────────────────────────────────────────────────────── */}
      <section className="mw-section" style={{ background: '#080808', backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHY MIRACLE WEBSOFT</span>
            <h2 style={{ color: '#fff' }}>
              Not a generic WordPress shop.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>A development team that cares about quality.</em>
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

      <FaqSection faqs={faqs} heading="WordPress development — common questions" />

      <RelatedServices services={related} />

      {/* ── Contact Form ──────────────────────────────────────────────────── */}
      <section id="get-quote" style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundImage: 'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(108,99,255,0.07) 0%, transparent 70%)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span className="mw-eyebrow">REQUEST A QUOTE</span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,44px)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Let&apos;s build your<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>WordPress site.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                Tell us what the site needs to do for the business and we will reply with a fixed-price quote, timeline and recommended approach.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { stat: '600+', label: 'Projects delivered' },
                  { stat: '98%+', label: 'Job success score on Upwork' },
                  { stat: '10+', label: 'Years of development experience' },
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
                service="WordPress Development"
                heading="Start your WordPress project"
                subtext="Tell us what you need built. We'll review it and send a detailed, fixed-price proposal within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
