import { NextRequest, NextResponse } from 'next/server';

// Placeholder for Resend integration
// In production, this will use the Resend SDK with API key from env variables

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

    // TODO: Integrate Resend SDK here
    // For now, just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      practiceArea,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@lawyercapitalva.com',
    //   to: 'info@thehuman.capital',
    //   subject: `New Lead: ${name}`,
    //   html: `<h2>${name}</h2><p>Company: ${company}</p><p>Email: ${email}</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: 'Contact form submitted' },
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
