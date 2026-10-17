'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/common/BrandLogo';
import { MandalaArt } from '@/components/common/MandalaArt';
import { Lock, Mail, User, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter your email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (tab === 'login') {
        toast.success(`Welcome back, ${email.split('@')[0]}!`, {
          description: 'Accessing your Brandies Growth Dashboard...',
        });
      } else {
        toast.success('Account created successfully!', {
          description: 'Welcome to Brandies Media client portal.',
        });
      }
    }, 1200);
  };

  return (
    <div className="w-full min-h-[85vh] py-16 flex items-center justify-center bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] relative overflow-hidden">
      <MandalaArt position="top-right" />
      <MandalaArt position="bottom-left" className="opacity-15" />

      <div className="w-full max-w-md mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <BrandLogo size="lg" theme="light" className="justify-center mb-3" />
          <p className="text-xs text-slate-500">
            Client Portal &amp; Telemetry Analytics
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated">
          {/* Tabs */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => setTab('login')}
              className={`flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all ${
                tab === 'login'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setTab('signup')}
              className={`flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all ${
                tab === 'signup'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Client Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Angaj Kumar"
                      className="w-full px-3.5 py-2.5 pl-10 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Brand / Store Name
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Vedik Roots / Urban Threads"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Business Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@yourbrand.com"
                  className="w-full px-3.5 py-2.5 pl-10 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => toast.info('Password reset instructions sent to your email.')}
                    className="text-[11px] text-[#0AB6C4] font-semibold hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 pl-10 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#15D8E1]"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#22E7F0] via-[#15D8E1] to-[#0AB6C4] text-slate-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 ring-2 ring-amber-300/40"
            >
              <span>{loading ? 'Authenticating...' : tab === 'login' ? 'Sign In to Dashboard' : 'Register Account'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <div className="pt-2 text-center text-xs text-slate-400">
              Need help?{' '}
              <Link href="/contact" className="text-[#0AB6C4] font-bold hover:underline">
                Contact Brand Support Desk
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
