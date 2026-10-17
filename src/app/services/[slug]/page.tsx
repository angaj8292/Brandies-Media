import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData, ServiceItem } from '@/data/services';
import { siteConfig } from '@/config/site';
import { MandalaArt } from '@/components/common/MandalaArt';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
  HelpCircle,
  Clock,
  Award,
} from 'lucide-react';
import { ServiceCTAButton } from './ServiceCTAButton';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | Brandies Media' };

  return {
    title: `${service.title} | Brandies Media Growth Agency`,
    description: service.description,
    openGraph: {
      title: `${service.title} - ${siteConfig.name}`,
      description: service.description,
    },
  };
}

export default function SingleServicePage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="w-full">
      {/* Service Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] overflow-hidden">
        <MandalaArt position="top-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> {service.category}
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            {service.tagline}
          </p>

          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            {service.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ServiceCTAButton serviceTitle={service.title} />

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-heading font-bold text-sm bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              Direct WhatsApp Inquiry →
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables: What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              What&apos;s Included in the{' '}
              <span className="text-[#0AB6C4] marker-swoosh">Scope</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              End-to-end deliverables handled with zero micromanagement needed from your end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFCFF] border border-slate-200 shadow-sm flex items-start gap-4 hover:border-cyan-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-100 text-[#0AB6C4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process: Step-by-Step */}
      <section className="py-20 bg-[#FFF8F0] border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Our 4-Stage Execution Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From audit to aggressive scaling, here is how we guarantee measurable momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading font-black text-4xl text-cyan-200 select-none block mb-2 font-mono">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950">
              Questions About This Service
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0AB6C4] flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
