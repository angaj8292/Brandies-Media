'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const SankrantiKites: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('sankrantiKites')) return null;

  const kites = [
    { left: '15%', top: '15%', color: ['#EF4444', '#F59E0B'], delay: 0, duration: 8 },
    { left: '75%', top: '22%', color: ['#0284C7', '#10B981'], delay: 1.5, duration: 9 },
    { left: '45%', top: '35%', color: ['#8B5CF6', '#EC4899'], delay: 3, duration: 7.5 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      {kites.map((k, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: k.left,
            top: k.top,
            animation: `floatSlow ${k.duration}s ease-in-out infinite alternate`,
            animationDelay: `${k.delay}s`,
          }}
        >
          <svg width="44" height="60" viewBox="0 0 44 60" fill="none" className="drop-shadow-md transform -rotate-12">
            <defs>
              <linearGradient id={`kiteGrad-${idx}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={k.color[0]} />
                <stop offset="100%" stopColor={k.color[1]} />
              </linearGradient>
            </defs>

            {/* Diamond kite body */}
            <polygon points="22,2 42,22 22,42 2,22" fill={`url(#kiteGrad-${idx})`} stroke="#1E293B" strokeWidth="1" />
            <line x1="22" y1="2" x2="22" y2="42" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M2 22C14 16 30 16 42 22" stroke="#FFFFFF" strokeWidth="1" fill="none" />

            {/* Kite Tail Triangle */}
            <polygon points="22,42 28,49 16,49" fill={k.color[0]} />

            {/* String thread wavy */}
            <path d="M22 49C25 53 20 56 24 60" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 1" fill="none" />
          </svg>
        </div>
      ))}
    </div>
  );
};
