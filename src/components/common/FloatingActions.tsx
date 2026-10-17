'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { ChatWidget } from './ChatWidget';
import { MessageSquare, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-center gap-3">
        {/* Live Chat Bubble (Cyan) */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0AB6C4] via-[#15D8E1] to-[#22E7F0] text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white ring-2 ring-cyan-300/40"
          aria-label="Open live chat"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 transition-transform group-hover:scale-110" />

          {/* Unread indicator pulse */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />

          {/* Hover tooltip */}
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Growth Expert
          </span>
        </button>

        {/* WhatsApp Button (Green) */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#16A34A] to-[#22C55E] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white ring-2 ring-emerald-300/40"
          aria-label="Chat on WhatsApp"
        >
          {/* Custom SVG WhatsApp mark or MessageCircle */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Hover tooltip */}
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp (+91 82927 69366)
          </span>
        </a>
      </div>

      {/* Embedded Chat Widget */}
      <ChatWidget isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};
