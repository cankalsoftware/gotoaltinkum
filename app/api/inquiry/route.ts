import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      businessName,
      businessCategory,
      contactName,
      phone,
      message,
      selectedTier,
    } = body;

    if (!businessName) {
      return NextResponse.json(
        { error: 'Business name is required.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true';
    const from = process.env.SMTP_FROM || `GoToAltinkum <info@gotoaltinkum.com>`;
    const to = process.env.NOTIFICATION_EMAIL || 'info@gotoaltinkum.com';

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #f59e0b 100%); padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Commercial Inquiry</h1>
          <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">GoToAltinkum.com Business Advertising Portal</p>
        </div>
        
        <div style="padding: 24px; color: #334155;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong>🏢 Business Name:</strong> ${businessName}</p>
            <p style="margin: 0 0 8px;"><strong>🏷️ Category:</strong> ${businessCategory || 'Not specified'}</p>
            <p style="margin: 0 0 8px;"><strong>👤 Contact Person:</strong> ${contactName || 'Not specified'}</p>
            <p style="margin: 0 0 8px;"><strong>📞 Phone / WhatsApp:</strong> ${phone || 'Not specified'}</p>
            <p style="margin: 0;"><strong>⭐ Selected Package:</strong> ${selectedTier || 'General Inquiry'}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 8px; color: #0f172a; font-size: 16px;">💬 Message / Advertising Details:</h3>
            <div style="background: #ffffff; border-left: 4px solid #0284c7; padding: 12px 16px; color: #475569; font-size: 14px; line-height: 1.6; background-color: #f0f9ff;">
              ${message ? message.replace(/\n/g, '<br/>') : 'No additional message provided.'}
            </div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
            <p style="margin: 0;">Inquiry submitted via <a href="https://gotoaltinkum.com" style="color: #0284c7; text-decoration: none;">GoToAltinkum.com</a></p>
            <p style="margin: 4px 0 0;">Didim, Aydın, Türkiye</p>
          </div>
        </div>
      </div>
    `;

    // If SMTP is configured with real credentials, send via nodemailer
    const isConfigured = host && host !== 'smtp.your-email-provider.com' && user && pass && pass !== 'your_smtp_password_here';

    if (isConfigured) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from,
        to,
        subject: `[GoToAltinkum Inquiry] ${businessName} - ${businessCategory}`,
        text: `New Inquiry from ${businessName}\nCategory: ${businessCategory}\nContact: ${contactName}\nPhone: ${phone}\nPackage: ${selectedTier}\nMessage:\n${message}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: 'Your advertising inquiry has been sent successfully to info@gotoaltinkum.com!',
      });
    } else {
      // Fallback for local testing before real SMTP credentials are set in .env.local
      console.log('--- [GoToAltinkum Demo Mode Inquiry Received] ---');
      console.log({
        businessName,
        businessCategory,
        contactName,
        phone,
        selectedTier,
        message,
        recipient: to,
      });

      return NextResponse.json({
        success: true,
        isDemo: true,
        message:
          'Inquiry received! (Note: Update SMTP_HOST, SMTP_USER and SMTP_PASS in .env.local to send live emails).',
      });
    }
  } catch (error: any) {
    console.error('Failed to process advertising inquiry:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send inquiry. Please email info@gotoaltinkum.com directly.' },
      { status: 500 }
    );
  }
}
