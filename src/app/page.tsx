'use client';
import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight, MapPin, Clock } from 'lucide-react';
import { trackEvent } from '@/lib/posthog';

// Helper function to determine if we're in daylight saving time
function isDaylightSavingTime() {
  const now = new Date();
  const year = now.getFullYear();
  
  // DST starts second Sunday in March
  const dstStart = new Date(year, 2, 1); // March 1st
  dstStart.setDate(dstStart.getDate() + (7 - dstStart.getDay()) + 7); // Second Sunday
  
  // DST ends first Sunday in November
  const dstEnd = new Date(year, 10, 1); // November 1st
  dstEnd.setDate(dstEnd.getDate() + (7 - dstEnd.getDay())); // First Sunday
  
  return now >= dstStart && now < dstEnd;
}

function getCurrentTimeZone() {
  return isDaylightSavingTime() ? 'CDT' : 'CST';
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style status line */}
          <div className="mb-8 text-sm font-mono text-neutral-500 dark:text-neutral-400">
            <span className="text-green-500">●</span> Available for work
            <span className="hidden sm:inline-block">
              <span className="mx-4">|</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Greater St. Louis, USA
              </span>
              <span className="mx-4">|</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {getCurrentTimeZone()}
              </span>
            </span>
          </div>
          
          {/* Main content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-sans font-medium mb-4">
                Sean Mishra
              </h1>
              <h2 className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300">
                Full-stack Software Engineer
              </h2>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Impact-driven full-stack engineer shipping revenue-ready products from concept to launch.
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/docs/sean-mishra-resume.pdf"
                download="Sean_Mishra_Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-mono text-sm hover:opacity-80 transition-opacity"
                onClick={() => trackEvent.resumeDownload()}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded border border-neutral-300 dark:border-neutral-700 font-mono text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                onClick={() => trackEvent.contactClick('hero')}
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* About Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* About content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-6">
                  {`ABOUT //`}
                </h2>
                <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p>
                    {`I'm a full-stack software engineer who builds scalable, user-focused web and mobile apps. With strong product sense and an eye for clean design, I blend frontend finesse and backend architecture to ship fast and iterate even faster.`}
                  </p>
                  <p>
                    {`I've navigated startups, small businesses and indie projects, building everything from quick MVPs to robust, production-scale systems. While I center around JavaScript, React, Node.js, and modern cloud platforms, I'm always open to exploring new tech when the project calls for it.`}
                  </p>
                  <p>
                    {`Beyond coding, I care deeply about good UX, thoughtful design, and the meaningful impact of the products I create. I'm always shipping, always iterating, and always on the hunt for problems worth solving.`}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-neutral-200 dark:border-neutral-800">
                <div>
                  <div className="text-2xl font-mono font-bold">50+</div>
                  <div className="text-sm text-neutral-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold">12+</div>
                  <div className="text-sm text-neutral-500">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold">∞</div>
                  <div className="text-sm text-neutral-500">Coffee</div>
                </div>
              </div>
            </div>
            
            {/* Tech stack */}
            <div className="space-y-8">
              <h3 className="text-xl font-mono font-bold">
                {`STACK //`}
              </h3>
              <div className="space-y-6 text-sm">
                {[
                  { 
                    category: 'Frontend', 
                    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] 
                  },
                  { 
                    category: 'Backend', 
                    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] 
                  },
                  { 
                    category: 'Tools', 
                    skills: ['Docker', 'Git', 'AWS', 'Vercel'] 
                  }
                ].map((group) => (
                  <div key={group.category}>
                    <div className="font-mono font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {group.category}
                    </div>
                    <div className="space-y-1">
                      {group.skills.map((skill) => (
                        <div key={skill} className="text-neutral-600 dark:text-neutral-400">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-sans font-bold mb-4">
                Let&apos;s build something together
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Looking for new opportunities and interesting projects. 
                Always excited to discuss technical challenges and potential collaborations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="inline-flex items-center px-6 py-3 border rounded border-neutral-300 dark:border-neutral-700 font-mono text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                onClick={() => trackEvent.projectsClick('cta_section')}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-mono text-sm hover:opacity-80 transition-opacity"
                onClick={() => trackEvent.contactClick('cta_section')}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
