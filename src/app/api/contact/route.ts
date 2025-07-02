import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const runtime = 'edge';

export async function POST(req: Request) {
  if (!process.env.NEON_DATABASE_URL) {
    console.error('Database URL is not defined');
    return NextResponse.json(
      { error: 'Database configuration missing' },
      { status: 500 }
    );
  }

  const sql = neon(process.env.NEON_DATABASE_URL);
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

  try {
    const body = await req.json();
    console.log('Request body:', body);

    const { name, email, phone, address, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    const metadata = {
      ip,
      user_agent: req.headers.get('user-agent') || 'unknown',
      submitted_at: new Date().toISOString()
    };

    // Try a simpler query first to test connection
    await sql`SELECT 1`;

    const result = await sql`
      INSERT INTO contact_me 
        (name, email, phone, address, subject, message, metadata)
      VALUES 
        (${name}, ${email}, ${phone}, ${address}, ${subject}, ${message}, ${JSON.stringify(metadata)}::jsonb)
      RETURNING id
    `;
    
    console.log('Insert result:', result);
    
    if (!result || result.length === 0) {
      throw new Error('No result returned from insert');
    }

    return NextResponse.json({ 
      success: true, 
      id: result[0].id,
      message: 'Contact form submitted successfully'
    });
    
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to submit form',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}