'use client';

import { useEffect } from 'react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    // Only increment view count on client side
    const incrementView = async () => {
      try {
        await fetch('/api/views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });
      } catch (error) {
        console.error('Failed to increment view count:', error);
      }
    };

    // Small delay to ensure the component is mounted and the user is actually viewing the article
    const timer = setTimeout(incrementView, 1000);
    
    return () => clearTimeout(timer);
  }, [slug]);

  // This component doesn't render anything visible
  return null;
}
