'use client';

import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { TrendingUp, Award, IndianRupee, Users, Sparkles } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'brands',
      label: 'Brands Scaled',
      value: siteConfig.stats.brandsScaled,
      subtext: 'Across Amazon, Flipkart, Meesho & Shopify',
      icon: <Award className="w-6 h-6 text-[#15D8E1]" />,
    },
    {
      id: 'revenue',
      label: 'Client Revenue Generated',
      value: siteConfig.stats.revenueGenerated,
      subtext: 'Net verified sales across client portfolios',
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    },
    {
      id: 'adspend',
      label: 'Ad Spend Managed',
      value: siteConfig.stats.adSpendManaged,
      subtext: 'Optimized across Meta, Google & Amazon PPC',
      icon: <IndianRupee className="w-6 h-6 text-amber-500" />,
    },
    {
      id: 'retention',
      label: 'Client Retention Rate',
      value: siteConfig.stats.clientRetention,
      subtext: 'Long-term partnership with zero lock-in contracts',
      icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white border-y border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#15D8E1]" /> Measurable Real-World Impact
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Numbers That Speak Louder Than{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Promises</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Backed by mathematical rigor, transparent reporting, and relentless execution since {siteConfig.stats.sinceYear}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FAFCFF] to-white border border-slate-200/80 shadow-card-soft hover:shadow-card-elevated hover:border-[#15D8E1] transition-all duration-300 text-center ${
                hasAnimated ? 'animate-in fade-in zoom-in-95 duration-700' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>

              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight font-mono">
                {stat.value}
              </div>

              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-800 mt-2">
                {stat.label}
              </h4>

              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
