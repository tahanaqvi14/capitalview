import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) return NextResponse.json({ result: [] });

  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/search?q=${encodeURIComponent(query)}&token=${process.env.FINHUB_API_KEY}`,
      { cache: 'no-store' }
    );

    if (!res.ok) throw new Error('Finnhub fetch error');

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Finnhub fetch failed:', err);
    return NextResponse.json({ result: [] });
  }
}
