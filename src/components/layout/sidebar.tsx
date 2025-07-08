'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ThemeToggle } from './theme-toggle';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/use-isomorphic-layout-effect';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Check if sidebar should be collapsed based on screen size
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      const shouldCollapse = window.innerWidth <= 1280;
      if (mobile) {
        setIsCollapsed(true);
      } else if (!mobile && shouldCollapse) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? 56 : 72;

  const navigationItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/writing', label: 'Writing', icon: '✍️' },
  ];

  return (
    <motion.aside
      className={`fixed left-0 top-0 h-full z-50 glass border-r border-border ${className}`}
      animate={{ width: sidebarWidth }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        backdropFilter: 'var(--glass-backdrop)',
        backgroundColor: 'var(--glass-bg)',
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center justify-center"
              animate={{ scale: isCollapsed ? 0.8 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="w-8 h-8 bg-accent-main rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </motion.div>
            
            {/* Toggle Button */}
            <motion.button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-surface-1 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <span className="text-text-muted text-sm">
                  {isCollapsed ? '→' : '←'}
                </span>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-surface-1 transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  title={isCollapsed ? item.label : undefined}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent-main/10 rounded-xl"
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-lg relative z-10">{item.icon}</span>
                  <motion.span
                    className={`text-sm font-medium text-text-primary relative z-10 ${isCollapsed ? 'sr-only' : ''}`}
                    initial={false}
                    animate={{ 
                      opacity: isCollapsed ? 0 : 1,
                      width: isCollapsed ? 0 : 'auto'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
