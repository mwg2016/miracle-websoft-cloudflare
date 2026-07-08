export type ServiceStep = {
  title: string
  body: string
}

export type ServiceLandingData = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  subtext: string
  serviceType: string
  problem: ServiceStep
  solution: ServiceStep
  benefits: string[]
  deliverables: string[]
  process: ServiceStep[]
  caseStudy: {
    tag: string
    metric: string
    metricLabel: string
    title: string
    bullets: string[]
    duration: string
  }
  faqs: { question: string; answer: string }[]
  formHeading: string
  formSubtext: string
  related: { title: string; desc: string; href: string }[]
}

const defaultProcess: ServiceStep[] = [
  {
    title: 'Audit the workflow',
    body: 'We document the current process, tools, data sources, handoffs and failure points before recommending automation.',
  },
  {
    title: 'Design the AI system',
    body: 'We map prompts, guardrails, approvals, integrations, data flow and reporting so the system is useful in daily work.',
  },
  {
    title: 'Build and test safely',
    body: 'We ship the first version in a controlled environment with sample data, logging, fallbacks and human review where needed.',
  },
  {
    title: 'Launch and improve',
    body: 'After launch, we monitor quality, tune prompts, add edge cases and improve the workflow from real usage.',
  },
]

const defaultRelated = [
  {
    title: 'Custom Web Development',
    desc: 'Build the portal, dashboard or internal tool your AI workflow needs.',
    href: '/services/custom-web-development',
  },
  {
    title: 'API Integration Services',
    desc: 'Connect CRMs, ERPs, ecommerce platforms, support desks and databases.',
    href: '/services/custom-web-development',
  },
  {
    title: 'Shopify Development',
    desc: 'Add automation, custom features and AI-assisted workflows to Shopify.',
    href: '/services/shopify',
  },
]

export const aiServices: ServiceLandingData[] = [
  {
    slug: 'ai-business-automation',
    metaTitle: 'AI Business Automation Agency for Ecommerce & SMBs',
    metaDescription: 'AI business automation for ecommerce brands and small businesses. Automate support, reporting, operations, lead handling and internal workflows.',
    eyebrow: 'AI BUSINESS AUTOMATION',
    h1: 'AI Business Automation That Removes Manual Work',
    subtext: 'We design and build practical AI automations for teams that are stuck copying data, answering repeat questions, preparing reports or moving work between tools by hand.',
    serviceType: 'AI business automation',
    problem: {
      title: 'Manual work is slowing the business down',
      body: 'Teams lose hours every week to repetitive tasks across inboxes, spreadsheets, CRMs, ecommerce systems and support tools. The cost is not only time; it is slow response, inconsistent follow-up and missed revenue.',
    },
    solution: {
      title: 'A focused automation layer around your real workflow',
      body: 'We connect your tools, add AI where it can make decisions or draft useful output, and keep humans in control where judgment matters. The result is a workflow your team can trust.',
    },
    benefits: [
      'Reduce repetitive admin and copy-paste work',
      'Respond to customers and leads faster',
      'Create consistent reports from live business data',
      'Route tasks to the right person automatically',
      'Keep approval points for sensitive decisions',
      'Measure hours saved and workflow quality',
    ],
    deliverables: [
      'Workflow audit and automation roadmap',
      'OpenAI or model-provider integration',
      'CRM, helpdesk, ecommerce or spreadsheet sync',
      'Prompt design, guardrails and test cases',
      'Admin dashboard or internal control panel',
      'Logging, error handling and handover documentation',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'Operations Automation',
      metric: '18h',
      metricLabel: 'saved weekly',
      title: 'Ecommerce team: support tagging, refund triage and weekly sales reports automated without changing their existing helpdesk.',
      bullets: [
        'Connected Shopify, support inbox and spreadsheet reporting',
        'AI drafted summaries while human approval remained in place',
        'Weekly manual reporting time dropped from 6 hours to under 30 minutes',
      ],
      duration: '3-week build',
    },
    faqs: [
      {
        question: 'What business tasks can AI automation handle?',
        answer: 'Common use cases include customer support triage, lead qualification, sales reporting, order issue detection, document summarization, CRM updates, content drafting, internal search and repetitive admin tasks.',
      },
      {
        question: 'Will AI replace our team?',
        answer: 'No. We design AI systems to reduce repetitive work and improve response speed. For sensitive decisions, we keep human approval, escalation rules and logs in place.',
      },
      {
        question: 'Which tools can you integrate with?',
        answer: 'We integrate Shopify, WooCommerce, HubSpot, Salesforce, Airtable, Google Sheets, Slack, Notion, helpdesks, ERPs, custom databases and most tools with REST, GraphQL or webhook APIs.',
      },
      {
        question: 'How do you keep AI output reliable?',
        answer: 'We use structured prompts, retrieval from approved data, validation rules, confidence thresholds, human review, test cases and logging so the system can be improved over time.',
      },
    ],
    formHeading: 'Automate a business workflow',
    formSubtext: 'Tell us what your team is doing manually. We will reply with the simplest practical automation path.',
    related: defaultRelated,
  },
  {
    slug: 'ai-workflow-automation',
    metaTitle: 'AI Workflow Automation Services | Miracle Websoft',
    metaDescription: 'AI workflow automation services for ecommerce and business operations. Connect tools, automate decisions and reduce manual handoffs.',
    eyebrow: 'AI WORKFLOW AUTOMATION',
    h1: 'AI Workflow Automation for Busy Operations Teams',
    subtext: 'We automate multi-step business workflows across apps, APIs and databases so tasks move faster with fewer mistakes and clearer ownership.',
    serviceType: 'AI workflow automation',
    problem: {
      title: 'Work keeps getting stuck between tools',
      body: 'A lead lands in one system, order data lives in another, support messages arrive somewhere else and your team becomes the glue. That creates delays and missed follow-up.',
    },
    solution: {
      title: 'Connected workflows with AI in the right places',
      body: 'We build automation that listens for events, enriches data, drafts or classifies output, routes tasks and syncs updates across the tools you already use.',
    },
    benefits: [
      'Move tasks automatically between systems',
      'Classify messages, orders and requests with AI',
      'Reduce missed follow-ups and duplicate data entry',
      'Create clear exception queues for human review',
      'Improve visibility with status dashboards',
      'Scale operations without adding another admin role',
    ],
    deliverables: [
      'Workflow map and trigger design',
      'API and webhook integrations',
      'AI classification, extraction or drafting logic',
      'Approval and exception handling flows',
      'Admin dashboard and activity logs',
      'QA test suite for edge cases',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'Workflow Automation',
      metric: '64%',
      metricLabel: 'fewer handoffs',
      title: 'B2B ecommerce seller: enquiry, quote and follow-up workflow connected across forms, CRM and Slack.',
      bullets: [
        'AI extracted product needs and urgency from inbound messages',
        'CRM records were created with clean source and budget fields',
        'Sales team received prioritized follow-up tasks automatically',
      ],
      duration: '4-week build',
    },
    faqs: [
      {
        question: 'Do you use no-code tools or custom code?',
        answer: 'Both. If Zapier, Make or native automation is enough, we use it. If the workflow needs reliability, custom logic, private APIs or a dashboard, we build a custom integration.',
      },
      {
        question: 'Can automation work with our current software?',
        answer: 'Usually yes. If your tools have APIs, webhooks, email parsing or export access, we can connect them. For older systems, we first confirm the safest integration path.',
      },
      {
        question: 'How long does an AI workflow automation project take?',
        answer: 'A focused workflow usually takes 2-4 weeks. Larger systems with several integrations, admin controls and reporting may take 6-10 weeks.',
      },
      {
        question: 'Can you maintain the automation after launch?',
        answer: 'Yes. We provide retained support for monitoring, bug fixes, prompt tuning, API changes and new workflow improvements.',
      },
    ],
    formHeading: 'Map my workflow automation',
    formSubtext: 'Describe the workflow, the tools involved and where work slows down. We will recommend the right build path.',
    related: defaultRelated,
  },
  {
    slug: 'openai-integrations',
    metaTitle: 'OpenAI Integration Services for Websites, Apps & Workflows',
    metaDescription: 'OpenAI integration services for ecommerce, websites, internal tools, CRMs and business workflows. Build practical AI features with guardrails.',
    eyebrow: 'OPENAI INTEGRATIONS',
    h1: 'OpenAI Integrations for Websites, Apps and Internal Tools',
    subtext: 'We integrate OpenAI into real business software: customer support assistants, content workflows, data extraction, internal search, reporting and custom AI features.',
    serviceType: 'OpenAI integrations',
    problem: {
      title: 'AI experiments are not production systems',
      body: 'A prompt in a chat window is useful, but businesses need authentication, private data access, logging, permissions, quality checks and a clean interface for the team.',
    },
    solution: {
      title: 'Production-ready OpenAI features inside your product',
      body: 'We build the AI feature, connect it to approved data sources, add guardrails and ship it inside the website, app or internal tool your team already uses.',
    },
    benefits: [
      'Add AI features without rebuilding your whole product',
      'Use approved business data instead of generic answers',
      'Create structured outputs your systems can use',
      'Add prompt testing and quality controls',
      'Track usage, cost and performance',
      'Protect sensitive workflows with permissions',
    ],
    deliverables: [
      'OpenAI API architecture and model selection',
      'Prompt and structured output design',
      'Retrieval from docs, products or databases',
      'Frontend UI for users or internal teams',
      'Usage logging, limits and error handling',
      'Deployment and handover documentation',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'OpenAI Integration',
      metric: '72%',
      metricLabel: 'faster drafting',
      title: 'Content operations team: OpenAI-powered product description workflow connected to brand guidelines and approval steps.',
      bullets: [
        'Generated first drafts from product attributes and approved tone rules',
        'Added human review before publishing to ecommerce platform',
        'Tracked revisions so prompts improved with real editor feedback',
      ],
      duration: '3-week build',
    },
    faqs: [
      {
        question: 'Can you connect OpenAI to our private data?',
        answer: 'Yes. We can connect approved documents, product data, FAQs, internal databases or knowledge bases using retrieval patterns and access controls.',
      },
      {
        question: 'Can the output be structured for our system?',
        answer: 'Yes. We build structured JSON outputs, validation rules and fallback logic so AI results can safely feed workflows, dashboards or database updates.',
      },
      {
        question: 'Can you control OpenAI costs?',
        answer: 'Yes. We add rate limits, usage tracking, caching, prompt optimization and model selection so you can keep usage predictable.',
      },
      {
        question: 'Do you only work with OpenAI?',
        answer: 'No. We can integrate OpenAI and other model providers when the project needs it. The architecture is chosen around reliability, quality, cost and privacy.',
      },
    ],
    formHeading: 'Plan an OpenAI integration',
    formSubtext: 'Tell us where AI should appear in your product or workflow. We will map the safest integration path.',
    related: defaultRelated,
  },
  {
    slug: 'ai-chatbots',
    metaTitle: 'AI Chatbot Development for Ecommerce and Business Websites',
    metaDescription: 'Custom AI chatbot development for Shopify stores, ecommerce brands and business websites. Support, lead capture and product guidance.',
    eyebrow: 'AI CHATBOTS',
    h1: 'AI Chatbots That Answer, Qualify and Escalate Correctly',
    subtext: 'We build AI chatbots for ecommerce and business websites that use your approved content, understand common questions and hand off to humans when needed.',
    serviceType: 'AI chatbot development',
    problem: {
      title: 'Basic chat widgets do not understand your business',
      body: 'Generic bots frustrate users when they invent answers, miss context or fail to escalate. That damages trust instead of improving support.',
    },
    solution: {
      title: 'A grounded chatbot trained on your real information',
      body: 'We connect the chatbot to approved FAQs, policies, products, services and support rules, then add escalation paths, lead capture and performance reporting.',
    },
    benefits: [
      'Answer common questions instantly',
      'Capture qualified leads from high-intent visitors',
      'Guide shoppers to products or service pages',
      'Reduce repetitive support tickets',
      'Escalate sensitive questions to humans',
      'Track unanswered questions for content improvements',
    ],
    deliverables: [
      'Website or Shopify chatbot widget',
      'Knowledge base and retrieval setup',
      'Lead capture and CRM routing',
      'Human handoff and escalation rules',
      'Conversation logs and analytics',
      'Prompt guardrails and hallucination reduction',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'AI Chatbot',
      metric: '38%',
      metricLabel: 'ticket deflection',
      title: 'Online store: AI chatbot answered shipping, returns and product questions while routing complex order issues to support.',
      bullets: [
        'Knowledge base built from policy pages and support macros',
        'High-intent questions routed to sales with context attached',
        'Unanswered questions became a monthly content improvement list',
      ],
      duration: '2-week launch',
    },
    faqs: [
      {
        question: 'Can an AI chatbot work on Shopify?',
        answer: 'Yes. We can add an AI chatbot to Shopify storefronts and connect it to products, policies, FAQs, support tools and lead capture workflows.',
      },
      {
        question: 'Will the chatbot make up answers?',
        answer: 'We reduce that risk by grounding answers in approved content, setting refusal rules, logging conversations and routing low-confidence questions to humans.',
      },
      {
        question: 'Can the chatbot capture leads?',
        answer: 'Yes. It can qualify visitors, collect contact details, ask project or product questions and send the lead to your CRM, email, Slack or support desk.',
      },
      {
        question: 'Can it support multiple languages?',
        answer: 'Yes. Multilingual support is possible when we plan the source content, escalation paths and quality checks for each market.',
      },
    ],
    formHeading: 'Build an AI chatbot',
    formSubtext: 'Tell us what visitors ask most often and where leads or support tickets should go.',
    related: defaultRelated,
  },
  {
    slug: 'ai-customer-support',
    metaTitle: 'AI Customer Support Automation for Ecommerce Brands',
    metaDescription: 'AI customer support automation for ecommerce brands. Triage tickets, draft replies, classify issues and reduce repetitive support work.',
    eyebrow: 'AI CUSTOMER SUPPORT',
    h1: 'AI Customer Support Automation for Faster Replies',
    subtext: 'We help ecommerce and service teams use AI to triage tickets, draft replies, summarize conversations and surface the issues that need human attention.',
    serviceType: 'AI customer support automation',
    problem: {
      title: 'Support teams spend too much time on repeat work',
      body: 'Shipping status, returns, product questions and order issues can bury the team, especially during sales, launches and seasonal peaks.',
    },
    solution: {
      title: 'AI support workflows with human review',
      body: 'We connect your helpdesk, ecommerce platform and policies so AI can classify tickets, draft accurate responses and escalate the cases that need a person.',
    },
    benefits: [
      'Shorten first response time',
      'Reduce repetitive ticket handling',
      'Classify order, return and product issues automatically',
      'Draft replies from approved macros and policies',
      'Escalate VIP, refund or angry customer cases',
      'Spot recurring issues affecting conversion or retention',
    ],
    deliverables: [
      'Helpdesk and ecommerce integration',
      'AI ticket classification and priority rules',
      'Draft response assistant',
      'Policy-aware knowledge base',
      'Escalation and approval workflow',
      'Support analytics dashboard',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'Support Automation',
      metric: '46%',
      metricLabel: 'faster first reply',
      title: 'DTC support team: AI triage and draft replies reduced backlog during a product drop without removing human approval.',
      bullets: [
        'Tagged order, return, shipping and product questions automatically',
        'Drafted responses from approved support macros',
        'Escalated refund and complaint cases to senior staff',
      ],
      duration: '4-week rollout',
    },
    faqs: [
      {
        question: 'Which support tools can you connect?',
        answer: 'We can work with Gorgias, Zendesk, Freshdesk, Intercom, Help Scout, Gmail, Slack and custom support systems if API access is available.',
      },
      {
        question: 'Can AI send replies automatically?',
        answer: 'It can, but we usually recommend draft-first workflows until quality is proven. Auto-send is best for low-risk, highly repeatable questions.',
      },
      {
        question: 'Can AI use order data in replies?',
        answer: 'Yes. We can connect Shopify or ecommerce order data so replies reference order status, shipping details or return eligibility when permitted.',
      },
      {
        question: 'How do you measure support automation success?',
        answer: 'We track first response time, resolution time, deflection rate, draft acceptance, escalation volume, CSAT impact and the number of manual hours saved.',
      },
    ],
    formHeading: 'Automate customer support',
    formSubtext: 'Tell us your helpdesk, ticket volume and the questions your team answers repeatedly.',
    related: defaultRelated,
  },
  {
    slug: 'ai-internal-tools',
    metaTitle: 'AI Internal Tools for Teams, Dashboards and Operations',
    metaDescription: 'Build AI internal tools for business operations, ecommerce teams, support, sales, reporting and workflow automation.',
    eyebrow: 'AI INTERNAL TOOLS',
    h1: 'AI Internal Tools Your Team Can Use Every Day',
    subtext: 'We build private AI-powered dashboards, portals and workflow tools for teams that need faster decisions, cleaner data and less manual admin.',
    serviceType: 'AI internal tools',
    problem: {
      title: 'Teams need more than another spreadsheet',
      body: 'Important work often lives in scattered sheets, inboxes and app exports. AI can help, but only if it is inside a controlled tool with permissions and reliable data.',
    },
    solution: {
      title: 'A custom internal tool with AI built in',
      body: 'We design the interface, connect the data sources and add AI actions such as summarization, classification, drafting, search, reporting or recommendations.',
    },
    benefits: [
      'Give teams one place to manage repeated workflows',
      'Summarize customer, order or project data quickly',
      'Search internal knowledge with natural language',
      'Generate reports and action lists from live data',
      'Add role-based permissions and audit logs',
      'Reduce reliance on fragile spreadsheet workflows',
    ],
    deliverables: [
      'Private dashboard or internal portal',
      'Role-based access and permissions',
      'AI actions for search, summaries or drafting',
      'Database and API integrations',
      'Activity logs and admin controls',
      'Deployment, training and support',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'Internal Tool',
      metric: '1',
      metricLabel: 'source of truth',
      title: 'Service business: AI-assisted client portal centralized project notes, support requests and weekly status summaries.',
      bullets: [
        'Pulled project data from forms, email and task management tools',
        'AI generated weekly status summaries for account managers',
        'Role-based access separated internal notes from client-visible updates',
      ],
      duration: '6-week build',
    },
    faqs: [
      {
        question: 'What can an AI internal tool do?',
        answer: 'It can summarize records, search documents, draft updates, classify requests, generate reports, route tasks, enrich CRM records or guide staff through a workflow.',
      },
      {
        question: 'Can you build secure internal tools?',
        answer: 'Yes. We add authentication, role-based permissions, audit logs, environment separation and secure handling of secrets and API keys.',
      },
      {
        question: 'Do you build the interface too?',
        answer: 'Yes. We build the full internal tool: UI, backend, database, integrations, AI logic and deployment.',
      },
      {
        question: 'Can this replace our current SaaS tools?',
        answer: 'Sometimes. More often, it connects the tools you already use and gives your team a simpler control surface for the workflows that matter.',
      },
    ],
    formHeading: 'Scope an AI internal tool',
    formSubtext: 'Tell us what your team needs to manage, search, summarize or automate.',
    related: defaultRelated,
  },
  {
    slug: 'ai-agents',
    metaTitle: 'AI Agent Development for Business Workflows',
    metaDescription: 'AI agent development for business workflows, ecommerce operations, research, reporting and multi-step task automation.',
    eyebrow: 'AI AGENTS',
    h1: 'AI Agents for Controlled Multi-Step Business Tasks',
    subtext: 'We build AI agents that can follow a defined process, use tools, check data and hand work back to humans when the task leaves approved boundaries.',
    serviceType: 'AI agent development',
    problem: {
      title: 'Most AI agent demos are not safe enough for real work',
      body: 'Autonomous agents can be powerful, but businesses need limits, logs, permissions, tool controls and approval steps before letting AI act in operational systems.',
    },
    solution: {
      title: 'Bounded AI agents with tools and guardrails',
      body: 'We design agents around specific business tasks, connect the allowed tools, define failure states and keep humans in the loop for decisions that need review.',
    },
    benefits: [
      'Automate multi-step tasks instead of single prompts',
      'Let AI search, draft, classify or update approved systems',
      'Keep clear boundaries around what the agent can do',
      'Add human approval for sensitive actions',
      'Log every step for review and improvement',
      'Start with one high-value workflow before expanding',
    ],
    deliverables: [
      'Agent workflow and tool design',
      'OpenAI or model-provider implementation',
      'Tool access, permission and approval controls',
      'Task memory and context handling',
      'Testing harness and evaluation prompts',
      'Monitoring, logs and iteration plan',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'AI Agent',
      metric: '5x',
      metricLabel: 'faster research',
      title: 'Growth team: AI research agent collected competitor data, summarized pricing changes and drafted weekly insights for review.',
      bullets: [
        'Agent followed a defined research checklist with approved sources',
        'Summaries were structured for a weekly internal report',
        'Human review stayed in place before decisions were made',
      ],
      duration: '5-week pilot',
    },
    faqs: [
      {
        question: 'What is an AI agent?',
        answer: 'An AI agent is software that uses an AI model plus tools to complete a defined task across several steps. Good agents have clear boundaries, logging and human review.',
      },
      {
        question: 'What should we automate first with an AI agent?',
        answer: 'Start with a narrow task that has clear inputs, outputs and success criteria, such as research summaries, CRM enrichment, ticket triage, reporting or content preparation.',
      },
      {
        question: 'Can agents update our systems?',
        answer: 'Yes, but only with explicit permissions and approval rules. We design agents so high-risk actions require human confirmation.',
      },
      {
        question: 'How do you test an AI agent?',
        answer: 'We create sample tasks, expected outcomes, edge cases, tool failure scenarios and quality checks before allowing the agent to run on live workflows.',
      },
    ],
    formHeading: 'Explore an AI agent pilot',
    formSubtext: 'Describe the multi-step task you want handled. We will help narrow it into a safe first agent.',
    related: defaultRelated,
  },
  {
    slug: 'ai-website-development',
    metaTitle: 'AI Website Development Services for Modern Businesses',
    metaDescription: 'AI website development for businesses that need chat, personalization, search, content workflows and smart internal tools.',
    eyebrow: 'AI WEBSITE DEVELOPMENT',
    h1: 'AI Website Development for Smarter Customer Experiences',
    subtext: 'We build websites and web applications with AI features that help visitors find answers, compare options, get recommendations and take the next step faster.',
    serviceType: 'AI website development',
    problem: {
      title: 'Static websites leave too many questions unanswered',
      body: 'Visitors often need product guidance, service recommendations, pricing direction or support before they convert. A static page can only do so much.',
    },
    solution: {
      title: 'A fast website with AI where it improves the journey',
      body: 'We combine high-performance web development with AI chat, search, guided recommendations, content automation or internal tools depending on the business need.',
    },
    benefits: [
      'Guide visitors to the right product or service',
      'Improve lead capture with conversational qualification',
      'Add AI search over approved content',
      'Create content workflows for blogs and landing pages',
      'Support multilingual or market-specific experiences',
      'Keep the site fast, accessible and SEO-ready',
    ],
    deliverables: [
      'Next.js, React or platform-specific website build',
      'AI chatbot, search or recommendation feature',
      'SEO metadata and structured data foundation',
      'CMS or admin workflow where needed',
      'Analytics, lead tracking and conversion events',
      'Performance optimization and launch QA',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'AI Website',
      metric: '+31%',
      metricLabel: 'lead quality',
      title: 'B2B service website: AI-guided qualification routed visitors to the right offer and reduced unqualified discovery calls.',
      bullets: [
        'Added a guided intake flow connected to service pages',
        'AI summarized project requirements for the sales team',
        'Lead records included budget, timeline and urgency fields',
      ],
      duration: '6-week build',
    },
    faqs: [
      {
        question: 'Can an AI website still be SEO-friendly?',
        answer: 'Yes. The core pages should still have crawlable copy, metadata, structured data and fast rendering. AI features enhance the experience; they should not replace SEO fundamentals.',
      },
      {
        question: 'Can you add AI to an existing website?',
        answer: 'Yes. We can add AI search, chat, lead qualification or workflow features to an existing site if the current stack allows it.',
      },
      {
        question: 'What platforms do you build AI websites on?',
        answer: 'We build with Next.js, React, Shopify, WordPress and custom stacks depending on the site goals, content needs and integrations.',
      },
      {
        question: 'Can the AI feature use our website content?',
        answer: 'Yes. We can ground responses in approved pages, policies, product data, service details, documents or a private knowledge base.',
      },
    ],
    formHeading: 'Plan an AI website',
    formSubtext: 'Tell us what the website should help visitors do and what AI feature you have in mind.',
    related: defaultRelated,
  },
  {
    slug: 'ai-content-automation',
    metaTitle: 'AI Content Automation for Ecommerce and Marketing Teams',
    metaDescription: 'AI content automation for product descriptions, SEO briefs, blog workflows, email drafts and ecommerce content operations.',
    eyebrow: 'AI CONTENT AUTOMATION',
    h1: 'AI Content Automation Without Losing Brand Control',
    subtext: 'We build AI-assisted content workflows for ecommerce and marketing teams that need faster output, better structure and approval controls.',
    serviceType: 'AI content automation',
    problem: {
      title: 'Content production is slow and inconsistent',
      body: 'Product descriptions, SEO briefs, meta titles, emails and landing pages often depend on scattered notes and repetitive drafting. Speed improves when the process is structured.',
    },
    solution: {
      title: 'AI drafting connected to your data and guidelines',
      body: 'We create workflows that generate structured drafts from product data, brand rules and SEO inputs, then route content for review before publishing.',
    },
    benefits: [
      'Draft product descriptions and meta copy faster',
      'Create SEO briefs and outlines from structured inputs',
      'Keep tone, claims and formatting consistent',
      'Add human review before publishing',
      'Reduce blank-page time for marketing teams',
      'Track revisions to improve prompt quality',
    ],
    deliverables: [
      'Content workflow and prompt system',
      'Brand voice and formatting rules',
      'Product, SEO or CMS data integration',
      'Draft generation interface',
      'Approval workflow and export tools',
      'Quality checklist and training',
    ],
    process: defaultProcess,
    caseStudy: {
      tag: 'Content Automation',
      metric: '70%',
      metricLabel: 'less draft time',
      title: 'Ecommerce catalog team: AI-assisted product descriptions generated consistent first drafts from attributes and brand rules.',
      bullets: [
        'Connected product attributes, SEO keywords and tone guidelines',
        'Generated descriptions, meta titles and FAQ drafts',
        'Editors approved and improved drafts before publishing',
      ],
      duration: '3-week workflow',
    },
    faqs: [
      {
        question: 'Can AI content automation publish directly?',
        answer: 'It can, but most teams should start with draft and approval workflows. Direct publishing is safer after quality has been proven.',
      },
      {
        question: 'Can it follow our brand voice?',
        answer: 'Yes. We encode tone rules, examples, banned phrases, formatting requirements and review feedback into the workflow.',
      },
      {
        question: 'Can it create Shopify product descriptions?',
        answer: 'Yes. We can generate Shopify product descriptions, meta titles, meta descriptions, FAQs and collection copy from product attributes and SEO inputs.',
      },
      {
        question: 'Will AI content hurt SEO?',
        answer: 'AI-assisted content needs human quality control, originality, useful information and accurate claims. We build workflows that support those standards instead of mass-publishing thin content.',
      },
    ],
    formHeading: 'Automate a content workflow',
    formSubtext: 'Tell us what content your team creates repeatedly and where the source data lives.',
    related: defaultRelated,
  },
  {
    slug: 'ai-consulting',
    metaTitle: 'AI Consulting for Ecommerce Brands and Small Businesses',
    metaDescription: 'AI consulting for ecommerce brands, startups and SMBs. Identify practical automation opportunities, choose tools and plan AI implementation.',
    eyebrow: 'AI CONSULTING',
    h1: 'AI Consulting for Practical Business Implementation',
    subtext: 'We help businesses identify where AI will actually save time, improve customer experience or increase revenue, then turn the best opportunities into a clear implementation plan.',
    serviceType: 'AI consulting',
    problem: {
      title: 'AI opportunity is obvious, but priorities are not',
      body: 'Most teams know they should explore AI but are unsure where to start, which tools to trust, what to automate and how to avoid expensive experiments.',
    },
    solution: {
      title: 'A grounded AI roadmap for your business',
      body: 'We review workflows, data, tools and goals, then rank AI opportunities by feasibility, business impact and implementation cost.',
    },
    benefits: [
      'Identify high-ROI AI use cases',
      'Avoid tool overload and vague experiments',
      'Understand build vs buy tradeoffs',
      'Prioritize quick wins and larger systems',
      'Plan data, security and approval requirements',
      'Move from idea to implementation with clarity',
    ],
    deliverables: [
      'AI opportunity audit',
      'Workflow and tool review',
      'Prioritized use-case roadmap',
      'Implementation architecture recommendations',
      'Risk, privacy and approval guidance',
      'Fixed-price proposal for the first build',
    ],
    process: [
      {
        title: 'Discovery and workflow review',
        body: 'We learn the business model, current tools, bottlenecks, data sources and team capacity.',
      },
      {
        title: 'Opportunity scoring',
        body: 'We score possible AI use cases by impact, complexity, risk, cost and speed to launch.',
      },
      {
        title: 'Roadmap presentation',
        body: 'You get a practical roadmap with quick wins, larger projects and a recommended first implementation.',
      },
      {
        title: 'Implementation planning',
        body: 'If you want to build, we scope the first project with timeline, pricing, integrations and success metrics.',
      },
    ],
    caseStudy: {
      tag: 'AI Roadmap',
      metric: '12',
      metricLabel: 'use cases ranked',
      title: 'Ecommerce operator: AI audit turned scattered ideas into a 90-day roadmap for support, reporting and content workflows.',
      bullets: [
        'Mapped workflows across Shopify, Gorgias, Klaviyo and spreadsheets',
        'Ranked use cases by time saved and implementation complexity',
        'Started with support triage as the fastest, lowest-risk pilot',
      ],
      duration: '1-week audit',
    },
    faqs: [
      {
        question: 'Who is AI consulting best for?',
        answer: 'It is best for businesses that want to use AI but need help choosing the right use cases, tools, architecture and first implementation.',
      },
      {
        question: 'Do you only advise or can you build too?',
        answer: 'We do both. Consulting can end with a roadmap, or it can lead into a fixed-price implementation for the best use case.',
      },
      {
        question: 'How much preparation do we need?',
        answer: 'Not much. Useful inputs include current tools, workflow notes, example reports, support tickets, spreadsheets, SOPs and a list of repetitive tasks.',
      },
      {
        question: 'Can you train our team?',
        answer: 'Yes. We can include practical training for using AI tools, reviewing outputs, writing better prompts and managing the new workflow.',
      },
    ],
    formHeading: 'Get an AI roadmap',
    formSubtext: 'Tell us where your team loses time or where you think AI might help. We will recommend the next step.',
    related: defaultRelated,
  },
]

export function getAiService(slug: string): ServiceLandingData | undefined {
  return aiServices.find((service) => service.slug === slug)
}

export const aiHubFaqs = [
  {
    question: 'What AI services does Miracle Websoft provide?',
    answer: 'We provide AI business automation, workflow automation, OpenAI integrations, AI chatbots, AI customer support, AI internal tools, AI agents, AI website development, AI content automation and AI consulting.',
  },
  {
    question: 'Do you work with ecommerce and Shopify brands?',
    answer: 'Yes. Ecommerce is our core background, so many AI projects connect Shopify, support desks, CRMs, product data, content workflows, inventory systems and reporting tools.',
  },
  {
    question: 'Can you build custom AI tools instead of using SaaS products?',
    answer: 'Yes. When off-the-shelf tools are too limited, expensive or hard to integrate, we build custom AI tools, dashboards and workflow automations around your systems.',
  },
  {
    question: 'How do you start an AI project safely?',
    answer: 'We start with one narrow workflow, define success metrics, add guardrails and human review, then expand only after the first version proves useful.',
  },
]
