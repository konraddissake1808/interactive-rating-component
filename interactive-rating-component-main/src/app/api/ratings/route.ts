import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('rating_component_db');
    
    const data = await db.collection('ratings').find({}).toArray();
    
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { number } = await request.json();
    const client = await clientPromise;
    const db = client.db('rating_component_db');
    await db.collection('ratings').insertOne({
      number,
    });

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 },
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}