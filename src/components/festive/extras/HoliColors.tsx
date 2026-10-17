'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const HoliColors: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('holiColors')) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-60"
      aria-hidden="true"
    >
      {/* 4 Soft Organic Gulal Powder Splash Blobs */}
      <div className="absolute top-12 left-10 w-64 h-64 bg-gradient-to-tr from-pink-500/30 to-rose-400/20 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute top-24 right-16 w-72 h-72 bg-gradient-to-tr from-purple-500/25 to-indigo-400/20 rounded-full blur-[90px]" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-amber-400/25 to-yellow-300/20 rounded-full blur-[85px]" />
      <div className="absolute bottom-28 right-1/4 w-60 h-60 bg-gradient-to-tr from-cyan-400/25 to-emerald-400/20 rounded-full blur-[75px]" />

      {/* Scattered Gulal Splatter Droplets */}
      <svg className="absolute inset-0 w-full h-full">
        {[
          { cx: '18%', cy: '35%', r: 6, fill: '#EC4899' },
          { cx: '22%', cy: '32%', r: 3.5, fill: '#F43F5E' },
          { cx: '78%', cy: '25%', r: 7, fill: '#8B5CF6' },
          { cx: '82%', cy: '28%', r: 4, fill: '#A855F7' },
          { cx: '35%', cy: '75%', r: 5, fill: '#F59E0B' },
          { cx: '65%', cy: '80%', r: 6, fill: '#10B981' },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.fill}
            opacity="0.65"
          />
        ))}
      </svg>
    </div>
  );
};
