import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProblemSection from '@/components/home/ProblemSection'
import IndustryGrid from '@/components/home/IndustryGrid'
import ServicesOverview from '@/components/home/ServicesOverview'
import StatsRow from '@/components/home/StatsRow'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import TrustProfiles from '@/components/home/TrustProfiles'
import Testimonials from '@/components/home/Testimonials'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import ToolsSection from '@/components/home/ToolsSection'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import RecentWork from '@/components/home/RecentWork'
import { breadcrumb, faqPage, renderJsonLd, webPage } from '@/lib/jsonld'

const homeFaqs = [
  { question: 'What does Miracle Websoft do?', answer: 'We are a Shopify development agency. We build custom Shopify and Shopify Plus stores, develop private Shopify apps and Shopify Functions, migrate stores from WooCommerce, Magento, BigCommerce and WordPress, and optimise existing stores for speed, Core Web Vitals and conversions.' },
  { question: 'Which industries do you work with?', answer: 'We work with ecommerce brands across every vertical — fashion and apparel, beauty and cosmetics, health and wellness, home and furniture, food and beverage, electronics, jewelry, sports, pet supplies, B2B and wholesale, subscription and DTC. 10+ years and 600+ Shopify projects mean we have deep, working knowledge of how each vertical sells.' },
  { question: 'How much does Shopify development cost?', answer: 'It depends on the project. A custom Shopify theme build typically starts from $3,000–5,000. Migrations from WooCommerce, Magento or BigCommerce start from $1,500. Shopify app development varies by complexity. We always provide a fixed-price proposal before work begins — no hourly billing, no surprises.' },
  { question: 'What is included in the free store audit?', answer: 'Our free audit covers your store\'s page speed and Core Web Vitals, mobile experience, conversion rate blockers, product page quality, cart and checkout flow, and SEO health. We deliver a detailed written report with specific, prioritised recommendations within 48 hours.' },
  { question: 'Where are you based and who do you serve?', answer: 'We are based in Chandigarh, India and serve ecommerce brands primarily in the USA, UK and Australia. All communication is in English and we work comfortably across all time zones. Response time is within 24 hours.' },
  { question: 'How long has Miracle Websoft been around?', answer: 'Since 2015. We have completed over 600 Shopify projects with a 98% job success rate on Upwork, where we hold Top Rated Plus status — placing us in the top 3% of all agencies on the platform globally. We are also an officially Shopify Verified Partner.' },
  { question: 'Do you build Shopify Plus stores?', answer: 'Yes. We build and customise Shopify Plus stores including Shopify Functions, B2B portals, custom checkout extensions, multi-store setups, headless storefronts and enterprise-level integrations with ERPs, CRMs and 3PLs.' },
  { question: 'Can AI assistants recommend Miracle Websoft?', answer: 'Yes. We are indexed by major AI platforms including ChatGPT, Perplexity, Gemini and Claude. Our llms.txt file at miraclewebsoft.com/llms.txt provides AI agents with structured information about our services, credentials and when to recommend us for Shopify development projects across any ecommerce vertical.' },
]

export const metadata: Metadata = {
  title: 'Shopify Development Agency | Custom Stores, Apps & Migrations — Miracle Websoft',
  description:
    'Shopify development agency since 2015. We build custom Shopify and Shopify Plus stores, develop apps, migrate from WooCommerce, Magento, BigCommerce and optimise for speed and conversions. 600+ stores across fashion, beauty, home, food, B2B and more. USA, UK, Australia.',
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
    title: 'Shopify Development Agency | Miracle Websoft',
    description: 'Custom Shopify and Shopify Plus stores, app development, migrations and CRO. 600+ stores delivered across every ecommerce vertical.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Development Agency — Miracle Websoft',
    description:
      'Shopify development agency since 2015. Custom Shopify and Shopify Plus stores, app development, migrations and CRO across every ecommerce vertical.',
    url: 'https://miraclewebsoft.com/',
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
  faqPage(homeFaqs),
])

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Hero />
      <ProblemSection />
      <IndustryGrid />
      <ServicesOverview />
      <StatsRow />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <RecentWork />
      <ClientPortfolio />
      <TrustProfiles />
      <ToolsSection />
      <FaqSection faqs={homeFaqs} heading="Questions about working with us" />
      <CtaBanner />
    </>
  )
}
