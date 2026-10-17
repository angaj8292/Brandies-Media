'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { DiscountRibbon } from '@/components/festive/DiscountRibbon';
import {
  ArrowRight,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  Star,
  CheckCircle,
  ExternalLink,
  Laptop,
} from 'lucide-react';

export const TiltedServiceCards: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-cyan-100/40 via-amber-100/30 to-teal-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0AB6C4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Scalable Growth Architecture
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Three High-Velocity Pillars to{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Scale Your Brand</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Whether starting from scratch or scaling past ₹1 Crore/month, our full-stack team builds and manages every touchpoint.
          </p>
        </div>

        {/* 3 Tilted Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 items-stretch perspective-1000">
          {/* Card 1 (Left): Start Selling Online (Tilted Left) */}
          <div className="relative group transition-all duration-500 transform lg:-rotate-2 lg:-translate-y-1 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02]">
            <div className="h-full bg-gradient-to-b from-white to-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card-soft group-hover:shadow-card-elevated group-hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
              {/* Dynamic Festival Discount Corner Ribbon */}
              <DiscountRibbon />

              <div>
                {/* Category Pill */}
                <span className="inline-block text-[11px] font-extrabold text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Marketplaces
                </span>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors">
                  Start Selling Online
                </h3>

                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Launch on Amazon, Flipkart & Meesho with expert-managed listings, cataloguing, brand registry, and day-one account setup.
                </p>

                {/* Mini UI Mockup: Marketplace Listing & Buy Box Card */}
                <div className="my-6 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-inner space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-slate-800">
                        Amazon India · Flipkart Assured
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">
                      Buy Box: 99.4%
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="w-7 h-7 text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-slate-900 truncate">
                        Premium Organic D2C Hero SKU
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-[11px] font-semibold text-slate-700">
                          4.8 (1,420+ reviews)
                        </span>
                      </div>
                      <div className="text-[11px] font-extrabold text-[#0AB6C4] mt-0.5">
                        ₹1,299 <span className="text-slate-400 font-normal line-through text-[10px]">₹1,999</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500 font-medium">
                    <span className="text-emerald-600 font-bold">✓ FBA In-Stock (Prime)</span>
                    <span>A+ Content Active</span>
                  </div>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>GTIN exemption & Trademark Brand Registry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>High-converting A+ Content & Brand Store</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Daily Buy Box defense & stock forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <Link
                  href="/services/marketplace-management"
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#0AB6C4] group-hover:text-cyan-600 transition-colors"
                >
                  <span>Explore Marketplace Management</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 (Center): Grow Your Sales (Straight & Raised) */}
          <div className="relative group transition-all duration-500 transform lg:-translate-y-5 hover:-translate-y-8 hover:scale-[1.03] z-20">
            <div className="h-full bg-gradient-to-b from-[#0B1220] via-[#101C31] to-[#0B1220] text-white rounded-3xl p-6 sm:p-8 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-900/30 group-hover:border-[#15D8E1] group-hover:shadow-cyan-glow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
              {/* Dynamic Festival Discount Corner Ribbon */}
              <DiscountRibbon />

              <div>
                {/* Popular Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-[11px] font-extrabold text-slate-950 bg-gradient-to-r from-[#22E7F0] to-[#0AB6C4] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular Growth Driver
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#15D8E1] transition-colors">
                  Grow Your Sales
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Meta & Google ads, marketplace PPC and viral campaigns, optimised daily for more paying customers and 4.8x+ average ROAS.
                </p>

                {/* Mini UI Mockup: Animated Bar Chart / ROAS Analytics */}
                <div className="my-6 p-4 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-inner space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#15D8E1]" /> Live ROAS & GMV Curve
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded font-bold">
                      +418% Lift
                    </span>
                  </div>

                  {/* SVG Bar Chart Visualization */}
                  <div className="pt-2">
                    <div className="flex items-end justify-between h-20 px-2 gap-2">
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-slate-700 rounded-t h-[25%]" />
                        <span className="text-[9px] text-slate-400">M1</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-slate-600 rounded-t h-[40%]" />
                        <span className="text-[9px] text-slate-400">M2</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-cyan-700 rounded-t h-[60%]" />
                        <span className="text-[9px] text-slate-400">M3</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-[#0AB6C4] rounded-t h-[80%]" />
                        <span className="text-[9px] text-slate-300 font-bold">M4</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-gradient-to-t from-[#0AB6C4] to-[#22E7F0] rounded-t h-[98%] shadow-cyan-glow" />
                        <span className="text-[9px] text-[#15D8E1] font-bold">M5</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-medium">
                    <span>Blended ROAS: <strong className="text-white">5.2x</strong></span>
                    <span>CAC Reduced: <strong className="text-emerald-400">-38%</strong></span>
                  </div>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>15-30 Fresh UGC & Reel Video Ad Hooks tested monthly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Meta CAPI Server-Side & GA4 Attribution tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Amazon & Flipkart PPC dayparting & keyword silos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  href="/services/e-commerce-marketing"
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#15D8E1] group-hover:text-white transition-colors"
                >
                  <span>Explore Paid Growth & Ads</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 (Right): Build Your Brand (Tilted Right) */}
          <div className="relative group transition-all duration-500 transform lg:rotate-2 lg:-translate-y-1 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02]">
            <div className="h-full bg-gradient-to-b from-white to-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card-soft group-hover:shadow-card-elevated group-hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
              {/* Dynamic Festival Discount Corner Ribbon */}
              <DiscountRibbon />

              <div>
                {/* Category Pill */}
                <span className="inline-block text-[11px] font-extrabold text-indigo-700 bg-indigo-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Tech & Identity
                </span>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors">
                  Build Your Brand
                </h3>

                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Websites, Shopify stores and brand identities engineered for 1.2s load speeds that turn casual visitors into loyal repeat customers.
                </p>

                {/* Mini UI Mockup: Browser Window Mockup */}
                <div className="my-6 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-inner space-y-2.5">
                  {/* Browser window chrome dots */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono bg-slate-100 px-2 py-0.5 rounded">
                      https://yourbrand.in
                    </div>
                    <Laptop className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  {/* Browser content miniature */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-2 bg-slate-300 rounded" />
                      <div className="w-12 h-2 bg-slate-200 rounded" />
                    </div>
                    <div className="w-full h-12 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-700">
                        ⚡ 1.2s Sub-second Checkout
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[9px] text-slate-500 font-semibold">
                        Razorpay + COD WhatsApp OTP
                      </span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.2 rounded">
                        99/100 Core Web Vitals
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Bespoke Shopify Plus & Headless Next.js Storefronts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Indian Payment Gateways (PhonePe, Cashfree, UPI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#15D8E1] flex-shrink-0" />
                    <span>Premium packaging die-lines & brand guidelines</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <Link
                  href="/services/shopify-development"
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#0AB6C4] group-hover:text-cyan-600 transition-colors"
                >
                  <span>Explore Web & Brand Development</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
