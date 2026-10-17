export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Marketplace' | 'Performance Marketing' | 'Web & Tech' | 'Branding';
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  heroHighlights: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  startingPrice: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'marketplace-management',
    slug: 'marketplace-management',
    title: 'Marketplace Management (Amazon, Flipkart & Meesho)',
    shortTitle: 'Marketplace Management',
    category: 'Marketplace',
    tagline: 'End-to-End Account Setup, Cataloguing, A+ Content & Daily Optimisation',
    description:
      'Scale your sales on India’s biggest e-commerce platforms. From brand approval, GTIN exemption, and keyword-rich A+ cataloguing to daily inventory monitoring, pricing strategy, and review generation.',
    iconName: 'ShoppingBag',
    badge: 'Flagship Service',
    heroHighlights: [
      'Top 1% Category Ranking Expertise',
      'Daily Bid & Buy Box Management',
      'Zero-Suspension Account Health Protocol',
      'Amazon Brand Store & Enhanced Brand Content (EBC)',
    ],
    deliverables: [
      'Dedicated Marketplace Account Manager',
      'High-converting product title, bullet points, and search term optimisation',
      'A+ Content (EBC) & premium Brand Store design',
      'Deals, coupons, Prime Day & festive sale event management',
      'Claims, returns reconciliation, and negative review mitigation',
      'Weekly performance scorecards and monthly strategy reviews',
    ],
    process: [
      { step: '01', title: 'Audit & Gap Analysis', desc: 'We inspect existing listing quality, buy box losses, keyword indexing, and rival listings.' },
      { step: '02', title: 'Catalog Overhaul', desc: 'Writing SEO-driven copy, designing 3D infocards, and creating high-impact A+ content modules.' },
      { step: '03', title: 'FBA & Inventory Sync', desc: 'Guiding shipment creation, warehouse stocking, and regional inventory positioning.' },
      { step: '04', title: 'Scale & Defend', desc: 'Deploying aggressive keyword ranking and automated review acceleration tactics.' },
    ],
    faqs: [
      {
        question: 'Do you manage Amazon Ads / Sponsored Products too?',
        answer: 'Yes! Sponsored Products, Sponsored Brands, Video Ads, and DSP campaigns are managed simultaneously to maximize total organic ranking alongside ad sales.',
      },
      {
        question: 'Can you launch a brand that currently has zero listings?',
        answer: 'Absolutely. We handle GST registration mapping, trademark verification, GTIN exemption, brand registry, and first-batch inventory onboarding from scratch.',
      },
    ],
    startingPrice: '₹14,999/mo',
  },
  {
    id: 'e-commerce-marketing',
    slug: 'e-commerce-marketing',
    title: 'E-commerce Performance Marketing',
    shortTitle: 'E-commerce Marketing',
    category: 'Performance Marketing',
    tagline: 'Multi-Channel Paid Acquisition Engineered for High ROAS & Low CAC',
    description:
      'We combine Meta Ads, Google Shopping, dynamic product retargeting, and WhatsApp automation funnels to acquire new customers profitably while multiplying your repeat purchase rate.',
    iconName: 'TrendingUp',
    badge: 'High ROAS',
    heroHighlights: [
      'Target ROAS 4.5x - 8x Scaled Ad Spend',
      'Creative Studio producing UGC & Static Variations',
      'CAPI Server-Side Tracking for 99% Attribution Accuracy',
      'Retention Engine via WhatsApp & Automated Email Flows',
    ],
    deliverables: [
      'Full-funnel campaign architecture (Top, Middle, Bottom of Funnel)',
      'High-velocity creative testing (15-30 new hooks tested per month)',
      'Meta Conversions API (CAPI) & GA4 server tracking setup',
      'Lookalike audience modeling from your highest LTV buyers',
      'WhatsApp abandoned checkout recovery automation',
    ],
    process: [
      { step: '01', title: 'Audience & Offer Architecture', desc: 'Crafting irresistible bundle offers, COD verification funnels, and customer hooks.' },
      { step: '02', title: 'Creative Production', desc: 'Producing native UGC video ads, product comparison graphics, and customer review cards.' },
      { step: '03', title: 'Rapid Testing Sprint', desc: 'Testing 20+ creative variations at controlled budgets to pinpoint the winning 20% assets.' },
      { step: '04', title: 'Vertical & Horizontal Scaling', desc: 'Scaling winning ad sets 20-30% daily while opening lookalike and broad audiences.' },
    ],
    faqs: [
      {
        question: 'What monthly ad budget do I need to begin?',
        answer: 'We recommend a minimum ad spend of ₹30,000 to ₹50,000/month on Meta/Google so the algorithms have enough data points to calibrate profitable conversions.',
      },
      {
        question: 'How do you handle iOS 14.5+ attribution loss?',
        answer: 'We deploy custom server-side CAPI tracking and UTM telemetry via GA4 and Shopify webhooks to restore near 100% purchase attribution.',
      },
    ],
    startingPrice: '₹19,999/mo',
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    title: 'Google & YouTube Ads Management',
    shortTitle: 'Google Ads',
    category: 'Performance Marketing',
    tagline: 'Performance Max, Google Shopping & High-Intent Search Ads',
    description:
      'Capture buyers at the exact second they are searching for your products. We build automated Performance Max campaigns, merchant center data feeds, and YouTube non-skippable buyer journeys.',
    iconName: 'Target',
    heroHighlights: [
      'Google Merchant Center Feed Optimisation',
      'Performance Max (PMax) Precision Bidding',
      'Negative Keyword Silos to Eliminate Ad Waste',
      'YouTube In-Feed & Bumper Brand Acceleration',
    ],
    deliverables: [
      'Google Merchant Center error resolution and title attribute enrichment',
      'Target ROAS / Target CPA smart bidding setup',
      'High-intent exact match competitor conquesting campaigns',
      'Dynamic remarketing ads across the Google Display Network',
      'Click-fraud prevention and IP exclusion filters',
    ],
    process: [
      { step: '01', title: 'Feed Diagnosis', desc: 'Fixing disapprovals, syncing taxonomy categories, and enriching product titles with high-intent keywords.' },
      { step: '02', title: 'Campaign Segmentation', desc: 'Segmenting by profit margin and hero SKU velocity instead of lumping products together.' },
      { step: '03', title: 'PMax Asset Assetization', desc: 'Supplying Google with hyper-relevant headlines, lifestyle photography, and 4K video cuts.' },
      { step: '04', title: 'Bid Calibration', desc: 'Gradually tightening tROAS targets to maximize net profitability per rupee spent.' },
    ],
    faqs: [
      {
        question: 'Why are my Google Shopping products getting disapproved?',
        answer: 'Common reasons include missing GTIN/MPN attributes, shipping price mismatches, or automated crawler flags. We troubleshoot and get feeds greenlit within 48 hours.',
      },
    ],
    startingPrice: '₹14,999/mo',
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing (SMM & SMO)',
    shortTitle: 'SMM & SMO',
    category: 'Performance Marketing',
    tagline: 'Organic Growth, Reel Viral Hooks & Community Engagement That Builds Tribe Loyalty',
    description:
      'Stop posting boring graphics that get 2 likes. We script, design, and produce viral-ready Instagram Reels, carousels, and LinkedIn thought-leadership that drives real follower conversion.',
    iconName: 'Share2',
    heroHighlights: [
      'Trending Audio & Cultural Hook Research',
      '12-16 Custom Branded Posts & Reels Per Month',
      'Active Community DMs & Comment Monetisation',
      'Micro-Influencer Collaboration Outreach',
    ],
    deliverables: [
      'Monthly content calendar with aesthetic grid planning',
      'High-energy Reels editing with dynamic subtitles & sound effects',
      'High-value educational carousels with swipeable graphics',
      'Story polls, countdowns, and link-sticker engagement pipelines',
      'Monthly engagement & audience growth analytics',
    ],
    process: [
      { step: '01', title: 'Tone & Identity Kit', desc: 'Defining your visual brand voice, typography palette, and recurring content pillars.' },
      { step: '02', title: 'Scripting & Ideation', desc: 'Writing punchy 3-second hooks and value-dense storylines tailored to Indian consumer mindsets.' },
      { step: '03', title: 'Production & Motion Design', desc: 'Polished graphic design and video editing that stops endless thumb scrolling.' },
      { step: '04', title: 'Publishing & Community Management', desc: 'Posting at peak algorithm windows and responding to inquiries within 15 minutes.' },
    ],
    faqs: [
      {
        question: 'Do you create the video content or do we need to film?',
        answer: 'We provide clear shot-lists and scripts for you to shoot easily on a smartphone, or we can produce motion graphics, product showcases, and UGC-style assets from raw media you send us.',
      },
    ],
    startingPrice: '₹11,999/mo',
  },
  {
    id: 'shopify-development',
    slug: 'shopify-development',
    title: 'Shopify Store Design & Development',
    shortTitle: 'Shopify Development',
    category: 'Web & Tech',
    tagline: 'Lightning-Fast, High-Converting Custom Shopify & Shopify Plus Stores',
    description:
      'Transform casual website visitors into repeat buyers. We design bespoke, mobile-first Shopify storefronts engineered for sub-2-second load times, one-click checkout, and maximum conversion rates.',
    iconName: 'ShoppingBag',
    badge: 'Top Rated',
    heroHighlights: [
      'Mobile-First 1.5s Load Time Performance',
      'Custom Liquid Coding (No Slow Page Builders)',
      'Indian Payment Gateways & COD Verification Setup',
      'Cart Upsell & Post-Purchase Order Bumps',
    ],
    deliverables: [
      'Custom theme architecture matching your exact brand identity',
      'Razorpay, Cashfree, PhonePe, and Shiprocket integration',
      'Sticky Add to Cart, size charts, countdown timers, and trust badges',
      'Complete SEO metadata, schema markup, and image compression',
      'Staff training session with full admin walkthrough',
    ],
    process: [
      { step: '01', title: 'Figma UI/UX Prototype', desc: 'Wireframing desktop & mobile views focused on zero-friction purchase flows.' },
      { step: '02', title: 'Custom Theme Coding', desc: 'Writing clean, bloat-free Liquid/HTML5/Tailwind code with zero excess script lag.' },
      { step: '03', title: 'App & Gateway Stack', desc: 'Configuring logistics (Shiprocket/Nimbus), payments, WhatsApp OTP, and reviews.' },
      { step: '04', title: 'Speed & Conversion Test', desc: 'Benchmarking on Google PageSpeed Insights and running mock orders before launch.' },
    ],
    faqs: [
      {
        question: 'Will I be able to update banners and products easily myself?',
        answer: 'Yes! All sections are built dynamically inside the Shopify theme editor so you or your staff can change text, images, and prices with zero coding knowledge.',
      },
    ],
    startingPrice: '₹24,999',
  },
  {
    id: 'ecommerce-website-development',
    slug: 'ecommerce-website-development',
    title: 'Custom E-commerce Web Development',
    shortTitle: 'E-commerce Web Dev',
    category: 'Web & Tech',
    tagline: 'Headless Next.js, WooCommerce & Bespoke Custom Online Stores',
    description:
      'Need something beyond standard templates? We build headless e-commerce architectures using Next.js, React, Node.js, and custom CMS systems with limitless customization and instant page transitions.',
    iconName: 'Code',
    heroHighlights: [
      'Headless Next.js 14 App Router Architecture',
      'Bespoke ERP & CRM API Integrations',
      'Instant Search with Algolia / Meilisearch',
      '99.9% Uptime with Auto-scaling Cloud Infrastructure',
    ],
    deliverables: [
      'Enterprise-grade full stack codebase with source code ownership',
      'Ultra-fast server-rendered product listing & detail pages',
      'Multi-currency, multi-warehouse, and B2B wholesale pricing modules',
      'Robust admin dashboard for inventory, orders, and sales reports',
      'Full security hardening with SSL, DDoS protection, and rate limiting',
    ],
    process: [
      { step: '01', title: 'Architecture Blueprint', desc: 'Selecting the optimal database, API schema, and payment pipeline for your scale.' },
      { step: '02', title: 'Frontend & API Engineering', desc: 'Coding responsive Next.js frontend with robust REST / GraphQL endpoints.' },
      { step: '03', title: 'Integration & Testing', desc: 'Stress testing database concurrency, inventory locks, and webhook security.' },
      { step: '04', title: 'Deployment & SLA', desc: 'Continuous deployment setup on AWS/Vercel with automated nightly backups.' },
    ],
    faqs: [
      {
        question: 'When should I choose custom development over Shopify?',
        answer: 'Custom development is ideal if you require unique business workflows, custom product configurators, wholesale pricing tiers, or want zero monthly platform transaction fees.',
      },
    ],
    startingPrice: '₹39,999',
  },
  {
    id: 'search-engine-optimization',
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO & Organic Growth',
    category: 'Performance Marketing',
    tagline: 'Rank #1 on Google for Buyer-Intent Keywords & Dominate Organic Traffic',
    description:
      'Organic search is the highest margin traffic source on the internet. We execute technical SEO, programmatic e-commerce category ranking, and high-authority link acquisition that compound month over month.',
    iconName: 'Search',
    heroHighlights: [
      'Technical Core Web Vitals Optimization',
      'High-Intent Commercial Keyword Domination',
      'Rich Snippets & Product Schema Implementation',
      'White-Hat Editorial Backlink Acquisition',
    ],
    deliverables: [
      'Full technical crawl audit fixing 404s, redirect chains, and indexing blocks',
      'Category page content expansion targeting high-volume buyer queries',
      'Structured data (Product, Review, Breadcrumbs, Organization schema)',
      'Monthly competitive search visibility report with rank tracking',
    ],
    process: [
      { step: '01', title: 'Deep Technical Crawl', desc: 'Uncovering indexing traps, duplicate canonical tags, and slow server response times.' },
      { step: '02', title: 'Keyword Intent Mapping', desc: 'Identifying keywords where searchers have active wallets ready to purchase.' },
      { step: '03', title: 'On-Page Optimization', desc: 'Structuring H1-H3 hierarchies, schema markup, and internal linking siloing.' },
      { step: '04', title: 'Authority Building', desc: 'Earning press coverage and contextual industry backlinks that push rankings to page 1.' },
    ],
    faqs: [
      {
        question: 'How long does SEO take to produce measurable revenue?',
        answer: 'Technical fixes and low-hanging keyword rankings often yield jumps within 45 to 60 days. Substantial, compounding domain authority typically peaks between 4 to 6 months.',
      },
    ],
    startingPrice: '₹12,999/mo',
  },
  {
    id: 'branding-and-design',
    slug: 'branding-and-design',
    title: 'Brand Identity, Packaging & Design',
    shortTitle: 'Branding & Packaging',
    category: 'Branding',
    tagline: 'We Don’t Just Make Logos. We Engineer Unforgettable D2C Brand Identities.',
    description:
      'In a sea of generic copycats, premium brands win on perceived value. We craft comprehensive brand identity systems: modern logos, packaging boxes, unboxing inserts, and complete visual guidelines.',
    iconName: 'Palette',
    badge: 'Creative Excellence',
    heroHighlights: [
      'Comprehensive Brand Strategy & Positioning Bible',
      'Logo Suite with Responsive Favicon & Monogram Variations',
      'Print-Ready Packaging & Box Die-Cut Production Files',
      'Complete Social Media Kit & Style Guidelines',
    ],
    deliverables: [
      'Primary, secondary, and badge logo variants in vector format',
      'Curated typography hierarchy and hex color palette',
      '3D realistic packaging mockups for marketing materials',
      'Custom packaging die-lines with CMYK print-ready files',
      'Digital brand guideline book (PDF)',
    ],
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'Understanding your ideal customer avatar, competitive positioning, and emotional resonance.' },
      { step: '02', title: 'Moodboard & Directions', desc: 'Presenting 3 distinct visual mood concepts before finalizing typography and forms.' },
      { step: '03', title: 'Vector Refinement', desc: 'Crafting the geometric logo mark, secondary badges, and packaging textures.' },
      { step: '04', title: 'Handoff & Asset Library', desc: 'Delivering every format (SVG, EPS, PNG, PDF) with complete usage guidelines.' },
    ],
    faqs: [
      {
        question: 'Do you give us vector files and full commercial rights?',
        answer: 'Yes! Upon project completion, 100% intellectual property and commercial copyright transfer to you, with full vector master files.',
      },
    ],
    startingPrice: '₹14,999',
  },
  {
    id: 'youtube-management',
    slug: 'youtube-management',
    title: 'YouTube Channel Growth & Management',
    shortTitle: 'YouTube Management',
    category: 'Performance Marketing',
    tagline: 'Long-Form Video Authority, High-CTR Thumbnails & YouTube SEO',
    description:
      'Tap into the world’s second largest search engine. We help founders and brands build compounding authority with high-retention video editing, thumbnail A/B testing, and sponsored integration outreach.',
    iconName: 'PlayCircle',
    heroHighlights: [
      'CTR-Boosting Custom 3D Thumbnails',
      'High-Retention Video Editing with Sound Design',
      'YouTube SEO: Tags, Timestamps, End Screens & Descriptions',
      'Shorts Repurposing Pipeline from Long-Form Episodes',
    ],
    deliverables: [
      'Channel brand makeover (banner, avatar, playlist structuring)',
      'Keyword-optimized titles and description copywriting',
      'Thumbnails tested for >8% Click-Through Rate',
      'Community tab polls and audience nurture strategy',
    ],
    process: [
      { step: '01', title: 'Niche Research', desc: 'Finding low-competition, high-search video topic opportunities.' },
      { step: '02', title: 'Thumbnail & Title First', desc: 'Packaging the concept before recording to guarantee clickability.' },
      { step: '03', title: 'Retention Editing', desc: 'Pacing edits with sound effects, zooms, and b-roll to maintain 60%+ average view duration.' },
      { step: '04', title: 'Analytics Loop', desc: 'Monitoring audience retention graphs to refine future video structure.' },
    ],
    faqs: [
      {
        question: 'Can YouTube drive e-commerce sales directly?',
        answer: 'Yes! Product reviews, unboxings, and comparison videos have the highest purchase intent of any social format, driving qualified buyers with high average order values.',
      },
    ],
    startingPrice: '₹16,999/mo',
  },
  {
    id: 'dropshipping-growth',
    slug: 'dropshipping-growth',
    title: 'Drop Shipping Turnkey Growth',
    shortTitle: 'Drop Shipping',
    category: 'Marketplace',
    tagline: 'Winning Product Sourcing, High-Margin RTO Management & Scalable Ads',
    description:
      'Run a profitable dropshipping business in India without inventory nightmares. We help you pick winning products, integrate reliable suppliers, minimize RTO (Return to Origin), and scale paid ads.',
    iconName: 'Package',
    heroHighlights: [
      'Winning Product Validation & Supplier Vetting',
      'Automated RTO Reduction & COD WhatsApp Confirmation',
      'High-Converting 1-Page Funnel Themes',
      'Rapid TikTok / Reels Ad Testing Model',
    ],
    deliverables: [
      'Curated list of verified Indian dropshipping suppliers (Roposo Clout, Glowroad, CJ)',
      'Pre-built, high-converting product landing page template',
      'Automated COD confirmation bot setup to cut RTO by up to 35%',
      'Ad creatives & target audience presets ready to launch',
    ],
    process: [
      { step: '01', title: 'Product Sourcing', desc: 'Scouting products with >3x markup potential and low return probability.' },
      { step: '02', title: 'Funnel Build', desc: 'Designing a high-urgency single product page with reviews and fast checkout.' },
      { step: '03', title: 'RTO Defense Setup', desc: 'Deploying address validation and automated WhatsApp OTP verification.' },
      { step: '04', title: 'Ad Blitz', desc: 'Launching high-converting video ads across Meta and Instagram.' },
    ],
    faqs: [
      {
        question: 'What is the biggest challenge in Indian dropshipping?',
        answer: 'Return to Origin (RTO) on Cash-on-Delivery orders. Our proprietary WhatsApp verification and address-sanitizing workflow reduces RTO by 30-40%, safeguarding your margins.',
      },
    ],
    startingPrice: '₹19,999',
  },
  {
    id: 'website-designing',
    slug: 'website-designing',
    title: 'Modern Corporate & Agency Website Designing',
    shortTitle: 'Website Designing',
    category: 'Web & Tech',
    tagline: 'Stunning Modern UI/UX That Positions Your Business as the Undisputed Market Leader',
    description:
      'Your website is the digital headquarters of your company. We design immersive, sleek, and animated corporate websites that impress investors, clients, and partners from the first second.',
    iconName: 'Layout',
    heroHighlights: [
      'Bespoke Figma UI/UX with Micro-Interactions',
      'Full Mobile & Tablet Responsive Polish',
      'Smooth GSAP / Framer Motion Animations',
      'Lead Capture Form & CRM Automation',
    ],
    deliverables: [
      'Interactive Figma prototypes before any coding begins',
      'Blazing fast Next.js / Tailwind CSS web development',
      'CMS integration for effortless case study and blog publishing',
      'Contact forms with email notifications and Google Sheet sync',
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframes', desc: 'Mapping user journeys and conversion goals.' },
      { step: '02', title: 'High-Fidelity Design', desc: 'Crafting premium visuals, typography, and interactive components.' },
      { step: '03', title: 'Production Code', desc: 'Developing with clean TypeScript, Tailwind, and accessible HTML semantics.' },
      { step: '04', title: 'Launch & Handoff', desc: 'DNS configuration, SSL provisioning, and speed validation.' },
    ],
    faqs: [
      {
        question: 'How fast can a 5-page corporate website be launched?',
        answer: 'Our streamlined sprint takes typically 10 to 14 business days from kickoff to live deployment.',
      },
    ],
    startingPrice: '₹18,999',
  },
  {
    id: 'amazon-flipkart-advertising',
    slug: 'amazon-flipkart-advertising',
    title: 'Marketplace PPC (Amazon & Flipkart Ads)',
    shortTitle: 'Marketplace PPC',
    category: 'Marketplace',
    tagline: 'Lower ACOS, Maximize TACOS & Protect Your Brand Keywords on Marketplaces',
    description:
      'Stop bleeding money on useless search terms. We build laser-targeted keyword silos, defensive product targeting, and DSP campaigns that scale ad revenue while boosting your organic rank.',
    iconName: 'Percent',
    heroHighlights: [
      'Target ACOS Reduction to <18%',
      'Daily Negative Keyword Harvesting',
      'Competitor ASIN Conquesting & Brand Defense',
      'Amazon DSP (Demand-Side Platform) Audiences',
    ],
    deliverables: [
      'Multi-tiered campaign structure (Auto, Broad, Phrase, Exact, ASIN targeting)',
      'Hourly dayparting bids during high-conversion buying windows',
      'Sponsored Brands headline ads & Sponsored Display retargeting',
      'Weekly transparent keyword search term reports',
    ],
    process: [
      { step: '01', title: 'ACOS Diagnostics', desc: 'Auditing bleeders, identifying non-converting spend, and pruning dead weight.' },
      { step: '02', title: 'Harvesting Structure', desc: 'Setting up automated keyword pipelines from Auto to Exact campaigns.' },
      { step: '03', title: 'Bid & Placement Tuning', desc: 'Calibrating Top-of-Search placement multipliers for high conversion velocity.' },
      { step: '04', title: 'Organic Flywheel', desc: 'Aligning ad sales to trigger Amazon’s organic rank algorithm for long-term free traffic.' },
    ],
    faqs: [
      {
        question: 'What is a good target ACOS on Amazon India?',
        answer: 'It varies by category margin, but our clients typically achieve a profitable 14% to 22% ACOS while driving significant blended organic boost (TACOS < 10%).',
      },
    ],
    startingPrice: '₹12,999/mo',
  },
];
