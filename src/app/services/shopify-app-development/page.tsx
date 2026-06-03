import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify App Development — Private Apps, Functions & Integrations | Miracle Websoft',
  description: 'Custom Shopify app development — private apps, public App Store apps, Shopify Functions and checkout extensions. Replace costly third-party apps with lean, custom-built alternatives.',
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

const guarantees = [
  { icon: '🔒', title: 'Fixed-Price Before We Start', body: 'Every app is scoped and priced before a single line of code is written. No hourly billing, no surprise invoices — you know the full cost upfront.' },
  { icon: '⚙️', title: 'Shopify-Native Architecture', body: 'Built using Shopify\'s official APIs, App Bridge and CLI standards — not hacks. Your app will pass Shopify\'s review process and survive every API version upgrade.' },
  { icon: '🛠️', title: 'Maintained Post-Launch', body: 'We offer ongoing maintenance packages. Shopify releases new API versions twice a year — we keep your app compatible and running at every update.' },
]

const related = [
  { title: 'Custom Shopify Development', desc: 'Build a full custom Shopify theme alongside your app.', href: '/services/shopify/development' },
  { title: 'CRO & Speed Optimisation', desc: 'Remove slow third-party apps and improve store performance.', href: '/services/shopify-cro-speed' },
  { title: 'Shopify Migrations', desc: 'Migrate to Shopify and rebuild your app stack cleanly.', href: '/services/shopify-migration' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify App Development',
    description:
      'Private and public Shopify apps — custom admin tools, storefront extensions, Shopify Functions and integrations.',
    url: '/services/shopify-app-development',
    serviceType: 'Shopify app development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify App Development', url: '/services/shopify-app-development' },
  ]),
  faqPage(faqs),
])

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify App Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY APP DEVELOPMENT</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>When the App Store Doesn&apos;t Have What You Need — We Build It</h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '580px', fontWeight: 300 }}>
              Private apps, public apps and Shopify Functions built specifically for your store — not a generic plugin that almost fits. Replace $200/month third-party apps with a one-time custom build that&apos;s faster, leaner, and fully yours.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['Private & public Shopify apps', 'Shopify Functions (Plus)', 'Replace costly third-party apps', 'Fixed-price proposal'].map(t => (
                <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="mw-btn-primary">
              Discuss your app <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Result */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Real Project Result</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ServiceResult
              tag="Private Shopify App"
              tagColor="#6C63FF"
              metric="$340"
              metricLabel="Saved / Month"
              title="Beauty brand: replaced 4 paid Shopify apps with a single custom private app — PageSpeed improved from 54 to 88."
              bullets={[
                'Replaced loyalty, rewards, bundle builder and pre-order apps with one custom-built private app',
                '$340/month in recurring app fees eliminated — build cost recovered in under 6 months',
                'Removing 4 third-party scripts improved mobile PageSpeed from 54 to 88',
              ]}
              duration="4-week build"
              cta={{ label: 'See all our work', href: '/work' }}
            />

            {/* ROI callout */}
            <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.5rem' }}>App Replacement ROI</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                  A custom app pays for itself — and eliminates the annual cost forever.
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { apps: '2 apps at $99/mo each', monthly: '$198/mo', annual: '$2,376/yr' },
                    { apps: '3 apps at $79/mo each', monthly: '$237/mo', annual: '$2,844/yr' },
                    { apps: '4 apps at $49–149/mo', monthly: '$340/mo', annual: '$4,080/yr' },
                  ].map(row => (
                    <div key={row.apps} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{row.apps}</span>
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{row.monthly}</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#EF4444' }}>{row.annual}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.25rem', lineHeight: 1.5 }}>
                A custom build typically costs $1,500–$6,000 depending on complexity. Most clients recover the cost in 6–18 months and pay nothing recurring after that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '3rem' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What We Build</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Apps for every Shopify use case</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '500px', lineHeight: 1.7 }}>From simple admin tools to complex storefront apps with billing and App Store listing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {apps.map((app, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)' }}>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of apps section */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>App Types</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>From private tools to App Store products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Private Apps',
                badge: 'Most common',
                color: '#6C63FF',
                desc: 'Built exclusively for your store. Never published. Faster to build, lower cost, no review process. Ideal for replacing paid apps, building internal tools, or adding functionality Shopify\'s API supports but no app offers cleanly.',
                examples: ['Product drop systems', 'Custom loyalty programs', 'ERP sync apps', 'Internal admin tools'],
              },
              {
                title: 'Shopify Functions',
                badge: 'Shopify Plus',
                color: '#F59E0B',
                desc: 'Customise checkout logic at a level no standard app can reach — discounts, shipping, payment options, cart validation. Only available on Shopify Plus. We\'ve built Functions for tiered pricing, stacking discounts, and conditional free shipping.',
                examples: ['Custom discount stacking', 'Tiered B2B pricing', 'Conditional shipping rules', 'Cart validation logic'],
              },
              {
                title: 'Public Apps',
                badge: 'App Store',
                color: '#10B981',
                desc: 'Apps listed on the Shopify App Store available for any merchant to install. Require Shopify\'s review and approval. We handle the full submission process — architecture, OAuth, billing, and App Store listing optimisation.',
                examples: ['App Store apps', 'Embedded admin apps', 'Checkout UI extensions', 'Theme app extensions'],
              },
            ].map((type, i) => (
              <div key={i} className="rounded-2xl p-5 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${type.color}20` }}>
                <div className="flex items-center gap-2 mb-3">
                  <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{type.title}</p>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em', padding: '2px 7px', borderRadius: '4px', background: `${type.color}18`, color: type.color, border: `1px solid ${type.color}30` }}>{type.badge}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{type.desc}</p>
                <div className="flex flex-col gap-1">
                  {type.examples.map(ex => (
                    <div key={ex} className="flex items-center gap-2">
                      <span style={{ color: type.color, fontSize: '0.7rem', fontWeight: 700 }}>→</span>
                      <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)' }}>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCta
        heading="Got a paid app you want to replace? We'll scope it free."
        sub="Send us the apps you're currently paying for and we'll tell you which ones can be custom-built, what it costs, and how fast you'll break even."
        btnLabel="Contact Us"
      />

      {/* Guarantees */}
      <GuaranteeBar guarantees={guarantees} />

      <WhyUs />

      <FaqSection faqs={faqs} heading="Shopify app development — common questions" />

      <RelatedServices services={related} />

      <CtaBanner />
    </>
  )
}
