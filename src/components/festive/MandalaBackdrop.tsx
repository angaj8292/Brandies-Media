'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const MandalaBackdrop: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('mandalaBackdrop')) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* 1. Large faint line-art mandala in the top-right corner */}
      <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] opacity-[0.14] text-amber-500">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{
            animation: 'rangoliRotateClockwise 120s linear infinite',
            transformOrigin: '250px 250px',
            willChange: 'transform',
          }}
        >
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
          <circle cx="250" cy="250" r="90" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="30" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />

          {/* 16 Petals Radial Array */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x1 = 250 + Math.cos(angle) * 90;
            const y1 = 250 + Math.sin(angle) * 90;
            const x2 = 250 + Math.cos(angle) * 190;
            const y2 = 250 + Math.sin(angle) * 190;
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
                <circle cx={x2} cy={y2} r="4" fill="currentColor" fillOpacity="0.5" />
              </g>
            );
          })}

          {/* 32 Star Points */}
          {Array.from({ length: 32 }).map((_, i) => {
            const angle = (i * 11.25 * Math.PI) / 180;
            const x = 250 + Math.cos(angle) * 230;
            const y = 250 + Math.sin(angle) * 230;
            return <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" fillOpacity="0.6" />;
          })}
        </svg>
      </div>

      {/* 2. Smaller secondary mandala at the bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] opacity-[0.10] text-rose-500">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{
            animation: 'rangoliRotateCounterClockwise 140s linear infinite',
            transformOrigin: '250px 250px',
            willChange: 'transform',
          }}
        >
          <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="40" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + Math.cos(angle) * 100;
            const y1 = 250 + Math.sin(angle) * 100;
            const x2 = 250 + Math.cos(angle) * 220;
            const y2 = 250 + Math.sin(angle) * 220;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
          })}
        </svg>
      </div>
    </div>
  );
};
