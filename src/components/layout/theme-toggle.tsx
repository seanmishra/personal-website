'use client';

import { useTheme } from '../providers';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  const isLight = resolvedTheme === 'light';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 cursor-pointer bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
      style={{
        boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {/* Background color animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
        animate={{
          backgroundColor: isLight ? 'var(--color-neutral-100)' : 'var(--color-neutral-800)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle knob */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center bg-warning-500 dark:bg-primary-500"
        style={{
          boxShadow: 'var(--shadow-lg)',
        }}
        animate={{
          x: isLight ? 28 : 2,
          backgroundColor: isLight ? 'var(--color-secondary-400)' : 'var(--color-primary-500)',
          boxShadow: isLight
            ? 'var(--shadow-lg)'
            : 'var(--shadow-lg)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon with rotation animation */}
        <motion.div
          animate={{ rotate: isLight ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            {isLight ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-3 h-3 text-neutral-50" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-3 h-3 text-neutral-50" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      
      {/* Background icons for extra visual appeal */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: isLight ? 0.4 : 0.1,
            scale: isLight ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          
          <Moon className="w-3 h-3 text-neutral-500" />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: isLight ? 0.1 : 0.4,
            scale: isLight ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-3 h-3 text-neutral-200" />
        </motion.div>
      </div>
      
      <span className="sr-only">
        {isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </motion.button>
  );
}
