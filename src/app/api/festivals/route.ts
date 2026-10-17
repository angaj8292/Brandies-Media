import { NextRequest, NextResponse } from 'next/server';

interface CalendarificHoliday {
  name: string;
  description?: string;
  country?: { id: string; name: string };
  date: {
    iso: string; // YYYY-MM-DD
    datetime: { year: number; month: number; day: number };
  };
  type: string[];
}

// In-memory 24-hour cache
interface CacheEntry {
  timestamp: number;
  holidays: CalendarificHoliday[];
}

const cache: Map<number, CacheEntry> = new Map();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get('year');
  const now = new Date();
  const year = yearParam ? parseInt(yearParam, 10) : now.getFullYear();

  const apiKey = process.env.CALENDARIFIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        source: 'local-fallback',
        year,
        holidays: [],
        message: 'No CALENDARIFIC_API_KEY configured. Falling back to local festival dates.',
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        },
      }
    );
  }

  // Check 24-hour in-memory cache
  const cached = cache.get(year);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return NextResponse.json({
      source: 'calendarific-cache',
      year,
      holidays: cached.holidays,
    });
  }

  try {
    const url = `https://calendarific.com/api/v2/holidays?api_key=${encodeURIComponent(
      apiKey
    )}&country=IN&year=${year}&type=national,religious`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Next.js fetch cache 24h
    });

    if (!res.ok) {
      throw new Error(`Calendarific responded with status ${res.status}`);
    }

    const data = await res.json();
    const holidays: CalendarificHoliday[] = data?.response?.holidays || [];

    cache.set(year, {
      timestamp: Date.now(),
      holidays,
    });

    return NextResponse.json(
      {
        source: 'calendarific',
        year,
        holidays,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        },
      }
    );
  } catch (error) {
    console.error('[API /api/festivals] Error fetching from Calendarific:', error);
    return NextResponse.json(
      {
        source: 'error-fallback',
        year,
        holidays: [],
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 200 }
    );
  }
}
