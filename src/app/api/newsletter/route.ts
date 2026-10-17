import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      );
    }

    console.log(`[Newsletter Subscriber Added]: ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Subscribed to Brandies Growth Dispatch!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
