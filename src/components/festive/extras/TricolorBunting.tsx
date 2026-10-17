'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const TricolorBunting: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('tricolorBunting')) return null;

  const flagColors = ['#F97316', '#FFFFFF', '#16A34A', '#0284C7'];

  return (
    <div
      className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-20"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between w-[105%] -ml-2">
        {Array.from({ length: 32 }).map((_, i) => {
          const color = flagColors[i % flagColors.length];
          const isAshoka = color === '#0284C7';

          return (
            <div
              key={i}
              className="flex flex-col items-center flex-shrink-0"
              style={{
                animation: 'pendulumSwing 4s ease-in-out infinite alternate',
                animationDelay: `${(i * 0.15) % 2}s`,
              }}
            >
              <div className="w-[1px] h-3 bg-slate-300" />
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="drop-shadow-xs">
                <polygon
                  points="0,0 24,0 12,28"
                  fill={isAshoka ? '#FFFFFF' : color}
                  stroke={isAshoka ? '#0284C7' : '#94A3B8'}
                  strokeWidth="0.8"
                />
                {isAshoka && (
                  <circle cx="12" cy="8" r="4" stroke="#0284C7" strokeWidth="1" fill="none" />
                )}
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};
