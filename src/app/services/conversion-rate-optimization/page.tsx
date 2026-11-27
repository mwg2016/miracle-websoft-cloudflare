import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import type { ServiceLandingData } from '@/data/ai-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO Agency to Increase Sales | Miracle Websoft',
  description:
    'Increase Shopify conversions with analytics, Clarity, heatmaps, product page improvements, cart fixes, checkout optimization and structured testing.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/conversion-rate-optimization' },
  openGraph: {
    title: 'Shopify CRO Agency to Increase Sales | Miracle Websoft',
    description:
      'Increase Shopify conversions with analytics, Clarity, heatmaps, product page improvements, cart fixes, checkout optimization and structured testing.',
    url: 'https://miraclewebsoft.com/services/conversion-rate-optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify CRO Agency to Increase Sales | Miracle Websoft',
    description:
      'Increase Shopify conversions with analytics, Clarity, heatmaps, product page improvements, cart fixes, checkout optimization and structured testing.',
  },
}

const croData: ServiceLandingData = {
  slug: 'conversion-rate-optimization',
  metaTitle: 'Shopify CRO Agency to Increase Sales | Miracle Websoft',
  metaDescription:
    'Increase Shopify conversions with analytics, Clarity, heatmaps, product page improvements, cart fixes, checkout optimization and structured testing.',
  eyebrow: 'SHOPIFY CONVERSION AUDIT + FIX',
  h1: 'Shopify conversion rate optimization: more orders from the traffic you already pay for',
  subtext:
    'We find where shoppers hesitate or drop off between product page and checkout, rank the leaks by likely revenue impact, then fix the biggest ones at a fixed price.',
  serviceType: 'Conversion rate optimization',
  problem: {
    title: 'Traffic is coming in, but too few visitors buy',
    body: 'Ad spend, SEO and influencer traffic are wasted when product pages do not answer buyer questions, mobile journeys feel slow or checkout creates avoidable friction.',
  },
  solution: {
    title: 'A CRO program grounded in real user behavior',
    body: 'We review analytics, Microsoft Clarity sessions, heatmaps, product pages, cart and checkout flow, then ship changes that reduce friction and improve decision confidence.',
  },
  offer: {
    promise: 'A ranked list of where your store loses orders, then the top fixes shipped.',
    price: 'Free teardown, then fixed price',
    priceNote: 'The 48-hour video teardown is free. Fixes are quoted as one fixed price.',
    timeline: 'Teardown in 48 hours, fixes in 1–3 weeks',
    guarantee: 'Every fix comes with the reason we expect it to help, and you approve the plan before paying anything.',
    includes: ['Clarity session and heatmap review', 'Product page, cart and checkout fixes', 'Before-and-after conversion tracking', 'A/B test plan for bigger changes'],
  },
  benefits: [
    'Improve conversion rate without increasing ad spend',
    'Find buyer friction through Clarity and heatmaps',
    'Strengthen product pages, homepage and landing pages',
    'Reduce checkout abandonment',
    'Prioritize fixes by likely revenue impact',
    'Create a clear testing roadmap',
  ],
  deliverables: [
    'User journey and funnel analysis',
    'Microsoft Clarity session review',
    'Heatmap and scroll-depth analysis',
    'Product page and homepage recommendations',
    'Checkout and cart optimization plan',
    'A/B testing roadmap and implementation support',
  ],
  process: [
    {
      title: 'Audit behavior',
      body: 'We review analytics, recordings, heatmaps, navigation, product pages, checkout and customer objections.',
    },
    {
      title: 'Prioritize fixes',
      body: 'Every recommendation is ranked by impact, effort, confidence and risk so your team knows what to change first.',
    },
    {
      title: 'Implement improvements',
      body: 'We update templates, sections, messaging, trust signals, cart behavior and checkout flow where the data points.',
    },
    {
      title: 'Measure and test',
      body: 'We monitor conversion metrics and plan A/B tests for changes that need controlled validation.',
    },
  ],
  caseStudy: {
    tag: 'Product page CRO',
    metric: '5.0',
    metricLabel: 'Client rating on Upwork',
    title: 'Product page optimisation and custom product templates for a growing Shopify brand.',
    bullets: [
      'Sticky add-to-cart, accordion content blocks and trust badges on product pages',
      'Dynamic variant image switching built into new product templates',
      'Client: “Karam has been incredibly responsive and always willing to tackle whatever task we need. He had great suggestions for specific design features to implement for optimization.”',
    ],
    duration: 'Dec 2024 · Upwork',
    href: '/work/pdp-optimization-template-dev-2024',
  },
  faqs: [
    {
      question: 'What is included in your CRO service?',
      answer: 'We review analytics, Microsoft Clarity recordings, heatmaps, product pages, homepage, landing pages, cart and checkout. Then we provide and implement prioritized conversion improvements.',
    },
    {
      question: 'Do you use Microsoft Clarity?',
      answer: 'Yes. We use Microsoft Clarity to review session recordings, heatmaps, rage clicks, dead clicks, scroll depth and user journey issues that are not obvious from analytics alone.',
    },
    {
      question: 'Do we need A/B testing?',
      answer: 'Not every fix needs an A/B test. Obvious usability issues can be corrected directly. Larger changes to messaging, layout or offers should be tested when traffic volume supports it.',
    },
    {
      question: 'How long does CRO take?',
      answer: 'A focused audit and implementation pass usually takes 2-5 weeks. Ongoing CRO programs run monthly with tests, reporting and continuous improvements.',
    },
  ],
  formHeading: 'Get a CRO review',
  formSubtext: 'Send your store URL and tell us where conversion feels stuck. We will identify the highest-impact next steps.',
  related: [
    {
      title: 'Shopify Speed Optimization',
      desc: 'Fix Core Web Vitals and page speed issues that hurt conversions.',
      href: '/services/shopify-speed-optimization',
    },
    {
      title: 'Custom Shopify Development',
      desc: 'Rebuild key templates when CRO requires deeper theme work.',
      href: '/services/shopify/development',
    },
    {
      title: 'AI Customer Support',
      desc: 'Use AI to answer buyer questions and reduce support friction.',
      href: '/services/ai/ai-customer-support',
    },
  ],
}

const jsonLd = renderJsonLd([
  service({
    name: croData.h1,
    description: croData.subtext,
    url: '/services/conversion-rate-optimization',
    serviceType: croData.serviceType,
    areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Conversion Rate Optimization', url: '/services/conversion-rate-optimization' },
  ]),
])

export default function ConversionRateOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceLandingPage
        data={croData}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Conversion Rate Optimization' },
        ]}
        deliverablesIntro="Every recommendation comes from your own analytics and session recordings, ranked by likely revenue impact, and we implement it rather than handing over a slide deck."
        urlLabel="Store URL"
        urlPlaceholder="yourstore.com or yourstore.myshopify.com"
        messageLabel="What conversion problem should we review?"
        messagePlaceholder="Example: traffic is good but product page conversion is low, checkout abandonment is high, or paid landing pages are not converting."
        compact
      />
    </>
  )
}
