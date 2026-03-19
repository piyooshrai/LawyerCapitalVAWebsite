import { NextRequest, NextResponse } from 'next/server';

// Contact form endpoint with Resend integration
// Add RESEND_API_KEY to .env.local for production

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, practiceArea, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      practiceArea,
      message,
      timestamp: new Date().toISOString(),
    });

    // Resend integration (production)
    if (process.env.RESEND_API_KEY) {
      try {
        // Uncomment after installing resend package
        // const { Resend } = require('resend');
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'noreply@lawyercapitalva.com',
        //   to: 'info@thehuman.capital',
        //   replyTo: email,
        //   subject: `New Lawyer Capital VA Consultation Request: ${name}`,
        //   html: `
        //     <h2>New Consultation Request</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Company:</strong> ${company}</p>
        //     <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        //     <p><strong>Practice Area:</strong> ${practiceArea || 'N/A'}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${message}</p>
        //   `,
        // });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
