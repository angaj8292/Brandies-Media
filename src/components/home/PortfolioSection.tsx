'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { caseStudiesData } from '@/data/caseStudies';
import { useConsultation } from '@/components/context/ConsultationContext';
import { ArrowRight, Sparkles, TrendingUp, Check } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { openConsultation } = useConsultation();
  const [activeTab, setActiveTab] = useState<'All' | 'Marketplace' | 'Ads' | 'Web' | 'Branding'>('All');

  const tabs: ('All' | 'Marketplace' | 'Ads' | 'Web' | 'Branding')[] = [
    'All',
    'Marketplace',
    'Ads',
    'Web',
    'Branding',
  ];

  const filteredCaseStudies =
    activeTab === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.category === activeTab);

  return (
    <section className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> Verified Case Studies
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            How We Scaled Real Brands into{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Market Leaders</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Explore authentic transformation stories across Amazon FBA, Meta performance funnels, and high-converting Shopify web architectures.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid with Hover Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card-soft hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Metric Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 text-[#15D8E1] backdrop-blur-md border border-cyan-500/30">
                    {study.category} · {study.period}
                  </span>
                </div>

                {/* Primary Metric Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2">
                  <div className="bg-slate-950/85 backdrop-blur-md border border-white/20 rounded-xl p-2.5 flex items-center gap-2 text-white">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-slate-300 font-medium">
                        {study.metrics[0].label}
                      </div>
                      <div className="text-xs font-extrabold text-emerald-400 font-mono">
                        {study.metrics[0].value} {study.metrics[0].growth && `(${study.metrics[0].growth})`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {study.client}
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() =>
                      openConsultation(
                        `Case Study Strategy: ${study.client}`,
                        `I was inspired by your results with ${study.client} (${study.metrics[0].value}). Can you build a similar roadmap for my brand?`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0AB6C4] hover:text-cyan-700 transition-colors"
                  >
                    <span>Get Similar Results</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
