import { useEffect, useLayoutEffect } from 'react';

// Use useLayoutEffect on the client and useEffect on the server
// This prevents hydration warnings while still allowing access to DOM APIs
export const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
