import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service | Brandies Media',
  description: 'Terms of Service governing agency retainers and consulting agreements with Brandies Media.',
};

export default function TermsPage() {
  return (
    <div className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Effective Date: October 2026 · Brandies Media
        </p>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
          <p>
            Welcome to Brandies Media. By accessing our website, scheduling consultations, or retaining our e-commerce management and web development services, you agree to these Terms of Service.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            1. Scope of Retainers &amp; Engagements
          </h2>
          <p>
            Brandies Media provides e-commerce consulting, marketplace management, performance advertising, custom web development, and design services. Specific deliverables, KPIs, and monthly retainer fees are confirmed in individual Statements of Work (SOW) or invoice proposals.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            2. Asset Ownership &amp; Intellectual Property
          </h2>
          <p>
            Clients maintain 100% full ownership of their ad accounts, store domains, trademarks, customer data, and physical inventory. Upon full payment of service invoices, all custom graphics, A+ modules, and source code generated specifically for your brand transfer completely to your organization.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            3. Month-to-Month Agreements
          </h2>
          <p>
            Unless explicitly specified in enterprise contracts, our standard growth retainers operate on a flexible month-to-month basis with a 30-day written cancellation notice, reflecting our commitment to performance over long-term lock-ins.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            4. Contact
          </h2>
          <p>
            For legal inquiries, contact{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0AB6C4] font-semibold">
              {siteConfig.contact.email}
            </a>{' '}
            or call{' '}
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-[#0AB6C4] font-semibold">
              {siteConfig.contact.displayPhone}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
