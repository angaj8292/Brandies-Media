'use client';

import React, { useEffect, useRef } from 'react';
import { useFestive } from '@/context/FestiveContext';

interface FallingPetalsProps {
  petalCount?: number;
  className?: string;
}

export const FallingPetals: React.FC<FallingPetalsProps> = ({
  petalCount = 34,
  className = '',
}) => {
  const { activeFestival } = useFestive();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const shouldRender = Boolean(
    activeFestival?.decorations.includes('fallingPetals')
  );

  useEffect(() => {
    if (!shouldRender) return;

    // Check user's reduced motion setting
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion && process.env.NODE_ENV !== 'production') {
      console.info(
        '[Festive Engine] Reduced motion detected: running gentle low-amplitude festive animations.'
      );
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Pause when tab is inactive to preserve CPU / battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
      } else {
        isRunning = true;
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Warm festive colors: Marigold yellow, saffron orange, rose petals, golden amber, leaf green
    const colors = [
      '#F59E0B',
      '#FBBF24',
      '#FB923C',
      '#F43F5E',
      '#FDA4AF',
      '#E11D48',
      '#4ADE80',
    ];

    interface Petal {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      swayFrequency: number;
      swayDistance: number;
      opacity: number;
      isLeaf: boolean;
    }

    // Lower count on mobile devices to keep CPU under 2%
    const baseCount =
      window.innerWidth < 768 ? Math.round(petalCount * 0.45) : petalCount;
    const count = prefersReducedMotion ? Math.round(baseCount * 0.6) : baseCount;

    // Motion multiplier: gentle slow drift if reduced motion
    const speedFactor = prefersReducedMotion ? 0.4 : 1.0;

    const petals: Petal[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() * 1.2 - 0.6) * speedFactor,
      speedY: (Math.random() * 1.3 + 0.7) * speedFactor,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02 * speedFactor,
      swayFrequency: Math.random() * 0.015 + 0.008,
      swayDistance: (Math.random() * 20 + 8) * speedFactor,
      opacity: Math.random() * 0.45 + 0.35,
      isLeaf: Math.random() > 0.85,
    }));

    let frame = 0;

    const render = () => {
      if (!isRunning) return;

      frame++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(frame * p.swayFrequency) * 0.5 * speedFactor;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        if (p.isLeaf) {
          // Pointed leaf shape
          ctx.moveTo(0, -p.size * 1.2);
          ctx.quadraticCurveTo(p.size * 0.8, 0, 0, p.size * 1.2);
          ctx.quadraticCurveTo(-p.size * 0.8, 0, 0, -p.size * 1.2);
        } else {
          // Soft rounded flower petal
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(
            p.size * 0.8,
            -p.size * 0.5,
            p.size * 0.9,
            p.size * 0.5,
            0,
            p.size
          );
          ctx.bezierCurveTo(
            -p.size * 0.9,
            p.size * 0.5,
            -p.size * 0.8,
            -p.size * 0.5,
            0,
            -p.size
          );
        }
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldRender, petalCount]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-20 w-full h-full select-none ${className}`}
      aria-hidden="true"
    />
  );
};
