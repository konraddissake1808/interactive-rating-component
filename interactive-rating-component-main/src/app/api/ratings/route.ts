import { getData } from '../../../lib/data';
import fs from 'fs';

export async function GET() {
    const ratings = getData();
    return new Response(JSON.stringify(ratings), { status: 200 });
}

export async function POST(request: Request) {
    const { rating } = await request.json();
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
        return new Response(JSON.stringify({ message: 'Invalid rating value' }), { status: 400 });
    }
    
    try {
        const ratings = getData();
        ratings.push(rating);
        fs.writeFileSync(process.cwd + '../../data/data.json', JSON.stringify(ratings, null, 2));
        return new Response(JSON.stringify({ message: 'Rating saved successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error saving data:', error);
        //return false;
    }
}