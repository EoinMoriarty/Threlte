import { json } from '@sveltejs/kit';
import { sql } from '$lib/server/db';

export async function GET() {
    try {
        // Test query to ensure DB is responding
        const result = await sql`SELECT 'Hello World from Postgres' as message`;
        return json({ status: 'success', data: result[0].message });
    } catch (error) {
        return json({ status: 'error', message: (error as Error).message }, { status: 500 });
    }
}