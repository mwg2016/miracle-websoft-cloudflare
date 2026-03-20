import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'

export const metadata: Metadata = {
  title: 'Shopify App Development for Fashion Brands | Miracle Websoft',
  description:
    'Custom Shopify app development — private apps, public apps, Shopify Functions.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-app-development' },
}

const faqs = [
  {
    question: 'What kind of Shopify apps do you build?',
    answer: 'We build private apps (for a single store), public apps (for the Shopify App Store), and Shopify Plus checkout extensions. Common projects include product drop and waitlist systems, bundle builders, custom size guides, loyalty programs, B2B wholesale portals, ERP integrations, and custom engraving or personalisation tools.',
  },
  {
    question: 'What is the difference between a private app and a public app?',
    answer: 'A private app is built exclusively for one store and is never published. A public app can be installed by any Shopify merchant and is listed on the App Store. Private apps are faster and cheaper to build. Public apps require passing Shopify\'s review process and take longer to launch.',
  },
  {
    question: 'Can you build Shopify Functions?',
    answer: 'Yes. Shopify Functions let you customise checkout logic — discounts, shipping methods, payment options, and cart validation — at a deep level that standard apps cannot access. Functions are only available on Shopify Plus. We have built Functions for custom discount stacking, tiered pricing, and conditional free shipping rules.',
  },
  {
    question: 'Can you replace a paid Shopify app with custom code?',
    answer: 'Often yes. Many stores pay $50–200/month for app functionality that can be built once as custom code. We audit which apps in your stack are replaceable and rebuild them — eliminating recurring costs and typically improving store speed at the same time.',
  },
  {
    question: 'How long does it take to build a Shopify app?',
    answer: 'A simple private app (e.g. a metafield editor, basic webhook integration) typically takes 1–3 weeks. A complex app with Shopify Functions, billing, admin UI, and App Store submission takes 6–12 weeks.',
  },
  {
    question: 'Do you maintain the apps you build after launch?',
    answer: 'Yes. We offer ongoing maintenance and update packages. This includes handling Shopify API version upgrades, adding new features, and monitoring for any issues caused by Shopify platform changes.',
  },
]

const apps = [
  'Product drop and waitlist apps',
  'Bundle builder and kit builder apps',
  'Custom size guide and fit recommendation apps',
  'Loyalty and rewards program apps',
  'Subscription and membership apps',
  'B2B wholesale and tiered pricing apps',
  'Custom checkout extensions (Shopify Plus)',
  'ERP and inventory sync apps',
  'Social proof and review apps',
  'Shopify Functions for discount and shipping logic',
  'Private admin apps for internal tools',
  'Storefront API integrations',
]

export default function AppDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-dark)] text-white"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}
      >
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: undefined }, { label: 'Shopify App Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">APP DEVELOPMENT</span>
            <h1 className="text-white mb-6">Shopify App Development for Fashion Brands</h1>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              When the Shopify App Store does not have what you need, we build it. Private apps,
              public apps and Shopify Functions built specifically for clothing and fashion brands.
            </p>
            <Link href="/contact" className="mw-btn-primary">
              Discuss your app <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT WE BUILD</span>
            <h2 className="text-[var(--color-text-primary)]">Apps for every fashion use case</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {apps.map((app, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--color-off-white)] rounded-lg p-4">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <span className="text-sm text-[var(--color-text-primary)]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessSteps />
      <FaqSection faqs={faqs} heading="Shopify app development — common questions" />
      <CtaBanner />
    </>
  )
}
