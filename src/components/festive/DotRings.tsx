'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

export const DotRings: React.FC = () => {
  const { activeFestival } = useFestive();
  if (!activeFestival?.decorations.includes('dotRings')) return null;

  // 4 glowing dot rings floating in the background
  const rings = [
    { x: '12%', y: '22%', radius: 48, dotsCount: 16, color: '#EC4899', rotDur: 38, driftDur: 8.5, delay: '-1.5s', reverse: false },
    { x: '82%', y: '32%', radius: 60, dotsCount: 20, color: '#8B5CF6', rotDur: 52, driftDur: 11.0, delay: '-3.2s', reverse: true },
    { x: '72%', y: '68%', radius: 42, dotsCount: 14, color: '#15D8E1', rotDur: 34, driftDur: 7.8, delay: '-0.8s', reverse: false },
    { x: '22%', y: '75%', radius: 52, dotsCount: 18, color: '#F97316', rotDur: 46, driftDur: 9.5, delay: '-2.4s', reverse: true },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-45 hover:opacity-65 transition-opacity"
      aria-hidden="true"
    >
      {rings.map((ring, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: ring.x,
            top: ring.y,
            animation: `flowerDrift ${ring.driftDur}s ease-in-out infinite alternate`,
            animationDelay: ring.delay,
            willChange: 'transform',
          }}
        >
          <svg
            width={ring.radius * 2}
            height={ring.radius * 2}
            viewBox={`0 0 ${ring.radius * 2} ${ring.radius * 2}`}
            style={{
              animation: `${ring.reverse ? 'rangoliRotateCounterClockwise' : 'rangoliRotateClockwise'} ${ring.rotDur}s linear infinite`,
              transformOrigin: `${ring.radius}px ${ring.radius}px`,
              willChange: 'transform',
            }}
          >
            {Array.from({ length: ring.dotsCount }).map((_, dIdx) => {
              const angle = (dIdx * (360 / ring.dotsCount) * Math.PI) / 180;
              const cx = ring.radius + Math.cos(angle) * (ring.radius - 5);
              const cy = ring.radius + Math.sin(angle) * (ring.radius - 5);
              const dotSize = dIdx % 2 === 0 ? 2.8 : 1.8;

              return (
                <circle
                  key={dIdx}
                  cx={cx}
                  cy={cy}
                  r={dotSize}
                  fill={ring.color}
                  style={{
                    filter: `drop-shadow(0 0 5px ${ring.color})`,
                  }}
                />
              );
            })}
          </svg>
        </div>
      ))}
    </div>
  );
};
