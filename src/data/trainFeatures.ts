export interface TrainCoach {
  coachNumber: string;
  badge: string;
  title: string;
  description: string;
  topColor: string;
  iconBg: string;
  iconName: string;
  perks: string[];
}

export const trainFeaturesData: TrainCoach[] = [
  {
    coachNumber: '01',
    badge: 'ALL-IN-ONE SOLUTION',
    title: 'Everything Under One Roof',
    description:
      'No more coordinating between 4 separate agencies for ads, marketplace listings, Shopify development, and design. One synchronized growth engine handles your entire digital lifecycle.',
    topColor: '#15D8E1',
    iconBg: 'from-cyan-400 to-teal-500',
    iconName: 'Building2',
    perks: ['Marketplaces + Ads + Dev + Design', 'Zero communication friction', 'Unified brand voice'],
  },
  {
    coachNumber: '02',
    badge: 'METRICS THAT MATTER',
    title: 'Real Numbers, Full Transparency',
    description:
      'We don’t hide behind vanity impressions or fake click metrics. You get live 24/7 access to dashboards reporting net revenue, blended ROAS, exact ACOS, and bottom-line margin growth.',
    topColor: '#10B981',
    iconBg: 'from-emerald-400 to-teal-600',
    iconName: 'BarChart3',
    perks: ['Real-time revenue telemetry', 'Daily ad spend accounting', 'Zero hidden markup fees'],
  },
  {
    coachNumber: '03',
    badge: 'SINGLE POINT OF CONTACT',
    title: 'Dedicated Growth Manager',
    description:
      'You are never passed around to interns or junior ticket queues. A seasoned e-commerce strategist leads your account, backed by specialized PPC, copywriting, and engineering pods.',
    topColor: '#6366F1',
    iconBg: 'from-indigo-500 to-purple-600',
    iconName: 'UserCheck',
    perks: ['Direct WhatsApp & Slack access', 'Weekly strategic video calls', 'Fast response guarantee'],
  },
  {
    coachNumber: '04',
    badge: 'SPEED & INTEGRITY',
    title: 'Fast Execution, Honest Advice',
    description:
      'In digital commerce, speed is your biggest competitive advantage. We execute campaigns in hours, not weeks, and give you brutally honest feedback on product pricing and market viability.',
    topColor: '#F59E0B',
    iconBg: 'from-amber-400 to-orange-500',
    iconName: 'Zap',
    perks: ['48-hour campaign turnarounds', 'Unfiltered strategic feedback', 'Agile sprint methodology'],
  },
];
