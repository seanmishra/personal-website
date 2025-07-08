import React from 'react';

export default function Home() {
  return (
    <div className="spacing-section">
      <header className="text-center mb-16">
        <h1 className="text-display-xl text-primary mb-4">
          Design System Demo
        </h1>
        <p className="text-body-lg text-muted">
          Showcasing the color tokens, typography, and spacing utilities
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Typography Section */}
        <div className="glass spacing-card rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-display-md text-primary mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-display-sm text-primary">Display Large</h3>
              <p className="text-caption text-muted">Space Grotesk, 600 weight</p>
            </div>
            <div>
              <h4 className="text-heading-xl text-primary">Heading XL</h4>
              <p className="text-caption text-muted">Space Grotesk, 600 weight</p>
            </div>
            <div>
              <p className="text-body-lg text-primary">Body Large Text</p>
              <p className="text-caption text-muted">Inter, 400 weight, 1.55 line height</p>
            </div>
            <div>
              <p className="text-body-md text-primary">Body Medium Text</p>
              <p className="text-caption text-muted">Inter, 400 weight</p>
            </div>
            <div>
              <code className="text-mono text-accent bg-surface-1 px-2 py-1 rounded text-body-sm">
                const code = &quot;JetBrains Mono&quot;;
              </code>
              <p className="text-caption text-muted mt-1">JetBrains Mono</p>
            </div>
          </div>
        </div>

        {/* Color Section */}
        <div className="glass spacing-card rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-display-md text-primary mb-6">Color Tokens</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-full h-16 bg-surface-0 border border-default rounded mb-2"></div>
                <p className="text-caption text-muted">Surface 0</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-surface-1 border border-default rounded mb-2"></div>
                <p className="text-caption text-muted">Surface 1</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-accent-main rounded mb-2"></div>
                <p className="text-caption text-muted">Accent</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-body-md text-primary">Primary text color</p>
              <p className="text-body-md text-muted">Muted text color</p>
              <p className="text-body-md text-accent">Accent text color</p>
            </div>
          </div>
        </div>

        {/* Glass Effects */}
        <div className="bg-surface-1 spacing-card rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-display-md text-primary mb-6">Glass Effects</h2>
          <div className="space-y-4">
            <div className="glass spacing-element rounded-lg">
              <p className="text-body-md text-primary">Glass effect with backdrop blur</p>
              <p className="text-caption text-muted">14px blur, 180% saturation</p>
            </div>
            <div className="glass-subtle spacing-element rounded-lg">
              <p className="text-body-md text-primary">Subtle glass effect</p>
              <p className="text-caption text-muted">8px blur, lighter background</p>
            </div>
          </div>
        </div>

        {/* Spacing Section */}
        <div className="glass spacing-card rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-display-md text-primary mb-6">Spacing Scale</h2>
          <div className="space-y-4">
            <div className="bg-surface-1 rounded" style={{ padding: 'var(--spacing-section)' }}>
              <div className="bg-accent rounded-sm h-4 w-full"></div>
              <p className="text-caption text-muted mt-2">Section spacing (96px)</p>
            </div>
            <div className="bg-surface-1 rounded" style={{ padding: 'var(--spacing-gutter)' }}>
              <div className="bg-accent rounded-sm h-4 w-full"></div>
              <p className="text-caption text-muted mt-2">Gutter spacing (32px)</p>
            </div>
            <div className="bg-surface-1 rounded" style={{ padding: 'var(--spacing-card)' }}>
              <div className="bg-accent rounded-sm h-4 w-full"></div>
              <p className="text-caption text-muted mt-2">Card spacing (24px)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-body-lg text-muted">
          Design system successfully implemented! 🎨
        </p>
        <p className="text-caption text-muted mt-2">
          Light/dark mode support • Accessibility ready • Glass effects
        </p>
      </div>
    </div>
  );
}
