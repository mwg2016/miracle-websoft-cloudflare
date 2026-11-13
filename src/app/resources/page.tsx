import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Resources for Shopify, AI Automation & Ecommerce Growth | Miracle Websoft',
  description:
    'Miracle Websoft resources for Shopify development, CRO, speed optimization, AI automation, ecommerce growth, tools, tutorials and case studies.',
  alternates: { canonical: 'https://miraclewebsoft.com/resources' },
  openGraph: {
    title: 'Resources for Shopify, AI Automation & Ecommerce Growth | Miracle Websoft',
    description: 'Guides, tools, tutorials and case studies for Shopify, CRO, speed, AI automation and ecommerce growth.',
    url: 'https://miraclewebsoft.com/resources',
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
    title: 'Free store teardown',
    desc: 'A 5-minute video of your store on a phone, with fixes ranked by likely impact.',
    meta: 'Free · 48 hours',
    href: '/free-store-audit',
  },
  {
    title: 'Blog',
    meta: 'Articles',
    desc: 'Shopify, CRO, speed, AI automation and ecommerce growth articles.',
    href: '/blog',
  },
  {
    title: 'Case Studies',
    meta: 'Results',
    desc: 'Project results, verified work history and client outcomes.',
    href: '/case-studies',
  },
  {
    title: 'Tools',
    meta: 'Free + paid',
    desc: 'Free tools and products built by Miracle Websoft.',
    href: '/tools',
  },
  {
    title: 'Service Guides',
    meta: 'Fixed prices',
    desc: 'Shopify, AI, CRO, performance and custom development service pages.',
    href: '/services',
  },
]

const faqs = [
  {
    question: 'What resources does Miracle Websoft publish?',
    answer: 'We publish Shopify guides, CRO and speed articles, AI automation ideas, ecommerce growth tutorials, case studies and free tools.',
  },
  {
    question: 'Where should I start if I need a service?',
    answer: 'Start with the All Services page if you know the problem area, or request a free store teardown and we’ll tell you what to fix first. If you’d rather talk, book a 15-minute call.',
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
    url: 'https://miraclewebsoft.com/resources',
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: 'clamp(4rem, 7vw, 6rem)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2rem' }}>
            <Breadcrumb items={[{ label: 'Resources' }]} />
          </div>
          <p className="mw-eyebrow">Resources</p>
          <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '16ch' }}>
            Guides, tools and <span className="mw-mark">proof</span>, in one place.
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '52ch', marginBottom: '3.5rem' }}>
            Practical material on Shopify development, CRO, speed, AI automation and ecommerce growth, plus the work that backs it up.
          </p>

          <ul className="svc-table">
            {resources.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-name">{item.title}</span>
                  <span className="svc-line">{item.desc}</span>
                  <span className="svc-price">{item.meta}</span>
                  <ArrowUpRight size={18} className="svc-arrow" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqSection faqs={faqs} heading="Resources: common questions" />
    </>
  )
}
