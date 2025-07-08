'use client';

import { useTheme } from '../providers';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-full p-1 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full shadow-sm flex items-center justify-center"
        animate={{
          x: resolvedTheme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        <span className="text-[10px] text-white">
          {resolvedTheme === 'dark' ? '🌙' : '☀️'}
        </span>
      </motion.div>
      <span className="sr-only">
        {resolvedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </motion.button>
  );
}
