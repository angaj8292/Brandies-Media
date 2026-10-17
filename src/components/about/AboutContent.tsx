'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useConsultation } from '@/components/context/ConsultationContext';
import {
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronDown,
  Compass as CompassIcon,
  ShieldCheck,
  TrendingUp,
  Clock,
  Target,
  ShoppingBag,
  ExternalLink,
  Award,
  Layers,
  Zap,
} from 'lucide-react';

export const AboutContent: React.FC = () => {
  const { openConsultation } = useConsultation();

  // Compass state (0: N, 1: E, 2: S, 3: W)
  const [activeCompassIndex, setActiveCompassIndex] = useState(0);

  // FAQ accordion state (single open or multiple)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Timeline active milestone
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to latest 2026

  // Compass Pillars
  const compassPillars = [
    {
      direction: 'N',
      angle: 0,
      title: 'Mathematical Rigor',
      tagline: '000° NORTH · ALGORITHMIC RIGOR',
      color: '#15D8E1',
      bgTint: '#E8FAFB',
      glow: 'rgba(21, 216, 225, 0.45)',
      desc: 'We don’t rely on subjective opinions or gut feel. Every rupee of ad spend and every product listing keyword is guided by unit economics, real-time bid arbitration, and conversion analytics.',
      metric: '99.4% Attribution Accuracy',
      icon: <Target className="w-5 h-5 text-[#0AB6C4]" />,
    },
    {
      direction: 'E',
      angle: 90,
      title: 'Agile 48-Hour Execution',
      tagline: '090° EAST · SPRINT VELOCITY',
      color: '#FFE45C',
      bgTint: '#FFFCEB',
      glow: 'rgba(255, 228, 92, 0.55)',
      desc: 'In e-commerce, speed kills competition. We turn around ad creatives, catalog updates, sale event deals, and festive landing pages in hours, not weeks.',
      metric: '48h Creative Turnaround SLA',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
    },
    {
      direction: 'S',
      angle: 180,
      title: 'Net Profit Accountability',
      tagline: '180° SOUTH · BOTTOM-LINE IMPACT',
      color: '#3DDC84',
      bgTint: '#EEFBF3',
      glow: 'rgba(61, 220, 132, 0.45)',
      desc: 'Vanity revenue numbers mean nothing if return-to-origin (RTO) and ad costs wipe out your margins. We optimize exclusively for net bank balance contribution and contribution margin 3 (CM3).',
      metric: '₹50Cr+ Verified Client GMV',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      direction: 'W',
      angle: 270,
      title: 'Founder-First Integrity',
      tagline: '270° WEST · RADICAL TRANSPARENCY',
      color: '#C9A227',
      bgTint: '#FAF5E8',
      glow: 'rgba(201, 162, 39, 0.45)',
      desc: 'Zero hidden agency markups, zero proprietary locks. You own 100% of your ad accounts, pixel data, storefront source code, and brand creative assets from day one.',
      metric: '100% Client IP Ownership',
      icon: <ShieldCheck className="w-5 h-5 text-[#C9A227]" />,
    },
  ];

  // 9 Marketplace Tiles
  const marketplaceTiles = [
    { name: 'Amazon', symbol: 'a' },
    { name: 'Flipkart', symbol: 'fk' },
    { name: 'Myntra', symbol: 'm' },
    { name: 'Nykaa', symbol: 'ny' },
    { name: 'Meesho', symbol: 'ms' },
    { name: 'Blinkit', symbol: 'bl' },
    { name: 'Zepto', symbol: 'zp' },
    { name: 'Shopify', symbol: 'sh' },
    { name: 'Ajio', symbol: 'aj' },
  ];

  // Services / What We Do
  const services = [
    {
      id: 'marketplace',
      title: 'Marketplace Optimization',
      tag: 'SCALE CATEGORY RANK',
      description:
        'End-to-end catalog architecture, Amazon Buy Box defense, Flipkart Assured compliance, and algorithmic keyword bid management.',
      icon: <ShoppingBag className="w-5 h-5 text-[#0AB6C4]" />,
      stats: '18% Avg ACOS Target',
      tilt: 'rotate-[-1.2deg]',
    },
    {
      id: 'performance-ads',
      title: 'Performance Advertising',
      tag: 'PROFITABLE SCALE',
      description:
        'High-converting Meta UGC video funnels, Google Shopping Smart Bidding, and automated WhatsApp retargeting to slash COD RTO.',
      icon: <TrendingUp className="w-5 h-5 text-[#3DDC84]" />,
      stats: '4.2x Scaled Blended ROAS',
      tilt: 'rotate-[0.6deg]',
    },
    {
      id: 'web-engineering',
      title: 'Headless Web Engineering',
      tag: 'NEXT.JS & SHOPIFY PLUS',
      description:
        'Sub-second load times, custom checkout upsells, ERP inventory sync, and conversion rate optimization engineered for Indian shoppers.',
      icon: <Layers className="w-5 h-5 text-[#0AB6C4]" />,
      stats: '0.8s Mobile Page Load',
      tilt: 'rotate-[-0.4deg]',
    },
  ];

  // Timeline Milestones
  const timelineMilestones = [
    {
      year: '2019',
      title: 'The Studio is Born',
      badge: 'BOOTSTRAPPED ORIGIN',
      desc: 'Founded with a simple mission: help Indian manufacturers break free of distributor middlemen and sell direct-to-consumer on Amazon India.',
    },
    {
      year: '2021',
      title: 'Omnichannel Performance Scale',
      badge: 'D2C EXPANSION',
      desc: 'Expanded into full-funnel Meta performance marketing and custom Shopify development as online direct-to-consumer shopping exploded across Tier 2 & 3 India.',
    },
    {
      year: '2023',
      title: '250+ Brands Scaled & WhatsApp Automation',
      badge: 'RTO INNOVATION',
      desc: 'Crossed ₹50 Crore in cumulative client GMV. Pioneered proprietary WhatsApp automated COD verification to slash client RTO rates by over 30%.',
    },
    {
      year: '2026',
      title: '500+ Brands & AI Diagnostics',
      badge: 'ENTERPRISE CO-PILOT',
      desc: 'Now managing ₹35Cr+ ad spend with over 500 scaled brands, launching AI-assisted marketplace auditing and ultra-fast headless Next.js storefronts.',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'Who owns our ad accounts, creative assets, and storefront code?',
      a: 'You own 100% of everything from day one. All ad accounts (Meta, Google, Amazon Ads) are created directly under your business entities. All source code, Figma creative designs, and video UGC assets remain your sole proprietary intellectual property.',
    },
    {
      q: 'Are there any long-term lock-in contracts?',
      a: 'No. We operate on month-to-month performance retainers with a simple 30-day notice period. We believe in earning our seat at your leadership table every 30 days based on net profit delivered, not legal lock-ins.',
    },
    {
      q: 'How quickly can Brandies Media onboard and launch our campaigns?',
      a: 'Our onboarding process takes 48 hours. Within 2 business days of kickoff, our technical team audits your catalog, establishes pixel conversion tracking, and delivers the initial 30-day growth sprint roadmap.',
    },
    {
      q: 'Do you work with early-stage brands or only established sellers?',
      a: 'We work with ambitious founders at two distinct stages: fast-growing emerging D2C brands ready to cross ₹10L/mo, and enterprise omnichannel manufacturers scaling past ₹1Cr+/month across marketplaces.',
    },
    {
      q: 'How does your pricing and retainer model work?',
      a: 'We offer fixed monthly tier retainers paired with transparent, profit-aligned performance incentives. There are zero hidden agency markups, zero software surcharges, and zero billing surprises.',
    },
  ];

  const activePillar = compassPillars[activeCompassIndex];

  return (
    <div className="w-full bg-[#F6F3EE] text-[#0B1220] selection:bg-[#FFE45C] selection:text-[#0B1220] font-sans">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Google Pill */}
          <div className="inline-flex items-center gap-2 h-[36px] px-4 rounded-full bg-white border-[1.5px] border-[#0B1220] shadow-xs mb-8">
            {/* Google G icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.14 0 9.99 0 12s.45 3.86 1.24 5.42l4.04-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <div className="flex items-center gap-0.5 text-[#C9A227]">
              {'★'.repeat(5)}
            </div>
            <span className="text-xs font-heading font-black text-[#0B1220]">
              4.9/5
            </span>
            <span className="text-xs text-[#5B6B7F] font-normal">
              (520+ Reviews)
            </span>
          </div>

          {/* H1: ~72px desktop / 44px mobile, line-height 1.05 */}
          <h1 className="font-heading font-extrabold text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-[#0B1220] max-w-[760px] mx-auto">
            We Don&apos;t Just Run Campaigns.{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">We Make Brands.</span>
              {/* Thick 10px rounded mint-green marker underline placed behind text, slightly below baseline */}
              <span
                className="absolute left-0 -bottom-1 w-full h-[10px] bg-[#A8EDC4] rounded-full -z-0 translate-y-1.5"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Paragraph: max-width 560px, 18px, line-height 1.7 */}
          <p className="max-w-[560px] mx-auto text-base sm:text-[18px] leading-[1.7] text-[#5B6B7F] mt-7">
            Born in <strong className="font-black text-[#0B1220]">2019</strong>{' '}
            out of a frustration with traditional agencies that only cared about
            vanity impressions, Brandies Media was built to act as the dedicated,
            profit-driven co-pilot for ambitious consumer brands across India.
          </p>

          {/* CTA Buttons: Green Pill 52px high + Phone Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            {/* Green button: 52px high, #3DDC84, 2px dark border, dark bold text, pale-yellow outer ring */}
            <button
              onClick={() => openConsultation()}
              className="h-[52px] px-7 rounded-full bg-[#3DDC84] border-2 border-[#0B1220] text-[#0B1220] font-heading font-black text-sm sm:text-base inline-flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              style={{
                boxShadow: '0 0 0 4px #FFF1B8',
              }}
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Phone button: same shape but white background */}
            <a
              href="tel:+918292769366"
              className="h-[52px] px-6 rounded-full bg-white border-2 border-[#0B1220] text-[#0B1220] font-heading font-black text-sm sm:text-base inline-flex items-center gap-2.5 transition-all duration-200 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0B1220]" />
              <span>+91 8292769366</span>
            </a>
          </div>

          {/* Stats Card: Overlapping next section slightly */}
          <div className="mt-14 sm:mt-20 translate-y-6 sm:translate-y-12 relative z-20">
            <div className="bg-white border-2 border-[#0B1220] rounded-[24px] shadow-[8px_8px_0px_#0B1220] p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Stat 1 */}
                <div className="text-center px-3 pt-2 md:pt-0">
                  <div className="font-heading font-black text-3xl sm:text-[40px] text-[#0B1220] leading-none mb-1.5">
                    500+
                  </div>
                  <div className="text-[13px] text-[#5B6B7F] font-medium">
                    Brands Scaled
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center px-3 pt-4 md:pt-0">
                  <div className="font-heading font-black text-3xl sm:text-[40px] text-[#0B1220] leading-none mb-1.5">
                    ₹50Cr+
                  </div>
                  <div className="text-[13px] text-[#5B6B7F] font-medium">
                    Verified Client GMV
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center px-3 pt-4 md:pt-0">
                  <div className="font-heading font-black text-3xl sm:text-[40px] text-[#0B1220] leading-none mb-1.5">
                    94%
                  </div>
                  <div className="text-[13px] text-[#5B6B7F] font-medium">
                    Monthly Retention
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center px-3 pt-4 md:pt-0">
                  <div className="font-heading font-black text-3xl sm:text-[40px] text-[#0B1220] leading-none mb-1.5">
                    48h
                  </div>
                  <div className="text-[13px] text-[#5B6B7F] font-medium">
                    Creative Sprint SLA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TRUST STRIP                                               */}
      {/* ============================================================ */}
      <section className="w-full bg-white border-y border-[#0B1220] py-[56px] px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[#5B6B7F] mb-1">
              Accredited Agency
            </span>
            <div className="font-heading font-black text-lg text-[#0B1220]">
              Meta &amp; Google Certified Partner
            </div>
            <p className="text-xs text-[#5B6B7F] mt-0.5">
              Direct technical partner escalation access
            </p>
          </div>

          {/* Column 2: Gold Laurel Wreath SVG around badge text */}
          <div className="flex items-center justify-center gap-3">
            {/* Left Laurel Branch */}
            <svg
              className="w-8 h-12 text-[#C9A227] flex-shrink-0"
              viewBox="0 0 32 48"
              fill="currentColor"
            >
              <path d="M28 4C24 9 18 15 11 23C7 28 5 34 6 42C9 38 14 34 20 28C24 24 27 18 28 4Z" opacity="0.85" />
              <path d="M20 8C16 13 11 18 6 25C9 23 13 20 17 15C19 12 20 10 20 8Z" />
              <path d="M24 16C20 21 15 26 10 32C13 30 17 27 21 22C23 19 24 17 24 16Z" />
              <circle cx="27" cy="6" r="2" />
              <circle cx="21" cy="18" r="2" />
              <circle cx="16" cy="30" r="2" />
            </svg>

            {/* Center Badge Text */}
            <div className="text-center px-1">
              <span className="text-[10px] font-mono font-black tracking-widest text-[#C9A227] uppercase block">
                NATIONAL RECOGNITION
              </span>
              <div className="font-heading font-black text-base sm:text-lg text-[#0B1220] tracking-tight">
                TOP RATED E-COMMERCE AGENCY 2026
              </div>
              <span className="text-[11px] text-[#5B6B7F] font-medium block">
                Recognized for Marketplace Excellence
              </span>
            </div>

            {/* Right Laurel Branch (Mirrored) */}
            <svg
              className="w-8 h-12 text-[#C9A227] flex-shrink-0 transform scale-x-[-1]"
              viewBox="0 0 32 48"
              fill="currentColor"
            >
              <path d="M28 4C24 9 18 15 11 23C7 28 5 34 6 42C9 38 14 34 20 28C24 24 27 18 28 4Z" opacity="0.85" />
              <path d="M20 8C16 13 11 18 6 25C9 23 13 20 17 15C19 12 20 10 20 8Z" />
              <path d="M24 16C20 21 15 26 10 32C13 30 17 27 21 22C23 19 24 17 24 16Z" />
              <circle cx="27" cy="6" r="2" />
              <circle cx="21" cy="18" r="2" />
              <circle cx="16" cy="30" r="2" />
            </svg>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[#5B6B7F] mb-1">
              Transparent Ownership
            </span>
            <div className="font-heading font-black text-lg text-[#0B1220]">
              100% Client IP Ownership
            </div>
            <p className="text-xs text-[#5B6B7F] mt-0.5">
              Zero lock-in contracts · Month-to-month SLA
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MARKETPLACE TILES                                         */}
      {/* 9 tiles, 42x42px, 12px radius, 1.5px dark border, 16px gap  */}
      {/* ============================================================ */}
      <section className="py-14 px-4 sm:px-6 bg-[#F6F3EE] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-[#5B6B7F] mb-5">
            Active Channel Specialization &amp; Integration
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {marketplaceTiles.map((tile) => (
              <div
                key={tile.name}
                className="group w-[42px] h-[42px] rounded-[12px] border-[1.5px] border-[#0B1220] bg-white flex items-center justify-center font-heading font-black text-xs text-[#0B1220] shadow-xs hover:-translate-y-[3px] transition-transform duration-200 cursor-default select-none relative"
                title={tile.name}
              >
                <span>{tile.symbol}</span>
                {/* Tooltip on hover */}
                <span className="absolute -bottom-8 bg-[#0B1220] text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  {tile.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. COMPASS SECTION (Core Principles & Operating Navigation)  */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F3EE] border-t border-[#0B1220]/15">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE45C] border border-[#0B1220] text-xs font-heading font-black text-[#0B1220] uppercase tracking-wider mb-3">
              <CompassIcon className="w-3.5 h-3.5" /> Our Compass
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1220] tracking-tight">
              The Principles That Guide Every Decision
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7F] mt-2">
              Click the four cardinal directions to inspect our operational philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive 320px Compass Ring */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[320px] h-[320px] rounded-full bg-white border-2 border-[#0B1220] shadow-[6px_6px_0px_#0B1220] flex items-center justify-center select-none">
                {/* Outer ring tick marks (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none text-slate-300"
                  viewBox="0 0 320 320"
                >
                  <circle cx="160" cy="160" r="148" fill="none" stroke="#EDEFF2" strokeWidth="12" />
                  <circle cx="160" cy="160" r="138" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 4" />
                  <circle cx="160" cy="160" r="95" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  {/* Cardinal tick lines */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angle = (i * 10 * Math.PI) / 180;
                    const isMajor = i % 9 === 0;
                    const r1 = 142;
                    const r2 = isMajor ? 128 : 136;
                    const x1 = 160 + Math.cos(angle) * r1;
                    const y1 = 160 + Math.sin(angle) * r1;
                    const x2 = 160 + Math.cos(angle) * r2;
                    const y2 = 160 + Math.sin(angle) * r2;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isMajor ? '#0B1220' : '#94A3B8'}
                        strokeWidth={isMajor ? 2 : 1}
                      />
                    );
                  })}
                </svg>

                {/* Rotating Two-Tone Needle */}
                <div
                  className="absolute w-8 h-48 transition-transform duration-700 ease-out pointer-events-none z-10"
                  style={{
                    transform: `rotate(${activePillar.angle}deg)`,
                  }}
                >
                  {/* Needle Top (Cyan #15D8E1) */}
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[96px] border-b-[#15D8E1] mx-auto filter drop-shadow-sm" />
                  {/* Needle Bottom (Deep Teal #0C4A60) */}
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[96px] border-t-[#0C4A60] mx-auto filter drop-shadow-sm" />
                </div>

                {/* Center Hub: Dark Teal with White letter B */}
                <div className="absolute w-12 h-12 rounded-full bg-[#0B1220] border-2 border-white shadow-md flex items-center justify-center font-heading font-black text-white text-sm z-20">
                  B
                </div>

                {/* 4 Node Tiles (44px, 12px radius, white, 1.5px dark border) */}
                {/* Node N (North: Top) */}
                <button
                  onClick={() => setActiveCompassIndex(0)}
                  className={`absolute top-2 left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-[12px] border-[1.5px] border-[#0B1220] font-heading font-black text-sm flex items-center justify-center transition-all duration-300 z-20 ${
                    activeCompassIndex === 0
                      ? 'scale-125 bg-[#FFE45C] text-[#0B1220] shadow-[0_0_14px_rgba(255,228,92,0.8)]'
                      : 'bg-white text-[#0B1220] hover:bg-slate-50'
                  }`}
                  aria-label="Compass North: Mathematical Rigor"
                >
                  N
                </button>

                {/* Node E (East: Right) */}
                <button
                  onClick={() => setActiveCompassIndex(1)}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-[12px] border-[1.5px] border-[#0B1220] font-heading font-black text-sm flex items-center justify-center transition-all duration-300 z-20 ${
                    activeCompassIndex === 1
                      ? 'scale-125 bg-[#FFE45C] text-[#0B1220] shadow-[0_0_14px_rgba(255,228,92,0.8)]'
                      : 'bg-white text-[#0B1220] hover:bg-slate-50'
                  }`}
                  aria-label="Compass East: Agile 48-Hour Execution"
                >
                  E
                </button>

                {/* Node S (South: Bottom) */}
                <button
                  onClick={() => setActiveCompassIndex(2)}
                  className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-[12px] border-[1.5px] border-[#0B1220] font-heading font-black text-sm flex items-center justify-center transition-all duration-300 z-20 ${
                    activeCompassIndex === 2
                      ? 'scale-125 bg-[#FFE45C] text-[#0B1220] shadow-[0_0_14px_rgba(255,228,92,0.8)]'
                      : 'bg-white text-[#0B1220] hover:bg-slate-50'
                  }`}
                  aria-label="Compass South: Net Profit Accountability"
                >
                  S
                </button>

                {/* Node W (West: Left) */}
                <button
                  onClick={() => setActiveCompassIndex(3)}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-[12px] border-[1.5px] border-[#0B1220] font-heading font-black text-sm flex items-center justify-center transition-all duration-300 z-20 ${
                    activeCompassIndex === 3
                      ? 'scale-125 bg-[#FFE45C] text-[#0B1220] shadow-[0_0_14px_rgba(255,228,92,0.8)]'
                      : 'bg-white text-[#0B1220] hover:bg-slate-50'
                  }`}
                  aria-label="Compass West: Founder-First Integrity"
                >
                  W
                </button>
              </div>
            </div>

            {/* Right: Active Principle Detail Card */}
            <div className="lg:col-span-6">
              <div
                className="bg-white border-2 border-[#0B1220] rounded-[24px] shadow-[8px_8px_0px_#0B1220] p-6 sm:p-8 relative overflow-hidden transition-all duration-300"
                style={{
                  borderLeftColor: activePillar.color,
                  borderLeftWidth: '6px',
                }}
              >
                {/* Bearing chip */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-[#0B1220]/20"
                  style={{
                    backgroundColor: activePillar.bgTint,
                    color: '#0B1220',
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>{activePillar.tagline}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    {activePillar.icon}
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1220]">
                    {activePillar.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#5B6B7F] leading-relaxed">
                  {activePillar.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B7F]">
                      Key Performance Metric
                    </span>
                    <div className="font-mono font-bold text-sm text-[#0B1220]">
                      {activePillar.metric}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {compassPillars.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCompassIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeCompassIndex === i
                            ? 'bg-[#0B1220] w-6'
                            : 'bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Switch to node ${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SERVICE CARDS ("What We Do" - Alternate section #ECE8E0)  */}
      {/* Ticket styling, cut circles, gradient top bar, barcodes, tilts*/}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 bg-[#ECE8E0] border-t border-[#0B1220]/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0AB6C4] bg-white px-3 py-1 rounded-full border border-[#0B1220] inline-block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1220] tracking-tight">
              Full-Stack E-Commerce Growth Engines
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7F] mt-2">
              Three tightly integrated pillars built to deliver profitable scaling without agency fragmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className={`bg-white rounded-[20px] border-2 border-[#0B1220] shadow-[6px_6px_0px_#0B1220] p-6 relative transition-all duration-300 hover:rotate-0 hover:-translate-y-[6px] hover:shadow-[10px_10px_0px_#0B1220] flex flex-col justify-between ${svc.tilt}`}
              >
                {/* 4px top bar gradient (cyan to green) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#15D8E1] to-[#3DDC84] rounded-t-[18px]" />

                {/* Top Row: Icon + Barcode */}
                <div>
                  <div className="flex items-center justify-between pt-1">
                    {/* 44px Icon tile with light cyan fill */}
                    <div className="w-[44px] h-[44px] rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                      {svc.icon}
                    </div>

                    {/* Small Barcode at top-right */}
                    <div className="flex items-center gap-[2px] opacity-60" aria-hidden="true">
                      <div className="w-[1.5px] h-6 bg-[#0B1220]" />
                      <div className="w-[3px] h-6 bg-[#0B1220]" />
                      <div className="w-[1px] h-6 bg-[#0B1220]" />
                      <div className="w-[2px] h-6 bg-[#0B1220]" />
                      <div className="w-[1px] h-6 bg-[#0B1220]" />
                      <div className="w-[3.5px] h-6 bg-[#0B1220]" />
                      <div className="w-[1.5px] h-6 bg-[#0B1220]" />
                      <div className="w-[2px] h-6 bg-[#0B1220]" />
                      <div className="w-[1px] h-6 bg-[#0B1220]" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0AB6C4] bg-cyan-50 px-2 py-0.5 rounded mt-4 inline-block">
                    {svc.tag}
                  </span>

                  <h3 className="font-heading font-black text-xl text-[#0B1220] mt-2 mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Ticket Dashed Divider with 16px Cut Circles */}
                <div className="relative my-5">
                  <div className="border-t-2 border-dashed border-slate-300 w-full" />
                  {/* Left Cut Circle (same color as section background #ECE8E0) */}
                  <div className="absolute -left-8 -top-2 w-4 h-4 rounded-full bg-[#ECE8E0] border-r-2 border-[#0B1220]" />
                  {/* Right Cut Circle (same color as section background #ECE8E0) */}
                  <div className="absolute -right-8 -top-2 w-4 h-4 rounded-full bg-[#ECE8E0] border-l-2 border-[#0B1220]" />
                </div>

                {/* Bottom Ticket Stub */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono font-bold text-[#0B1220]">
                    {svc.stats}
                  </span>
                  <Link
                    href={`/services/${svc.id}`}
                    className="text-xs font-heading font-black text-[#0B1220] hover:text-[#0AB6C4] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. JOURNEY TIMELINE                                          */}
      {/* Year ~130px font-black with 4px gradient underline           */}
      {/* Neo-brutalist milestone card with yellow chip                */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 bg-[#F6F3EE] border-t border-[#0B1220]/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B1220] bg-[#FFE45C] px-3.5 py-1 rounded-full border border-[#0B1220] inline-block mb-3">
              TIMELINE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1220] tracking-tight">
              Our Journey Since {siteConfig.stats.sinceYear}
            </h2>
          </div>

          <div className="space-y-16">
            {timelineMilestones.map((item, index) => {
              const isActive = index === activeMilestone;

              return (
                <div
                  key={item.year}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start"
                  onClick={() => setActiveMilestone(index)}
                >
                  {/* Left Column: Big Year Number ~130px + Gradient Underline */}
                  <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right pr-2">
                    <div className="font-heading font-black text-[64px] sm:text-[96px] md:text-[120px] lg:text-[130px] leading-none text-[#0B1220] tracking-tight select-none">
                      {item.year}
                    </div>
                    {/* 4px gradient underline (green #3DDC84 to yellow #FFE45C) */}
                    <div className="h-1 w-28 sm:w-36 md:w-full bg-gradient-to-r from-[#3DDC84] to-[#FFE45C] rounded-full mt-1" />
                  </div>

                  {/* Middle Column: Vertical Timeline Track with Dot */}
                  <div className="hidden md:flex md:col-span-1 justify-center relative self-stretch">
                    {/* Vertical connecting line */}
                    <div className="w-[2px] bg-slate-300 h-full absolute top-6" />
                    {/* Dot */}
                    <div
                      className={`relative z-10 top-8 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-[20px] h-[20px] bg-[#0B1220] border-4 border-white shadow-[0_0_0_6px_rgba(61,220,132,0.4)]'
                          : 'w-[14px] h-[14px] bg-white border-2 border-slate-400'
                      }`}
                    />
                  </div>

                  {/* Right Column: Neo-Brutalist Milestone Card */}
                  <div className="md:col-span-7">
                    <div
                      className={`bg-white border-2 border-[#0B1220] rounded-[24px] p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'shadow-[8px_8px_0px_#0B1220] scale-[1.01]'
                          : 'shadow-[4px_4px_0px_#0B1220] hover:shadow-[6px_6px_0px_#0B1220]'
                      }`}
                    >
                      {/* Yellow chip at top-left */}
                      <span className="inline-block bg-[#FFE45C] text-[#0B1220] font-heading font-black text-xs px-3 py-1 rounded-full border border-[#0B1220] uppercase tracking-wider mb-3">
                        {item.badge}
                      </span>

                      {/* Title: 28px, weight 800 */}
                      <h3 className="font-heading font-extrabold text-2xl sm:text-[28px] text-[#0B1220] leading-tight">
                        {item.title}
                      </h3>

                      {/* Text: 16px */}
                      <p className="text-base text-[#5B6B7F] leading-relaxed mt-2.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FOUNDER LETTER                                            */}
      {/* Width ~650px, ruled lines 30px #E8E4DC, red margin #F2B8B8,  */}
      {/* green tape top center, yellow marker highlight, muted red stamp*/}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-6 bg-[#F6F3EE] border-t border-[#0B1220]/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0AB6C4] bg-white px-3 py-1 rounded-full border border-[#0B1220] inline-block mb-2">
              NOTE FROM LEADERSHIP
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0B1220]">
              A Letter to Ambitious Brand Founders
            </h2>
          </div>

          {/* Letter Card: width ~650px, ruled lines, red margin, green tape, stamp */}
          <div className="max-w-[650px] w-full mx-auto relative rotate-[-0.6deg]">
            {/* Green Translucent Tape (120x28px, rotated 1deg, top center) */}
            <div
              className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#B8EBC8]/90 rotate-1 shadow-sm backdrop-blur-[1px] border border-[#A2D9B4] z-20 pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="bg-white border-2 border-[#0B1220] rounded-[20px] shadow-[8px_8px_0px_#0B1220] relative overflow-hidden py-10 px-6 sm:px-12 pl-14 sm:pl-16"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(transparent, transparent 29px, #E8E4DC 29px, #E8E4DC 30px)',
                lineHeight: '30px',
              }}
            >
              {/* Red Vertical Margin Line (#F2B8B8) 36px from the left */}
              <div
                className="absolute left-[36px] top-0 bottom-0 w-[2px] bg-[#F2B8B8]"
                aria-hidden="true"
              />

              <div className="relative z-10 text-[#0B1220] text-sm sm:text-base space-y-5 leading-[30px]">
                <p className="font-bold text-slate-800">
                  Dear Founder,
                </p>

                <p>
                  When we launched Brandies Media in 2019, Indian e-commerce was entering its golden decade. But for brand owners, it often felt like a battlefield of fragmented agencies: ad buyers who didn&apos;t know inventory accounting, web agencies that ignored checkout drop-off, and marketplace managers who ran discounts that eroded gross margins.
                </p>

                <p>
                  We built Brandies Media to be the exact growth partner we wished we had as operators.{' '}
                  {/* Yellow marker highlight (#FFE45C at 80% opacity) */}
                  <mark className="bg-[#FFE45C]/80 text-[#0B1220] font-bold px-1.5 py-0.5 rounded">
                    We only succeed when your net bank balance grows.
                  </mark>{' '}
                  No vanity metrics. No blame games between teams. Just obsessive execution.
                </p>

                <p>
                  Whether you are scaling your first marketplace SKU or expanding to your 50th crore, our team treats your balance sheet with the same vigilance as our own.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                  <div>
                    <div className="font-heading font-black text-lg text-[#0B1220]">
                      Angaj Kumar
                    </div>
                    <div className="text-xs text-[#5B6B7F] font-mono leading-tight">
                      Founder &amp; Principal Growth Architect
                      <br />
                      Brandies Media
                    </div>
                  </div>

                  {/* Stamp: bottom-right, rotated -4deg, 2px border, muted red #D98B8B, uppercase letter-spacing 0.15em */}
                  <div className="inline-block border-2 border-[#D98B8B] text-[#D98B8B] font-mono font-black text-[10px] sm:text-[11px] px-3 py-1.5 rounded rotate-[-4deg] tracking-[0.15em] uppercase select-none">
                    VERIFIED FOUNDER COMMITMENT · 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FAQ SECTION (Alternate section #ECE8E0)                   */}
      {/* Rows 64px high, white, 2px border, 16px radius, 4px shadow,  */}
      {/* yellow 30px chevron circle rotating 180deg                   */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 bg-[#ECE8E0] border-t border-[#0B1220]/15">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B1220] bg-white px-3 py-1 rounded-full border border-[#0B1220] inline-block mb-3">
              COMMON QUESTIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1220] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5B6B7F] mt-2">
              Everything you need to know about our partnership structure, ownership, and SLAs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#0B1220] rounded-[16px] shadow-[4px_4px_0px_#0B1220] overflow-hidden transition-all duration-300"
                >
                  {/* Row Header: 64px high */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full min-h-[64px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors"
                  >
                    <span className="font-heading font-black text-base sm:text-lg text-[#0B1220] pr-2">
                      {faq.q}
                    </span>

                    {/* Chevron: 30px circle, yellow #FFE45C, 1.5px dark border, rotates 180deg */}
                    <div
                      className={`w-[30px] h-[30px] rounded-full bg-[#FFE45C] border-[1.5px] border-[#0B1220] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#0B1220] stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Accordion Expandable Answer */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#5B6B7F] leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#5B6B7F] mb-4">
              Have a specific question about your brand&apos;s unit economics?
            </p>
            <button
              onClick={() => openConsultation()}
              className="h-[48px] px-6 rounded-full bg-[#3DDC84] border-2 border-[#0B1220] text-[#0B1220] font-heading font-black text-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-[3px_3px_0px_#0B1220]"
            >
              <span>Speak Directly With Angaj Kumar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
