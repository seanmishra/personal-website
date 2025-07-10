'use client';

import { useSidebar } from './sidebar-context';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const { isIconsOnly, isMobileOverlay, shouldShowOverlay } = useSidebar();

  const getMarginClass = () => {
    if (isMobileOverlay) {
      // Mobile: no margin, sidebar is overlay
      return 'ml-0';
    } else if (shouldShowOverlay && !isIconsOnly) {
      // lg/xl expanded mode: no margin, sidebar is overlay
      return 'ml-0';
    } else if (isIconsOnly) {
      // lg/xl: margin for icon-only sidebar
      return 'ml-16';
    } else {
      // 2xl+: margin for full sidebar
      return 'ml-64';
    }
  };

  return (
    <div 
      className={`min-h-screen flex flex-col transition-all duration-300 ${getMarginClass()}`}
    >
      {children}
    </div>
  );
}
