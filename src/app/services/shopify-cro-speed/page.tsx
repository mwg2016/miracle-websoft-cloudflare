import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'

export const metadata: Metadata = {
  title: 'Shopify CRO and Speed Optimization for Fashion Brands | Miracle Websoft',
  description:
    'Conversion rate optimization and speed improvements for clothing brands.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-cro-speed' },
}

const faqs = [
  {
    question: 'What is CRO (conversion rate optimisation)?',
    answer: 'CRO is the process of improving your store so a higher percentage of visitors become buyers. For a fashion brand doing $500K/year, a 1% lift in conversion rate is worth $5,000 in extra revenue — with no extra ad spend. We improve product pages, checkout flows, mobile experience, imagery, size guides, and cart recovery.',
  },
  {
    question: 'What is a good Shopify page speed score?',
    answer: 'A Google PageSpeed Insights score of 90+ on mobile is the target. Most unoptimised Shopify stores score 40–65. We consistently achieve 90+ and a Largest Contentful Paint (LCP) under 1.5 seconds after our optimisation work.',
  },
  {
    question: 'What most affects Shopify store speed?',
    answer: 'The three biggest culprits are: unoptimised images (often the single largest issue), too many third-party apps loading JavaScript, and an unoptimised theme with render-blocking code. We audit all three and fix them systematically — usually eliminating 3–8 unnecessary app scripts alone.',
  },
  {
    question: 'How much can you improve my conversion rate?',
    answer: 'Our average across completed CRO projects is a 42% conversion rate increase. Results vary — some stores see 20%, others see 60%+. We show you the specific changes planned and their expected impact before we start, so you know exactly what you are getting.',
  },
  {
    question: 'Do you guarantee a page speed improvement?',
    answer: 'Yes. We guarantee a Google PageSpeed Insights score of 90+ on mobile for speed optimisation projects. If we do not achieve this, we keep working until we do — at no additional cost.',
  },
  {
    question: 'How long does a CRO and speed project take?',
    answer: 'A focused speed optimisation project typically takes 1–3 weeks. A full CRO programme — including product page redesign, checkout improvements, A/B test setup, and ongoing monthly reporting — runs for 3–6 months.',
  },
  {
    question: 'Do I need to rebuild my whole store for speed improvements?',
    answer: 'No. Speed optimisation can be done on your existing store without a full rebuild. We work with your current theme, removing bloat, compressing images, deferring scripts, and inlining critical CSS. A full rebuild is only recommended if the theme itself is fundamentally unoptimisable.',
  },
]

const deliverables = [
  'Full Lighthouse audit — mobile and desktop',
  'Core Web Vitals improvement plan',
  'Image compression and next-gen format conversion',
  'JavaScript bundle analysis and reduction',
  'Critical CSS extraction and inlining',
  'Third-party script audit and deferral',
  'Product page conversion audit',
  'Checkout flow analysis and fixes',
  'Add-to-cart rate optimization',
  'Homepage and collection page CRO',
  'A/B test setup and analysis',
  'Monthly performance reporting',
]

export default function CROSpeedPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-dark)] text-white"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}
      >
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: undefined }, { label: 'CRO & Speed Optimization' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">CRO & SPEED</span>
            <h1 className="text-white mb-6">Shopify CRO and Speed Optimization for Fashion Brands</h1>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              Your store is already getting traffic. We make sure more of it converts.
              Average results: 42% conversion increase, 1.2s mobile load time.
            </p>
            <Link href="/contact" className="mw-btn-primary">
              Get a free CRO audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 className="text-[var(--color-text-primary)]">A complete CRO and speed programme</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--color-off-white)] rounded-lg p-4">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <span className="text-sm text-[var(--color-text-primary)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessSteps />
      <FaqSection faqs={faqs} heading="CRO & speed optimisation — common questions" />
      <CtaBanner />
    </>
  )
}
