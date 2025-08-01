'use client';

import { ThemeToggle } from './theme-toggle';
import { useSidebar } from './sidebar-context';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const { toggleSidebar, isMobileOverlay, screenMode } = useSidebar();

  const shouldShowMenuButton = isMobileOverlay || screenMode === 'desktop-icons';

  return (
    <header
      className={`sticky top-0 z-40 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {shouldShowMenuButton && (
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={16} className="text-neutral-600 dark:text-neutral-400" />
            </button>
          )}
          
          <h1 className="text-sm font-mono font-semibold text-neutral-900 dark:text-neutral-100">
            SEAN MISHRA //
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
