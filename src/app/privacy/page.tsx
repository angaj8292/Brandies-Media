import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Brandies Media',
  description: 'Privacy Policy and client data protection practices of Brandies Media.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Last Updated: October 2026 · Brandies Media (&ldquo;We Make Brands&rdquo;)
        </p>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
          <p>
            At Brandies Media, we value the trust you place in us when sharing your business telemetry, catalog data, ad account performance, and contact information. This Privacy Policy outlines our commitment to data integrity and confidential handling.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect information provided directly by you when booking consultations, requesting AI Audits, or contacting our agency desk:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact details: Name, business email, WhatsApp/phone number.</li>
            <li>Store URLs and business profiles (Amazon, Flipkart, Shopify, Meesho).</li>
            <li>Monthly advertising budgets and revenue milestones.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            2. Confidentiality &amp; Mutual Non-Disclosure
          </h2>
          <p>
            All supplier sources, unit costs, profit margins, ad account pixels, and proprietary catalogs shared during strategy consultations are treated with strict confidentiality. We sign mutual non-disclosure agreements (NDAs) upon request before inspecting sensitive analytics.
          </p>

          <h2 className="font-heading font-bold text-xl text-slate-900 mt-6 mb-2">
            3. Contact for Inquiries
          </h2>
          <p>
            If you have questions regarding this policy or wish to delete your contact records from our CRM, reach out to our privacy officer at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0AB6C4] font-semibold">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
