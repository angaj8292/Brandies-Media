'use client';

import React from 'react';
import { useConsultation } from '@/components/context/ConsultationContext';
import { siteConfig } from '@/config/site';
import { MandalaArt } from '@/components/common/MandalaArt';
import { Calendar, MessageSquare, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative rounded-4xl bg-gradient-to-br from-[#0B1220] via-[#102038] to-[#060A12] text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-cyan-500/30 shadow-2xl">
          {/* Subtle Mandala corner graphic */}
          <MandalaArt position="bottom-right" className="opacity-15" />
          <MandalaArt position="top-left" className="opacity-10" />

          {/* Cyan Glow blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[#15D8E1] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Stop Guessing. Start Scaling.
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Ready to Turn Your Brand into a{' '}
              <span className="text-[#15D8E1] marker-swoosh">Market Leader?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Book a complimentary 30-minute growth roadmap session. We will audit your product listings, analyze competitor gaps, and calculate your exact scaling roadmap with realistic milestones.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openConsultation()}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-extrabold text-base text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5 text-slate-900" />
                <span>Get Free Consultation</span>
              </button>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-heading font-bold text-base text-white bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/50 shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Reassurance pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zero Lock-in Contracts
              </span>
              <span>•</span>
              <span>100% Non-Disclosure Guaranteed</span>
              <span>•</span>
              <span className="text-amber-300 font-semibold">Festive 10% Discount Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
