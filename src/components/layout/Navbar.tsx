'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/common/BrandLogo';
import { FairyLights } from '@/components/festive/FairyLights';
import { servicesData } from '@/data/services';
import { useConsultation } from '@/components/context/ConsultationContext';
import {
  Calendar,
  ChevronDown,
  ShoppingBag,
  User,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layout,
  Palette,
  Search,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { openConsultation } = useConsultation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1); // Default 1 package in cart

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Our Services',
      href: '/services',
      hasDropdown: true,
    },
    {
      label: 'AI Audit',
      href: '/ai-audit',
      badge: 'FREE',
      badgeColor: 'bg-emerald-500 text-white',
    },
    { label: 'Our Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    Marketplace: <ShoppingBag className="w-4 h-4 text-cyan-500" />,
    'Performance Marketing': <TrendingUp className="w-4 h-4 text-indigo-500" />,
    'Web & Tech': <Layout className="w-4 h-4 text-emerald-500" />,
    Branding: <Palette className="w-4 h-4 text-amber-500" />,
  };

  return (
    <header className="sticky top-3 sm:top-4 z-40 w-full px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 relative border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-slate-200/90 py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/90 backdrop-blur-md shadow-md shadow-slate-900/5 border-slate-200/70 py-3 sm:py-3.5 px-4 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <BrandLogo size={isScrolled ? 'sm' : 'md'} theme="light" />

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                        isActive
                          ? 'text-[#0AB6C4]'
                          : 'text-slate-700 hover:text-[#0AB6C4]'
                      }`}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-[#0AB6C4]' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown Panel */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 grid grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-150 z-50">
                        <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#15D8E1]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              Comprehensive E-Commerce & Growth Solutions
                            </span>
                          </div>
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-[#0AB6C4] hover:underline flex items-center gap-1"
                          >
                            View All 12 Services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {servicesData.slice(0, 8).map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="group/item flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50/80 transition-all border border-transparent hover:border-cyan-100"
                          >
                            <div className="w-9 h-9 rounded-xl bg-cyan-50 group-hover/item:bg-[#15D8E1] group-hover/item:text-slate-900 text-[#0AB6C4] flex items-center justify-center transition-colors flex-shrink-0 mt-0.5">
                              {categoryIcons[service.category] || <ShoppingBag className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-[#0AB6C4] transition-colors truncate">
                                  {service.shortTitle}
                                </h4>
                                {service.badge && (
                                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {service.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0AB6C4]'
                      : 'text-slate-700 hover:text-[#0AB6C4]'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#15D8E1]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Icon with badge */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full text-slate-700 hover:text-[#0AB6C4] hover:bg-slate-100 transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#15D8E1] text-slate-950 text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login Icon */}
            <Link
              href="/login"
              className="p-2 rounded-full text-slate-700 hover:text-[#0AB6C4] hover:bg-slate-100 transition-colors"
              aria-label="Account Login"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Prominent "Get Consultation" Button */}
            <button
              onClick={() => openConsultation()}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-slate-900" />
              <span>Get Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Festive Twinkling Fairy Lights String along the bottom edge */}
        <FairyLights count={28} />
      </div>

      {/* Mobile Slide-In Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-20 bg-white/98 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className={`p-3 rounded-2xl text-base font-bold transition-all ${
                pathname === '/' ? 'bg-cyan-50 text-[#0AB6C4]' : 'text-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`p-3 rounded-2xl text-base font-bold transition-all ${
                pathname === '/about' ? 'bg-cyan-50 text-[#0AB6C4]' : 'text-slate-800'
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`p-3 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                pathname.startsWith('/services')
                  ? 'bg-cyan-50 text-[#0AB6C4]'
                  : 'text-slate-800'
              }`}
            >
              <span>Our Services (All 12)</span>
              <ArrowRight className="w-4 h-4 text-[#0AB6C4]" />
            </Link>
            <Link
              href="/ai-audit"
              className={`p-3 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                pathname === '/ai-audit'
                  ? 'bg-cyan-50 text-[#0AB6C4]'
                  : 'text-slate-800'
              }`}
            >
              <span>Free AI Marketing Audit</span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                FREE
              </span>
            </Link>
            <Link
              href="/blog"
              className={`p-3 rounded-2xl text-base font-bold transition-all ${
                pathname === '/blog' ? 'bg-cyan-50 text-[#0AB6C4]' : 'text-slate-800'
              }`}
            >
              Our Blog
            </Link>
            <Link
              href="/contact"
              className={`p-3 rounded-2xl text-base font-bold transition-all ${
                pathname === '/contact' ? 'bg-cyan-50 text-[#0AB6C4]' : 'text-slate-800'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3 rounded-2xl font-heading font-bold text-sm text-slate-950 bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] ring-2 ring-amber-300/40 shadow-cyan-glow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-900" />
                <span>Get Free Consultation</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-500">
                <span>Direct Hotline:</span>
                <a
                  href="tel:+918292769366"
                  className="font-bold text-slate-800 hover:text-[#0AB6C4]"
                >
                  +91 82927 69366
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
