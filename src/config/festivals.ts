import {
  FESTIVAL_METADATA,
  getFestivalResolvedDates,
  getISTDateString,
  getISTYear,
  normalizeFestivalId,
  resolveActiveFestivalId,
} from './festivalDates';

export type DecorationType =
  | 'hangingLanterns'
  | 'fairyLights'
  | 'mandalaBackdrop'
  | 'rangoliCorner'
  | 'dotRings'
  | 'fallingPetals'
  | 'floatingDiyas'
  | 'holiColors'
  | 'christmasSnow'
  | 'newYearConfetti'
  | 'tricolorBunting'
  | 'eidCrescentStars'
  | 'sankrantiKites';

export interface FestivalConfig {
  id: string;
  aliases?: string[];
  name: string;
  startDate: string; // Active start date (coreStart - leadDays) for the current year
  endDate: string;   // Active end date (coreEnd + tailDays) for the current year
  coreStartDate?: string;
  coreEndDate?: string;
  leadDays?: number;
  tailDays?: number;
  theme: string;
  offerText: string;
  couponCode: string;
  discountPercent: number;
  decorations: DecorationType[];
  colors: {
    primary: string;
    accent: string;
    glow: string;
    badgeBg?: string;
  };
  greeting: string;
  priority: number;
}

export const festiveModeOverride: 'auto' | 'off' | string =
  process.env.NEXT_PUBLIC_FESTIVE_MODE || 'auto';

// Base festival templates (independent of year-specific dates)
export const baseFestivals: Omit<FestivalConfig, 'startDate' | 'endDate'>[] = [
  // 1. DIWALI (DEEPAVALI) - Priority 10
  {
    id: 'diwali',
    name: 'Diwali',
    theme: 'diwali',
    offerText: 'Diwali Dhamaka · Flat 15% OFF on all marketplace & ads packages',
    couponCode: 'DIWALI15',
    discountPercent: 15,
    decorations: [
      'hangingLanterns',
      'fairyLights',
      'mandalaBackdrop',
      'rangoliCorner',
      'fallingPetals',
      'floatingDiyas',
      'newYearConfetti',
    ],
    colors: {
      primary: '#F59E0B',
      accent: '#EF4444',
      glow: 'rgba(245, 158, 11, 0.55)',
      badgeBg: 'bg-amber-500/15 text-amber-950 border-amber-400',
    },
    greeting: '🪔 Happy Diwali! Illuminate your e-commerce revenue with Brandies Media.',
    priority: FESTIVAL_METADATA.diwali.priority,
    leadDays: FESTIVAL_METADATA.diwali.leadDays,
    tailDays: FESTIVAL_METADATA.diwali.tailDays,
  },

  // 2. NAVRATRI - Priority 9
  {
    id: 'navratri',
    name: 'Navratri',
    theme: 'navratri',
    offerText: 'Navratri Mahotsav · Flat 10% OFF on all growth retainers',
    couponCode: 'NAVRATRI10',
    discountPercent: 10,
    decorations: [
      'hangingLanterns',
      'fairyLights',
      'mandalaBackdrop',
      'rangoliCorner',
      'dotRings',
      'fallingPetals',
      'floatingDiyas',
    ],
    colors: {
      primary: '#EA580C',
      accent: '#FBBF24',
      glow: 'rgba(234, 88, 12, 0.45)',
      badgeBg: 'bg-orange-500/10 text-orange-800 border-orange-300',
    },
    greeting: '✨ Shubh Navratri! May Goddess Durga bless your brand with unstoppable growth.',
    priority: FESTIVAL_METADATA.navratri.priority,
    leadDays: FESTIVAL_METADATA.navratri.leadDays,
    tailDays: FESTIVAL_METADATA.navratri.tailDays,
  },

  // 3. DUSSEHRA (VIJAYADASHAMI) - Priority 8
  {
    id: 'dussehra',
    name: 'Dussehra',
    theme: 'dussehra',
    offerText: 'Dussehra Special · Conquer your market with Flat 10% OFF',
    couponCode: 'VIJAY10',
    discountPercent: 10,
    decorations: [
      'mandalaBackdrop',
      'fairyLights',
      'fallingPetals',
      'tricolorBunting',
      'hangingLanterns',
    ],
    colors: {
      primary: '#D97706',
      accent: '#B45309',
      glow: 'rgba(217, 119, 6, 0.4)',
      badgeBg: 'bg-amber-500/10 text-amber-900 border-amber-300',
    },
    greeting: '🏹 Happy Dussehra! Victory of genuine performance over vanity metrics.',
    priority: FESTIVAL_METADATA.dussehra.priority,
    leadDays: FESTIVAL_METADATA.dussehra.leadDays,
    tailDays: FESTIVAL_METADATA.dussehra.tailDays,
  },

  // 4. GANESH CHATURTHI - Priority 8
  {
    id: 'ganeshChaturthi',
    aliases: ['ganesh-chaturthi'],
    name: 'Ganesh Chaturthi',
    theme: 'ganesh',
    offerText: 'Ganesh Utsav · Auspicious beginnings for your brand with 10% OFF',
    couponCode: 'BAPPA10',
    discountPercent: 10,
    decorations: [
      'mandalaBackdrop',
      'hangingLanterns',
      'fallingPetals',
      'floatingDiyas',
      'fairyLights',
    ],
    colors: {
      primary: '#DC2626',
      accent: '#F59E0B',
      glow: 'rgba(220, 38, 38, 0.45)',
      badgeBg: 'bg-red-500/10 text-red-900 border-amber-300',
    },
    greeting: '🐘 Ganpati Bappa Morya! Removing all obstacles from your growth journey.',
    priority: FESTIVAL_METADATA.ganeshChaturthi.priority,
    leadDays: FESTIVAL_METADATA.ganeshChaturthi.leadDays,
    tailDays: FESTIVAL_METADATA.ganeshChaturthi.tailDays,
  },

  // 5. HOLI - Priority 8
  {
    id: 'holi',
    name: 'Holi',
    theme: 'holi',
    offerText: 'Holi Color Splash · Add vibrant growth to your brand with 12% OFF',
    couponCode: 'HOLI12',
    discountPercent: 12,
    decorations: [
      'holiColors',
      'dotRings',
      'fairyLights',
    ],
    colors: {
      primary: '#EC4899',
      accent: '#8B5CF6',
      glow: 'rgba(236, 72, 153, 0.45)',
      badgeBg: 'bg-pink-500/10 text-pink-900 border-pink-300',
    },
    greeting: '🎨 Happy Holi! Splash your business with high ROAS and vibrant profits.',
    priority: FESTIVAL_METADATA.holi.priority,
    leadDays: FESTIVAL_METADATA.holi.leadDays,
    tailDays: FESTIVAL_METADATA.holi.tailDays,
  },

  // 6. EID UL-FITR - Priority 8
  {
    id: 'eidUlFitr',
    aliases: ['eid'],
    name: 'Eid Mubarak',
    theme: 'eid',
    offerText: 'Eid Mubarak Special · Celebrate prosperous growth with Flat 10% OFF',
    couponCode: 'EID10',
    discountPercent: 10,
    decorations: [
      'eidCrescentStars',
      'hangingLanterns',
      'fairyLights',
    ],
    colors: {
      primary: '#059669',
      accent: '#FBBF24',
      glow: 'rgba(5, 150, 105, 0.45)',
      badgeBg: 'bg-emerald-500/10 text-emerald-900 border-emerald-300',
    },
    greeting: '🌙 Eid Mubarak! Wishing prosperity and continuous scale to your venture.',
    priority: FESTIVAL_METADATA.eidUlFitr.priority,
    leadDays: FESTIVAL_METADATA.eidUlFitr.leadDays,
    tailDays: FESTIVAL_METADATA.eidUlFitr.tailDays,
  },

  // 7. RAKSHA BANDHAN - Priority 7
  {
    id: 'rakshaBandhan',
    aliases: ['raksha-bandhan'],
    name: 'Raksha Bandhan',
    theme: 'rakhi',
    offerText: 'Raksha Bandhan Special · Protecting your brand margins with 10% OFF',
    couponCode: 'RAKHI10',
    discountPercent: 10,
    decorations: [
      'fairyLights',
      'dotRings',
      'fallingPetals',
    ],
    colors: {
      primary: '#E11D48',
      accent: '#F59E0B',
      glow: 'rgba(225, 29, 72, 0.4)',
      badgeBg: 'bg-rose-500/10 text-rose-900 border-rose-300',
    },
    greeting: '🧵 Happy Raksha Bandhan! Protecting and nurturing your brand like family.',
    priority: FESTIVAL_METADATA.rakshaBandhan.priority,
    leadDays: FESTIVAL_METADATA.rakshaBandhan.leadDays,
    tailDays: FESTIVAL_METADATA.rakshaBandhan.tailDays,
  },

  // 8. CHRISTMAS - Priority 6
  {
    id: 'christmas',
    name: 'Christmas',
    theme: 'christmas',
    offerText: 'Holiday Joy · Gift your store the gift of scale with 15% OFF',
    couponCode: 'SANTA15',
    discountPercent: 15,
    decorations: [
      'christmasSnow',
      'fairyLights',
    ],
    colors: {
      primary: '#DC2626',
      accent: '#15803D',
      glow: 'rgba(220, 38, 38, 0.4)',
      badgeBg: 'bg-red-500/10 text-red-900 border-emerald-300',
    },
    greeting: '🎄 Merry Christmas! Celebrate the season of giving with high conversion rates.',
    priority: FESTIVAL_METADATA.christmas.priority,
    leadDays: FESTIVAL_METADATA.christmas.leadDays,
    tailDays: FESTIVAL_METADATA.christmas.tailDays,
  },

  // 9. NEW YEAR - Priority 6
  {
    id: 'newYear',
    aliases: ['new-year'],
    name: 'New Year',
    theme: 'newyear',
    offerText: 'New Year Kickoff · Scale 10x this year with Flat 20% OFF',
    couponCode: 'NEWYEAR20',
    discountPercent: 20,
    decorations: [
      'newYearConfetti',
      'fairyLights',
      'dotRings',
    ],
    colors: {
      primary: '#7C3AED',
      accent: '#06B6D4',
      glow: 'rgba(124, 58, 237, 0.5)',
      badgeBg: 'bg-purple-500/10 text-purple-900 border-cyan-300',
    },
    greeting: '🎆 Happy New Year! Make this the year your brand crosses ₹10 Crore GMV.',
    priority: FESTIVAL_METADATA.newYear.priority,
    leadDays: FESTIVAL_METADATA.newYear.leadDays,
    tailDays: FESTIVAL_METADATA.newYear.tailDays,
  },

  // 10. REPUBLIC DAY - Priority 5
  {
    id: 'republicDay',
    aliases: ['republic-day'],
    name: 'Republic Day',
    theme: 'patriotic',
    offerText: 'Republic Day Honour · Flat 10% OFF for Made-in-India Brands',
    couponCode: 'INDIA10',
    discountPercent: 10,
    decorations: [
      'tricolorBunting',
      'fairyLights',
    ],
    colors: {
      primary: '#F97316',
      accent: '#16A34A',
      glow: 'rgba(249, 115, 22, 0.4)',
      badgeBg: 'bg-orange-500/10 text-orange-900 border-emerald-400',
    },
    greeting: '🇮🇳 Happy Republic Day! Empowering Indian brands to dominate global commerce.',
    priority: FESTIVAL_METADATA.republicDay.priority,
    leadDays: FESTIVAL_METADATA.republicDay.leadDays,
    tailDays: FESTIVAL_METADATA.republicDay.tailDays,
  },

  // 11. INDEPENDENCE DAY - Priority 5
  {
    id: 'independenceDay',
    aliases: ['independence-day'],
    name: 'Independence Day',
    theme: 'patriotic',
    offerText: 'Independence Day · Freedom from ad waste with Flat 15% OFF',
    couponCode: 'FREEDOM15',
    discountPercent: 15,
    decorations: [
      'tricolorBunting',
      'fairyLights',
    ],
    colors: {
      primary: '#F97316',
      accent: '#16A34A',
      glow: 'rgba(249, 115, 22, 0.45)',
      badgeBg: 'bg-orange-500/10 text-orange-900 border-emerald-400',
    },
    greeting: '🇮🇳 Happy Independence Day! Freedom from sluggish sales and wasted ad spend.',
    priority: FESTIVAL_METADATA.independenceDay.priority,
    leadDays: FESTIVAL_METADATA.independenceDay.leadDays,
    tailDays: FESTIVAL_METADATA.independenceDay.tailDays,
  },

  // 12. MAKAR SANKRANTI - Priority 5
  {
    id: 'makarSankranti',
    aliases: ['sankranti'],
    name: 'Makar Sankranti',
    theme: 'sankranti',
    offerText: 'Sankranti Fly High · Take your sales to new heights with 10% OFF',
    couponCode: 'KITE10',
    discountPercent: 10,
    decorations: [
      'sankrantiKites',
      'fairyLights',
      'dotRings',
    ],
    colors: {
      primary: '#0284C7',
      accent: '#F59E0B',
      glow: 'rgba(2, 132, 199, 0.4)',
      badgeBg: 'bg-sky-500/10 text-sky-900 border-sky-300',
    },
    greeting: '🪁 Happy Makar Sankranti! Watch your brand soar like kites in the sky.',
    priority: FESTIVAL_METADATA.makarSankranti.priority,
    leadDays: FESTIVAL_METADATA.makarSankranti.leadDays,
    tailDays: FESTIVAL_METADATA.makarSankranti.tailDays,
  },
];

/**
 * Returns the fully resolved list of festivals for any given year,
 * with active start and end dates (including lead/tail offsets) populated automatically.
 */
export function getFestivalsList(year?: number): FestivalConfig[] {
  const targetYear = year ?? getISTYear();

  return baseFestivals.map((base) => {
    const dates = getFestivalResolvedDates(base.id, targetYear);
    return {
      ...base,
      startDate: dates ? dates.activeStart : `${targetYear}-01-01`,
      endDate: dates ? dates.activeEnd : `${targetYear}-01-01`,
      coreStartDate: dates?.coreStart,
      coreEndDate: dates?.coreEnd,
    };
  });
}

/**
 * Default festivals list for the current IST year.
 */
export const festivalsList: FestivalConfig[] = getFestivalsList();

/**
 * Finds a festival configuration by ID or alias.
 */
export function findFestivalById(
  idOrAlias: string,
  year?: number
): FestivalConfig | undefined {
  const list = getFestivalsList(year);
  const normalized = normalizeFestivalId(idOrAlias);
  return list.find(
    (f) =>
      f.id === normalized ||
      f.id === idOrAlias ||
      f.aliases?.includes(idOrAlias) ||
      f.aliases?.includes(normalized)
  );
}
