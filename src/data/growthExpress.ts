export interface GrowthCoachData {
  number: string;
  theme: {
    primary: string; // outline and border
    accent: string;  // bar, glow, tags
    gradient: string;// icon tile
    numberColor: string;
  };
  iconName: 'Layers' | 'BarChart3' | 'UserCheck' | 'Zap';
  title: string;
  description: string;
  perks: string[];
}

export const growthCoachesData: GrowthCoachData[] = [
  {
    number: '01',
    theme: {
      primary: '#15D8E1',
      accent: '#0AB6C4',
      gradient: 'from-cyan-400 via-[#15D8E1] to-teal-500',
      numberColor: 'rgba(21, 216, 225, 0.18)',
    },
    iconName: 'Layers',
    title: 'Everything under one roof',
    description:
      'Marketplaces, marketing, SEO, websites and branding — all working to one strategy. One team accountable for the whole result.',
    perks: ['Marketplaces + Ads + Dev + Design', 'Zero communication friction', 'Single strategy flywheel'],
  },
  {
    number: '02',
    theme: {
      primary: '#6366F1',
      accent: '#4F46E5',
      gradient: 'from-indigo-400 via-indigo-500 to-purple-600',
      numberColor: 'rgba(99, 102, 241, 0.18)',
    },
    iconName: 'BarChart3',
    title: 'Real numbers, full transparency',
    description:
      'Clear reports and honest updates. You always know exactly what’s happening, what it costs, and what it returned.',
    perks: ['Live revenue dashboards', 'Daily ad spend accounting', 'Zero hidden agency markups'],
  },
  {
    number: '03',
    theme: {
      primary: '#10B981',
      accent: '#059669',
      gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
      numberColor: 'rgba(16, 185, 129, 0.18)',
    },
    iconName: 'UserCheck',
    title: 'A dedicated growth manager',
    description:
      'One point of contact who knows your business and answers fast — no ticket queues, no handoffs.',
    perks: ['Direct WhatsApp & Slack hotline', 'Weekly strategic video calls', '15-min SLA response'],
  },
  {
    number: '04',
    theme: {
      primary: '#F59E0B',
      accent: '#D97706',
      gradient: 'from-amber-400 via-amber-500 to-orange-500',
      numberColor: 'rgba(245, 158, 11, 0.18)',
    },
    iconName: 'Zap',
    title: 'Fast execution, honest advice',
    description:
      'We move quickly, tell you what will and won’t work, and never sell what you don’t need.',
    perks: ['48-hour campaign turnarounds', 'Unfiltered strategic feedback', 'Agile sprint methodology'],
  },
];
