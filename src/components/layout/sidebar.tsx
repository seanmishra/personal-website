'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, PenTool, Mail, Clock } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { useState, useEffect } from 'react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, sidebarWidth, isIconsOnly, isMobileOverlay, shouldShowOverlay } = useSidebar();
  
  // Current time and status
  const [currentTime, setCurrentTime] = useState(new Date());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<'available' | 'busy' | 'away'>('available');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set status based on time and more realistic logic
    const hour = new Date().getHours();
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    
    // Weekend or late night/early morning
    if (dayOfWeek === 0 || dayOfWeek === 6 || hour < 8 || hour > 22) {
      setStatus('away');
    } 
    // Work hours (8 AM - 6 PM on weekdays)
    else if (hour >= 8 && hour <= 18) {
      setStatus('available');
    } 
    // Evening hours (6 PM - 10 PM on weekdays)
    else {
      setStatus('busy');
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const time = date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
    return time
  };

  const formatTimeXS = (date: Date) => {
    const time = date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
    return time
  };

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'available': return 'status-available';
  //     case 'busy': return 'status-busy';
  //     case 'away': return 'status-away';
  //     default: return 'status-away';
  //   }
  // };

  // const getStatusText = (status: string) => {
  //   switch (status) {
  //     case 'available': return 'Available for work';
  //     case 'busy': return 'Limited availability';
  //     case 'away': return 'Currently offline';
  //     default: return 'Status unknown';
  //   }
  // };

  const getStatusDescription = () => {
    return 'Building something awesome ✨';
  };

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/writing', label: 'Writing', icon: PenTool },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop overlay - show when expanded for both mobile and lg/xl modes */}
      {shouldShowOverlay && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm touch-none 2xl:hidden"
          onClick={toggleSidebar}
          onTouchStart={(e) => e.preventDefault()}
          aria-hidden="true"
        />
      )}
      
      <aside
        className={`fixed left-0 top-0 h-full z-50 bg-neutral-50/95 dark:bg-neutral-900/95 backdrop-blur-xl border-r border-default transition-all duration-300 ${sidebarWidth} ${
          // For mobile overlay: hide when collapsed, show when expanded
          // For lg/xl: always show but change overlay behavior
          isMobileOverlay 
            ? (isCollapsed ? 'translate-x-[-100%]' : 'translate-x-0')
            : 'translate-x-0'
        } ${shouldShowOverlay ? 'shadow-2xl' : ''} ${className}`}
      >
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <nav className="flex-1 p-2 2xl:p-4 overflow-y-auto">
          {/* Status Section */}
          {isIconsOnly ? (
            // Icons-only mode: show just the status indicator, centered
            // <div className="mb-6 mt-3 p-4 flex flex-col justify-center items-center sidebar-status-card">
            //   <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} animate-pulse shadow-lg`} />
            // </div>
            <div className="p-1 mb-4">
              <span className="font-mono font-bold text-sm text-muted">{formatTimeXS(currentTime)}</span>
            </div>
          ) : (
            // Full mode: show complete status card
            <div className="mb-6 sidebar-status-card">
              {/* <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} animate-pulse shadow-lg`} />
                <span className="text-xs font-semibold text-primary">
                  {getStatusText(status)}
                </span>
              </div> */}
              <div className="flex items-center gap-1 mb-3 text-sm text-muted">
                <Clock size={12} />
                <span className="font-mono font-bold">{formatTime(currentTime)}</span>
              </div>
              <div className="text-xs text-muted leading-relaxed">
                {getStatusDescription()}
              </div>
            </div>
          )}

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
                    } ${isIconsOnly ? 'justify-center' : ''}`}
                    title={isIconsOnly ? item.label : undefined}
                    onClick={() => {
                      // Close sidebar after navigation for mobile overlay mode
                      if (isMobileOverlay) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <IconComponent size={20} className="flex-shrink-0" />
                    {!isIconsOnly && (
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
