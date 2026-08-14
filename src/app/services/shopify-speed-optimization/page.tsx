import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import type { ServiceLandingData } from '@/data/ai-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Speed Optimization & Core Web Vitals Service',
  description:
    'Shopify speed optimization for faster mobile stores. Improve Core Web Vitals, PageSpeed, LCP, CLS, INP, app bloat, images and theme performance.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-speed-optimization' },
  openGraph: {
    title: 'Shopify Speed Optimization & Core Web Vitals Service | Miracle Websoft',
    description:
      'Improve Shopify PageSpeed, Core Web Vitals, LCP, CLS, INP, mobile performance, image weight, app bloat and theme performance.',
    url: 'https://miraclewebsoft.com/services/shopify-speed-optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Speed Optimization & Core Web Vitals Service | Miracle Websoft',
    description:
      'Shopify speed optimization for PageSpeed, Core Web Vitals, LCP, CLS, INP, app bloat, images and theme performance.',
  },
}

const speedData: ServiceLandingData = {
  slug: 'shopify-speed-optimization',
  metaTitle: 'Shopify Speed Optimization & Core Web Vitals Service',
  metaDescription:
    'Shopify speed optimization for faster mobile stores. Improve Core Web Vitals, PageSpeed, LCP, CLS, INP, app bloat, images and theme performance.',
  eyebrow: 'SHOPIFY SPEED OPTIMIZATION',
  h1: 'Shopify Speed Optimization for Faster Mobile Shopping',
  subtext:
    'We improve Shopify performance by reducing app bloat, optimizing images and scripts, fixing Core Web Vitals and making key buying pages load faster on mobile.',
  serviceType: 'Shopify speed optimization',
  problem: {
    title: 'Slow stores lose buyers before the product has a chance',
    body: 'Large images, heavy apps, render-blocking scripts and unstable layouts hurt mobile experience, SEO and conversion rate. Most Shopify stores carry more code than they need.',
  },
  solution: {
    title: 'A performance pass focused on revenue pages',
    body: 'We audit theme code, apps, scripts, images, fonts and Core Web Vitals, then implement fixes on the pages that affect discovery and buying decisions.',
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
    metric: '44->91',
    metricLabel: 'mobile PageSpeed',
    title: 'Luxury fashion store: image, app and theme cleanup improved mobile PageSpeed and reduced product page load friction.',
    bullets: [
      'Removed unnecessary scripts and deferred non-critical third-party tags',
      'Reduced page weight by optimizing images and theme assets',
      'Fixed layout shift from late-loading media and app embeds',
    ],
    duration: '3-week project',
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
        accent="#10B981"
        primaryCtaLabel="Get Free Speed Review"
        secondaryCtaLabel="View CRO & Speed Page"
        secondaryCtaHref="/services/shopify-cro-speed"
        urlLabel="Shopify store URL"
        urlPlaceholder="yourstore.com or yourstore.myshopify.com"
        messageLabel="What speed problem should we review?"
        messagePlaceholder="Example: PageSpeed is low, mobile LCP is slow, apps are heavy, or product pages feel sluggish."
      />
    </>
  )
}
