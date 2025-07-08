'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, PenTool } from 'lucide-react';
import { useSidebar } from './sidebar-context';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, sidebarWidth } = useSidebar();

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/writing', label: 'Writing', icon: PenTool },
  ];

  return (
    <>
      {/* Mobile backdrop overlay - show when sidebar is expanded on small screens */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 xl:hidden backdrop-blur-sm touch-none"
          onClick={toggleSidebar}
          onTouchStart={(e) => e.preventDefault()}
          aria-hidden="true"
        />
      )}
      
      <aside
        className={`fixed left-0 top-0 h-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 ${sidebarWidth} ${
          // Hide sidebar completely on small screens when collapsed
          isCollapsed ? 'xl:block hidden' : 'block'
        } ${className}`}
      >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Sean Mishra</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Designer & Developer</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group hover:scale-[1.02] ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                    onClick={() => {
                      // Close sidebar on mobile after navigation
                      if (window.innerWidth < 1280) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <IconComponent size={20} className="flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium transition-opacity duration-200">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
    </>
  );
}
