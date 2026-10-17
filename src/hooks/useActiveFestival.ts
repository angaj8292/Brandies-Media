'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  festivalsList,
  FestivalConfig,
  festiveModeOverride,
  findFestivalById,
  getFestivalsList,
} from '@/config/festivals';
import {
  getISTDateString,
  getISTYear,
  resolveActiveFestivalId,
  normalizeFestivalId,
  FESTIVAL_DATES,
  FESTIVAL_METADATA,
  addDays,
} from '@/config/festivalDates';

// Re-export for components that need IST date helper
export { getISTDateString };

export function useActiveFestival() {
  const [override, setOverrideState] = useState<string | null>(null);
  const [isUserDisabled, setIsUserDisabled] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [apiHolidayData, setApiHolidayData] = useState<any[] | null>(null);

  // Startup dev checks
  useEffect(() => {
    setIsMounted(true);

    const currentYear = getISTYear();
    if (process.env.NODE_ENV !== 'production' && currentYear > 2030) {
      console.warn(
        `Festival dates file /config/festivalDates.ts needs updating for years beyond 2030 (current year: ${currentYear})`
      );
    }

    // Read visitor preferences from localStorage
    try {
      const savedUserDisabled = localStorage.getItem('brandies_festive_disabled');
      if (savedUserDisabled === 'true') {
        setIsUserDisabled(true);
      }

      const savedOverride = localStorage.getItem('brandies_festive_override');
      if (savedOverride) {
        setOverrideState(savedOverride);
      }
    } catch {
      // Ignore localStorage errors in private browsing/sandboxes
    }
  }, []);

  const toggleFestive = useCallback(() => {
    setIsUserDisabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('brandies_festive_disabled', String(next));
      } catch {}
      return next;
    });
  }, []);

  const setOverride = useCallback((mode: string | null) => {
    setOverrideState(mode);
    try {
      if (mode && mode !== 'auto') {
        localStorage.setItem('brandies_festive_override', mode);
      } else {
        localStorage.removeItem('brandies_festive_override');
      }
    } catch {}
  }, []);

  // Compute active festival
  const activeFestival = useMemo<FestivalConfig | null>(() => {
    // 1. If visitor explicitly toggled festive theme OFF, return null
    if (isUserDisabled) {
      return null;
    }

    // 2. Check manual override (priority: localStorage override > env override)
    const effectiveMode = override || festiveModeOverride;

    if (effectiveMode === 'off') {
      return null;
    }

    const currentYear = isMounted ? getISTYear() : 2026;

    if (effectiveMode && effectiveMode !== 'auto') {
      const found = findFestivalById(effectiveMode, currentYear);
      if (found) return found;
    }

    // 3. Auto resolution based on current IST Date (Asia/Kolkata)
    const istDate = getISTDateString();
    const activeId = resolveActiveFestivalId(istDate);

    if (activeId) {
      const found = findFestivalById(activeId, currentYear);
      if (found) return found;
    }

    // 4. Fallback check: if date has no active entry in local table
    // check if this is an unconfigured year needing Calendarific fallback
    return null;
  }, [override, isUserDisabled, isMounted]);

  // Fallback to Calendarific API route if dates are missing for the current year
  useEffect(() => {
    if (!isMounted) return;
    const currentYear = getISTYear();

    // Check if variable festival dates are missing for the current year
    const isYearMissing = !Object.values(FESTIVAL_DATES).some(
      (yearMap) => currentYear in (yearMap as Record<number, any>)
    );

    if (isYearMissing && !apiHolidayData) {
      fetch(`/api/festivals?year=${currentYear}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.holidays?.length) {
            setApiHolidayData(data.holidays);
          } else if (process.env.NODE_ENV !== 'production') {
            console.warn(
              `Festival dates missing for ${currentYear}: update /config/festivalDates.ts`
            );
          }
        })
        .catch(() => {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(
              `Festival dates missing for ${currentYear}: update /config/festivalDates.ts`
            );
          }
        });
    }
  }, [isMounted, apiHolidayData]);

  const currentYear = isMounted ? getISTYear() : 2026;
  const currentFestivalsList = useMemo(
    () => getFestivalsList(currentYear),
    [currentYear]
  );

  return {
    activeFestival,
    isFestiveActive: Boolean(activeFestival),
    isUserDisabled,
    toggleFestive,
    setOverride,
    currentOverride: override || festiveModeOverride,
    currentISTDate: isMounted ? getISTDateString() : '',
    allFestivals: currentFestivalsList,
  };
}
