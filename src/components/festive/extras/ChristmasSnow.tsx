'use client';

import React, { useEffect, useRef } from 'react';
import { useFestive } from '@/context/FestiveContext';

export const ChristmasSnow: React.FC = () => {
  const { activeFestival } = useFestive();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const shouldRender = Boolean(
    activeFestival?.decorations.includes('christmasSnow')
  );

  useEffect(() => {
    if (!shouldRender) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const flakes = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      speedY: Math.random() * 1.2 + 0.5,
      speedX: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.6 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#FFFFFF';

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += f.speedY;
        f.x += f.speedX;

        if (f.y > height) {
          f.y = -5;
          f.x = Math.random() * width;
        }

        ctx.globalAlpha = f.opacity;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-25 w-full h-full select-none"
      aria-hidden="true"
    />
  );
};
