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
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Navigation breadcrumb or title could go here */}
        <div className="flex items-center gap-4">
          <h1 className="text-heading-lg font-semibold text-text-primary">
            Sean Mishra
          </h1>
        </div>
        
        {/* Additional header actions could go here */}
        <div className="flex items-center gap-4">
          {/* Status indicator or other elements */}
        </div>
      </div>
    </motion.header>
  );
}
