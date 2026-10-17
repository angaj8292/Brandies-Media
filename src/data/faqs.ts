export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    question: 'How quickly can Brandies Media start scaling our sales?',
    answer:
      'Our standard onboarding takes 5 to 7 business days. During this initial sprint, we audit your existing marketplace accounts and ad accounts, install server-side conversion tracking (CAPI/GA4), optimize your product feeds, and launch the first wave of high-converting campaigns. Most clients observe measurable improvements in ROAS and sales velocity within the first 14 to 21 days.',
  },
  {
    question: 'How does Brandies Media differ from traditional digital marketing agencies?',
    answer:
      'Unlike traditional agencies that only manage ads and report vanity metrics like "impressions" or "clicks", Brandies Media is an end-to-end e-commerce growth partner. We handle listing creation, A+ content, catalog SEO, supply chain FBA planning, daily PPC, Meta ads, custom web development, and WhatsApp retention. We hold ourselves accountable to bottom-line profitability, net revenue, and blended ROAS.',
  },
  {
    question: 'Do you manage Amazon, Flipkart and Meesho all together?',
    answer:
      'Yes! We provide complete cross-platform marketplace management. Our specialized marketplace specialists handle brand registry, category approvals, listing optimization, daily inventory sync, deals/promotions, negative review appeals, and sponsored advertising across Amazon India, Flipkart, and Meesho.',
  },
  {
    question: 'How do you help reduce Cash on Delivery (COD) Return to Origin (RTO)?',
    answer:
      'RTO is the biggest profit killer for Indian e-commerce. We implement automated WhatsApp confirmation bots with OTP verification immediately after order placement, identify high-risk pin codes using fraud-detection algorithms, incentivize prepaid UPI payments at checkout, and trigger real-time dispatch tracking notifications.',
  },
  {
    question: 'What is the minimum ad spend required to work with Brandies Media?',
    answer:
      'For performance marketing (Meta Ads / Google Ads), we recommend starting with a minimum monthly ad budget of ₹30,000 to ₹50,000. For marketplace management (Amazon/Flipkart PPC), an ad budget of ₹15,000 to ₹25,000/month is recommended to fuel algorithmic velocity and secure top-of-search placements.',
  },
  {
    question: 'Who will be my primary point of contact?',
    answer:
      'You are assigned a Dedicated Growth Account Manager who serves as your single point of contact. You also get direct access to our private Slack/WhatsApp group where our ads strategists, copywriters, and developers communicate with you daily.',
  },
  {
    question: 'Are there any long-term locking contracts?',
    answer:
      'No. We operate on month-to-month retainers because we believe our results should retain you, not a legal paper. We do recommend an initial 90-day window to fully allow creative testing, algorithmic learning, and SEO compound cycles to reach their peak return.',
  },
  {
    question: 'How does the Festive Special 10% Discount work?',
    answer:
      'During the active festive season period, entering coupon code "FESTIVE10" or booking a consultation locks in a recurring 10% discount on all monthly agency retainers and one-time web development packages.',
  },
];
