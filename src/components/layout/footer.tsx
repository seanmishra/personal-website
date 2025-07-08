import Link from 'next/link';

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
    <footer
      className={`bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-300 dark:border-neutral-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100">
                Sean Mishra
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
              Designer & Developer crafting digital experiences with attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Writing', href: '/writing' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all hover:scale-110"
                  title={link.label}
                >
                  <span className="text-sm">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-300 dark:border-neutral-700">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            © {currentYear} Sean Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
