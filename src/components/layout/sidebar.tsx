'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, PenTool, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
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
    <aside
      className={`fixed left-0 top-0 h-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 ${sidebarWidth} ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center justify-between">
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
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden"
            >
              {isCollapsed ? <Menu size={16} /> : <X size={16} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group hover:scale-[1.02] ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                    }`}
                    title={isCollapsed ? item.label : undefined}
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

        {/* Footer */}
        <div className="p-4 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
