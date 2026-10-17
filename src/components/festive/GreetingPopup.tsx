'use client';

import React, { useState, useEffect } from 'react';
import { useFestive } from '@/context/FestiveContext';
import { useConsultation } from '@/components/context/ConsultationContext';
import { X, Sparkles, ArrowRight, Tag } from 'lucide-react';

export const GreetingPopup: React.FC = () => {
  const { activeFestival, currentISTDate } = useFestive();
  const { openConsultation } = useConsultation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!activeFestival || !currentISTDate) return;

    // Check if user already saw the greeting today
    const storageKey = `brandies_greeted_${activeFestival.id}_${currentISTDate}`;
    const alreadyGreeted = localStorage.getItem(storageKey);

    if (!alreadyGreeted) {
      // Delay popup slightly after initial landing for polite experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [activeFestival, currentISTDate]);

  if (!activeFestival || !isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (currentISTDate) {
      localStorage.setItem(`brandies_greeted_${activeFestival.id}_${currentISTDate}`, 'seen');
    }
  };

  const handleClaim = () => {
    handleClose();
    openConsultation(
      `${activeFestival.name} Special Offer`,
      `I want to claim the ${activeFestival.name} special discount (${activeFestival.discountPercent}% OFF with code ${activeFestival.couponCode}).`
    );
  };

  return (
    <div
      role="dialog"
      aria-label={`${activeFestival.name} Greeting`}
      className="fixed bottom-24 left-5 sm:left-8 z-50 w-[320px] sm:w-[350px] bg-white rounded-3xl shadow-2xl border-2 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
      style={{
        borderColor: activeFestival.colors.primary,
        boxShadow: `0 16px 36px -8px ${activeFestival.colors.glow}, 0 4px 12px rgba(0,0,0,0.1)`,
      }}
    >
      {/* Header Bar */}
      <div
        className="px-5 py-3 flex items-center justify-between text-white"
        style={{
          background: `linear-gradient(135deg, #0B1220 0%, ${activeFestival.colors.primary} 100%)`,
        }}
      >
        <div className="flex items-center gap-1.5 font-heading font-black text-xs uppercase tracking-wider text-amber-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FESTIVAL GREETINGS</span>
        </div>

        <button
          onClick={handleClose}
          className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close greeting"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3.5 text-center">
        <div className="text-3xl">🪔</div>

        <h4 className="font-heading font-black text-xl text-slate-950 leading-tight">
          Happy {activeFestival.name}!
        </h4>

        <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
          Warm wishes from the entire team at <strong>Brandies Media</strong>. Celebrate this season by scaling your e-commerce revenue with our special festive offer!
        </p>

        {/* Coupon pill */}
        <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-2.5 flex items-center justify-center gap-2 text-xs font-mono font-bold text-amber-900">
          <Tag className="w-3.5 h-3.5 text-amber-600" />
          <span>CODE: {activeFestival.couponCode}</span>
          <span className="text-[10px] bg-amber-200 px-1.5 py-0.2 rounded font-black">
            {activeFestival.discountPercent}% OFF
          </span>
        </div>

        <button
          onClick={handleClaim}
          className="w-full py-3 rounded-full text-slate-950 font-heading font-black text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
          style={{
            background: 'linear-gradient(135deg, #22E7F0 0%, #15D8E1 50%, #0AB6C4 100%)',
          }}
        >
          <span>Claim {activeFestival.discountPercent}% OFF Discount</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </button>

        <p className="text-[10px] text-slate-400">
          Valid until {activeFestival.endDate} · 100% money-back SLA
        </p>
      </div>
    </div>
  );
};
