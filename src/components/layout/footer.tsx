interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://x.com', label: 'X' },
  ];

  return (
    <footer
      className={`bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-300 dark:border-neutral-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-2">
          {/* Brand */}
          <div className="flex flex-col gap-4 py-12">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-sans font-semibold text-neutral-300 dark:text-neutral-800">
                Sean Mishra
              </span>
            </div>
            <p className="text-md text-neutral-300 dark:text-neutral-700 max-w-md">
            Impact-driven full-stack software engineer shipping revenue-ready products from concept to launch.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-sans font-semibold text-neutral-900 dark:text-neutral-100">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-blue-500 hover:text-white transition-all hover:scale-105"
                  title={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <h3 className="text-lg font-sans font-semibold text-neutral-900 dark:text-neutral-100 mt-6">
              Location
            </h3>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-500 dark:text-neutral-400">
              🇺🇸 Greater St. Louis, Missouri
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              (Open to on-site / hybrid / remote opportunities)
            </p>
          </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-300 dark:border-neutral-900">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            © {currentYear} Sean Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
