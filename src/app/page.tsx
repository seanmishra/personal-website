import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Sean Mishra&apos;s Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Designer & Developer crafting digital experiences
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* About Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m a passionate designer and developer with expertise in creating beautiful, functional digital experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My work focuses on clean design, thoughtful user experience, and robust technical implementation.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Frontend Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Full Stack Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Product Strategy</span>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Recent Projects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">E-commerce Platform</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Modern React/Next.js application</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">Design System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive component library</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:hello@seanmishra.com"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Email Me
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
