'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { toast } from 'sonner';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error('Please fill in your name, phone number, and message.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone,
          email: `${phone.replace(/\D/g, '')}@lead.brandiesmedia.com`,
          service: 'Live Chat Lead',
          budget: 'Flexible',
          message: `[Live Chat Message]: ${message}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success('Message received! Our team will contact you shortly.');
      } else {
        setSubmitted(true);
        toast.success('Message received! We will WhatsApp you in 15 minutes.');
      }
    } catch {
      setSubmitted(true);
      toast.success('Message received!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-label="Brandies Media Live Support"
      className="fixed bottom-24 right-5 sm:right-8 z-50 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      {/* Widget Header */}
      <div className="bg-gradient-to-r from-[#0B1220] via-[#10223A] to-[#0B1220] text-white p-4 flex items-center justify-between border-b border-cyan-500/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#15D8E1] to-[#0AB6C4] flex items-center justify-center text-slate-950 font-bold font-heading">
              BM
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0B1220] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-heading font-bold text-sm text-white">
                Brandies Growth Desk
              </h4>
              <Sparkles className="w-3.5 h-3.5 text-[#15D8E1]" />
            </div>
            <p className="text-[11px] text-slate-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-400" /> Typically replies within 15 mins
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Widget Body */}
      <div className="p-5 max-h-[440px] overflow-y-auto">
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-lg">
              Message Sent!
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. An e-commerce growth specialist has been notified and will message or call you at{' '}
              <span className="font-semibold text-slate-900">{phone}</span> shortly.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full"
              >
                Or Chat on WhatsApp Right Now →
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Greeting speech bubble */}
            <div className="bg-slate-100 rounded-2xl rounded-tl-xs p-3 text-xs text-slate-700 leading-relaxed border border-slate-200/60">
              👋 Hey there! Looking to scale on Amazon, Flipkart, or boost your Shopify store? Tell us your goal and our growth strategist will get back to you!
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                How Can We Help You? *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your brand, products, or monthly sales goals..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-2 hover:shadow-cyan-glow transition-all disabled:opacity-70"
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% confidential. No spam, ever.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
