import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import type { ServiceLandingData } from '@/data/ai-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Speed Up Your Shopify Store | Miracle Websoft',
  description:
    'Improve Shopify PageSpeed and Core Web Vitals by reducing app bloat, optimizing images and scripts, and fixing performance issues on revenue pages.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-speed-optimization' },
  openGraph: {
    title: 'Speed Up Your Shopify Store | Miracle Websoft',
    description:
      'Improve Shopify PageSpeed and Core Web Vitals by reducing app bloat, optimizing images and scripts, and fixing performance issues on revenue pages.',
    url: 'https://miraclewebsoft.com/services/shopify-speed-optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Up Your Shopify Store | Miracle Websoft',
    description:
      'Improve Shopify PageSpeed and Core Web Vitals by reducing app bloat, optimizing images and scripts, and fixing performance issues on revenue pages.',
  },
}

const speedData: ServiceLandingData = {
  slug: 'shopify-speed-optimization',
  metaTitle: 'Speed Up Your Shopify Store | Miracle Websoft',
  metaDescription:
    'Improve Shopify PageSpeed and Core Web Vitals by reducing app bloat, optimizing images and scripts, and fixing performance issues on revenue pages.',
  eyebrow: 'SHOPIFY SPEED FIX SPRINT',
  h1: 'Shopify speed optimization: a faster store on mobile, measured before and after',
  subtext:
    'A short, fixed-price sprint on the pages that make you money: home, collection, product and cart. We remove app bloat, fix images and scripts, and show you the before and after numbers.',
  serviceType: 'Shopify speed optimization',
  problem: {
    title: 'Slow stores lose buyers before the product has a chance',
    body: 'Large images, heavy apps, render-blocking scripts and unstable layouts hurt mobile experience, SEO and conversion rate. Most Shopify stores carry more code than they need.',
  },
  solution: {
    title: 'A performance pass focused on revenue pages',
    body: 'We audit theme code, apps, scripts, images, fonts and Core Web Vitals, then implement fixes on the pages that affect discovery and buying decisions.',
  },
  offer: {
    promise: 'Faster home, collection and product pages on mobile, with before-and-after numbers.',
    price: 'Fixed price',
    priceNote: 'Quoted after the free teardown, based on your theme and apps.',
    timeline: 'Usually 3–5 working days',
    guarantee: 'We agree the pages and metrics up front. No measurable improvement on them, no fee.',
    includes: ['PageSpeed and Core Web Vitals baseline', 'App, script, image and font fixes', 'Tracking and apps kept working', 'Before-and-after report'],
  },
  benefits: [
    'Improve mobile PageSpeed and Core Web Vitals',
    'Reduce LCP, CLS and INP issues',
    'Remove or defer unnecessary app scripts',
    'Compress and modernize image delivery',
    'Improve SEO and user experience signals',
    'Create a cleaner long-term performance baseline',
  ],
  deliverables: [
    'Lighthouse and PageSpeed audit',
    'Core Web Vitals action plan',
    'Image optimization and lazy loading review',
    'App script and third-party tag cleanup',
    'Theme code performance fixes',
    'Before/after performance report',
  ],
  process: [
    {
      title: 'Measure the baseline',
      body: 'We test home, collection, product, cart and key landing pages across PageSpeed, Lighthouse and real storefront behavior.',
    },
    {
      title: 'Find the heavy code',
      body: 'We identify render-blocking assets, duplicate scripts, unused app code, image weight, layout shifts and interaction delays.',
    },
    {
      title: 'Implement safe fixes',
      body: 'We optimize assets, defer non-critical scripts, reduce page weight and adjust theme code without breaking tracking or store behavior.',
    },
    {
      title: 'Report and monitor',
      body: 'You receive before/after results, remaining constraints and recommendations for keeping the store fast after launch.',
    },
  ],
  caseStudy: {
    tag: 'Speed Optimization',
    metric: '5.0',
    metricLabel: 'Client rating on Upwork',
    title: 'Shopify store optimization: app bloat removed, scripts deferred, images and fonts optimised on the existing theme.',
    bullets: [
      'Removed app bloat and deferred non-critical scripts',
      'Optimised images and fonts, and added lazy-loading',
      'Client: “Developed some really creative solutions to some very unique requests. Would recommend.”',
    ],
    duration: 'Feb 2025 · Upwork',
    href: '/work/shopify-site-optimization-2025',
  },
  faqs: [
    {
      question: 'What affects Shopify speed the most?',
      answer: 'The most common issues are unoptimized images, too many app scripts, render-blocking JavaScript, heavy fonts, unused theme code and late-loading media that causes layout shift.',
    },
    {
      question: 'Can you improve speed without rebuilding the store?',
      answer: 'Often yes. Many stores can be improved through image, script, app and theme optimization. If the theme is fundamentally slow, we will explain when a rebuild is the better option.',
    },
    {
      question: 'Will speed optimization break apps or tracking?',
      answer: 'We test carefully before removing or deferring scripts. Tracking, pixels and business-critical apps are handled with more caution than cosmetic widgets.',
    },
    {
      question: 'Do you guarantee a 100 PageSpeed score?',
      answer: 'No serious agency should guarantee 100 for every Shopify store because apps, tracking, theme constraints and third-party scripts affect the score. We focus on real Core Web Vitals and measurable speed improvements.',
    },
  ],
  formHeading: 'Get a speed review',
  formSubtext: 'Send your store URL and we will identify the biggest performance blockers and the safest fixes.',
  related: [
    {
      title: 'Conversion Rate Optimization',
      desc: 'Turn performance improvements into stronger buying journeys.',
      href: '/services/conversion-rate-optimization',
    },
    {
      title: 'Shopify Development',
      desc: 'Rebuild slow templates when optimization is not enough.',
      href: '/services/shopify/development',
    },
    {
      title: 'Shopify Maintenance',
      desc: 'Keep themes, apps and performance healthy over time.',
      href: '/services/shopify/shopify-maintenance',
    },
  ],
}

const jsonLd = renderJsonLd([
  service({
    name: speedData.h1,
    description: speedData.subtext,
    url: '/services/shopify-speed-optimization',
    serviceType: speedData.serviceType,
    areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify Speed Optimization', url: '/services/shopify-speed-optimization' },
  ]),
])

export default function ShopifySpeedOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceLandingPage
        data={speedData}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Shopify Speed Optimization' },
        ]}
        deliverablesIntro="We measure before and after on your real templates, fix the causes rather than chasing a score, and hand over a short report of what changed."
        urlLabel="Shopify store URL"
        urlPlaceholder="yourstore.com or yourstore.myshopify.com"
        messageLabel="What speed problem should we review?"
        messagePlaceholder="Example: PageSpeed is low, mobile LCP is slow, apps are heavy, or product pages feel sluggish."
        compact
      />
    </>
  )
}
