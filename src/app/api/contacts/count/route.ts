import { neon } from '@neondatabase/serverless';

export async function GET() {
  const sql = neon(process.env.NEON_DATABASE_URL!);
  const rows = await sql`
    SELECT 
      COUNT(*) as total,
      COUNT(DISTINCT email) as unique_emails
    FROM contact_me
  `;
  return Response.json(rows[0]);
}