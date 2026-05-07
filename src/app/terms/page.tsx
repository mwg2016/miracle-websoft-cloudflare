import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Terms of Service — Miracle Websoft',
  description: 'Terms of service for Miracle Websoft Shopify development agency.',
  alternates: { canonical: 'https://miraclewebsoft.com/terms' },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Terms of Service — Miracle Websoft',
    description: 'Terms of service for Miracle Websoft Shopify development agency.',
    url: 'https://miraclewebsoft.com/terms',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ]),
])

export default function TermsPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container" style={{ maxWidth: '760px' }}>
        <div className="mb-8"><Breadcrumb items={[{ label: 'Terms of Service' }]} /></div>
        <span className="mw-eyebrow">Legal</span>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '3rem' }}>Last updated: January 2025</p>
        <div style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '0.95rem' }} className="flex flex-col gap-8">
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>1. Services</h2>
            <p>Miracle Websoft provides Shopify development, app development, migration, and conversion optimisation services to clients worldwide. All project scope, deliverables, and timelines are agreed upon in writing before work begins.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>2. Payment</h2>
            <p>Payment terms are outlined in your project proposal. A deposit is required before work begins on any project. Remaining payments are due at agreed milestones. All prices are in USD unless otherwise stated.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>3. Intellectual Property</h2>
            <p>Upon receipt of full payment, all custom code and design work created for your project becomes your property. We retain the right to display completed work in our portfolio unless you request otherwise in writing.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>4. Revisions</h2>
            <p>Each project includes a defined number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope will be quoted separately.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>5. Limitation of Liability</h2>
            <p>Miracle Websoft is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>6. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes will be resolved in the courts of Himachal Pradesh, India.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>7. Contact</h2>
            <p>Questions about these terms? Email <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} style={{ color: 'var(--accent)' }}>karam@miraclewebsoft.com</a>.</p>
          </section>
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }} className="hover:text-white transition-colors">View Privacy Policy →</Link>
        </div>
      </div>
    </div>
  )
}
