/**
 * FESTIVAL DATES CONFIGURATION (2026 - 2030)
 * All dates are in Indian Standard Time (IST, Asia/Kolkata), format YYYY-MM-DD.
 * Format is [start, end] inclusive (end = start for single-day festivals).
 * Do NOT alter these verified dates.
 */

export const FESTIVAL_DATES = {
  navratri: {
    2026: ["2026-10-11", "2026-10-19"],
    2027: ["2027-09-30", "2027-10-08"],
    2028: ["2028-09-19", "2028-09-26"],
    2029: ["2029-10-08", "2029-10-15"],
    2030: ["2030-09-28", "2030-10-05"],
  },
  dussehra: {
    2026: ["2026-10-20", "2026-10-20"],
    2027: ["2027-10-09", "2027-10-09"],
    2028: ["2028-09-27", "2028-09-27"],
    2029: ["2029-10-16", "2029-10-16"],
    2030: ["2030-10-06", "2030-10-06"],
  },
  diwali: {            // main Lakshmi Puja day; window covers Dhanteras to Bhai Dooj
    2026: ["2026-11-06", "2026-11-10"],  // main day 8 Nov
    2027: ["2027-10-27", "2027-10-31"],  // main day 29 Oct
    2028: ["2028-10-15", "2028-10-19"],  // main day 17 Oct
    2029: ["2029-11-03", "2029-11-07"],  // main day 5 Nov
    2030: ["2030-10-24", "2030-10-28"],  // main day 26 Oct
  },
  holi: {
    2027: ["2027-03-22", "2027-03-22"],
    2028: ["2028-03-11", "2028-03-11"],
    2029: ["2029-02-28", "2029-02-28"],
    2030: ["2030-03-20", "2030-03-20"],
  },
  rakshaBandhan: {
    2027: ["2027-08-17", "2027-08-17"],
    2028: ["2028-08-05", "2028-08-05"],
    2029: ["2029-08-24", "2029-08-24"],
    2030: ["2030-08-13", "2030-08-13"],
  },
  ganeshChaturthi: {   // start = Chaturthi, end = Anant Chaturdashi (visarjan)
    2027: ["2027-09-04", "2027-09-13"],
    2028: ["2028-08-23", "2028-09-01"],
    2029: ["2029-09-11", "2029-09-20"],
    2030: ["2030-09-01", "2030-09-10"],
  },
  eidUlFitr: {         // India expected dates; depends on moon sighting (can shift by 1 day)
    2027: ["2027-03-10", "2027-03-10"],
    2028: ["2028-02-27", "2028-02-27"],
    2029: ["2029-02-15", "2029-02-15"],
    2030: ["2030-02-05", "2030-02-05"],
  },
} as const;

// Recurring fixed-date festivals (work every year automatically)
export const FIXED_FESTIVALS = {
  makarSankranti: { start: "01-14", end: "01-15" },   // covers the 14/15 Jan variation
  republicDay:    { start: "01-26", end: "01-26" },
  independenceDay:{ start: "08-15", end: "08-15" },
  christmas:      { start: "12-25", end: "12-25" },
  newYear:        { start: "12-31", end: "01-01" },   // crosses year boundary, handle it
} as const;

// Metadata defining lead days, tail days, and priority (higher number wins)
export interface FestivalMetadata {
  leadDays: number;
  tailDays: number;
  priority: number;
}

export const FESTIVAL_METADATA: Record<string, FestivalMetadata> = {
  diwali: { leadDays: 14, tailDays: 3, priority: 10 },
  navratri: { leadDays: 2, tailDays: 0, priority: 9 },
  dussehra: { leadDays: 2, tailDays: 1, priority: 8 },
  ganeshChaturthi: { leadDays: 2, tailDays: 1, priority: 8 },
  holi: { leadDays: 4, tailDays: 1, priority: 8 },
  eidUlFitr: { leadDays: 4, tailDays: 2, priority: 8 },
  rakshaBandhan: { leadDays: 5, tailDays: 1, priority: 7 },
  christmas: { leadDays: 10, tailDays: 2, priority: 6 },
  newYear: { leadDays: 5, tailDays: 2, priority: 6 },
  republicDay: { leadDays: 3, tailDays: 0, priority: 5 },
  independenceDay: { leadDays: 5, tailDays: 0, priority: 5 },
  makarSankranti: { leadDays: 2, tailDays: 0, priority: 5 },
};

export type VariableFestivalId = keyof typeof FESTIVAL_DATES;
export type FixedFestivalId = keyof typeof FIXED_FESTIVALS;
export type FestivalId = VariableFestivalId | FixedFestivalId;

/**
 * Normalizes alias IDs to the standard festival ID.
 */
export function normalizeFestivalId(rawId: string): string {
  const map: Record<string, string> = {
    'eid': 'eidUlFitr',
    'sankranti': 'makarSankranti',
    'republic-day': 'republicDay',
    'independence-day': 'independenceDay',
    'raksha-bandhan': 'rakshaBandhan',
    'ganesh-chaturthi': 'ganeshChaturthi',
    'new-year': 'newYear',
  };
  return map[rawId] || rawId;
}

/**
 * Parses YYYY-MM-DD safely into a UTC Date object at 12:00:00 to avoid timezone/DST drift.
 */
export function parseDateUTC(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
}

/**
 * Formats a Date object into YYYY-MM-DD.
 */
export function formatDateUTC(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Adds or subtracts days from a YYYY-MM-DD date string.
 */
export function addDays(dateStr: string, days: number): string {
  const dt = parseDateUTC(dateStr);
  dt.setUTCDate(dt.getUTCDate() + days);
  return formatDateUTC(dt);
}

/**
 * Returns the current date formatted as YYYY-MM-DD in Indian Standard Time (Asia/Kolkata).
 */
export function getISTDateString(date?: Date): string {
  const target = date || new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(target);
  } catch {
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(target.getTime() + istOffset);
    return istDate.toISOString().split('T')[0];
  }
}

/**
 * Returns the current year in Indian Standard Time.
 */
export function getISTYear(date?: Date): number {
  return parseInt(getISTDateString(date).slice(0, 4), 10);
}

export interface ResolvedDates {
  festivalId: string;
  coreStart: string;
  coreEnd: string;
  activeStart: string;
  activeEnd: string;
  leadDays: number;
  tailDays: number;
  priority: number;
}

/**
 * Resolves the core and active (lead/tail inclusive) dates for a festival in a given year.
 */
export function getFestivalResolvedDates(
  rawId: string,
  year: number
): ResolvedDates | null {
  const id = normalizeFestivalId(rawId);
  const meta = FESTIVAL_METADATA[id] || { leadDays: 0, tailDays: 0, priority: 5 };

  // 1. Variable date festivals
  if (id in FESTIVAL_DATES) {
    const yearMap = (FESTIVAL_DATES as Record<string, Record<number, readonly [string, string]>>)[id];
    const dates = yearMap?.[year];
    if (!dates) {
      return null;
    }
    const coreStart = dates[0];
    const coreEnd = dates[1];
    const activeStart = addDays(coreStart, -meta.leadDays);
    const activeEnd = addDays(coreEnd, meta.tailDays);
    return {
      festivalId: id,
      coreStart,
      coreEnd,
      activeStart,
      activeEnd,
      leadDays: meta.leadDays,
      tailDays: meta.tailDays,
      priority: meta.priority,
    };
  }

  // 2. Fixed recurring festivals
  if (id in FIXED_FESTIVALS) {
    const fixed = (FIXED_FESTIVALS as Record<string, { start: string; end: string }>)[id];
    let coreStart: string;
    let coreEnd: string;

    if (id === 'newYear') {
      // Welcoming the year 'year' (celebrated Dec 31 of year-1 to Jan 1 of year)
      coreStart = `${year - 1}-12-31`;
      coreEnd = `${year}-01-01`;
    } else {
      coreStart = `${year}-${fixed.start}`;
      coreEnd = `${year}-${fixed.end}`;
    }

    const activeStart = addDays(coreStart, -meta.leadDays);
    const activeEnd = addDays(coreEnd, meta.tailDays);
    return {
      festivalId: id,
      coreStart,
      coreEnd,
      activeStart,
      activeEnd,
      leadDays: meta.leadDays,
      tailDays: meta.tailDays,
      priority: meta.priority,
    };
  }

  return null;
}

/**
 * Resolves all festival windows for a given year.
 */
export function getAllResolvedFestivalWindows(year: number): ResolvedDates[] {
  const allIds = [
    ...Object.keys(FESTIVAL_DATES),
    ...Object.keys(FIXED_FESTIVALS),
  ];

  const results: ResolvedDates[] = [];
  for (const id of allIds) {
    const resolved = getFestivalResolvedDates(id, year);
    if (resolved) {
      results.push(resolved);
    }
  }

  return results.sort((a, b) => a.activeStart.localeCompare(b.activeStart));
}

export interface CandidateFestivalMatch extends ResolvedDates {
  isCore: boolean;
}

/**
 * Resolves the active festival ID for a given date in IST (YYYY-MM-DD).
 * Handles year boundaries, lead/tail days, priority, and core-day tie-breaking.
 */
export function resolveActiveFestivalId(dateStr: string): string | null {
  const currentYear = parseInt(dateStr.slice(0, 4), 10);

  // Startup dev check: warn if year is later than 2030
  if (process.env.NODE_ENV !== 'production' && currentYear > 2030) {
    console.warn(
      `Festival dates file /config/festivalDates.ts needs updating for years beyond 2030 (current year: ${currentYear})`
    );
  }

  // To seamlessly handle year boundaries and cross-year lead/tail days,
  // evaluate candidate festivals from year - 1, year, and year + 1.
  const candidateYears = [currentYear - 1, currentYear, currentYear + 1];
  const allIds = [
    ...Object.keys(FESTIVAL_DATES),
    ...Object.keys(FIXED_FESTIVALS),
  ];

  const matches: CandidateFestivalMatch[] = [];

  for (const yr of candidateYears) {
    for (const id of allIds) {
      const resolved = getFestivalResolvedDates(id, yr);
      if (!resolved) {
        // In dev mode, check if a variable festival was requested for this year
        if (
          yr === currentYear &&
          id in FESTIVAL_DATES &&
          process.env.NODE_ENV !== 'production'
        ) {
          // Log dev-only warning if completely missing
          // console.warn(`Festival dates missing for ${yr}: update /config/festivalDates.ts`);
        }
        continue;
      }

      if (dateStr >= resolved.activeStart && dateStr <= resolved.activeEnd) {
        const isCore = dateStr >= resolved.coreStart && dateStr <= resolved.coreEnd;
        matches.push({
          ...resolved,
          isCore,
        });
      }
    }
  }

  if (matches.length === 0) {
    return null;
  }

  // Sort candidate matches:
  // 1. Priority (higher wins)
  // 2. Core celebration days beat lead/tail days when priorities are equal
  // 3. Proximity: later coreStart or earlier activeStart
  matches.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    if (a.isCore !== b.isCore) {
      return a.isCore ? -1 : 1;
    }
    return a.coreStart.localeCompare(b.coreStart);
  });

  return matches[0].festivalId;
}
