'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { useConsultation } from '@/components/context/ConsultationContext';
import {
  ShoppingBag,
  TrendingUp,
  Target,
  Share2,
  Code,
  Search,
  Palette,
  PlayCircle,
  Package,
  Layout,
  Percent,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';

export const ServicesGridSection: React.FC = () => {
  const { openConsultation } = useConsultation();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Marketplace', 'Performance Marketing', 'Web & Tech', 'Branding'];

  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Share2: <Share2 className="w-6 h-6" />,
    Code: <Code className="w-6 h-6" />,
    Search: <Search className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    PlayCircle: <PlayCircle className="w-6 h-6" />,
    Package: <Package className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Percent: <Percent className="w-6 h-6" />,
  };

  const filteredServices =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" id="services-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-100/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0AB6C4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Full Spectrum E-Commerce Capabilities
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Our 12 Core Services:{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Engineered to Win</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Every service is handled by dedicated domain specialists focused on tangible ROI, lower CAC, and rapid brand scaling.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAFCFF] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card-soft hover:shadow-card-elevated hover:border-[#15D8E1] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0AB6C4] group-hover:bg-[#15D8E1] group-hover:text-slate-950 flex items-center justify-center transition-colors shadow-sm">
                    {iconMap[service.iconName] || <ShoppingBag className="w-6 h-6" />}
                  </div>

                  {service.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {service.category}
                </div>

                <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors leading-snug">
                  {service.shortTitle}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-1.5">
                  {service.heroHighlights.slice(0, 2).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-1.5 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Starting from</span>
                  <span className="text-sm font-extrabold text-slate-900 font-mono">
                    {service.startingPrice}
                  </span>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0AB6C4] group-hover:text-cyan-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
