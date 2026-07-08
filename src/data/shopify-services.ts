export type ShopifyServiceData = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  subtext: string
  features: string[]
  challenges: { title: string; body: string }[]
  faqs: { question: string; answer: string }[]
  formHeading: string
  formSubtext: string
}

// Note: 'development' slug has its own dedicated page at /services/shopify/development
// It was removed from this array so the dynamic [slug] route does not conflict.

const shopifyServices: ShopifyServiceData[] = [
  {
    slug: 'shopify-plus-development',
    metaTitle: 'Shopify Plus Development Agency | Miracle Websoft',
    metaDescription: 'Shopify Plus development for growing ecommerce brands. Checkout extensions, Shopify Functions, B2B, Markets, APIs, integrations and enterprise architecture.',
    eyebrow: 'SHOPIFY PLUS DEVELOPMENT',
    h1: 'Shopify Plus Development for Brands Ready to Scale',
    subtext: 'Shopify Plus should simplify growth, not create a bigger technical mess. We build Plus storefronts, checkout extensions, Functions, B2B workflows, integrations and expansion-store setups for brands that need reliable ecommerce infrastructure.',
    features: [
      'Shopify Plus storefront builds and redesigns',
      'Checkout UI extensions and checkout extensibility',
      'Shopify Functions for discounts, shipping and payment logic',
      'B2B wholesale portals and company accounts',
      'Shopify Markets and international expansion stores',
      'ERP, CRM, 3PL and fulfilment integrations',
      'Custom admin tools and private operational workflows',
      'Migration planning from legacy checkout customizations',
      'Performance, security and launch QA',
      'Ongoing Plus support and feature development',
    ],
    challenges: [
      {
        title: 'Plus features are powerful but easy to overcomplicate',
        body: 'Checkout extensibility, Functions, B2B and Markets need careful architecture. We help you use the right Plus capabilities without creating brittle custom logic.',
      },
      {
        title: 'Enterprise ecommerce depends on integrations',
        body: 'Growing brands rely on ERP, CRM, warehouse, tax, subscription and reporting systems. We build and test those connections so operations keep moving.',
      },
      {
        title: 'Scaling exposes theme and app weaknesses',
        body: 'A store that worked at lower volume can become slow, hard to maintain or fragile. We clean up theme structure, app dependencies and performance before growth breaks them.',
      },
    ],
    faqs: [
      {
        question: 'Do you build Shopify Plus checkout extensions?',
        answer: 'Yes. We build checkout UI extensions and Shopify Functions for discount logic, shipping rules, payment customization and checkout experiences supported by Shopify Plus.',
      },
      {
        question: 'Can you help migrate from checkout.liquid?',
        answer: 'Yes. We review the existing checkout.liquid customizations, map what can move to checkout extensions and Functions, then rebuild the supported parts safely.',
      },
      {
        question: 'Do you handle B2B on Shopify Plus?',
        answer: 'Yes. We build B2B company accounts, gated pricing, wholesale catalogs, payment terms, quote workflows and ERP integrations for Shopify Plus merchants.',
      },
      {
        question: 'When should a brand consider Shopify Plus?',
        answer: 'Plus usually makes sense when you need advanced checkout customization, B2B, higher API capacity, international expansion, automation, or operational requirements that standard Shopify cannot support cleanly.',
      },
    ],
    formHeading: 'Plan your Shopify Plus project',
    formSubtext: 'Tell us your current store, Plus goals and systems involved. We will reply with a practical architecture and scope.',
  },
  {
    slug: 'theme-customization',
    metaTitle: 'Shopify Theme Customization Services | Miracle Websoft',
    metaDescription: 'Shopify theme customization for product pages, homepage sections, collection templates, landing pages, UX improvements and conversion-focused theme edits.',
    eyebrow: 'SHOPIFY THEME CUSTOMIZATION',
    h1: 'Shopify Theme Customization That Improves the Buying Experience',
    subtext: 'You do not always need a full rebuild. We customize Shopify themes to improve product pages, collection pages, homepage sections, landing pages, navigation and conversion-critical user experience.',
    features: [
      'Custom Shopify sections and theme blocks',
      'Homepage, product and collection page customization',
      'Landing page templates for campaigns',
      'Mobile layout and sticky add-to-cart improvements',
      'Trust signals, size guides, tabs and accordions',
      'Navigation, menu and collection filtering improvements',
      'Theme settings and schema cleanup',
      'Liquid, CSS and JavaScript fixes',
      'Accessibility and responsive layout improvements',
      'QA across mobile, tablet and desktop',
    ],
    challenges: [
      {
        title: 'Small theme issues create real buying friction',
        body: 'Confusing product pages, weak mobile layouts and missing trust signals quietly reduce conversion. Targeted theme customization can fix those blockers quickly.',
      },
      {
        title: 'Purchased themes often need brand-specific logic',
        body: 'A premium theme is still generic. We add the sections, templates and settings your catalog, campaigns and customers actually need.',
      },
      {
        title: 'Bad edits make themes harder to maintain',
        body: 'We keep customizations organized, documented and editable in the Shopify theme editor where possible, instead of leaving hard-coded one-off patches.',
      },
    ],
    faqs: [
      {
        question: 'Can you customize an existing Shopify theme?',
        answer: 'Yes. We customize existing themes, including Dawn and premium themes, with new sections, layout changes, product page features and conversion improvements.',
      },
      {
        question: 'Do I need a full redesign?',
        answer: 'Not always. If the current theme is technically sound, targeted customization can be faster and more cost-effective than a full rebuild.',
      },
      {
        question: 'Can the changes be editable in the theme editor?',
        answer: 'Where possible, yes. We expose content, colors, images and layout options through Shopify section schema so your team can manage them without code.',
      },
      {
        question: 'How fast can theme customization be completed?',
        answer: 'Small changes can take a few days. Larger product page, collection or landing page updates usually take 1-3 weeks depending on scope.',
      },
    ],
    formHeading: 'Customize your Shopify theme',
    formSubtext: 'Send your store URL and the theme changes you need. We will suggest the cleanest path.',
  },
  {
    slug: 'custom-features',
    metaTitle: 'Shopify Custom Feature Development | Miracle Websoft',
    metaDescription: 'Shopify custom feature development for bundles, quizzes, configurators, product tools, portals, checkout logic, custom sections and unique buying flows.',
    eyebrow: 'SHOPIFY CUSTOM FEATURES',
    h1: 'Shopify Custom Features When Apps Cannot Handle the Workflow',
    subtext: 'When standard Shopify apps are too slow, too limited or too expensive, we build custom features around your products, buyers and operations.',
    features: [
      'Bundle builders and product configurators',
      'Product recommendation quizzes',
      'Size guides, calculators and fit tools',
      'Custom product options and personalization',
      'Wholesale, gated pricing and customer portals',
      'Recently viewed products and custom recommendations',
      'Pre-order, waitlist and product drop systems',
      'Custom cart, upsell and promotion logic',
      'Metafield and metaobject-powered content systems',
      'Admin tools for managing custom workflows',
    ],
    challenges: [
      {
        title: 'Apps rarely match the exact business model',
        body: 'The app marketplace is useful, but many apps force your workflow into their model. Custom features let the store support the buying journey you actually need.',
      },
      {
        title: 'Too many apps slow the storefront down',
        body: 'Replacing heavy app stacks with lean custom code can improve performance, reduce subscription cost and simplify maintenance.',
      },
      {
        title: 'Custom logic needs clean data architecture',
        body: 'Good Shopify features depend on well-structured metafields, metaobjects, products, variants and integrations. We plan that before writing code.',
      },
    ],
    faqs: [
      {
        question: 'What custom Shopify features can you build?',
        answer: 'We build bundles, quizzes, configurators, size tools, custom options, portals, waitlists, product drops, recently viewed sections, upsells, custom cart logic and admin tools.',
      },
      {
        question: 'Should we use an app or custom development?',
        answer: 'Use an app when it cleanly solves the problem without slowing the store or creating operational issues. Choose custom development when the workflow is unique, performance-sensitive or strategically important.',
      },
      {
        question: 'Can you replace an existing app with custom code?',
        answer: 'Yes. We can audit an app, identify what functionality is actually needed and rebuild the core feature more cleanly when that makes business sense.',
      },
      {
        question: 'Will custom features work with the Shopify admin?',
        answer: 'Yes. We usually use Shopify metafields, metaobjects, theme settings or custom admin interfaces so your team can manage the feature after launch.',
      },
    ],
    formHeading: 'Build a custom Shopify feature',
    formSubtext: 'Describe the feature, app limitation or buying flow you need. We will scope the simplest reliable build.',
  },
  {
    slug: 'app-integration',
    metaTitle: 'Shopify App Integration Services | Miracle Websoft',
    metaDescription: 'Shopify app integration services for Klaviyo, Gorgias, ReCharge, Yotpo, ERPs, CRMs, shipping, analytics, subscriptions and marketplaces.',
    eyebrow: 'SHOPIFY APP INTEGRATION',
    h1: 'Shopify App Integration Without Slowing the Store Down',
    subtext: 'We integrate Shopify apps, marketing tools, support platforms, subscriptions, reviews, fulfilment, analytics, marketplaces, CRMs and ERPs so your stack works together cleanly.',
    features: [
      'Klaviyo, Attentive and email/SMS setup',
      'Gorgias, Zendesk and customer support integration',
      'ReCharge, Skio and subscription workflows',
      'Yotpo, Judge.me and review integrations',
      'ERP, CRM and inventory sync',
      'Shipping, 3PL and fulfilment integrations',
      'Analytics, pixels and server-side tracking',
      'Marketplace and social commerce integrations',
      'App performance and script cleanup',
      'Testing, documentation and handover',
    ],
    challenges: [
      {
        title: 'Apps create value only when the workflow is connected',
        body: 'Installing an app is the easy part. The value comes from correct data flow, customer segments, events, automations and operational handoffs.',
      },
      {
        title: 'App bloat can hurt speed and conversion',
        body: 'Too many apps inject scripts on every page. We integrate what you need and remove, defer or replace what is slowing the store down.',
      },
      {
        title: 'Bad tracking creates bad decisions',
        body: 'Marketing and analytics apps must be configured carefully so events, attribution and customer data are accurate enough to guide decisions.',
      },
    ],
    faqs: [
      {
        question: 'Which Shopify apps do you integrate?',
        answer: 'We integrate Klaviyo, Gorgias, ReCharge, Skio, Yotpo, Judge.me, Loop, ShipStation, TikTok, Meta, Google, ERPs, CRMs and many other Shopify apps and APIs.',
      },
      {
        question: 'Can you clean up our current app stack?',
        answer: 'Yes. We audit installed apps, identify unused or overlapping tools, review script impact and recommend what to keep, remove, replace or custom-build.',
      },
      {
        question: 'Can you connect Shopify with our CRM or ERP?',
        answer: 'Yes. We build API, webhook and middleware integrations between Shopify and CRMs, ERPs, inventory systems, warehouses and custom internal tools.',
      },
      {
        question: 'Do you test integrations before launch?',
        answer: 'Yes. We test event flow, customer data, order sync, error states, permissions, webhooks and real purchase scenarios before launch.',
      },
    ],
    formHeading: 'Plan a Shopify integration',
    formSubtext: 'Tell us which apps or systems need to connect and what data must move between them.',
  },
  {
    slug: 'shopify-maintenance',
    metaTitle: 'Shopify Maintenance and Support Services | Miracle Websoft',
    metaDescription: 'Shopify maintenance and support for ecommerce brands. Theme updates, bug fixes, app checks, speed monitoring, product changes and ongoing improvements.',
    eyebrow: 'SHOPIFY MAINTENANCE',
    h1: 'Shopify Maintenance for Stores That Need Reliable Support',
    subtext: 'A Shopify store is never really finished. We provide ongoing technical support, theme updates, bug fixes, performance checks, app reviews and growth improvements for live stores.',
    features: [
      'Theme, app and dependency updates',
      'Bug fixes and urgent issue support',
      'Product, collection and content updates',
      'Speed and Core Web Vitals monitoring',
      'App stack review and cleanup',
      'Small feature and section development',
      'Tracking, pixels and analytics checks',
      'CRO recommendations and monthly improvements',
      'Campaign, sale and launch support',
      'Backup, QA and documentation practices',
    ],
    challenges: [
      {
        title: 'Live stores need ongoing technical ownership',
        body: 'Apps change, themes age, campaigns launch and bugs appear. Without a responsible technical partner, small issues become revenue problems.',
      },
      {
        title: 'Maintenance should improve the store, not only fix bugs',
        body: 'We use support time to keep the store faster, cleaner and easier to manage while also handling urgent fixes and routine changes.',
      },
      {
        title: 'Fast support matters during campaigns',
        body: 'Product drops, sales and paid campaigns need quick technical help. We provide a reliable path for urgent fixes and planned support.',
      },
    ],
    faqs: [
      {
        question: 'What is included in Shopify maintenance?',
        answer: 'Maintenance can include bug fixes, theme updates, app checks, speed monitoring, small development tasks, content changes, tracking checks and monthly improvement recommendations.',
      },
      {
        question: 'Do you offer monthly Shopify support?',
        answer: 'Yes. We offer monthly maintenance and support retainers for stores that need ongoing technical help and improvements.',
      },
      {
        question: 'Can you support a store you did not build?',
        answer: 'Yes. We first audit the theme, apps and store setup so we understand the risks before taking over ongoing support.',
      },
      {
        question: 'How quickly do you respond?',
        answer: 'Typical response is within 24 hours on business days. Urgent production issues are prioritized for active maintenance clients.',
      },
    ],
    formHeading: 'Get Shopify maintenance support',
    formSubtext: 'Send your store URL and tell us what kind of support you need each month.',
  },
  {
    slug: 'api-private-apps',
    metaTitle: 'Shopify API Development & Private Apps | Miracle Websoft',
    metaDescription: 'Shopify API development and private apps for custom workflows, admin tools, integrations, webhooks, Storefront API, Admin API and automation.',
    eyebrow: 'SHOPIFY API DEVELOPMENT',
    h1: 'Shopify API Development and Private Apps for Custom Operations',
    subtext: 'We build private Shopify apps, API integrations, webhooks, admin tools and automation workflows when your store needs custom logic beyond theme code or public apps.',
    features: [
      'Shopify Admin API and GraphQL development',
      'Storefront API integrations',
      'Private apps and custom admin tools',
      'Webhook processors and background jobs',
      'ERP, CRM and warehouse sync',
      'Custom reporting and dashboards',
      'Product, order, customer and inventory automation',
      'Secure authentication and permissions',
      'Rate limit handling and retry logic',
      'Monitoring, logs and documentation',
    ],
    challenges: [
      {
        title: 'Operational workflows often need backend logic',
        body: 'Some Shopify problems cannot be solved in Liquid. APIs, webhooks and private apps let the store connect to the systems that run the business.',
      },
      {
        title: 'Unreliable integrations create expensive mistakes',
        body: 'Order, inventory and customer sync must handle rate limits, failures, duplicates and retries. We build integrations for reliability, not only the happy path.',
      },
      {
        title: 'Private tools need security and maintainability',
        body: 'We build with permissions, secure secrets, logs and documentation so the app can be maintained after launch.',
      },
    ],
    faqs: [
      {
        question: 'Do you build Shopify private apps?',
        answer: 'Yes. We build private and custom Shopify apps for admin workflows, storefront features, integrations, reporting, automation and operational tools.',
      },
      {
        question: 'Which Shopify APIs do you use?',
        answer: 'We work with Shopify Admin API, Storefront API, GraphQL, webhooks, Functions and app extensions depending on the project.',
      },
      {
        question: 'Can you sync Shopify with our internal system?',
        answer: 'Yes. We build integrations with ERPs, CRMs, inventory systems, warehouses, accounting tools, marketplaces and custom databases.',
      },
      {
        question: 'Can you maintain an existing private app?',
        answer: 'Yes. We can audit an existing app, document how it works, fix bugs, update API versions and improve reliability.',
      },
    ],
    formHeading: 'Scope a Shopify API project',
    formSubtext: 'Tell us what Shopify needs to connect with or automate. We will recommend the safest architecture.',
  },
  {
    slug: 'electronics',
    metaTitle: 'Shopify Development for Electronics Stores | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for electronics and tech brands. Complex product variants, spec comparison tables, B2B wholesale, and high-performance builds.',
    eyebrow: 'SHOPIFY FOR ELECTRONICS',
    h1: 'Shopify Development for Electronics & Tech Stores',
    subtext: 'Selling electronics means managing complex product specs, large SKU counts, and customers who research heavily before buying. We build Shopify stores engineered specifically for how tech buyers shop.',
    features: [
      'Technical specification display and comparison tables',
      'Complex variant architecture (RAM, storage, colour, region)',
      'Rich product media — video, 360° views, close-up zoom',
      'B2B wholesale and volume pricing tiers',
      'Bulk order management and quote requests',
      'Extended warranty and protection plan add-ons',
      'Accessories and upsell recommendation engine',
      'Review system with verified purchase badges',
      'Inventory tracking across multiple warehouses',
      'Import duty and tax calculators for international sales',
      'Trade-in and refurbished product listings',
      'Custom checkout flows for large orders',
    ],
    challenges: [
      {
        title: 'Managing product complexity',
        body: 'Electronics products have deep variant trees — model numbers, regional specs, compatibility matrices. Standard Shopify variant setups break down fast. We architect product data structures that scale.',
      },
      {
        title: 'High-research buying journeys',
        body: 'Tech buyers compare specs across 4–7 pages before deciding. Your store needs comparison tools, detailed spec tables, and trust signals that keep them from leaving for a competitor.',
      },
      {
        title: 'B2B and B2C mixed selling',
        body: 'Many electronics businesses sell to both consumers and trade accounts with different pricing, invoicing, and payment terms. We build Shopify Plus stores that handle both audiences cleanly.',
      },
      {
        title: 'Returns and warranty management',
        body: 'Electronics have higher return rates and warranty claim volumes than most categories. We integrate return management workflows and warranty tracking directly into your Shopify admin.',
      },
    ],
    faqs: [
      {
        question: 'Can Shopify handle the complexity of electronics product catalogues?',
        answer: 'Standard Shopify has a 100-variant limit per product and limited metafield support out of the box. With custom metafields, Shopify Functions and custom app development, we can handle even deeply complex electronics catalogues with full spec data and comparison features.',
      },
      {
        question: 'Can you build product comparison features?',
        answer: 'Yes. We build custom comparison tools that let shoppers compare up to 4 products side-by-side across any spec attributes you define — processor, battery life, connectivity, dimensions, and more.',
      },
      {
        question: 'Do you handle B2B wholesale on Shopify?',
        answer: 'Yes. With Shopify Plus, we build full B2B storefronts with gated access, volume pricing tiers, net payment terms, custom invoicing, and company-level account management.',
      },
      {
        question: 'Can you integrate with our inventory and ERP system?',
        answer: 'Yes. We have experience integrating Shopify with major ERP and inventory platforms including NetSuite, SAP, Brightpearl, Linnworks, and custom warehouse management systems via API.',
      },
      {
        question: 'How do you handle international tax and duty for electronics?',
        answer: 'We integrate with tax calculation platforms and can build duty estimators for international shipping. Shopify\'s built-in tax tools combined with apps like Avalara handle most needs; we advise on the right stack for your markets.',
      },
    ],
    formHeading: 'Plan your electronics Shopify store',
    formSubtext: 'Tell us about your catalogue, sales channels and biggest blockers. We will reply with a practical Shopify plan within 24 hours.',
  },

  {
    slug: 'beauty-cosmetics',
    metaTitle: 'Shopify Development for Beauty & Cosmetics Brands | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for beauty, cosmetics, skincare and makeup brands. Quiz funnels, shade matching, subscription, ingredient transparency and Klaviyo flows.',
    eyebrow: 'SHOPIFY FOR BEAUTY & COSMETICS',
    h1: 'Shopify Development for Beauty & Cosmetics Brands',
    subtext: 'Beauty shoppers research obsessively, trust their friends more than your ads, and want to feel confident before they buy. We build Shopify stores with quiz funnels, shade matching, ingredient transparency and subscription flows that turn first-time buyers into long-term subscribers.',
    features: [
      'Custom skincare and makeup quiz funnels',
      'Shade matching and virtual try-on integration',
      'Subscription and auto-ship (Recharge, Skio, Loop)',
      'Ingredient and INCI list transparency display',
      'Loyalty and rewards programme integration',
      'Bundle builder and full-routine kits',
      'Klaviyo segmented email and SMS flows',
      'UGC, before/after and review integration with photos',
      'Refill and sustainable packaging messaging',
      'Influencer and ambassador discount tiers',
      'International DTC with localised compliance',
      'Faster mobile PDPs to convert paid social traffic',
    ],
    challenges: [
      {
        title: 'Helping shoppers find the right shade and formula',
        body: 'Beauty buyers abandon when they cannot tell if a foundation is their shade, or if a serum is right for their skin. Quiz funnels, shade finders and AI try-on tools remove that uncertainty — and dramatically lift conversion.',
      },
      {
        title: 'Driving subscription LTV',
        body: 'Acquiring a beauty customer is expensive. Profit lives in the second, third and tenth order. We build subscription flows, replenishment reminders and loyalty mechanics that convert one-time buyers into auto-ship subscribers.',
      },
      {
        title: 'Regulatory and ingredient compliance',
        body: 'Cosmetics claims are regulated differently in the US, UK, EU and Australia. We build compliant product page templates that separate marketing claims from regulated statements — so you convert without crossing lines.',
      },
      {
        title: 'Standing out from a crowded shelf',
        body: 'Beauty is one of the most saturated DTC categories online. Your store needs editorial design, fast PDPs, social proof and UGC at every touchpoint to convert — not a generic theme that looks like every competitor.',
      },
    ],
    faqs: [
      {
        question: 'Can you build a beauty or skincare quiz on Shopify?',
        answer: 'Yes. We build custom quiz funnels — skin type, concerns, undertone, goals — that recommend a personalised routine and add it to cart. These typically lift conversion rate, AOV and reduce return rates significantly.',
      },
      {
        question: 'Can you build shade matching or virtual try-on?',
        answer: 'Yes. We integrate Perfect Corp, ModiFace or YouCam for AR shade matching and virtual try-on, or build custom shade finder tools using metafields and tag-based filtering for simpler use cases.',
      },
      {
        question: 'Which subscription apps do you integrate for cosmetics?',
        answer: 'We integrate Recharge, Skio, Loop Subscriptions and Smartrr depending on your AOV, churn pattern and customer portal needs. We advise on the right tool — they are not interchangeable.',
      },
      {
        question: 'How do you handle EU and UK cosmetic ingredient regulations?',
        answer: 'We structure product pages to comply with INCI listing requirements, country-of-origin display and notification number visibility (where required). For specific regulatory sign-off, we work alongside your in-house or third-party regulatory consultant.',
      },
      {
        question: 'Can you build bundle kits and full-routine sets?',
        answer: 'Yes — bundle builders, "complete the routine" cross-sells, regimen kits and gift sets are core to beauty AOV. We build these as configurable bundles with discount logic that flows cleanly through to fulfilment.',
      },
    ],
    formHeading: 'Improve your beauty Shopify store',
    formSubtext: 'Tell us about your brand, hero products and growth goals. We will reply with a tailored Shopify plan within 24 hours.',
  },

  {
    slug: 'health-wellness',
    metaTitle: 'Shopify Development for Health & Wellness Brands | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for supplements, vitamins, nutraceuticals and wellness brands. Subscription builds, regulatory-compliant product pages, quiz funnels and loyalty.',
    eyebrow: 'SHOPIFY FOR HEALTH & WELLNESS',
    h1: 'Shopify Development for Health & Wellness Brands',
    subtext: 'Supplements, vitamins, functional foods and wellness products live or die on trust. We build Shopify stores with compliant claims architecture, quiz-driven personalisation, subscription delivery and the trust signals that turn cautious shoppers into long-term subscribers.',
    features: [
      'Subscription and auto-ship for supplements',
      'Symptom and goal-based quiz funnels',
      'Regulatory-compliant product page templates',
      'Certification and lab-test result display',
      'Ingredient sourcing and traceability messaging',
      'Subscribe-and-save pricing and tiered discounts',
      'Bundle and stack builder for full regimens',
      'Klaviyo email flows for replenishment and education',
      'Loyalty programme with referral mechanics',
      'Doctor, dietitian or expert endorsement display',
      'International compliance routing per market',
      'Pre-launch waitlist and back-in-stock notifications',
    ],
    challenges: [
      {
        title: 'Communicating efficacy without crossing claims lines',
        body: 'Wellness products live in a regulatory grey zone. What you can say in the US is different from the UK, EU and Australia. We architect product templates that separate compliant marketing from regulated claims — so you sell without putting the brand at risk.',
      },
      {
        title: 'Building trust for ingestible products',
        body: 'Supplement shoppers are sceptical — they want to see lab tests, certifications, sourcing, doctor formulators and verified reviews. We build product pages where every claim is backed by something visible.',
      },
      {
        title: 'Maximising lifetime value through subscription',
        body: 'Vitamins and supplements are the natural subscription category — daily-use products with predictable replenishment. We build subscription flows with portion calculators, smart refill timing and easy customer self-service.',
      },
      {
        title: 'Personalisation at scale',
        body: 'A one-size-fits-all supplement store loses to personalised wellness brands. Quiz funnels that recommend a tailored stack based on goals, lifestyle and symptoms convert dramatically better — and we build them into the storefront.',
      },
    ],
    faqs: [
      {
        question: 'Can you build a personalised supplement quiz on Shopify?',
        answer: 'Yes. We build quiz funnels that ask about goals, symptoms, diet and lifestyle, then recommend a personalised stack — adding it to cart as a subscription bundle. These funnels typically 2–3× conversion rate vs. browsing the catalogue.',
      },
      {
        question: 'How do you handle FDA, FSA and TGA compliance on product pages?',
        answer: 'We build product page templates that separate marketing claims from regulated structure-function statements, with clear disclaimer placement and country-specific routing where needed. We work alongside your regulatory consultant for sign-off on copy.',
      },
      {
        question: 'Which subscription apps work best for supplements?',
        answer: 'Recharge and Skio both work well. We typically recommend Skio for newer brands needing flexibility and Recharge for established brands with deep app stack integration. The right choice depends on AOV, churn and customer service workflow.',
      },
      {
        question: 'Can you display lab test results and certifications?',
        answer: 'Yes. We build certificate of analysis (COA) display systems, batch-level lab result lookup, and certification badge libraries (NSF, USP, GMP, organic, vegan, etc.) — all of which measurably improve trust signals and conversion.',
      },
      {
        question: 'Do you handle international expansion for wellness brands?',
        answer: 'Yes. We build Shopify Markets-based multi-region storefronts with country-specific compliance gating, tax handling and ingredient claim variations — so you can sell into the US, UK, EU, Australia and Canada without spinning up separate stores.',
      },
    ],
    formHeading: 'Plan your health & wellness Shopify store',
    formSubtext: 'Tell us about your products, markets and compliance needs. We will reply with a practical Shopify plan within 24 hours.',
  },

  {
    slug: 'jewelry',
    metaTitle: 'Shopify Development for Jewelry & Accessories | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for jewelry, accessories and luxury goods brands. High-end design, customisation tools, and checkout experiences that match your brand.',
    eyebrow: 'SHOPIFY FOR JEWELRY',
    h1: 'Shopify Development for Jewelry & Accessories Brands',
    subtext: 'Jewelry is one of the hardest categories to sell online. Product photography, customisation options, and the feeling of luxury — we build Shopify stores that convey craftsmanship and convert high-intent buyers.',
    features: [
      'High-resolution zoom and product video support',
      'Metal, stone and finish customisation options',
      'Custom engraving and personalisation flows',
      'Ring size guide and measurement tools',
      'Gift wrapping and message card options',
      'Luxury checkout experience and packaging',
      'Certificate of authenticity and hallmark display',
      'Wishlist and "save for later" functionality',
      'Bespoke and made-to-order enquiry flows',
      'Wholesale and trade account access',
      'Secure packaging and insurance messaging',
      'International duty and precious metal VAT handling',
    ],
    challenges: [
      {
        title: 'Conveying luxury online',
        body: 'Jewelry shoppers expect an experience that matches the quality of the product. A generic Shopify theme undermines your brand. We build stores where every interaction — from product zoom to checkout — feels premium.',
      },
      {
        title: 'Custom and bespoke ordering',
        body: 'Many jewelry brands offer custom pieces, engraving or made-to-order items. Standard Shopify product flows don\'t handle this well. We build bespoke ordering journeys and enquiry forms that capture all the detail you need.',
      },
      {
        title: 'Photography and product presentation',
        body: 'Jewelry lives or dies by how it\'s presented online. We build stores with proper image zoom, lifestyle photography sections, and video support — and advise on technical specs to get the most from your photography.',
      },
      {
        title: 'High-value cart trust signals',
        body: 'When a customer is spending $500 or $5,000 online, they need to feel safe. We integrate trust signals — secure checkout badges, clear return policies, authenticity guarantees — at every decision point.',
      },
    ],
    faqs: [
      {
        question: 'Can you build custom engraving and personalisation on Shopify?',
        answer: 'Yes. We build engraving and personalisation flows with preview tools — customers enter their text, choose font and placement, and see an approximation before adding to cart. The personalisation data flows cleanly to your fulfilment team.',
      },
      {
        question: 'Do you work with high-end and luxury jewelry brands?',
        answer: 'Yes — luxury positioning is one of our strengths. We understand that a luxury brand needs an experience far beyond a standard Shopify theme, and we build accordingly: premium typography, restrained colour palettes, and frictionless checkout flows.',
      },
      {
        question: 'Can you handle made-to-order and bespoke pieces?',
        answer: 'Yes. We build custom enquiry flows, bespoke configurators, and consultation booking integrations so you can sell custom pieces without forcing them into a standard add-to-cart flow.',
      },
      {
        question: 'How do you handle ring sizing and measurement guides?',
        answer: 'We build interactive size guides — printable ring sizers, measurement instructions, international size conversion charts — embedded directly in the product page to reduce sizing uncertainty.',
      },
      {
        question: 'Can you handle VAT and precious metal taxes in different countries?',
        answer: 'Yes. The tax treatment of precious metals and jewelry varies by country. We configure Shopify\'s tax rules correctly for your markets and integrate with specialist tax tools where needed.',
      },
    ],
    formHeading: 'Improve your jewelry Shopify store',
    formSubtext: 'Tell us about your brand and what you need. We\'ll send you a custom proposal within 24 hours.',
  },

  {
    slug: 'food-beverage',
    metaTitle: 'Shopify Development for Food & Beverage Brands | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for food, drink, coffee and FMCG brands. Subscription delivery, local fulfilment, allergen displays, and DTC builds.',
    eyebrow: 'SHOPIFY FOR FOOD & BEVERAGE',
    h1: 'Shopify Development for Food & Beverage Brands',
    subtext: 'Food and drink e-commerce has unique challenges — subscription deliveries, perishable shipping, allergen compliance, and driving repeat purchase. We build Shopify stores that handle the complexity and keep customers coming back.',
    features: [
      'Subscription and recurring delivery setup',
      'Delivery date picker and local fulfilment',
      'Allergen and dietary filter display',
      'Nutritional information structured data',
      'Bulk and wholesale ordering',
      'Gift box and hamper bundle builder',
      'Freshness and harvest date display',
      'Corporate gifting flows',
      'Age verification gating for alcohol',
      'DTC and D2C market expansion',
      'Loyalty and refill programme integration',
      'Cold chain and perishable shipping messaging',
    ],
    challenges: [
      {
        title: 'Subscription and repeat purchase',
        body: 'The economics of food DTC only work with repeat customers. Single-purchase buyers rarely justify the acquisition cost. We build subscription flows and loyalty mechanics that maximise lifetime value from your first order.',
      },
      {
        title: 'Perishable shipping complexity',
        body: 'Cold chain, delivery windows, and cut-off times make food fulfilment genuinely complex. We build delivery date selectors, fulfilment zone maps, and shipping rules that match your operational reality.',
      },
      {
        title: 'Allergen and compliance requirements',
        body: 'Food product pages carry legal obligations — allergen declarations, ingredient lists, nutritional information. We build compliant product templates and advise on what information needs to be where.',
      },
      {
        title: 'Competing on experience, not price',
        body: 'Food shoppers have endless choice online. Your store needs to communicate provenance, quality and story in a way that justifies a premium price. Commodity stores compete on price — brand stores don\'t.',
      },
    ],
    faqs: [
      {
        question: 'Can you build subscription boxes and meal kits on Shopify?',
        answer: 'Yes. We integrate Recharge or Skio for recurring orders and build fully custom subscription UIs — frequency selection, delivery scheduling, pause/skip, and product swap. Meal kit subscriptions with rotating menus are also possible with custom app development.',
      },
      {
        question: 'Can you add a delivery date picker to our Shopify store?',
        answer: 'Yes. We build delivery date pickers that account for your cut-off times, blackout dates, delivery zones, and lead times. These reduce failed deliveries and customer service load significantly.',
      },
      {
        question: 'How do you display allergens and nutritional information?',
        answer: 'We build structured allergen and nutritional data into product metafields, with compliant display templates that meet UK/EU food labelling requirements. This also benefits SEO through structured data markup.',
      },
      {
        question: 'Can you handle alcohol age verification?',
        answer: 'Yes. We implement age gates that meet platform and market requirements for alcohol sales — including Shopify Plus checkout gating and third-party age verification integrations for stricter markets.',
      },
      {
        question: 'Do you build corporate gifting and B2B order flows?',
        answer: 'Yes. We build corporate gift ordering — custom quantity pricing, personalised message cards, branded delivery packaging options, and PO/invoicing for business accounts.',
      },
    ],
    formHeading: 'Plan your food & beverage Shopify store',
    formSubtext: 'Tell us about your products, channels and fulfilment setup. We\'ll send you a proposal within 24 hours.',
  },

  {
    slug: 'home-decor',
    metaTitle: 'Shopify Development for Home Decor & Furniture | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for home decor, furniture and interiors brands. Room visualisation, custom configuration, freight shipping, and high-converting product pages.',
    eyebrow: 'SHOPIFY FOR HOME & FURNITURE',
    h1: 'Shopify Development for Home Decor & Furniture Brands',
    subtext: 'Home and furniture is a high-consideration, high-value category. Shoppers spend weeks deciding. We build Shopify stores with visualisation tools, custom configurators, and trust signals that turn long research journeys into confident purchases.',
    features: [
      'Room visualisation and AR product placement',
      'Fabric, finish and dimension customisation',
      'Freight and large item shipping calculator',
      'Delivery lead time and availability display',
      'Swatch sample request flow',
      'Room bundle and set builder',
      'Interior design inspiration blog',
      'Trade and contract account gating',
      'Custom measurement input for made-to-order',
      'White glove delivery and assembly options',
      'Click-and-collect and showroom integration',
      'Damage-in-transit returns management',
    ],
    challenges: [
      {
        title: 'Long purchase consideration cycles',
        body: 'Furniture shoppers visit a store 6–8 times before buying. Your site needs to support that journey — save lists, swatch ordering, comparison tools — not push for an immediate sale that\'s never going to happen.',
      },
      {
        title: 'Visualisation uncertainty',
        body: 'Shoppers can\'t be sure how a piece will look in their home. AR try-on, room scene imagery and lifestyle photography dramatically reduce return rates and post-purchase doubt.',
      },
      {
        title: 'Complex shipping and fulfilment',
        body: 'Large items require freight shipping, delivery windows, and sometimes installation. Standard Shopify shipping rules don\'t handle this well. We build shipping zones, surcharges, and delivery booking flows that match your logistics.',
      },
      {
        title: 'Trade and wholesale accounts',
        body: 'Many furniture brands sell to interior designers and trade accounts at different pricing. We build Shopify Plus B2B portals with gated access, trade pricing, and net payment terms alongside the public storefront.',
      },
    ],
    faqs: [
      {
        question: 'Can you add room visualisation or AR to our Shopify store?',
        answer: 'Yes. We integrate with platforms like Threekit, Zakeke or Shopify\'s native AR features to let shoppers see products in their space. The level of sophistication depends on your 3D asset availability and budget.',
      },
      {
        question: 'How do you handle freight and oversized item shipping?',
        answer: 'We build custom shipping rate logic — weight-based freight calculations, postcode-level delivery zones, surcharges for remote locations — and integrate with freight carriers via API for real-time rates.',
      },
      {
        question: 'Can you build fabric and finish configurators?',
        answer: 'Yes. We build product configurators where customers choose fabric, colour, finish and dimensions — with live price updates and a visual preview. Configuration data flows to your production team in a structured format.',
      },
      {
        question: 'Do you build trade and interior designer portals?',
        answer: 'Yes. With Shopify Plus, we build gated trade portals with application flows, trade pricing tiers, project-based ordering, and dedicated account management tools.',
      },
      {
        question: 'Can you integrate with our showroom or ERP system?',
        answer: 'Yes. We integrate Shopify with showroom POS systems, ERP platforms (NetSuite, SAP), and custom inventory and fulfilment systems via REST or GraphQL APIs.',
      },
    ],
    formHeading: 'Improve your home & furniture Shopify store',
    formSubtext: 'Tell us about your product range and business goals. We\'ll send you a tailored proposal within 24 hours.',
  },

  {
    slug: 'sports-fitness',
    metaTitle: 'Shopify Development for Sports & Fitness Brands | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for sports, fitness equipment, supplements and activewear brands. Performance builds, B2B gym orders, subscription supplements, and more.',
    eyebrow: 'SHOPIFY FOR SPORTS & FITNESS',
    h1: 'Shopify Development for Sports & Fitness Brands',
    subtext: 'Sports and fitness e-commerce spans equipment, supplements, apparel and digital products — each with different fulfilment models, compliance requirements and customer journeys. We build Shopify stores that handle the complexity.',
    features: [
      'Sports and fitness performance-first builds',
      'Complex sizing and fit guide tools',
      'Supplement subscription and auto-ship',
      'B2B gym and team bulk ordering',
      'Equipment bundle and kit builders',
      'Video-led product demonstration pages',
      'Training guide and digital product downloads',
      'Loyalty and achievements programme',
      'Influencer and ambassador discount tiers',
      'International shipping for heavy equipment',
      'Regulatory-compliant supplement product pages',
      'Pre-order and back-in-stock notifications',
    ],
    challenges: [
      {
        title: 'Complex sizing and performance specs',
        body: 'Sports gear is technical. Sizing varies by sport, fit style and body type. We build size guides, fit charts and filtering tools that reduce sizing-related returns — one of the biggest cost drivers in sports retail.',
      },
      {
        title: 'Supplement compliance',
        body: 'Supplement product pages must tread carefully — what you can claim, what certifications to display, and what disclaimers are needed. We build compliant pages that still convert, without crossing regulatory lines.',
      },
      {
        title: 'B2B gym and team orders',
        body: 'Supplying gyms, sports clubs and corporate wellness programmes requires different pricing, quantity handling and invoicing than consumer sales. We build Shopify Plus B2B portals alongside your DTC store.',
      },
      {
        title: 'Driving supplement subscriptions',
        body: 'Supplements are a natural subscription category — monthly protein, pre-workout, vitamins. But most brands leave this revenue on the table. We build subscription flows that convert one-time buyers into subscribers.',
      },
    ],
    faqs: [
      {
        question: 'Can you build supplement subscription flows on Shopify?',
        answer: 'Yes. We integrate Recharge or Skio to power supplement subscriptions with flexible frequency options, easy customer management (pause, skip, swap) and subscribe-and-save pricing that converts.',
      },
      {
        question: 'Do you handle B2B orders for gyms and sports clubs?',
        answer: 'Yes. With Shopify Plus we build B2B portals with volume pricing, net terms, bulk order forms, and company account management — running alongside your DTC storefront.',
      },
      {
        question: 'Can you build equipment configuration and bundle tools?',
        answer: 'Yes — home gym builders, equipment bundles, and kit configurators are a natural fit for the category. We build tools that let shoppers assemble a complete setup with guided recommendations.',
      },
      {
        question: 'How do you handle heavy equipment international shipping?',
        answer: 'We build weight-based freight rate logic, carrier integrations, and customs documentation support for shipping heavy goods internationally — including country-specific restrictions and duty calculations.',
      },
      {
        question: 'Can you integrate training content and digital downloads?',
        answer: 'Yes. We integrate digital product delivery for training programmes, meal plans and guides — either via Shopify Digital Downloads or third-party platforms like Teachable or custom portals.',
      },
    ],
    formHeading: 'Plan your sports & fitness Shopify store',
    formSubtext: 'Tell us about your product range and audience. We\'ll send you a tailored Shopify proposal within 24 hours.',
  },

  {
    slug: 'pets',
    metaTitle: 'Shopify Development for Pet Supply Stores | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for pet food, supplies and accessories brands. Breed-specific filtering, subscription food delivery, and conversion-focused pet product builds.',
    eyebrow: 'SHOPIFY FOR PET SUPPLIES',
    h1: 'Shopify Development for Pet Supply Stores',
    subtext: 'Pet owners are among the most loyal and high-frequency online shoppers. We build Shopify stores that match products to the right pet, drive repeat food subscriptions, and build the kind of trust that keeps customers coming back for years.',
    features: [
      'Breed and pet size product filtering',
      'Subscription pet food and auto-ship',
      'Pet profile builder for personalised recommendations',
      'Age and life-stage product segmentation',
      'Vet-approved and certification badge display',
      'Food calculator (daily portion by weight)',
      'Bundle and starter kit builders',
      'Automated reorder reminders',
      'Regulated supplement product pages',
      'Gift registry for new pet owners',
      'Loyalty scheme with milestone rewards',
      'Subscription pause and snooze options',
    ],
    challenges: [
      {
        title: 'Matching products to the right pet',
        body: 'A small breed dog and a large breed dog have completely different needs. Products that show to both without filtering create confusion and returns. We build breed, size and life-stage filters that show shoppers only relevant products.',
      },
      {
        title: 'Driving food subscriptions',
        body: 'Pet food is one of the highest-frequency subscription categories available — owners buy every 2–4 weeks, indefinitely. Yet most pet stores don\'t convert customers to auto-ship. We build subscription flows designed specifically for this.',
      },
      {
        title: 'Trust for health products',
        body: 'Pet owners are protective. Supplements, medications and specialist foods need trust signals — vet approval, ingredient transparency, certifications — displayed prominently to overcome scepticism.',
      },
      {
        title: 'Retention and loyalty',
        body: 'The LTV of a loyal pet owner is exceptional — they\'ll shop with you for the life of their pet, often 10–15 years. Loyalty programmes, milestone rewards, and proactive reorder reminders are crucial retention tools we build in.',
      },
    ],
    faqs: [
      {
        question: 'Can you build breed and pet-size filtering on Shopify?',
        answer: 'Yes. We build tag-based and metafield-driven filtering that lets shoppers filter by breed, species, size, age and life stage — showing only the products relevant to their specific pet.',
      },
      {
        question: 'Can you build pet food subscription with flexible scheduling?',
        answer: 'Yes. We integrate Recharge or Skio for pet food subscriptions with portion-size calculators that recommend the right quantity and frequency, plus easy customer controls for pause, skip and weight adjustments.',
      },
      {
        question: 'How do you build product recommendations for specific breeds?',
        answer: 'We build pet profile funnels where owners input breed, age, weight and health conditions — the store then filters and ranks products by relevance. This dramatically improves conversion and reduces wrong-product returns.',
      },
      {
        question: 'Can you display vet approval and certifications on product pages?',
        answer: 'Yes. We design trust badge systems for vet-approved, AAFCO compliant, grain-free, and other certifications — with hover tooltips that explain what each certification means. These measurably improve conversion for health-focused pet products.',
      },
      {
        question: 'Can you build a loyalty programme for repeat pet shoppers?',
        answer: 'Yes. We integrate loyalty platforms (Smile.io, LoyaltyLion) with milestone rewards — first subscription, annual birthday rewards for their pet, referral bonuses — tailored to the long-term nature of the pet customer relationship.',
      },
    ],
    formHeading: 'Improve your pet supply Shopify store',
    formSubtext: 'Tell us about your products and customer base. We\'ll send you a custom Shopify proposal within 24 hours.',
  },

  {
    slug: 'fashion-apparel',
    metaTitle: 'Shopify Development for Fashion & Apparel Brands | Miracle Websoft',
    metaDescription: 'Custom Shopify stores for fashion, apparel, activewear, streetwear and boutique brands. Mobile-first PDPs, size guides, drop systems, TikTok Shop and CRO. 60+ fashion brands served.',
    eyebrow: 'SHOPIFY FOR FASHION & APPAREL',
    h1: 'Shopify Development for Fashion & Apparel Brands',
    subtext: 'Fashion ecommerce is our deepest specialism — 60+ clothing brands served across DTC startups, scaling activewear labels, streetwear drops and luxury boutiques. We build mobile-first Shopify stores that convert TikTok and Instagram traffic into paying customers, reduce returns through fit tools, and handle product drops without falling over.',
    features: [
      'Mobile-first PDPs built for paid social traffic',
      'Size guide and fit recommendation tools',
      'Product drop infrastructure — waitlists, timers, pre-orders',
      'TikTok Shop and Instagram Shopping sync',
      'Advanced filtering by size, colour, occasion and style',
      'Wishlist, save-for-later and recently viewed',
      'Shoppable lookbook and editorial content pages',
      'Klaviyo email and SMS flows for launches',
      'Loyalty, referral and ambassador programmes',
      'Shopify Plus and headless storefronts for scaling brands',
      'WooCommerce, Magento and BigCommerce migrations',
      'Speed and Core Web Vitals optimisation',
    ],
    challenges: [
      {
        title: 'Mobile speed kills fashion conversion',
        body: '81% of fashion traffic is mobile. If your PDP takes more than 2 seconds to load, paid social traffic bounces before they see the product. We build with sub-1.5s mobile load times as a non-negotiable.',
      },
      {
        title: 'Fit uncertainty drives returns',
        body: 'Fashion has the highest return rate in ecommerce — averaging 25%. Most of it is fixable: detailed size guides, fit recommenders, model-stat displays and review-driven sizing reduce returns measurably.',
      },
      {
        title: 'Product drops break standard themes',
        body: 'Drop launches, waitlists, sell-out handling and pre-orders need real infrastructure. Without it, drop day is chaos and your most loyal fans miss out. We build drop systems that handle traffic spikes and queue logic.',
      },
      {
        title: 'Cart abandonment at 77%',
        body: 'Fashion cart abandonment is the highest of any ecommerce category. Most of it is fixable — better PDPs, faster checkout, smart upsells and abandonment recovery. We treat it as a development problem, not a marketing one.',
      },
    ],
    faqs: [
      {
        question: 'Do you specialise in fashion brands?',
        answer: 'Yes — fashion and apparel is our deepest specialism. We have served 60+ clothing brands across DTC, activewear, streetwear, boutique and luxury segments. Our case studies, sub-niche industry pages and design language all reflect this depth.',
      },
      {
        question: 'Can you build product drop systems on Shopify?',
        answer: 'Yes. We build full drop infrastructure — waitlist signups, countdown timers, pre-order logic, sell-out handling, queue management for high-traffic spikes, and post-drop email automation — using a mix of Shopify Functions and custom apps.',
      },
      {
        question: 'How do you reduce return rates for clothing?',
        answer: 'Detailed interactive size guides, fit recommendation tools (size, height, body shape inputs), high-quality product video, review-based fit signals and AR try-on where appropriate. These typically cut return rates by 15–30% within a quarter.',
      },
      {
        question: 'Can you migrate our WooCommerce or Magento store to Shopify?',
        answer: 'Yes. We migrate full product catalogues, customer history, order data and SEO URLs from WooCommerce, Magento, BigCommerce or any custom platform — with zero downtime and zero traffic loss. We have done this for 100+ fashion brands.',
      },
      {
        question: 'Which fashion sub-niches do you have specific experience in?',
        answer: 'Women\'s clothing and boutiques, activewear and athleisure, streetwear, sustainable fashion, gym wear, yoga and wellness apparel, kids\' clothing, plus-size and inclusive fashion, sportswear, menswear, occasion and luxury wear, and multi-brand online boutiques. Each has a dedicated industry page with specific pain points and case studies.',
      },
    ],
    formHeading: 'Improve your fashion Shopify store',
    formSubtext: 'Tell us about your brand, channels and growth goals. We\'ll send you a tailored Shopify proposal within 24 hours.',
  },

  {
    slug: 'b2b-wholesale',
    metaTitle: 'Shopify B2B & Wholesale Development Agency | Miracle Websoft',
    metaDescription: 'Shopify Plus B2B and wholesale store development. Gated portals, volume pricing tiers, net payment terms, custom invoicing, ERP integration and trade account management.',
    eyebrow: 'SHOPIFY PLUS FOR B2B & WHOLESALE',
    h1: 'Shopify B2B & Wholesale Development',
    subtext: 'Selling to businesses is fundamentally different from selling to consumers — different pricing, different payment terms, different procurement workflows. We build Shopify Plus B2B stores with gated trade portals, volume pricing tiers, net terms, ERP integration and the kind of dedicated account experience that wins long-term wholesale clients.',
    features: [
      'Shopify Plus B2B portal with gated trade access',
      'Customer-specific catalogues and price lists',
      'Volume and tiered pricing rules',
      'Net 15, 30, 60 payment term workflows',
      'Custom invoicing and PO upload',
      'Quote request and approval flows',
      'Bulk order entry and CSV upload',
      'Reorder and order template tools',
      'Multi-buyer company accounts with role permissions',
      'ERP and inventory system integration (NetSuite, SAP, Brightpearl)',
      'Combined B2B + DTC storefront on a single Shopify Plus',
      'Account manager dashboards for sales reps',
    ],
    challenges: [
      {
        title: 'Different buyers, different storefronts',
        body: 'A retailer logging in to reorder needs a fundamentally different experience than a consumer browsing the public site. Gated catalogues, custom pricing, role-based permissions and reorder-first UX matter — and Shopify Plus B2B handles this natively when set up correctly.',
      },
      {
        title: 'Net payment terms and credit handling',
        body: 'Wholesale customers expect net 30 or 60 terms, not Stripe checkouts. We build payment-term workflows, automated invoicing, credit limit checks and AR sync with your accounting platform — so finance teams stay in control.',
      },
      {
        title: 'Bulk ordering at speed',
        body: 'A trade buyer placing a 200-line restock order does not click through 200 product pages. We build bulk order forms, CSV upload, reorder-from-history tools and SKU-based quick add — so wholesale orders close in minutes, not hours.',
      },
      {
        title: 'ERP and inventory truth',
        body: 'B2B operations run on ERP, not on Shopify. We build real-time inventory sync, customer pricing pull-down and order push-up between Shopify Plus and NetSuite, SAP, Brightpearl, Linnworks or custom systems — so the storefront and your back office never disagree.',
      },
    ],
    faqs: [
      {
        question: 'Do we need Shopify Plus to build a B2B store?',
        answer: 'For most serious B2B operations, yes. Shopify Plus includes the native B2B suite — company accounts, customer-specific catalogues, payment terms, quote requests — that standard Shopify cannot match. We can build limited B2B on standard Shopify with apps, but Plus is the right home for any meaningful wholesale operation.',
      },
      {
        question: 'Can you run B2B and DTC on the same store?',
        answer: 'Yes — and we usually recommend it. Shopify Plus lets you run a public DTC storefront alongside a gated B2B portal, sharing inventory, products and reporting. Two separate stores creates double the maintenance for very little benefit.',
      },
      {
        question: 'How do you handle volume pricing and tiered discounts?',
        answer: 'We build customer-segment pricing using Shopify Plus B2B catalogues and price lists — different customers see different prices on the same SKUs based on their tier, location or contract. Volume break pricing within a single order is built using Shopify Functions.',
      },
      {
        question: 'Can you integrate with our ERP or inventory system?',
        answer: 'Yes. We have built integrations with NetSuite, SAP, Brightpearl, Linnworks, Cin7, Katana and custom in-house systems — using either pre-built connectors or custom middleware via Shopify\'s GraphQL Admin API.',
      },
      {
        question: 'How long does a B2B Shopify Plus build take?',
        answer: 'A focused B2B-only build typically runs 8–12 weeks. A combined B2B + DTC build with ERP integration runs 12–20 weeks depending on integration complexity. We provide a fixed-price proposal with a phased delivery plan before any work begins.',
      },
    ],
    formHeading: 'Plan your B2B Shopify store',
    formSubtext: 'Tell us about your buyers, pricing structure and integrations. We\'ll send you a fixed-price Shopify Plus proposal within 24 hours.',
  },

  {
    slug: 'subscription-dtc',
    metaTitle: 'Shopify Subscription & DTC Development | Miracle Websoft',
    metaDescription: 'Shopify development for subscription boxes, DTC brands and recurring revenue businesses. Recharge, Skio, Loop integration, custom subscription portals, churn-reduction flows.',
    eyebrow: 'SHOPIFY FOR SUBSCRIPTION & DTC',
    h1: 'Shopify Subscription & DTC Development',
    subtext: 'Subscription is the highest-LTV business model in ecommerce — and the hardest to get right. We build Shopify subscription stores with the right app stack (Recharge, Skio, Loop, Smartrr), custom subscriber portals, churn-reduction logic and the personalisation that turns trial buyers into long-term subscribers.',
    features: [
      'Subscription strategy and app stack selection',
      'Recharge, Skio, Loop and Smartrr integration',
      'Custom subscriber portal with self-service controls',
      'Subscribe-and-save discount logic',
      'Subscription bundle and box configurator',
      'Pause, skip, swap and frequency change flows',
      'Reactivation and win-back email sequences',
      'Churn reduction prompts at cancel flow',
      'Build-a-box and curated box experiences',
      'Pre-paid and gift subscription support',
      'Klaviyo segmentation by subscription state',
      'Dunning, failed payment and retention workflows',
    ],
    challenges: [
      {
        title: 'Choosing the right subscription app',
        body: 'Recharge, Skio, Loop, Smartrr — they are not interchangeable. Each has different pricing, customer portal flexibility, app integrations and exit costs. Picking wrong adds 6 months of pain. We pick based on AOV, churn pattern, product type and team size — not on what is trendy.',
      },
      {
        title: 'Reducing voluntary churn',
        body: 'Most subscription brands lose 5–10% of subscribers per month — a leaking bucket no acquisition spend can fix. Pause-instead-of-cancel flows, swap-product offers, smart frequency adjustments and reactivation sequences cut churn measurably.',
      },
      {
        title: 'Failed payments quietly killing LTV',
        body: 'Up to 30% of subscription cancellations are involuntary — failed cards, expired details. Without smart dunning (multi-attempt retries, email and SMS recovery, payment update prompts) you lose subscribers who wanted to keep buying.',
      },
      {
        title: 'Customer portals that feel like an afterthought',
        body: 'The default portals on most subscription apps are bare-bones and live on a third-party domain. We build embedded, branded portals with full self-service — pause, skip, swap, frequency, address — so subscribers stay in control without contacting support.',
      },
    ],
    faqs: [
      {
        question: 'Which subscription app should we use on Shopify?',
        answer: 'It depends on your AOV, churn rate, product type and existing app stack. Skio is strong for newer brands wanting modern UX. Recharge has the deepest integration ecosystem. Loop is built for retention-first operations. Smartrr fits brands wanting deep customer insights. We will recommend based on your specific situation — not push a single tool.',
      },
      {
        question: 'Can you build a custom subscription portal on our domain?',
        answer: 'Yes. We build embedded subscriber portals on your Shopify storefront — branded, on-domain, with full self-service for pause, skip, swap, frequency change, address update, payment method change and order history. Most off-the-shelf portals look generic; ours match your brand.',
      },
      {
        question: 'How do you reduce subscription churn?',
        answer: 'A combination of pause-instead-of-cancel offers, product swap incentives at cancel, smart frequency suggestions, win-back email and SMS sequences, and dunning workflows for failed payments. We typically reduce voluntary churn by 15–25% within the first 90 days post-launch.',
      },
      {
        question: 'Can you migrate subscriptions from another platform?',
        answer: 'Yes — including subscriber records, billing schedules, payment methods and customer portal data — from Recharge to Skio, Skio to Recharge, ReCharge classic to ReCharge new, or from custom platforms. Migration is delicate and we plan it with zero subscriber disruption.',
      },
      {
        question: 'Do you build build-a-box or curated subscription boxes?',
        answer: 'Yes. We build build-a-box configurators (where subscribers choose their items each cycle) and curated box experiences (where you ship a themed selection). Both work on Shopify with the right subscription app and custom storefront logic.',
      },
    ],
    formHeading: 'Improve your subscription Shopify store',
    formSubtext: 'Tell us about your product, current platform and subscriber goals. We\'ll send you a tailored Shopify proposal within 24 hours.',
  },

  {
    slug: 'print-on-demand',
    metaTitle: 'Shopify Print on Demand Development | Miracle Websoft',
    metaDescription: 'Shopify development for print on demand stores. Printful, Printify, Gelato integration, mockup generators, custom POD workflows and high-volume catalogue management.',
    eyebrow: 'SHOPIFY FOR PRINT ON DEMAND',
    h1: 'Shopify Print on Demand Development',
    subtext: 'Print on demand is a great low-inventory business model — until you scale. Then catalogue size, mockup quality, supplier sync, return handling and margin all become development problems. We build Shopify POD stores that handle thousands of SKUs cleanly, sync flawlessly with Printful, Printify, Gelato or your custom supplier, and convert at the rate a serious POD brand deserves.',
    features: [
      'Printful, Printify, Gelato and Customcat integration',
      'Custom POD supplier API integration',
      'Bulk product creation and catalogue management',
      'Custom mockup generator embedded in storefront',
      'Personalisation and custom text/upload flows',
      'Variant explosion handling (colour × size × style)',
      'Smart product filtering for large catalogues',
      'Print-area preview tools for buyers',
      'Multi-supplier routing for fulfilment optimisation',
      'Returns and reprint workflow automation',
      'Custom design upload and approval flows',
      'Marketplace and POD multi-channel sync',
    ],
    challenges: [
      {
        title: 'Catalogue at scale',
        body: 'A serious POD brand can have 5,000+ SKUs — every design × product × colour × size combination. Standard Shopify product management buckles. We build catalogue tools, bulk editing flows and metafield-driven structure that keeps a 5K-product store manageable.',
      },
      {
        title: 'Supplier sync without manual work',
        body: 'Without proper integration, a Printful or Printify store means hours of manual product creation, image management and stock sync. We build automated pipelines that push designs, generate mockups, sync inventory and route orders without daily human touch.',
      },
      {
        title: 'Mockup quality and conversion',
        body: 'POD lives or dies on mockup quality. Generic supplier mockups convert poorly. We build either custom mockup generators (so your designs appear on lifestyle imagery) or photoshop pipelines that batch-produce branded product imagery at scale.',
      },
      {
        title: 'Margin compression on personalised products',
        body: 'Personalisation drives premium pricing — but only if the upload, preview and approval flow is frictionless. We build personalisation tools (text, upload, position) with live preview that customers can actually use, lifting AOV without breaking fulfilment.',
      },
    ],
    faqs: [
      {
        question: 'Which POD supplier should we use — Printful, Printify or Gelato?',
        answer: 'Each has trade-offs. Printful has the best quality and tightest Shopify integration but higher base costs. Printify has the lowest base costs but variable supplier quality. Gelato has the best global fulfilment network for international brands. We recommend based on your margin target, geography and quality bar.',
      },
      {
        question: 'Can you integrate a custom mockup generator on Shopify?',
        answer: 'Yes. We build mockup generators embedded directly in the product page — customers upload artwork, position it on the product, see a preview and add to cart. The output flows cleanly to your supplier with print files attached.',
      },
      {
        question: 'How do you handle thousands of POD products on Shopify?',
        answer: 'We use metafield-driven catalogue architecture, bulk editing tools (Matrixify, custom CSV pipelines), smart collections by metafield filters and lazy-loaded product feeds — so a 5,000-product store stays fast and manageable. Standard Shopify admin breaks at scale; ours does not.',
      },
      {
        question: 'Can you build personalisation and custom text products?',
        answer: 'Yes — text personalisation, image upload, position and font selection, with live preview. Personalisation data flows to the supplier as structured metadata so fulfilment is automated, not manual.',
      },
      {
        question: 'Do you handle multi-supplier POD routing?',
        answer: 'Yes. For brands using multiple POD suppliers (e.g. Printful for apparel, Gelato for posters), we build order routing logic that splits multi-product orders to the right supplier automatically, with combined customer-facing tracking.',
      },
    ],
    formHeading: 'Plan your print-on-demand Shopify store',
    formSubtext: 'Tell us about your suppliers, catalogue size and personalisation needs. We\'ll send you a tailored Shopify proposal within 24 hours.',
  },
]

export default shopifyServices

export function getShopifyService(slug: string): ShopifyServiceData | undefined {
  return shopifyServices.find(s => s.slug === slug)
}
