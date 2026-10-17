'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';
import { Sparkles, EyeOff } from 'lucide-react';

interface FestiveToggleSwitchProps {
  variant?: 'floating' | 'inline';
}

export const FestiveToggleSwitch: React.FC<FestiveToggleSwitchProps> = ({
  variant = 'floating',
}) => {
  const { isFestiveActive, isUserDisabled, toggleFestive, activeFestival } =
    useFestive();

  if (variant === 'inline') {
    return (
      <button
        onClick={toggleFestive}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all text-slate-400 hover:text-white border-slate-700 hover:border-slate-500"
        title="Toggle festive decorations on or off"
      >
        <Sparkles className={`w-3.5 h-3.5 ${!isUserDisabled ? 'text-amber-400' : 'text-slate-500'}`} />
        <span>Festive Theme: {!isUserDisabled ? 'ON' : 'OFF'}</span>
      </button>
    );
  }

  // Floating variant in the bottom-left corner
  return (
    <div className="fixed bottom-6 left-5 sm:left-8 z-40 select-none">
      <button
        onClick={toggleFestive}
        className="group relative flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-heading font-bold shadow-lg border border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        aria-label="Toggle festive theme"
        title="Toggle festive animations and decorations"
      >
        <Sparkles
          className={`w-4 h-4 transition-colors ${
            !isUserDisabled ? 'text-amber-300 animate-spin' : 'text-slate-500'
          }`}
          style={{ animationDuration: '6s' }}
        />
        <span className="hidden sm:inline text-[11px]">
          Festive: {!isUserDisabled ? (activeFestival ? activeFestival.name : 'ON') : 'OFF'}
        </span>
        <span
          className={`w-2 h-2 rounded-full ${
            !isUserDisabled ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'
          }`}
        />

        {/* Hover Tooltip */}
        <span className="absolute left-0 bottom-full mb-2 px-2.5 py-1 bg-slate-950 text-white text-[10px] font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Click to turn festive decorations {!isUserDisabled ? 'OFF' : 'ON'}
        </span>
      </button>
    </div>
  );
};
