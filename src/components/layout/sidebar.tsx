'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, PenTool, Clock } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { useState, useEffect } from 'react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, sidebarWidth } = useSidebar();
  
  // Current time and status
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState<'available' | 'busy' | 'away'>('available');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set status based on time (just as an example)
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 17) {
      setStatus('available');
    } else if (hour >= 18 && hour <= 22) {
      setStatus('busy');
    } else {
      setStatus('away');
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'status-available';
      case 'busy': return 'status-busy';
      case 'away': return 'status-away';
      default: return 'status-away';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'busy': return 'Busy';
      case 'away': return 'Away';
      default: return 'Away';
    }
  };

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
        className={`fixed left-0 top-0 h-full z-50 bg-neutral-50/95 dark:bg-neutral-900/95 backdrop-blur-xl border-r border-default transition-all duration-300 ${sidebarWidth} ${
          // Hide sidebar completely on small screens when collapsed
          isCollapsed ? 'xl:block hidden' : 'block'
        } ${className}`}
      >
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {/* Status Section */}
          <div className="mb-6 sidebar-status-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} animate-pulse`} />
                {!isCollapsed && (
                  <span className="text-xs font-medium text-muted">
                    {getStatusText(status)}
                  </span>
                )}
              </div>
              {!isCollapsed && (
                <div className="flex items-center gap-1 text-xs text-muted ml-auto">
                  <Clock size={12} />
                  <span>{formatTime(currentTime)}</span>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <div className="mt-2 text-xs text-muted">
                Currently building something awesome ✨
              </div>
            )}
          </div>

          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      isActive
                        ? 'nav-link-active'
                        : ''
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
