import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import LogoMarquee from '@/components/home/LogoMarquee'
import AuditPitch from '@/components/home/AuditPitch'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSteps from '@/components/home/ProcessSteps'
import Testimonials from '@/components/home/Testimonials'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import RecentWork from '@/components/home/RecentWork'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'

const homeFaqs = [
  { question: 'What does Miracle Websoft do?', answer: 'Miracle Websoft is an ecommerce growth and AI technology agency. We build Shopify stores, improve conversion rates, optimize speed, automate operations with AI and develop custom web applications, portals and API integrations.' },
  { question: 'Which markets do you serve?', answer: 'We serve ecommerce brands, Shopify merchants, SMBs, agencies and startups in the United States, Canada, United Kingdom, Australia and Europe, with delivery led from Chandigarh, India.' },
  { question: 'Do you still specialize in Shopify?', answer: 'Yes. Shopify remains a core strength. We provide Shopify store development, Shopify Plus development, theme customization, custom features, app integration, migrations, maintenance, API development and private apps.' },
  { question: 'What AI services do you provide?', answer: 'We provide AI business automation, workflow automation, OpenAI integrations, AI chatbots, AI customer support, AI internal tools, AI agents, AI website development, AI content automation and AI consulting.' },
  { question: 'What is included in the free consultation?', answer: 'We review your store, website or workflow challenge and identify the clearest next steps. Depending on the need, this may include speed, CRO, SEO, technical architecture, AI automation opportunities or custom software scope.' },
  { question: 'How much does a project cost?', answer: 'Pricing depends on scope. We provide fixed-price proposals before work begins. Smaller Shopify improvements and maintenance can start in the hundreds, while custom builds, AI tools and integrations are scoped based on complexity.' },
  { question: 'Can you work as a long-term technical partner?', answer: 'Yes. Many clients keep us involved after launch for Shopify maintenance, CRO, speed improvements, AI workflow iteration, custom features, integrations and ongoing development support.' },
  { question: 'What makes Miracle Websoft different?', answer: 'We combine ecommerce, conversion, performance, AI automation and custom development experience in one team. That means recommendations are based on business outcomes, not isolated technical tasks.' },
]

export const metadata: Metadata = {
  title: 'Ecommerce Growth & AI Technology Agency | Miracle Websoft',
  description:
    'Miracle Websoft helps ecommerce brands build Shopify stores, improve conversions, increase performance, automate operations with AI and develop custom web applications.',
  keywords: [
    'Shopify development agency',
    'Shopify experts',
    'Shopify developers',
    'Shopify Plus agency',
    'Shopify Plus development',
    'Shopify CRO',
    'Shopify speed optimization',
    'Shopify SEO',
    'Shopify support',
    'Shopify maintenance',
    'AI agency',
    'AI automation',
    'AI business automation',
    'AI website development',
    'custom web development',
    'API integration services',
    'ecommerce development company',
  ],
  alternates: { canonical: 'https://www.miraclewebsoft.com' },
  openGraph: {
    title: 'Ecommerce Growth & AI Technology Agency | Miracle Websoft',
    description: 'Shopify development, CRO, speed optimization, AI automation and custom web applications for ecommerce brands and growing businesses.',
    url: 'https://www.miraclewebsoft.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Growth & AI Technology Agency | Miracle Websoft',
    description: 'Shopify development, CRO, performance, AI automation and custom web applications.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Ecommerce Growth & AI Technology Agency - Miracle Websoft',
    description:
      'Shopify development, CRO, speed optimization, AI automation and custom web applications for ecommerce brands and growing businesses.',
    url: 'https://www.miraclewebsoft.com/',
  }),
  breadcrumb([{ name: 'Home', url: '/' }]),
])

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Hero />
      <LogoMarquee />
      <ServicesOverview />
      <AuditPitch />
      <ProcessSteps />
      <RecentWork />
      <Testimonials />
      <FaqSection faqs={homeFaqs} heading="Questions about working with us" />
      <CtaBanner />
    </>
  )
}


