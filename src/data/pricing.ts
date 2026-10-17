export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  originalPrice: number;
  popular: boolean;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaSubtext: string;
}

export const pricingData: PricingTier[] = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    tagline: 'Ideal for emerging sellers & direct manufacturers entering online commerce',
    monthlyPrice: 19999,
    originalPrice: 24999,
    popular: false,
    idealFor: 'Up to 25 SKUs on 1-2 Marketplaces',
    features: [
      'Account Setup on Amazon India & Flipkart',
      'Up to 25 Complete SEO Product Listings',
      'Basic A+ Content Modules (3 Hero Products)',
      'Initial Amazon/Flipkart Ads Setup & Bidding',
      'Weekly Inventory & Order Health Monitoring',
      'Monthly Strategy & Performance Review',
      'WhatsApp & Email Support (24h SLA)',
    ],
    notIncluded: [
      'Shopify / Custom Website Management',
      'Meta Performance Ads & CAPI Tracking',
      'Dedicated Full-Time Growth Manager',
    ],
    ctaText: 'Get Started with Launchpad',
    ctaSubtext: 'No long-term lock-in · Cancel anytime',
  },
  {
    id: 'accelerator',
    name: 'Growth Accelerator',
    tagline: 'Our flagship full-stack growth engine for brands ready to scale to ₹20L - ₹1Cr/Mo',
    monthlyPrice: 39999,
    originalPrice: 49999,
    popular: true,
    idealFor: 'Full Omnichannel (Amazon + Flipkart + Shopify + Meta Ads)',
    features: [
      'Everything in Launchpad, plus:',
      'Complete Omnichannel Growth (Amazon, Flipkart, Meesho & Shopify)',
      'Unlimited A+ Content & Brand Store Design',
      'Daily Amazon & Flipkart PPC Optimization (Target ACOS <18%)',
      'Meta (Instagram & Facebook) Ads Management with CAPI',
      '12-16 Custom Ad Creatives, UGC Edits & Graphic Banners/mo',
      'Automated WhatsApp Cart Recovery & COD Confirmation Funnel',
      'Dedicated Senior Growth Account Manager',
      'Weekly Live Strategy Zoom Calls & Real-Time Slack Channel',
    ],
    ctaText: 'Claim Growth Accelerator',
    ctaSubtext: 'Includes Festive 10% Discount + Free Onboarding Audit',
  },
  {
    id: 'domination',
    name: 'Enterprise Domination',
    tagline: 'Bespoke full-scale growth operations for established industry category leaders',
    monthlyPrice: 79999,
    originalPrice: 99999,
    popular: false,
    idealFor: 'Established D2C Brands scaling past ₹1Cr+/Mo',
    features: [
      'Everything in Growth Accelerator, plus:',
      'Multi-Warehouse Pan-India FBA & Fulfillment Allocation',
      'Google Shopping & YouTube Performance Max Campaigns',
      'Amazon DSP (Demand-Side Platform) Audience Retargeting',
      'Full Technical SEO & Programmatic Category Ranking',
      'Dedicated Team of 4: Ads Strategist, Copywriter, Designer & Dev',
      'Custom Headless Next.js or Shopify Plus Engineering Support',
      '24/7 Priority Emergency Hotline & Daily Telemetry Reports',
    ],
    ctaText: 'Scale with Enterprise Domination',
    ctaSubtext: 'Custom onboarding sprint with founder-level advisory',
  },
];
