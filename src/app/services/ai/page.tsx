import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Workflow } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import CtaBanner from '@/components/home/CtaBanner'
import { aiHubFaqs, aiServices } from '@/data/ai-services'
import { breadcrumb, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'AI Services for Ecommerce & Business Automation',
  description:
    'AI agency for ecommerce brands and SMBs. AI business automation, OpenAI integrations, AI chatbots, customer support, internal tools, agents and AI websites.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/ai' },
  openGraph: {
    title: 'AI Services for Ecommerce & Business Automation | Miracle Websoft',
    description:
      'Practical AI automation, OpenAI integrations, chatbots, internal tools and AI agents for ecommerce brands and growing businesses.',
    url: 'https://miraclewebsoft.com/services/ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services for Ecommerce & Business Automation | Miracle Websoft',
    description:
      'AI business automation, OpenAI integrations, chatbots, internal tools and AI agents for practical business workflows.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'AI Services - Miracle Websoft',
    description:
      'AI automation, OpenAI integrations, AI chatbots, customer support automation, internal tools, AI agents, AI website development and AI consulting.',
    url: 'https://miraclewebsoft.com/services/ai',
  }),
  service({
    name: 'AI Services',
    description:
      'AI business automation, workflow automation, OpenAI integrations and custom AI tools for ecommerce brands and growing businesses.',
    url: '/services/ai',
    serviceType: 'AI automation agency',
    areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services', url: '/services/ai' },
  ]),
  itemList({
    name: 'AI services offered by Miracle Websoft',
    items: aiServices.map((item) => ({
      name: item.h1,
      url: `/services/ai/${item.slug}`,
      description: item.subtext,
    })),
  }),
])

const useCases = [
  'AI business automation',
  'AI workflow automation',
  'OpenAI integrations',
  'AI chatbots and support',
  'AI internal tools',
  'AI agents and copilots',
  'AI website development',
  'AI content automation',
]

const principles = [
  {
    title: 'Start with the workflow',
    body: 'We do not add AI for novelty. We map the business process, data, approvals and success metric first.',
  },
  {
    title: 'Keep humans in control',
    body: 'For sensitive actions, we add review queues, confidence thresholds, logging and escalation paths.',
  },
  {
    title: 'Build around your tools',
    body: 'We connect Shopify, CRMs, helpdesks, spreadsheets, ERPs, databases and custom systems through APIs.',
  },
]

export default function AiServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'linear-gradient(135deg, rgba(108,99,255,0.18) 0%, transparent 42%), linear-gradient(315deg, rgba(16,185,129,0.10) 0%, transparent 36%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'AI Services' }]} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            <div>
              <span className="mw-eyebrow">AI Services</span>
              <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>
                Practical AI Automation for Ecommerce and Growing Businesses
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', lineHeight: 1.72, marginBottom: '1.35rem', maxWidth: '680px', fontWeight: 300 }}>
                Miracle Websoft helps teams use AI where it creates measurable value: faster support, cleaner operations, smarter internal tools, better content workflows and connected business systems.
              </p>
              <div className="flex flex-wrap gap-3 mb-7">
                <Link href="/contact" className="mw-btn-primary">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <Link href="/services/custom-web-development" className="mw-btn-outline">
                  View Custom Development
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
                {useCases.map((item) => (
                  <div key={item} style={{ padding: '0.68rem 0.8rem', borderRadius: 10, background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.35 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="mw-card" style={{ padding: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(108,99,255,0.14)', border: '1px solid rgba(108,99,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <BrainCircuit size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                Built for real operations
              </h2>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We combine AI implementation with web development, ecommerce knowledge and API integration experience, so the output becomes part of your business system.
              </p>
              <div className="flex flex-col gap-2">
                {['OpenAI integrations', 'Shopify and ecommerce workflows', 'CRM, helpdesk and data sync', 'Human review and logs'].map((item) => (
                  <span key={item} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.68)' }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">AI Service Pages</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,46px)' }}>Choose the AI service that matches the business problem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((item, index) => (
              <Link key={item.slug} href={`/services/ai/${item.slug}`} className="mw-card group" style={{ padding: '1.35rem', textDecoration: 'none' }}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span style={{ width: 42, height: 42, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: index % 2 === 0 ? 'rgba(108,99,255,0.12)' : 'rgba(16,185,129,0.10)', border: '1px solid rgba(255,255,255,0.10)' }}>
                    {index % 2 === 0 ? <Bot size={18} style={{ color: 'var(--accent)' }} /> : <Workflow size={18} style={{ color: '#10B981' }} />}
                  </span>
                  <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.35)' }} className="group-hover:text-white transition-colors" />
                </div>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem' }}>{item.eyebrow}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.6rem' }}>{item.h1}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.62 }}>{item.subtext}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">How We Think</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,46px)' }}>AI implementation without the hype</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((item, index) => (
              <div key={item.title} className="mw-card" style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,99,255,0.14)', border: '1px solid rgba(108,99,255,0.28)', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 800, marginBottom: '1.1rem' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.65rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={aiHubFaqs} heading="AI services - common questions" />
      <CtaBanner />
    </>
  )
}
