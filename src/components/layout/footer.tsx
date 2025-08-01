interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub [seanmishra]' },
    { href: 'https://linkedin.com', label: 'LinkedIn [seanmishra]' },
    { href: 'https://x.com', label: 'X [seansapiens]' },
  ];

  return (
    <footer
      className={`bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Sean Mishra
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
              Impact-driven full-stack engineer shipping revenue-ready products from concept to launch.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-3">
              Connect
            </div>
            <div className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <div className="font-mono font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                Location
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Greater St. Louis, USA
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            © {currentYear} Sean Mishra
          </p>
        </div>
      </div>
    </footer>
  );
}
