import { NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Brevo is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Get recipient email from environment or use default
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_TO || 'kariem.gerges@outlook.com';
    // Get sender email from environment or use default
    const fromEmail = process.env.EMAIL_FROM || process.env.BREVO_FROM_EMAIL || 'noreply@example.com';

    // Log email details for debugging
    console.log('Sending email:', {
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`
    });

    // Initialize Brevo
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    // Prepare email content for Brevo
    const textContent = `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d97706; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          New Contact Form Message
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This message was sent from your portfolio contact form.</p>
          <p>Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `;

    // Create email send request
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `New Contact Form Message from ${name}`;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.textContent = textContent;
    sendSmtpEmail.sender = { name: 'Portfolio Contact Form', email: fromEmail };
    sendSmtpEmail.to = [{ email: recipientEmail }];
    sendSmtpEmail.replyTo = { email: email };

    // Send email using Brevo
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log('Email sent successfully with Brevo. Message ID:', data?.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: data?.messageId
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        message: error.message || 'An unexpected error occurred',
        details: error.toString()
      },
      { status: 500 }
    );
  }
}

