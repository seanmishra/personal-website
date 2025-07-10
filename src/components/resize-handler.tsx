'use client';

import { useEffect } from 'react';

export function ResizeHandler() {
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      // Clear existing timeout
      clearTimeout(resizeTimeout);
      
      // Set a new timeout to reload after resize stops
      resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 300); // Wait 300ms after resize stops before reloading
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return null;
}
