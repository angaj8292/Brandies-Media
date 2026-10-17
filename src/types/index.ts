export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredTime: string;
  monthlyBudget?: string;
  websiteUrl?: string;
  message?: string;
  honeypot?: string; // spam protection
}

export interface AIAuditFormData {
  websiteUrl: string;
  businessType: string;
  email: string;
  phone: string;
  fullName: string;
  monthlyRevenue?: string;
  currentChannels?: string[];
  primaryGoal?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  honeypot?: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  category: string;
  period: string;
  features: string[];
}

export interface AuditReportResult {
  overallScore: number;
  categoryScores: {
    seo: number;
    marketplaceReadiness: number;
    adEfficiency: number;
    speedAndMobile: number;
    brandPerception: number;
  };
  strengths: string[];
  criticalGaps: string[];
  quickWins: string[];
  projectedRevenueLift: string;
  recommendedPackage: string;
}
