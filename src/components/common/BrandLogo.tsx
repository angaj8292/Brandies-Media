import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'light',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isDark = theme === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-14 h-14 rounded-3xl',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl tracking-tight',
    lg: 'text-3xl tracking-tight',
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-[13px] tracking-[0.3em]',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform hover:scale-[1.02] ${className}`}
      aria-label="Brandies Media - We Make Brands"
    >
      {/* Geometric App-Icon: Cyan gradient rounded box with White 'B' and Golden Upward Growth Arrow */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center bg-gradient-to-tr from-[#0AB6C4] via-[#15D8E1] to-[#46EEF7] shadow-md shadow-cyan-500/20 flex-shrink-0 transition-shadow duration-300 group-hover:shadow-cyan-400/40`}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[72%] h-[72%]"
        >
          {/* Main White 'B' Body */}
          <path
            d="M16 12C16 10.8954 16.8954 10 18 10H33C39.6274 10 45 15.3726 45 22C45 26.299 42.7388 30.071 39.3807 32.2223C43.8329 34.2255 47 38.7497 47 44C47 50.6274 41.6274 56 35 56H18C16.8954 56 16 55.1046 16 54V12Z"
            fill="white"
          />
          {/* Lower Inner Negative Cutout */}
          <path
            d="M26 38H34C36.7614 38 39 40.2386 39 43C39 45.7614 36.7614 48 34 48H26V38Z"
            fill="#0AB6C4"
          />
          {/* Top Loop Negative Cutout */}
          <path
            d="M26 18H32C34.7614 18 37 20.2386 37 23C37 25.7614 34.7614 28 32 28H26V18Z"
            fill="#0AB6C4"
          />
          {/* Golden Growth Arrow shooting upward-right from within */}
          <path
            d="M32 30L49 13M49 13H38M49 13V24"
            stroke="#FBBF24"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography: BRANDIES MEDIA + WE MAKE BRANDS */}
      <div className="flex flex-col">
        <div className={`font-heading font-extrabold leading-none flex items-center gap-1.5 ${textSizes[size]}`}>
          <span className={isDark ? 'text-white' : 'text-slate-900 group-hover:text-slate-800'}>
            BRANDIES
          </span>
          <span className="text-[#15D8E1] drop-shadow-sm font-black">
            MEDIA
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-heading font-bold uppercase mt-1 leading-none ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            } ${taglineSizes[size]}`}
          >
            WE MAKE BRANDS
          </span>
        )}
      </div>
    </Link>
  );
};
