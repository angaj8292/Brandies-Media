'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useConsultation } from '@/components/context/ConsultationContext';
import { formatCurrency } from '@/lib/utils';
import {
  ShoppingBag,
  Trash2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Tag,
} from 'lucide-react';
import { toast } from 'sonner';

export default function CartPage() {
  const { openConsultation } = useConsultation();
  const [items, setItems] = useState([
    {
      id: 'accel-1',
      title: 'Growth Accelerator (Full-Stack Omnichannel)',
      category: 'Monthly Growth Retainer',
      price: 39999,
      originalPrice: 49999,
      features: [
        'Amazon, Flipkart & Shopify Sync',
        'Daily PPC & Meta CAPI Ads Management',
        'Dedicated Senior Growth Manager',
      ],
    },
  ]);

  const [couponCode, setCouponCode] = useState(siteConfig.festive.enabled ? siteConfig.festive.couponCode : '');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(siteConfig.festive.enabled ? siteConfig.festive.couponCode : null);

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const discountPercent = appliedCoupon ? siteConfig.festive.discountPercent : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === siteConfig.festive.couponCode.toUpperCase()) {
      setAppliedCoupon(siteConfig.festive.couponCode);
      toast.success(`Coupon "${siteConfig.festive.couponCode}" applied successfully!`, {
        description: `You saved ${formatCurrency(discountAmount)} with the festive discount.`,
      });
    } else {
      toast.error('Invalid coupon code. Try FESTIVE10 for 10% off.');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast.info('Coupon removed.');
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.info('Package removed from cart.');
  };

  return (
    <div className="w-full py-16 sm:py-24 bg-[#FAFCFF] min-h-[75vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950">
            Selected Growth Packages
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review your selected growth retainers before booking kickoff onboarding.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Your cart is empty
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Explore our transparent growth retainers and find the perfect package for your brand.
            </p>
            <div className="pt-2">
              <Link
                href="/#pricing"
                className="px-6 py-3 rounded-full bg-slate-900 text-white font-heading font-bold text-xs hover:bg-slate-800 transition-colors inline-block"
              >
                Browse Pricing Tiers →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AB6C4] bg-cyan-50 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mt-1.5">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-rose-500 p-1 rounded-lg transition-colors"
                      title="Remove package"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <ul className="my-4 space-y-1.5 text-xs text-slate-600 border-y border-slate-100 py-3">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-xs text-slate-400">Monthly Retainer</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 line-through">
                        {formatCurrency(item.originalPrice)}
                      </span>
                      <span className="font-heading font-black text-2xl text-slate-900 font-mono">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Checkout (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-soft space-y-6">
                <h3 className="font-heading font-extrabold text-xl text-slate-900 border-b border-slate-100 pb-3">
                  Summary
                </h3>

                {/* Coupon Input Form */}
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Promo / Festive Coupon
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="e.g. FESTIVE10"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 font-mono uppercase focus:outline-none focus:border-[#15D8E1]"
                      />
                      <Tag className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white font-heading font-bold text-xs hover:bg-slate-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <span>✓ {appliedCoupon} active ({discountPercent}% OFF)</span>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="text-xs text-rose-500 font-bold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </form>

                {/* Totals Table */}
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Festive Discount ({discountPercent}%)</span>
                      <span className="font-mono">
                        -{formatCurrency(discountAmount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between border-t border-slate-200 pt-3 text-sm font-extrabold text-slate-950">
                    <span>Total Estimated Retainer</span>
                    <span className="font-mono text-lg text-[#0AB6C4]">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    openConsultation(
                      'Cart Checkout: ' + items[0]?.title,
                      `I am proceeding with checkout for ${items[0]?.title} at ${formatCurrency(total)}/mo (Coupon: ${appliedCoupon || 'None'}). Please schedule kickoff.`
                    )
                  }
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] ring-2 ring-amber-300/40"
                >
                  <span>Proceed to Onboarding Kickoff</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>No payment required right now · 100% money-back SLA</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
