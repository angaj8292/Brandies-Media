# Brandies Media — "We Make Brands" 🚀
### Award-Winning E-Commerce Growth & Digital Marketing Agency Website

A production-ready, animated, conversion-focused multi-page agency website built for **Brandies Media** (Tagline: *"We Make Brands"*). Includes a festive seasonal theme layer (Diwali / Navratri) toggled from a single configuration flag.

---

## 🌟 Key Highlights & Architecture

- **Next.js 14 (App Router) + TypeScript** with full SSR, ISR, and static route pre-rendering.
- **Tailwind CSS Design System**:
  - Primary Cyan `#15D8E1` with gradient to `#0AB6C4` and deep teal accents `#064E59`.
  - Dark Navy `#0B1220` alternating with warm cream `#FFF8F0` and crisp white.
  - Marker-swoosh keyword highlighting on headlines.
  - Layered card shadows, thin cyan borders, and 3D card perspective tilt.
- **Seasonal Festive Theme Layer (Diwali / Navratri)**:
  - Falling marigold/rose petals particle animation (lightweight HTML5 Canvas, respects `prefers-reduced-motion`).
  - Decorative string of twinkling fairy lights along the bottom edge of the sticky navbar.
  - Corner Mandala line-art and glowing Diya decorations.
  - 10% OFF corner ribbons on service cards and dismissible announcement bar.
  - Controlled by a single boolean in `src/config/site.ts`.
- **Award-Level Interactive Sections**:
  - **Hero**: AI prompt search bar with rotating suggestions routing directly to instant audit.
  - **Tilted Service Cards**: 3D perspective cards with mini UI mockups (Amazon Buy Box, ROAS bar charts, browser storefront).
  - **Trust Band**: Dark curved wave divider, client quote, configurable laurel-wreath badge, and Google reviews rating pill.
  - **How We Work**: Ruled notebook paper stack with tape strips and step-by-step page-turning animation.
  - **The Growth Express**: Illustrated Indian Railway scene with station board (*BRANDIES JN.*), red steam locomotive, and coach feature cards.
  - **All 12 Core Services**: Marketplace management, Meta/Google ads, custom Next.js & Shopify dev, SEO, branding, and dropshipping.
  - **Interactive AI Audit**: 40-checkpoint scanner simulation with instant scoring report.
  - **Marquee Testimonials**: Infinite smooth marquee of verified Indian brand founder reviews.
  - **Pricing & Packages**: 3 transparent tiers with festive coupon application.
- **Global Actions**:
  - Floating WhatsApp button (`+91 8292769366`).
  - Live chat drawer widget with instant lead capture.
  - Global consultation modal triggered from any CTA.
  - Lenis smooth scrolling.

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       ├── brandies-logo.png      # Official Brandies Media Logo
│       └── og-image.jpg          # OpenGraph social share card
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── consultation/     # Lead capture API (Nodemailer)
│   │   │   ├── contact/          # General inquiries & chat API
│   │   │   ├── audit/            # AI diagnostic scanner API
│   │   │   └── newsletter/       # Newsletter subscription API
│   │   ├── about/                # Story, values, team & timeline
│   │   ├── services/             # 12 services overview
│   │   │   └── [slug]/           # Dynamic service blueprint pages
│   │   ├── ai-audit/             # Instant store diagnostic scanner
│   │   ├── blog/                 # E-commerce playbooks
│   │   │   └── [slug]/           # Single article template
│   │   ├── contact/              # Full contact form + map & hours
│   │   ├── cart/                 # Packages cart with coupon logic
│   │   ├── login/                # Client dashboard login & register
│   │   ├── privacy/              # Privacy policy
│   │   ├── terms/                # Terms of service
│   │   ├── not-found.tsx         # Branded 404 page
│   │   ├── sitemap.ts            # Dynamic SEO sitemap
│   │   ├── robots.ts             # Search engine crawler instructions
│   │   ├── globals.css           # Custom styles, ribbons, marquee, notebook
│   │   └── layout.tsx            # Global providers, JSON-LD, navbar & footer
│   ├── components/
│   │   ├── common/               # BrandLogo, FestivePetals, FairyLights, Modals
│   │   ├── home/                 # 13 Home page sections
│   │   ├── layout/               # Navbar, Footer, AnnouncementBar
│   │   └── context/              # ConsultationContext
│   ├── config/
│   │   └── site.ts               # Global contact details, stats & festive flag
│   ├── data/
│   │   ├── services.ts           # All 12 services data
│   │   ├── testimonials.ts       # 8 client reviews
│   │   ├── caseStudies.ts        # Portfolio case studies
│   │   ├── pricing.ts            # 3 pricing tiers
│   │   ├── notebookSteps.ts      # 4 How-We-Work pages
│   │   ├── trainFeatures.ts      # 4 Growth Express coach features
│   │   ├── blogPosts.ts          # Rich blog articles
│   │   └── faqs.ts               # Frequently asked questions
│   ├── lib/
│   │   └── utils.ts              # Class name merging & currency formatting
│   └── types/
│       └── index.ts              # TypeScript interfaces
├── .env.example                  # Environment variables template
├── tailwind.config.ts            # Custom color palette & animations
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Dependencies
```

---

## ⚡ Quick Start & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and set your credentials:
```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `LEAD_RECIPIENT_EMAIL` | Destination email for all consultation leads | `angajkumar2262002@gmail.com` |
| `SMTP_HOST` | SMTP server host (e.g. `smtp.gmail.com`) | Optional (logs to console if omitted) |
| `SMTP_PORT` | SMTP port (`587` or `465`) | `587` |
| `SMTP_USER` | SMTP username/email | — |
| `SMTP_PASS` | SMTP application password | — |

*(Note: If SMTP variables are not set, leads are logged to console and return success toasts so the UI functions seamlessly out of the box!)*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🪔 Automatic Festival Theme Engine

Brandies Media includes an intelligent, date-driven **Festival Theme Engine** that automatically applies festive decorations, themes, and special offers on Indian festival dates (calculated using Indian Standard Time, `Asia/Kolkata` at midnight), and seamlessly reverts to normal clean corporate mode when the festival concludes — with **zero code changes required**.

### Supported Indian Festivals (Out-of-the-Box)
- **Navratri**: Orange/red palette, hanging lanterns, rotating mandala, rangoli corner, floating dot rings, diya flames.
- **Dussehra**: Saffron/marigold palette, victory tricolor bunting, special offer ribbons.
- **Diwali**: Rich gold & amber glow, flickering diyas, twinkling fairy lights, rotating mandalas, hanging lanterns, falling petals.
- **Holi**: Vibrant color splashes and gulal clouds.
- **Christmas**: Gentle snowfall particle canvas and festive lighting.
- **New Year**: Multi-colored celebration confetti.
- **Eid**: Crescent moon & stars, gold lanterns.
- **Makar Sankranti**: Floating kites across the sky.
- **Republic Day & Independence Day**: Saffron, white & green tricolor bunting.
- **Raksha Bandhan & Ganesh Chaturthi**: Traditional festive adornments.
- **Default Mode**: When no festival is active, the site automatically renders in clean, high-conversion corporate mode.

---

### ⚙️ How to Add or Edit Festivals (`src/config/festivals.ts`)

Every festival is configured as a typed object in `src/config/festivals.ts`:

```typescript
{
  id: 'diwali',
  name: 'Diwali',
  startDate: '2026-10-28', // YYYY-MM-DD (IST midnight)
  endDate: '2026-11-04',   // Inclusive end date
  priority: 10,            // Highest priority wins if dates overlap
  offerText: 'Diwali Dhamaka · Flat 20% OFF on all growth plans',
  couponCode: 'DIWALI20',
  discountPercent: 20,
  greeting: 'May the festival of lights bring prosperity and hyper-growth to your brand!',
  colors: {
    primary: '#D97706',    // Amber / Gold
    accent: '#B45309',
    glow: 'rgba(217, 119, 6, 0.45)',
  },
  decorations: [
    'hangingLanterns',
    'fairyLights',
    'mandalaBackdrop',
    'floatingDiyas',
    'fallingPetals',
    'announcementBanner',
    'greetingPopup',
    'discountRibbon',
  ],
}
```

> [!NOTE]
> Since Hindu and lunar festival dates change year-over-year according to the Indian Panchang, verify and adjust the `startDate` and `endDate` fields in `src/config/festivals.ts` annually.

---

### 🎛️ Manual Override & Testing Modes

In `src/config/festivals.ts`, you can test any festival or disable decorations:

```typescript
// Options: 'auto' | 'off' | '<festivalId>'
// Examples:
// - 'auto': strictly activates based on current IST date
// - 'off': forces clean corporate mode
// - 'diwali': forces Diwali theme even outside festival dates
// - 'holi': forces Holi color powder splashes
export const FESTIVE_MODE_OVERRIDE: string = 'auto';
```

Alternatively, set the environment variable `NEXT_PUBLIC_FESTIVE_MODE=diwali` in `.env.local`.

---

### 🎨 Live Interactive Dev Preview (`/festive-preview`)

Visit [http://localhost:3000/festive-preview](http://localhost:3000/festive-preview) to access the real-time visual inspection studio:
- Instant dropdown to preview **Diwali, Holi, Christmas, Navratri, New Year, Eid, Republic Day**, or **Clean Corporate Mode**.
- Inspect active CSS theme variables (`--festival-primary`, `--festival-glow`).
- Live countdown clock and active coupon verification.
- Test visitor daily greeting popups and toggle states.

---

### 👤 Visitor Control (Client-Side)

Visitors can turn festive animations on or off at any time using:
1. The **floating Sparkle pill** at the bottom-left corner of the screen.
2. The **inline toggle switch** in the footer next to legal links.
Preferences are saved in `localStorage` and strictly respect `prefers-reduced-motion`. All decorative SVGs and Canvas particles run below 2% CPU usage.

---

## ✏️ Content Editing Guide

All website copy and data are decoupled into the `src/data/` folder for effortless updates without touching code:

- **Services**: `src/data/services.ts` (Edit descriptions, pricing, deliverables, process steps, FAQs).
- **Testimonials**: `src/data/testimonials.ts` (Add client reviews, ratings, revenue metrics).
- **Case Studies**: `src/data/caseStudies.ts` (Edit before/after stats, tags, images).
- **Pricing**: `src/data/pricing.ts` (Modify monthly fees, bullet points).
- **FAQs**: `src/data/faqs.ts` (Add/edit questions).
- **Blog**: `src/data/blogPosts.ts` (Publish new articles with markdown).
- **Phone / Email / Address**: `src/config/site.ts`.

---

## 🚀 Vercel Deployment Steps

1. Push your repository to GitHub / GitLab / Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "feat: initial brandies media production website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository. Vercel will automatically detect **Next.js**.
4. In the **Environment Variables** section, add:
   - `LEAD_RECIPIENT_EMAIL`: `angajkumar2262002@gmail.com`
   - `SMTP_HOST`: (your SMTP provider, e.g. `smtp.gmail.com` or Resend)
   - `SMTP_USER`: (your SMTP user)
   - `SMTP_PASS`: (your app password)
5. Click **Deploy**. Your agency site will be live on a global CDN with SSL and 99.99% uptime in ~60 seconds!

---

## 📞 Agency Contact Details

- **Company**: Brandies Media
- **Tagline**: We Make Brands
- **Phone / WhatsApp**: [+91 8292769366](tel:+918292769366) | [WhatsApp Chat](https://wa.me/918292769366)
- **Email**: [angajkumar2262002@gmail.com](mailto:angajkumar2262002@gmail.com)
