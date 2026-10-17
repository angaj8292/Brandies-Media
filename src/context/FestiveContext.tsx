'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useActiveFestival } from '@/hooks/useActiveFestival';
import { FestivalConfig } from '@/config/festivals';

interface FestiveContextType {
  activeFestival: FestivalConfig | null;
  isFestiveActive: boolean;
  isUserDisabled: boolean;
  toggleFestive: () => void;
  setOverride: (mode: string | null) => void;
  currentOverride: string;
  currentISTDate: string;
  allFestivals: FestivalConfig[];
}

const FestiveContext = createContext<FestiveContextType>({
  activeFestival: null,
  isFestiveActive: false,
  isUserDisabled: false,
  toggleFestive: () => {},
  setOverride: () => {},
  currentOverride: 'auto',
  currentISTDate: '',
  allFestivals: [],
});

export const FestiveProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const festiveState = useActiveFestival();
  const { activeFestival } = festiveState;

  // Apply CSS variables at document level when festival is active
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    if (activeFestival) {
      root.style.setProperty('--festival-primary', activeFestival.colors.primary);
      root.style.setProperty('--festival-accent', activeFestival.colors.accent);
      root.style.setProperty('--festival-glow', activeFestival.colors.glow);
      root.dataset.festival = activeFestival.id;
    } else {
      root.style.removeProperty('--festival-primary');
      root.style.removeProperty('--festival-accent');
      root.style.removeProperty('--festival-glow');
      delete root.dataset.festival;
    }
  }, [activeFestival]);

  return (
    <FestiveContext.Provider value={festiveState}>
      {children}
    </FestiveContext.Provider>
  );
};

export const useFestive = () => useContext(FestiveContext);
