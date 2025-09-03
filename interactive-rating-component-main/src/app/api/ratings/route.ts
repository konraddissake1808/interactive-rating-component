import { getData, saveData } from '../../../lib/data';

export async function GET() {
    const ratings = getData();
    return new Response(JSON.stringify(ratings), { status: 200 });
}
