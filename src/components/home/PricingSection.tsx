'use client';

import React from 'react';
import { pricingData } from '@/data/pricing';
import { siteConfig } from '@/config/site';
import { useConsultation } from '@/components/context/ConsultationContext';
import { formatCurrency } from '@/lib/utils';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" id="pricing">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-amber-100/40 via-cyan-100/30 to-teal-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Straightforward Retainers
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Transparent Pricing.{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Compounding Returns.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3">
            No hidden commissions. No long-term lock-ins. Month-to-month retainers backed by dedicated senior execution pods.
          </p>

          {/* Festive Special Pill */}
          {siteConfig.festive.enabled && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-400/50 text-amber-900 font-bold text-xs">
              <span>✨ Festive Special: Use code</span>
              <span className="font-mono bg-amber-200/80 px-2 py-0.5 rounded font-black text-slate-900">
                {siteConfig.festive.couponCode}
              </span>
              <span>for flat {siteConfig.festive.discountPercent}% OFF first 3 months!</span>
            </div>
          )}
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((tier) => {
            const discountedPrice = siteConfig.festive.enabled
              ? Math.round(tier.monthlyPrice * (1 - siteConfig.festive.discountPercent / 100))
              : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-[#0B1220] via-[#101F35] to-[#0B1220] text-white border-2 border-cyan-400 shadow-2xl shadow-cyan-950/40 lg:-translate-y-4'
                    : 'bg-[#FAFCFF] text-slate-900 border border-slate-200/90 shadow-card-soft hover:shadow-card-elevated hover:border-cyan-300'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#22E7F0] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-md">
                    Most Popular Growth Package
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`font-heading font-extrabold text-2xl ${
                        tier.popular ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {tier.name}
                    </h3>

                    {siteConfig.festive.enabled && (
                      <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        {siteConfig.festive.discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs min-h-[36px] ${
                      tier.popular ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-black text-4xl sm:text-5xl font-mono tracking-tight">
                        {formatCurrency(discountedPrice)}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          tier.popular ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        / month
                      </span>
                    </div>

                    {siteConfig.festive.enabled && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-400 line-through">
                          {formatCurrency(tier.originalPrice)}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-500">
                          Save {formatCurrency(tier.originalPrice - discountedPrice)}/mo
                        </span>
                      </div>
                    )}

                    <div
                      className={`text-[11px] font-bold mt-2 px-2.5 py-1 rounded-lg inline-block ${
                        tier.popular
                          ? 'bg-cyan-950/80 text-[#15D8E1] border border-cyan-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Best for: {tier.idealFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div
                      className={`font-bold uppercase tracking-wider text-[10px] ${
                        tier.popular ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Included Deliverables:
                    </div>

                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span
                          className={
                            tier.popular ? 'text-slate-200' : 'text-slate-700'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}

                    {tier.notIncluded?.map((notInc, nIdx) => (
                      <div
                        key={nIdx}
                        className="flex items-start gap-2.5 opacity-40"
                      >
                        <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span
                          className={
                            tier.popular ? 'text-slate-400' : 'text-slate-400'
                          }
                        >
                          {notInc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800">
                  <button
                    onClick={() =>
                      openConsultation(
                        `Pricing Tier: ${tier.name}`,
                        `I am interested in starting with the ${tier.name} package (${formatCurrency(discountedPrice)}/mo). Please advise next steps.`
                      )
                    }
                    className={`w-full py-3.5 rounded-full font-heading font-extrabold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      tier.popular
                        ? 'bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 shadow-cyan-glow hover:shadow-cyan-glow-lg ring-2 ring-amber-300/40'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p
                    className={`text-[11px] text-center mt-2 ${
                      tier.popular ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {tier.ctaSubtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
