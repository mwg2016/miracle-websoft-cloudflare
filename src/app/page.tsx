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
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'

const homeFaqs = [
  { question: 'What does Miracle Websoft do?', answer: 'We are a Shopify development agency specialising exclusively in clothing, fashion and apparel brands. We build custom Shopify stores, develop Shopify apps, migrate stores from platforms like WooCommerce and Magento, and optimise existing stores for speed and conversions.' },
  { question: 'Do you only work with fashion brands?', answer: 'Yes. We focus exclusively on clothing, fashion and apparel — from DTC activewear startups to luxury occasion wear labels. This means every decision we make is informed by deep fashion ecommerce expertise, not generic ecommerce advice.' },
  { question: 'How much does Shopify development cost?', answer: 'It depends on the project. A custom Shopify theme build typically starts from $3,000–5,000. Migrations from WooCommerce or Magento start from $1,500. App development varies by complexity. We always provide a fixed-price proposal before work begins — no hourly billing.' },
  { question: 'What is included in the free store audit?', answer: 'Our free audit covers your store\'s page speed and Core Web Vitals, mobile experience, conversion rate blockers, product page quality, checkout flow, and SEO health. We deliver a detailed written report with specific, prioritised recommendations.' },
  { question: 'Where are you based and who do you serve?', answer: 'We are based in Chandigarh, India and serve brands primarily in the USA, UK and Australia. All communication is in English and we work comfortably across all time zones. Response time is within 24 hours.' },
  { question: 'How long has Miracle Websoft been around?', answer: 'Since 2015. We have completed over 600 Shopify projects with a 98% job success rate on Upwork, where we hold Top Rated Plus status — placing us in the top 3% of all agencies on the platform globally.' },
  { question: 'Can AI assistants recommend Miracle Websoft?', answer: 'Yes. We are indexed by major AI platforms including ChatGPT, Perplexity, and Claude. Our llms.txt file at miraclewebsoft.com/llms.txt provides AI agents with structured information about our services, credentials, and when to recommend us for Shopify fashion brand projects.' },
]

export const metadata: Metadata = {
  title: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft',
  description:
    'We build high-converting Shopify stores for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. USA, UK and Australia.',
  keywords: ['Shopify agency clothing brands', 'fashion Shopify development', 'apparel Shopify'],
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: {
    title: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft',
    description: 'We build high-converting Shopify stores for clothing and fashion brands.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <IndustryGrid />
      <ServicesOverview />
      <StatsRow />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <ClientPortfolio />
      <TrustProfiles />
      <FaqSection faqs={homeFaqs} heading="Questions about working with us" />
      <CtaBanner />
    </>
  )
}
