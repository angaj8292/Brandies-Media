'use client';

import React, { forwardRef } from 'react';
import { Locomotive } from './Locomotive';
import { Coach } from './Coach';
import { growthCoachesData } from '@/data/growthExpress';
import { siteConfig } from '@/config/site';

interface SceneProps {
  wheelRotation: number;
  hillsRef: React.RefObject<HTMLDivElement>;
  midLayerRef: React.RefObject<HTMLDivElement>;
  stationSignRef: React.RefObject<HTMLDivElement>;
  sleepersRef: React.RefObject<HTMLDivElement>;
  trainGroupRef: React.RefObject<HTMLDivElement>;
}

export const Scene = forwardRef<HTMLDivElement, SceneProps>(
  (
    {
      wheelRotation,
      hillsRef,
      midLayerRef,
      stationSignRef,
      sleepersRef,
      trainGroupRef,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="relative w-full h-[340px] sm:h-[350px] overflow-hidden select-none bg-gradient-to-b from-[#E0F2FE] via-[#EDFDF5] to-[#FFFFFF] border-y border-slate-200/90 shadow-inner"
        style={{
          perspective: '1000px',
        }}
      >
        {/* ============================================================ */}
        {/* 1. BACK LAYER: Rolling Green Hills (Moves at 0.2x parallax)  */}
        {/* ============================================================ */}
        <div
          ref={hillsRef}
          className="absolute inset-0 w-[240%] h-full pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Subtle clouds in the sky */}
          <div className="absolute top-4 left-1/4 w-28 h-10 bg-white/70 rounded-full blur-[2px]" />
          <div className="absolute top-8 left-2/3 w-36 h-12 bg-white/60 rounded-full blur-[2px]" />
          <div className="absolute top-5 left-1/12 w-24 h-8 bg-white/50 rounded-full blur-[2px]" />

          {/* Distant soft teal-green hills */}
          <svg
            viewBox="0 0 2400 300"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-14 left-0 w-full h-44 text-emerald-200/50"
          >
            <path
              d="M0,150 C300,50 600,200 900,100 C1200,40 1500,190 1800,110 C2100,50 2250,180 2400,120 L2400,300 L0,300 Z"
              fill="currentColor"
            />
          </svg>

          {/* Nearer lime-green rolling hills */}
          <svg
            viewBox="0 0 2400 300"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-10 left-0 w-full h-32 text-emerald-300/40"
          >
            <path
              d="M0,180 C200,120 500,240 800,160 C1100,100 1400,220 1700,150 C2000,110 2200,210 2400,170 L2400,300 L0,300 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* ============================================================ */}
        {/* 2. MID LAYER: Trees, Bushes, Clouds (Moves at 0.5x parallax) */}
        {/* ============================================================ */}
        <div
          ref={midLayerRef}
          className="absolute inset-0 w-[200%] h-full pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Scatter of cartoon SVG trees and bushes along the track */}
          <div className="absolute bottom-16 left-0 right-0 flex items-end justify-between px-12 opacity-85">
            {[
              { type: 'pine', left: 40 },
              { type: 'bush', left: 160 },
              { type: 'oak', left: 320 },
              { type: 'bench', left: 520 },
              { type: 'pine', left: 740 },
              { type: 'bush', left: 960 },
              { type: 'oak', left: 1180 },
              { type: 'pine', left: 1420 },
              { type: 'bush', left: 1680 },
              { type: 'oak', left: 1940 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="absolute bottom-0"
                style={{ left: `${item.left}px` }}
              >
                {item.type === 'pine' && (
                  <svg width="44" height="70" viewBox="0 0 44 70" fill="none">
                    <rect x="20" y="52" width="4" height="18" fill="#78350F" />
                    <polygon points="22,6 38,28 30,28 42,48 2,48 14,28 6,28" fill="#15803D" />
                  </svg>
                )}
                {item.type === 'oak' && (
                  <svg width="56" height="66" viewBox="0 0 56 66" fill="none">
                    <rect x="25" y="44" width="6" height="22" fill="#78350F" />
                    <circle cx="28" cy="28" r="24" fill="#22C55E" />
                    <circle cx="20" cy="22" r="14" fill="#16A34A" />
                  </svg>
                )}
                {item.type === 'bush' && (
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <ellipse cx="14" cy="14" rx="14" ry="10" fill="#4ADE80" />
                    <ellipse cx="26" cy="12" rx="12" ry="12" fill="#16A34A" />
                  </svg>
                )}
                {item.type === 'bench' && (
                  <svg width="34" height="20" viewBox="0 0 34 20" fill="none">
                    <rect x="2" y="10" width="30" height="3" rx="1" fill="#92400E" />
                    <line x1="6" y1="12" x2="6" y2="18" stroke="#334155" strokeWidth="2" />
                    <line x1="28" y1="12" x2="28" y2="18" stroke="#334155" strokeWidth="2" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. STATION SIGN: "BRANDIES JN." (Moves at 1.0x with scene)   */}
        {/* ============================================================ */}
        <div
          ref={stationSignRef}
          className="absolute bottom-16 left-6 z-15 pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Station post */}
          <div className="w-2.5 h-20 bg-slate-800 mx-auto rounded-t-sm" />
          <div className="absolute -top-16 -left-12 w-32 bg-[#FACC15] border-2 border-slate-900 rounded-md p-1.5 shadow-md text-center transform -rotate-1">
            {/* Festive Diya or Bunting on sign if festive enabled */}
            {siteConfig.festive.enabled && (
              <div className="absolute -top-3 right-1 text-xs">
                🪔
              </div>
            )}
            <div className="text-[7px] font-bold text-slate-800 leading-tight">
              ब्रांडीज़ जंक्शन
            </div>
            <div className="text-[10px] font-heading font-black tracking-widest text-slate-950 border-y border-slate-900 my-0.5">
              BRANDIES JN.
            </div>
            <div className="text-[6px] font-mono text-slate-700">
              E-COMM PLATFORM 1
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. TRACK & SLEEPERS (Moves continuously at 0.8x speed)       */}
        {/* ============================================================ */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden z-10">
          {/* Moving Sleepers Array */}
          <div
            ref={sleepersRef}
            className="absolute bottom-4 left-0 w-[300%] h-4 flex items-center gap-4"
            style={{ willChange: 'transform' }}
          >
            {Array.from({ length: 180 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-3 rounded-xs bg-[#78350F] border-t border-[#A16207] shadow-sm flex-shrink-0 opacity-90"
              />
            ))}
          </div>

          {/* Double Grey Steel Rails (Static horizontally, wheels roll on top) */}
          <div className="absolute bottom-7 left-0 right-0 h-1.5 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-500 shadow-sm" />
          <div className="absolute bottom-3 left-0 right-0 h-1.5 bg-gradient-to-b from-slate-500 via-slate-300 to-slate-600 shadow-sm" />

          {/* Gravel Ballast ground at the very bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-slate-300 to-slate-200 opacity-80" />
        </div>

        {/* ============================================================ */}
        {/* 5. TRAIN (FOREGROUND): Locomotive + 4 Coaches in one group   */}
        {/* ============================================================ */}
        <div
          ref={trainGroupRef}
          className="absolute bottom-6 left-12 flex items-end gap-7 z-20"
          style={{
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {/* Locomotive at the front (facing Left) */}
          <Locomotive wheelRotation={wheelRotation} />

          {/* 4 Hooked Coaches */}
          {growthCoachesData.map((coach) => (
            <Coach
              key={coach.number}
              coach={coach}
              wheelRotation={wheelRotation}
            />
          ))}
        </div>

        {/* Festive Petals Drift overlay if festive enabled */}
        {siteConfig.festive.enabled && (
          <div className="absolute inset-0 pointer-events-none z-30 opacity-70">
            <div className="absolute top-2 left-1/4 text-xs animate-bounce" style={{ animationDuration: '4s' }}>🌸</div>
            <div className="absolute top-6 left-1/2 text-xs animate-bounce" style={{ animationDuration: '3.5s' }}>🌼</div>
            <div className="absolute top-3 left-3/4 text-xs animate-bounce" style={{ animationDuration: '5s' }}>🌸</div>
          </div>
        )}
      </div>
    );
  }
);

Scene.displayName = 'Scene';
