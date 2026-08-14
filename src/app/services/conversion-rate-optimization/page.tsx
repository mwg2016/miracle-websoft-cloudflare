import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import type { ServiceLandingData } from '@/data/ai-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify CRO Agency for Higher Ecommerce Conversions',
  description:
    'Shopify CRO services for ecommerce brands. User journey analysis, Microsoft Clarity review, heatmaps, checkout, product page, homepage and A/B testing.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/conversion-rate-optimization' },
  openGraph: {
    title: 'Shopify CRO Agency for Higher Ecommerce Conversions | Miracle Websoft',
    description:
      'Conversion rate optimization for Shopify and ecommerce stores, including Clarity reviews, heatmap analysis, product page optimization and checkout improvements.',
    url: 'https://miraclewebsoft.com/services/conversion-rate-optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify CRO Agency for Higher Ecommerce Conversions | Miracle Websoft',
    description:
      'CRO audits, user journey analysis, Microsoft Clarity review, heatmap analysis, checkout optimization and A/B testing.',
  },
}

const croData: ServiceLandingData = {
  slug: 'conversion-rate-optimization',
  metaTitle: 'Shopify CRO Agency for Higher Ecommerce Conversions',
  metaDescription:
    'Shopify CRO services for ecommerce brands. User journey analysis, Microsoft Clarity review, heatmaps, checkout, product page, homepage and A/B testing.',
  eyebrow: 'SHOPIFY CRO',
  h1: 'Conversion Rate Optimization for Stores That Need More Revenue From Existing Traffic',
  subtext:
    'We identify where shoppers hesitate, get confused or abandon the buying journey, then improve product pages, checkout, homepage, landing pages and speed in priority order.',
  serviceType: 'Conversion rate optimization',
  problem: {
    title: 'Traffic is coming in, but too few visitors buy',
    body: 'Ad spend, SEO and influencer traffic are wasted when product pages do not answer buyer questions, mobile journeys feel slow or checkout creates avoidable friction.',
  },
  solution: {
    title: 'A CRO program grounded in real user behavior',
    body: 'We review analytics, Microsoft Clarity sessions, heatmaps, product pages, cart and checkout flow, then ship changes that reduce friction and improve decision confidence.',
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
    tag: 'CRO Program',
    metric: '+42%',
    metricLabel: 'conversion lift',
    title: 'Fashion store: product page, cart and checkout improvements increased conversion rate after Clarity review and heatmap analysis.',
    bullets: [
      'Session recordings exposed mobile size-guide friction and cart hesitation',
      'Product page trust signals, sticky cart and returns messaging were rebuilt',
      'Checkout distraction and shipping uncertainty were reduced',
    ],
    duration: '5-week project',
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
        primaryCtaLabel="Get Free CRO Review"
        secondaryCtaLabel="View CRO & Speed Page"
        secondaryCtaHref="/services/shopify-cro-speed"
        urlLabel="Store URL"
        urlPlaceholder="yourstore.com or yourstore.myshopify.com"
        messageLabel="What conversion problem should we review?"
        messagePlaceholder="Example: traffic is good but product page conversion is low, checkout abandonment is high, or paid landing pages are not converting."
      />
    </>
  )
}
