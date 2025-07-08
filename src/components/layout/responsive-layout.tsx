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
        isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}
    >
      {children}
    </div>
  );
}
