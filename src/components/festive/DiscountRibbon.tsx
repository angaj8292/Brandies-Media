'use client';

import React from 'react';
import { useFestive } from '@/context/FestiveContext';

interface DiscountRibbonProps {
  className?: string;
}

export const DiscountRibbon: React.FC<DiscountRibbonProps> = ({
  className = '',
}) => {
  const { activeFestival } = useFestive();
  if (!activeFestival) return null;

  return (
    <div
      className={`absolute top-4 right-[-32px] transform rotate-45 text-white text-[10px] font-black tracking-widest px-8 py-1 shadow-md uppercase z-20 pointer-events-none select-none ${className}`}
      style={{
        backgroundColor: activeFestival.colors.primary,
        boxShadow: `0 2px 8px ${activeFestival.colors.glow}`,
      }}
    >
      {activeFestival.discountPercent}% OFF
    </div>
  );
};
