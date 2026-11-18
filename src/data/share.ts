// Services listed on /share, each with a ready-to-post caption.
// Captions are written to read naturally on LinkedIn / Facebook / X.

export type ShareItem = {
  title: string
  href: string
  group: 'Shopify' | 'Growth' | 'AI' | 'Web' | 'Company'
  caption: string
  hashtags: string[]
}

export const shareItems: ShareItem[] = [
  {
    title: 'Shopify store development',
    href: '/services/shopify/development',
    group: 'Shopify',
    caption: 'Building or rebuilding a Shopify store? Miracle Websoft designs fast, mobile-first Shopify stores built to convert, with 700+ projects delivered.',
    hashtags: ['Shopify', 'Ecommerce', 'ShopifyExpert'],
  },
  {
    title: 'Shopify app & custom features',
    href: '/services/shopify-app-development',
    group: 'Shopify',
    caption: 'Need a Shopify feature no app does? Miracle Websoft builds custom Shopify apps, bundles, configurators and integrations.',
    hashtags: ['Shopify', 'ShopifyApps', 'Ecommerce'],
  },
  {
    title: 'Shopify migration',
    href: '/services/shopify-migration',
    group: 'Shopify',
    caption: 'Moving from WooCommerce, Magento or BigCommerce to Shopify? Miracle Websoft migrates products, customers, orders and SEO without losing rankings.',
    hashtags: ['Shopify', 'ShopifyMigration', 'Ecommerce'],
  },
  {
    title: 'Shopify theme customization',
    href: '/services/shopify/theme-customization',
    group: 'Shopify',
    caption: 'Your Shopify theme should fit your brand, not the other way round. Miracle Websoft customizes Shopify themes cleanly and safely.',
    hashtags: ['Shopify', 'ShopifyTheme'],
  },
  {
    title: 'Conversion rate optimization',
    href: '/services/conversion-rate-optimization',
    group: 'Growth',
    caption: 'Getting traffic but not enough orders? Miracle Websoft finds and fixes what is stopping Shopify shoppers from buying.',
    hashtags: ['CRO', 'Shopify', 'Ecommerce'],
  },
  {
    title: 'Shopify speed optimization',
    href: '/services/shopify-speed-optimization',
    group: 'Growth',
    caption: 'A slow Shopify store costs sales. Miracle Websoft speeds up Shopify stores and improves Core Web Vitals.',
    hashtags: ['Shopify', 'PageSpeed', 'CoreWebVitals'],
  },
  {
    title: 'Free Shopify store audit',
    href: '/free-store-audit',
    group: 'Growth',
    caption: 'Get a free 5-minute video teardown of your Shopify store from Miracle Websoft: what to fix first, ranked by what each fix is likely worth.',
    hashtags: ['Shopify', 'Ecommerce', 'CRO'],
  },
  {
    title: 'AI business automation',
    href: '/services/ai/ai-business-automation',
    group: 'AI',
    caption: 'Stop repeating the same manual work every week. Miracle Websoft builds AI automations that connect your tools and save hours.',
    hashtags: ['AI', 'Automation', 'SmallBusiness'],
  },
  {
    title: 'OpenAI integrations',
    href: '/services/ai/openai-integrations',
    group: 'AI',
    caption: 'Add AI to your product or workflow properly. Miracle Websoft builds secure OpenAI and LLM integrations for real businesses.',
    hashtags: ['AI', 'OpenAI', 'LLM'],
  },
  {
    title: 'AI chatbots',
    href: '/services/ai/ai-chatbots',
    group: 'AI',
    caption: 'An AI chatbot trained on your business that answers customers 24/7, built by Miracle Websoft.',
    hashtags: ['AI', 'Chatbot', 'CustomerSupport'],
  },
  {
    title: 'Custom software you own',
    href: '/services/custom-software-development',
    group: 'Web',
    caption: 'Still paying per-user licence fees for your business software? Miracle Websoft builds custom alternatives to CRM, ERP, invoicing, inventory and SaaS tools. Stop renting software. Start owning it.',
    hashtags: ['CustomSoftware', 'SaaS', 'CRM', 'ERP', 'BusinessAutomation'],
  },
  {
    title: 'Full stack development',
    href: '/services/full-stack-development',
    group: 'Web',
    caption: 'Custom web applications, dashboards and portals built with React, Node.js, Laravel and PHP by Miracle Websoft. 10+ years, Top Rated Plus.',
    hashtags: ['FullStack', 'React', 'NodeJS', 'Laravel'],
  },
  {
    title: 'API integration',
    href: '/services/api-integration',
    group: 'Web',
    caption: 'Get your CRM, ERP, LMS, store and payment systems talking to each other. REST, GraphQL and webhook integrations by Miracle Websoft.',
    hashtags: ['API', 'Integration', 'Automation'],
  },
  {
    title: 'Moodle LMS development',
    href: '/services/moodle-development',
    group: 'Web',
    caption: 'Moodle plugins, themes, enrollment automation and WordPress integration from Miracle Websoft.',
    hashtags: ['Moodle', 'LMS', 'eLearning'],
  },
  {
    title: 'Custom web development',
    href: '/services/custom-web-development',
    group: 'Web',
    caption: 'Custom web apps, portals and dashboards built around how your business actually works, by Miracle Websoft.',
    hashtags: ['WebDevelopment', 'NextJS'],
  },
  {
    title: 'WordPress development',
    href: '/services/wordpress-development',
    group: 'Web',
    caption: 'Fast, maintainable WordPress sites from Miracle Websoft.',
    hashtags: ['WordPress', 'WebDevelopment'],
  },
  {
    title: 'Client reviews',
    href: '/reviews',
    group: 'Company',
    caption: 'See what Shopify store owners say about working with Miracle Websoft: verified reviews from real projects.',
    hashtags: ['Shopify', 'ClientReviews'],
  },
  {
    title: 'Case studies',
    href: '/case-studies',
    group: 'Company',
    caption: 'Real Shopify projects and results from Miracle Websoft: what was broken, what we built, and what changed.',
    hashtags: ['Shopify', 'CaseStudy', 'Ecommerce'],
  },
  {
    title: 'Referral program',
    href: '/referral',
    group: 'Company',
    caption: 'Know a brand that needs Shopify help? Refer them to Miracle Websoft and earn a reward when the project starts.',
    hashtags: ['Referral', 'Shopify'],
  },
]
