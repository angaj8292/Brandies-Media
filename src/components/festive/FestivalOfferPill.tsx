'use client';

import React, { useState } from 'react';
import { useFestive } from '@/context/FestiveContext';
import { Copy, Check, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const FestivalOfferPill: React.FC = () => {
  const { activeFestival } = useFestive();
  const [copied, setCopied] = useState(false);

  if (!activeFestival) return null;

  const handleCopyCoupon = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(activeFestival.couponCode);
    setCopied(true);
    toast.success(`Coupon code "${activeFestival.couponCode}" copied!`, {
      description: `Enjoy flat ${activeFestival.discountPercent}% OFF on all services.`,
    });
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 border border-amber-300/60 shadow-sm text-xs font-semibold text-amber-950 transition-transform hover:scale-105 select-none relative overflow-hidden"
      style={{
        boxShadow: `0 2px 12px -2px ${activeFestival.colors.glow}`,
      }}
    >
      {/* Shimmer line */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* Festival Diya / Icon */}
      <span className="text-base leading-none">🪔</span>

      {/* Text */}
      <span className="font-bold tracking-tight">
        {activeFestival.offerText}
      </span>

      {/* Dark rounded coupon chip with copy button */}
      <button
        type="button"
        onClick={handleCopyCoupon}
        className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold transition-all ml-1 shadow-sm active:scale-95"
        title="Click to copy coupon code"
      >
        <span>{activeFestival.couponCode}</span>
        {copied ? (
          <Check className="w-3 h-3 text-emerald-400" />
        ) : (
          <Copy className="w-3 h-3 text-amber-300" />
        )}
        <span className="text-[10px]">→</span>
      </button>
    </div>
  );
};
