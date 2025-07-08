'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [isLoading, setIsLoading] = useState(true);

  useIsomorphicLayoutEffect(() => {
    // Sync sidebar width with screen size
    const updateSidebarWidth = () => {
      setSidebarWidth(window.innerWidth <= 1280 ? 56 : 72);
    };

    updateSidebarWidth();
    window.addEventListener('resize', updateSidebarWidth);
    return () => window.removeEventListener('resize', updateSidebarWidth);
  }, []);

  useEffect(() => {
    // Prevent flash by ensuring theme is loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-surface-0 ${className}`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            className="fixed inset-0 bg-surface-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 bg-accent-main rounded-lg flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <span className="text-white font-bold text-sm">S</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
