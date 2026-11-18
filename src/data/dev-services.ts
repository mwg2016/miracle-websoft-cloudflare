// Full-stack, integration and business-software services, served at
// /services/<slug> by src/app/services/[slug]/page.tsx.
//
// Case studies are only included where a real project exists in
// src/data/jobs.ts. Don't invent client results to fill the slot; the
// section is skipped when `caseStudy` is omitted.

import type { ServiceLandingData, ServiceStep } from './ai-services'

const buildProcess: ServiceStep[] = [
  {
    title: 'Free technical consultation',
    body: 'We go through what you need, what exists today and what has to connect to what. You get an honest view of the simplest way to build it.',
  },
  {
    title: 'Written scope and fixed price',
    body: 'Screens, data model, integrations, permissions and milestones written down before any code, so you know exactly what you are paying for.',
  },
  {
    title: 'Build in milestones',
    body: 'You see working software on a staging link early and often. Feedback goes in as we go instead of in one big reveal at the end.',
  },
  {
    title: 'Launch, hand over, support',
    body: 'Deployment, documentation, admin training and the source code in your repository. Ongoing support is available but never required.',
  },
]

const fixProcess: ServiceStep[] = [
  {
    title: 'Access and audit',
    body: 'We review the codebase, hosting, logs and the issue list, then confirm what is broken, what is risky and what can wait.',
  },
  {
    title: 'Prioritised plan',
    body: 'A short written list ranked by business impact, with an estimate for each item, so you choose what gets fixed first.',
  },
  {
    title: 'Fix on staging, then live',
    body: 'Changes are tested on a copy of the site first, with backups taken before anything touches production.',
  },
  {
    title: 'Monitor and maintain',
    body: 'Updates, uptime checks, security patches and a monthly block of developer hours for the small things that keep coming up.',
  },
]

const R = {
  fullStack: { title: 'Full Stack Development', desc: 'React, Node.js, Laravel and PHP web applications, dashboards and portals.', href: '/services/full-stack-development' },
  api: { title: 'API Integration', desc: 'Connect CRMs, ERPs, LMSs, ecommerce platforms and payment providers.', href: '/services/api-integration' },
  ownSoftware: { title: 'Custom Software (Replace SaaS)', desc: 'Own a custom alternative to the per-user software you rent today.', href: '/services/custom-software-development' },
  crm: { title: 'CRM Development & SuiteCRM', desc: 'Custom CRM builds, SuiteCRM modules, workflows and integrations.', href: '/services/crm-development' },
  moodle: { title: 'Moodle LMS Development', desc: 'Moodle plugins, themes, web services and WordPress integration.', href: '/services/moodle-development' },
  laravel: { title: 'Laravel & PHP Development', desc: 'Laravel, Yii2 and custom PHP applications, built or rescued.', href: '/services/laravel-development' },
  wpPlugin: { title: 'WordPress Plugin Development', desc: 'Custom WordPress and WooCommerce plugins that replace paid add-ons.', href: '/services/wordpress-plugin-development' },
  maintenance: { title: 'Maintenance & Bug Fixing', desc: 'Debugging, speed fixes, updates and ongoing technical support.', href: '/services/website-maintenance' },
  shopifyApps: { title: 'Shopify App Development', desc: 'Custom Shopify apps, Admin API, GraphQL, webhooks and Functions.', href: '/services/shopify-app-development' },
  ai: { title: 'AI Business Automation', desc: 'Automate repetitive work with AI-assisted workflows.', href: '/services/ai/ai-business-automation' },
  customWeb: { title: 'Custom Web Development', desc: 'Portals, dashboards and internal tools for your business.', href: '/services/custom-web-development' },
  wordpress: { title: 'WordPress Development', desc: 'WordPress and WooCommerce sites, built cleanly.', href: '/services/wordpress-development' },
}

export const devServices: ServiceLandingData[] = [
  // ─── 1. Full stack ──────────────────────────────────────────────────────────
  {
    slug: 'full-stack-development',
    metaTitle: 'Full Stack Web Development: React, Node.js, Laravel, PHP | Miracle Websoft',
    metaDescription: 'Hire a full stack development team for custom web applications, dashboards, admin panels and portals built with React, Node.js, Laravel, PHP and MySQL. 10+ years, Top Rated Plus.',
    eyebrow: 'FULL STACK WEB APPLICATION DEVELOPMENT',
    h1: 'Full Stack Web Application Development',
    subtext: 'Responsive, database-driven web applications built end to end with React, Node.js, Laravel and PHP: customer portals, admin panels, dashboards and SaaS products, plus modernising the system you already have.',
    serviceType: 'Full stack web application development',
    problem: {
      title: 'Off-the-shelf tools stop fitting the way you work',
      body: 'Spreadsheets, disconnected apps and an old system nobody wants to touch. Every workaround costs time, and the original developer is long gone. You need someone who can work on both the front end and the back end without handing off between three freelancers.',
    },
    solution: {
      title: 'One team that owns the whole stack',
      body: 'We design the database, build the API and backend logic, and ship the interface your team or customers actually use. The same people handle authentication, roles, integrations, deployment and support, so nothing falls between the gaps.',
    },
    benefits: [
      'Custom dashboards, admin panels and business portals',
      'Authentication, user management and role-based permissions',
      'Clean database design that scales with your data',
      'Modernise or troubleshoot an existing application',
      'Responsive interfaces that work on every device',
      'Source code and documentation you own',
    ],
    deliverables: [
      'Technical scope, data model and architecture notes',
      'React.js or server-rendered front end',
      'Node.js, Laravel or PHP backend and REST/GraphQL API',
      'MySQL or Firebase database design and migrations',
      'Login, roles, permissions and audit trail',
      'Deployment, documentation and admin handover',
    ],
    technologies: [
      { group: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
      { group: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Yii2', 'REST APIs', 'GraphQL', 'AJAX'] },
      { group: 'Data & services', items: ['MySQL', 'Firebase', 'Authentication', 'Webhooks', 'Cloud hosting'] },
    ],
    process: buildProcess,
    caseStudy: {
      tag: 'Long-term full stack retainer',
      metric: '2,942',
      metricLabel: 'hours delivered',
      title: 'Multi-year development retainer for an ecommerce brand: new features, third-party integrations, A/B testing and performance work, all rated 5 stars.',
      bullets: [
        'Full-stack feature builds and third-party integrations',
        'A/B testing implementations and performance maintenance',
        '“Exceptional technical skills… and clear communication throughout.”',
      ],
      duration: 'Multi-year engagement',
    },
    faqs: [
      {
        question: 'What technologies do you use for full stack development?',
        answer: 'React.js and Next.js on the front end; Node.js, Laravel, PHP and Yii2 on the back end; MySQL and Firebase for data. We pick the stack that suits your project and your team, not the one that is fashionable this month.',
      },
      {
        question: 'Can you take over an existing application someone else built?',
        answer: 'Yes. Taking over, fixing and modernising existing PHP, Laravel, Node.js and React applications is a large part of our work. We start with a short audit so you know what state the code is in before committing to anything.',
      },
      {
        question: 'Do I own the code?',
        answer: 'Yes. The source code lives in your repository and the application runs on your hosting account. There is no licence fee and no lock-in to us.',
      },
      {
        question: 'How much does a custom web application cost?',
        answer: 'It depends on the number of screens, user roles and integrations. Small internal tools and dashboards usually start from $1,500. After a free consultation you get a written fixed-price scope, not an open-ended hourly estimate.',
      },
      {
        question: 'Do you offer ongoing support after launch?',
        answer: 'Yes, as monthly support blocks for updates, fixes and new features. It is optional; you can also take the documentation and code to your own team.',
      },
    ],
    formHeading: 'Tell us about your application',
    formSubtext: 'New build or existing system, a rough description is enough. We reply within 24 hours with questions or a scope.',
    related: [R.api, R.ownSoftware, R.laravel],
  },

  // ─── 2. API integration ─────────────────────────────────────────────────────
  {
    slug: 'api-integration',
    metaTitle: 'API Integration & Backend Development Services | Miracle Websoft',
    metaDescription: 'REST, GraphQL and webhook API integrations for CRMs, ERPs, LMSs, Shopify, payment, subscription and shipping providers. Reliable data sync between your business systems.',
    eyebrow: 'API INTEGRATION & BACKEND DEVELOPMENT',
    h1: 'API Integration & Backend Development',
    subtext: 'Connect your applications, platforms and databases through secure, reliable integrations: REST, GraphQL and webhooks between your CRM, ERP, LMS, ecommerce store, payment and shipping providers.',
    serviceType: 'API integration',
    problem: {
      title: 'Your systems don’t talk to each other',
      body: 'Orders get re-typed into the ERP, leads are copied from forms into the CRM, and stock levels drift out of sync. Integrations that do exist break silently when an API changes, and nobody notices until a customer complains.',
    },
    solution: {
      title: 'Integrations built to be monitored, not forgotten',
      body: 'We build the connection, handle authentication, retries and rate limits, and log every sync so failures are visible. Where no API exists, we build custom endpoints and middleware to bridge the gap.',
    },
    benefits: [
      'Stop re-entering the same data in multiple systems',
      'Real-time sync with webhooks instead of manual exports',
      'Payment, subscription and shipping flows that just work',
      'Clear error logs and alerts when something fails',
      'Secure API authentication and key management',
      'Documentation your future developers can follow',
    ],
    deliverables: [
      'Integration map: systems, data fields and sync direction',
      'REST, GraphQL, JSON and webhook integrations',
      'Custom API endpoints and middleware',
      'CRM, ERP, LMS and ecommerce connectors',
      'Payment, subscription and shipping integrations',
      'Logging, retries, alerting and handover docs',
    ],
    technologies: [
      { group: 'Protocols', items: ['REST', 'GraphQL', 'JSON', 'Webhooks', 'OAuth 2.0', 'JWT'] },
      { group: 'Platforms', items: ['Shopify Admin API', 'WooCommerce', 'Moodle Web Services', 'SuiteCRM', 'HubSpot', 'Salesforce'] },
      { group: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Firebase', 'MySQL'] },
      { group: 'Payments & shipping', items: ['Stripe', 'PayPal', 'Subscriptions', 'Shipping carrier APIs'] },
    ],
    process: buildProcess,
    caseStudy: {
      tag: 'Third-party API integration',
      metric: '5.0',
      metricLabel: 'client rating',
      title: 'Custom eSIM management area inside a Shopify store, integrated with a third-party eSIM provider’s API.',
      bullets: [
        'Customers view, activate, top up and manage eSIMs from their account',
        'Provider API connected to Shopify customer data via metafields',
        'Customer-facing pages built in Liquid on top of the integration',
      ],
      duration: 'Delivered Apr 2025',
    },
    faqs: [
      {
        question: 'Which systems can you integrate?',
        answer: 'Anything with a usable API: Shopify, WooCommerce, Moodle, SuiteCRM, HubSpot, Salesforce, ERPs, payment gateways like Stripe and PayPal, shipping carriers, Firebase and custom databases. If a system has no API, we can often build one or use exports and webhooks to bridge it.',
      },
      {
        question: 'What happens when an integration fails?',
        answer: 'We build in retries, logging and alerts so a failed sync is visible immediately instead of discovered weeks later. You get a simple way to see what synced and what didn’t.',
      },
      {
        question: 'Can you fix an integration someone else built?',
        answer: 'Yes. API troubleshooting, upgrading deprecated API versions and stabilising flaky integrations is common work for us.',
      },
      {
        question: 'Do you use Zapier or build custom integrations?',
        answer: 'Both. If Zapier or Make does the job reliably, we will tell you. When volume, cost, security or complex logic make no-code tools a poor fit, we build a custom integration you own.',
      },
    ],
    formHeading: 'Which systems need to connect?',
    formSubtext: 'List the tools and what should move between them. We’ll reply with the simplest reliable way to connect them.',
    related: [R.fullStack, R.crm, R.shopifyApps],
  },

  // ─── 3. Own your software ──────────────────────────────────────────────────
  {
    slug: 'custom-software-development',
    metaTitle: 'Stop Paying Per-User Fees: Custom CRM, ERP & SaaS Alternatives | Miracle Websoft',
    metaDescription: 'Replace expensive per-user software subscriptions with custom software you own: CRM, ERP, invoicing, inventory, Shopify apps, WordPress plugins and SaaS. One-time development investment.',
    eyebrow: 'STOP RENTING SOFTWARE. START OWNING IT.',
    h1: 'Custom Software You Own, Instead of Per-User Subscriptions',
    subtext: 'In the AI era, custom software is faster and more affordable to build than ever. We build custom alternatives to the CRM, ERP, invoicing, inventory and SaaS tools you rent today, so you pay once for software built for your business.',
    serviceType: 'Custom software development',
    problem: {
      title: 'Licence fees grow every time your team grows',
      body: 'Per-user pricing means every new hire raises your software bill, forever. You pay for hundreds of features you never use, work around the ones you need, and your data sits in someone else’s platform on their terms.',
    },
    solution: {
      title: 'A one-time build, shaped around your workflow',
      body: 'We build only the features your business actually uses, in a system you own outright. No per-user licence fees for your own software. Hosting, maintenance and any third-party services you choose still have running costs, and we show you those numbers up front so the comparison is honest.',
    },
    benefits: [
      'No recurring per-user licence fees for your own software',
      'Only the features you use, designed around your process',
      'Your data in your own database, exportable any time',
      'Add users without your bill going up',
      'Integrates with the tools you keep',
      'AI-assisted development keeps build costs down',
    ],
    deliverables: [
      'Cost comparison: current subscriptions vs. build + running costs',
      'Custom CRM or ERP system',
      'Invoicing and billing platform',
      'Inventory and order management',
      'Custom Shopify apps or WordPress plugins replacing paid add-ons',
      'Business automation tools and custom SaaS applications',
    ],
    process: [
      {
        title: 'Audit what you pay for',
        body: 'Send us the tools, seat counts and monthly bills. We map which features your team actually uses and what a replacement would need to do.',
      },
      {
        title: 'Honest cost comparison',
        body: 'Build cost plus hosting and maintenance versus what you will keep paying in subscriptions. If replacing a tool doesn’t pay off, we tell you.',
      },
      {
        title: 'Build in milestones',
        body: 'The most-used workflows come first, so your team can start using the new system early while older data is migrated over.',
      },
      {
        title: 'Migrate, launch, own it',
        body: 'Data migration from the old tool, team training, source code in your repository and the app on your hosting account.',
      },
    ],
    faqs: [
      {
        question: 'Is custom software really cheaper than a subscription?',
        answer: 'Often, but not always. It usually pays off when you have many users on per-seat pricing, pay for a large plan to use a few features, or pay for several tools that a single custom system could replace. We do the cost comparison with you before you commit, including hosting and maintenance.',
      },
      {
        question: 'Will there be any ongoing costs?',
        answer: 'Yes, but small and predictable: hosting, optional maintenance and any third-party services you choose (for example email sending or payment fees). What goes away is the recurring per-user licence fee for your own software.',
      },
      {
        question: 'What kind of software can you replace?',
        answer: 'CRM and ERP systems, invoicing and billing platforms, inventory and order management, booking systems, internal dashboards, paid Shopify apps and WordPress plugins, and niche SaaS tools used by one team or department.',
      },
      {
        question: 'Can you migrate our data from the current tool?',
        answer: 'Yes. Most tools offer exports or an API. We migrate customers, records, history and files into the new system and check the numbers match before you switch over.',
      },
      {
        question: 'How long does it take?',
        answer: 'A focused replacement for a single tool typically takes a few weeks to a few months depending on scope. You get a fixed timeline in the written proposal.',
      },
    ],
    formHeading: 'Paying too much for an existing application?',
    formSubtext: 'Tell us which tool, how many users and what you pay. We’ll tell you honestly whether building your own makes sense.',
    related: [R.crm, R.fullStack, R.wpPlugin],
  },

  // ─── 4. CRM ────────────────────────────────────────────────────────────────
  {
    slug: 'crm-development',
    metaTitle: 'CRM Development & SuiteCRM Customization Services | Miracle Websoft',
    metaDescription: 'Custom CRM development and SuiteCRM customization: modules, workflows, reports, dashboards, performance optimization and integrations with your website, ecommerce store and ERP.',
    eyebrow: 'CRM DEVELOPMENT & SUITECRM CUSTOMIZATION',
    h1: 'CRM Development & SuiteCRM Customization',
    subtext: 'A CRM that matches how your sales and operations teams actually work: SuiteCRM customization, custom modules, workflows, reports and integrations, or a custom CRM built from scratch with no per-user fees.',
    serviceType: 'CRM development',
    problem: {
      title: 'Your team works around the CRM instead of in it',
      body: 'Fields that don’t fit your process, reports that need exporting to a spreadsheet, a slow system and no link to your website or store. People stop updating it, and the data stops being useful.',
    },
    solution: {
      title: 'Customise what you have, or build what you need',
      body: 'For SuiteCRM we build custom modules, workflows, logic hooks and reports, and tune performance. Where a hosted CRM is costing too much per seat, we build a focused custom CRM you own. Either way it connects to your website, forms, store and ERP.',
    },
    benefits: [
      'Custom modules and fields that match your process',
      'Automated workflows, reminders and assignments',
      'Reports and dashboards without spreadsheet exports',
      'Faster SuiteCRM performance and cleaner data',
      'Leads flow in from your website and store automatically',
      'No per-user fees on a custom-built CRM',
    ],
    deliverables: [
      'CRM process and data audit',
      'SuiteCRM custom modules, fields and layouts',
      'Workflows, logic hooks and scheduled jobs',
      'Custom reports, dashboards and database queries',
      'Website, ecommerce, email and ERP integrations',
      'Performance optimization, upgrades and documentation',
    ],
    technologies: [
      { group: 'CRM', items: ['SuiteCRM', 'SugarCRM CE', 'HubSpot', 'Salesforce', 'Custom CRM'] },
      { group: 'Backend', items: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Webhooks'] },
    ],
    process: buildProcess,
    faqs: [
      {
        question: 'Do you customize SuiteCRM?',
        answer: 'Yes: custom modules, fields, layouts, workflows, logic hooks, scheduled jobs, reports, dashboards, upgrades and performance optimization, plus integrations with external systems through the SuiteCRM API.',
      },
      {
        question: 'Should we customize an existing CRM or build our own?',
        answer: 'If an existing CRM covers most of your needs, customizing it is usually faster. If you pay high per-user fees for a hosted CRM and use a fraction of it, a custom CRM you own can cost less over time. We will give you an honest recommendation either way.',
      },
      {
        question: 'Can you connect our CRM to our website or Shopify store?',
        answer: 'Yes. Form submissions, orders, customers and support tickets can flow into the CRM automatically through APIs and webhooks.',
      },
      {
        question: 'Our SuiteCRM is slow. Can you fix it?',
        answer: 'Usually, yes. Common causes are unindexed database tables, heavy custom code, oversized audit tables and server configuration. We profile it first and fix the biggest bottlenecks.',
      },
    ],
    formHeading: 'Tell us about your CRM',
    formSubtext: 'Which CRM you use (if any), how many users, and what isn’t working. We reply within 24 hours.',
    related: [R.ownSoftware, R.api, R.fullStack],
  },

  // ─── 5. Moodle ─────────────────────────────────────────────────────────────
  {
    slug: 'moodle-development',
    metaTitle: 'Moodle LMS Development: Plugins, Themes & API Integration | Miracle Websoft',
    metaDescription: 'Moodle developers for custom plugins, themes, course management, enrollment and permissions, Moodle REST web services and WordPress-Moodle integration. Moodle work since 2017.',
    eyebrow: 'MOODLE LMS DEVELOPMENT',
    h1: 'Moodle LMS Development, Plugins & Integrations',
    subtext: 'Custom Moodle plugins and themes, course management, enrollment and permissions, Moodle RESTful web services and integrations with WordPress, ecommerce and your other business systems.',
    serviceType: 'Moodle LMS development',
    problem: {
      title: 'Moodle can do a lot, but not quite what you need',
      body: 'Default themes look dated, enrollment is manual, course sales live in a separate system and reporting means exporting CSVs. Plugins from the directory almost fit, and upgrades feel risky.',
    },
    solution: {
      title: 'Moodle shaped around your courses and learners',
      body: 'We build custom plugins and themes, automate enrollment and permissions, and connect Moodle to your website, store and CRM through its web services API, while keeping your site upgrade-safe.',
    },
    benefits: [
      'A modern, branded Moodle theme',
      'Automatic enrollment from purchases or your CRM',
      'Custom plugins instead of workarounds',
      'Single sign-on and WordPress integration',
      'Custom reports for learners, courses and completions',
      'Upgrade-safe customizations and clean code',
    ],
    deliverables: [
      'Custom Moodle themes and responsive layouts',
      'Custom Moodle plugins (local, block, activity, auth)',
      'Course management, enrollment and role permissions',
      'Moodle RESTful web services and API integration',
      'WordPress, WooCommerce and Shopify integration',
      'Upgrades, migrations, backups and course restores',
    ],
    technologies: [
      { group: 'Moodle', items: ['Moodle LMS', 'Moodle plugins', 'Moodle themes', 'Web Services (REST)', 'Moodle upgrades'] },
      { group: 'Integrations', items: ['WordPress', 'WooCommerce', 'Shopify', 'SSO', 'Payment gateways'] },
      { group: 'Stack', items: ['PHP', 'MySQL', 'JavaScript', 'Mustache templates'] },
    ],
    process: buildProcess,
    caseStudy: {
      tag: 'Moodle customization',
      metric: '5.0',
      metricLabel: 'on every Moodle job',
      title: 'Moodle site customization, course restores and ongoing improvements delivered on Upwork, each rated 5 stars by the client.',
      bullets: [
        'Moodle site customization and ongoing improvements',
        'Course backup and restore',
        'Server and database migration work',
      ],
      duration: 'Moodle work since 2017',
    },
    faqs: [
      {
        question: 'Can you build custom Moodle plugins?',
        answer: 'Yes: local plugins, blocks, activity modules, authentication and enrolment plugins, and report plugins, written to Moodle coding standards so they survive upgrades.',
      },
      {
        question: 'Can Moodle be connected to WordPress or WooCommerce?',
        answer: 'Yes. Common setups are selling courses through WooCommerce or Shopify with automatic Moodle enrollment, and single sign-on between WordPress and Moodle.',
      },
      {
        question: 'Do you work with the Moodle web services API?',
        answer: 'Yes. We use and extend Moodle’s RESTful web services to create users, enrol learners, sync course data and pull completion reports into other systems.',
      },
      {
        question: 'Can you upgrade our old Moodle site?',
        answer: 'Yes. We audit your plugins and customizations, upgrade on a staging copy first, fix what breaks and then upgrade production with a backup in place.',
      },
    ],
    formHeading: 'Tell us about your Moodle site',
    formSubtext: 'Your Moodle version, roughly how many learners, and what you need. We reply within 24 hours.',
    related: [R.api, R.wpPlugin, R.fullStack],
  },

  // ─── 6. Laravel / PHP ──────────────────────────────────────────────────────
  {
    slug: 'laravel-development',
    metaTitle: 'Laravel & PHP Development Services (incl. Yii2) | Miracle Websoft',
    metaDescription: 'Laravel and custom PHP web application development: new builds, APIs, admin panels, Yii2 customization, legacy PHP upgrades, performance troubleshooting and bug fixing.',
    eyebrow: 'LARAVEL & PHP DEVELOPMENT',
    h1: 'Laravel & PHP Application Development',
    subtext: 'New Laravel applications, REST APIs and admin panels, plus customizing, upgrading and rescuing existing Laravel, Yii2 and custom PHP systems.',
    serviceType: 'Laravel and PHP development',
    problem: {
      title: 'Your PHP application is hard to change',
      body: 'An old PHP version, a framework nobody on the team knows, slow pages and bugs that come back. Every change feels risky because there are no tests and little documentation.',
    },
    solution: {
      title: 'Modern, maintainable PHP',
      body: 'We build new applications in Laravel with clean structure and tests, and we take on existing Laravel, Yii2 and custom PHP code: audit it, fix the urgent issues, upgrade PHP and framework versions, and make it safe to change again.',
    },
    benefits: [
      'Clean Laravel architecture that is easy to extend',
      'Legacy PHP upgraded to supported versions',
      'Faster pages and database queries',
      'Fewer repeat bugs, with tests on critical paths',
      'Yii2 applications customized and maintained',
      'Documentation for whoever works on it next',
    ],
    deliverables: [
      'Code and architecture audit',
      'Laravel application and REST API development',
      'Admin panels, roles and permissions',
      'Yii2 and custom PHP customization',
      'PHP / framework version upgrades',
      'Performance profiling, query optimization and bug fixes',
    ],
    technologies: [
      { group: 'PHP', items: ['Laravel', 'Yii2', 'Custom PHP', 'Composer', 'PHPUnit'] },
      { group: 'Data', items: ['MySQL', 'Redis', 'Queues', 'Scheduled jobs'] },
      { group: 'Front end', items: ['Blade', 'Livewire', 'React.js', 'Vue.js', 'AJAX'] },
    ],
    process: buildProcess,
    faqs: [
      {
        question: 'Do you work with Yii2 as well as Laravel?',
        answer: 'Yes. We customize and maintain Yii2 applications, and can plan a gradual move to Laravel if that makes sense for your team.',
      },
      {
        question: 'Can you upgrade an old PHP application?',
        answer: 'Yes. We upgrade PHP and framework versions on a staging copy, fix incompatibilities, and then deploy with a rollback plan.',
      },
      {
        question: 'Our Laravel app is slow. Can you help?',
        answer: 'Usually the cause is N+1 queries, missing indexes, heavy synchronous work or no caching. We profile first, then fix the biggest bottlenecks.',
      },
    ],
    formHeading: 'Tell us about your PHP project',
    formSubtext: 'New build or existing code, framework and PHP version if you know them. We reply within 24 hours.',
    related: [R.fullStack, R.maintenance, R.api],
  },

  // ─── 7. WordPress plugins ──────────────────────────────────────────────────
  {
    slug: 'wordpress-plugin-development',
    metaTitle: 'Custom WordPress Plugin Development & WooCommerce Extensions | Miracle Websoft',
    metaDescription: 'Custom WordPress plugins and WooCommerce extensions: replace paid plugins, add business logic, integrate APIs and connect WordPress to Moodle, CRMs and other systems.',
    eyebrow: 'WORDPRESS PLUGIN DEVELOPMENT',
    h1: 'Custom WordPress Plugin Development',
    subtext: 'Custom WordPress plugins and WooCommerce extensions that do exactly what your site needs, replace stacks of paid plugins, and connect WordPress to your CRM, LMS and other systems.',
    serviceType: 'WordPress plugin development',
    problem: {
      title: 'Too many plugins, still not the right feature',
      body: 'You pay yearly licences for several plugins, they conflict with each other, slow the site down, and none of them does quite what you need.',
    },
    solution: {
      title: 'One focused plugin, built for your site',
      body: 'We build lightweight custom plugins following WordPress coding standards: just the features you need, secure, translatable and update-safe, with admin settings your team can manage.',
    },
    benefits: [
      'Replace multiple paid plugins with one you own',
      'Business logic that fits your exact process',
      'Faster site with less plugin bloat',
      'Secure, standards-compliant code',
      'Integrations with CRMs, Moodle and external APIs',
      'Admin screens your team can use without a developer',
    ],
    deliverables: [
      'Custom WordPress plugin with settings screens',
      'WooCommerce extensions: checkout, pricing, shipping, products',
      'Custom post types, fields, blocks and shortcodes',
      'REST API endpoints and third-party API integrations',
      'WordPress and Moodle integration',
      'Security review, documentation and update support',
    ],
    technologies: [
      { group: 'WordPress', items: ['WordPress', 'WooCommerce', 'Gutenberg blocks', 'WP REST API', 'ACF'] },
      { group: 'Stack', items: ['PHP', 'JavaScript', 'React.js', 'MySQL'] },
    ],
    process: buildProcess,
    faqs: [
      {
        question: 'Can a custom plugin replace the paid plugins we use?',
        answer: 'Often, yes. If you use a small part of several paid plugins, one focused custom plugin can replace them, cut licence costs and speed the site up.',
      },
      {
        question: 'Will a custom plugin break when WordPress updates?',
        answer: 'We build to WordPress coding standards using public APIs, which keeps plugins stable across updates. Optional maintenance covers testing against new WordPress and WooCommerce releases.',
      },
      {
        question: 'Can you integrate WordPress with Moodle or a CRM?',
        answer: 'Yes. Single sign-on, course enrollment from WooCommerce orders, and pushing leads and customers into a CRM are common integrations we build.',
      },
    ],
    formHeading: 'What should the plugin do?',
    formSubtext: 'Describe the feature or the plugins you want to replace. We reply within 24 hours.',
    related: [R.wordpress, R.ownSoftware, R.moodle],
  },

  // ─── 8. Maintenance ────────────────────────────────────────────────────────
  {
    slug: 'website-maintenance',
    metaTitle: 'Website Maintenance, Bug Fixing & Technical Support | Miracle Websoft',
    metaDescription: 'Website and web application maintenance: bug fixing, debugging, WordPress and WooCommerce speed optimization, PHP and JavaScript troubleshooting, API fixes and ongoing technical support.',
    eyebrow: 'MAINTENANCE & TECHNICAL SUPPORT',
    h1: 'Website Maintenance, Bug Fixing & Technical Support',
    subtext: 'Reliable ongoing support for websites and web applications: bug fixing and debugging, speed optimization, PHP, JavaScript and database troubleshooting, API fixes, updates and security.',
    serviceType: 'Website maintenance and technical support',
    problem: {
      title: 'Small issues keep piling up',
      body: 'A broken form, a plugin update that took the site down, slow pages, an integration that stopped syncing. There is no developer on call, and every fix means finding and briefing someone new.',
    },
    solution: {
      title: 'A developer team that already knows your system',
      body: 'We learn your site or application once, then handle fixes, updates and improvements on a predictable monthly plan, with backups and staging so changes don’t break production.',
    },
    benefits: [
      'Bugs fixed by people who already know your code',
      'Faster WordPress, WooCommerce and Shopify sites',
      'Updates and security patches applied safely',
      'Integrations and APIs monitored and repaired',
      'Predictable monthly cost',
      'Shopify, WordPress, PHP, Laravel and Node.js covered',
    ],
    deliverables: [
      'Initial technical health check',
      'Bug fixing and application debugging',
      'WordPress and WooCommerce speed optimization',
      'Shopify speed optimization and Core Web Vitals',
      'PHP, JavaScript and database performance troubleshooting',
      'Updates, backups, uptime checks and monthly report',
    ],
    process: fixProcess,
    faqs: [
      {
        question: 'Which platforms do you maintain?',
        answer: 'Shopify, WordPress, WooCommerce, Moodle, SuiteCRM, and custom applications built in PHP, Laravel, Yii2, Node.js and React.',
      },
      {
        question: 'How does pricing work?',
        answer: 'Monthly care plans with a set number of developer hours, or a one-off fixed quote for a specific problem. See our pricing page for current Care plans, or ask for a quote.',
      },
      {
        question: 'Can you fix an urgent issue today?',
        answer: 'Send the details through the form or WhatsApp. If it is within our skills we will tell you quickly and start as soon as access is shared.',
      },
    ],
    formHeading: 'What needs fixing?',
    formSubtext: 'Describe the issue and share the URL. We reply within 24 hours with what we found and a quote.',
    related: [R.laravel, R.fullStack, R.api],
  },
]

export function getDevService(slug: string): ServiceLandingData | undefined {
  return devServices.find((s) => s.slug === slug)
}
