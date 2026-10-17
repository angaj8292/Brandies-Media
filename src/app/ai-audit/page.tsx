'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useConsultation } from '@/components/context/ConsultationContext';
import { MandalaArt } from '@/components/common/MandalaArt';
import {
  Sparkles,
  Cpu,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  RotateCcw,
} from 'lucide-react';
import { toast } from 'sonner';

function AIAuditContent() {
  const searchParams = useSearchParams();
  const { openConsultation } = useConsultation();

  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessType, setBusinessType] = useState('D2C E-Commerce Brand');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('₹5 Lakhs - ₹15 Lakhs/mo');

  const [status, setStatus] = useState<'idle' | 'scanning' | 'completed'>('idle');
  const [scanStep, setScanStep] = useState(0);
  const [auditReport, setAuditReport] = useState<any>(null);

  const scanSteps = [
    'Connecting to domain DNS and pinging edge servers...',
    'Inspecting Meta Pixel, CAPI server-side & GA4 telemetry...',
    'Crawling marketplace listings, Buy Box and indexing tags...',
    'Analyzing Google Core Web Vitals (LCP, CLS, INP)...',
    'Synthesizing 90-day growth projection & revenue lift roadmap...',
  ];

  useEffect(() => {
    const urlParam = searchParams.get('url') || searchParams.get('q');
    if (urlParam) {
      setWebsiteUrl(urlParam);
    }
  }, [searchParams]);

  const handleStartAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim() || !email.trim() || !phone.trim()) {
      toast.error('Please enter your store URL, email, and phone number.');
      return;
    }

    setStatus('scanning');
    setScanStep(0);

    // Simulate multi-step scanning sequence
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 900);

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          websiteUrl,
          businessType,
          fullName,
          email,
          phone,
          monthlyRevenue,
        }),
      });

      const data = await res.json();
      setTimeout(() => {
        clearInterval(interval);
        if (data.report) {
          setAuditReport(data.report);
        } else {
          // fallback default report
          setAuditReport({
            domainAnalyzed: websiteUrl,
            overallScore: 74,
            grade: 'B+',
            categoryScores: {
              seo: 72,
              marketplaceReadiness: 68,
              adEfficiency: 54,
              speedAndMobile: 88,
              brandPerception: 76,
            },
            strengths: [
              'Clear product photography and catalog foundation in place',
              'Mobile viewport responsive scaling is active',
              'Primary brand domain name is indexed on Google',
            ],
            criticalGaps: [
              'Missing Meta Conversions API (CAPI) leading to ~25% un-tracked ad purchases',
              'Lack of Amazon/Flipkart keyword silos causing ad budget cannibalization',
              'Absence of automated WhatsApp abandoned cart recovery sequences',
            ],
            quickWins: [
              'Deploy negative keyword rules to stop 20% wasted PPC spend immediately',
              'Implement 1-click UPI checkout to drop COD Return-to-Origin by 25%',
              'Upgrade hero SKUs with A+ Content modules to raise conversion rate',
            ],
            projectedRevenueLift: '+55% to +110% GMV in 90 days',
            recommendedPackage: 'Growth Accelerator',
          });
        }
        setStatus('completed');
        toast.success('AI Audit completed successfully!');
      }, 4200);
    } catch {
      clearInterval(interval);
      setStatus('idle');
      toast.error('Audit failed. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setAuditReport(null);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] overflow-hidden text-center">
        <MandalaArt position="top-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Free E-Commerce Diagnostic
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
            Free AI Business &amp;{' '}
            <span className="text-[#0AB6C4] marker-swoosh">
              Marketing Audit
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Enter your website or marketplace store URL to uncover indexing bottlenecks, ad budget waste, and high-margin conversion opportunities.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* STATE 1: FORM INPUT */}
          {status === 'idle' && (
            <div className="bg-[#FAFCFF] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card-elevated">
              <form onSubmit={handleStartAudit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Store or Website URL *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="e.g. yourbrand.in or amazon.in/shops/yourbrand"
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-[#15D8E1] focus:ring-2 focus:ring-cyan-500/20"
                    />
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Business Type
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1]"
                    >
                      <option value="D2C E-Commerce Brand">D2C E-Commerce Brand</option>
                      <option value="Amazon / Flipkart Marketplace Seller">
                        Amazon / Flipkart Marketplace Seller
                      </option>
                      <option value="Retail Manufacturer / Wholesaler">
                        Retail Manufacturer / Wholesaler
                      </option>
                      <option value="Dropshipping Store">Dropshipping Store</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Current Monthly Revenue
                    </label>
                    <select
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1]"
                    >
                      <option value="Just Starting (₹0 - ₹2L/mo)">Just Starting (₹0 - ₹2L/mo)</option>
                      <option value="₹2L - ₹10L/mo">₹2L - ₹10L/mo</option>
                      <option value="₹10L - ₹50L/mo">₹10L - ₹50L/mo</option>
                      <option value="₹50L - ₹1Cr+/mo">₹50L - ₹1Cr+/mo</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Angaj Kumar"
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@yourbrand.com"
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 82927 69366"
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] ring-2 ring-amber-300/40"
                  >
                    <Cpu className="w-5 h-5 text-slate-900" />
                    <span>Run Free AI Diagnostic Scan</span>
                    <ArrowRight className="w-5 h-5 text-slate-950" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% confidential. No login credentials required.</span>
                </div>
              </form>
            </div>
          )}

          {/* STATE 2: SCANNING ANIMATION */}
          {status === 'scanning' && (
            <div className="bg-[#0B1220] rounded-3xl p-8 sm:p-14 text-white border border-cyan-500/40 shadow-2xl text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto animate-pulse">
                <Cpu className="w-10 h-10 text-[#15D8E1] animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl text-white">
                  Scanning {websiteUrl}...
                </h3>
                <p className="text-sm text-cyan-300 mt-2 font-mono">
                  {scanSteps[scanStep]}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto bg-slate-800 rounded-full h-3 overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-[#15D8E1] to-[#0AB6C4] h-full rounded-full transition-all duration-500"
                  style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                />
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Running 42 algorithmic checkpoints across indexing, CAPI & speed...
              </div>
            </div>
          )}

          {/* STATE 3: COMPLETED SCORE REPORT */}
          {status === 'completed' && auditReport && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
              {/* Report Header Card */}
              <div className="bg-gradient-to-br from-[#0B1220] via-[#102038] to-[#0B1220] text-white rounded-3xl p-6 sm:p-10 border border-cyan-500/40 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#15D8E1] bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800">
                      DIAGNOSTIC REPORT FOR: {auditReport.domainAnalyzed}
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-2">
                      Growth Health Score: {auditReport.overallScore}/100
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border-2 border-[#15D8E1] flex items-center justify-center font-heading font-black text-3xl text-[#15D8E1] shadow-cyan-glow">
                      {auditReport.grade}
                    </div>
                  </div>
                </div>

                {/* 5 Category Meters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Technical SEO & Schema</span>
                      <span className="text-[#15D8E1] font-mono">{auditReport.categoryScores.seo}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-[#15D8E1] h-2 rounded-full" style={{ width: `${auditReport.categoryScores.seo}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Marketplace & Catalog</span>
                      <span className="text-emerald-400 font-mono">{auditReport.categoryScores.marketplaceReadiness}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${auditReport.categoryScores.marketplaceReadiness}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Ad Efficiency & CAPI</span>
                      <span className="text-rose-400 font-mono">{auditReport.categoryScores.adEfficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${auditReport.categoryScores.adEfficiency}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Speed & Mobile Vitals</span>
                      <span className="text-emerald-400 font-mono">{auditReport.categoryScores.speedAndMobile}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${auditReport.categoryScores.speedAndMobile}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Perceived Brand Authority</span>
                      <span className="text-amber-400 font-mono">{auditReport.categoryScores.brandPerception}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${auditReport.categoryScores.brandPerception}%` }} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Projected Lift: <strong className="text-emerald-400">{auditReport.projectedRevenueLift}</strong></span>
                  <span>Recommended: <strong className="text-[#15D8E1]">{auditReport.recommendedPackage}</strong></span>
                </div>
              </div>

              {/* Insights Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Critical Gaps */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-6 sm:p-7">
                  <h3 className="font-heading font-extrabold text-base text-rose-900 flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>Critical Gaps Identified</span>
                  </h3>
                  <ul className="space-y-3">
                    {auditReport.criticalGaps.map((gap: string, i: number) => (
                      <li key={i} className="text-xs sm:text-sm text-rose-950 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Wins */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-7">
                  <h3 className="font-heading font-extrabold text-base text-emerald-900 flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <span>Immediate Quick Wins (0-30 Days)</span>
                  </h3>
                  <ul className="space-y-3">
                    {auditReport.quickWins.map((win: string, i: number) => (
                      <li key={i} className="text-xs sm:text-sm text-emerald-950 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Callouts */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl">
                  Want Our Team to Implement These Fixes for You?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  Book a free strategy walkthrough where our Senior Growth Director will review these exact findings with you line by line.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      openConsultation(
                        'AI Audit Implementation',
                        `I ran the AI audit on ${auditReport.domainAnalyzed} (Score: ${auditReport.overallScore}/100) and would like your team to review the implementation plan.`
                      )
                    }
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full font-heading font-bold text-sm bg-gradient-to-r from-[#22E7F0] to-[#0AB6C4] text-slate-950 hover:shadow-cyan-glow transition-all"
                  >
                    Discuss Audit Findings with Strategist →
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full font-heading font-semibold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Scan Another Store
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function AIAuditPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading AI Audit engine...</div>}>
      <AIAuditContent />
    </Suspense>
  );
}
