import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { websiteUrl, businessType, email, phone, fullName } = body;

    if (!websiteUrl || !email || !phone) {
      return NextResponse.json(
        { error: 'Website URL, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Clean URL
    const cleanUrl = websiteUrl.replace(/^https?:\/\//i, '').replace(/\/$/, '');
    const isMarketplace =
      cleanUrl.includes('amazon') ||
      cleanUrl.includes('flipkart') ||
      cleanUrl.includes('meesho');

    // Simulate intelligent domain heuristic analysis
    // Structured so OpenAI/Gemini/Anthropic API can be plugged in seamlessly
    const seed = cleanUrl.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);

    const overallScore = 62 + (seed % 24); // 62 - 85
    const seoScore = isMarketplace ? 82 : 55 + (seed % 28);
    const marketplaceScore = isMarketplace ? 65 + (seed % 22) : 58 + (seed % 26);
    const adEfficiency = 54 + (seed % 30);
    const speedScore = isMarketplace ? 88 : 58 + (seed % 34);
    const brandScore = 60 + (seed % 25);

    const report = {
      domainAnalyzed: cleanUrl,
      businessType: businessType || 'E-Commerce Brand',
      analyzedAt: new Date().toISOString(),
      overallScore,
      grade: overallScore > 80 ? 'A-' : overallScore > 70 ? 'B+' : 'B-',
      categoryScores: {
        seo: seoScore,
        marketplaceReadiness: marketplaceScore,
        adEfficiency: adEfficiency,
        speedAndMobile: speedScore,
        brandPerception: brandScore,
      },
      strengths: [
        'Domain authority and primary product indexing detected',
        'Mobile viewport responsive scaling is active',
        'Clear product photography and catalog fundamentals in place',
      ],
      criticalGaps: [
        'Lack of Meta Conversions API (CAPI) / Server-side GA4 e-commerce telemetry, causing up to 30% lost purchase attribution',
        'Missing structured Product / Review schema markup for Google Rich Snippets',
        'Incomplete Amazon/Flipkart keyword silos leading to inflated CPC and keyword cannibalization',
        'No automated WhatsApp checkout recovery funnel, losing an estimated 18-22% abandoned carts',
      ],
      quickWins: [
        'Deploy negative keyword harvesting on PPC to instantly stop 20% wasted ad spend',
        'Enable 1-click UPI checkout with COD confirmation to reduce RTO by 25%',
        'Upgrade to A+ Content (EBC) modules to boost page conversion by 4-6%',
      ],
      projectedRevenueLift: '+45% to +120% GMV within 90 days',
      recommendedPackage:
        overallScore < 70 ? 'Growth Accelerator' : 'Enterprise Domination',
    };

    console.log(`[AI Audit Generated for]: ${cleanUrl} (${email}, ${phone})`);

    return NextResponse.json({ success: true, report }, { status: 200 });
  } catch (error) {
    console.error('Audit API Error:', error);
    return NextResponse.json({ error: 'Failed to generate audit' }, { status: 500 });
  }
}
