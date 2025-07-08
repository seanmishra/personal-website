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
      className={`sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Navigation breadcrumb or title */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button - visible on xs, sm, md, and lg screens */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors xl:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
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
