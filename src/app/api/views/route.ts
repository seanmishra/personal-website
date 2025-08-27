import { NextRequest, NextResponse } from 'next/server';
import { getViewCount, incrementViewCount, getMultipleViewCounts, getTotalViews } from '@/lib/redis';

// GET /api/views - Get view counts for one or more articles
// GET /api/views?slug=article-slug - Get view count for specific article
// GET /api/views?slugs=slug1,slug2,slug3 - Get view counts for multiple articles
// GET /api/views?total=true - Get total views across all articles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const slugsParam = searchParams.get('slugs');
    const total = searchParams.get('total');

    // Return total views across all articles
    if (total === 'true') {
      const totalViews = await getTotalViews();
      return NextResponse.json({ totalViews });
    }

    // Return view counts for multiple articles
    if (slugsParam) {
      const slugs = slugsParam.split(',').filter(s => s.trim().length > 0);
      if (slugs.length === 0) {
        return NextResponse.json(
          { error: 'No valid slugs provided' },
          { status: 400 }
        );
      }
      
      const viewCounts = await getMultipleViewCounts(slugs);
      return NextResponse.json({ viewCounts });
    }

    // Return view count for a specific article
    if (slug) {
      const viewCount = await getViewCount(slug);
      return NextResponse.json({ slug, viewCount });
    }

    return NextResponse.json(
      { error: 'Please provide either slug, slugs, or total parameter' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Views GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/views - Increment view count for an article
export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: 'Article slug is required' },
        { status: 400 }
      );
    }

    // Basic validation for slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: 'Invalid slug format' },
        { status: 400 }
      );
    }

    const newViewCount = await incrementViewCount(slug);
    
    return NextResponse.json({
      slug,
      viewCount: newViewCount,
      message: 'View count incremented'
    });

  } catch (error) {
    console.error('Views POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
