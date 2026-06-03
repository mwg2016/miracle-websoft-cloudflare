export type JobCategory =
  | 'Store Development'
  | 'Store Redesign'
  | 'Migration'
  | 'Custom Features'
  | 'Shopify Plus'
  | 'Speed & CRO'
  | 'Design & Figma'
  | 'Ongoing Support'

/**
 * Optional rich case-study content. When present on a job, the work detail
 * page renders a full case study (client context → challenge → what we built →
 * process → outcome) instead of the thin single-paragraph overview. Every field
 * must be unique and specific to that project — do NOT template across jobs, or
 * Google fingerprints the pages as near-duplicates and won't index them.
 * See `shopify-ecomerce-store-2025` (Flowers A Million) for a worked example.
 */
export interface CaseStudy {
  clientContext?: string   // who the client is, what they sell, their stage
  challenge?: string       // the problem/goal they came with and why
  approach?: string        // concretely what was built (theme, custom sections, flows)
  process?: string         // short: how the work was approached
  outcome?: string         // results — metrics if available, qualitative if not
  techStack?: string[]     // expanded, real tech list (supersedes `tags` on the page)
  screenshots?: { src: string; alt: string }[]  // descriptive alt text per image
}

export interface Job {
  id: string
  title: string
  category: JobCategory
  rating: number
  review?: string
  reviewerNote?: string
  completedDate: string
  description: string
  tags: string[]
  featured?: boolean
  client?: string
  company?: string
  budget?: string
  caseStudy?: CaseStudy
}

// ── Display helpers ─────────────────────────────────────────────────────────
// Used by both the /work index and the /work/[id] detail page so titles and
// copy render consistently. These NEVER affect a job `id` (the public URL).

/** Correct typos that exist in the raw Upwork-sourced display strings. */
export function fixTypos(s: string): string {
  return s
    .replace(/Ecomerce/g, 'Ecommerce')
    .replace(/devolpment/gi, (m) => (m[0] === 'D' ? 'Development' : 'development'))
}

// Titles like "Shopify", "website" or "30 minute consultation" are too generic
// to read as a unique page. When a real client/company name exists, anchor the
// generic title to it so each title is specific.
const GENERIC_TITLE = /^(shopify|web ?site|consultation|30 ?minute consultation|new changes|store|project|task|revision)\b/i

/** Human-readable, de-duplicated title for a job (typos fixed, generics anchored to the client). */
export function jobTitle(job: Job): string {
  const t = fixTypos(job.title).trim()
  const name = job.company || job.client
  if (name && (t.length < 24 || GENERIC_TITLE.test(t)) && !t.toLowerCase().includes(name.toLowerCase())) {
    return `${name} — ${t}`
  }
  return t
}

export const jobs: Job[] = [
  {
    id: 'shopify-store-redesign-2026',
    title: 'Shopify Store Re-Design',
    category: 'Store Redesign',
    rating: 5.0,
    review: 'Great work and always on time and quality is perfect.',
    completedDate: 'Feb 2026',
    description:
      'Complete Shopify store redesign for an established ecommerce brand. Rebuilt the theme from the ground up with a conversion-focused UI, improved product page layouts, sticky cart, and optimised checkout flow. Delivered across a 5-month engagement with ongoing revisions.',
    tags: ['Shopify', 'Liquid', 'Theme Redesign', 'CRO'],
    featured: true,
  },
  {
    id: 'figma-to-shopify-dessert-2026',
    title: 'Figma Mockup to Shopify — Dessert Brand',
    category: 'Design & Figma',
    rating: 5.0,
    review:
      'He followed the Figma mockup exactly as requested and translated the designs into a clean, polished result.',
    completedDate: 'Feb 2026',
    description:
      'Translated detailed Figma designs into a pixel-perfect Shopify theme for a dessert brand. Implemented responsive layouts, animated hero sections, custom product display components, and interactive collection pages that matched the client\'s mockups exactly.',
    tags: ['Figma to Shopify', 'Liquid', 'Custom Theme', 'Responsive'],
    featured: true,
  },
  {
    id: 'langify-to-shopify-native-2026',
    title: 'Shopify Language Migration — Langify to Native Translations',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Apr 2026',
    description:
      'Migrated a multilingual Shopify store from the Langify app to Shopify\'s native translation system. Preserved all translated content across hundreds of products, pages, metafields, and theme strings with zero downtime and no loss of existing translations.',
    tags: ['Langify', 'Shopify Translations', 'Multilingual', 'Migration'],
  },
  {
    id: 'gempages-landing-page-german-2026',
    title: 'High-Converting Landing Page — GemPages + JotForm (German Insurance)',
    category: 'Design & Figma',
    rating: 5.0,
    review: 'He did a good job.',
    completedDate: 'Feb 2026',
    description:
      'Built a high-converting Shopify landing page using GemPages for a German insurance product. Integrated JotForm for lead capture with custom field validation, implemented A/B testing structure, and optimised the page for German-language search intent.',
    tags: ['GemPages', 'Landing Page', 'JotForm', 'Lead Generation'],
  },
  {
    id: 'shopify-sections-bug-fix-fashion-2026',
    title: 'Custom Sections & Bug Fixes — Fashion Retailer',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Had a great experience working with Karam. He developed new custom sections for my store and optimised a few existing ones. The work was clean, efficient, and exactly what I needed.',
    completedDate: 'Mar 2026',
    description:
      'Developed multiple new custom Shopify sections and resolved existing theme bugs for an established fashion retailer. Delivered clean, reusable Liquid code that integrates seamlessly with the existing theme, including a dynamic announcement bar, lookbook section, and size guide modal.',
    tags: ['Custom Sections', 'Bug Fixes', 'Liquid', 'Fashion'],
    featured: true,
  },
  {
    id: 'shopify-plus-checkout-3-features-2025',
    title: 'Shopify Plus Checkout Customization — 3 Features',
    category: 'Shopify Plus',
    rating: 5.0,
    completedDate: 'Dec 2025',
    description:
      'Implemented three custom checkout features using Shopify Plus Checkout Extensibility: an in-checkout upsell widget, a delivery date selector, and a custom order note field with character validation. Used Checkout UI Extensions and Shopify Functions for a native-feeling result.',
    tags: ['Shopify Plus', 'Checkout Extensions', 'Shopify Functions', 'Upsell'],
  },
  {
    id: 'shopify-development-miracle-websoft-2025',
    title: 'Full Shopify Store Development — DTC Brand',
    category: 'Store Development',
    rating: 5.0,
    review:
      'Karam and his team at Miracle Websoft are the absolute best when it comes to Shopify development. I had an incredible experience working with them. They listen very carefully to your requirements.',
    completedDate: 'Sep 2025',
    description:
      'End-to-end Shopify store development for a growing DTC brand. Built custom sections, integrated Rebuy and Klaviyo, implemented conversion-focused product pages with advanced variant displays, and set up automated collection filtering and merchandising rules.',
    tags: ['Shopify', 'Custom Development', 'Rebuy', 'Klaviyo', 'DTC'],
    featured: true,
  },
  {
    id: 'eco-brand-turnkey-shopify-2026',
    title: 'Full Turnkey Shopify Setup — Eco-Friendly Fashion Brand',
    category: 'Store Development',
    rating: 5.0,
    review: 'Excellent work! Great attention to detail.',
    completedDate: 'Jan 2026',
    description:
      'Full turnkey Shopify store setup for an eco-friendly fashion brand. Designed and built a custom theme reflecting the brand\'s sustainable values, with detailed product pages, collection filtering, sustainability badges, size guides, and a conversion-optimised checkout.',
    tags: ['Shopify', 'Fashion', 'Eco Brand', 'Turnkey Setup', 'Custom Theme'],
    featured: true,
  },
  {
    id: 'wix-to-shopify-migration-2024',
    title: 'Wix to Shopify Migration',
    category: 'Migration',
    rating: 5.0,
    review: 'Amazing work. Always a can-do attitude and everything and beyond was achieved!',
    completedDate: 'Jun 2024',
    description:
      'Migrated a complete ecommerce brand from Wix to Shopify. Transferred all products, customer records, and content, then built a new custom Shopify theme matching the brand identity. Set up 301 redirects and meta data migration to preserve organic search rankings.',
    tags: ['Wix to Shopify', 'Migration', 'SEO Preservation', 'Custom Theme'],
  },
  {
    id: 'woocommerce-to-shopify-migration-2024',
    title: 'WooCommerce to Shopify Migration',
    category: 'Migration',
    rating: 5.0,
    review: 'Quick revisions and good communication.',
    completedDate: 'Nov 2024',
    description:
      'Full WooCommerce to Shopify migration for an established ecommerce store. Migrated all products, orders history, customer data, blog posts, and SEO metadata. Implemented URL redirect mapping to protect organic traffic and validated the store post-launch.',
    tags: ['WooCommerce', 'Shopify Migration', 'Data Migration', 'SEO'],
  },
  {
    id: 'wix-brand-to-shopify-2025',
    title: 'Wix Brand to Shopify — Custom Theme Build',
    category: 'Migration',
    rating: 4.9,
    review:
      'I had a fantastic experience working with Karam. He was flexible, creative, and extremely responsive throughout the project. Despite the many changes I introduced along the way, he handled everything professionally.',
    completedDate: 'Jul 2025',
    description:
      'Migrated an actively operated DTC brand from Wix to Shopify, preserving brand identity with a custom-built theme. Handled a large number of mid-project design revisions while maintaining delivery timelines and keeping the client informed at every stage.',
    tags: ['Wix to Shopify', 'Migration', 'DTC', 'Custom Theme'],
  },
  {
    id: 'shopify-website-builder-2024',
    title: 'Shopify Store Build from Scratch',
    category: 'Store Development',
    rating: 5.0,
    review:
      'Karam and his team were fantastic — quick, responsive, and incredibly flexible. We\'re thrilled with the website they created for us.',
    completedDate: 'Sep 2024',
    description:
      'Built a complete Shopify store from scratch including custom theme development, product and collection setup, mobile-optimised design, and a streamlined checkout experience. Delivered rapidly with client-requested revisions incorporated throughout.',
    tags: ['Shopify', 'Store Build', 'Custom Theme', 'Mobile'],
  },
  {
    id: 'tcp-figma-to-shopify-2024',
    title: 'TCP — Figma to Shopify (Long-Term)',
    category: 'Design & Figma',
    rating: 5.0,
    completedDate: 'Sep 2024',
    description:
      'Long-term Figma-to-Shopify project implementing multiple custom page templates, reusable sections, and interactive components from detailed design mockups. Built a modular Liquid component library for a scalable, maintainable theme across a 13-month engagement.',
    tags: ['Figma to Shopify', 'Liquid', 'Custom Sections', 'Long-term'],
  },
  {
    id: 'shopify-liquid-expert-custom-solutions-2026',
    title: 'Shopify Liquid & JS Expert — Custom Store Solutions',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Excellent work, communication, diligence, overall a fantastic Liquid dev and understanding of the gist of things top notch. Warm recommendations.',
    completedDate: 'Jan 2026',
    description:
      'Expert-level Shopify Liquid and JavaScript development for custom storefront solutions on a high-traffic store. Built advanced dynamic sections, custom scripts for product filtering, and complex conditional display logic that replaced third-party app dependencies.',
    tags: ['Shopify Liquid', 'JavaScript', 'Custom Logic', 'Performance'],
  },
  {
    id: 'shopify-esim-api-integration-2025',
    title: 'Custom eSIM Management Page & API Integration',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Apr 2025',
    description:
      'Built a custom eSIM management interface within a Shopify store, integrating with a third-party eSIM provider API. Customers can view, activate, top-up, and manage their eSIM subscriptions directly from their Shopify account area using metafields and customer-facing Liquid templates.',
    tags: ['API Integration', 'Shopify Metafields', 'Custom Page', 'Liquid'],
  },
  {
    id: 'shopify-consultation-flow-otp-2025',
    title: 'Custom Consultation Flow — OTP, Metafields & Liquid',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Karam is patient, knowledgeable and communicates quickly. Understood our needs exactly and worked to find solutions to unique problems. We will most definitely work with him again.',
    completedDate: 'Apr 2025',
    description:
      'Built a custom one-time consultation booking flow in Shopify using OTP SMS verification, Shopify metafields for access control, and Liquid templates for the client-facing portal. Solved unique checkout logic for a service-based product model that had no off-the-shelf solution.',
    tags: ['OTP Verification', 'Metafields', 'Custom Liquid', 'Shopify'],
  },
  {
    id: 'shopify-development-support-2024',
    title: 'Shopify Development Support — 8 Months',
    category: 'Ongoing Support',
    rating: 5.0,
    review:
      'Karam was excellent. Easy to communicate with and very efficient with his Shopify/Development knowledge and work approach. I would highly recommend him for any Shopify-related development work.',
    completedDate: 'Sep 2024',
    description:
      'Eight-month Shopify development support engagement covering theme updates, new section builds, third-party app integrations, bug resolution, and performance improvements. Acted as the client\'s dedicated Shopify developer across multiple sprint cycles.',
    tags: ['Shopify', 'Ongoing Support', 'Theme Maintenance', 'Bug Fixes'],
  },
  {
    id: 'pdp-optimization-template-dev-2024',
    title: 'PDP Optimization & Product Template Development',
    category: 'Speed & CRO',
    rating: 5.0,
    review:
      'Karam has been incredibly responsive and always willing to tackle whatever task we need. He had great suggestions for specific design features to implement for optimization.',
    completedDate: 'Dec 2024',
    description:
      'Optimised product detail pages (PDPs) and built custom product templates for a growing Shopify brand. Implemented sticky add-to-cart, accordion content blocks, trust badges, and dynamic variant image switching to reduce bounce rate and increase add-to-cart conversions.',
    tags: ['PDP', 'Product Page', 'CRO', 'Template Development', 'Conversion'],
  },
  {
    id: 'shopify-site-optimization-2025',
    title: 'Shopify Store Optimization — Speed & Conversions',
    category: 'Speed & CRO',
    rating: 5.0,
    review:
      'Developed some really creative solutions to some very unique requests. Would recommend.',
    completedDate: 'Feb 2025',
    description:
      'Full performance and conversion audit of an existing Shopify store. Removed app bloat, deferred non-critical scripts, optimised images and fonts, and implemented lazy-loading. Also built creative solutions for unique product display requirements that no existing app could handle.',
    tags: ['Speed Optimization', 'CRO', 'Core Web Vitals', 'App Removal'],
  },
  {
    id: 'shopify-ui-ux-optimization-2024',
    title: 'Shopify UI/UX Optimization',
    category: 'Speed & CRO',
    rating: 5.0,
    completedDate: 'Sep 2024',
    description:
      'Conducted a full UI/UX audit across product pages, collection layouts, mobile navigation, and the checkout funnel. Identified and resolved high-friction points, improved mobile usability, and redesigned the product grid for better visual hierarchy and faster buying decisions.',
    tags: ['UI/UX', 'CRO', 'Mobile UX', 'Conversion Rate'],
  },
  {
    id: 'shopify-theme-development-2025',
    title: 'Custom Shopify Theme Development',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Excellent attention to detail and truly listens to your requirements. A very friendly person with great communication skills.',
    completedDate: 'Jan 2025',
    description:
      'Developed a bespoke Shopify theme from a creative brief. Built custom sections including animated hero, product carousels, testimonial slider, lookbook grid, and size guide modals. Full mobile responsiveness with smooth CSS transitions throughout.',
    tags: ['Custom Theme', 'Liquid', 'CSS Animations', 'Responsive Design'],
  },
  {
    id: 'momifa-website-updates-2025',
    title: 'MOMIFA Website Updates & Enhancements',
    category: 'Ongoing Support',
    rating: 5.0,
    review:
      'Karam was excellent and his expertise made the process very easy. I would definitely recommend Karam for upgrading and fixing your website.',
    completedDate: 'Apr 2025',
    description:
      'Ongoing development for the MOMIFA Shopify brand across multiple engagements. Delivered new product page features, homepage section rebuilds, mobile responsiveness fixes, and design-aligned enhancements to support the brand\'s growth.',
    tags: ['Shopify', 'Ongoing Support', 'Design Updates'],
  },
  {
    id: 'adp-shopify-development-2025',
    title: 'ADP — Repeat Shopify Development',
    category: 'Custom Features',
    rating: 5.0,
    review: 'Karam is the best, HIRE HIM!!!! I\'ve worked with him many times and will again!',
    completedDate: 'May 2025',
    description:
      'Ongoing custom Shopify development for a repeat client across multiple contracts. Delivered advanced product logic, custom discount rule implementations, and continuous feature enhancements for an established DTC store — consistently earning rehires.',
    tags: ['Shopify', 'Custom Development', 'Repeat Client', 'Discount Logic'],
  },
  {
    id: 'shopify-blog-customisation-2024',
    title: 'Shopify Blog Customisation',
    category: 'Custom Features',
    rating: 5.0,
    review: 'He was easy to work with, timely and a good communicator. Would recommend.',
    completedDate: 'Nov 2024',
    description:
      'Customised Shopify blog templates with category tag filtering, author profile sections, related posts display, and improved mobile typography. Enhanced content discoverability and reading experience to support the brand\'s growing content marketing strategy.',
    tags: ['Shopify Blog', 'Liquid', 'Content Marketing', 'UX'],
  },
  {
    id: 'shopify-cart-disclaimer-2025',
    title: 'Custom Cart Page Disclaimer — Conditional Logic',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Karam delivered exactly what we were looking to achieve, in a friendly & timely manner. Would recommend.',
    completedDate: 'Jul 2025',
    description:
      'Implemented a conditional cart page disclaimer that displays only when specific product types are in the cart. Built with Shopify Liquid and JavaScript to integrate cleanly with the existing theme, with no impact on page speed or existing cart functionality.',
    tags: ['Shopify Liquid', 'JavaScript', 'Cart Customization', 'Conditional Logic'],
  },
  {
    id: 'website-updates-mobile-fix-2025',
    title: 'Mobile Fixes, Theme Update & Review Integration',
    category: 'Ongoing Support',
    rating: 5.0,
    review:
      'Karam is awesome to work with. Very responsive, gives suggestions, is not pushy and delivers changes in a timely manner. He is our go to for our Shopify site.',
    completedDate: 'Apr 2025',
    description:
      'Resolved mobile loading performance issues, updated Shopify theme styling, improved pricing visibility with size-based display logic, and integrated a reviews app across product listings. Became the client\'s trusted long-term Shopify developer.',
    tags: ['Performance', 'Mobile', 'Shopify Theme', 'Reviews Integration'],
  },
  {
    id: 'web-development-long-retainer-2025',
    title: 'Long-Term Shopify Retainer — 2,942 Hours',
    category: 'Ongoing Support',
    rating: 5.0,
    review:
      'I had the pleasure of working with Karam on a web development project, and I couldn\'t be more satisfied with the results. Karam demonstrated exceptional technical skills, a thorough understanding of the platform, and clear communication throughout.',
    completedDate: 'Jan 2025',
    description:
      'Multi-year Shopify development retainer covering full-stack development, new feature builds, third-party integrations, A/B testing implementations, and performance maintenance for a major ecommerce brand. Over 2,900 hours logged with consistent 5-star output.',
    tags: ['Long-term Retainer', 'Shopify', 'Full-Stack', 'A/B Testing'],
  },
  {
    id: 'shopify-popup-wheel-plus-2024',
    title: 'Custom Spin-to-Win Popup Wheel — Shopify Plus',
    category: 'Custom Features',
    rating: 5.0,
    review:
      'Karam was very helpful. He completed my two tasks successfully and accepted all our feedback.',
    completedDate: 'Jul 2024',
    description:
      'Built a custom spin-to-win gamified popup for a Shopify Plus store from scratch — no app required. Implemented on both mobile and desktop with configurable prize segments, Klaviyo integration for email capture, and a coupon code distribution system.',
    tags: ['Shopify Plus', 'JavaScript', 'Popup', 'Klaviyo', 'Gamification'],
  },
  {
    id: 'shopify-eyewear-store-2025',
    title: 'Shopify Store Build — Eyewear Brand',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Apr 2025',
    description:
      'Built a complete Shopify store for an eyewear product brand. Implemented a custom virtual try-on section, lens customisation variant selector, product bundle builder, and a conversion-focused product page with prescription upload functionality.',
    tags: ['Shopify', 'Store Development', 'Custom Sections', 'Product Configurator'],
  },

  // ─── Jobs added from Upwork history export ────────────────────────────────

  {
    id: 'sparktrendz-store-maintenance-2025',
    title: 'Shopify Store Maintenance & Update Specialist — SparkTrendz',
    category: 'Ongoing Support',
    rating: 5.0,
    completedDate: 'Aug 2025',
    description:
      'Long-term Shopify maintenance retainer for SparkTrendz across an 8-month engagement. Handled rolling theme updates, new feature builds, third-party app configuration, bug resolution and performance checks. Provided reliable ongoing developer support across all areas of the store.',
    tags: ['Shopify', 'Ongoing Support', 'Theme Maintenance', 'Store Updates'],
  },

  {
    id: 'shopify-interface-update-2025',
    title: 'Shopify Interface Update & Customisation',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Jul 2025',
    description:
      'Ongoing Shopify interface update contract across a 7-month engagement. Delivered iterative UI improvements to product pages, collection layouts and homepage sections based on client feedback cycles. Maintained full theme version control throughout.',
    tags: ['Shopify', 'UI Updates', 'Liquid', 'Theme Customisation'],
  },

  {
    id: 'frontend-shopify-finalisation-2025',
    title: 'Shopify Store Frontend Finalisation',
    category: 'Store Development',
    rating: 4.8,
    completedDate: 'Jun 2025',
    description:
      'Took over and finalised the frontend of a partially built Shopify store. Resolved styling inconsistencies, completed responsive layouts for mobile and tablet, polished product and collection pages, and ensured the checkout flow matched the overall brand design before launch.',
    tags: ['Shopify', 'Frontend', 'Responsive Design', 'Store Launch'],
  },

  {
    id: 'keston-builders-shopify-2025',
    title: 'Shopify Website Development — Keston Builders Merchant',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Built a Shopify store for a builders merchant, tailored for trade and retail customers. Implemented B2B-friendly product catalogue structure, trade account gating, bulk quantity selectors, and a clean, professional theme suited to a trade supplier audience.',
    tags: ['Shopify', 'B2B', 'Trade Store', 'Store Development'],
  },

  {
    id: 'flowers-million-ecommerce-2025',
    title: 'Shopify Ecommerce Store — Flowers A Million Enterprises',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Jul 2025',
    description:
      'Full Shopify ecommerce store build for a floral enterprise. Designed and developed a custom theme with product arrangement options, gifting features, delivery date selection, and a streamlined checkout experience optimised for occasion-based gifting purchases.',
    tags: ['Shopify', 'Gifting', 'Delivery Date Picker', 'Custom Theme'],
  },

  {
    id: 'nodiee-theme-development-2024',
    title: 'Shopify Theme Development — Nodiee',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Jan 2025',
    description:
      'Custom Shopify theme development for Nodiee, a DTC brand requiring a fully bespoke storefront. Built from the ground up with custom sections, animated content blocks, mobile-first responsive layouts, and a unique product presentation architecture aligned with the brand identity.',
    tags: ['Shopify', 'Custom Theme', 'DTC', 'Liquid'],
    featured: true,
  },

  {
    id: 'strategic-streamline-website-update-2025',
    title: 'Website Update Contract — Strategic Streamline Solutions',
    category: 'Ongoing Support',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Ongoing website update and enhancement contract for a business solutions company. Delivered design improvements, new landing page sections, CRO-oriented layout changes, and technical fixes across a sustained engagement period.',
    tags: ['Shopify', 'Website Updates', 'CRO', 'Design Improvements'],
  },

  {
    id: 'emboxem-website-redesign-2024',
    title: 'Shopify Website Redesign — Embox\'em',
    category: 'Store Redesign',
    rating: 5.0,
    completedDate: 'Jan 2025',
    description:
      'Full redesign of the Embox\'em Shopify storefront, a packaging and gifting brand. Rebuilt product pages with enhanced unboxing visuals, updated collection architecture, redesigned the homepage hero and featured collections sections, and improved mobile navigation for better gifting discovery.',
    tags: ['Shopify', 'Store Redesign', 'Gifting', 'Mobile UX'],
  },

  {
    id: 'sausalito-collapsible-row-2024',
    title: 'Custom Collapsible Row Feature — Sausalito Accessories',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Built a custom collapsible row feature for Sausalito Accessories\' Shopify product pages. Implemented smooth CSS transitions, accessible keyboard navigation, and seamless integration with the existing theme — replacing a slow third-party app with lean custom Liquid and JavaScript.',
    tags: ['Liquid', 'JavaScript', 'Accordion', 'Custom Feature', 'Performance'],
  },

  {
    id: 'creation-orientale-theme-2024',
    title: 'Shopify Theme Customisation — Création Orientale',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Detailed theme customisation for Création Orientale, a French-language artisan brand. Customised product layouts, collection filtering, and typography to reflect the brand\'s artisan aesthetic. Ensured full compatibility with French locale and right-to-left product attribute display.',
    tags: ['Shopify', 'Theme Customisation', 'French Store', 'Localisation'],
  },

  {
    id: 'geneze-theme-code-fixes-2024',
    title: 'Shopify Theme Code Fixes — Geneze Innovation',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Technical Shopify theme debugging and code fixes for Geneze Innovation inc., a Canadian product company. Identified and resolved Liquid rendering bugs, JavaScript errors, and layout issues that had persisted through a previous development engagement.',
    tags: ['Shopify', 'Bug Fixes', 'Liquid', 'JavaScript', 'Code Review'],
  },

  {
    id: 'candle-ecommerce-store-2024',
    title: 'Candle Ecommerce Website — Shopify Store Build',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Built a full ecommerce Shopify store for a candle brand. Designed a warm, lifestyle-led custom theme with scent collection filtering, gift set bundle builder, subscription options for repeat buyers, and an editorial homepage that showcased the brand\'s aesthetic identity.',
    tags: ['Shopify', 'Store Development', 'Lifestyle Brand', 'Bundle Builder'],
  },

  {
    id: 'cerkled-wordpress-to-shopify-2024',
    title: 'WordPress to Shopify Migration — Cerkled',
    category: 'Migration',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Migrated Cerkled\'s ecommerce operation from WordPress to Shopify. Handled full product catalogue transfer, customer and order history migration, SEO redirect mapping for all URLs, and built a matching Shopify theme to preserve the brand\'s existing visual identity.',
    tags: ['WordPress to Shopify', 'Migration', 'SEO Preservation', 'Data Migration'],
  },

  {
    id: 'rue-broca-shopify-marketplace-2024',
    title: 'Shopify Store Development & Marketplace Expansion — Rue Broca',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Full Shopify store development brief combined with marketplace channel expansion for Rue Broca. Built a custom branded theme, implemented the core product catalogue, and set up multi-channel selling integrations to extend reach into additional online marketplaces.',
    tags: ['Shopify', 'Store Development', 'Marketplace', 'Multi-channel'],
    featured: true,
  },

  {
    id: 'bundle-discount-implementation-2024',
    title: 'Product Bundle Discount Implementation',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Jan 2025',
    description:
      'Implemented a custom product bundle discount system in Shopify without relying on third-party discount apps. Built using Shopify Scripts logic with a cart-level discount display, automatically applying tiered bundle savings when qualifying product combinations are added.',
    tags: ['Shopify', 'Bundle Discounts', 'Scripts', 'Cart Logic'],
  },

  {
    id: 'niche-store-expert-2024',
    title: 'Shopify Expert Development — Niche Store',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'End-to-end Shopify development for a focused niche product store. Built a lean, fast custom theme tailored to a single-category catalogue, with targeted product pages, a streamlined checkout, and conversion-optimised layout decisions based on the niche audience\'s behaviour patterns.',
    tags: ['Shopify', 'Niche Store', 'Custom Theme', 'CRO'],
  },

  {
    id: 'jeet-talati-shopify-dev-2024',
    title: 'Shopify Web Development — Long-Term Contract',
    category: 'Ongoing Support',
    rating: 5.0,
    completedDate: 'Feb 2025',
    description:
      'Extended Shopify development engagement spanning 6 months. Delivered iterative store improvements, new custom sections, third-party integrations, and performance work across multiple sprint cycles. Served as a reliable long-term Shopify developer for an established ecommerce operation.',
    tags: ['Shopify', 'Long-term', 'Ongoing Development', 'Custom Sections'],
  },

  {
    id: 'momifa-website-upgrade-2024',
    title: 'MOMIFA Website Upgrade — Phase 2',
    category: 'Ongoing Support',
    rating: 5.0,
    completedDate: 'Jan 2025',
    description:
      'Second development engagement with the MOMIFA brand, continuing from an earlier contract. Delivered homepage section upgrades, new product page templates, improved mobile responsiveness across key pages, and additional conversion-oriented UI enhancements.',
    tags: ['Shopify', 'Ongoing Support', 'Mobile Responsive', 'Design Updates'],
  },

  {
    id: 'trima-shopify-developer-2024',
    title: 'Shopify Developer — Trima Long-Term Retainer',
    category: 'Ongoing Support',
    rating: 5.0,
    completedDate: 'Jun 2025',
    description:
      'Extended Shopify developer retainer for Trima across a 10-month engagement. Provided full-service development support: theme maintenance, new feature builds, integration management, A/B test implementations, and monthly performance reviews.',
    tags: ['Shopify', 'Retainer', 'Ongoing Support', 'Full-Service'],
    featured: true,
  },

  {
    id: 'guided-navigations-redesign-2024',
    title: 'Website Redesign — Guided Navigations LLC',
    category: 'Store Redesign',
    rating: 5.0,
    completedDate: 'Dec 2024',
    description:
      'Full Shopify website redesign for Guided Navigations LLC, a navigation and wayfinding product business. Rebuilt the homepage, product pages and collection templates with a professional B2B-appropriate aesthetic, improved product specification displays, and a cleaner checkout flow.',
    tags: ['Shopify', 'Store Redesign', 'B2B', 'Product Pages'],
  },

  {
    id: 'summit-shopify-customisation-2024',
    title: 'Shopify Customisation — Summit Group',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development for Summit Group. Delivered targeted UI enhancements, new custom sections with dynamic content rendering, and theme refinements across product and collection pages to improve the customer browsing experience.',
    tags: ['Shopify', 'Custom Sections', 'UI Enhancements', 'Liquid'],
  },

  {
    id: 'senior-dev-cheekzi-2024',
    title: 'Senior Web Developer — Cheekzi Undie Shopify Store',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Feb 2025',
    description:
      'Acted as senior Shopify developer for Cheekzi Undie\'s ecommerce store. Delivered complex product variant logic for a size-inclusive underwear brand, custom fit guide components, mobile-first product pages, and a loyalty-integrated checkout experience.',
    tags: ['Shopify', 'Senior Developer', 'Custom Variants', 'Fit Guide'],
  },

  {
    id: 'indian-market-store-2024',
    title: 'Custom Shopify Store — Indian Market',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Built a custom Shopify online store targeted specifically at the Indian ecommerce market. Configured INR pricing, local payment gateway integrations, region-specific shipping logic, and a product presentation structure suited to Indian consumer browsing preferences and mobile usage patterns.',
    tags: ['Shopify', 'India', 'Localisation', 'Payment Gateways'],
  },

  {
    id: 'tress-wellness-preorder-2024',
    title: 'Pre-Order Landing Page — Tress Wellness',
    category: 'Design & Figma',
    rating: 5.0,
    completedDate: 'Jan 2025',
    description:
      'Designed and built a high-converting pre-order landing page for Tress Wellness, a hair and scalp health brand. Implemented countdown timer, product benefit sections, email capture with Klaviyo integration, and social proof blocks — driving pre-launch sign-ups before the store went live.',
    tags: ['Shopify', 'Landing Page', 'Pre-order', 'Klaviyo', 'Conversion'],
  },

  {
    id: 'klaviyo-theme-tracking-2024',
    title: 'Shopify Theme Code Update for Klaviyo Tracking — CEV Collection',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Updated CEV Collection\'s Shopify theme code to properly implement Klaviyo tracking across all pages. Configured server-side event tracking, fixed missing viewed_product and added_to_cart events, and validated the full Klaviyo event data flow for email automation accuracy.',
    tags: ['Klaviyo', 'Shopify', 'Event Tracking', 'Email Automation'],
  },

  {
    id: 'vcalendar-customisation-2024',
    title: 'Front-End V Calendar Customisation — Tipo Designs',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Implemented a custom V Calendar integration within a Shopify storefront for Tipo Designs, a scheduling and appointment-based service. Customised the calendar component\'s appearance, availability logic, and booking flow to match the brand design system.',
    tags: ['Shopify', 'V Calendar', 'Booking', 'Custom Integration', 'Frontend'],
  },

  {
    id: 'fivefour-store-improvements-2024',
    title: 'Shopify Store Improvements & Style Updates — FiveFour',
    category: 'Store Redesign',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Delivered a series of style and feature improvements to the FiveFour Shopify store. Updated product card designs, improved collection page filtering, refined mobile navigation, and implemented several conversion-focused UI changes across the store\'s core templates.',
    tags: ['Shopify', 'Store Improvements', 'UI/UX', 'Mobile', 'CRO'],
  },

  {
    id: 'rebuy-expert-shopify-2024',
    title: 'Shopify Rebuy Integration Expert',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Jun 2024',
    description:
      'Expert-level Rebuy configuration and custom integration for a Shopify store. Set up data-driven product recommendation widgets, configured cart upsell rules, implemented post-purchase offers, and customised Rebuy\'s frontend components to match the brand\'s visual design.',
    tags: ['Rebuy', 'Shopify', 'Upsell', 'Product Recommendations', 'CRO'],
  },

  {
    id: 'woocommerce-to-shopify-somnium-2024',
    title: 'WooCommerce to Shopify Migration — SOMNIUM',
    category: 'Migration',
    rating: 5.0,
    completedDate: 'Sep 2024',
    description:
      'Full WooCommerce to Shopify migration for SOMNIUM, combined with a bespoke Shopify theme development engagement. Handled data migration, URL redirect mapping, SEO preservation, and custom theme build — transitioning the brand to Shopify with improved performance and a fresh storefront design.',
    tags: ['WooCommerce to Shopify', 'Migration', 'Custom Theme', 'SOMNIUM'],
  },

  {
    id: 'shopify-theme-personalization-2024',
    title: 'Shopify Theme Personalisation',
    category: 'Custom Features',
    rating: 5.0,
    completedDate: 'Sep 2024',
    description:
      'Custom theme personalisation project for a DTC brand requiring specific Liquid modifications. Implemented customer-group-based content personalisation, dynamic section rendering based on tagged customer segments, and a tailored browsing experience without third-party personalisation apps.',
    tags: ['Shopify', 'Personalisation', 'Liquid', 'Customer Segments'],
  },

  {
    id: 'game-plan-wealth-website-2024',
    title: 'Financial Advisor Website — Game Plan Wealth',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Built a professional website for Game Plan Wealth Advisers on Shopify. Designed a trust-focused layout with service pages, team profiles, client testimonial sections, and a lead capture flow. Integrated scheduling functionality and ensured compliance-appropriate content presentation throughout.',
    tags: ['Shopify', 'Financial Services', 'Lead Generation', 'Professional Services'],
  },

  {
    id: 'strataBlue-store-improvements-2024',
    title: 'Shopify Store Improvements — StrataBlue',
    category: 'Speed & CRO',
    rating: 5.0,
    completedDate: 'Nov 2024',
    description:
      'Delivered a comprehensive set of Shopify store improvements for StrataBlue LLC. Addressed performance bottlenecks, redesigned key landing pages, added conversion-oriented elements to product pages, and resolved outstanding UI issues identified in a prior CRO audit.',
    tags: ['Shopify', 'Store Improvements', 'CRO', 'Performance'],
  },

  {
    id: 'travis-hairdressing-website-2024',
    title: 'New Website Build — Travis Hairdressing',
    category: 'Store Development',
    rating: 5.0,
    completedDate: 'Aug 2024',
    description:
      'Built a new Shopify-powered website for Travis Hairdressing, a premium salon brand. Created a service booking-friendly layout, product retail section, team showcase pages, and a mobile-first design optimised for local salon customers discovering the brand via social media.',
    tags: ['Shopify', 'Salon', 'Service Business', 'Mobile-First'],
  },

  // === Jobs from Upwork work history (auto-imported) ===
  {
    id: 'shopify-international-expansion-2025',
    title: 'Shopify International expansion',
    category: 'Custom Features',
    rating: 4.4,
    client: 'Matt Argitis',
    budget: '$200.00 Budget',
    completedDate: 'Jun 2025',
    description:
      'Expanded a Shopify store to international markets, including multi-currency pricing, Shopify Markets configuration, geolocation redirects, and country-specific shipping rules to drive global revenue growth.',
    tags: ['Shopify', 'International'],
  },
  {
    id: 'website-devolpment-2025',
    title: 'website devolpment',
    category: 'Custom Features',
    rating: 3.3,
    client: 'Moe Moe',
    company: 'Ma',
    budget: '$50.00 Budget',
    completedDate: 'Jun 2025',
    description:
      'Shopify website development for Ma covering store setup, custom theme implementation, product catalogue configuration, and launch-ready deployment across desktop and mobile devices.',
    tags: ['Shopify'],
  },
  {
    id: 'finalizing-the-details-for-the-frontend-of-the-sho-2025',
    title: 'Finalizing the details for the frontend of the Shopify store',
    category: 'Custom Features',
    rating: 4.8,
    client: 'Paul Wegman',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Add variant menu drop down menu in cart for free gift promotion',
    completedDate: 'Jun 2025',
    description:
      'Finalised the frontend of a Shopify store, implementing remaining UI elements, polishing transitions, fixing edge-case bugs, and ensuring a pixel-perfect, launch-ready experience.',
    tags: ['Shopify'],
  },
  {
    id: 'add-variant-menu-drop-down-menu-in-cart-for-free-g-2025',
    title: 'Add variant menu drop down menu in cart for free gift promotion',
    category: 'Custom Features',
    rating: 3.9,
    client: 'Vin Dog',
    budget: 'Rate: $25.00/hr, 30 hrs weekly limit Custom Coding Shopify',
    completedDate: 'Feb 2025',
    description:
      'Built a custom Shopify cart feature adding a variant dropdown selector for a free-gift-with-purchase promotion, including logic to auto-add gift products and conditional display based on cart contents.',
    tags: ['Shopify'],
  },
  {
    id: 'custom-coding-shopify-2025',
    title: 'Custom Coding Shopify',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Justin Sportel',
    budget: '$125.00 Budget',
    completedDate: 'Jan 2025',
    description:
      'Custom Shopify coding engagement delivering bespoke Liquid, JavaScript, and CSS solutions for unique storefront requirements not achievable through standard theme settings or apps.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'customization-of-shopify-site-for-the-holiday-sale-2025',
    title: 'Customization of Shopify site for the holiday sales',
    category: 'Custom Features',
    rating: 4.2,
    client: 'Jennifer Griffith',
    budget: 'Rate: $25.00/hr, 6 hrs weekly limit Shopify Ecomerce Store',
    completedDate: 'Jun 2025',
    description:
      'Seasonal Shopify customisations for holiday sales, including promotional banners, countdown timers, gift-product displays, and festive design updates to drive peak-season conversions.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'shopify-ecomerce-store-2025',
    title: 'Flowers A Million: Conversion-Focused Shopify Store Build',
    category: 'Store Development',
    rating: 5.0,
    client: 'Shay Jules',
    company: 'Flowers A Million Enterprises',
    budget: '$325.00 Budget',
    completedDate: 'Jul 2025',
    description:
      'Shopify ecommerce store development for Flowers A Million Enterprises, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Store Setup'],
    caseStudy: {
      clientContext:
        'Flowers A Million Enterprises is an occasion-led florist selling bouquets, arrangements and gifting for birthdays, anniversaries and sympathy. They were moving off an ad-hoc setup onto Shopify and needed a storefront that could actually take orders reliably and feel as considered as the flowers themselves.',
      challenge:
        'The brief was a complete store, not a templated drop-in. Florals are an impulse-and-occasion purchase, so the store had to load fast on mobile (most floral buying happens on a phone), present arrangements attractively, and get a first-time visitor from a product page to a paid order with as little friction as possible. The previous setup gave shoppers no clear path to buy and no mobile-first layout.',
      approach:
        'I built a custom theme rather than relying on an off-the-shelf one: bespoke homepage and collection sections so seasonal and occasion ranges can be merchandised without code, image-forward product pages tuned for arrangements, and a mobile-first layout with a sticky add-to-cart so the buy action is always in reach. The purchase flow was streamlined end to end — clean cart, minimal steps, and a checkout configured for occasion-based gifting orders. Everything was done natively in Liquid and Shopify settings instead of stacking paid apps, which keeps the store fast and cheaper to run long term.',
      process:
        'Worked iteratively across the engagement — built the theme structure first, then refined section by section against the client\'s feedback until each page matched what they wanted, delivering on schedule.',
      outcome:
        'Launched a complete, conversion-optimised storefront the client could run and merchandise themselves. The engagement closed with a 5-star review — "Great work and delivered exactly what was asked." No recurring app fees were introduced, since the custom sections replaced what would otherwise have needed paid apps.',
      techStack: ['Shopify', 'Liquid', 'Custom Theme Development', 'Responsive / Mobile-First CSS', 'Shopify Checkout', 'Conversion-Focused UX'],
      // Add real screenshots when available, e.g.:
      // screenshots: [{ src: '/work/flowers-a-million/product-mobile.jpg', alt: 'Custom flower-bouquet product page on mobile with sticky add-to-cart' }],
    },
  },
  {
    id: 'dailywheels-cro-changes-2025',
    title: 'Dailywheels CRO changes',
    category: 'Speed & CRO',
    rating: 1.0,
    client: 'Alihan Bican',
    budget: 'Rate: $25.00/hr, 32 hrs weekly limit We are investigating a problem with Alihan ’s account. Please do not resume work until the contract is active again. Learn more website redesign and button cannot shown problem',
    completedDate: 'Jan 2025',
    description:
      'Conversion rate optimisation changes, including A/B testing analysis, above-the-fold redesign, trust-signal placement, and checkout flow improvements to lift purchase conversions.',
    tags: ['Shopify', 'CRO', 'Core Web Vitals'],
  },
  {
    id: 'rebuy-review-scarcity-tracker-2025',
    title: 'Rebuy Review & Scarcity Tracker',
    category: 'Custom Features',
    rating: 4.5,
    client: 'Hannah Mendoza',
    budget: 'Rate: $25.00/hr, 15 hrs weekly limit New changes Shopify',
    completedDate: 'Jun 2025',
    description:
      'Implemented Rebuy and scarcity tracking features to increase average order value through personalised product recommendations, real-time inventory alerts, and urgency-driven cart messaging.',
    tags: ['Shopify'],
  },
  {
    id: 'new-changes-shopify-2025',
    title: 'New changes Shopify',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Thomas Van Zelst',
    budget: '$200.00 Budget',
    completedDate: 'Jan 2025',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'customization-shopify-theme-2025',
    title: 'Customization Shopify Theme',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Wael Laabidi',
    company: 'Création Orientale',
    budget: '$100.00 Budget',
    completedDate: 'Jun 2025',
    description:
      'Shopify theme customisation for Création Orientale, adapting the existing theme with bespoke sections, design tweaks, and Liquid modifications to meet the brand\'s unique functional and visual requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'shopify-theme-update-2024',
    title: 'Shopify Theme / Update',
    category: 'Ongoing Support',
    rating: 0.0,
    client: 'Danielle Tillis',
    company: 'PH Agency',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Shopify Theme Code Fixes',
    completedDate: 'Oct 2024',
    description:
      'Shopify theme updates for PH Agency covering new section builds, CSS/Liquid refinements, mobile responsiveness improvements, and alignment with the brand\'s evolving design direction.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'homepage-redesign-shopify-2024',
    title: 'Homepage Redesign Shopify',
    category: 'Store Redesign',
    rating: 0.0,
    client: 'Alexandra Dennis',
    company: 'Little Zen One Inc',
    budget: '$200.00 Budget',
    completedDate: 'Sep 2024',
    description:
      'Complete Shopify store redesign for Little Zen One Inc with a refreshed visual identity, improved information architecture, conversion-optimised layouts, and a mobile-first approach to lift engagement and revenue.',
    tags: ['Shopify', 'Custom Theme', 'Theme Redesign'],
  },
  {
    id: 'dev-job-2024',
    title: 'Dev Job',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Marc Van Der Struik',
    budget: '$350.00 Budget',
    completedDate: 'Oct 2024',
    description:
      'Shopify development contract covering custom feature builds, theme updates, third-party integrations, and bug resolution across an ongoing engagement.',
    tags: ['Shopify'],
  },
  {
    id: 'revision-website-2024',
    title: 'revision website',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Barbara Grove',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Momifa Website Upgrade',
    completedDate: 'Sep 2024',
    description:
      'Shopify website revision and update, refining the existing theme based on client feedback with design adjustments, bug fixes, and new section additions.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'website-product-page-2024',
    title: 'website product page',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jan Camp',
    budget: 'Rate: $25.00/hr, 2 hrs weekly limit Shopify Developer',
    completedDate: 'Sep 2024',
    description:
      'Shopify product page development and optimisation, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify'],
  },
  {
    id: '30-minute-consultation-2024',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Daniela Angeloni',
    company: 'KundaliniYogaVibes',
    budget: '$30.00 Order',
    completedDate: 'Sep 2024',
    description:
      'Shopify consultation for KundaliniYogaVibes providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'developing-to-better-showcase-products-services-2024',
    title: 'Developing to better showcase products & services',
    category: 'Store Development',
    rating: 0.0,
    client: 'Bonnie Nichols',
    company: 'Ryan Nichols',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit 30 minute consultation',
    completedDate: 'Nov 2024',
    description:
      'Shopify store development and optimisation for Ryan Nichols — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: '30-minute-consultation-2024-2',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Bonnie Nichols',
    company: 'Ryan Nichols',
    budget: '$30.00 Order',
    completedDate: 'Aug 2024',
    description:
      'Shopify consultation for Ryan Nichols providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'seccion-suscription-shopify-2024',
    title: 'Seccion Suscription Shopify',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Eduardo Corona',
    budget: '$120.00 Budget',
    completedDate: 'Aug 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'quick-resolution-of-add-to-cart-issue-2024',
    title: 'Quick Resolution of Add to Cart Issue',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Mikkel Guldberg Hansen',
    company: 'Awareness Avenue Jewelry LLC',
    budget: '$75.00 Budget',
    completedDate: 'Sep 2024',
    description:
      'Custom feature implementation for a Shopify store for Awareness Avenue Jewelry LLC — built bespoke Liquid, JavaScript, and CSS logic to deliver the client\'s specific functional requirements with precision.',
    tags: ['Shopify'],
  },
  {
    id: 'full-e-commerce-development-using-a-shopify-templa-2025',
    title: 'Full E-Commerce Development using a Shopify template',
    category: 'Store Development',
    rating: 4.5,
    client: 'Miguel Van Brakle',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Ghamer Website',
    completedDate: 'Feb 2025',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'ghamer-website-2024',
    title: 'Ghamer Website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Esra Alhosani',
    budget: '$400.00 Budget',
    completedDate: 'Oct 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'you-will-get-side-cart-drawer-and-cart-enhancement-2024',
    title: 'You will get Side Cart, Drawer, and Cart Enhancements in your Shopify Store',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Gray Stirbu',
    company: 'Aerate Digital',
    budget: '$200.00 Order',
    completedDate: 'Aug 2024',
    description:
      'Shopify ecommerce store development for Aerate Digital, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-store-customization-2024',
    title: 'Shopify Store Customization',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Eriko Drexler',
    budget: 'Rate: $25.00/hr, 20 hrs weekly limit Cali Error Fixing',
    completedDate: 'Sep 2024',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'cali-error-fixing-2025',
    title: 'Cali Error Fixing',
    category: 'Ongoing Support',
    rating: 3.6,
    client: 'Charlie Jacques',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Design and develop landing page for Shopify store',
    completedDate: 'Jun 2025',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'design-and-develop-landing-page-for-shopify-store-2024',
    title: 'Design and develop landing page for Shopify store',
    category: 'Store Development',
    rating: 5.0,
    client: 'Sam Chi',
    budget: '$400.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Custom Theme', 'Landing Page', 'Store Setup'],
  },
  {
    id: 'create-new-website-2024',
    title: 'Create new website',
    category: 'Store Development',
    rating: 5.0,
    client: 'Travis Hairdressing',
    budget: '$1,200.00 Budget',
    completedDate: 'Aug 2024',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: '3fd-new-theme-integration-2025',
    title: '3FD New Theme & Integration',
    category: 'Custom Features',
    rating: 4.1,
    client: 'Sarkis Fox',
    company: 'Three Foxes',
    budget: '$1,200.00 Budget',
    completedDate: 'Apr 2025',
    description:
      'Custom Shopify feature development for Three Foxes — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'App Integration'],
  },
  {
    id: '30-minute-consultation-2024-3',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'C H',
    budget: '$30.00 Order',
    completedDate: 'Aug 2024',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'product-page-optimisation-help-2024',
    title: 'Product page optimisation help',
    category: 'Speed & CRO',
    rating: 0.0,
    client: 'Charlie Geddes',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Website Shopify',
    completedDate: 'Aug 2024',
    description:
      'Shopify product page development and optimisation, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify', 'Core Web Vitals'],
  },
  {
    id: 'front-end-website-optimization-seo-2025',
    title: 'Front-end website optimization / SEO',
    category: 'Speed & CRO',
    rating: 3.2,
    client: 'Cainan Garcia',
    company: 'Poseidon Capital LLC',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Shopify Checkout Header',
    completedDate: 'May 2025',
    description:
      'Frontend SEO and performance optimisation for Poseidon Capital LLC, improving page load times, structured data implementation, meta tag refinement, and mobile usability to boost organic search rankings.',
    tags: ['Shopify', 'SEO', 'Core Web Vitals'],
  },
  {
    id: 'shopify-checkout-header-2024',
    title: 'Shopify Checkout Header',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Cameron Herring',
    company: 'Spindle',
    budget: '$150.00 Budget',
    completedDate: 'Aug 2024',
    description:
      'Shopify checkout customisation for Spindle, implementing custom upsell blocks, post-purchase flows, discount logic, and brand-aligned checkout styling to maximise revenue per transaction.',
    tags: ['Shopify', 'Checkout'],
  },
  {
    id: 'wordpress-development-3-points-that-needs-to-be-ed-2024',
    title: 'WordPress development, 3 points that needs to be edited',
    category: 'Store Development',
    rating: 5.0,
    client: 'Alen Hiti',
    company: 'SOMNIUM',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Senior Web Developer for Ecommerce Shopify Store',
    completedDate: 'Sep 2024',
    description:
      'Migrated from WooCommerce/WordPress to Shopify for SOMNIUM, transferring all product data, customer records, and content while building a faster, more scalable Shopify storefront.',
    tags: ['Shopify', 'WooCommerce', 'Migration', 'Store Setup'],
  },
  {
    id: 'creation-of-custom-online-store-for-the-indian-mar-2024',
    title: 'Creation of Custom Online Store for the Indian Market.',
    category: 'Store Development',
    rating: 5.0,
    client: 'Ismael Ramirez',
    budget: '$500.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Custom Development', 'Store Setup'],
  },
  {
    id: 'shopify-search-issue-2024',
    title: 'Shopify search issue',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Alexander M',
    company: 'Better Display Cases',
    budget: '$100.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development for Better Display Cases — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'tress-wellness-pre-order-landing-page-creation-2025',
    title: 'Tress Wellness Pre Order Landing Page Creation',
    category: 'Store Development',
    rating: 5.0,
    client: 'Aditi Kashyap',
    company: 'FXswede AB',
    budget: 'Rate: $25.00/hr Shopify Theme Code Update for Klaviyo Tracking',
    completedDate: 'Jan 2025',
    description:
      'High-converting Shopify landing page for FXswede AB built with a focus on lead generation and product promotion, including A/B-testable layouts, trust signals, and CTA optimisation.',
    tags: ['Shopify', 'Landing Page', 'Store Setup'],
  },
  {
    id: 'changing-productpage-adeqo-website-2025',
    title: 'Changing productpage Adeqo website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Thomas Van Zelst',
    budget: '$100.00 Budget',
    completedDate: 'Apr 2025',
    description:
      'Shopify website and product page updates, improving product display, variant selection UX, image gallery, and description layout to increase add-to-cart rates.',
    tags: ['Shopify'],
  },
  {
    id: 'front-end-work-v-calendar-customisation-2024',
    title: 'Front end work - V Calendar customisation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Charlotte Pope',
    company: 'Tipo Designs',
    budget: '$125.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development for Tipo Designs — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'website-help-with-design-2024',
    title: 'Website help with design',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Tara David',
    company: 'Law Offices of Tara David, P.A.',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Shopify Developer for stores design & development',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development for Law Offices of Tara David, P.A. — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'seo-google-indexing-2025',
    title: 'SEO & Google Indexing',
    category: 'Speed & CRO',
    rating: 0.0,
    client: 'Olivia Fowler',
    budget: 'Rate: $25.00/hr, 25 hrs weekly limit We are investigating a problem with Olivia ’s account. Please do not resume work until the contract is active again. Learn more',
    completedDate: 'Jan 2025',
    description:
      'Shopify performance and conversion optimisation — identified bottlenecks, removed unnecessary code, improved Core Web Vitals, and implemented UX changes to lift conversion rates.',
    tags: ['Shopify', 'SEO', 'Core Web Vitals'],
  },
  {
    id: 'shopify-rebuy-expert-needed-2024',
    title: 'Shopify Rebuy Expert Needed',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Keenen Walker',
    company: 'KZW Marketing',
    budget: 'Rate: $25.00/hr, 15 hrs weekly limit Shopify Theme Personalization',
    completedDate: 'Jun 2024',
    description:
      'Implemented Rebuy and scarcity tracking features for KZW Marketing to increase average order value through personalised product recommendations, real-time inventory alerts, and urgency-driven cart messaging.',
    tags: ['Shopify'],
  },
  {
    id: 'create-a-custom-popup-wheel-for-shopify-plus-mobil-2024',
    title: 'Create a Custom Popup Wheel for Shopify Plus (Mobile & Desktop)',
    category: 'Shopify Plus',
    rating: 5.0,
    client: 'shady tawil',
    budget: '$250.00 Budget',
    completedDate: 'Jul 2024',
    description:
      'Shopify Plus development, leveraging advanced platform features including custom checkout, B2B functionality, scripts, and automation to support high-volume ecommerce operations.',
    tags: ['Shopify', 'Shopify Plus', 'Custom Development', 'Mobile'],
  },
  {
    id: 'website-2024',
    title: 'Website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Game Plan Wealth Advisers',
    budget: '$350.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'you-will-get-shopify-store-conversion-rate-optimiz-2024',
    title: 'You will get Shopify store Conversion Rate Optimization Audit',
    category: 'Speed & CRO',
    rating: 5.0,
    client: 'slava vidomanets',
    company: 'StrataBlue LLC',
    budget: '$200.00 Order',
    completedDate: 'May 2024',
    description:
      'Shopify ecommerce store development for StrataBlue LLC, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'CRO', 'Consultation', 'Core Web Vitals'],
  },
  {
    id: 'shopify-designerdeveloper-needed-2024',
    title: 'Shopify designer/developer needed',
    category: 'Store Development',
    rating: 5.0,
    client: 'Gregory Gerla',
    company: 'G3 Consulting',
    budget: '$150.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Shopify development contract for G3 Consulting covering custom feature builds, theme updates, third-party integrations, and bug resolution across an ongoing engagement.',
    tags: ['Shopify', 'Custom Theme', 'Store Setup'],
  },
  {
    id: 'landing-page-with-shopify-2024',
    title: 'landing page with shopify',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ahmad Omar',
    budget: '$250.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'High-converting Shopify landing page built with a focus on lead generation and product promotion, including A/B-testable layouts, trust signals, and CTA optimisation.',
    tags: ['Shopify', 'Landing Page'],
  },
  {
    id: 'shopify-site-designer-needed-to-make-highly-conver-2025',
    title: 'Shopify Site Designer Needed To Make Highly Converting Dropshipping Store',
    category: 'Custom Features',
    rating: 4.7,
    client: 'Shaun Smerling',
    budget: '$200.00 Budget',
    completedDate: 'May 2025',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'shopify-notification-emails-2024',
    title: 'Shopify Notification Emails',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Rafaelle Champagne',
    company: 'Blue Bungalow',
    budget: 'Rate: $25.00/hr, 15 hrs weekly limit Expert for E-Commerce Store Development',
    completedDate: 'Feb 2024',
    description:
      'Custom Shopify feature development for Blue Bungalow — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'expert-for-e-commerce-store-development-2024',
    title: 'Expert for E-Commerce Store Development',
    category: 'Store Development',
    rating: 1.0,
    client: 'Rebeca Aje',
    company: 'Roberta Aje',
    budget: '$1,200.00 Budget',
    completedDate: 'Mar 2024',
    description:
      'Shopify store development and optimisation for Roberta Aje — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-specialist-theme-updates-gem-pages-edit-la-2024',
    title: 'Shopify Specialist - Theme updates, gem pages edit, landing page edits',
    category: 'Ongoing Support',
    rating: 0.0,
    client: 'Rob Reich',
    company: 'Maverix Design',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Shopify Developer forAustralian Shopify Business. Ad hoc tasks and maintenance.',
    completedDate: 'Mar 2024',
    description:
      'Shopify theme updates for Maverix Design covering new section builds, CSS/Liquid refinements, mobile responsiveness improvements, and alignment with the brand\'s evolving design direction.',
    tags: ['Shopify', 'Landing Page', 'Bug Fixes'],
  },
  {
    id: 'variant-collection-display-2024',
    title: 'Variant collection display',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karthika Krishna',
    company: 'Kimaya',
    budget: '$150.00 Budget',
    completedDate: 'Apr 2024',
    description:
      'Custom Shopify feature development for Kimaya — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-store-edits-2024',
    title: 'Shopify Store Edits',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Amanda Tuczinski',
    company: 'Insourced',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit DrinkAid web design (homepage)',
    completedDate: 'Nov 2024',
    description:
      'Shopify ecommerce store development for Insourced, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify'],
  },
  {
    id: 'drinkaid-web-design-homepage-2024',
    title: 'DrinkAid web design (homepage)',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Solomon Poon',
    company: 'DrinkAid',
    budget: '$120.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Redesigned the Shopify store homepage for DrinkAid with a conversion-focused layout, animated hero section, featured collection carousels, social proof blocks, and a mobile-optimised design.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'drinkaid-contract-2nd-page-bonus-2024',
    title: 'DrinkAid Contract 2nd page Bonus',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ryan Foo',
    company: 'DrinkAid',
    budget: '$75.00 Budget',
    completedDate: 'Jan 2024',
    description:
      'Custom Shopify feature development for DrinkAid — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'owner-2024',
    title: 'Owner',
    category: 'Custom Features',
    rating: 1.0,
    client: 'Paula McConathy',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Pricing change for USA customers',
    completedDate: 'Jan 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'pricing-change-for-usa-customers-2024',
    title: 'Pricing change for USA customers',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Hassan Tufail',
    company: 'Shaz International Ltd.',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit',
    completedDate: 'Mar 2024',
    description:
      'Custom Shopify feature development for Shaz International Ltd. — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'skn-md-2024',
    title: 'Skn-MD',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Peter Michael',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Website for gleato milkshake',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'website-for-gleato-milkshake-2024',
    title: 'Website for gleato milkshake',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Gaurav Parekh',
    budget: '$300.00 Budget',
    completedDate: 'Apr 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'custom-code-for-shopify-2024',
    title: 'Custom Code for Shopify',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Maria Marino',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit website',
    completedDate: 'Nov 2024',
    description:
      'Shopify custom payment configuration implementing cash-on-delivery options, conditional payment method logic, and checkout customisations to support regional payment preferences.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'website-2024-2',
    title: 'website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Rasmus Theodor',
    budget: '$200.00 Budget',
    completedDate: 'Apr 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: '30-minute-consultation-2023',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Mike Zak',
    budget: '$20.00 Order',
    completedDate: 'Dec 2023',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'website-creation-and-design-2024',
    title: 'Website Creation and Design',
    category: 'Store Development',
    rating: 4.0,
    client: 'Raman Singh',
    budget: '$800.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Custom Theme', 'Store Setup'],
  },
  {
    id: '30-minute-consultation-2023-2',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Srijan Gupta',
    company: 'Srijan Exports',
    budget: '$20.00 Order',
    completedDate: 'Dec 2023',
    description:
      'Shopify consultation for Srijan Exports providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'pixel-linking-2023',
    title: 'Pixel linking',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ahmad Omar',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit',
    completedDate: 'Dec 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'customize-focal-theme-2023',
    title: 'Customize Focal theme',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Chanie Brod',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Homepage changes - Shopify',
    completedDate: 'Dec 2023',
    description:
      'Built a custom Shopify theme from a creative brief, implementing bespoke sections, animations, and interactive components that align precisely with the brand\'s visual identity and conversion goals.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'homepage-changes-shopify-2024',
    title: 'Homepage changes - Shopify',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Thomas Domingue',
    budget: '$75.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Redesigned the Shopify store homepage with a conversion-focused layout, animated hero section, featured collection carousels, social proof blocks, and a mobile-optimised design.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-app-that-facilitates-the-delivery-of-digit-2024',
    title: 'Shopify app that facilitates the delivery of digital JPG or PDF files to buyers',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Godfrey SO',
    company: 'gso consulting',
    budget: '$450.00 Budget',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development for gso consulting — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'App Integration'],
  },
  {
    id: 'ongoing-development-support-2025',
    title: 'Ongoing Development Support',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'David Beakey',
    company: 'Untold Creative',
    budget: 'Rate: $25.00/hr Custom changes on Shopify website',
    completedDate: 'Mar 2025',
    description:
      'Ongoing Shopify development and support for Untold Creative — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'design-for-website-2024',
    title: 'Design for Website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Lisa Larry',
    company: 'NAKTO',
    budget: '$1,500.00 Budget',
    completedDate: 'Feb 2024',
    description:
      'Custom Shopify feature development for NAKTO — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'ehmesa-website-2024',
    title: 'Ehmesa website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Esra Alhosani',
    budget: '$600.00 Budget',
    completedDate: 'Mar 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'update-product-page-on-website-2024',
    title: 'Update product page on website',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Luke Burton',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit 30 minute consultation',
    completedDate: 'Mar 2024',
    description:
      'Shopify product page development and optimisation, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: '30-minute-consultation-2023-3',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Godfrey SO',
    company: 'gso consulting',
    budget: '$20.00 Order',
    completedDate: 'Nov 2023',
    description:
      'Shopify consultation for gso consulting providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'optimizing-shopify-store-and-adding-converting-lan-2023',
    title: 'Optimizing Shopify store and adding converting landing pages.',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ronke Dawotola',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Fix product page - 1 single product first, then the rest after',
    completedDate: 'Dec 2023',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Landing Page'],
  },
  {
    id: 'fix-product-page-1-single-product-first-then-the-r-2023',
    title: 'Fix product page - 1 single product first, then the rest after',
    category: 'Ongoing Support',
    rating: 0.0,
    client: 'Alexa Stathakis',
    company: 'Tea Industries',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Shopify Build',
    completedDate: 'Nov 2023',
    description:
      'Shopify product page development and optimisation for Tea Industries, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-build-2023',
    title: 'Shopify Build',
    category: 'Store Development',
    rating: 5.0,
    client: 'David Beakey',
    company: 'CSM',
    budget: '$1,000.00 Budget',
    completedDate: 'Nov 2023',
    description:
      'Shopify store development and optimisation for CSM — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-site-with-1500-products-2024',
    title: 'Shopify Site with 1500 products',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Nick Abel',
    budget: '$1,000.00 Budget',
    completedDate: 'Mar 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'drinkaid-contract-2nd-page-2023',
    title: 'DrinkAid Contract 2nd page',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Ryan Foo',
    company: 'DrinkAid',
    budget: '$350.00 Budget',
    completedDate: 'Oct 2023',
    description:
      'Custom Shopify feature development for DrinkAid — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'web-portal-edits-2024',
    title: 'Web Portal Edits',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jay G',
    budget: 'Rate: $20.00/hr, 15 hrs weekly limit DrinkAid Website Revamp 1 Page',
    completedDate: 'Nov 2024',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'drinkaid-website-revamp-1-page-2023',
    title: 'DrinkAid Website Revamp 1 Page',
    category: 'Store Redesign',
    rating: 5.0,
    client: 'Ryan Foo',
    company: 'DrinkAid',
    budget: '$350.00 Budget',
    completedDate: 'Oct 2023',
    description:
      'Shopify store redesign for DrinkAid — rebuilt the visual design, improved navigation structure, and implemented conversion-focused layouts across product, collection, and homepage templates.',
    tags: ['Shopify', 'Theme Redesign'],
  },
  {
    id: 'shopify-design-developer-needed-skilled-with-desig-2023',
    title: 'Shopify Design + Developer Needed - Skilled with Design, Landing Page Creation, Theme Editing +',
    category: 'Store Development',
    rating: 5.0,
    client: 'Jeffrey Serini',
    company: 'Paragon Fitwear',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit We are investigating a problem with Jeffrey ’s account. Please do not resume work until the contract is active again. Learn more ECommerce WP to Shopify 2.0 Migration',
    completedDate: 'Sep 2023',
    description:
      'Shopify development contract for Paragon Fitwear covering custom feature builds, theme updates, third-party integrations, and bug resolution across an ongoing engagement.',
    tags: ['Shopify', 'Custom Theme', 'Landing Page', 'Store Setup'],
  },
  {
    id: 'ecommerce-wp-to-shopify-20-migration-2023',
    title: 'ECommerce WP to Shopify 2.0 Migration',
    category: 'Migration',
    rating: 5.0,
    client: 'Tadhg Guiry',
    company: 'Evolvemarketing',
    budget: '$1,000.00 Budget',
    completedDate: 'Nov 2023',
    description:
      'Platform migration to Shopify for Evolvemarketing — transferred all products, collections, customer data, and page content while rebuilding the storefront with a modern, conversion-optimised theme.',
    tags: ['Shopify', 'Migration'],
  },
  {
    id: 'customize-shopify-checkout-2024',
    title: 'Customize Shopify Checkout',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Alexander Schefstoss',
    company: 'Schefstoss',
    budget: '$600.00 Budget',
    completedDate: 'Mar 2024',
    description:
      'Shopify checkout customisation for Schefstoss, implementing custom upsell blocks, post-purchase flows, discount logic, and brand-aligned checkout styling to maximise revenue per transaction.',
    tags: ['Shopify', 'Checkout', 'Custom Development'],
  },
  {
    id: 'development-work-on-shopify-site-on-going-hourly-2024',
    title: 'Development work on Shopify Site - On-going hourly',
    category: 'Store Development',
    rating: 5.0,
    client: 'Adriana McLane',
    company: 'the a.m. insight, LLC',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Edit code for shopify checkout cart page',
    completedDate: 'Dec 2024',
    description:
      'Shopify store development and optimisation for the a.m. insight, LLC — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'edit-code-for-shopify-checkout-cart-page-2023',
    title: 'Edit code for shopify checkout cart page',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Carly Rubio',
    company: 'Salvage',
    budget: '$50.00 Budget',
    completedDate: 'Nov 2023',
    description:
      'Shopify checkout customisation for Salvage, implementing custom upsell blocks, post-purchase flows, discount logic, and brand-aligned checkout styling to maximise revenue per transaction.',
    tags: ['Shopify', 'Checkout'],
  },
  {
    id: 'building-a-small-scale-shop-in-shopify-2023',
    title: 'Building a small scale shop in shopify',
    category: 'Store Development',
    rating: 5.0,
    client: 'MacHtag Et Ilies',
    company: 'ED GLOBAL TRADE',
    budget: '$400.00 Budget',
    completedDate: 'Nov 2023',
    description:
      'Shopify store development and optimisation for ED GLOBAL TRADE — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-section-development-and-bug-fixes-2024',
    title: 'Shopify Section Development and Bug Fixes',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Charles Instone',
    budget: '$625.00 Budget',
    completedDate: 'Mar 2024',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-hydrogen-build-2023',
    title: 'Shopify Hydrogen Build',
    category: 'Store Development',
    rating: 1.0,
    client: 'Nicholas Z',
    company: 'Stage1',
    budget: '$1,200.00 Budget',
    completedDate: 'Nov 2023',
    description:
      'Shopify Hydrogen headless development for Stage1, building a React-based custom storefront with Shopify\'s GraphQL Storefront API for superior performance and complete design freedom.',
    tags: ['Shopify', 'Hydrogen', 'Store Setup'],
  },
  {
    id: 'work-on-webpage-development-2023',
    title: 'Work on webpage development',
    category: 'Store Development',
    rating: 5.0,
    client: 'Tadas Bieliauskas',
    company: 'Hempo',
    budget: '$300.00 Budget',
    completedDate: 'Jul 2023',
    description:
      'Shopify store development and optimisation for Hempo — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-page-design-and-advertising-website-pages-2023',
    title: 'Shopify Page Design and Advertising (Website pages are already running)',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Dr Duncan Houston',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit We are investigating a problem with Dr ’s account. Please do not resume work until the contract is active again. Learn more Shopify Website Development',
    completedDate: 'Jun 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'implementation-of-cro-based-design-from-figma-for-2023',
    title: 'Implementation of cro based design from Figma for Shopify shop',
    category: 'Design & Figma',
    rating: 5.0,
    client: 'Reda Berrada',
    budget: 'Rate: $20.00/hr, 40 hrs weekly limit Onpage and Offpage SEO for Shopify Stpre Manpreet Kaur - Miracle Websoft',
    completedDate: 'Jul 2023',
    description:
      'Translated Figma designs into a pixel-perfect Shopify theme, implementing all components, animations, and responsive breakpoints to exactly match the client\'s approved mockups.',
    tags: ['Shopify', 'Figma', 'Custom Theme', 'CRO'],
  },
  {
    id: 'build-a-hamper-custom-page-2023',
    title: 'Build A Hamper Custom Page',
    category: 'Store Development',
    rating: 5.0,
    client: 'Taleisha Barker',
    company: 'FiveFour',
    budget: '$625.00 Budget',
    completedDate: 'Oct 2023',
    description:
      'Shopify store development and optimisation for FiveFour — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Custom Development', 'Store Setup'],
  },
  {
    id: 'display-variants-as-individual-products-on-shopify-2023',
    title: 'Display Variants as Individual Products on Shopify Collection Pages',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karthika Krishna',
    company: 'Kimaya',
    budget: '$100.00 Budget',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development for Kimaya — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'mobile-and-desktop-landing-page-for-shopify-using-2023',
    title: 'Mobile and Desktop Landing Page for Shopify Using Gem Pages',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Jim Courtwood',
    company: 'Time and Attendance Consultant',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Adjust Shopify header navigation to have primary and secondary menus',
    completedDate: 'Jun 2023',
    description:
      'High-converting Shopify landing page for Time and Attendance Consultant built with a focus on lead generation and product promotion, including A/B-testable layouts, trust signals, and CTA optimisation.',
    tags: ['Shopify', 'Landing Page', 'Mobile'],
  },
  {
    id: 'adjust-shopify-header-navigation-to-have-primary-a-2023',
    title: 'Adjust Shopify header navigation to have primary and secondary menus',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karen Burroughs',
    company: 'Bayside Web Design',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit on-page and off-page SEO for Shopify Store Manpreet Kaur - Miracle Websoft',
    completedDate: 'Apr 2023',
    description:
      'Custom Shopify feature development for Bayside Web Design — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'recreate-webpage-on-another-shopify-account-2023',
    title: 'Recreate webpage on another Shopify account',
    category: 'Store Development',
    rating: 5.0,
    client: 'Tadas Bieliauskas',
    company: 'Hempo',
    budget: 'Rate: $25.00/hr, 30 hrs weekly limit Looking for Shopify Developer for Today and for Longterm',
    completedDate: 'May 2023',
    description:
      'Shopify store development and optimisation for Hempo — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'update-our-shopify-theme-2023',
    title: 'Update our Shopify Theme',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Talissa Amar',
    company: 'Spirit Gallery',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Develop Shopify Section',
    completedDate: 'Nov 2023',
    description:
      'Shopify theme updates for Spirit Gallery covering new section builds, CSS/Liquid refinements, mobile responsiveness improvements, and alignment with the brand\'s evolving design direction.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'develop-shopify-section-2023',
    title: 'Develop Shopify Section',
    category: 'Store Development',
    rating: 5.0,
    client: 'Nic Brown',
    company: 'Lull',
    budget: 'Rate: $35.00/hr, 40 hrs weekly limit On-page and Off-page SEO Manpreet Kaur - Miracle Websoft',
    completedDate: 'Apr 2023',
    description:
      'Shopify store development and optimisation for Lull — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: '30-minute-consultation-2023-4',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Betsy Czark',
    budget: '$50.00 Order',
    completedDate: 'Mar 2023',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: '30-minute-consultation-2023-5',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Betsy Czark',
    budget: '$50.00 Order',
    completedDate: 'Apr 2023',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'sawtelle-sake-website-2023',
    title: 'Sawtelle Sake Website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Maxwell Leer',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Website development Shopify',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'support-the-delivery-and-launch-of-a-shopify-site-2023',
    title: 'Support the delivery and launch of a shopify site',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Sonja Jayne',
    company: 'Sonja Kama',
    budget: '$300.00 Budget',
    completedDate: 'Jun 2023',
    description:
      'Ongoing Shopify development and support for Sonja Kama — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'need-some-assistance-with-updated-my-shopify-store-2023',
    title: 'Need some assistance with updated my Shopify store',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Sam Fawahl',
    company: 'SF1',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Langly Site Co./Com.AU./Co.Uk',
    completedDate: 'Jul 2023',
    description:
      'Ongoing Shopify development and support for SF1 — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'langly-site-cocomaucouk-2025',
    title: 'Langly Site Co./Com.AU./Co.Uk',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Simon Apperley',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Wordpress site updates and maintenance',
    completedDate: 'Mar 2025',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'wordpress-site-updates-and-maintenance-2023',
    title: 'Wordpress site updates and maintenance',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Khawar Ahmed',
    company: 'Cognission Corporation',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Looking for Shopify expert',
    completedDate: 'Jun 2023',
    description:
      'Migrated from WooCommerce/WordPress to Shopify for Cognission Corporation, transferring all product data, customer records, and content while building a faster, more scalable Shopify storefront.',
    tags: ['Shopify', 'WooCommerce', 'Migration', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'looking-for-shopify-expert-2023',
    title: 'Looking for Shopify expert',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Dark Hampton',
    budget: 'Rate: $25.00/hr, 30 hrs weekly limit Add Table to Product Page on Shopify website',
    completedDate: 'Aug 2023',
    description:
      'Expert Shopify development engagement, delivering advanced custom solutions across theme development, app integrations, checkout customisation, and performance optimisation.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-template-updates-2023',
    title: 'Shopify Template Updates',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Michael Shuster',
    company: 'Rozen Sosnovsky',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Shopify growth planning',
    completedDate: 'Jun 2023',
    description:
      'Ongoing Shopify development and support for Rozen Sosnovsky — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-growth-planning-2023',
    title: 'Shopify growth planning',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Ryan Mylandla',
    budget: 'Rate: $20.00/hr, 20 hrs weekly limit We are investigating a problem with Ryan ’s account. Please do not resume work until the contract is active again. Learn more Simple Shopify page for premium alpaca fashion',
    completedDate: 'Jul 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'simple-shopify-page-for-premium-alpaca-fashion-2023',
    title: 'Simple Shopify page for premium alpaca fashion',
    category: 'Store Development',
    rating: 5.0,
    client: 'Sven Perlberg',
    company: 'Sven P.',
    budget: '$400.00 Budget',
    completedDate: 'Feb 2023',
    description:
      'Shopify store development and optimisation for Sven P. — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-store-cash-on-delivery-2023',
    title: 'Shopify store cash on delivery',
    category: 'Custom Features',
    rating: 1.0,
    client: 'Huong Dang',
    budget: '$800.00 Budget',
    completedDate: 'Jun 2023',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-specialist-for-an-ongoing-job-to-guide-me-2023',
    title: 'Shopify specialist for an ongoing job to guide me and run all things on my shopify platform',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Kellie Johns',
    company: 'The Cloud Empire PTY LTD',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Shopify',
    completedDate: 'Jul 2023',
    description:
      'Ongoing Shopify development and support for The Cloud Empire PTY LTD — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'shopify-2023',
    title: 'Shopify',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jo Musco',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Website design and development Manpreet Kaur - Miracle Websoft',
    completedDate: 'Nov 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-build-measurement-template-for-ecommerce-m-2023',
    title: 'Shopify: build measurement template for ecommerce (made to measure clothing)',
    category: 'Store Development',
    rating: 0.0,
    client: 'Jakob Martin',
    budget: '$2,000.00 Budget',
    completedDate: 'Jun 2023',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-stores-2023',
    title: 'Shopify stores',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Lucas Tran',
    budget: '$400.00 Budget',
    completedDate: 'Jun 2023',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify'],
  },
  {
    id: '30-minute-consultation-2023-6',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ecaterina Dmitrenco',
    budget: '$50.00 Order',
    completedDate: 'Feb 2023',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'shopify-site-2023',
    title: 'Shopify Site',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Brendan Flanagan',
    company: 'Optimum Internet Solutions',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit We are investigating a problem with Brendan ’s account. Please do not resume work until the contract is active again. Learn more Shopify web development',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development for Optimum Internet Solutions — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'hero-grader-website-2023',
    title: 'Hero Grader Website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jeff Jenkins',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Shopify Website Development',
    completedDate: 'Jun 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'ad-hoc-web-dev-2023',
    title: 'Ad Hoc Web Dev',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Dion Lovrecich',
    company: 'Extra Strength Marketing',
    budget: 'Rate: $25.00/hr, 15 hrs weekly limit Shopify Store - Wholesale Section needs optimization',
    completedDate: 'May 2023',
    description:
      'Shopify website development for Extra Strength Marketing covering store setup, custom theme implementation, product catalogue configuration, and launch-ready deployment across desktop and mobile devices.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-store-wholesale-section-needs-optimization-2022',
    title: 'Shopify Store - Wholesale Section needs optimization',
    category: 'Speed & CRO',
    rating: 5.0,
    client: 'Karen Burroughs',
    company: 'Bayside Web Design',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit',
    completedDate: 'Dec 2022',
    description:
      'Shopify ecommerce store development for Bayside Web Design, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'B2B', 'Core Web Vitals'],
  },
  {
    id: 'maintenance-fees-hoop-api-2025',
    title: 'Maintenance fees - hoop API',
    category: 'Ongoing Support',
    rating: 4.9,
    client: 'Patrick Whitaker',
    company: 'Hoop Modular (Pty) Ltd',
    budget: 'Rate: $20.00/hr, 15 hrs weekly limit Header fix and breadcrumb',
    completedDate: 'Jul 2025',
    description:
      'Ongoing Shopify development and support for Hoop Modular (Pty) Ltd — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'header-fix-and-breadcrumb-2022',
    title: 'Header fix and breadcrumb',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Patrick Whitaker',
    company: 'Hoop Modular (Pty) Ltd',
    budget: '$40.00 Budget',
    completedDate: 'Dec 2022',
    description:
      'Ongoing Shopify development and support for Hoop Modular (Pty) Ltd — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-site-start-up-with-some-edits-2022',
    title: 'Shopify site start up with some edits',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Lynn Groden',
    budget: 'Rate: $25.00/hr, 6 hrs weekly limit Shopify home page and menu bar with integrating previously developed category and product pages',
    completedDate: 'Nov 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-home-page-and-menu-bar-with-integrating-pr-2023',
    title: 'Shopify home page and menu bar with integrating previously developed category and product pages',
    category: 'Store Development',
    rating: 5.0,
    client: 'Moe Saladeen',
    company: 'Cloud9linens LLC',
    budget: '$420.00 Budget',
    completedDate: 'Oct 2023',
    description:
      'Shopify product page development and optimisation for Cloud9linens LLC, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify', 'App Integration', 'Store Setup'],
  },
  {
    id: 'shopify-20-theme-updates-and-styling-2023',
    title: 'Shopify 2.0 theme updates and styling',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Ryan Mitchell',
    company: 'Bando Digital',
    budget: 'Rate: $25.00/hr, 30 hrs weekly limit "Add to Cart" & "Buy it now" color changes',
    completedDate: 'May 2023',
    description:
      'Shopify theme updates for Bando Digital covering new section builds, CSS/Liquid refinements, mobile responsiveness improvements, and alignment with the brand\'s evolving design direction.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'add-to-cart-buy-it-now-color-changes-2022',
    title: '"Add to Cart" & "Buy it now" color changes',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Jeremy Lurier',
    company: 'New Dimension Brands LLC',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Shopify',
    completedDate: 'Oct 2022',
    description:
      'Custom feature implementation for a Shopify store for New Dimension Brands LLC — built bespoke Liquid, JavaScript, and CSS logic to deliver the client\'s specific functional requirements with precision.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-2022',
    title: 'Shopify',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Afshin Golanbar',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Website Redesign',
    completedDate: 'Nov 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'build-shopify-store-2022',
    title: 'Build shopify store',
    category: 'Store Development',
    rating: 0.0,
    client: 'Aiman M',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit',
    completedDate: 'Oct 2022',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'online-form-customization-2022',
    title: 'Online form customization',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Patrick Whitaker',
    company: 'Hoop Modular (Pty) Ltd',
    budget: '$100.00 Budget',
    completedDate: 'Nov 2022',
    description:
      'Custom Shopify feature development for Hoop Modular (Pty) Ltd — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'shopify-scripts-as-needed-2023',
    title: 'Shopify Scripts - as needed',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Mackie Marwah',
    company: 'MBO Group.',
    budget: '$50.00 Budget',
    completedDate: 'Feb 2023',
    description:
      'Custom Shopify feature development for MBO Group. — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-product-filter-is-not-working-2022',
    title: 'Shopify Product Filter is not working',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karen Burroughs',
    company: 'Bayside Web Design',
    budget: 'Rate: $25.00/hr, 7 hrs weekly limit 30 minute consultation',
    completedDate: 'Sep 2022',
    description:
      'Custom Shopify feature development for Bayside Web Design — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: '30-minute-consultation-2022',
    title: '30 minute consultation',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Sara Trujillo',
    budget: '$25.00 Order',
    completedDate: 'Sep 2022',
    description:
      'Shopify consultation providing expert review and strategic recommendations across theme structure, performance, conversion funnel, and third-party app stack.',
    tags: ['Shopify', 'Consultation'],
  },
  {
    id: 'shopify-specialist-with-knowledge-in-booking-payme-2023',
    title: 'Shopify specialist, with knowledge in booking payment and shipping functionality.',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Janet Castaneda',
    budget: 'Rate: $25.00/hr, 24 hrs weekly limit Updates to website',
    completedDate: 'Feb 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'updates-to-website-2023',
    title: 'Updates to website',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Dark Hampton',
    budget: 'Rate: $20.00/hr, 30 hrs weekly limit Shopify front & back end development',
    completedDate: 'Feb 2023',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-front-back-end-development-2023',
    title: 'Shopify front & back end development',
    category: 'Store Development',
    rating: 5.0,
    client: 'Alex Bodini',
    company: 'Your Film Poster',
    budget: 'Rate: $25.00/hr, 30 hrs weekly limit Website transfer/ copy',
    completedDate: 'Jun 2023',
    description:
      'Shopify store development and optimisation for Your Film Poster — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'website-transfer-copy-2023',
    title: 'Website transfer/ copy',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Mark Superior',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit',
    completedDate: 'Jun 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'product-availability-based-on-url-parameter-shopif-2022',
    title: 'Product availability based on URL parameter shopify',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Vik S',
    company: 'Flower me softly',
    budget: '$100.00 Budget',
    completedDate: 'Oct 2022',
    description:
      'Custom Shopify feature development for Flower me softly — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'seeking-a-strong-user-experience-based-digital-e-c-2023',
    title: 'Seeking A Strong User Experience-Based Digital E-Commerce Site Developer',
    category: 'Store Development',
    rating: 0.0,
    client: 'Hal Fraser',
    budget: 'Rate: $25.00/hr, 3 hrs weekly limit Shopify Custom Code',
    completedDate: 'Feb 2023',
    description:
      'Shopify development contract covering custom feature builds, theme updates, third-party integrations, and bug resolution across an ongoing engagement.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-design-project-2025',
    title: 'Shopify Design Project',
    category: 'Custom Features',
    rating: 1.4,
    client: 'Ana Cahill',
    budget: 'Rate: $25.00/hr We are investigating a problem with Ana ’s account. Please do not resume work until the contract is active again. Learn more Shopify Add to Cart Button for External Site via Shopify API',
    completedDate: 'Jan 2025',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'shopify-add-to-cart-button-for-external-site-via-s-2022',
    title: 'Shopify Add to Cart Button for External Site via Shopify API',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Jason Herring',
    company: 'Private',
    budget: '$200.00 Budget',
    completedDate: 'Aug 2022',
    description:
      'Custom feature implementation for a Shopify store for Private — built bespoke Liquid, JavaScript, and CSS logic to deliver the client\'s specific functional requirements with precision.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-design-and-optimization-2022',
    title: 'Shopify Design and Optimization',
    category: 'Speed & CRO',
    rating: 0.0,
    client: 'Zachary Green',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit Error thank you page',
    completedDate: 'Aug 2022',
    description:
      'Shopify performance and conversion optimisation — identified bottlenecks, removed unnecessary code, improved Core Web Vitals, and implemented UX changes to lift conversion rates.',
    tags: ['Shopify', 'Custom Theme', 'Core Web Vitals'],
  },
  {
    id: 'error-thank-you-page-2023',
    title: 'Error thank you page',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Joren Biesen',
    company: 'Joren B',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Creating Custom Liquids',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development for Joren B — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'creating-custom-liquids-2022',
    title: 'Creating Custom Liquids',
    category: 'Store Development',
    rating: 5.0,
    client: 'Sinem Alak',
    company: '3S Trading',
    budget: 'Rate: $25.00/hr, 10 hrs weekly limit',
    completedDate: 'Nov 2022',
    description:
      'Shopify store development and optimisation for 3S Trading — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Liquid', 'Custom Development', 'Store Setup'],
  },
  {
    id: 'website-design-2022',
    title: 'website design',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Moe Moe',
    company: 'Ma',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Website Development and Domain Help',
    completedDate: 'Oct 2022',
    description:
      'Custom Shopify feature development for Ma — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'enhance-home-page-template-2022',
    title: 'Enhance Home Page Template',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$150.00 Budget',
    completedDate: 'Aug 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'change-order-to-enloe-sales-lander-2022',
    title: 'Change Order to Enloe Sales Lander',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$200.00 Budget',
    completedDate: 'Oct 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'build-email-templates-for-our-merchant-onboarding-2022',
    title: 'Build email templates for our merchant onboarding process!',
    category: 'Store Development',
    rating: 5.0,
    client: 'Alexandros Fokianos',
    company: 'Scalapay',
    budget: 'Rate: $25.00/hr, 20 hrs weekly limit Shopify customization',
    completedDate: 'Oct 2022',
    description:
      'Shopify store development and optimisation for Scalapay — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'seo-for-my-shopify-sites-2023',
    title: 'SEO for my shopify sites.',
    category: 'Speed & CRO',
    rating: 5.0,
    client: 'evan waldman',
    company: 'Evan Waldman',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit',
    completedDate: 'Jun 2023',
    description:
      'Shopify performance and conversion optimisation for Evan Waldman — identified bottlenecks, removed unnecessary code, improved Core Web Vitals, and implemented UX changes to lift conversion rates.',
    tags: ['Shopify', 'SEO', 'Core Web Vitals'],
  },
  {
    id: 'shopify-wine-store-seo-work-onepage-and-offpage-2022',
    title: 'Shopify Wine Store SEO work Onepage and Offpage',
    category: 'Speed & CRO',
    rating: 5.0,
    client: 'Chiaya Rawlins',
    budget: 'Rate: $12.00/hr, 40 hrs weekly limit Display Variants as Individual Products on Shopify Collection Pages',
    completedDate: 'Oct 2022',
    description:
      'Shopify ecommerce store development, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'SEO', 'Core Web Vitals'],
  },
  {
    id: 'display-variants-as-individual-products-on-shopify-2022',
    title: 'Display Variants as Individual Products on Shopify Collection Pages',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karthika Krishna',
    company: 'Kimaya',
    budget: '$100.00 Budget',
    completedDate: 'Jul 2022',
    description:
      'Custom Shopify feature development for Kimaya — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'enhance-nathan-james-pdp-template-2022',
    title: 'Enhance Nathan James PDP Template',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$500.00 Budget',
    completedDate: 'Oct 2022',
    description:
      'Shopify product page development and optimisation, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-theme-upgrades-backend-work-2022',
    title: 'Shopify Theme Upgrades + Backend work',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Zishan Jaffer',
    budget: 'Rate: $25.00/hr, 25 hrs weekly limit Shopify Website Needed for New Brand - Logo & Colors Already Created',
    completedDate: 'Oct 2022',
    description:
      'Shopify website upgrade — rebuilt key sections, improved mobile responsiveness, added new features, and refreshed the design to support continued brand growth.',
    tags: ['Shopify'],
  },
  {
    id: 'add-button-to-shopify-homepage-2022',
    title: 'Add button to shopify homepage',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Peter Ngo',
    company: 'PN Industries',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit',
    completedDate: 'Aug 2022',
    description:
      'Redesigned the Shopify store homepage for PN Industries with a conversion-focused layout, animated hero section, featured collection carousels, social proof blocks, and a mobile-optimised design.',
    tags: ['Shopify'],
  },
  {
    id: 'principal-cmo-2022',
    title: 'Principal, CMO',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Karin Pryor',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Attorney website built with DIVI',
    completedDate: 'Sep 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'attorney-website-built-with-divi-2022',
    title: 'Attorney website built with DIVI',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Greg Stokes',
    company: 'Elite Web Ninjas LLC',
    budget: '$225.00 Budget',
    completedDate: 'Jul 2022',
    description:
      'Custom Shopify feature development for Elite Web Ninjas LLC — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'create-enloe-sales-lander-2022',
    title: 'Create Enloe Sales Lander',
    category: 'Store Development',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$625.00 Budget',
    completedDate: 'Jun 2022',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'private-invite-only-header-edit-update-menu-with-i-2022',
    title: 'Private Invite only. Header edit. Update Menu with image and Text',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Greg Stokes',
    company: 'Elite Web Ninjas LLC',
    budget: '$50.00 Budget',
    completedDate: 'Jun 2022',
    description:
      'Ongoing Shopify development and support for Elite Web Ninjas LLC — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-theme-based-on-dawn-custom-design-2022',
    title: 'Shopify theme, based on Dawn, custom design',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Alexander Lukjanenko',
    company: 'LA themes',
    budget: '$900.00 Budget',
    completedDate: 'May 2022',
    description:
      'Built a custom Shopify theme for LA themes from a creative brief, implementing bespoke sections, animations, and interactive components that align precisely with the brand\'s visual identity and conversion goals.',
    tags: ['Shopify', 'Custom Theme', 'Custom Development'],
  },
  {
    id: 'need-few-changes-in-my-shopify-store-2023',
    title: 'Need few changes in my Shopify store',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Surbir Singh',
    company: 'Shoppetite',
    budget: '$250.00 Budget',
    completedDate: 'Feb 2023',
    description:
      'Shopify ecommerce store development for Shoppetite, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-2023-2',
    title: 'SHOPIFY',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Saik M',
    budget: '$600.00 Budget',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-slight-changes-2022',
    title: 'Shopify slight changes',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Mary Cheung',
    company: 'PUCHANG WINE COMPANY LIMITED',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit',
    completedDate: 'Jul 2022',
    description:
      'Ongoing Shopify development and support for PUCHANG WINE COMPANY LIMITED — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'make-a-shopify-code-to-calculate-the-number-of-wal-2022',
    title: 'Make a shopify code to calculate the number of wallpaper rolls for a surface',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Maxence Soete',
    company: 'MSell Company Kft',
    budget: '$80.00 Budget',
    completedDate: 'Jul 2022',
    description:
      'Shopify custom payment configuration for MSell Company Kft implementing cash-on-delivery options, conditional payment method logic, and checkout customisations to support regional payment preferences.',
    tags: ['Shopify'],
  },
  {
    id: 'help-with-website-2022',
    title: 'Help with website',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Uliana Ivanova',
    company: 'Diva lashes',
    budget: '$88.00 Budget',
    completedDate: 'Jul 2022',
    description:
      'Custom Shopify feature development for Diva lashes — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'new-footer-and-navigation-styling-for-nathanjamesc-2022',
    title: 'New Footer and Navigation Styling for NathanJames.com',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$400.00 Budget',
    completedDate: 'May 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'fix-back-in-stock-button-on-shopify-pdp-2022',
    title: 'Fix Back In Stock Button on Shopify PDP',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Josh Bultz',
    budget: '$200.00 Budget',
    completedDate: 'May 2022',
    description:
      'Shopify product page development and optimisation, improving layout hierarchy, adding dynamic variant switching, sticky add-to-cart, trust badges, and upsell blocks to increase conversions.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'front-end-work-2023',
    title: 'Front end work',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Tom Lloyd',
    company: 'Tipo Designs',
    budget: '$250.00 Budget',
    completedDate: 'May 2023',
    description:
      'Custom Shopify feature development for Tipo Designs — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'developing-a-price-calculator-in-shopify-2023',
    title: 'Developing a Price Calculator in Shopify',
    category: 'Store Development',
    rating: 5.0,
    client: 'Elvir Zolj',
    budget: '$750.00 Budget',
    completedDate: 'Jan 2023',
    description:
      'Shopify store development and optimisation — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'website-designer-2022',
    title: 'Website designer',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Maitha Almaktoum',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Shopify Footer Custom Design Refinements',
    completedDate: 'Aug 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme'],
  },
  {
    id: 'shopify-footer-custom-design-refinements-2022',
    title: 'Shopify Footer Custom Design Refinements',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Rebecca Blair',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Shopify Migration to New theme template and improve UX/speed',
    completedDate: 'Mar 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme', 'Custom Development'],
  },
  {
    id: 'shopify-footer-custom-design-refinements-2022-2',
    title: 'Shopify Footer Custom Design Refinements',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Rebecca Blair',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit',
    completedDate: 'Mar 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Theme', 'Custom Development'],
  },
  {
    id: 'additional-task-2022',
    title: 'Additional task',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Chiaya Rawlins',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit Shopify developer needed to create new product templates',
    completedDate: 'May 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'you-will-get-email-marketing-setup-in-shopify-with-2022',
    title: 'You will get email marketing setup in Shopify with Klaviyo',
    category: 'Store Development',
    rating: 5.0,
    client: 'Brock Ellison',
    company: 'The Loyal SEO',
    budget: '$150.00 Order',
    completedDate: 'Mar 2022',
    description:
      'Shopify store development and optimisation for The Loyal SEO — delivered custom theme work, feature builds, and strategic improvements to create a high-performing ecommerce experience.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'need-website-for-a-portfolio-2022',
    title: 'Need website for a portfolio.',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Greg Stokes',
    company: 'Elite Web Ninjas LLC',
    budget: '$125.00 Budget',
    completedDate: 'May 2022',
    description:
      'Custom Shopify feature development for Elite Web Ninjas LLC — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'shopify-coding-2022',
    title: 'Shopify coding',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Norka Galette',
    budget: 'Rate: $25.00/hr, 9 hrs weekly limit Email marketing in Shopify',
    completedDate: 'May 2022',
    description:
      'Shopify custom payment configuration implementing cash-on-delivery options, conditional payment method logic, and checkout customisations to support regional payment preferences.',
    tags: ['Shopify'],
  },
  {
    id: 'email-marketing-in-shopify-2022',
    title: 'Email marketing in Shopify',
    category: 'Custom Features',
    rating: 0.0,
    client: 'Andy Cartwright',
    budget: 'Rate: $25.00/hr, 40 hrs weekly limit SHOPIFY EXPERT',
    completedDate: 'May 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: '-2022',
    title: '.',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Uliana Ivanova',
    company: 'Diva lashes',
    budget: '$80.00 Budget',
    completedDate: 'May 2022',
    description:
      'Custom Shopify feature development for Diva lashes — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'theme-fixes-in-shopify-store-2022',
    title: 'Theme fixes in Shopify store',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Magnus Ejlskov',
    company: 'ejlskov.design ApS',
    budget: 'Rate: $25.00/hr, 5 hrs weekly limit Website Edits',
    completedDate: 'May 2022',
    description:
      'Shopify ecommerce store development for ejlskov.design ApS, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'website-edits-2022',
    title: 'Website Edits',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jay G',
    budget: 'Rate: $20.00/hr, 15 hrs weekly limit Shopify Developer Needed for Visual and Revenue Optimization Changes',
    completedDate: 'Aug 2022',
    description:
      'Custom Shopify feature development — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'bigcommerce-store-creation-2022',
    title: 'Bigcommerce Store creation',
    category: 'Migration',
    rating: 5.0,
    client: 'ADNAN TAHIR',
    company: 'Hubco Global',
    budget: '$347.00 Budget',
    completedDate: 'May 2022',
    description:
      'Platform migration to Shopify for Hubco Global — full transfer of products, content, and customer data to a new Shopify storefront with a conversion-optimised theme and preserved SEO.',
    tags: ['Shopify'],
  },
  {
    id: 'mini-cart-drawer-brings-to-add-to-cart-not-to-chec-2021',
    title: 'Mini Cart Drawer Brings to Add To Cart not to Checkout',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ivan Falco',
    company: 'Vinnaz LTD',
    budget: '$25.00 Budget',
    completedDate: 'Nov 2021',
    description:
      'Shopify checkout customisation for Vinnaz LTD, implementing custom upsell blocks, post-purchase flows, discount logic, and brand-aligned checkout styling to maximise revenue per transaction.',
    tags: ['Shopify', 'Checkout'],
  },
  {
    id: 'shopify-front-page-update-on-mobile-2021',
    title: 'Shopify Front Page Update on Mobile',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Dark Hampton',
    budget: 'Rate: $20.00/hr, 40 hrs weekly limit Us.okkopro.com update',
    completedDate: 'Mar 2021',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Mobile', 'Bug Fixes'],
  },
  {
    id: 'usokkoprocom-update-2021',
    title: 'Us.okkopro.com update',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Simon Apperley',
    budget: 'Rate: $20.00/hr, 40 hrs weekly limit Shopify Developer Needed for Visual and Revenue Optimization Changes',
    completedDate: 'Sep 2021',
    description:
      'Ongoing Shopify development and support — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-ecom-fixing-coding-user-navigation-search-2021',
    title: 'Shopify Ecom Fixing coding - user navigation - search functions',
    category: 'Ongoing Support',
    rating: 0.0,
    client: 'Niko Markovich',
    company: 'Track Yard Agency',
    budget: 'Rate: $20.00/hr, 5 hrs weekly limit Shopify SKU uploads and store management',
    completedDate: 'Mar 2021',
    description:
      'Shopify ecommerce store development for Track Yard Agency, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'shopify-sku-uploads-and-store-management-2021',
    title: 'Shopify SKU uploads and store management',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ankita Sharma',
    company: 'Globalbelly',
    budget: 'Rate: $15.00/hr, 5 hrs weekly limit',
    completedDate: 'Sep 2021',
    description:
      'Shopify ecommerce store development for Globalbelly, building a complete and conversion-optimised online storefront with custom sections, mobile-first layout, and a seamless purchase flow.',
    tags: ['Shopify'],
  },
  {
    id: 'nodejs-developer-for-shopify-api-script-on-github-2021',
    title: 'Node.js Developer for Shopify API script on Github',
    category: 'Store Development',
    rating: 0.0,
    client: 'Shahin Ghannadian',
    company: 'Media Juice UG',
    budget: '$250.00 Budget',
    completedDate: 'Mar 2021',
    description:
      'Shopify development contract for Media Juice UG covering custom feature builds, theme updates, third-party integrations, and bug resolution across an ongoing engagement.',
    tags: ['Shopify', 'Store Setup'],
  },
  {
    id: 'shopify-support-needed-2021',
    title: 'Shopify Support Needed',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Bobby Leesman',
    company: 'Enrollment Alliance',
    budget: 'Rate: $20.00/hr, 40 hrs weekly limit Shopify Theme Customization - Programming required',
    completedDate: 'Feb 2021',
    description:
      'Ongoing Shopify development and support for Enrollment Alliance — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'little-changes-of-my-shopify-shop-2021',
    title: 'Little changes of my Shopify shop',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Arne Diehl',
    company: 'Diehl Martin GbR',
    budget: '$10.00 Budget',
    completedDate: 'Jan 2021',
    description:
      'Ongoing Shopify development and support for Diehl Martin GbR — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Bug Fixes'],
  },
  {
    id: 'finish-wordpress-and-shopify-sites-for-ziskend-hyp-2021',
    title: 'Finish Wordpress and Shopify sites for Ziskend Hypnosis',
    category: 'Custom Features',
    rating: 5.0,
    client: 'James Ziskend',
    budget: 'Rate: $25.00/hr, 20 hrs weekly limit Shopify experts needed for new cosmetics shop',
    completedDate: 'Feb 2021',
    description:
      'Migrated from WooCommerce/WordPress to Shopify, transferring all product data, customer records, and content while building a faster, more scalable Shopify storefront.',
    tags: ['Shopify', 'WooCommerce', 'Migration'],
  },
  {
    id: 'shopify-experts-needed-for-new-cosmetics-shop-2021',
    title: 'Shopify experts needed for new cosmetics shop',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Romain A',
    company: 'JR SAS',
    budget: 'Rate: $15.00/hr, 20 hrs weekly limit Need Help Getting Facebook to Pull Correct Title and Description From WordPress Blog Post',
    completedDate: 'Jun 2021',
    description:
      'Expert Shopify development engagement for JR SAS, delivering advanced custom solutions across theme development, app integrations, checkout customisation, and performance optimisation.',
    tags: ['Shopify'],
  },
  {
    id: 'need-help-getting-facebook-to-pull-correct-title-a-2017',
    title: 'Need Help Getting Facebook to Pull Correct Title and Description From WordPress Blog Post',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Aaron Burgin',
    company: 'Suicide Sucks',
    budget: '$13.00 Budget',
    completedDate: 'Aug 2017',
    description:
      'Shopify blog customisation for Suicide Sucks with improved category filtering, author profile sections, related posts display, and enhanced mobile typography to support the brand\'s content marketing strategy.',
    tags: ['Shopify', 'WooCommerce', 'Migration', 'Shopify Blog'],
  },
  {
    id: 'need-someone-to-do-data-entry-into-wordpress-admin-2017',
    title: 'Need someone to do data entry into Wordpress admin panel',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Jake Knight',
    company: 'Jake K',
    budget: '$30.00 Budget',
    completedDate: 'Aug 2017',
    description:
      'Migrated from WooCommerce/WordPress to Shopify for Jake K, transferring all product data, customer records, and content while building a faster, more scalable Shopify storefront.',
    tags: ['Shopify', 'WooCommerce', 'Migration'],
  },
  {
    id: 'moodle-customization-needed-2017',
    title: 'Moodle customization needed',
    category: 'Custom Features',
    rating: 5.0,
    client: 'John Hairabedian',
    company: '2970-7528 Quebec inc.',
    budget: 'Rate: $20.00/hr Restore a course on Moodle',
    completedDate: 'Nov 2017',
    description:
      'Custom Shopify feature development for 2970-7528 Quebec inc. — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'restore-a-course-on-moodle-2017',
    title: 'Restore a course on Moodle',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Ronen Geisler',
    company: 'Kol Tov Productions Inc',
    budget: '$7.00 Budget',
    completedDate: 'Jul 2017',
    description:
      'Custom Shopify feature development for Kol Tov Productions Inc — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify'],
  },
  {
    id: 'server-migration-databases-only-for-13-x-websites-2017',
    title: 'Server Migration (Databases Only) for 13 x Websites',
    category: 'Migration',
    rating: 5.0,
    client: 'Adam Laurie',
    company: 'EnginerRoom',
    budget: 'Rate: $15.00/hr Moodle site customization',
    completedDate: 'Mar 2017',
    description:
      'Platform migration to Shopify for EnginerRoom — transferred all products, collections, customer data, and page content while rebuilding the storefront with a modern, conversion-optimised theme.',
    tags: ['Shopify', 'Migration'],
  },
  {
    id: 'moodle-site-customization-2017',
    title: 'Moodle site customization',
    category: 'Custom Features',
    rating: 5.0,
    client: 'Khawar Ahmed',
    company: 'Cognission Corporation',
    budget: 'Rate: $15.00/hr Improve Website (Ongoing Maintenance)',
    completedDate: 'May 2017',
    description:
      'Custom Shopify feature development for Cognission Corporation — built bespoke Liquid templates, JavaScript components, and backend logic to deliver unique functionality tailored to the client\'s exact requirements.',
    tags: ['Shopify', 'Custom Development'],
  },
  {
    id: 'improve-website-ongoing-maintenance-2017',
    title: 'Improve Website (Ongoing Maintenance)',
    category: 'Ongoing Support',
    rating: 5.0,
    client: 'Dion Lovrecich',
    company: 'Extra Strength Marketing',
    budget: 'Rate: $15.00/hr Add keywords to post for SEO',
    completedDate: 'May 2017',
    description:
      'Ongoing Shopify development and support for Extra Strength Marketing — delivered continuous improvements, bug fixes, feature additions, and maintenance to keep the store performing at its best.',
    tags: ['Shopify', 'Ongoing Support', 'Bug Fixes'],
  },
  {
    id: 'add-keywords-to-post-for-seo-2017',
    title: 'Add keywords to post for SEO',
    category: 'Speed & CRO',
    rating: 5.0,
    client: 'Patricia Brown',
    company: 'Patricia Davis Brown Designs, LLC.',
    budget: '$60.00 Budget',
    completedDate: 'Mar 2017',
    description:
      'Custom feature implementation for a Shopify store for Patricia Davis Brown Designs, LLC. — built bespoke Liquid, JavaScript, and CSS logic to deliver the client\'s specific functional requirements with precision.',
    tags: ['Shopify', 'SEO', 'Core Web Vitals'],
  },
]

export const CATEGORIES: JobCategory[] = [
  'Store Development',
  'Store Redesign',
  'Migration',
  'Custom Features',
  'Shopify Plus',
  'Speed & CRO',
  'Design & Figma',
  'Ongoing Support',
]
