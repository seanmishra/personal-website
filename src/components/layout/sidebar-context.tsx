'use client';

import { createContext, useContext, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/use-isomorphic-layout-effect';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  sidebarWidth: string;
  isIconsOnly: boolean;
  isMobileOverlay: boolean;
  shouldShowOverlay: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

interface SidebarProviderProps {
  children: React.ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed by default
  const [screenMode, setScreenMode] = useState<'mobile' | 'desktop-icons' | 'desktop-full'>('desktop-full');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useIsomorphicLayoutEffect(() => {
    // Check screen size and set appropriate sidebar state
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      // Tailwind breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
      if (width >= 1536) {
        // 2xl+: Full width sidebar, always visible
        setScreenMode('desktop-full');
        setIsCollapsed(false);
      } else if (width >= 1024) {
        // lg and xl: Icons only by default, can be expanded
        setScreenMode('desktop-icons');
        // Start collapsed (icons only) by default for these breakpoints
        if (screenMode !== 'desktop-icons') {
          setIsCollapsed(true);
        }
      } else {
        // sm and below: Mobile overlay, hidden by default
        setScreenMode('mobile');
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [screenMode]);

  // Derive state based on screen mode and collapsed state
  const isMobileOverlay = screenMode === 'mobile';
  const isIconsOnly = screenMode === 'desktop-icons' && isCollapsed;
  
  // Determine sidebar width based on state
  const getSidebarWidth = () => {
    if (isMobileOverlay) {
      return 'w-64'; // Full width for mobile overlay
    } else if (isIconsOnly) {
      return 'w-16'; // Icon-only width
    } else {
      return 'w-64'; // Full width
    }
  };

  const sidebarWidth = getSidebarWidth();

  // Determine if we should show overlay (for lg/xl when expanded or mobile when expanded)
  const shouldShowOverlay = (isMobileOverlay && !isCollapsed) || (!isMobileOverlay && !isIconsOnly);

  return (
    <SidebarContext.Provider value={{ 
      isCollapsed, 
      toggleSidebar, 
      sidebarWidth,
      isIconsOnly,
      isMobileOverlay,
      shouldShowOverlay
    }}>
      {children}
    </SidebarContext.Provider>
  );
}
