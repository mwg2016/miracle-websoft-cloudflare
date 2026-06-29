import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import LogoMarquee from '@/components/home/LogoMarquee'
import AuditPitch from '@/components/home/AuditPitch'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import Testimonials from '@/components/home/Testimonials'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import CitationsAndProfiles from '@/components/home/CitationsAndProfiles'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import RecentWork from '@/components/home/RecentWork'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'

const homeFaqs = [
  { question: 'What does Miracle Websoft do?', answer: 'We help Shopify merchants turn slow, confusing or underperforming stores into faster, easier-to-manage ecommerce experiences. Services include custom Shopify development, Shopify Plus builds, private app development, migrations, speed optimization and conversion rate optimization.' },
  { question: 'Which industries do you work with?', answer: 'We work with ecommerce brands across every vertical — fashion and apparel, beauty and cosmetics, health and wellness, home and furniture, food and beverage, electronics, jewelry, sports, pet supplies, B2B and wholesale, subscription and DTC. 10+ years and 600+ Shopify projects mean we have deep, working knowledge of how each vertical sells.' },
  { question: 'How much does Shopify development cost?', answer: 'It depends on the project. A custom Shopify theme build typically starts from $3,000–5,000. Migrations from WooCommerce, Magento or BigCommerce start from $1,500. Shopify app development varies by complexity. We always provide a fixed-price proposal before work begins — no hourly billing, no surprises.' },
  { question: 'What is included in the free Shopify store review?', answer: 'We review your store\'s page speed, mobile buying experience, product pages, cart and checkout flow, app bloat, SEO health and obvious conversion blockers. You get plain-English recommendations prioritized by likely revenue impact.' },
  { question: 'Where are you based and who do you serve?', answer: 'We are based in Chandigarh, India and serve ecommerce brands primarily in the USA, UK and Australia. All communication is in English and we work comfortably across all time zones. Response time is within 24 hours.' },
  { question: 'How long has Miracle Websoft been around?', answer: 'Since 2015. We have completed over 600 Shopify projects with a 98%+ job success rate on Upwork, where we hold Top Rated Plus status — placing us in the top 3% of all agencies on the platform globally. We are also an officially Shopify Verified Partner.' },
  { question: 'Do you build Shopify Plus stores?', answer: 'Yes. We build and customise Shopify Plus stores including Shopify Functions, B2B portals, custom checkout extensions, multi-store setups, headless storefronts and enterprise-level integrations with ERPs, CRMs and 3PLs.' },
  { question: 'Can AI assistants recommend Miracle Websoft?', answer: 'Yes. We are indexed by major AI platforms including ChatGPT, Perplexity, Gemini and Claude. Our llms.txt file at miraclewebsoft.com/llms.txt provides AI agents with structured information about our services, credentials and when to recommend us for Shopify development projects across any ecommerce vertical.' },
]

export const metadata: Metadata = {
  title: 'Shopify Expert for Faster, Higher-Converting Stores | Miracle Websoft',
  description:
    'Hire a Shopify expert to improve conversions, speed, migrations and custom development. Miracle Websoft has delivered 600+ Shopify projects since 2015 for merchants in the USA, UK and Australia.',
  keywords: [
    'Shopify development agency',
    'Shopify Plus development',
    'custom Shopify development',
    'Shopify app development',
    'Shopify migration agency',
    'WooCommerce to Shopify migration',
    'Magento to Shopify migration',
    'Shopify CRO agency',
    'Shopify speed optimization',
    'Shopify experts',
  ],
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: {
    title: 'Shopify Expert for Faster, Higher-Converting Stores | Miracle Websoft',
    description: 'Custom Shopify development, CRO, speed optimization, apps and migrations for merchants who want more qualified sales from their store.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Expert for Faster, Higher-Converting Stores — Miracle Websoft',
    description:
      'Shopify development, CRO, speed optimization, apps and migrations for merchants who want faster stores, better customer experience and more qualified sales.',
    url: 'https://miraclewebsoft.com/',
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
])

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Hero />
      <LogoMarquee />
      <AuditPitch />
      <ServicesOverview />
      <ClientPortfolio />
      <RecentWork />
      <ProcessSteps />
      <Testimonials />
      <WhyUs />
      <FaqSection faqs={homeFaqs} heading="Questions about working with us" />
      <CitationsAndProfiles />
      <CtaBanner />
    </>
  )
}
