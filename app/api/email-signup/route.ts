import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const firmName = formData.get('firmName') as string;

    if (!email || !firmName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: In production, send email via Resend or similar service
    // For now, just log and return success
    console.log(`Email signup: ${email} from ${firmName}`);

    // Redirect to success page or return JSON response
    return NextResponse.redirect(new URL('/resources/delegation-guide?success=true', request.url));
  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
