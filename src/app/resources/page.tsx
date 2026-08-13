import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, FileText, Wrench } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Resources for Shopify, AI Automation & Ecommerce Growth',
  description:
    'Miracle Websoft resources for Shopify development, CRO, speed optimization, AI automation, ecommerce growth, tools, tutorials and case studies.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/resources' },
  openGraph: {
    title: 'Resources for Shopify, AI Automation & Ecommerce Growth | Miracle Websoft',
    description: 'Guides, tools, tutorials and case studies for Shopify, CRO, speed, AI automation and ecommerce growth.',
    url: 'https://www.miraclewebsoft.com/resources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources for Shopify, AI Automation & Ecommerce Growth',
    description: 'Guides, tools, tutorials and case studies from Miracle Websoft.',
  },
}

const resources = [
  {
    title: 'Blog',
    desc: 'Shopify, CRO, speed, AI automation and ecommerce growth articles.',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'Case Studies',
    desc: 'Project results, verified work history and client outcomes.',
    href: '/case-studies',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Tools',
    desc: 'Free tools and products built by Miracle Websoft.',
    href: '/tools',
    icon: Wrench,
  },
  {
    title: 'Service Guides',
    desc: 'Shopify, AI, CRO, performance and custom development service pages.',
    href: '/services',
    icon: FileText,
  },
]

const faqs = [
  {
    question: 'What resources does Miracle Websoft publish?',
    answer: 'We publish Shopify guides, CRO and speed articles, AI automation ideas, ecommerce growth tutorials, case studies and free tools.',
  },
  {
    question: 'Where should I start if I need a service?',
    answer: 'Start with the All Services page if you know the problem area, or use the Contact page for a free consultation if you want us to recommend the right next step.',
  },
  {
    question: 'Do you publish AI automation content?',
    answer: 'Yes. AI is now a core service area, and resources cover AI automation, OpenAI integrations, chatbots, internal tools and business workflows.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Resources - Miracle Websoft',
    description: 'Guides, tools, tutorials and case studies for Shopify, AI automation and ecommerce growth.',
    url: 'https://www.miraclewebsoft.com/resources',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]),
  itemList({
    name: 'Miracle Websoft resources',
    items: resources.map((item) => ({
      name: item.title,
      url: item.href,
      description: item.desc,
    })),
  }),
])

export default function ResourcesPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'Resources' }]} />
        </div>
        <div className="mb-12">
          <span className="mw-eyebrow">Resources</span>
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>
            Guides, tools and proof<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>for smarter growth.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px', fontWeight: 300 }}>
            Explore practical content for Shopify development, CRO, speed optimization, AI automation, custom web development and ecommerce growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map(({ icon: Icon, ...item }) => (
            <Link key={item.href} href={item.href} className="mw-card group" style={{ padding: '1.75rem', minHeight: 220, textDecoration: 'none' }}>
              <div className="flex items-start justify-between gap-3 mb-5">
                <span style={{ width: 42, height: 42, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.22)' }}>
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </span>
                <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.35)' }} className="group-hover:text-white transition-colors" />
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '0.65rem' }}>{item.title}</h2>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.65 }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <FaqSection faqs={faqs} heading="Resources - common questions" />
    </div>
  )
}
