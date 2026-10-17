'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

interface DiyaConfig {
  left: string;
  bottom: string;
  duration: number; // 5.0s to 7.0s
  delay: string;
  scale: number;
  flickerSpeed: number; // 0.5s to 0.7s
}

interface FlowerConfig {
  left: string;
  bottom: string;
  duration: number; // 8.0s to 12.0s
  delay: string;
  color: string;
  size: number;
}

export const FloatingDiyas: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('floatingDiyas')) return null;

  // 5 floating diyas staggered across screen bottom
  const diyas: DiyaConfig[] = [
    { left: '7%', bottom: '26px', duration: 5.6, delay: '-0.8s', scale: 0.95, flickerSpeed: 0.58 },
    { left: '26%', bottom: '16px', duration: 6.8, delay: '-2.4s', scale: 0.85, flickerSpeed: 0.64 },
    { left: '48%', bottom: '22px', duration: 5.2, delay: '-1.5s', scale: 0.9, flickerSpeed: 0.55 },
    { left: '70%', bottom: '14px', duration: 7.0, delay: '-3.1s', scale: 0.88, flickerSpeed: 0.68 },
    { left: '91%', bottom: '28px', duration: 6.1, delay: '-1.9s', scale: 0.95, flickerSpeed: 0.6 },
  ];

  // 4 floating marigold / pink flower blooms
  const flowers: FlowerConfig[] = [
    { left: '16%', bottom: '38px', duration: 9.5, delay: '-1.2s', color: '#F59E0B', size: 24 },
    { left: '38%', bottom: '28px', duration: 11.0, delay: '-3.5s', color: '#F43F5E', size: 22 },
    { left: '60%', bottom: '34px', duration: 8.8, delay: '-2.0s', color: '#FBBF24', size: 26 },
    { left: '82%', bottom: '32px', duration: 10.2, delay: '-4.1s', color: '#EC4899', size: 23 },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-44 pointer-events-none select-none z-15 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. FLOATING FLOWERS (Gentle Drift) */}
      {flowers.map((fl, idx) => (
        <div
          key={`fl-${idx}`}
          className="absolute hidden sm:block"
          style={{
            left: fl.left,
            bottom: fl.bottom,
            animation: `flowerDrift ${fl.duration}s ease-in-out infinite alternate`,
            animationDelay: fl.delay,
            willChange: 'transform',
          }}
        >
          <svg width={fl.size} height={fl.size} viewBox="0 0 30 30" fill="none" className="drop-shadow-sm opacity-85">
            {/* 6 Petals Marigold / Lotus flower */}
            {Array.from({ length: 6 }).map((_, pIdx) => (
              <circle
                key={pIdx}
                cx={15 + Math.cos((pIdx * 60 * Math.PI) / 180) * 7}
                cy={15 + Math.sin((pIdx * 60 * Math.PI) / 180) * 7}
                r="6.5"
                fill={fl.color}
                opacity="0.9"
              />
            ))}
            <circle cx="15" cy="15" r="5" fill="#FEF08A" stroke="#B45309" strokeWidth="0.8" />
            <circle cx="15" cy="15" r="2" fill="#DC2626" />
          </svg>
        </div>
      ))}

      {/* 2. FLOATING DIYAS (Float up & down 14px + Flame Flicker) */}
      {diyas.map((d, index) => (
        <div
          key={`diya-${index}`}
          className="absolute festive-diya festive-float-anim"
          style={{
            left: d.left,
            bottom: d.bottom,
            animation: `diyaFloat ${d.duration}s ease-in-out infinite`,
            animationDelay: d.delay,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              transform: `scale(${d.scale})`,
              filter: 'drop-shadow(0 2px 8px rgba(234, 88, 12, 0.45))',
            }}
          >
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" className="overflow-visible">
              <defs>
                <linearGradient id={`diyaFlameGrad-${index}`} x1="22" y1="2" x2="22" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEF08A" />
                  <stop offset="0.4" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#EF4444" />
                </linearGradient>

                <linearGradient id={`diyaPotGrad-${index}`} x1="6" y1="20" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F97316" />
                  <stop offset="1" stopColor="#9A3412" />
                </linearGradient>

                <radialGradient id={`flameGlowAura-${index}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FDE047" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing Warm Flame Aura */}
              <circle
                cx="22"
                cy="14"
                r="14"
                fill={`url(#flameGlowAura-${index})`}
                style={{
                  animation: `festiveGlowPulse ${d.flickerSpeed * 2}s ease-in-out infinite`,
                  transformOrigin: '22px 14px',
                }}
              />

              {/* Flame Flickering Teardrop (scaleY 0.9 to 1.1, opacity 0.8 to 1) */}
              <g
                style={{
                  animation: `flameFlicker ${d.flickerSpeed}s ease-in-out infinite alternate`,
                  transformOrigin: '22px 20px',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Outer Flame */}
                <path
                  d="M22 2 C22 2 28 8 28 13 C28 17 25 20 22 20 C19 20 16 17 16 13 C16 8 22 2 22 2 Z"
                  fill={`url(#diyaFlameGrad-${index})`}
                />
                {/* Inner White-Hot Core */}
                <path
                  d="M22 8 C22 8 25 12 25 14.5 C25 16.5 23.5 18 22 18 C20.5 18 19 16.5 19 14.5 C19 12 22 8 22 8 Z"
                  fill="#FFFBEB"
                  opacity="0.9"
                />
              </g>

              {/* Clay Diya Earthen Pot (Mitti ka Diya) */}
              <path
                d="M4 22 C4 22 10 38 22 38 C34 38 40 22 40 22 C36 26 28 28 22 28 C16 28 8 26 4 22 Z"
                fill={`url(#diyaPotGrad-${index})`}
                stroke="#78350F"
                strokeWidth="1.2"
              />

              {/* Diya Rim Highlight */}
              <ellipse cx="22" cy="23" rx="17" ry="3.5" fill="#FB923C" stroke="#78350F" strokeWidth="1" />
              <ellipse cx="22" cy="23.5" rx="14" ry="2.2" fill="#78350F" opacity="0.65" />

              {/* Golden Decorative Dots on the Diya edge */}
              <circle cx="12" cy="28" r="1.2" fill="#FEF08A" />
              <circle cx="17" cy="31" r="1.2" fill="#FEF08A" />
              <circle cx="22" cy="32" r="1.4" fill="#FEF08A" />
              <circle cx="27" cy="31" r="1.2" fill="#FEF08A" />
              <circle cx="32" cy="28" r="1.2" fill="#FEF08A" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
