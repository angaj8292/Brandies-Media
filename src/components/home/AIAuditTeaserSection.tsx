'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Cpu,
  BarChart,
  Search,
} from 'lucide-react';
import { toast } from 'sonner';

export const AIAuditTeaserSection: React.FC = () => {
  const router = useRouter();
  const [storeUrl, setStoreUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeUrl.trim()) {
      toast.error('Please enter your website or marketplace store URL.');
      return;
    }
    router.push(`/ai-audit?url=${encodeURIComponent(storeUrl.trim())}`);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0B1220] via-[#102038] to-[#0B1220] text-white overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Prop */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free · No Credit Card Required
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Get an Instant AI Audit of Your{' '}
              <span className="text-[#15D8E1] marker-swoosh">
                E-Commerce Store
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our automated diagnostic engine runs 40+ programmatic checks across your store: technical SEO, marketplace catalog indexing, Meta ad telemetry (CAPI), and checkout friction.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#15D8E1] flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">
                  Uncover hidden ad waste and dead PPC keyword bleeders
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#15D8E1] flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">
                  Audit mobile speed & Core Web Vitals conversion roadblocks
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#15D8E1] flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">
                  Receive a customized 90-day growth and revenue roadmap
                </span>
              </div>
            </div>

            {/* URL Input Form */}
            <form onSubmit={handleSubmit} className="pt-4 max-w-lg">
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 p-2 rounded-2xl border border-white/20 backdrop-blur-md focus-within:border-[#15D8E1]">
                <div className="pl-3 text-slate-400 hidden sm:block">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  placeholder="Enter store URL (e.g. brand.in / amazon.in/...)"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 flex-shrink-0 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <span>Scan Now</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                🔒 We respect your privacy. No spam or unsolicited sales calls.
              </p>
            </form>
          </div>

          {/* Right Column: Visual AI Report Card Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-b from-[#131D31] to-[#0E1726] rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl relative overflow-hidden">
              {/* Scanline animation glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#15D8E1] to-transparent animate-pulse" />

              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-[#15D8E1] flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white">
                      AI Diagnostic Engine 4.0
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Analyzing 40+ E-Commerce Data Points
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    SYSTEM READY
                  </span>
                </div>
              </div>

              {/* Sample Radar / Metric Meters */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Catalog & Keyword Indexing</span>
                    <span className="text-amber-400 font-mono">68 / 100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full w-[68%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Meta / Google Ad Telemetry (CAPI)</span>
                    <span className="text-rose-400 font-mono">42 / 100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-rose-500 h-2 rounded-full w-[42%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Mobile Speed & Core Web Vitals</span>
                    <span className="text-emerald-400 font-mono">92 / 100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">WhatsApp Retention & RTO Safeguards</span>
                    <span className="text-cyan-400 font-mono">54 / 100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-[#15D8E1] h-2 rounded-full w-[54%]" />
                  </div>
                </div>
              </div>

              {/* Projected Lift Pill */}
              <div className="mt-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#15D8E1] block">
                    PROJECTED REVENUE EXPANSION
                  </span>
                  <span className="font-heading font-black text-xl text-white">
                    +45% to +120% GMV
                  </span>
                </div>
                <button
                  onClick={() => router.push('/ai-audit')}
                  className="px-4 py-2 rounded-xl bg-[#15D8E1] text-slate-950 font-bold text-xs hover:bg-[#0AB6C4] transition-colors"
                >
                  Run Full Scan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
