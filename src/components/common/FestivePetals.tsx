'use client';

import React, { useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';

interface FestivePetalsProps {
  petalCount?: number;
  className?: string;
}

export const FestivePetals: React.FC<FestivePetalsProps> = ({
  petalCount = 28,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!siteConfig.festive.enabled) return;

    // Respect user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm festive petal colors: marigold yellow, soft saffron orange, rose pink, golden amber
    const colors = ['#F59E0B', '#FBBF24', '#FB923C', '#F43F5E', '#FDA4AF', '#E11D48'];

    interface Petal {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      oscillationSpeed: number;
      oscillationDistance: number;
      opacity: number;
    }

    const petals: Petal[] = Array.from({ length: petalCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: Math.random() * 1.5 - 0.75,
      speedY: Math.random() * 1.4 + 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      oscillationSpeed: Math.random() * 0.02 + 0.01,
      oscillationDistance: Math.random() * 25 + 10,
      opacity: Math.random() * 0.5 + 0.35,
    }));

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(frame * p.oscillationSpeed) * 0.5;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        // Draw organic petal teardrop/oval shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.5, p.size * 0.9, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.5, -p.size * 0.7, -p.size * 0.5, 0, -p.size);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [petalCount]);

  if (!siteConfig.festive.enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-20 w-full h-full select-none ${className}`}
      aria-hidden="true"
    />
  );
};
