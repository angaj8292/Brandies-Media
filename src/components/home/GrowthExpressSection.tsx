'use client';

import React, { useRef } from 'react';
import { trainFeaturesData } from '@/data/trainFeatures';
import { useConsultation } from '@/components/context/ConsultationContext';
import {
  Building2,
  BarChart3,
  UserCheck,
  Zap,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export const GrowthExpressSection: React.FC = () => {
  const { openConsultation } = useConsultation();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const icons: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-white" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-white" />,
    UserCheck: <UserCheck className="w-6 h-6 text-white" />,
    Zap: <Zap className="w-6 h-6 text-white" />,
  };

  const scrollTrain = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = 360;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#F0FDF4] via-emerald-50/40 to-[#FFF8F0] overflow-hidden">
      {/* Background Illustrated Rolling Green Hills & Sun */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Soft yellow morning sun */}
        <div className="absolute top-12 right-20 w-32 h-32 rounded-full bg-amber-300/30 blur-2xl" />

        {/* Rolling Hills SVGs */}
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-16 left-0 right-0 w-full h-48 text-emerald-200/50"
        >
          <path
            d="M0,160 C320,80 420,240 720,140 C1020,40 1200,200 1440,120 L1440,320 L0,320 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-10 left-0 right-0 w-full h-36 text-emerald-300/40"
        >
          <path
            d="M0,192 C240,240 480,120 720,180 C960,240 1200,120 1440,160 L1440,320 L0,320 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading & Station Board */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Full-Stack Synergy
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
              One Team. One Plan.{' '}
              <span className="text-[#0AB6C4] marker-swoosh">Zero Juggling.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 flex items-center gap-2">
              <span>Keep scrolling — the Growth Express is passing through 🚂</span>
            </p>
          </div>

          {/* Authentic Indian Railway Style Station Signboard: BRANDIES JN. */}
          <div className="flex-shrink-0 bg-[#FACC15] border-4 border-slate-900 rounded-lg shadow-xl px-6 py-3 text-center transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="text-[11px] font-bold text-slate-900 tracking-wider">
              ब्रांडीज़ जंक्शन
            </div>
            <div className="font-heading font-black text-xl sm:text-2xl text-slate-950 tracking-widest border-y-2 border-slate-900 my-0.5 px-3">
              BRANDIES JN.
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-800 tracking-wider">
              E-COMMERCE TERMINAL · ALT 500+ BRANDS
            </div>
          </div>
        </div>

        {/* Train Scroll Controls */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            onClick={() => scrollTrain('left')}
            className="p-2 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            aria-label="Scroll train left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTrain('right')}
            className="p-2 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            aria-label="Scroll train right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Train & Coaches Horizontal Track Container */}
        <div
          ref={trackRef}
          className="overflow-x-auto pb-10 pt-4 flex items-end gap-4 sm:gap-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* 1. Red Steam Engine Locomotive */}
          <div className="flex-shrink-0 w-[300px] sm:w-[340px] snap-center">
            <div className="relative bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-6 text-white shadow-2xl border-4 border-red-900 flex flex-col justify-between h-[360px]">
              {/* Smokestack & Puffing Smoke */}
              <div className="absolute -top-10 left-8 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white/70 blur-xs animate-ping" />
                <div className="w-8 h-8 rounded-full bg-white/60 blur-xs -mt-1" />
                <div className="w-6 h-10 bg-slate-900 rounded-t-sm border border-slate-700 shadow-md" />
              </div>

              {/* Locomotive Headlight */}
              <div className="absolute top-8 -left-3 w-6 h-6 rounded-full bg-amber-300 border-2 border-slate-900 shadow-lg shadow-amber-400/80 animate-pulse" />

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold bg-red-950/60 border border-red-400/30 px-2.5 py-1 rounded-full">
                  LOCOMOTIVE NO. 2019
                </span>

                <h3 className="font-heading font-black text-2xl text-white mt-4">
                  THE GROWTH EXPRESS
                </h3>

                <p className="text-xs text-red-100 mt-2 leading-relaxed">
                  Powered by high-velocity marketing engineering. Accelerating D2C brands across Indian marketplaces without pitstops or speed bumps.
                </p>
              </div>

              {/* Cabin Driver Illustration */}
              <div className="bg-red-900/60 p-3 rounded-2xl border border-red-400/20 text-xs text-red-100 flex items-center justify-between">
                <span>Driver: Brandies Core Team</span>
                <span className="text-amber-300 font-bold">Full Throttle</span>
              </div>

              {/* Train Engine Wheels */}
              <div className="flex items-center justify-around pt-2 border-t-2 border-red-900">
                <div className="w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-600 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-600 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="w-3 h-3 bg-slate-300 rounded-full" />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-600 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Coach Coupler graphic */}
          <div className="flex-shrink-0 w-4 h-2 bg-slate-800 rounded self-center -mx-2 z-10" />

          {/* 4 Feature Coach Cards */}
          {trainFeaturesData.map((coach) => (
            <React.Fragment key={coach.coachNumber}>
              <div className="flex-shrink-0 w-[300px] sm:w-[340px] snap-center">
                <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200 flex flex-col justify-between h-[360px] overflow-hidden group hover:shadow-2xl transition-all">
                  {/* Colored top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-2.5"
                    style={{ backgroundColor: coach.topColor }}
                  />

                  {/* Big faded coach number in background */}
                  <div className="absolute right-3 top-4 font-heading font-black text-6xl text-slate-100 select-none pointer-events-none group-hover:text-cyan-50 transition-colors">
                    {coach.coachNumber}
                  </div>

                  <div>
                    {/* Coach Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {coach.badge}
                      </span>
                    </div>

                    {/* Icon Tile */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${coach.iconBg} flex items-center justify-center shadow-md mb-4`}
                    >
                      {icons[coach.iconName]}
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors leading-snug">
                      {coach.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {coach.description}
                    </p>
                  </div>

                  {/* Perks Bullet Points */}
                  <div className="border-t border-slate-100 pt-3 space-y-1.5">
                    {coach.perks.map((perk, pIdx) => (
                      <div
                        key={pIdx}
                        className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#15D8E1]" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coach Wheels at the bottom */}
                  <div className="flex items-center justify-around pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupler between coaches */}
              <div className="flex-shrink-0 w-4 h-2 bg-slate-800 rounded self-center -mx-2 z-10" />
            </React.Fragment>
          ))}
        </div>

        {/* Railway Track Ground Line with Sleepers */}
        <div className="relative -mt-6 z-20">
          {/* Steel rails */}
          <div className="h-2 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded shadow-md" />
          {/* Wooden Sleepers */}
          <div className="h-3 flex items-center justify-between px-2 gap-2 mt-0.5 overflow-hidden">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-3 bg-amber-950 rounded-xs flex-shrink-0 opacity-80"
              />
            ))}
          </div>
          <div className="h-1 bg-slate-700 rounded-b mt-0.5" />
        </div>

        {/* Action Button Below the Train */}
        <div className="text-center mt-12">
          <button
            onClick={() => openConsultation()}
            className="px-8 py-4 rounded-full font-heading font-extrabold text-base text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Let&apos;s Build Your Growth Plan</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
