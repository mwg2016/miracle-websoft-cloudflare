import type { Metadata } from 'next'
import LegalDoc, { type LegalSection } from '../privacy/LegalDoc'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Terms of Service — Miracle Websoft',
  description: 'Terms of service for Miracle Websoft Shopify development agency.',
  alternates: { canonical: 'https://miraclewebsoft.com/terms' },
  openGraph: {
    title: 'Terms of Service — Miracle Websoft',
    description: 'Terms of service for Miracle Websoft Shopify development agency.',
    url: 'https://miraclewebsoft.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Miracle Websoft',
    description: 'Terms of service for Miracle Websoft Shopify development agency.',
  },
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

const sections: LegalSection[] = [
  { id: 'services', title: 'Services', body: <p>Miracle Websoft provides Shopify development, app development, migration, and conversion optimisation services to clients worldwide. All project scope, deliverables, and timelines are agreed upon in writing before work begins.</p> },
  { id: 'payment', title: 'Payment', body: <p>Payment terms are outlined in your project proposal. A deposit is required before work begins on any project. Remaining payments are due at agreed milestones. All prices are in USD unless otherwise stated.</p> },
  { id: 'intellectual-property', title: 'Intellectual Property', body: <p>Upon receipt of full payment, all custom code and design work created for your project becomes your property. We retain the right to display completed work in our portfolio unless you request otherwise in writing.</p> },
  { id: 'revisions', title: 'Revisions', body: <p>Each project includes a defined number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope will be quoted separately.</p> },
  { id: 'support-and-maintenance', title: 'Support & Maintenance', body: <p>Website and store development is charged as a one-time project fee. Each delivered site includes one (1) month of complimentary post-launch support from the date of handover, covering bug fixes directly related to our original delivery. After this period, ongoing support is available only through (a) a paid monthly support/maintenance plan, or (b) pay-as-you-go billing agreed in advance. We do not actively monitor, update, back up, or maintain any site that is not on an active support plan — clients without a plan are responsible for hosting, backups, plugin/theme updates, and routine monitoring of their site.</p> },
  { id: 'security-and-third-party-risk', title: 'Security & Third-Party Risk', body: <p>No website, server, theme, plugin, or platform can be guaranteed 100% secure. Even global platforms such as Facebook, Instagram, and X (Twitter) have experienced breaches. We follow current development best practices at the time of delivery, but we do not warrant that any site built or maintained by us will remain permanently free from hacking, malware, vulnerabilities introduced through third-party plugins or themes, hosting or DNS compromise, leaked credentials, or zero-day exploits. Any liability for such incidents — including data loss, downtime, defacement, SEO impact, or financial loss — is expressly disclaimed. Clients are strongly advised to maintain an active support plan, keep regular off-platform backups, enforce strong admin credentials with two-factor authentication, and limit admin access to trusted parties.</p> },
  { id: 'limitation-of-liability', title: 'Limitation of Liability', body: <p>Miracle Websoft is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.</p> },
  { id: 'governing-law', title: 'Governing Law', body: <p>These terms are governed by the laws of India. Any disputes will be resolved in the courts of Punjab, India.</p> },
  { id: 'contact', title: 'Contact', body: <p>Questions about these terms? Email <a href={outboundHref('email', 'mailto:karam@miraclewebsoft.com')}>karam@miraclewebsoft.com</a>.</p> },
]

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDoc
        title="Terms of Service"
        updated="May 2026"
        intro={<p>These terms cover how we work with clients on Shopify development, apps, migrations and conversion work. Your written project proposal sets out the specifics of each project.</p>}
        sections={sections}
        related={{ href: '/privacy', label: 'Read the Privacy Policy' }}
      />
    </>
  )
}
