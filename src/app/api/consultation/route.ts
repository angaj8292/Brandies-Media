import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      service,
      preferredTime,
      monthlyBudget,
      websiteUrl,
      message,
      honeypot,
    } = body;

    // Bot detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Processed' }, { status: 200 });
    }

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || 'angajkumar2262002@gmail.com';

    // Email content
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0B1220 0%, #10223A 100%); padding: 24px; text-align: center; border-bottom: 3px solid #15D8E1;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🚀 New Strategy Consultation Request</h1>
          <p style="color: #15D8E1; margin: 6px 0 0 0; font-size: 14px; font-weight: bold;">Brandies Media Growth Engine</p>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <h2 style="font-size: 16px; color: #0B1220; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Lead Details</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>WhatsApp / Phone:</strong></td>
              <td style="padding: 8px 0; color: #0284c7; font-weight: 600;"><a href="tel:${phone}">${phone}</a> | <a href="https://wa.me/${phone.replace(/\D/g, '')}">Chat on WhatsApp</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Service Requested:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${service || 'General Omnichannel'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Preferred Time:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${preferredTime || 'Immediate'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Monthly Ad Budget:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${monthlyBudget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Website / Store:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${websiteUrl || 'Not provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f8fafc; border-left: 4px solid #15D8E1; padding: 12px 16px; border-radius: 6px;">
            <p style="margin: 0; font-size: 13px; color: #475569;"><strong>Notes / Goal:</strong></p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #1e293b;">${message || 'No additional note provided.'}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 12px; color: #64748b;">
          Submitted via Brandies Media Website · Call back SLA: 15-30 minutes.
        </div>
      </div>
    `;

    // Attempt sending via Nodemailer if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Brandies Growth Bot" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `🔥 [New Consultation] ${fullName} - ${service}`,
        html: htmlContent,
      });
    } else {
      // In development or when SMTP not yet provided, log to console for verification
      console.log('--- [NEW CONSULTATION LEAD RECEIVED] ---');
      console.log({ fullName, phone, email, service, preferredTime, monthlyBudget, websiteUrl, message });
      console.log(`Forwarded to destination: ${recipientEmail}`);
      console.log('----------------------------------------');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your strategy session has been booked. We will contact you shortly!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Consultation API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please contact us on WhatsApp.' },
      { status: 500 }
    );
  }
}
