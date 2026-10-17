'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useFestive } from '@/context/FestiveContext';
import { FestivalOfferPill } from '@/components/festive/FestivalOfferPill';
import { DiscountRibbon } from '@/components/festive/DiscountRibbon';
import {
  Sparkles,
  Calendar,
  Tag,
  ShieldCheck,
  ArrowRight,
  Home,
  CheckCircle2,
  Clock,
  Layers,
} from 'lucide-react';
import {
  getFestivalResolvedDates,
  resolveActiveFestivalId,
  getISTYear,
} from '@/config/festivalDates';

export default function FestivePreviewPage() {
  const {
    activeFestival,
    allFestivals,
    currentOverride,
    setOverride,
    currentISTDate,
    isUserDisabled,
    toggleFestive,
  } = useFestive();

  const [selectedYear, setSelectedYear] = useState<number>(() => {
    return currentISTDate ? parseInt(currentISTDate.slice(0, 4), 10) : 2026;
  });

  const activeTodayId = currentISTDate ? resolveActiveFestivalId(currentISTDate) : null;

  return (
    <div className="w-full min-h-screen py-12 sm:py-16 bg-[#FAFCFF] text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> Admin &amp; Dev Theme Studio
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-950">
              Automatic Festival Theme Engine Preview
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 flex flex-wrap items-center gap-2">
              <span>Today&apos;s Indian Standard Time (IST):</span>
              <strong className="font-mono text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {currentISTDate || 'Calculating...'}
              </strong>
              <span>•</span>
              <span>
                Active Today:{' '}
                {activeTodayId ? (
                  <span className="font-bold text-emerald-600 uppercase font-mono">
                    ● {activeTodayId}
                  </span>
                ) : (
                  <span className="font-medium text-slate-500">None (Default Corporate)</span>
                )}
              </span>
            </p>
          </div>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-heading font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>View Live Site</span>
          </Link>
        </div>

        {/* Control Box: Dropdown Selector & Visitor Toggle */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-soft mb-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Theme Selector Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Force Preview Theme Dropdown:
              </label>
              <select
                value={currentOverride || 'auto'}
                onChange={(e) => setOverride(e.target.value === 'auto' ? null : e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-cyan-400 bg-white text-sm font-heading font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 shadow-xs"
              >
                <option value="auto">⚡ Auto (Date-Driven via IST Calendar)</option>
                <option value="off">🚫 OFF (Standard Corporate Theme)</option>
                <optgroup label="Preview Festival Themes">
                  {allFestivals.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name} (Priority {f.priority} · {f.discountPercent}% OFF)
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Visitor Preference Toggle State */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Visitor ON/OFF Toggle State:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleFestive}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                    !isUserDisabled
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  Visitor Mode: {!isUserDisabled ? 'ENABLED' : 'DISABLED'}
                </button>
                <span className="text-xs text-slate-500">
                  {!isUserDisabled ? 'Decorations active' : 'Visitor opted out via toggle'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Festival Buttons */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              1-Click Instant Force Preview:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setOverride(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentOverride === 'auto'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Auto (IST)
              </button>
              <button
                onClick={() => setOverride('off')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentOverride === 'off'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Force OFF
              </button>
              {allFestivals.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setOverride(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeFestival?.id === f.id
                      ? 'bg-[#15D8E1] text-slate-950 shadow-sm scale-105 font-black'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Festival Spotlight Card */}
        {activeFestival ? (
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 border-2 shadow-xl space-y-6 mb-10 transition-all"
            style={{ borderColor: activeFestival.colors.primary }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0AB6C4] bg-cyan-50 px-2.5 py-0.5 rounded-full">
                  CURRENTLY ACTIVE FESTIVAL THEME
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-950 mt-1">
                  {activeFestival.name}
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Effective Window: {activeFestival.startDate} – {activeFestival.endDate} (Priority: {activeFestival.priority})
                </p>
              </div>

              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Palette:</span>
                <div
                  className="w-7 h-7 rounded-full shadow-sm"
                  style={{ backgroundColor: activeFestival.colors.primary }}
                  title="Primary Color"
                />
                <div
                  className="w-7 h-7 rounded-full shadow-sm"
                  style={{ backgroundColor: activeFestival.colors.accent }}
                  title="Accent Color"
                />
              </div>
            </div>

            {/* Greeting & Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Greeting Message
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {activeFestival.greeting}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Offer Text &amp; Coupon
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    {activeFestival.couponCode} ({activeFestival.discountPercent}% OFF)
                  </span>
                  <span className="text-xs text-slate-500">
                    {activeFestival.offerText}
                  </span>
                </div>
              </div>
            </div>

            {/* Active Decorations List */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Active Decor Modules ({activeFestival.decorations.length}):
              </span>
              <div className="flex flex-wrap gap-2">
                {activeFestival.decorations.map((d) => (
                  <span
                    key={d}
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Visual Component Previews */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Component Previews:
              </span>

              <div className="p-6 bg-[#FFF8F0] rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">
                    Hero Offer Pill:
                  </span>
                  <FestivalOfferPill />
                </div>

                <div className="relative w-48 h-28 bg-white rounded-xl border border-slate-200 overflow-hidden p-3 shadow-xs">
                  <span className="text-[10px] text-slate-400 block">Service Card</span>
                  <DiscountRibbon />
                  <div className="font-bold text-xs text-slate-800 mt-6">Sample SKU Card</div>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15D8E1] text-slate-950 font-heading font-black text-xs hover:bg-[#0AB6C4] transition-colors"
              >
                <span>See Full Homepage in {activeFestival.name} Mode</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-3 mb-10">
            <div className="text-3xl">🏢</div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Standard Corporate Mode Active (No Festival)
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No festival dates currently match today&apos;s date, or mode is set to &ldquo;off&rdquo;. Select a festival above to preview!
            </p>
          </div>
        )}

        {/* Resolved Festival Dates Table for 2026 - 2030 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-soft space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h3 className="font-heading font-black text-xl text-slate-950 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0AB6C4]" /> Resolved Festival Windows (2026 – 2030)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Shows exact core festival dates alongside lead and tail active display windows.
              </p>
            </div>

            {/* Year Switcher Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
              {[2026, 2027, 2028, 2029, 2030].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1 rounded-xl text-xs font-heading font-bold transition-all ${
                    selectedYear === yr
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-3">Festival</th>
                  <th className="py-3 px-3">Priority</th>
                  <th className="py-3 px-3">Core Dates</th>
                  <th className="py-3 px-3">Lead / Tail</th>
                  <th className="py-3 px-3">Effective Active Window</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {allFestivals.map((f) => {
                  const resolved = getFestivalResolvedDates(f.id, selectedYear);
                  const isCurrentActive = activeTodayId === f.id;

                  return (
                    <tr
                      key={f.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isCurrentActive ? 'bg-emerald-50/40 font-medium' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3">
                        <div className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: f.colors.primary }}
                          />
                          <span>{f.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">ID: {f.id}</span>
                      </td>

                      <td className="py-3.5 px-3">
                        <span className="inline-block px-2 py-0.5 rounded-md font-mono text-xs font-bold bg-slate-100 text-slate-800">
                          {f.priority}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 font-mono text-slate-700">
                        {resolved ? (
                          <span>
                            {resolved.coreStart}{' '}
                            {resolved.coreStart !== resolved.coreEnd && `→ ${resolved.coreEnd}`}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">No entry for {selectedYear}</span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 text-slate-600">
                        {resolved ? (
                          <span>
                            +{resolved.leadDays}d lead · +{resolved.tailDays}d tail
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>

                      <td className="py-3.5 px-3 font-mono font-bold text-slate-900">
                        {resolved ? (
                          <span className="bg-cyan-50 text-cyan-900 border border-cyan-200 px-2 py-0.5 rounded">
                            {resolved.activeStart} → {resolved.activeEnd}
                          </span>
                        ) : (
                          <span className="text-slate-400">N/A</span>
                        )}
                      </td>

                      <td className="py-3.5 px-3">
                        {isCurrentActive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            ACTIVE TODAY
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400">Inactive</span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 text-right">
                        <button
                          onClick={() => setOverride(f.id)}
                          className="px-3 py-1 rounded-lg text-[11px] font-heading font-bold bg-slate-100 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-700 transition-colors"
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
