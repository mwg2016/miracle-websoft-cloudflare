// Partner channel program — 7 first-touchpoint partner types.
// Every new small business hits at least one of these BEFORE they need a website.
// We pay these partners to send the customer to us when website-time arrives.

export type PartnershipType = 'referral' | 'mutual' | 'preferred-vendor' | 'workshop' | 'white-label'

export interface PartnerStep {
  n: string
  title: string
  desc: string
}

export interface PartnerFaq {
  question: string
  answer: string
}

export interface Partner {
  slug: string
  shortName: string                       // 'Accountants & CPAs'
  metaTitle: string
  metaDescription: string

  // Hero
  eyebrow: string                         // 'PARTNER PROGRAM — ACCOUNTANTS'
  h1: string
  h1Accent: string
  subtext: string

  // The angle — why this partner is the first touchpoint
  firstTouchAngle: string                 // 1–2 sentences on where they sit in the new-biz lifecycle

  // Partnership type
  partnershipType: PartnershipType
  partnershipBadge: string                // human label e.g. 'Referral + co-branded kit'

  // What this partner GETS (benefits to them)
  whatYouGet: { icon: 'dollar' | 'gift' | 'megaphone' | 'handshake' | 'badge' | 'users'; title: string; desc: string }[]

  // What this partner DOES (what we ask of them)
  whatYouDo: string[]

  // How it works
  steps: PartnerStep[]

  // FAQs
  faqs: PartnerFaq[]

  // Theme color
  accentColor: string
  accentBg: string
  accentBorder: string
  accentGradient: string

  // Icon for hub card
  iconKey: 'calculator' | 'scale' | 'graduation' | 'landmark' | 'palette' | 'printer' | 'building'
}

// Universal partner FAQs — appended to per-partner FAQs.
export const universalPartnerFaqs: PartnerFaq[] = [
  {
    question: 'When do I get paid?',
    answer:
      "Monthly. We track conversions, send you a statement on the 1st of each month and pay out via bank transfer or PayPal. You see exactly which referrals converted and which package they bought.",
  },
  {
    question: 'How do you know the lead came from me?',
    answer:
      "Refer however suits you and your client — drop our contact form link, share our email or WhatsApp, hand over Karam's direct number, or just tell the client to mention you when they reach out. Then ping us (email, WhatsApp, whatever's quickest) saying you sent someone over. No tracking links, no unique URLs, no portal to log into. The relationship is trust-based and we reconcile monthly.",
  },
  {
    question: 'Do I need to sell anything?',
    answer:
      "No. You just mention us when a client asks 'do you know someone who builds websites'. We do all the selling, building and post-launch support. You collect the fee.",
  },
  {
    question: 'What if my referral doesn\'t convert?',
    answer:
      'No cost to you — referrals are free to send. We only pay when a project closes. There\'s no minimum, no quota, no penalty.',
  },
  {
    question: 'Can I send referrals from outside the US, UK and Australia?',
    answer:
      "Yes — we work remotely with English-speaking clients globally. Pricing for non-US/UK/AU referrals defaults to USD. The referral fee structure is the same.",
  },
]

export const partners: Partner[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'accountants',
    shortName: 'Accountants & CPAs',
    metaTitle: 'Partner With Miracle Websoft — Refer Web Clients & Earn | Accountants & CPAs',
    metaDescription:
      'Every new business owner has a CPA. Refer your clients for their website, earn $50–$150 per project. Co-branded one-pager and monthly payouts.',
    eyebrow: 'PARTNER PROGRAM — ACCOUNTANTS & CPAs',
    h1: 'Your clients ask you for a web guy.',
    h1Accent: 'Now you have one.',
    subtext:
      "Every accountant gets asked, almost weekly: 'do you know someone good who can build my website?' Right now you either shrug, or pass the name of a random freelancer and hope they don't embarrass you. We're a better answer — and we pay you for it.",
    firstTouchAngle:
      "Accountants are one of the first people a new business owner hires — often before the LLC is even fully filed. That makes you the highest-leverage referral source in the small-business world. By the time you've reviewed their first set of books, they're already looking for someone to build their website.",
    partnershipType: 'referral',
    partnershipBadge: 'Referral fee + co-branded kit',
    whatYouGet: [
      {
        icon: 'dollar',
        title: '$50 / $75 / $150 per converted referral',
        desc: 'Tiered by package: $50 Starter, $75 Business, $150 E-commerce. Paid monthly. No cap.',
      },
      {
        icon: 'gift',
        title: 'Co-branded one-pager',
        desc: 'A clean PDF with your firm\'s logo + our packages. Hand it to clients during onboarding.',
      },
      {
        icon: 'badge',
        title: '"Preferred web partner" badge',
        desc: 'Use our logo + partner badge on your website. Adds a credible service partner to your firm.',
      },
      {
        icon: 'handshake',
        title: 'White-glove handover',
        desc: 'You make the intro, we take it from there. Your client never feels passed off — we send you progress updates.',
      },
    ],
    whatYouDo: [
      'Hand the co-branded one-pager to new clients during onboarding (or email it).',
      'Mention us when an existing client asks "do you know someone who builds websites?"',
      "Refer however you want — share our contact page, our email, our WhatsApp, or hand over Karam's number. Then just ping us so we know who to credit.",
    ],
    steps: [
      {
        n: '01',
        title: 'You sign up',
        desc: "Fill in the apply form. We send your co-branded one-pager (2-day turnaround) and Karam's direct email + WhatsApp so you can reach us instantly when you have someone to refer.",
      },
      {
        n: '02',
        title: 'You refer',
        desc: "Hand the client our contact details — one-pager, email, WhatsApp, contact form, whatever fits. Ping us so we know to expect them. No pitch needed.",
      },
      {
        n: '03',
        title: 'You get paid',
        desc: 'When a referral signs, we email you. Monthly statement on the 1st, payout via bank transfer or PayPal the same day.',
      },
    ],
    faqs: [
      {
        question: 'Will my client know I get a referral fee?',
        answer:
          "We disclose it on the proposal — it's a small line item that says 'this project was referred by [your firm]'. Most clients see this as a positive signal that you have a trusted network. We don't hide it, and we don't make it a big deal.",
      },
      {
        question: 'What if my client wants more than just a basic website?',
        answer:
          'The fee scales — $50 for a Starter site, $75 for Business, $150 for E-commerce. If the project turns into something bigger (a custom app, ongoing maintenance), we discuss a higher referral fee directly with you.',
      },
    ],
    accentColor: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    accentBorder: 'rgba(52,211,153,0.25)',
    accentGradient: 'linear-gradient(90deg, #059669, #34d399)',
    iconKey: 'calculator',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'business-lawyers',
    shortName: 'Business Formation Lawyers',
    metaTitle: 'Partner With Miracle Websoft — Refer or White-Label | Business Formation Lawyers',
    metaDescription:
      'You\'re the first contact when a business is formed. Refer them to us for their website (paid) or white-label our service under your firm. Two ways to monetize.',
    eyebrow: 'PARTNER PROGRAM — BUSINESS FORMATION LAWYERS',
    h1: 'You file the LLC.',
    h1Accent: 'We build the website. You get paid either way.',
    subtext:
      "By the time you've filed your client's LLC or Ltd, they already need a website — and they have no idea who to call. You can hand them off (and earn a referral) or resell our service under your firm's name (and earn the margin). Either way, you become the one-stop shop.",
    firstTouchAngle:
      "Business formation lawyers are the literal first call — the document filing happens before the bank account, before the accountant, before anything. Your client just spent $500–$1,500 with you and is sitting on a $5,000+ startup budget. The website is the next thing they buy. The question is whether they buy it through you, or through Google.",
    partnershipType: 'white-label',
    partnershipBadge: 'Referral OR white-label resale',
    whatYouGet: [
      {
        icon: 'dollar',
        title: 'Two ways to monetize',
        desc: 'Option A: Refer and earn $50–$150 per project. Option B: White-label — resell our Starter package as your firm\'s service for ~50% margin.',
      },
      {
        icon: 'gift',
        title: 'New revenue line, zero overhead',
        desc: "We deliver under your firm's brand if you white-label. Your client thinks you built it. We never speak to them directly unless you want.",
      },
      {
        icon: 'badge',
        title: 'Differentiate from other LLC mills',
        desc: 'Most formation lawyers stop at the filing. You can offer "LLC + Website" as a single package for $799–$1,499. Higher ticket, stickier client.',
      },
      {
        icon: 'handshake',
        title: 'Client retention boost',
        desc: 'Clients who buy a website from you are 3x more likely to come back for ongoing legal work. Lifetime value goes up.',
      },
    ],
    whatYouDo: [
      'Mention our service when filing is complete and the client asks "what\'s next?".',
      'Choose your model: refer (we sell + deliver) or white-label (you sell, we deliver).',
      'For white-label: send us the brief, we build under your brand, you handle billing.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply + pick a model',
        desc: 'Apply form below — tell us if you want referral or white-label. We send terms + onboarding within 48 hours.',
      },
      {
        n: '02',
        title: 'You sell',
        desc: 'Add "Website" to your service menu. Closing rates are highest in the week after filing — your client is in spending mode.',
      },
      {
        n: '03',
        title: 'We deliver',
        desc: 'Referral: we contact your client and run the project. White-label: we deliver to you under NDA, your client never sees us.',
      },
    ],
    faqs: [
      {
        question: 'What does white-label cost me vs. referral?',
        answer:
          "White-label costs you $179 for a Starter site (you sell at $399–$599 = $220–$420 margin). Business: $329 wholesale (resell $699). E-commerce: $599 wholesale (resell $1,299). Referral pays you a flat $50/$75/$150 with zero involvement — pick whichever fits your firm.",
      },
      {
        question: "Can I co-brand or use my firm's domain on the site we build?",
        answer:
          'On white-label projects yes — we hand over a fully unbranded build and you can deploy it on any domain or under any branding you want. We sign an NDA before we start so our involvement never appears anywhere.',
      },
    ],
    accentColor: '#a78bfa',
    accentBg: 'rgba(108,99,255,0.08)',
    accentBorder: 'rgba(108,99,255,0.3)',
    accentGradient: 'linear-gradient(90deg, #6c63ff, #a78bfa)',
    iconKey: 'scale',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'business-coaches',
    shortName: 'Business Coaches & SCORE',
    metaTitle: 'Partner With Miracle Websoft — Free Workshops + Member Discounts | Business Coaches',
    metaDescription:
      'Run free "Your first website in 7 days" workshops for your coaching cohort. Members get $50 off. You get content, we get qualified leads.',
    eyebrow: 'PARTNER PROGRAM — BUSINESS COACHES & SCORE',
    h1: 'Your cohort needs a website.',
    h1Accent: 'You don\'t need to be the one explaining it.',
    subtext:
      'Business coaches advise hundreds of founders a year — and every single one eventually asks "what about a website?" You don\'t have to learn web development to answer. We deliver free workshops for your cohort, your members get $50 off, and you become the coach with the answer.',
    firstTouchAngle:
      "Business coaches and SCORE mentors see founders at the earliest, most uncertain stage — pre-revenue, pre-launch, pre-website. You're the one they ask 'what comes first?'. Adding 'a website partner I trust' to your toolkit isn't a side-hustle; it's a credibility multiplier for the actual coaching you do.",
    partnershipType: 'workshop',
    partnershipBadge: 'Free workshops + member discount',
    whatYouGet: [
      {
        icon: 'megaphone',
        title: 'Free 60-min workshop for your cohort',
        desc: 'We run "Your first website in 7 days" live for your group — branded co-presentation, your intro. Recording yours to keep.',
      },
      {
        icon: 'gift',
        title: '$50 off any package for your members',
        desc: 'Unique coupon code tied to your group. Members redeem at checkout, you don\'t handle anything.',
      },
      {
        icon: 'badge',
        title: '"Preferred web partner" status',
        desc: 'Listed on our partners page + we mention you in workshops. Mutual credibility lift.',
      },
      {
        icon: 'users',
        title: 'Optional referral fee',
        desc: "If you'd rather monetise directly than discount your members, switch to a referral model — same $50/$75/$150 tiers as other partners.",
      },
    ],
    whatYouDo: [
      "Invite us to deliver a workshop for your cohort — 60 minutes, no sales pitch, all content.",
      'Share the member discount code with your group.',
      'Mention us as your "go-to web partner" when founders ask what to do about a website.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply',
        desc: 'Apply form below. Tell us about your cohort size and cadence. We come back within 48h with a workshop slot proposal.',
      },
      {
        n: '02',
        title: 'We deliver',
        desc: 'Live 60-min workshop (Zoom or in-person). You introduce us, we run the content, members get their discount code at the end.',
      },
      {
        n: '03',
        title: 'Members convert',
        desc: 'Members who come to us mention your name on the form. We track everything and share quarterly results with you.',
      },
    ],
    faqs: [
      {
        question: 'Is this only for paid coaching businesses, or does SCORE qualify too?',
        answer:
          "Both. SCORE mentors, paid 1-on-1 coaches, group programs, accelerators, incubators — all welcome. We've found SCORE chapters especially valuable because they reach 100+ founders per quarter with high intent.",
      },
      {
        question: 'Can I get the workshop content as a recording even if I switch coaching programs?',
        answer:
          'Yes. The recording is yours to keep and re-use forever, even if our partnership ends. We see it as a portable asset for you, not a hook.',
      },
    ],
    accentColor: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.3)',
    accentGradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    iconKey: 'graduation',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'banks-credit-unions',
    shortName: 'Local Banks & Credit Unions',
    metaTitle: 'Preferred Vendor Partnership — Local Banks & Credit Unions | Miracle Websoft',
    metaDescription:
      'Add us to your small business resources. Your account holders get $50 off, you get a branded landing page and quarterly co-marketing assets.',
    eyebrow: 'PARTNER PROGRAM — BANKS & CREDIT UNIONS',
    h1: 'You open the account.',
    h1Accent: 'We build the website. Both branded under you.',
    subtext:
      "Every new business account you open is a website project waiting to happen. Add us to your preferred vendor list — we'll build a co-branded landing page just for your account holders, give them a $50 discount, and send you quarterly co-marketing assets you can use in your small biz newsletter.",
    firstTouchAngle:
      "Local banks and credit unions are arguably the deepest first-touchpoint in small biz — every new LLC opens an account within days of formation. Your relationship manager is often the second human a founder talks to (after their lawyer). A preferred vendor list with a real website partner on it elevates your small-biz program from box-ticking to actually useful.",
    partnershipType: 'preferred-vendor',
    partnershipBadge: 'Preferred vendor listing + co-branded landing page',
    whatYouGet: [
      {
        icon: 'badge',
        title: 'Co-branded landing page',
        desc: 'Dedicated URL: miraclewebsoft.com/partners/{your-bank-name}. Your logo, your bank\'s language, our packages.',
      },
      {
        icon: 'gift',
        title: '$50 off for your account holders',
        desc: 'Custom discount code tied to your bank. Your members enter it at checkout — instant savings, no friction.',
      },
      {
        icon: 'megaphone',
        title: 'Quarterly co-marketing assets',
        desc: 'We produce email copy, social posts, branch-poster designs and an account-opening flyer. You use what you want.',
      },
      {
        icon: 'users',
        title: 'Branch staff training',
        desc: '15-minute video for your business banking team explaining what we do, so they can confidently recommend us.',
      },
    ],
    whatYouDo: [
      'Add us to your small business resources page or welcome packet for new business accounts.',
      'Distribute the quarterly co-marketing assets through your normal small biz channels.',
      'Brief your business banking staff so they can mention us when relevant.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply',
        desc: 'Apply form below. We schedule a 30-min call with your small biz team to design the partnership.',
      },
      {
        n: '02',
        title: 'We build your assets',
        desc: 'Co-branded landing page + first set of co-marketing assets delivered within 2 weeks. Free to you.',
      },
      {
        n: '03',
        title: 'You promote, we deliver',
        desc: 'Your account holders click through, get $50 off, we deliver their website. Quarterly review of conversions + revenue.',
      },
    ],
    faqs: [
      {
        question: 'Is there a cost to the bank?',
        answer:
          "No. The co-branded page, the marketing assets and the staff training are all free for partner banks. We make money when your account holders become our customers — that's the entire business model.",
      },
      {
        question: 'Are you compliant for FI partner programs?',
        answer:
          "We're a third-party vendor with NDA, business liability insurance and standard vendor onboarding documentation. We've worked with regulated industries before (UK finance clients) and understand vendor risk processes — we can complete your standard vendor assessment.",
      },
    ],
    accentColor: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.3)',
    accentGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    iconKey: 'landmark',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'branding-agencies',
    shortName: 'Branding & Logo Designers',
    metaTitle: 'Mutual Referral Partnership — Branding & Logo Designers | Miracle Websoft',
    metaDescription:
      'After the logo comes the website. Send us your branding clients for their site, we send you our clients for branding. Plus referral fees if it\'s one-way.',
    eyebrow: 'PARTNER PROGRAM — BRANDING & LOGO DESIGNERS',
    h1: 'You finish the brand.',
    h1Accent: 'We deliver the website that\'s worthy of it.',
    subtext:
      "Every logo design ends with the same question: 'so... do you do websites too?' If you don't, you're either turning down work or building something half-decent in Squarespace and hoping for the best. Hand it to us instead — we build websites that actually do justice to the brand, and we send you our clients when they need branding.",
    firstTouchAngle:
      'Branding and logo design sits at a fascinating point — early enough that the founder is still investing, late enough that the website is the very next purchase. The handoff from logo to website is the single highest-converting referral in small-business services. Mutual exchange means both of us grow our pipelines without paid ads.',
    partnershipType: 'mutual',
    partnershipBadge: 'Mutual referral exchange',
    whatYouGet: [
      {
        icon: 'handshake',
        title: 'Reciprocal client flow',
        desc: 'We send our website clients to you for logos and brand systems. You send your branding clients to us for websites. Pure exchange.',
      },
      {
        icon: 'dollar',
        title: 'Backup referral fee',
        desc: 'If you send us 5 referrals and we haven\'t sent you any (it happens — different client mix), we switch to a $50/$75/$150 fee structure.',
      },
      {
        icon: 'badge',
        title: 'Featured on our references section',
        desc: 'We showcase your studio in our case studies + on every city page. Live credit, live link. National exposure.',
      },
      {
        icon: 'gift',
        title: 'Brand-friendly handoff',
        desc: 'We respect your brand guidelines obsessively. Your client never feels like the website undid your work — quite the opposite.',
      },
    ],
    whatYouDo: [
      'When a logo client asks "do you build websites?", say yes — and hand them to us.',
      'Send us your brand guidelines (logos, fonts, colours, voice) so we can build to spec.',
      'Accept our referrals when our website clients need branding work.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply',
        desc: 'Apply form. We review your portfolio and confirm fit (we partner with studios who care about craft, not template designers).',
      },
      {
        n: '02',
        title: 'We exchange',
        desc: 'You start sending logo clients our way, we start sending website clients yours. Loose tracking spreadsheet shared between us.',
      },
      {
        n: '03',
        title: 'Quarterly review',
        desc: 'Once a quarter, we look at the balance. If it\'s lopsided, we switch you to a paid referral structure so you\'re always net-positive.',
      },
    ],
    faqs: [
      {
        question: 'What if my client has already commissioned the website elsewhere?',
        answer:
          "Then we don't get involved — referrals only count when the client hasn't decided yet. If your client wants someone better than what they've got, we're happy to come in and rebuild — same partnership terms.",
      },
      {
        question: 'Will you respect my brand guidelines or just impose your own template?',
        answer:
          "We build to your guidelines. Custom code, custom layout, no template lookalike. The website should feel like a natural extension of the brand you designed — if it doesn't, we're not doing our job.",
      },
    ],
    accentColor: '#ec4899',
    accentBg: 'rgba(236,72,153,0.08)',
    accentBorder: 'rgba(236,72,153,0.3)',
    accentGradient: 'linear-gradient(90deg, #db2777, #ec4899)',
    iconKey: 'palette',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'printers',
    shortName: 'Printing Companies',
    metaTitle: 'Referral Partnership — Printing Companies & Print Shops | Miracle Websoft',
    metaDescription:
      'Every business card order is a new business that needs a website. Drop a "need a website?" insert in the pickup bag, earn $50–$150 per converted referral.',
    eyebrow: 'PARTNER PROGRAM — PRINTING COMPANIES',
    h1: 'They order business cards.',
    h1Accent: 'They\'re going to need a website next.',
    subtext:
      "When someone orders 500 business cards with a brand new logo on them, they're not just a print customer — they're a brand new business 2 weeks away from realising they also need a website. Drop a small insert in the pickup bag. Earn a fee on every one that converts. Zero friction.",
    firstTouchAngle:
      "Business card orders correlate almost perfectly with new business formation — most founders order cards within 3 weeks of incorporation. You have a direct line to thousands of brand-new businesses per year. A small printed insert (we design and supply it) turns that into a revenue stream with almost no operational change for you.",
    partnershipType: 'referral',
    partnershipBadge: 'Simple referral — printed insert + fee',
    whatYouGet: [
      {
        icon: 'dollar',
        title: '$50 / $75 / $150 per converted referral',
        desc: 'Same tiered structure as our other partners. Paid monthly, no cap, no quota.',
      },
      {
        icon: 'gift',
        title: 'Free designed inserts',
        desc: 'We design and ship a small printed insert (or sticker) that goes into the bag with the cards. You distribute, we pay for the print run.',
      },
      {
        icon: 'badge',
        title: 'A simple insert with your shop named on it',
        desc: 'Insert points the customer to our site (URL + QR to scan). It also says "mention [your shop] when you get in touch" — that\'s how attribution happens. No login, no portal, no tracking link.',
      },
      {
        icon: 'handshake',
        title: 'Zero work for your staff',
        desc: 'No script, no training, no upsell from your counter staff. Just drop the insert in the bag. Done.',
      },
    ],
    whatYouDo: [
      'Put our printed insert into every business card order bag (or staple it to the receipt).',
      'Optionally mention us when you see a logo on a new card order — totally up to you.',
      'That\'s it. Really.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply',
        desc: 'Apply form below. We send 500 free inserts within 5 days — pre-printed with your shop name and a QR + URL to our site.',
      },
      {
        n: '02',
        title: 'You drop them in bags',
        desc: 'Your counter staff add one insert per business card order. Takes 2 seconds, no script.',
      },
      {
        n: '03',
        title: 'You earn',
        desc: 'Customers scan, sign up over the next 2–6 weeks (when they realise they need a website). You earn $50–$150 per project. Monthly payouts.',
      },
    ],
    faqs: [
      {
        question: 'How many inserts should I expect to convert?',
        answer:
          "Conservatively: out of 1,000 inserts, ~30–50 will scan the QR, ~5–10 will engage with us, ~2–4 will buy. At $75 avg fee, that's $150–$300 per 1,000 inserts. Stickier for shops that ALSO add a verbal mention.",
      },
      {
        question: 'Can I print my own inserts to match my store branding?',
        answer:
          "Yes. If you'd rather print yourself we'll send you the design files (with your shop name + our QR/URL on them) and you handle the print run. Some printers prefer this for brand consistency. No fee difference.",
      },
    ],
    accentColor: '#fb923c',
    accentBg: 'rgba(251,146,60,0.08)',
    accentBorder: 'rgba(251,146,60,0.3)',
    accentGradient: 'linear-gradient(90deg, #ea580c, #fb923c)',
    iconKey: 'printer',
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'coworking-spaces',
    shortName: 'Co-working Spaces',
    metaTitle: 'Partner With Miracle Websoft — Free Workshops + Member Perks | Co-working Spaces',
    metaDescription:
      'Your members are early-stage founders. We host free monthly "build your first website" workshops at your space. Members get $50 off. You get content + leads.',
    eyebrow: 'PARTNER PROGRAM — CO-WORKING SPACES',
    h1: 'Your members are starting businesses.',
    h1Accent: 'We help them launch the website.',
    subtext:
      "A co-working space is full of people 90 days away from needing a website. Host us once a month — we run a free workshop, your members get $50 off any package, and you get fresh programming content for your community team without having to do any of the work.",
    firstTouchAngle:
      "Co-working spaces are where early-stage founders go to feel less alone — and where they ask each other 'who built your website?'. Owning that conversation, by hosting the workshop where the answer comes from, makes your space stickier and adds a high-quality member benefit that competing spaces don't have.",
    partnershipType: 'workshop',
    partnershipBadge: 'Workshop host + member perks',
    whatYouGet: [
      {
        icon: 'megaphone',
        title: 'Free monthly workshop content',
        desc: '60-minute live workshop at your space (or virtual). Your community team gets a recurring programming slot with zero effort.',
      },
      {
        icon: 'gift',
        title: '$50 off for your members',
        desc: 'Unique member code. Builds the perception that your membership comes with real, tangible founder benefits.',
      },
      {
        icon: 'badge',
        title: 'Notice board presence',
        desc: "We supply a printed poster + flyer for your community noticeboard. Co-branded with your space's logo.",
      },
      {
        icon: 'users',
        title: 'Optional revenue share',
        desc: 'Prefer revenue to discounts? We can switch the perk to a tiered referral fee paid to your space ($50/$75/$150).',
      },
    ],
    whatYouDo: [
      "Host us once a month for a 60-min workshop — we bring content, you bring members.",
      'Share the workshop in your member newsletter / Slack / event calendar.',
      'Put the printed poster on your community noticeboard.',
    ],
    steps: [
      {
        n: '01',
        title: 'You apply',
        desc: 'Apply form below. We confirm fit within 48h and schedule the first workshop.',
      },
      {
        n: '02',
        title: 'We run the workshop',
        desc: '60-minute session, live at your space or virtual. No sales pitch — pure content. Members walk out with their $50-off code.',
      },
      {
        n: '03',
        title: 'Members convert',
        desc: 'Members redeem the code over the following weeks. We share quarterly results with your community team.',
      },
    ],
    faqs: [
      {
        question: "Does the workshop need to be in-person at our space, or can it be virtual?",
        answer:
          "Whatever works for your community. We default to virtual (Zoom) because most spaces have hybrid memberships now, but happy to do in-person in the cities we travel to. Recording is shared with your member channel either way.",
      },
      {
        question: 'Will the workshop be salesy?',
        answer:
          "No — that's the entire deal. The workshop is genuinely useful content (what to put on your homepage, how to write copy that converts, common mistakes). We mention the discount once at the end and that's it. Your reputation is on the line as much as ours.",
      },
    ],
    accentColor: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.3)',
    accentGradient: 'linear-gradient(90deg, #0891b2, #06b6d4)',
    iconKey: 'building',
  },
]

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug)
}
