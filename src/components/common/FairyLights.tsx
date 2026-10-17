'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

interface FairyLightsProps {
  count?: number;
  className?: string;
}

export const FairyLights: React.FC<FairyLightsProps> = ({
  count = 24,
  className = '',
}) => {
  if (!siteConfig.festive.enabled) return null;

  // Festive warm jewel tones: gold, cyan, ruby, emerald, amber, magenta
  const lightColors = [
    { color: '#FBBF24', glow: 'rgba(251, 191, 36, 0.8)' },
    { color: '#15D8E1', glow: 'rgba(21, 216, 225, 0.8)' },
    { color: '#F43F5E', glow: 'rgba(244, 63, 94, 0.8)' },
    { color: '#10B981', glow: 'rgba(16, 185, 129, 0.8)' },
    { color: '#A855F7', glow: 'rgba(168, 85, 247, 0.8)' },
    { color: '#FB923C', glow: 'rgba(251, 146, 60, 0.8)' },
  ];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-30 translate-y-2 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between w-full px-2">
        {Array.from({ length: count }).map((_, index) => {
          const light = lightColors[index % lightColors.length];
          const delay = ((index * 0.23) % 2).toFixed(2);
          const duration = (1.4 + (index % 3) * 0.4).toFixed(1);

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Wire hook */}
              <div className="w-[1.5px] h-2 bg-slate-400/40" />
              {/* Bulb Socket */}
              <div className="w-1.5 h-1 bg-emerald-800 rounded-t-xs" />
              {/* Twinkling Bulb */}
              <div
                className="w-2.5 h-3.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: light.color,
                  boxShadow: `0 0 8px 2px ${light.glow}`,
                  animation: `twinkle ${duration}s ease-in-out infinite alternate`,
                  animationDelay: `${delay}s`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
