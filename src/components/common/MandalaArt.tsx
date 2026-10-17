import React from 'react';
import { siteConfig } from '@/config/site';

interface MandalaArtProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export const MandalaArt: React.FC<MandalaArtProps> = ({
  position = 'top-right',
  className = '',
}) => {
  if (!siteConfig.festive.enabled) return null;

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/3 -translate-y-1/3',
    'top-right': 'top-0 right-0 translate-x-1/3 -translate-y-1/3',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
    'bottom-right': 'bottom-0 right-0 translate-x-1/3 translate-y-1/3',
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none select-none z-0 opacity-25 hover:opacity-40 transition-opacity duration-700 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="460"
        height="460"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] text-amber-500/30 dark:text-cyan-400/20 animate-spin"
        style={{ animationDuration: '180s' }}
      >
        <circle cx="230" cy="230" r="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="230" cy="230" r="170" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="230" cy="230" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="230" cy="230" r="70" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="230" cy="230" r="25" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />

        {/* 12 Petals Array */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 230 + Math.cos(angle) * 70;
          const y1 = 230 + Math.sin(angle) * 70;
          const x2 = 230 + Math.cos(angle) * 170;
          const y2 = 230 + Math.sin(angle) * 170;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
              <circle cx={x2} cy={y2} r="4" fill="currentColor" fillOpacity="0.4" />
            </g>
          );
        })}

        {/* Outer 24 Star Points */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x = 230 + Math.cos(angle) * 210;
          const y = 230 + Math.sin(angle) * 210;
          return <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" fillOpacity="0.5" />;
        })}
      </svg>
    </div>
  );
};

export const DiyaDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  if (!siteConfig.festive.enabled) return null;

  return (
    <div
      className={`inline-flex items-center justify-center filter drop-shadow-md select-none ${className}`}
      aria-hidden="true"
    >
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flame with glowing amber/orange gradient */}
        <defs>
          <linearGradient id="flameGrad" x1="20" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="0.4" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="diyaGrad" x1="6" y1="18" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EA580C" />
            <stop offset="1" stopColor="#9A3412" />
          </linearGradient>
        </defs>
        {/* Animated flame */}
        <path
          d="M20 2C20 2 24.5 8 24.5 12C24.5 14.5 22.5 17 20 17C17.5 17 15.5 14.5 15.5 12C15.5 8 20 2 20 2Z"
          fill="url(#flameGrad)"
          className="animate-pulse origin-bottom"
        />
        {/* Diya Clay Pot Base */}
        <path
          d="M6 18C6 26.5 12 34 20 34C28 34 34 26.5 34 18H6Z"
          fill="url(#diyaGrad)"
        />
        <ellipse cx="20" cy="18" rx="14" ry="3" fill="#B45309" />
        <circle cx="20" cy="11" r="8" fill="#FDE047" fillOpacity="0.25" className="animate-ping" />
      </svg>
    </div>
  );
};
