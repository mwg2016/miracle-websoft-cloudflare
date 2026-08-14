import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Privacy Policy — Miracle Websoft',
  description: 'Privacy policy for Miracle Websoft — how we collect, use and protect your data.',
  alternates: { canonical: 'https://miraclewebsoft.com/privacy' },
  openGraph: {
    title: 'Privacy Policy — Miracle Websoft',
    description: 'Privacy policy for Miracle Websoft — how we collect, use and protect your data.',
    url: 'https://miraclewebsoft.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Miracle Websoft',
    description: 'Privacy policy for Miracle Websoft — how we collect, use and protect your data.',
  },
}

const jsonLd = renderJsonLd([
  webPage({
    name: 'Privacy Policy — Miracle Websoft',
    description: 'How Miracle Websoft collects, uses and protects your data.',
    url: 'https://miraclewebsoft.com/privacy',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ]),
])

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container" style={{ maxWidth: '760px' }}>
        <div className="mb-8"><Breadcrumb items={[{ label: 'Privacy Policy' }]} /></div>
        <span className="mw-eyebrow">Legal</span>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '3rem' }}>Last updated: January 2025</p>
        <div style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '0.95rem' }} className="flex flex-col gap-8">
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
            <p>When you contact us through our website or by email, we collect the information you provide — such as your name, email address, Shopify store URL, and details about your project. We do not collect any data automatically beyond standard server logs.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>2. How We Use Your Information</h2>
            <p>We use the information you provide solely to respond to your enquiry, deliver the services you have requested, and send project-related communications. We do not sell, rent or share your personal data with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>3. Data Storage & Security</h2>
            <p>Your data is stored securely and accessed only by team members who need it to deliver your project. We use industry-standard practices to protect your information from unauthorised access.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>4. Cookies</h2>
            <p>This website uses minimal cookies required for basic functionality. We do not use advertising cookies or third-party tracking cookies.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>5. Your Rights</h2>
            <p>You have the right to access, correct or delete any personal data we hold about you. To exercise these rights, contact us at <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} style={{ color: 'var(--accent)' }}>karam@miraclewebsoft.com</a>.</p>
          </section>
          <section>
            <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>6. Contact</h2>
            <p>For any privacy-related questions, email us at <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')} style={{ color: 'var(--accent)' }}>karam@miraclewebsoft.com</a>.</p>
          </section>
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/terms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }} className="hover:text-white transition-colors">View Terms of Service →</Link>
        </div>
      </div>
    </div>
  )
}
