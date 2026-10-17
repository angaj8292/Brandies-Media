export interface NotebookStep {
  pageNumber: string;
  total: string;
  dayChip: string;
  iconName: string;
  title: string;
  description: string;
  bulletPoints: string[];
  tapeColor: string;
}

export const notebookStepsData: NotebookStep[] = [
  {
    pageNumber: 'PAGE 01',
    total: '04',
    dayChip: 'DAY 1 – 7',
    iconName: 'SearchCheck',
    title: 'We learn your business',
    description:
      'Deep-dive audit of accounts & competitors, goals mapped to real numbers, and right channels picked for your margins.',
    bulletPoints: [
      'Comprehensive audit of current marketplace accounts, listings, and ad waste',
      'Unit economics, landed margin calculations, and target ROAS/ACOS mapping',
      'Competitor conquesting blueprint & primary channel selection',
    ],
    tapeColor: '#F59E0B',
  },
  {
    pageNumber: 'PAGE 02',
    total: '04',
    dayChip: 'DAY 8 – 14',
    iconName: 'Wrench',
    title: 'We build your foundation',
    description:
      'High-converting listings, custom storefronts, bulletproof tracking & analytics, and rich brand assets.',
    bulletPoints: [
      'Keyword-rich title, bullet points, and A+ Content / EBC modules created',
      'Server-Side CAPI, GA4 e-commerce events, and pixel tracking installed',
      'High-converting Shopify or Next.js storefront assets calibrated for speed',
    ],
    tapeColor: '#10B981',
  },
  {
    pageNumber: 'PAGE 03',
    total: '04',
    dayChip: 'DAY 15 – 30',
    iconName: 'Rocket',
    title: 'We launch & promote',
    description:
      'Performance ads, marketplace campaigns, SEO silos, and viral content pipelines go live simultaneously.',
    bulletPoints: [
      'Amazon Sponsored Products, Brands & Video PPC campaigns launched',
      'Meta & Google Performance Max funnels activated with tested UGC hooks',
      'Automated WhatsApp recovery & COD verification sequences triggered',
    ],
    tapeColor: '#6366F1',
  },
  {
    pageNumber: 'PAGE 04',
    total: '04',
    dayChip: 'DAY 31+',
    iconName: 'TrendingUp',
    title: 'We optimise & scale',
    description:
      'Weekly transparent reports, aggressive A/B testing, and doubling down on winning SKUs to maximize profit.',
    bulletPoints: [
      'Daily negative keyword harvesting to ruthlessly eradicate ad bleed',
      'Continuous creative testing cycles: 15-30 new ad variations tested monthly',
      'Weekly live dashboard check-ins & margin-based scaling roadmap',
    ],
    tapeColor: '#15D8E1',
  },
];
