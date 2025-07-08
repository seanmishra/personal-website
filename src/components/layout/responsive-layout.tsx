'use client';

import { useSidebar } from './sidebar-context';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div 
      className={`min-h-screen flex flex-col transition-all duration-300 ${
        // Only add margin on xl screens when sidebar is visible
        isCollapsed 
          ? 'ml-0 xl:ml-16' 
          : 'ml-0 xl:ml-64'
      }`}
    >
      {children}
    </div>
  );
}
