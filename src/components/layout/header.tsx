'use client';

import { ThemeToggle } from './theme-toggle';
import { useSidebar } from './sidebar-context';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className={`sticky top-0 z-40 bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-300 dark:border-neutral-700 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Navigation breadcrumb or title */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button - visible on xs, sm, md, and lg screens */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors xl:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} className="text-neutral-600 dark:text-neutral-400" />
          </button>
          
          <h1 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-50">
            Sean Mishra
          </h1>
        </div>
        
        {/* Header actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
