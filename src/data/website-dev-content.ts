// Shared copy + references for /website-development hub, country and city pages.
// Keeping it in one place so 150 pages stay consistent and one edit propagates everywhere.

export interface FaqItem {
  question: string
  answer: string
}

// 8 universal FAQs — rendered on every page.
export const universalFaqs: FaqItem[] = [
  {
    question: "I don't have a domain or hosting — is that a problem?",
    answer:
      "Not at all. We handle both for you. Your package includes the domain name (yourname.com, .co.uk, or .com.au depending on your country) and one year of hosting. You don't need to buy or set up anything yourself.",
  },
  {
    question: "I don't really know what I want my website to look like.",
    answer:
      "That's normal. We start with a 20-minute call where you tell us about your business — what you sell, who buys from you, what you want people to do on the site. We turn that into a design. You review, give feedback, we adjust.",
  },
  {
    question: 'How long does it take?',
    answer:
      'Starter sites go live in 7 days, Business in 10, E-commerce in 14. That assumes you give us your text and any photos within the first 3 days. If you need us to write the copy too, we offer that as an add-on.',
  },
  {
    question: 'What happens after the first year? Do I lose the site?',
    answer:
      'No. From year two, you pay roughly $15–25 per year for the domain and $5–10 per month for hosting (we set you up with a provider you can manage yourself). Or stay on our Care plan for hands-off maintenance. Either way the site is yours.',
  },
  {
    question: 'Can I edit the site myself once it is built?',
    answer:
      'Yes. We build on WordPress or a similarly simple CMS where you can change text, swap photos and add blog posts from a dashboard. We give you a short video walkthrough on delivery so you know exactly where everything is.',
  },
  {
    question: 'What if I want to add things later — booking, payments, a member area?',
    answer:
      'Easy. The platforms we build on (WordPress, Shopify, WooCommerce) all support add-ons. Most things — online bookings, email signup, simple payments — we can add in a day or two for a fixed fee. Larger features get a separate quote.',
  },
  {
    question: 'Do you write the content for me?',
    answer:
      'You give us the basics — what you do, where you are, opening hours — and we write the site copy. If you have a longer story you want told (an about page, a values section), we can write that too for an additional fee, or you can supply the text.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'Just a short message saying what your business is and which package you are leaning towards. We will reply within 24 hours with a quote, a timeline and the 4 or 5 questions we need answered to begin. No paperwork before then.',
  },
]

// Hand-holding section content — appears on every page.
export const handHolding = {
  eyebrow: 'WE HANDLE EVERYTHING',
  heading: "What you don't need to know to get a website.",
  intro:
    "Most small business owners think building a website means learning about domains, hosting, themes, plugins and SSL certificates. It doesn't. You bring the business. We bring everything else.",
  items: [
    {
      title: 'Domain name',
      text: 'We register yourname.com (or your local equivalent) for you. First year is included. You own it.',
    },
    {
      title: 'Hosting',
      text: 'Fast hosting included for the first year. SSL certificate, daily backups, security updates — all handled.',
    },
    {
      title: 'Design',
      text: "We design the site around your business, not a generic template. You review, you give feedback, we adjust.",
    },
    {
      title: 'Content',
      text: "We write the basic site copy from a short call with you. Photos either yours or licensed stock we pick.",
    },
    {
      title: 'SEO setup',
      text: 'Page titles, descriptions, sitemap submitted to Google, Google Business Profile linked. Done before launch.',
    },
    {
      title: 'Going live',
      text: 'When you approve, we push it live and email you to confirm. From here, you can update it yourself or let us handle it.',
    },
  ],
}

// References — 3 real client cases + 3 category demos. Same set on every page.
export interface RealCase {
  type: 'real'
  name: string
  url: string
  blurb: string
  countryFlag: 'us' | 'uk' | 'au' | 'global'
  category: string
}

export interface CategoryDemo {
  type: 'demo'
  name: string
  blurb: string
  category: string
  bgGradient: string
  accentColor: string
}

export const realCases: RealCase[] = [
  {
    type: 'real',
    name: 'Buddha Trends',
    url: 'https://buddhatrends.com',
    blurb:
      'Womens fashion store we built and continue to grow. Live across 30+ countries with a custom Shopify setup.',
    countryFlag: 'global',
    category: 'Fashion retail',
  },
  {
    type: 'real',
    name: 'Aqua Essentials',
    url: 'https://www.aquaessentials.co.uk',
    blurb:
      'Niche UK e-commerce store with deep product catalogue. We rebuilt and optimised for performance and Core Web Vitals.',
    countryFlag: 'uk',
    category: 'Specialty retail',
  },
  {
    type: 'real',
    name: 'OTAA',
    url: 'https://www.otaa.com',
    blurb:
      'Australian-founded mens accessories brand with 16,500+ reviews. Custom Shopify build, multi-currency, multi-region.',
    countryFlag: 'au',
    category: 'Mens accessories',
  },
]

export const categoryDemos: CategoryDemo[] = [
  {
    type: 'demo',
    name: 'Restaurant or cafe',
    blurb:
      'Menu, opening hours, location, booking link, photo gallery, customer reviews. The site a hungry local actually wants to land on.',
    category: 'Hospitality',
    bgGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    accentColor: '#fbbf24',
  },
  {
    type: 'demo',
    name: 'Salon or barber',
    blurb:
      'Services, prices, gallery, instant booking, staff profiles, contact. Built so a customer can book without calling.',
    category: 'Beauty & grooming',
    bgGradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    accentColor: '#f0abfc',
  },
  {
    type: 'demo',
    name: 'Plumber or trades',
    blurb:
      'Services, service areas, emergency contact, gallery, reviews, quote request form. Designed to turn a Google search into a phone call.',
    category: 'Trades & home services',
    bgGradient: 'linear-gradient(135deg, #0ea5e9, #1e40af)',
    accentColor: '#7dd3fc',
  },
]

// Stat bar — same 4 stats on every page.
export const stats = [
  { value: '7', unit: 'days', label: 'Average delivery' },
  { value: '$299', unit: '+', label: 'All-in pricing' },
  { value: '150+', unit: '', label: 'Cities served' },
  { value: '100%', unit: '', label: 'Done-for-you' },
]
