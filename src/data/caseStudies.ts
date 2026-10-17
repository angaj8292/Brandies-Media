export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Marketplace' | 'Ads' | 'Web' | 'Branding';
  period: string;
  metrics: { label: string; value: string; growth?: string }[];
  summary: string;
  imageUrl: string;
  tags: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    slug: 'vedik-roots-amazon-flipkart',
    title: 'Scaling an Ayurvedic D2C Brand from Scratch to ₹38L/Mo on Amazon & Flipkart',
    client: 'Vedik Roots Ayurveda',
    category: 'Marketplace',
    period: '6 Months',
    metrics: [
      { label: 'Monthly GMV', value: '₹38 Lakhs', growth: '+850%' },
      { label: 'Target ACOS', value: '16.5%', growth: '-21.5%' },
      { label: 'Category Rank', value: '#3 in Health' },
    ],
    summary:
      'Engineered an aggressive cataloguing & Amazon PPC strategy with keyword-rich A+ content, FBA replenishment algorithms, and automated review collection that catapulted 4 hero SKUs to Best Seller badges.',
    imageUrl:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80',
    tags: ['Amazon FBA', 'Flipkart Assured', 'A+ Content', 'PPC Silos'],
  },
  {
    id: '2',
    slug: 'urban-threads-shopify-performance-ads',
    title: 'Revamping Shopify UI & Performance Meta Ads to Achieve 5.2x Blended ROAS',
    client: 'Urban Threads Apparel',
    category: 'Ads',
    period: '90 Days',
    metrics: [
      { label: 'Blended ROAS', value: '5.2x', growth: '+175%' },
      { label: 'Monthly Orders', value: '6,600+', growth: '14x' },
      { label: 'RTO Drop', value: '14.8%', growth: '-32%' },
    ],
    summary:
      'Redesigned the mobile shopping experience with instant checkout and deployed UGC-driven Reels video ad funnels paired with automated WhatsApp COD verification.',
    imageUrl:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    tags: ['Meta Ads', 'Shopify Plus', 'WhatsApp Bot', 'ROAS Scaling'],
  },
  {
    id: '3',
    slug: 'dermaglow-seo-organic-domination',
    title: 'Dominating Competitive Skincare Search: +420% Organic Revenue Growth in 5 Months',
    client: 'DermaGlow Cosmeceuticals',
    category: 'Web',
    period: '5 Months',
    metrics: [
      { label: 'Organic Revenue', value: '₹22L/Mo', growth: '+420%' },
      { label: 'Top 3 Keywords', value: '46 Keywords' },
      { label: 'Page Load Speed', value: '1.1s', growth: '99/100' },
    ],
    summary:
      'Full technical Core Web Vitals optimization, programmatic SEO category hubs, product review schema integration, and high-authority contextual link generation.',
    imageUrl:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    tags: ['Technical SEO', 'Next.js', 'Core Web Vitals', 'Backlinks'],
  },
  {
    id: '4',
    slug: 'brewkraft-brand-identity-packaging',
    title: 'Complete Visual Identity & Luxury Packaging Suite for Artisanal Coffee Roastery',
    client: 'BrewKraft Artisanal Coffee',
    category: 'Branding',
    period: '6 Weeks',
    metrics: [
      { label: 'Perceived Price Lift', value: '+45%' },
      { label: 'Retail Shelf Pickups', value: '85+ Stores' },
      { label: 'Social Engagement', value: '+310%' },
    ],
    summary:
      'Created a distinctive geometric monogram logo, custom foil-stamped pouch packaging die-lines, and unboxing collateral that established the brand as a luxury artisanal favorite.',
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    tags: ['Packaging Design', 'Brand Identity', '3D Mockups', 'Print Ready'],
  },
  {
    id: '5',
    slug: 'apex-tools-meesho-flipkart-volume',
    title: 'Scaling Tier-2 & Tier-3 Volume on Meesho and Flipkart to 600+ Daily Packages',
    client: 'Apex Pro Gear & Tools',
    category: 'Marketplace',
    period: '4 Months',
    metrics: [
      { label: 'Daily Units', value: '620+', growth: '7.8x' },
      { label: 'Returns Rate', value: '6.2%', growth: '-45%' },
      { label: 'Positive Ratings', value: '4.6 Stars' },
    ],
    summary:
      'Optimised listing variations, competitive price laddering, bundle listings, and strategic tier-2 regional hub fulfillment to unlock massive volume on Meesho and Flipkart.',
    imageUrl:
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1000&q=80',
    tags: ['Meesho Growth', 'Flipkart Smart', 'Cataloguing', 'Pricing Engine'],
  },
  {
    id: '6',
    slug: 'nutrifit-google-pmax-funnel',
    title: 'Google Shopping & Performance Max Architecture Delivering 6.1x tROAS',
    client: 'NutriFit Supplements',
    category: 'Ads',
    period: '3 Months',
    metrics: [
      { label: 'Target ROAS', value: '6.1x', growth: '+210%' },
      { label: 'New Customer Acq.', value: '2,400/Mo' },
      { label: 'Ad Waste Saved', value: '₹3.2L/Mo' },
    ],
    summary:
      'Overhauled Google Merchant Center taxonomy, instituted margin-based campaign segmentation, and leveraged non-skippable YouTube brand halo campaigns.',
    imageUrl:
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Google Shopping', 'Performance Max', 'YouTube Ads', 'tROAS'],
  },
];
