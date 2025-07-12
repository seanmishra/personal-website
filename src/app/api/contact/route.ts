import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectRole?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Build email content
    const emailContent = `
New contact form submission from ${data.name}

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company || 'Not specified'}
- Project/Role: ${data.projectRole || 'Not specified'}

Message:
${data.message}

---
This message was sent from the contact form on seanmishra.com
    `.trim();

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <contact@seanmishra.com>',
      to: ['hello@seanmishra.com'],
      replyTo: data.email,
      subject: `New Contact: ${data.name} - General Inquiry`,
      text: emailContent,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to user
    const autoReplyContent = `
Hi ${data.name},

Thanks for reaching out! I've received your message and will get back to you within 24 hours.

In the meantime, feel free to:
- Check out my work: https://seanmishra.com/projects
- Schedule a quick call: https://cal.com/seanmishra/15min
- Connect on LinkedIn: https://linkedin.com/in/seanmishra

Looking forward to discussing your opportunity!

Best regards,
Sean Mishra
Full-Stack Software Engineer
https://seanmishra.com

---
This is an automated response. Please don't reply to this email.
    `.trim();

    await resend.emails.send({
      from: 'Sean Mishra <hello@seanmishra.com>',
      to: [data.email],
      subject: 'Thanks for reaching out! - Sean Mishra',
      text: autoReplyContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
