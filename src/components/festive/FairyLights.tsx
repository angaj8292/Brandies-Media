'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

interface FairyLightsProps {
  count?: number;
  className?: string;
}

export const FairyLights: React.FC<FairyLightsProps> = ({
  count = 32,
  className = '',
}) => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('fairyLights')) return null;

  // Single row of small round bulbs (6px), alternating pink and yellow with soft glow
  const bulbColors = [
    { color: '#EC4899', glow: 'rgba(236, 72, 153, 0.75)' }, // Pink
    { color: '#FFE45C', glow: 'rgba(255, 228, 92, 0.85)' },  // Chip Yellow
  ];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-30 translate-y-[3px] select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-8">
        {Array.from({ length: count }).map((_, index) => {
          const bulb = bulbColors[index % bulbColors.length];
          const delay = ((index * 0.18) % 2.2).toFixed(2);
          const duration = (1.4 + (index % 3) * 0.35).toFixed(2);

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Small round 6px bulb running along bottom edge with soft glow */}
              <div
                className="w-[6px] h-[6px] rounded-full transition-all duration-300"
                style={{
                  backgroundColor: bulb.color,
                  boxShadow: `0 0 6px 2px ${bulb.glow}`,
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
