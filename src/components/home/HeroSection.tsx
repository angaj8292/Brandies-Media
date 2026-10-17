'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { useConsultation } from '@/components/context/ConsultationContext';
import { FestivalOfferPill } from '@/components/festive/FestivalOfferPill';
import { MandalaBackdrop } from '@/components/festive/MandalaBackdrop';
import { DotRings } from '@/components/festive/DotRings';
import {
  Sparkles,
  Star,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const { openConsultation } = useConsultation();
  const [searchPrompt, setSearchPrompt] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const rotatingPlaceholders = [
    "Try 'Launch my brand on Amazon & Flipkart'",
    "Try 'Scale my Shopify store to ₹50L/mo with Meta Ads'",
    "Try 'Cut our marketplace ACOS below 18%'",
    "Try 'Reduce COD Return-to-Origin (RTO) with WhatsApp'",
    "Try 'Build custom Next.js e-commerce storefront'",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingPlaceholders.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rotatingPlaceholders.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchPrompt.trim() || rotatingPlaceholders[placeholderIndex].replace(/^Try '/, '').replace(/'$/, '');
    // Navigate to AI Audit with prefilled goal query
    router.push(`/ai-audit?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA]">
      {/* Dynamic Festive Layer: Rotating Mandala, Floating Dot Rings */}
      <MandalaBackdrop />
      <DotRings />

      {/* Floating blurred color blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-cyan-300/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/12 w-80 h-80 bg-amber-300/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-teal-200/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Dotted Grid Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Top Badges Row: Festive Offer Pill + Google Rating Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* Automatic Dynamic Festival Offer Pill */}
          <FestivalOfferPill />

          {/* Google-Style Rating Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-slate-200/80 text-xs font-medium text-slate-700">
            {/* Google "G" Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">{siteConfig.stats.rating}/5</span>
            <span className="text-slate-500">({siteConfig.stats.reviewsCount} Reviews)</span>
          </div>
        </div>

        {/* Main H1 Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] tracking-tight text-slate-950 max-w-5xl mx-auto mb-6">
          You Focus on Your Business.{' '}
          <span className="block sm:inline">
            We&apos;ll Take Care of{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Growing It.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Marketplaces, marketing, SEO, websites & branding —{' '}
          <span className="font-bold text-slate-900">
            one dedicated team, all under one roof.
          </span>
        </p>

        {/* AI Prompt / Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center bg-white rounded-full p-2 shadow-card-elevated border border-slate-200/90 focus-within:border-[#15D8E1] focus-within:ring-4 focus-within:ring-cyan-500/15 transition-all duration-300"
          >
            <div className="pl-4 pr-2 text-cyan-600 flex-shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse text-[#0AB6C4]" />
            </div>

            <input
              type="text"
              value={searchPrompt}
              onChange={(e) => setSearchPrompt(e.target.value)}
              placeholder={rotatingPlaceholders[placeholderIndex]}
              className="w-full py-2.5 px-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 placeholder:transition-opacity bg-transparent focus:outline-none"
            />

            <button
              type="submit"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-105 active:scale-95 ring-2 ring-amber-300/40"
              aria-label="Submit search for AI Audit"
            >
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-2.5 flex items-center justify-center gap-2">
            <span>✨ Type any growth question or choose a prompt above</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">Free Instant Audit</span>
          </p>
        </div>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openConsultation()}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-extrabold text-base text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/50 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <TrendingUp className="w-5 h-5 text-slate-900" />
            <span>Book Free Strategy Session</span>
          </button>

          <button
            onClick={() => router.push('/ai-audit')}
            className="w-full sm:w-auto px-7 py-4 rounded-full font-heading font-bold text-base text-slate-800 bg-white border border-slate-300 shadow-sm hover:border-[#15D8E1] hover:text-[#0AB6C4] hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Scan My Store (AI Audit)</span>
            <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full font-extrabold">
              FREE
            </span>
          </button>
        </div>

        {/* Proof micro-bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{siteConfig.stats.brandsScaled} Brands Scaled Pan-India</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#15D8E1]" />
            <span>{siteConfig.stats.revenueGenerated} Client GMV Generated</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{siteConfig.stats.clientRetention} Monthly Retention Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};
