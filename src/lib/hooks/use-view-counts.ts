import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

interface ViewCounts {
  [slug: string]: number;
}

interface UseViewCountsReturn {
  viewCounts: ViewCounts;
  loading: boolean;
  error: string | null;
  incrementView: (slug: string) => Promise<void>;
  refreshViewCounts: (slugs: string[]) => Promise<void>;
}

// Add simple in-memory cache to prevent excessive API calls
const cache = {
  viewCounts: {} as ViewCounts,
  lastFetch: 0,
  CACHE_DURATION: 30000, // 30 seconds
};

export const useViewCounts = (initialSlugs: string[] = []): UseViewCountsReturn => {
  const [viewCounts, setViewCounts] = useState<ViewCounts>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize the slugs to prevent unnecessary re-fetches
  const slugsString = useMemo(() => initialSlugs.sort().join(','), [initialSlugs]);
  const slugsArray = useMemo(() => slugsString ? slugsString.split(',') : [], [slugsString]);

  // Check if cache is still valid
  const isCacheValid = useCallback(() => {
    return Date.now() - cache.lastFetch < cache.CACHE_DURATION;
  }, []);

  // Fetch view counts for multiple articles
  const refreshViewCounts = useCallback(async (slugs: string[]) => {
    if (slugs.length === 0) return;

    // Use cache if available and valid
    if (isCacheValid() && Object.keys(cache.viewCounts).length > 0) {
      setViewCounts(cache.viewCounts);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/views?slugs=${slugs.join(',')}`);
      if (!response.ok) {
        throw new Error('Failed to fetch view counts');
      }

      const data = await response.json();
      
      // Update cache
      cache.viewCounts = data.viewCounts;
      cache.lastFetch = Date.now();
      
      setViewCounts(data.viewCounts);

      // Note: We no longer fetch total views here as it's calculated 
      // from individual article views in the components that need it
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching view counts:', err);
      
      // Use cached data as fallback
      if (Object.keys(cache.viewCounts).length > 0) {
        setViewCounts(cache.viewCounts);
      }
    } finally {
      setLoading(false);
    }
  }, [isCacheValid]);

  // Increment view count for a specific article
  const incrementView = useCallback(async (slug: string) => {
    try {
      const response = await fetch('/api/views', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      if (!response.ok) {
        throw new Error('Failed to increment view count');
      }

      const data = await response.json();
      
      // Update local state and cache
      const newViewCounts = {
        ...viewCounts,
        [slug]: data.viewCount
      };
      
      setViewCounts(newViewCounts);
      cache.viewCounts = newViewCounts;
    } catch (err) {
      console.error('Error incrementing view count:', err);
      // Don't set error state for increment failures to avoid disrupting user experience
    }
  }, [viewCounts]);

  // Use ref to track if we've already fetched for these slugs and prevent debounced calls
  const fetchedSlugsRef = useRef<string>('');
  const fetchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initial load of view counts - only when slugs actually change, with debouncing
  useEffect(() => {
    if (slugsArray.length > 0 && slugsString !== fetchedSlugsRef.current) {
      // Clear any existing timeout
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }

      // Debounce the fetch to prevent rapid successive calls
      fetchTimeoutRef.current = setTimeout(() => {
        fetchedSlugsRef.current = slugsString;
        refreshViewCounts(slugsArray);
      }, 100); // 100ms debounce
    }

    // Cleanup timeout on unmount
    return () => {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, [slugsString, slugsArray, refreshViewCounts]);

  return {
    viewCounts,
    loading,
    error,
    incrementView,
    refreshViewCounts,
  };
};

// Hook for a single article's view count
export const useViewCount = (slug: string) => {
  const [viewCount, setViewCount] = useState<number>(112); // Start with base count
  const [loading, setLoading] = useState(false);

  const fetchViewCount = useCallback(async () => {
    if (!slug) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/views?slug=${slug}`);
      if (response.ok) {
        const data = await response.json();
        setViewCount(data.viewCount);
      }
    } catch (err) {
      console.error('Error fetching view count:', err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  const incrementView = useCallback(async () => {
    if (!slug) return;

    try {
      const response = await fetch('/api/views', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      if (response.ok) {
        const data = await response.json();
        setViewCount(data.viewCount);
      }
    } catch (err) {
      console.error('Error incrementing view count:', err);
    }
  }, [slug]);

  useEffect(() => {
    fetchViewCount();
  }, [fetchViewCount]);

  return {
    viewCount,
    loading,
    incrementView,
  };
};
