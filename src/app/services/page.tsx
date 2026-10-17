import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { MandalaArt } from '@/components/common/MandalaArt';
import {
  Sparkles,
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
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All E-Commerce Growth Services | Brandies Media',
  description:
    'Explore our 12 specialized e-commerce services: Amazon & Flipkart management, Meta performance marketing, custom Next.js & Shopify web development, and branding.',
};

export default function ServicesPage() {
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

  return (
    <div className="w-full">
      {/* Services Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] overflow-hidden text-center">
        <MandalaArt position="top-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> End-to-End Execution
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
            High-Performance Services for{' '}
            <span className="text-[#0AB6C4] marker-swoosh">
              High-Growth Brands
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            From launching your first SKU on Amazon to engineering headless Next.js online stores doing ₹1 Crore/month, our domain experts handle the heavy lifting.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group bg-[#FAFCFF] rounded-3xl p-7 border border-slate-200 shadow-card-soft hover:shadow-card-elevated hover:border-[#15D8E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0AB6C4] group-hover:bg-[#15D8E1] group-hover:text-slate-950 flex items-center justify-center transition-colors">
                      {iconMap[service.iconName] || <ShoppingBag className="w-6 h-6" />}
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {service.category}
                  </span>

                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors mt-1">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-2">
                    {service.heroHighlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Starting from</span>
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      {service.startingPrice}
                    </span>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0AB6C4] group-hover:text-cyan-700"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
