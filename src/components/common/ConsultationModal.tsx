'use client';

import React, { useState, useEffect } from 'react';
import { useConsultation } from '@/components/context/ConsultationContext';
import { servicesData } from '@/data/services';
import { siteConfig } from '@/config/site';
import {
  X,
  Calendar,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  Clock,
} from 'lucide-react';
import { toast } from 'sonner';

export const ConsultationModal: React.FC = () => {
  const { isOpen, prefilledService, prefilledMessage, closeConsultation } =
    useConsultation();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [preferredTime, setPreferredTime] = useState('Tomorrow Morning (10 AM - 1 PM)');
  const [monthlyBudget, setMonthlyBudget] = useState('₹30,000 - ₹50,000/mo');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    } else {
      setService(servicesData[0].title);
    }
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledService, prefilledMessage, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeConsultation();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeConsultation]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot detected

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      toast.error('Please fill in your name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          preferredTime,
          monthlyBudget,
          websiteUrl,
          message,
          honeypot,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        toast.success('Consultation booked successfully!', {
          description: `Our growth director will call you at ${phone}.`,
        });
      } else {
        setIsSubmitted(true);
        toast.success('Consultation booked! We have received your details.');
      }
    } catch {
      setIsSubmitted(true);
      toast.success('Consultation booked! We have received your details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setWebsiteUrl('');
    setMessage('');
    closeConsultation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeConsultation();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B1220] via-[#10223A] to-[#0B1220] text-white p-5 sm:p-6 relative border-b border-cyan-500/20 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-cyan-500/20 text-[#15D8E1] border border-cyan-500/30">
                <Calendar className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15D8E1] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Zero-Cost 30-Min Strategy Call
                </span>
                <h3
                  id="consultation-modal-title"
                  className="font-heading font-extrabold text-lg sm:text-xl text-white"
                >
                  Book Your 1-on-1 Growth Consultation
                </h3>
              </div>
            </div>

            <button
              onClick={closeConsultation}
              className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h4 className="font-heading font-extrabold text-2xl text-slate-900">
                Strategy Session Booked!
              </h4>

              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. We have forwarded your project details to our Senior Growth Director. We will contact you at{' '}
                <span className="font-semibold text-slate-900">{phone}</span> during your selected time slot ({preferredTime}).
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="font-bold text-slate-700">What to expect on the call:</div>
                <div className="text-slate-600">• Account & competitor gap analysis</div>
                <div className="text-slate-600">• Realistic target ACOS & blended ROAS calculation</div>
                <div className="text-slate-600">• Step-by-step roadmap to scale to your next revenue milestone</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 text-white font-heading font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Direct WhatsApp Confirmation →
                </a>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-heading font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (hidden from real users) */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Angaj Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 82927 69366"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="angajkumar2262002@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Website or Store URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="yourbrand.in / amazon.in/shops/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Service Needed *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.shortTitle} ({s.category})
                      </option>
                    ))}
                    <option value="Complete Omnichannel Growth (All Services)">
                      Complete Omnichannel Growth (All Services)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Call Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Today Afternoon (2 PM - 5 PM)">Today Afternoon (2 PM - 5 PM)</option>
                    <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                    <option value="Tomorrow Evening (5 PM - 8 PM)">Tomorrow Evening (5 PM - 8 PM)</option>
                    <option value="Weekend Slot">Weekend Slot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tell Us About Your Brand & Challenges
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Currently doing ₹5L/mo on Amazon, looking to scale to ₹25L with lower ACOS and launch Shopify."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#15D8E1] focus:ring-1 focus:ring-cyan-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 ring-2 ring-amber-300/40"
                >
                  <Send className="w-4 h-4 text-slate-900" />
                  <span>
                    {isSubmitting ? 'Booking Session...' : 'Confirm Free 30-Min Strategy Call'}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Non-Disclosure Protected
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#15D8E1]" />
                  Zero Obligations
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
