export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarBg: string;
  rating: number;
  highlight: string;
  quote: string;
  metric: string;
  category: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Vikramaditya Singhania',
    role: 'Founder & CEO',
    company: 'Vedik Roots Ayurveda',
    avatarInitials: 'VS',
    avatarBg: 'bg-emerald-500',
    rating: 5,
    highlight: 'Amazon monthly revenue surged from ₹4L to ₹38L in 6 months',
    quote:
      'Brandies Media completely transformed our Amazon India and Flipkart presence. Their A+ cataloguing, FBA stock balancing, and daily PPC bid management dropped our ACOS from 38% down to 16.5%. Best e-commerce partner we have worked with.',
    metric: '9.5x Revenue Growth',
    category: 'Marketplace',
  },
  {
    id: '2',
    name: 'Ananya Sharma',
    role: 'Co-Founder',
    company: 'Urban Threads Apparel',
    avatarInitials: 'AS',
    avatarBg: 'bg-indigo-500',
    rating: 5,
    highlight: 'Scaled Shopify store from 15 orders/day to 220+ orders/day',
    quote:
      'We were struggling with 35% COD cancellations and high Meta CAC. Brandies Media redesigned our Shopify store with instant checkout and built an automated WhatsApp confirmation workflow that cut our RTO by 32%. Our ROAS went from 1.9x to 5.2x!',
    metric: '5.2x Blended ROAS',
    category: 'Shopify & Ads',
  },
  {
    id: '3',
    name: 'Rajesh K. Mehta',
    role: 'Director',
    company: 'Apex Pro Gear & Tools',
    avatarInitials: 'RM',
    avatarBg: 'bg-amber-500',
    rating: 5,
    highlight: 'Meesho and Flipkart daily order volume reached 600+ units',
    quote:
      'Their marketplace growth strategy for tier-2 and tier-3 cities is unbelievable. The team knows the ins and outs of Flipkart algorithm indexing and Meesho price buckets. They handle everything so we can focus solely on manufacturing.',
    metric: '600+ Daily Units',
    category: 'Marketplace',
  },
  {
    id: '4',
    name: 'Dr. Meera Nambiar',
    role: 'Managing Director',
    company: 'DermaGlow Cosmeceuticals',
    avatarInitials: 'MN',
    avatarBg: 'bg-pink-500',
    rating: 5,
    highlight: 'Rank #1 on Google for 40+ high-volume skincare keywords',
    quote:
      'Brandies Media’s SEO and content team are world-class. Within 5 months, our organic search traffic grew by 420%, bringing in consistent high-ticket orders with zero ad spend. Their technical schema setup gave us rich Google snippets.',
    metric: '+420% Organic Search',
    category: 'SEO',
  },
  {
    id: '5',
    name: 'Gaurav Chawla',
    role: 'Head of Growth',
    company: 'BrewKraft Artisanal Coffee',
    avatarInitials: 'GC',
    avatarBg: 'bg-cyan-500',
    rating: 5,
    highlight: 'High-converting Meta Ads & WhatsApp drip sequence',
    quote:
      'The creative testing sprint they run every single week is phenomenal. Fresh UGC hooks, crisp video edits, and clear conversion funnels. The WhatsApp abandoned cart recovery alone recouped ₹8.4 Lakhs in lost sales last quarter.',
    metric: '₹8.4L Recovered Carts',
    category: 'WhatsApp Automation',
  },
  {
    id: '6',
    name: 'Pooja Deshmukh',
    role: 'Founder',
    company: 'EarthBorn Baby Care',
    avatarInitials: 'PD',
    avatarBg: 'bg-rose-500',
    rating: 5,
    highlight: 'Complete brand overhaul & custom Next.js storefront',
    quote:
      'From packaging design to our headless Next.js web application, Brandies Media brought unmatched polish to our brand. Our site loads in under 1.2 seconds, and the customer feedback on our new aesthetic has been overwhelming.',
    metric: '1.2s Load Speed',
    category: 'Branding & Web',
  },
  {
    id: '7',
    name: 'Harish Rathi',
    role: 'Founder',
    company: 'NutriFit Supplements',
    avatarInitials: 'HR',
    avatarBg: 'bg-teal-500',
    rating: 5,
    highlight: 'Google Performance Max scaling with 6.1x ROAS',
    quote:
      'They fixed our Merchant Center feed issues that had halted our Google Shopping for 3 weeks, rebuilt our PMax campaigns, and scaled profitable customer acquisition across search and YouTube.',
    metric: '6.1x Google ROAS',
    category: 'Google Ads',
  },
  {
    id: '8',
    name: 'Sunita Banerjee',
    role: 'E-commerce Lead',
    company: 'Kolkata Krafts Handloom',
    avatarInitials: 'SB',
    avatarBg: 'bg-purple-500',
    rating: 5,
    highlight: 'Turned a heritage offline brand into a pan-India D2C sensation',
    quote:
      'Brandies Media is more than an agency; they are our extended growth arm. One weekly call, transparent Slack communication, and relentless focus on net profit margins rather than vanity metrics.',
    metric: 'Pan-India Reach',
    category: 'D2C Scaling',
  },
];
