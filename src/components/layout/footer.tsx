'use client';

import { motion } from 'motion/react';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: '🐙' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
    { href: 'https://twitter.com', label: 'Twitter', icon: '🐦' },
  ];

  return (
    <motion.footer
      className={`glass border-t border-border ${className}`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        backdropFilter: 'var(--glass-backdrop)',
        backgroundColor: 'var(--glass-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent-main rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-heading-md font-semibold text-text-primary">
                Sean Mishra
              </span>
            </div>
            <p className="text-body-sm text-text-muted max-w-sm">
              Designer & Developer crafting digital experiences with attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-heading-md font-semibold text-text-primary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Projects', 'Writing'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-body-sm text-text-muted hover:text-text-primary transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-heading-md font-semibold text-text-primary">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center hover:bg-accent-main hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <span className="text-sm">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-body-sm text-text-muted text-center">
            © {currentYear} Sean Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
