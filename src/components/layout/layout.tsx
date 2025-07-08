'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/use-isomorphic-layout-effect';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(72);

  useIsomorphicLayoutEffect(() => {
    // Sync sidebar width with screen size
    const updateSidebarWidth = () => {
      setSidebarWidth(window.innerWidth <= 1280 ? 56 : 72);
    };

    updateSidebarWidth();
    window.addEventListener('resize', updateSidebarWidth);
    return () => window.removeEventListener('resize', updateSidebarWidth);
  }, []);

  return (
    <div className={`min-h-screen bg-surface-0 ${className}`}>
      <Sidebar />
      
      <motion.div 
        className="flex flex-col min-h-screen"
        style={{ marginLeft: sidebarWidth }}
        animate={{ marginLeft: sidebarWidth }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Header />
        
        <motion.main
          className="flex-1 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            delay: 0.1 
          }}
        >
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              delay: 0.2 
            }}
          >
            {children}
          </motion.div>
        </motion.main>
        
        <Footer />
      </motion.div>
    </div>
  );
}
