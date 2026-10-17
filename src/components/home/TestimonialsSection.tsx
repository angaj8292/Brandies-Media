'use client';

import React from 'react';
import { testimonialsData } from '@/data/testimonials';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...testimonialsData, ...testimonialsData];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0B1220] text-white overflow-hidden" id="testimonials">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-[#15D8E1] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Client Voices & Proof
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          What Our Clients{' '}
          <span className="text-[#15D8E1] marker-swoosh">Are Saying?</span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
          Over 500+ Indian brands trust Brandies Media to run their ads, manage listings, and protect their margins daily.
        </p>
      </div>

      {/* Infinite Auto-Scrolling Marquee Container (Pauses on Hover) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B1220] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B1220] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-6 flex">
          {marqueeItems.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[340px] sm:w-[380px] bg-[#111A2E]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl flex flex-col justify-between flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] hover:border-cyan-500/50"
            >
              <div>
                {/* 5 Orange Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 text-[#15D8E1] border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Highlight Title */}
                <h4 className="font-heading font-bold text-sm text-white mb-2 line-clamp-1">
                  &ldquo;{testimonial.highlight}&rdquo;
                </h4>

                {/* Quote */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Divider & Author Meta */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                {/* Circular initials avatar in different colors */}
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.avatarBg} text-white flex items-center justify-center font-heading font-extrabold text-xs shadow-md flex-shrink-0`}
                >
                  {testimonial.avatarInitials}
                </div>

                <div className="min-w-0">
                  <h5 className="font-heading font-bold text-sm text-white truncate">
                    {testimonial.name}
                  </h5>
                  <p className="text-[11px] text-slate-400 truncate">
                    {testimonial.role}, <span className="text-[#15D8E1]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
