'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, PenTool, Mail } from 'lucide-react';
import { useSidebar } from './sidebar-context';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, sidebarWidth, isIconsOnly, isMobileOverlay, shouldShowOverlay } = useSidebar();

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/writing', label: 'Writing', icon: PenTool },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      {shouldShowOverlay && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 2xl:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside
        className={`fixed left-0 top-0 h-full z-50 bg-neutral-50 dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 transition-all duration-300 ${sidebarWidth} ${
          isMobileOverlay 
            ? (isCollapsed ? 'translate-x-[-100%]' : 'translate-x-0')
            : 'translate-x-0'
        } ${className}`}
      >
        <div className="flex flex-col h-full">
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
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-mono transition-colors ${
                        isActive
                          ? 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900'
                          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                      } ${isIconsOnly ? 'justify-center' : ''}`}
                      title={isIconsOnly ? item.label : undefined}
                      onClick={() => {
                        if (isMobileOverlay) {
                          toggleSidebar();
                        }
                      }}
                    >
                      <IconComponent size={16} className="flex-shrink-0" />
                      {!isIconsOnly && (
                        <span>{item.label}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          {!isIconsOnly && (
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available for work
                </div>
                <div>St. Louis, USA</div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
