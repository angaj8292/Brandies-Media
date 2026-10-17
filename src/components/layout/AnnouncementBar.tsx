'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Sparkles, X, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!siteConfig.festive.enabled || dismissed) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.festive.couponCode);
    setCopied(true);
    toast.success(`Coupon code ${siteConfig.festive.couponCode} copied!`, {
      description: `Use it to get flat ${siteConfig.festive.discountPercent}% off on any service package.`,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <aside
      aria-label="Festive Announcement"
      className="relative z-50 bg-gradient-to-r from-[#0B1220] via-[#102038] to-[#0B1220] text-white text-xs sm:text-sm border-b border-cyan-500/20 py-2 sm:py-2.5 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center flex-wrap gap-2 text-center">
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="font-semibold tracking-wide text-amber-300">FESTIVE SALE:</span>
          </span>
          <span className="text-slate-200">
            {siteConfig.festive.announcementText}
          </span>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400/20 to-cyan-400/20 hover:from-amber-400/30 hover:to-cyan-400/30 border border-amber-300/40 text-amber-200 text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold transition-all hover:scale-105 active:scale-95 ml-1"
            title="Click to copy coupon code"
          >
            {siteConfig.festive.couponCode}
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-amber-300" />
            )}
          </button>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
