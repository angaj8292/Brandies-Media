import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/common/FloatingActions';
import { ConsultationModal } from '@/components/common/ConsultationModal';
import { ConsultationProvider } from '@/components/context/ConsultationContext';
import { FestiveProvider } from '@/context/FestiveContext';
import { AnnouncementBanner } from '@/components/festive/AnnouncementBanner';
import { FestiveEngine } from '@/components/festive/FestiveEngine';
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider';
import { Toaster } from 'sonner';

export const viewport: Viewport = {
  themeColor: '#15D8E1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline} - E-Commerce Growth Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Brandies Media',
    'We Make Brands',
    'E-Commerce Growth Agency India',
    'Amazon Account Management',
    'Flipkart Seller Growth',
    'Meesho Account Management',
    'Shopify Development India',
    'Meta Ads Agency India',
    'Google Shopping Ads',
    'D2C Brand Marketing',
    'A+ Content Design',
    'E-Commerce SEO',
  ],
  authors: [{ name: 'Brandies Media', url: siteConfig.url }],
  creator: 'Brandies Media',
  publisher: 'Brandies Media',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - We Make Brands`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@brandiesmedia',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    alternateName: 'Brandies Media Growth Agency',
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brandies-logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DLF Cyber City / Sector 62',
      addressLocality: 'Noida',
      addressRegion: 'UP',
      postalCode: '201301',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6280',
      longitude: '77.3649',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '19:30',
      },
    ],
    priceRange: '₹₹',
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
      siteConfig.socials.twitter,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#15D8E1] selection:text-slate-950 font-sans">
        <FestiveProvider>
          <ConsultationProvider>
            <SmoothScrollProvider>
              {/* Dynamic Festival Announcement Bar with Countdown */}
              <AnnouncementBanner />

              {/* Automatic Festival Theme Engine: Lanterns, Petals, Diyas, Snow, Confetti */}
              <FestiveEngine />

              {/* Sticky Floating Glass Navbar */}
              <Navbar />

              {/* Main Page Content */}
              <main className="flex-1 w-full">{children}</main>

              {/* Footer */}
              <Footer />

              {/* Floating Actions (WhatsApp + Live Chat) */}
              <FloatingActions />

              {/* Global Consultation Modal */}
              <ConsultationModal />

              {/* Interactive Toast Notifications */}
              <Toaster
                position="top-right"
                richColors
                toastOptions={{
                  style: {
                    borderRadius: '1rem',
                    fontFamily: 'var(--font-heading)',
                  },
                }}
              />
            </SmoothScrollProvider>
          </ConsultationProvider>
        </FestiveProvider>
      </body>
    </html>
  );
}
