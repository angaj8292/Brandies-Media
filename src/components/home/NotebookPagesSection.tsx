'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notebookStepsData } from '@/data/notebookSteps';
import {
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-react';

export const NotebookPagesSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const icons: Record<string, React.ReactNode> = {
    SearchCheck: <Search className="w-6 h-6 text-amber-600" />,
    Wrench: <Wrench className="w-6 h-6 text-emerald-600" />,
    Rocket: <Rocket className="w-6 h-6 text-indigo-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-600" />,
  };

  // Scroll observer to advance notebook pages smoothly as user scrolls past
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section is in the middle of the viewport
      if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
        const totalTravel = rect.height - windowHeight * 0.4;
        const progress = Math.min(
          Math.max((-rect.top + windowHeight * 0.2) / totalTravel, 0),
          0.99
        );
        const newPage = Math.floor(progress * notebookStepsData.length);
        setCurrentPage(newPage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-80 h-80 bg-cyan-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading & Hint */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Transparent Process
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            How We Work:{' '}
            <span className="text-[#0AB6C4] marker-swoosh">
              The 30-Day Growth Engine
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-slate-600 text-sm sm:text-base mt-3">
            <span>Keep scrolling — the plan turns page by page</span>
            <ChevronDown className="w-4 h-4 text-[#0AB6C4] animate-bounce" />
          </div>

          {/* Interactive Page Switcher Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {notebookStepsData.map((step, idx) => (
              <button
                key={step.pageNumber}
                onClick={() => setCurrentPage(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentPage === idx
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-white'
                }`}
              >
                {step.dayChip}
              </button>
            ))}
          </div>
        </div>

        {/* Notebook Cards Stack Area */}
        <div className="relative min-h-[480px] sm:min-h-[440px] max-w-2xl mx-auto flex items-center justify-center">
          {notebookStepsData.map((step, index) => {
            const isCurrent = index === currentPage;
            const isPast = index < currentPage;
            const isFuture = index > currentPage;

            // Page transform calculation
            let transformStyle = '';
            let opacityStyle = 1;
            let zIndexStyle = 10 - index;

            if (isCurrent) {
              transformStyle = 'rotate(0deg) translateY(0px) scale(1)';
              zIndexStyle = 20;
            } else if (isPast) {
              transformStyle = 'rotate(-10deg) translateY(-80px) translateX(-40px) scale(0.92)';
              opacityStyle = 0;
              zIndexStyle = 5;
            } else if (isFuture) {
              const offset = index - currentPage;
              transformStyle = `rotate(${offset * 2.5}deg) translateY(${offset * 12}px) scale(${1 - offset * 0.04})`;
              opacityStyle = 0.85 - offset * 0.2;
              zIndexStyle = 10 - offset;
            }

            return (
              <div
                key={step.pageNumber}
                style={{
                  transform: transformStyle,
                  opacity: opacityStyle,
                  zIndex: zIndexStyle,
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`absolute inset-0 w-full notebook-paper rounded-2xl p-6 sm:p-10 border border-slate-300 shadow-2xl ${
                  isCurrent ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                {/* Tape strip on top */}
                <div
                  className="notebook-tape"
                  style={{ backgroundColor: `${step.tapeColor}80` }}
                />

                {/* Red Left Margin Line */}
                <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-[2px] bg-red-400/70" />

                {/* Top Corner Fold Graphic */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="w-12 h-12 bg-slate-200/90 rotate-45 transform origin-top-left -translate-y-4 shadow-sm" />
                </div>

                <div className="pl-6 sm:pl-8">
                  {/* Page Meta Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black tracking-widest text-slate-500">
                        {step.pageNumber} / {step.total}
                      </span>
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white shadow-sm"
                      style={{ backgroundColor: step.tapeColor }}
                    >
                      {step.dayChip}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200 shadow-sm">
                      {icons[step.iconName]}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* 3 Green-Check Bullet Points */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 space-y-3.5">
                    {step.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation Controls */}
                  <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-200/80">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                      disabled={currentPage === 0}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous Step
                    </button>

                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(notebookStepsData.length - 1, p + 1)
                        )
                      }
                      disabled={currentPage === notebookStepsData.length - 1}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0AB6C4] hover:text-cyan-700 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      Next Step <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
