'use client';

import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Locomotive } from './train/Locomotive';
import { Coach } from './train/Coach';
import { growthCoachesData } from '@/data/growthExpress';
import { useConsultation } from '@/components/context/ConsultationContext';
import { siteConfig } from '@/config/site';
import { ArrowRight, Train, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function GrowthExpress() {
  const root = useRef<HTMLElement>(null);
  const { openConsultation } = useConsultation();

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const train = el.querySelector('.ge-train') as HTMLElement;
        if (!train) return;

        const endPad = () => (window.innerWidth < 768 ? 24 : 120);
        const dist = () =>
          Math.max(0, train.scrollWidth - window.innerWidth + endPad());

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: () => '+=' + Math.round(dist() * 1.1),
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to('.ge-train', { x: () => -dist() }, 0)
          .to('.ge-hills', { x: () => -dist() * 0.2 }, 0)
          .to('.ge-trees', { x: () => -dist() * 0.5 }, 0)
          .to('.ge-track', { backgroundPositionX: () => -dist() * 0.8 }, 0)
          .to(
            '.ge-wheel',
            {
              rotation: () => (dist() / 22) * (180 / Math.PI),
              transformOrigin: '50% 50%',
            },
            0
          )
          .to('.ge-bar', { width: '100%' }, 0);

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
        window.addEventListener('load', () => ScrollTrigger.refresh());

        if (process.env.NODE_ENV !== 'production') {
          console.log(
            '[GrowthExpress] Active ScrollTriggers:',
            ScrollTrigger.getAll().length
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] flex flex-col justify-between py-6 sm:py-8"
      id="growth-express"
    >
      {/* ============================================================ */}
      {/* 1. HEADING & HINT LINE                                       */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center select-none flex-shrink-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0AB6C4] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Full-Stack Synchronization
        </div>

        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
          One team. One plan.{' '}
          <span className="text-[#15D8E1] marker-swoosh">Zero juggling.</span>
        </h2>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mt-1.5 sm:mt-2">
          <Train
            className="w-4 h-4 text-[#0AB6C4] animate-bounce"
            style={{ animationDuration: '1.8s' }}
          />
          <span>Keep scrolling — the Growth Express is passing through</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. PINNED HORIZONTAL SCENE (HEIGHT ~340-360px)               */}
      {/* ============================================================ */}
      <div className="relative w-full h-[330px] sm:h-[350px] overflow-hidden select-none bg-gradient-to-b from-[#E0F2FE] via-[#EDFDF5] to-[#FFFFFF] border-y border-slate-200/90 shadow-inner flex items-end">
        {/* PARALLAX LAYER 1: ROLLING GREEN HILLS (0.2x speed) */}
        <div
          className="ge-hills absolute inset-0 w-[160%] h-full pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Subtle clouds */}
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

        {/* PARALLAX LAYER 2: TREES, BUSHES, STATION SIGN (0.5x speed) */}
        <div
          className="ge-trees absolute inset-0 w-[160%] h-full pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Station Sign: "BRANDIES JN." */}
          <div className="absolute bottom-16 left-6 z-15 pointer-events-none">
            <div className="w-2.5 h-20 bg-slate-800 mx-auto rounded-t-sm" />
            <div className="absolute -top-16 -left-12 w-32 bg-[#FACC15] border-2 border-slate-900 rounded-md p-1.5 shadow-md text-center transform -rotate-1">
              {siteConfig.festive.enabled && (
                <div className="absolute -top-3 right-1 text-xs">🪔</div>
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

          {/* Scatter of cartoon SVG trees and bushes */}
          <div className="absolute bottom-16 left-0 right-0 flex items-end justify-between px-12 opacity-85">
            {[
              { type: 'pine', left: 80 },
              { type: 'bush', left: 240 },
              { type: 'oak', left: 420 },
              { type: 'bench', left: 620 },
              { type: 'pine', left: 840 },
              { type: 'bush', left: 1060 },
              { type: 'oak', left: 1280 },
              { type: 'pine', left: 1520 },
              { type: 'bush', left: 1780 },
              { type: 'oak', left: 2040 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="absolute bottom-0"
                style={{ left: `${item.left}px` }}
              >
                {item.type === 'pine' && (
                  <svg width="44" height="70" viewBox="0 0 44 70" fill="none">
                    <rect x="20" y="52" width="4" height="18" fill="#78350F" />
                    <polygon
                      points="22,6 38,28 30,28 42,48 2,48 14,28 6,28"
                      fill="#15803D"
                    />
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

        {/* TRACK & SLEEPERS (REPEATING BACKGROUND IMAGE AT 0.8x SPEED) */}
        <div
          className="ge-track absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='24' viewBox='0 0 36 24'%3E%3Crect x='10' y='0' width='16' height='24' rx='2' fill='%2378350F' stroke='%23451A03' stroke-width='1'/%3E%3Crect x='12' y='2' width='12' height='2' fill='%239A3412'/%3E%3Ccircle cx='14' cy='6' r='1.5' fill='%2394A3B8'/%3E%3Ccircle cx='22' cy='6' r='1.5' fill='%2394A3B8'/%3E%3Ccircle cx='14' cy='18' r='1.5' fill='%2394A3B8'/%3E%3Ccircle cx='22' cy='18' r='1.5' fill='%2394A3B8'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: '0 bottom',
            backgroundSize: '36px 24px',
          }}
        >
          {/* Dual Grey Steel Rails */}
          <div className="absolute top-1 left-0 right-0 h-1.5 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-500 shadow-xs" />
          <div className="absolute bottom-1 left-0 right-0 h-1.5 bg-gradient-to-b from-slate-500 via-slate-300 to-slate-600 shadow-xs" />
        </div>

        {/* TRAIN: FOREGROUND HORIZONTAL FLEX WRAPPER HOLDING ENGINE + ALL COACHES */}
        <div className="ge-train flex w-max items-end gap-7 pl-[12vw] will-change-transform relative z-20 pb-4">
          {/* Locomotive at the front (facing Left) */}
          <Locomotive />

          {/* 4 Feature Coaches */}
          {growthCoachesData.map((coach) => (
            <Coach key={coach.number} coach={coach} />
          ))}
        </div>

        {/* Festive Layer (pointer-events: none) */}
        {siteConfig.festive.enabled && (
          <div className="absolute inset-0 pointer-events-none z-30 opacity-75">
            <div
              className="absolute top-2 left-1/4 text-xs animate-bounce"
              style={{ animationDuration: '4s' }}
            >
              🌸
            </div>
            <div
              className="absolute top-6 left-1/2 text-xs animate-bounce"
              style={{ animationDuration: '3.5s' }}
            >
              🌼
            </div>
            <div
              className="absolute top-3 left-3/4 text-xs animate-bounce"
              style={{ animationDuration: '5s' }}
            >
              🌸
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 3. PROGRESS BAR & CALL TO ACTION                             */}
      {/* ============================================================ */}
      <div className="max-w-xl mx-auto w-full px-4 text-center select-none flex-shrink-0 space-y-4">
        {/* Progress Bar with .ge-bar */}
        <div className="max-w-xs mx-auto w-full">
          <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden">
            <div
              className="ge-bar bg-gradient-to-r from-[#15D8E1] to-[#0AB6C4] h-full rounded-full"
              style={{ width: '0%' }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 font-semibold">
            <span>BRANDIES JN.</span>
            <span>TERMINAL REACHED</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() =>
              openConsultation(
                'Growth Express Strategy Plan',
                'I want to synchronize my e-commerce marketing, ads, and web development with the Growth Express team.'
              )
            }
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-heading font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2.5"
          >
            <span>Let&apos;s Build Your Growth Plan</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
}

export { GrowthExpress };
