import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/common/BrandLogo';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] text-center">
      <div className="max-w-md mx-auto space-y-6">
        <BrandLogo size="lg" theme="light" className="justify-center mb-2" />

        <div className="font-heading font-black text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#15D8E1] via-[#0AB6C4] to-indigo-600 font-mono">
          404
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
          Page Off Track
        </h2>

        <p className="text-slate-600 text-sm leading-relaxed">
          Looks like the Growth Express took an unexpected turn! The page you were looking for doesn&apos;t exist or has moved.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-100 text-cyan-900 font-heading font-bold text-xs flex items-center justify-center gap-2 hover:bg-cyan-200 transition-colors"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
