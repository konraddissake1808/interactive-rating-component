import { getData, saveData } from '../../../lib/data';

export async function GET() {
    const ratings = getData();
    return new Response(JSON.stringify(ratings), { status: 200 });
}

export async function POST(request: Request) {
    const { rating } = await request.json();
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
        return new Response(JSON.stringify({ message: 'Invalid rating value' }), { status: 400 });
    }
    const ratings = getData();
    ratings.push(rating);
    saveData(ratings);
    return new Response(JSON.stringify({ message: 'Rating saved successfully' }), { status: 201 });
}