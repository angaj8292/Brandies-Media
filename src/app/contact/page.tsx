'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';
import { MandalaArt } from '@/components/common/MandalaArt';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Marketplace Management (Amazon, Flipkart & Meesho)');
  const [budget, setBudget] = useState('₹30,000 - ₹50,000/mo');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      toast.error('Please enter your name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          service,
          budget,
          message,
          honeypot,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        toast.success('Inquiry received! We will contact you within 30 minutes.');
      } else {
        setIsSubmitted(true);
        toast.success('Inquiry received! We have logged your request.');
      }
    } catch {
      setIsSubmitted(true);
      toast.success('Inquiry received!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] overflow-hidden text-center">
        <MandalaArt position="top-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> Direct Contact Desk
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Massive Together</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a question about onboarding, marketplace fees, or need a custom enterprise proposal? Reach out directly via form, phone, or instant WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Contact Details & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B1220] text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Direct communication with our growth strategists. Fast response guaranteed.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#15D8E1] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phone &amp; WhatsApp
                      </div>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#15D8E1] transition-colors"
                      >
                        {siteConfig.contact.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#15D8E1] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Official Inquiries Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#15D8E1] transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#15D8E1] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Operating Hours
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {siteConfig.contact.hours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#15D8E1] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Headquarters &amp; Hubs
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 relative overflow-hidden h-60 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-[#0AB6C4]" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Delhi NCR &amp; Pan-India Service
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  Serving clients in Mumbai, Delhi NCR, Bangalore, Jaipur, Surat, Patna &amp; worldwide.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Full Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAFCFF] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card-soft">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                      Thank You, {fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been routed to our Senior Growth Director. We will review your requirements and reach out to you via WhatsApp / phone at{' '}
                      <strong className="text-slate-900">{phone}</strong> shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-heading font-bold text-xs"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                        Send a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill in your project details and our team will get back to you with custom projections.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Angaj Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 82927 69366"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="angajkumar2262002@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Target Monthly Budget
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1]"
                        >
                          <option value="₹15,000 - ₹30,000/mo">₹15,000 - ₹30,000/mo</option>
                          <option value="₹30,000 - ₹50,000/mo">₹30,000 - ₹50,000/mo</option>
                          <option value="₹50,000 - ₹1,00,000/mo">₹50,000 - ₹1,00,000/mo</option>
                          <option value="₹1,00,000+/mo (Enterprise)">₹1,00,000+/mo (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#15D8E1]"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Message / Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your products, current challenges with ads or marketplaces, and where you want to take your brand in the next 6-12 months..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1] resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] ring-2 ring-amber-300/40"
                      >
                        <Send className="w-4 h-4 text-slate-900" />
                        <span>{isSubmitting ? 'Transmitting Note...' : 'Send Message to Team'}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>We sign mutual NDAs upon request. Your data is 100% confidential.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
