import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Welcome to Sean Mishra&apos;s Portfolio
        </h1>
        <p className="text-lg font-body text-neutral-700 dark:text-neutral-300">
          Designer & Developer crafting digital experiences
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* About Section */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">About Me</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            I&apos;m a passionate designer and developer with expertise in creating beautiful, functional digital experiences.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            My work focuses on clean design, thoughtful user experience, and robust technical implementation.
          </p>
        </div>

        {/* Skills Section */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Skills</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Frontend Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Full Stack Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Product Strategy</span>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">E-commerce Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Design System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive component library</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Get in Touch</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:hello@seanmishra.com"
              className="btn-primary"
            >
              Email Me
            </a>
            <a
              href="#"
              className="btn-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
