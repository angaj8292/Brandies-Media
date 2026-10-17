'use client';

import React from 'react';

interface LocomotiveProps {
  wheelRotation?: number; // degrees
  className?: string;
}

export const Locomotive: React.FC<LocomotiveProps> = ({
  wheelRotation = 0,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-block select-none flex-shrink-0 ${className}`}
      style={{
        width: '260px',
        height: '190px',
      }}
    >
      {/* Smoke puffs from Chimney */}
      <div className="absolute -top-12 left-14 w-28 h-16 pointer-events-none overflow-visible z-20">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute rounded-full bg-slate-300/60 blur-[1px]"
            style={{
              width: `${16 + i * 4}px`,
              height: `${16 + i * 4}px`,
              left: '0px',
              bottom: '0px',
              animation: `smokeDrift 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite`,
              animationDelay: `${i * 0.45}s`,
            }}
          />
        ))}
      </div>

      {/* SVG Locomotive Engine */}
      <svg
        viewBox="0 0 260 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{
          animation: 'engineChug 0.32s ease-in-out infinite alternate',
        }}
      >
        <defs>
          {/* Glass window gradient */}
          <linearGradient id="cabWindowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="50%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>

          {/* Boiler gradient */}
          <linearGradient id="boilerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="25%" stopColor="#E85D6A" />
            <stop offset="85%" stopColor="#D94856" />
            <stop offset="100%" stopColor="#B23844" />
          </linearGradient>

          {/* Roof gradient */}
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* --- FRONT COW-CATCHER (Left) --- */}
        <polygon
          points="2,148 28,118 28,148"
          fill="#F5B83D"
          stroke="#D97706"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Cow-catcher grill slashes */}
        <line x1="8" y1="145" x2="24" y2="126" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="145" x2="26" y2="133" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="145" x2="27" y2="140" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />

        {/* --- MAIN BOILER CYLINDER --- */}
        {/* Boiler body */}
        <rect
          x="26"
          y="68"
          width="132"
          height="64"
          rx="10"
          fill="url(#boilerGrad)"
          stroke="#B23844"
          strokeWidth="2"
        />

        {/* Front Boiler Round Cap */}
        <path
          d="M26 68C18 68 12 82 12 100C12 118 18 132 26 132V68Z"
          fill="#C53030"
          stroke="#9B2C2C"
          strokeWidth="2"
        />

        {/* Front Headlight (Facing Left) */}
        <rect x="2" y="88" width="12" height="18" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
        <ellipse cx="4" cy="97" rx="3" ry="7" fill="#FEF08A" />
        <circle cx="4" cy="97" r="3" fill="#FDE047" className="animate-pulse" />

        {/* Boiler Bands (Golden straps) */}
        <line x1="62" y1="68" x2="62" y2="132" stroke="#FBBF24" strokeWidth="3" opacity="0.9" />
        <line x1="102" y1="68" x2="102" y2="132" stroke="#FBBF24" strokeWidth="3" opacity="0.9" />
        <line x1="142" y1="68" x2="142" y2="132" stroke="#FBBF24" strokeWidth="3" opacity="0.9" />

        {/* Rivet dots on front and bottom */}
        {[34, 46, 58, 70, 82, 94, 106, 118, 130, 142, 154].map((rx) => (
          <circle key={rx} cx={rx} cy="128" r="1.5" fill="#FFE4E6" opacity="0.8" />
        ))}

        {/* --- STEAM DOME (Round golden dome on top) --- */}
        <path
          d="M92 68C92 56 114 56 114 68H92Z"
          fill="#F5B83D"
          stroke="#D97706"
          strokeWidth="1.5"
        />

        {/* --- CHIMNEY / SMOKESTACK --- */}
        <path
          d="M48 68L44 34H68L64 68H48Z"
          fill="#E85D6A"
          stroke="#B23844"
          strokeWidth="2"
        />
        {/* Chimney Rim Cap */}
        <rect x="40" y="28" width="32" height="7" rx="2.5" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" />

        {/* --- DRIVER CABIN (Right) --- */}
        <rect
          x="154"
          y="42"
          width="88"
          height="92"
          rx="6"
          fill="#E85D6A"
          stroke="#B23844"
          strokeWidth="2"
        />

        {/* Amber Curved Roof */}
        <path
          d="M148 42C148 38 154 34 162 34H236C244 34 250 38 250 42L246 44H152L148 42Z"
          fill="url(#roofGrad)"
          stroke="#D97706"
          strokeWidth="1.5"
        />

        {/* Cabin Window (with white glass glare) */}
        <rect
          x="168"
          y="56"
          width="46"
          height="38"
          rx="5"
          fill="url(#cabWindowGrad)"
          stroke="#1E293B"
          strokeWidth="2"
        />
        {/* Window reflection lines */}
        <line x1="172" y1="88" x2="202" y2="58" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <line x1="182" y1="88" x2="208" y2="62" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Cabin Door outline */}
        <rect x="220" y="56" width="18" height="66" rx="2" fill="#D94856" stroke="#991B1B" strokeWidth="1.2" />
        <circle cx="224" cy="90" r="1.5" fill="#FBBF24" />

        {/* --- DARK UNDERCARRIAGE / CHASSIS --- */}
        <rect x="22" y="132" width="226" height="16" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="26" y="136" width="218" height="5" fill="#334155" />

        {/* Rear Coupling Hook (Connecting to Coach 01) */}
        <rect x="246" y="134" width="14" height="8" rx="2" fill="#475569" stroke="#1E293B" strokeWidth="1" />
        <circle cx="254" cy="138" r="2.5" fill="#94A3B8" />

        {/* --- 3 WHEELS (2 Small Front, 1 Large Rear) --- */}
        {/* Wheel 1 (Front-Left, Small, Center: 52, 154, Radius: 20) */}
        <g className="ge-wheel">
          {/* Outer tyre */}
          <circle cx="52" cy="154" r="20" fill="#8B2332" stroke="#E2E8F0" strokeWidth="2.5" />
          <circle cx="52" cy="154" r="16" fill="#6B1724" stroke="#4C101A" strokeWidth="1" />
          {/* Cross spokes */}
          <line x1="36" y1="154" x2="68" y2="154" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="52" y1="138" x2="52" y2="170" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="41" y1="143" x2="63" y2="165" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="41" y1="165" x2="63" y2="143" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          {/* Hub cap */}
          <circle cx="52" cy="154" r="6" fill="#F5B83D" stroke="#B45309" strokeWidth="1.5" />
        </g>

        {/* Wheel 2 (Middle-Front, Small, Center: 104, 154, Radius: 20) */}
        <g className="ge-wheel">
          <circle cx="104" cy="154" r="20" fill="#8B2332" stroke="#E2E8F0" strokeWidth="2.5" />
          <circle cx="104" cy="154" r="16" fill="#6B1724" stroke="#4C101A" strokeWidth="1" />
          <line x1="88" y1="154" x2="120" y2="154" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="104" y1="138" x2="104" y2="170" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="93" y1="143" x2="115" y2="165" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="93" y1="165" x2="115" y2="143" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="104" cy="154" r="6" fill="#F5B83D" stroke="#B45309" strokeWidth="1.5" />
        </g>

        {/* Wheel 3 (Rear, Large, Center: 184, 148, Radius: 26) */}
        <g className="ge-wheel">
          <circle cx="184" cy="148" r="26" fill="#8B2332" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="184" cy="148" r="21" fill="#6B1724" stroke="#4C101A" strokeWidth="1" />
          {/* 8 Spokes for large wheel */}
          <line x1="162" y1="148" x2="206" y2="148" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="184" y1="126" x2="184" y2="170" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="168" y1="132" x2="200" y2="164" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="168" y1="164" x2="200" y2="132" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Hub */}
          <circle cx="184" cy="148" r="8" fill="#F5B83D" stroke="#B45309" strokeWidth="2" />
        </g>

        {/* Connecting Drive Rod between wheels */}
        <g style={{ opacity: 0.9 }}>
          <line
            x1="52"
            y1="154"
            x2="184"
            y2="148"
            stroke="#94A3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="52" cy="154" r="3" fill="#475569" />
          <circle cx="104" cy="154" r="3" fill="#475569" />
          <circle cx="184" cy="148" r="4" fill="#334155" />
        </g>
      </svg>
    </div>
  );
};
