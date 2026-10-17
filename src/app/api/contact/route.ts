import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, budget, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message sent' });
    }

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || 'angajkumar2262002@gmail.com';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px;">
        <h2 style="color: #0B1220; border-bottom: 2px solid #15D8E1; padding-bottom: 10px;">New Contact / Chat Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
        <p><strong>Budget:</strong> ${budget || 'Flexible'}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f1f5f9; padding: 12px; border-left: 4px solid #15D8E1; border-radius: 4px;">
          ${message || 'No message provided'}
        </blockquote>
      </div>
    `;

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
        from: `"Brandies Contact Form" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `📩 [Contact Inquiry] ${fullName} (${service || 'General'})`,
        html: htmlContent,
      });
    } else {
      console.log('--- [NEW CONTACT INQUIRY RECEIVED] ---');
      console.log({ fullName, phone, email, service, budget, message });
      console.log(`Forwarded to destination: ${recipientEmail}`);
      console.log('--------------------------------------');
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
