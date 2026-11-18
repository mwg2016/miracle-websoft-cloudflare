import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import MidPageCta from '@/components/services/MidPageCta'
import ServiceHero, { HeroScope, NumberedList, SectionHead, ServiceTable } from '@/components/services/ServiceHero'
import { aiHubFaqs, aiServices } from '@/data/ai-services'
import { breadcrumb, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'AI Automation Services for Business | Miracle Websoft',
  description:
    'Automate real business workflows with AI agents, OpenAI integrations, chatbots, internal tools and connected systems built around measurable outcomes.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/ai' },
  openGraph: {
    title: 'AI Automation Services for Business | Miracle Websoft',
    description:
      'Automate real business workflows with AI agents, OpenAI integrations, chatbots, internal tools and connected systems built around measurable outcomes.',
    url: 'https://miraclewebsoft.com/services/ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services for Business | Miracle Websoft',
    description:
      'Automate real business workflows with AI agents, OpenAI integrations, chatbots, internal tools and connected systems built around measurable outcomes.',
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

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'AI Services' }]}
        eyebrow="AI automation"
        title={<>AI that takes real work <span className="mw-mark">off your team.</span></>}
        lede="Support triage, reporting, data entry and the hand-offs between your tools. We map the workflow first, then build AI into it with human review where it matters."
        primary={{ label: 'Book a 15-min call', href: '/book' }}
        secondary={{ label: 'Send a written brief', href: '/contact' }}
        aside={
          <HeroScope
            label="What we connect"
            items={['OpenAI and other model APIs', 'Shopify and ecommerce workflows', 'CRMs, helpdesks and spreadsheets', 'Review queues, logs and escalation']}
            foot="Built by the same in-house team behind 700+ web and Shopify projects."
          />
        }
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="AI services" title="Pick the problem you want solved." />
          <ServiceTable items={aiServices.map((item) => ({ name: item.h1, line: item.subtext, href: `/services/ai/${item.slug}` }))} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">How we think</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>AI work without the hype.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '40ch' }}>Typical starting points: {useCases.slice(0, 5).join(', ').toLowerCase()}.</p>
          </div>
          <NumberedList items={principles} columns={1} />
        </div>
      </section>

      <MidPageCta
        heading="Not sure it is worth automating?"
        sub="Walk us through the workflow on a 15-minute call. We will tell you honestly whether AI helps, and what a first version would cost."
        btnLabel="Book a 15-min call"
        btnHref="/book"
        secondary={{ label: 'or send a written brief', href: '/contact' }}
      />

      <FaqSection faqs={aiHubFaqs} heading="Common questions" />
    </>
  )
}
