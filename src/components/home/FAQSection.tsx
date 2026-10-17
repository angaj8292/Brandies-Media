'use client';

import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0AB6C4]" /> Got Questions?
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Frequently Asked{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Questions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Everything you need to know about our e-commerce management, contracts, ad spend, and reporting.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-[#0AB6C4] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-50 text-[#0AB6C4]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="font-heading font-bold text-slate-900 text-base">
              Have a specific question about your brand?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Talk directly with our lead growth engineer on WhatsApp.
            </p>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md transition-all flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 82927 69366)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
