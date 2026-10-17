import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TiltedServiceCards } from '@/components/home/TiltedServiceCards';
import { TrustBand } from '@/components/home/TrustBand';
import { NotebookPagesSection } from '@/components/home/NotebookPagesSection';
import { GrowthExpress } from '@/components/GrowthExpress';
import { ServicesGridSection } from '@/components/home/ServicesGridSection';
import { AIAuditTeaserSection } from '@/components/home/AIAuditTeaserSection';
import { StatsSection } from '@/components/home/StatsSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PricingSection } from '@/components/home/PricingSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. THREE TILTED SERVICE CARDS */}
      <TiltedServiceCards />

      {/* 3. DARK CURVED TRUST BAND */}
      <TrustBand />

      {/* 4. "HOW WE WORK" NOTEBOOK-PAGES SCROLL SECTION */}
      <NotebookPagesSection />

      {/* 5. "ONE TEAM. ONE PLAN. ZERO JUGGLING." GROWTH EXPRESS (GSAP SCROLL-DRIVEN PINNED TRAIN) */}
      <GrowthExpress />

      {/* 6. SERVICES OVERVIEW GRID (All 12 Services) */}
      <ServicesGridSection />

      {/* 7. AI AUDIT TEASER */}
      <AIAuditTeaserSection />

      {/* 8. RESULTS / STATS */}
      <StatsSection />

      {/* 9. PORTFOLIO / CASE STUDIES */}
      <PortfolioSection />

      {/* 10. TESTIMONIALS INFINITE MARQUEE */}
      <TestimonialsSection />

      {/* 11. PRICING / PACKAGES */}
      <PricingSection />

      {/* 12. FAQ ACCORDION */}
      <FAQSection />

      {/* 13. FINAL CTA */}
      <FinalCTASection />
    </div>
  );
}
