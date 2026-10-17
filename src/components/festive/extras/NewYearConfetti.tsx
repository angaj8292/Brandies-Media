'use client';

import React, { useEffect } from 'react';
import { useFestive } from '@/context/FestiveContext';
import confetti from 'canvas-confetti';

export const NewYearConfetti: React.FC = () => {
  const { activeFestival } = useFestive();

  const shouldRender = Boolean(
    activeFestival?.decorations.includes('newYearConfetti')
  );

  useEffect(() => {
    if (!shouldRender) return;

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Confetti burst from both sides on load
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#15D8E1', '#EC4899', '#8B5CF6', '#10B981'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
  }, [shouldRender]);

  return null;
};
