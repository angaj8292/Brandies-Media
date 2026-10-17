'use client';

import React, { useState, useEffect } from 'react';
import { useFestive } from '@/context/FestiveContext';

interface LanternDef {
  id: number;
  side: 'left' | 'right';
  xClass: string;
  stringHeight: number; // 80px to 220px
  size: number; // 40px to 60px
  duration: number; // 3.8s to 6.0s
  delay: string; // Negative delay e.g. -1.5s
  colors: [string, string]; // Top to bottom gradient
  mobileHidden?: boolean;
}

export const HangingLanterns: React.FC = () => {
  const { activeFestival } = useFestive();
  const [pushedLantern, setPushedLantern] = useState<{ id: number; side: 'left' | 'right' } | null>(null);

  // Check reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion && process.env.NODE_ENV !== 'production') {
        console.info('[Festive Engine] Reduced motion active: running gentle low-amplitude festive animations.');
      }
    }
  }, []);

  if (!activeFestival?.decorations.includes('hangingLanterns')) return null;

  // 8 ornate lanterns (4 left, 4 right on desktop; 2 left, 2 right on mobile)
  const lanterns: LanternDef[] = [
    // LEFT SIDE
    {
      id: 1,
      side: 'left',
      xClass: 'left-2 sm:left-5',
      stringHeight: 90,
      size: 46,
      duration: 4.2,
      delay: '-1.4s',
      colors: ['#F97316', '#DC2626'],
    },
    {
      id: 2,
      side: 'left',
      xClass: 'left-12 sm:left-20',
      stringHeight: 165,
      size: 56,
      duration: 5.5,
      delay: '-2.7s',
      colors: ['#F59E0B', '#EA580C'],
    },
    {
      id: 3,
      side: 'left',
      xClass: 'left-24 sm:left-36',
      stringHeight: 115,
      size: 44,
      duration: 4.7,
      delay: '-0.9s',
      colors: ['#EC4899', '#BE185D'],
      mobileHidden: true,
    },
    {
      id: 4,
      side: 'left',
      xClass: 'left-36 sm:left-56',
      stringHeight: 215,
      size: 52,
      duration: 5.9,
      delay: '-3.2s',
      colors: ['#FBBF24', '#D97706'],
      mobileHidden: true,
    },

    // RIGHT SIDE
    {
      id: 5,
      side: 'right',
      xClass: 'right-36 sm:right-56',
      stringHeight: 205,
      size: 50,
      duration: 5.7,
      delay: '-1.8s',
      colors: ['#FBBF24', '#D97706'],
      mobileHidden: true,
    },
    {
      id: 6,
      side: 'right',
      xClass: 'right-24 sm:right-36',
      stringHeight: 125,
      size: 44,
      duration: 4.9,
      delay: '-2.9s',
      colors: ['#EC4899', '#BE185D'],
      mobileHidden: true,
    },
    {
      id: 7,
      side: 'right',
      xClass: 'right-12 sm:right-20',
      stringHeight: 175,
      size: 58,
      duration: 5.2,
      delay: '-1.1s',
      colors: ['#F59E0B', '#EA580C'],
    },
    {
      id: 8,
      side: 'right',
      xClass: 'right-2 sm:right-5',
      stringHeight: 85,
      size: 48,
      duration: 4.0,
      delay: '-2.3s',
      colors: ['#F97316', '#DC2626'],
    },
  ];

  const handleMouseEnter = (id: number, side: 'left' | 'right') => {
    setPushedLantern({ id, side });
    setTimeout(() => {
      setPushedLantern((prev) => (prev?.id === id ? null : prev));
    }, 1800);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 w-full pointer-events-none z-30 select-none overflow-visible"
      aria-hidden="true"
    >
      {lanterns.map((l) => {
        const isHovered = pushedLantern?.id === l.id;
        const hoverAnim =
          l.side === 'left' ? 'lanternHoverPushLeft 1.8s cubic-bezier(0.25, 1, 0.5, 1)' : 'lanternHoverPushRight 1.8s cubic-bezier(0.25, 1, 0.5, 1)';

        return (
          <div
            key={l.id}
            className={`festive-lantern festive-swing-anim absolute top-0 ${l.xClass} ${l.mobileHidden ? 'hidden md:block' : 'block'}`}
            style={{
              transformOrigin: '50% 0px',
              willChange: 'transform',
              animation: isHovered
                ? hoverAnim
                : `festiveSwing ${l.duration}s ease-in-out infinite`,
              animationDelay: isHovered ? '0s' : l.delay,
            }}
          >
            {/* 1. Thin Golden Hanging Cord from top of viewport */}
            <div
              className="w-[1.5px] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 mx-auto opacity-85 shadow-xs"
              style={{ height: `${l.stringHeight}px` }}
            />

            {/* Golden bead spacer */}
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600 mx-auto -my-1 shadow-sm" />

            {/* 2. Lantern Body with Interactive Hover Push */}
            <div
              onMouseEnter={() => handleMouseEnter(l.id, l.side)}
              className="pointer-events-auto cursor-pointer relative mx-auto"
              style={{
                width: `${l.size}px`,
                filter: 'drop-shadow(0 0 12px rgba(255, 150, 40, 0.6))',
              }}
              title="Touch the lantern to push it!"
            >
              <svg
                width={l.size}
                height={l.size * 1.55}
                viewBox="0 0 60 92"
                fill="none"
                className="w-full h-auto overflow-visible select-none"
              >
                <defs>
                  <linearGradient id={`lanternGrad-${l.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={l.colors[0]} />
                    <stop offset="100%" stopColor={l.colors[1]} />
                  </linearGradient>

                  <radialGradient id={`lanternInnerGlow-${l.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Hanging Top Ring */}
                <circle cx="30" cy="5" r="3.5" stroke="#FBBF24" strokeWidth="1.5" />

                {/* Golden Roof / Cap */}
                <path
                  d="M16 12C16 8 44 8 44 12L48 18H12L16 12Z"
                  fill="#F59E0B"
                  stroke="#B45309"
                  strokeWidth="1.2"
                />

                {/* Inner Light Pulsing Glow (radial light inside each lantern) */}
                <circle
                  cx="30"
                  cy="38"
                  r="20"
                  fill={`url(#lanternInnerGlow-${l.id})`}
                  style={{
                    animation: 'festiveGlowPulse 2.4s ease-in-out infinite',
                    transformOrigin: '30px 38px',
                  }}
                />

                {/* Diamond Faceted Main Lantern Body */}
                <path
                  d="M12 18L4 38L30 62L56 38L48 18H12Z"
                  fill={`url(#lanternGrad-${l.id})`}
                  stroke="#B45309"
                  strokeWidth="1.4"
                />

                {/* Internal Decorative Diamond Wireframe & Golden Patterns */}
                <path
                  d="M30 18V62M12 18L30 38L48 18M4 38H56"
                  stroke="#FEF08A"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />

                {/* Center Star Flower Motif */}
                <circle cx="30" cy="38" r="4.5" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />
                <circle cx="30" cy="38" r="2" fill="#DC2626" />

                {/* Lower Golden Rim */}
                <rect x="22" y="61" width="16" height="4" rx="1.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />

                {/* Hanging Golden Beads */}
                <circle cx="25" cy="67" r="1.5" fill="#FBBF24" />
                <circle cx="30" cy="68" r="1.5" fill="#FBBF24" />
                <circle cx="35" cy="67" r="1.5" fill="#FBBF24" />

                {/* 3. Secondary Swaying Tassels at bottom */}
                <g
                  className="festive-tassel-anim"
                  style={{
                    animation: 'festiveTasselSway 2.2s ease-in-out infinite',
                    animationDelay: `${l.id * 0.2}s`,
                    transformOrigin: '30px 68px',
                  }}
                >
                  {/* Left Tassel */}
                  <line x1="25" y1="68" x2="23" y2="86" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="23" cy="87" r="1.2" fill="#FBBF24" />

                  {/* Center Main Tassel */}
                  <line x1="30" y1="69" x2="30" y2="90" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="30" cy="91" r="1.5" fill="#DC2626" />

                  {/* Right Tassel */}
                  <line x1="35" y1="68" x2="37" y2="86" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="37" cy="87" r="1.2" fill="#FBBF24" />
                </g>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
