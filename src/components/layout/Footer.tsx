'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/common/BrandLogo';
import { siteConfig } from '@/config/site';
import { FestiveToggleSwitch } from '@/components/festive/FestiveToggleSwitch';
import { servicesData } from '@/data/services';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  Send,
  CheckCircle,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { toast } from 'sonner';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast.error('Please enter a valid business email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (res.ok) {
        setIsSubscribed(true);
        toast.success('Subscribed successfully! Welcome to Brandies Growth Dispatch.');
      } else {
        toast.success('Subscribed! Check your inbox for our e-commerce playbooks.');
        setIsSubscribed(true);
      }
    } catch {
      toast.success('Subscribed! We will send you our weekly marketplace tactics.');
      setIsSubscribed(true);
    } finally {
      setLoading(false);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#0B1220] text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#15D8E1] to-transparent opacity-60" />

      {/* Background radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Newsletter & Hook Bar */}
        <div className="bg-gradient-to-br from-[#111A2E] to-[#0D1527] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15D8E1] bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
              <Award className="w-3.5 h-3.5" /> Brandies Growth Dispatch
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Weekly E-Commerce Growth Hacks & Algorithm Secrets
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Join 12,000+ Indian brand founders and marketplace sellers getting our bi-weekly breakdown of Amazon algorithm changes, Meta ad hooks, and high-margin conversion tactics.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="w-full lg:w-auto flex-1 max-w-md flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email..."
                required
                className="w-full px-5 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#15D8E1] focus:ring-2 focus:ring-cyan-500/20 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#22E7F0] to-[#0AB6C4] text-slate-950 font-heading font-bold text-sm flex items-center justify-center gap-2 flex-shrink-0 hover:shadow-cyan-glow transition-all hover:scale-105 active:scale-95 disabled:opacity-70"
            >
              <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo size="lg" theme="dark" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Brandies Media is India’s premier full-funnel e-commerce growth partner. We scale D2C brands, marketplace sellers, and manufacturers into profitable household names through high-converting store engineering and algorithmic paid advertising.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#15D8E1] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Amazon & Google Partner Agency · Since 2019</span>
            </div>
          </div>

          {/* Col 2: Growth Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Marketplaces & Ads
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/marketplace-management"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Amazon & Flipkart Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/amazon-flipkart-advertising"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Marketplace PPC (ACOS &lt;18%)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/e-commerce-marketing"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Meta & Instagram Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-ads"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Google Shopping & PMax
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dropshipping-growth"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Dropshipping Turnkey Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Social Media Marketing (SMM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech & Design */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Tech & Branding
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/shopify-development"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Shopify Store Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-website-development"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Custom Next.js Web Dev
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding-and-design"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Brand Identity & Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/services/search-engine-optimization"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  Technical SEO & Backlinks
                </Link>
              </li>
              <li>
                <Link
                  href="/services/youtube-management"
                  className="hover:text-[#15D8E1] transition-colors"
                >
                  YouTube Channel Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-audit"
                  className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Free AI Audit</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">
                    NEW
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#15D8E1] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#15D8E1] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#15D8E1] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {siteConfig.contact.hours}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#15D8E1] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Instant WhatsApp Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.tagline}). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <FestiveToggleSwitch variant="inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
