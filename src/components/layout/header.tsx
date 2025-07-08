'use client';

import { motion } from 'motion/react';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  return (
    <motion.header
      className={`sticky top-0 z-40 glass border-b border-border ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        backdropFilter: 'var(--glass-backdrop)',
        backgroundColor: 'var(--glass-bg)',
        boxShadow: '0 2px 16px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Navigation breadcrumb or title */}
        <div className="flex items-center gap-6">
          <motion.h1 
            className="text-heading-lg font-semibold text-text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Sean Mishra
          </motion.h1>
          <motion.div 
            className="h-4 w-px bg-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.p 
            className="text-body-sm text-text-muted"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Designer & Developer
          </motion.p>
        </div>
        
        {/* Header actions */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Available" />
        </motion.div>
      </div>
    </motion.header>
  );
}
