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
        boxShadow: '0 -2px 16px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-main rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-heading-md font-semibold text-text-primary">
                Sean Mishra
              </span>
            </div>
            <p className="text-body-sm text-text-muted max-w-sm leading-relaxed">
              Designer & Developer crafting digital experiences with attention to detail and a passion for clean, functional design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-heading-md font-semibold text-text-primary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Writing'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-body-sm text-text-muted hover:text-text-primary transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span>→</span>
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-heading-md font-semibold text-text-primary">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-1 rounded-xl flex items-center justify-center hover:bg-accent-main hover:text-white transition-all border border-border"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <span className="text-lg">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-body-sm text-text-muted text-center">
            © {currentYear} Sean Mishra. Crafted with care and attention to detail.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
