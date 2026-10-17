'use client';

import React from 'react';
import { GrowthCoachData } from '@/data/growthExpress';
import { Layers, BarChart3, UserCheck, Zap } from 'lucide-react';

interface CoachProps {
  coach: GrowthCoachData;
  wheelRotation?: number;
  className?: string;
}

export const Coach: React.FC<CoachProps> = ({
  coach,
  wheelRotation = 0,
  className = '',
}) => {
  const iconMap = {
    Layers: <Layers className="w-5 h-5 text-white" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-white" />,
    UserCheck: <UserCheck className="w-5 h-5 text-white" />,
    Zap: <Zap className="w-5 h-5 text-white" />,
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center flex-shrink-0 select-none w-[280px] sm:w-[340px] md:w-[360px] ${className}`}
    >
      {/* Front Coupling Link (Bar connecting to preceding coach/locomotive on the left) */}
      <div
        className="absolute top-[220px] -left-7 w-7 h-3.5 bg-slate-700 rounded-sm flex items-center justify-around z-0"
        style={{
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-slate-400" />
        <div className="w-2.5 h-1.5 bg-slate-900 rounded-xs" />
        <div className="w-2 h-2 rounded-full bg-slate-400" />
      </div>

      {/* Main Coach Card Container */}
      <div
        className="relative w-full bg-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden z-10"
        style={{
          height: '245px',
          border: `2px solid ${coach.theme.primary}`,
          boxShadow: `0 14px 34px -10px rgba(0, 0, 0, 0.08), 0 0 20px -8px ${coach.theme.primary}35`,
        }}
      >
        {/* Top colored accent tab sticking out */}
        <div
          className="absolute top-0 left-8 right-8 h-2 rounded-b-md"
          style={{ backgroundColor: coach.theme.primary }}
        />

        {/* Big Faded Outline Number in Top-Right Corner */}
        <div
          className="absolute -top-1 right-3 font-heading font-black text-6xl select-none pointer-events-none tracking-tighter"
          style={{
            color: coach.theme.numberColor,
            WebkitTextStroke: `1px ${coach.theme.primary}40`,
          }}
        >
          {coach.number}
        </div>

        <div>
          {/* Header Row: Icon Tile + Number Label */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${coach.theme.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
            >
              {iconMap[coach.iconName]}
            </div>

            <div className="flex flex-col">
              <span
                className="text-[10px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full inline-block w-fit"
                style={{
                  backgroundColor: `${coach.theme.primary}18`,
                  color: coach.theme.accent,
                }}
              >
                COACH {coach.number}
              </span>
            </div>
          </div>

          {/* Coach Title */}
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 leading-snug">
            {coach.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
            {coach.description}
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div className="border-t border-slate-100 pt-2.5 flex items-center gap-2 overflow-hidden text-[11px] text-slate-500 font-semibold truncate">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: coach.theme.primary }}
          />
          <span className="truncate">{coach.perks[0]}</span>
        </div>
      </div>

      {/* Undercarriage Carriage Beam + 2 Maroon Wheels sitting directly on the tracks */}
      <div className="w-full relative flex items-center justify-between px-10 -mt-2 z-10">
        {/* Chassis beam */}
        <div className="absolute top-2 left-6 right-6 h-3 bg-slate-800 rounded-sm border border-slate-950 z-0" />

        {/* Wheel 1 (Left Coach Wheel) */}
        <div className="ge-wheel relative z-10 w-11 h-11 flex-shrink-0">
          <svg viewBox="0 0 44 44" className="w-full h-full">
            <circle cx="22" cy="22" r="20" fill="#8B2332" stroke="#E2E8F0" strokeWidth="2.5" />
            <circle cx="22" cy="22" r="15" fill="#6B1724" stroke="#4C101A" strokeWidth="1" />
            <line x1="7" y1="22" x2="37" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="7" x2="22" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="11" x2="33" y2="33" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="11" y1="33" x2="33" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="22" cy="22" r="5" fill="#F5B83D" stroke="#B45309" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Wheel 2 (Right Coach Wheel) */}
        <div className="ge-wheel relative z-10 w-11 h-11 flex-shrink-0">
          <svg viewBox="0 0 44 44" className="w-full h-full">
            <circle cx="22" cy="22" r="20" fill="#8B2332" stroke="#E2E8F0" strokeWidth="2.5" />
            <circle cx="22" cy="22" r="15" fill="#6B1724" stroke="#4C101A" strokeWidth="1" />
            <line x1="7" y1="22" x2="37" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="7" x2="22" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="11" x2="33" y2="33" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="11" y1="33" x2="33" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="22" cy="22" r="5" fill="#F5B83D" stroke="#B45309" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};
