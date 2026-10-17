'use client';

import React, { useState, useEffect } from 'react';
import { useFestive } from '@/context/FestiveContext';
import { Sparkles, X, Copy, Check, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const AnnouncementBanner: React.FC = () => {
  const { activeFestival } = useFestive();
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number }>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    if (!activeFestival) return;

    const calculateTimeLeft = () => {
      // Calculate remaining time until activeFestival.endDate 23:59:59 IST
      const endDateTime = new Date(`${activeFestival.endDate}T23:59:59+05:30`).getTime();
      const now = new Date().getTime();
      const diff = Math.max(endDateTime - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, mins, secs });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [activeFestival]);

  if (!activeFestival || dismissed) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFestival.couponCode);
    setCopied(true);
    toast.success(`Coupon code ${activeFestival.couponCode} copied!`, {
      description: `Use it to get flat ${activeFestival.discountPercent}% off on any service package.`,
    });
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <aside
      aria-label="Festive Announcement"
      className="relative z-50 text-white text-xs sm:text-sm border-b py-2 sm:py-2.5 px-4 transition-all"
      style={{
        background: `linear-gradient(90deg, #0B1220 0%, ${activeFestival.colors.primary}90 50%, #0B1220 100%)`,
        borderColor: `${activeFestival.colors.primary}50`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center flex-wrap gap-2 text-center">
          <span className="inline-flex items-center gap-1.5 font-bold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{activeFestival.name.toUpperCase()} SPECIAL:</span>
          </span>

          <span className="text-slate-100 font-medium">
            Use code <strong className="font-mono text-amber-300">{activeFestival.couponCode}</strong> for{' '}
            <strong className="text-amber-300">{activeFestival.discountPercent}% OFF</strong>.
          </span>

          {/* Copy Button Chip */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-amber-300/40 text-amber-200 text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold transition-all hover:scale-105 active:scale-95 ml-1"
            title="Click to copy coupon code"
          >
            {activeFestival.couponCode}
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-amber-300" />
            )}
          </button>

          {/* Countdown Timer to Festival End Date */}
          <div className="hidden lg:inline-flex items-center gap-1 bg-black/30 border border-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold text-slate-300 ml-2">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>Ends in:</span>
            <span className="text-white font-bold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m {timeLeft.secs}s
            </span>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-slate-300 hover:text-white p-1 rounded-md transition-colors flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
