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
      className={`bg-neutral-50 dark:bg-neutral-900 border-t border-default ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-2">
          {/* Brand */}
          <div className="flex flex-col gap-4 py-12">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-sans font-semibold text-secondary">
                Sean Mishra
              </span>
            </div>
            <p className="text-md text-muted max-w-md">
            Impact-driven Full-Stack Software Engineer shipping revenue-ready products from concept to launch.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-sans font-semibold text-primary">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <h3 className="text-lg font-sans font-semibold text-primary mt-6">
              Location
            </h3>
          <div className="flex flex-col gap-2">
            <p className="text-muted">
              🇺🇸 Greater St. Louis, Missouri
            </p>
            <p className="text-sm text-muted">
              (Open to on-site / hybrid / remote opportunities)
            </p>
          </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-default">
          <p className="text-sm text-muted text-center">
            © {currentYear} Sean Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
