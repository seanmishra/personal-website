import { createClient } from 'redis';

// Create Redis client
const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

let isConnected = false;

// Connect to Redis
const connectRedis = async () => {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
    } catch (error) {
      console.error('Redis connection error:', error);
      throw error;
    }
  }
  return client;
};

// Get view count for an article with base count of 112
export const getViewCount = async (slug: string): Promise<number> => {
  try {
    const redisClient = await connectRedis();
    const views = await redisClient.get(`views:${slug}`);
    const currentViews = views ? parseInt(views, 10) : 0;
    return currentViews + 112; // Always add base count of 112
  } catch (error) {
    console.error('Error getting view count:', error);
    return 112; // Return base count if Redis fails
  }
};

// Increment view count for an article
export const incrementViewCount = async (slug: string): Promise<number> => {
  try {
    const redisClient = await connectRedis();
    const newCount = await redisClient.incr(`views:${slug}`);
    return newCount + 112; // Return total including base count
  } catch (error) {
    console.error('Error incrementing view count:', error);
    return 112; // Return base count if Redis fails
  }
};

// Get all view counts for multiple articles
export const getMultipleViewCounts = async (slugs: string[]): Promise<Record<string, number>> => {
  try {
    const redisClient = await connectRedis();
    const viewCounts: Record<string, number> = {};
    
    // Use pipeline for better performance
    const pipeline = redisClient.multi();
    slugs.forEach(slug => {
      pipeline.get(`views:${slug}`);
    });
    
    const results = await pipeline.exec();
    
    slugs.forEach((slug, index) => {
      const result = results[index];
      const views = result ? parseInt(result as unknown as string, 10) : 0;
      viewCounts[slug] = views + 112; // Add base count of 112
    });
    
    return viewCounts;
  } catch (error) {
    console.error('Error getting multiple view counts:', error);
    // Return base counts if Redis fails
    const fallbackCounts: Record<string, number> = {};
    slugs.forEach(slug => {
      fallbackCounts[slug] = 112;
    });
    return fallbackCounts;
  }
};

// Get total views across all articles
export const getTotalViews = async (): Promise<number> => {
  try {
    const redisClient = await connectRedis();
    const keys = await redisClient.keys('views:*');
    
    let totalRedisViews = 0;
    
    if (keys.length > 0) {
      const pipeline = redisClient.multi();
      keys.forEach(key => {
        pipeline.get(key);
      });
      
      const results = await pipeline.exec();
      totalRedisViews = results.reduce((sum, result) => {
        return sum + (result ? parseInt(result as unknown as string, 10) : 0);
      }, 0);
    }
    
    // Add base count of 112 for each article that has been viewed
    return totalRedisViews + (keys.length * 112);
  } catch (error) {
    console.error('Error getting total views:', error);
    return 0;
  }
};

// Get total views across all articles with known article count
export const getTotalViewsWithBase = async (totalArticles: number): Promise<number> => {
  try {
    const redisClient = await connectRedis();
    const keys = await redisClient.keys('views:*');
    
    let totalRedisViews = 0;
    
    if (keys.length > 0) {
      const pipeline = redisClient.multi();
      keys.forEach(key => {
        pipeline.get(key);
      });
      
      const results = await pipeline.exec();
      totalRedisViews = results.reduce((sum, result) => {
        return sum + (result ? parseInt(result as unknown as string, 10) : 0);
      }, 0);
    }
    
    // Add base count of 112 for ALL articles (even those not yet viewed)
    return totalRedisViews + (totalArticles * 112);
  } catch (error) {
    console.error('Error getting total views:', error);
    // Return at least the base count for all articles
    return totalArticles * 112;
  }
};

export default client;
