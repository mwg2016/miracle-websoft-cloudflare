import type { Metadata } from 'next'
import LegalDoc, { type LegalSection } from './LegalDoc'
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

const sections: LegalSection[] = [
  { id: 'information-we-collect', title: 'Information We Collect', body: <p>When you contact us through our website or by email, we collect the information you provide — such as your name, email address, Shopify store URL, and details about your project. We do not collect any data automatically beyond standard server logs.</p> },
  { id: 'how-we-use-your-information', title: 'How We Use Your Information', body: <p>We use the information you provide solely to respond to your enquiry, deliver the services you have requested, and send project-related communications. We do not sell, rent or share your personal data with third parties for marketing purposes.</p> },
  { id: 'data-storage-security', title: 'Data Storage & Security', body: <p>Your data is stored securely and accessed only by team members who need it to deliver your project. We use industry-standard practices to protect your information from unauthorised access.</p> },
  { id: 'cookies', title: 'Cookies', body: <p>This website uses cookies for basic functionality and, to understand how visitors use the site and which pages lead to enquiries, analytics and advertising tags loaded through Google Tag Manager, including Google Analytics, Microsoft Clarity and the Meta Pixel. These tools may set their own cookies. You can block or delete cookies in your browser settings; the site still works without them.</p> },
  { id: 'your-rights', title: 'Your Rights', body: <p>You have the right to access, correct or delete any personal data we hold about you. To exercise these rights, contact us at <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')}>karam@miraclewebsoft.com</a>.</p> },
  { id: 'contact', title: 'Contact', body: <p>For any privacy-related questions, email us at <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')}>karam@miraclewebsoft.com</a>.</p> },
]

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDoc
        title="Privacy Policy"
        updated="January 2025"
        intro={<p>This policy explains what we collect when you get in touch with Miracle Websoft, why we collect it, and what you can ask us to do with it.</p>}
        sections={sections}
        related={{ href: '/terms', label: 'Read the Terms of Service' }}
      />
    </>
  )
}
