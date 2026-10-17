'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const EidCrescentStars: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('eidCrescentStars')) return null;

  return (
    <div
      className="absolute top-4 right-8 sm:right-16 pointer-events-none select-none z-10 opacity-80"
      aria-hidden="true"
    >
      <div className="relative">
        {/* Crescent Moon */}
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="drop-shadow-lg">
          <path
            d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C63.2625 90 74.966 83.5358 82.2039 73.5458C61.3533 74.5204 44 57.3488 44 36.5C44 25.1098 49.3364 14.9392 57.6534 8.35399C55.1558 9.42436 52.6074 10 50 10Z"
            fill="url(#eidMoonGrad)"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="eidMoonGrad" x1="10" y1="10" x2="90" y2="90">
              <stop stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Inside Star */}
          <polygon
            points="68,26 71,34 80,34 73,39 76,47 68,42 60,47 63,39 56,34 65,34"
            fill="#FEF08A"
            stroke="#CA8A04"
            strokeWidth="1"
          />
        </svg>

        {/* Hanging 8-pointed star */}
        <div
          className="absolute -bottom-10 left-6 origin-top"
          style={{ animation: 'pendulumSwing 4.5s ease-in-out infinite alternate' }}
        >
          <div className="w-[1px] h-8 bg-amber-400 mx-auto" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24">
            <path d="M12 2L14 8L20 10L15 14L17 21L12 17L7 21L9 14L4 10L10 8L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
