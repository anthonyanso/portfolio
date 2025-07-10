import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Use environment variables for security
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO subscriptions (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
      [email]
    );
    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }
    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
