/**
 * Fixed-price website packages for Indian businesses (Google / Meta ads landing page).
 * Prices are owner-set. Deliverables are a draft for owner sign-off: change them here only,
 * the page, the form dropdown and the WhatsApp messages all read from this file.
 */

export const WA_NUMBER = '916239269736'
export const PHONE = { href: 'tel:+916239269736', label: '+91 62392 69736' }

export interface InPackage {
  slug: 'starter' | 'business' | 'growth' | 'ecommerce'
  name: string
  price: number
  forWho: string
  delivery: string
  popular?: boolean
  features: string[]
}

export const packages: InPackage[] = [
  {
    slug: 'starter',
    name: 'Starter',
    price: 4999,
    forWho: 'Shops, freelancers and new businesses that need to look professional online.',
    delivery: '5 working days',
    features: [
      'Up to 3 pages (Home, About & Services, Contact)',
      'Mobile-friendly design',
      'WhatsApp chat + tap-to-call buttons',
      'Enquiry form that emails you',
      'Google Maps location + business hours',
      'Free SSL (https)',
      'Basic SEO: titles, descriptions, sitemap',
      '1 round of changes',
    ],
  },
  {
    slug: 'business',
    name: 'Business',
    price: 9999,
    forWho: 'Clinics, coaches, consultants and service businesses that want enquiries from Google.',
    delivery: '7 working days',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Up to 7 pages',
      'Photo / work gallery',
      'Google Business Profile setup help',
      'Google Analytics + Search Console connected',
      'On-page SEO for every page',
      '2 rounds of changes',
      '30 days free support after launch',
    ],
  },
  {
    slug: 'growth',
    name: 'Growth',
    price: 14999,
    forWho: 'Growing businesses that want to edit the site themselves and run ads to it.',
    delivery: '10 working days',
    features: [
      'Everything in Business, plus:',
      'Up to 12 pages',
      'Easy admin panel: edit text, photos and pages yourself',
      'Blog section for updates and offers',
      'Landing page ready for Google & Meta ads',
      'Speed optimisation for mobile',
      'Local business schema for Google',
      '3 rounds of changes',
      '60 days free support after launch',
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    price: 19999,
    forWho: 'Brands and sellers ready to take orders and payments online.',
    delivery: '14 working days',
    features: [
      'Online store on Shopify',
      'Up to 25 products uploaded for you',
      'UPI, cards, net banking and COD (Razorpay or similar)',
      'Shipping setup (Shiprocket or similar)',
      'Order and customer emails',
      'Discount coupons',
      'Mobile-first store design',
      'Training video on managing orders',
      '60 days free support after launch',
    ],
  },
]

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const waForPackage = (p: InPackage) =>
  waLink(`Hi Miracle Websoft, I'm interested in the ${p.name} website package (${inr(p.price)}). Please share details.`)

export const waGeneral = waLink('Hi Miracle Websoft, I want a website for my business. Please share details.')
