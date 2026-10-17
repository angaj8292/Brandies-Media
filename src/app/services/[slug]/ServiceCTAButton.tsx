'use client';

import React from 'react';
import { useConsultation } from '@/components/context/ConsultationContext';
import { Calendar } from 'lucide-react';

export const ServiceCTAButton: React.FC<{ serviceTitle: string }> = ({
  serviceTitle,
}) => {
  const { openConsultation } = useConsultation();

  return (
    <button
      onClick={() =>
        openConsultation(
          serviceTitle,
          `I would like to explore your ${serviceTitle} service for my business.`
        )
      }
      className="w-full sm:w-auto px-8 py-3.5 rounded-full font-heading font-extrabold text-sm text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
    >
      <Calendar className="w-4 h-4 text-slate-950" />
      <span>Book Strategy Session for This Service</span>
    </button>
  );
};
