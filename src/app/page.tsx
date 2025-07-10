import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

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
    <>
      {/* Hero Section - Full Width */}
      <section className="relative px-20 xl:px-40 py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-surface" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/3 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="status-badge">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
                Available for new opportunities
              </div>
              
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-display font-bold text-primary tracking-tight">
                Bold ideas {' '}
                  <span className="gradient-text-primary">
                  belong
                  </span>{' '}
                  in prod, not slides.
                </h1>
                <p className="text-xl lg:text-2xl text-muted leading-relaxed font-light max-w-2xl">
                  Impact-driven full-stack software engineer shipping{' '}
                  <em className="text-primary font-medium not-italic">revenue-ready</em>{' '}
                  products from concept to launch.
                </p>
              </div>
              
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="/docs/sean-mishra-resume.pdf"
                  download="Sean_Mishra_Resume.pdf"
                  className="btn-primary-large group"
                  aria-label="Download Sean Mishra's resume"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <Link 
                  href="/contact"
                  className="btn-secondary-large group"
                >
                  Let&apos;s Talk
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="relative lg:order-last">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 floating-decoration-primary" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 floating-decoration-secondary" />
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden hero-gradient-headshot shadow-2xl shadow-black/10">
                  <Image
                    src="/images/sean_headshot.jpg"
                    alt="Sean Mishra - Full-stack Software Engineer"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 hero-overlay-gradient" />
                </div>
                
                {/* Glass card */}
                <div className="absolute -bottom-8 -left-8 right-8 p-6 glass-card rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-primary font-semibold">Sean Mishra</p>
                      <p className="text-neutral-700 dark:text-neutral-400 text-sm">Full-Stack Engineer</p>
                    </div>
                    <div className="flex gap-3 items-center text-sm text-neutral-800 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Greater St. Louis, USA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{getCurrentTimeZone()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="py-20 px-40 lg:py-32 bg-section-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-20 items-start">
            {/* About Content */}
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-px bg-primary-500" />
                  <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">About</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                  Design, Code, Ship — {' '}
                  <span className="text-primary-500">Repeat</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-xl leading-relaxed text-muted">
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

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-default">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">50+</div>
                  <div className="text-muted text-sm">Projects Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">12+</div>
                  <div className="text-muted text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">∞</div>
                  <div className="text-muted text-sm">Coffee Consumed</div>
                </div>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="lg:col-span-2 space-y-8 lg:mt-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-primary">
                  Tech Stack
                </h3>
                <div className="space-y-6">
                    {[
                    { category: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind', 'D3', 'Motion', 'GSAP', 'Lottie', 'Storybook'] },
                    { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Clerk', 'OAuth2', 'Jest', 'Testing Library'] },
                    { category: 'DevOps', skills: ['Docker', 'GH Actions', 'CI/CD pipelines', 'Vercel', 'Railway', 'Firebase', 'Heroku', 'AWS (S3, Lambda)'] },
                    { category: 'Tooling', skills: ['Git', 'VSCode', 'Linear', 'Jira', 'Postman', 'Warp', 'Figma'] }
                    ].map((group) => (
                    <div key={group.category} className="space-y-3">
                      <h4 className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                      {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                        key={skill}
                        className="skill-tag"
                        >
                        {skill}
                        </span>
                      ))}
                      </div>
                    </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden px-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-accent-subtle" />
        <div className="absolute inset-0 bg-pattern-dots" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Let&apos;s Connect</span>
                <div className="w-12 h-px bg-primary-500" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-primary leading-tight">
                Ready to turn your roadmap into{' '}
                <span className="gradient-text-primary">
                  release notes
                </span>
                ?
              </h2>
              <p className="text-xl lg:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
                {`I'm always excited to discuss new opportunities, challenging projects, and ways to create meaningful digital experiences that make a real impact.`}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/projects"
                className="btn-secondary-large group min-w-[200px]"
              >
                View My Work
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact"
                className="btn-primary-large group min-w-[200px]"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.435L3 21l2.435-5.094A8.959 8.959 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
                </svg>
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
