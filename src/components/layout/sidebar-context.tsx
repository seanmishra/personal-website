'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/use-isomorphic-layout-effect';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  sidebarWidth: string;
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useIsomorphicLayoutEffect(() => {
    // Check if sidebar should be collapsed based on screen size
    const checkScreenSize = () => {
      const shouldCollapse = window.innerWidth <= 1024;
      setIsCollapsed(shouldCollapse);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarWidth = isCollapsed ? 'w-16' : 'w-64';

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, sidebarWidth }}>
      {children}
    </SidebarContext.Provider>
  );
}
