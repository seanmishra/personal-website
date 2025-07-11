'use client';

import { useSidebar } from './sidebar-context';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const { isIconsOnly, isMobileOverlay, screenMode } = useSidebar();

  const getMarginClass = () => {
    if (isMobileOverlay) {
      // Mobile: no margin, sidebar is overlay
      return 'ml-0';
    } else if (screenMode === 'desktop-icons' && isIconsOnly) {
      // lg/xl icons-only: margin for icon-only sidebar
      return 'ml-16';
    } else if (screenMode === 'desktop-full') {
      // 2xl+: margin for full sidebar (always pushes content)
      return 'ml-64';
    } else {
      // lg/xl expanded: no margin, sidebar overlays content
      return 'ml-0';
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
