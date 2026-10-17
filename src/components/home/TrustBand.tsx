'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { Star, Quote, Award, ShieldCheck } from 'lucide-react';

export const TrustBand: React.FC = () => {
  return (
    <section className="relative bg-[#0B1220] text-white pt-14 pb-16 overflow-hidden">
      {/* Curved SVG Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 text-white fill-current"
        >
          <path d="M0,0 C300,90 900,90 1200,0 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Featured Client Quote */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative">
            <Quote className="w-8 h-8 text-[#15D8E1] opacity-60 mb-2" />
            <p className="text-slate-300 text-sm leading-relaxed italic">
              &ldquo;Brandies Media took our Amazon revenue from ₹4L to ₹38L/mo in just 6 months. Their A+ cataloguing and PPC bid management cut our ACOS from 38% down to 16.5%. Best growth decision we ever made.&rdquo;
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#15D8E1] to-[#0AB6C4] flex items-center justify-center text-slate-950 font-bold text-xs">
                VS
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Vikramaditya Singhania
                </h4>
                <p className="text-[11px] text-slate-400">
                  Founder, Vedik Roots Ayurveda
                </p>
              </div>
            </div>
          </div>

          {/* Center: Configurable Laurel-Wreath Badge */}
          <div className="text-center flex flex-col items-center justify-center p-6">
            {/* Laurel Wreath SVG Graphic */}
            <div className="relative mb-3 flex items-center justify-center">
              <svg
                width="140"
                height="80"
                viewBox="0 0 140 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#15D8E1]"
              >
                {/* Left Branch */}
                <path
                  d="M60 70C35 68 15 50 15 25C15 16 18 8 22 2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="12" r="3.5" fill="currentColor" />
                <circle cx="20" cy="24" r="3.5" fill="currentColor" />
                <circle cx="18" cy="38" r="3.5" fill="currentColor" />
                <circle cx="24" cy="52" r="3.5" fill="currentColor" />
                <circle cx="38" cy="64" r="3.5" fill="currentColor" />

                {/* Right Branch */}
                <path
                  d="M80 70C105 68 125 50 125 25C125 16 122 8 118 2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="112" cy="12" r="3.5" fill="currentColor" />
                <circle cx="120" cy="24" r="3.5" fill="currentColor" />
                <circle cx="122" cy="38" r="3.5" fill="currentColor" />
                <circle cx="116" cy="52" r="3.5" fill="currentColor" />
                <circle cx="102" cy="64" r="3.5" fill="currentColor" />

                {/* Center Star */}
                <path
                  d="M70 20L73 28H81L75 33L77 41L70 36L63 41L65 33L59 28H67L70 20Z"
                  fill="#FBBF24"
                />
              </svg>
            </div>

            <div className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              {siteConfig.stats.brandsScaled} BRANDS SCALED
            </div>
            <div className="text-xs uppercase font-extrabold text-[#15D8E1] tracking-widest mt-1">
              TOP-RATED E-COMMERCE GROWTH PARTNER
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              Propelling Brands Since {siteConfig.stats.sinceYear}
            </div>
          </div>

          {/* Right: Google Reviews Card */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              {/* Google G Logo */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="text-sm font-bold text-white">Google Reviews</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                Verified
              </span>
            </div>

            <div className="flex items-center gap-3 my-2">
              <span className="font-heading font-black text-3xl text-white">
                {siteConfig.stats.rating}
              </span>
              <div>
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-slate-300">
                  Based on {siteConfig.stats.reviewsCount} Client Ratings
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>98% Positive Feedback</span>
              <span className="text-[#15D8E1] font-semibold">100% Verified Founders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
