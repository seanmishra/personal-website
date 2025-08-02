'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, MapPin, Users, Code2, Coffee, BookOpen, Zap, Target, Lightbulb, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '@/lib/posthog';

export default function About() {
  const [expandedRoles, setExpandedRoles] = useState<number[]>([]);

  const toggleRole = (index: number) => {
    setExpandedRoles(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl font-mono font-bold mb-6">
                  {`ABOUT //`}
                </h1>
                <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p>
                    {`My name is Santak "Sean" Mishra. I was born in India, studied Computer Science in the US and am currently residing in Greater St. Louis, Missouri, US. I am a Full-Stack Software Engineer with extensive experience in developing complex web applications, RESTful web services, and mobile applications. I have also dabbled in AI/ML, IoT, UI/UX design, Software Architecture, Cloud Computing and Information Security.`}
                  </p>
                  <p>
                    {`I started down this path as a curious high school student building small games and websites once I discovered my love and talent for building software. Over the years, I've evolved into a professional developer who thrives on solving real-world problems with technology. My journey has taken me through startups, small businesses, and indie projects, where I've built everything from quick MVPs to robust, production-scale systems.`}
                  </p>
                  <p>
                    {`Today, I focus on the intersection of robust engineering and product sense. Whether I'm designing APIs, crafting user interfaces, or architecting cloud infrastructure, I'm always focused on the quality of the user experience delivered and the impact on the business.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src="/images/seanmishra.jpg"
                      alt="Sean Mishra - Full-stack Software Engineer"
                      fill
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                <div className="text-center lg:text-left space-y-4">
                  <div>
                    <h2 className="text-xl font-sans font-medium text-neutral-900 dark:text-neutral-100">Sean Mishra</h2>
                    <p className="text-neutral-600 dark:text-neutral-300">Full-Stack Software Engineer</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 justify-center lg:justify-start text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Greater St. Louis, USA</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a 
                      href="/docs/sean-mishra-resume.pdf"
                      download="Sean_Mishra_Resume.pdf"
                      className="inline-flex items-center px-4 py-2 rounded bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-mono text-sm hover:opacity-80 transition-opacity"
                      onClick={() => trackEvent.resumeDownload()}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                    <a 
                      href="https://linkedin.com/in/seanmishra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 font-mono text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                      LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Professional Timeline */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-mono font-bold mb-6">
                {`EXPERIENCE //`}
              </h2>
            </div>
            
            <div className="space-y-8 max-w-4xl">
              {[
                {
                  year: "May 2020 - Present",
                  title: "Software Engineer",
                  company: "Morrowcraft (Remote)",
                  description: "Leading development at a software development agency offering design, development, branding and digital marketing services to domestic and international clients.",
                  shortAchievements: [
                    "Built scalable web apps & APIs with Node.js, React, MongoDB",
                    "Led cross-platform mobile development with React Native",
                    "Designed custom e-commerce platforms & CMS solutions",
                    "Implemented DevOps with Docker, Kubernetes & CI/CD pipelines"
                  ],
                  detailedAchievements: [
                    "Built scalable web apps and APIs for diverse client projects using Node.js, React and MongoDB",
                    "Led the development of cross-platform mobile apps with React Native, ensuring optimal performance across iOS and Android",
                    "Designed custom solutions for clients, including e-commerce platforms, content management systems, and analytics dashboards",
                    "Managed deployment of web apps & services using Heroku, Firebase, Railway, Vercel, etc. as well as self-hosted VPS by leveraging Docker and Kubernetes",
                    "Implemented DevOps practices, including CI/CD pipelines, automated testing, and deployment workflows, to streamline development and improve delivery speed",
                    "Implemented API gateways to manage rate limits, streamline developer onboarding, and enable secure authentication using OAuth 2.0, leveraging tools such as Auth0, Clerk, and Kong",
                    "Developed several custom Discord bots as well as a versatile currency bot enabling internal server economy with currency creation, payment system, transaction tracking, etc.",
                    "Delivered projects on tight deadlines while ensuring high-quality code and client satisfaction"
                  ]
                },
                {
                  year: "May 2018 - Apr 2020",
                  title: "Software Engineer",
                  company: "Noonlight (St. Louis, MO)",
                  description: "Developed safety platform solutions trusted by over 1M users, focusing on connected safety technology and emergency response systems.",
                  shortAchievements: [
                    "Built RESTful APIs & microservices with Node.js, TypeScript",
                    "Migrated legacy CoffeeScript to modern JSON Schema architecture",
                    "Created React-based Dev Portal for API integrations",
                    "Enhanced iOS app with Automatic Crash Response system"
                  ],
                  detailedAchievements: [
                    "Developed scalable RESTful APIs and microservices using Node.js, TypeScript, and MongoDB",
                    "Migrated legacy CoffeeScript APIs to a modern architecture with JSON Schema validation",
                    "Built React-based \"Dev Portal\" and internal tools to simplify API integrations for developers",
                    "Modernized the Android app by converting it to a cross-platform React Native solution",
                    "Developed and maintained the Noonlight iOS SDK, enabling seamless partner app integrations",
                    "Enhanced the flagship iOS app with critical features, including an Automatic Crash Response system, Swift-based widgets, Lyft integration using Objective-C, Taser & Tinder integrations, etc.",
                    "Strengthened code quality with unit tests (Jest) and integration tests (Gherkin/Cucumber)",
                    "Enhanced user safety tools such as the \"Sendpolice\" dashboard using Node.js and Ember.js",
                    "Expanded functionality with a Google Assistant Action leveraging the Geolocation API",
                    "Documented database schemas to ensure consistency and reliability across microservices"
                  ]
                },
                {
                  year: "Oct 2014 - Jul 2016",
                  title: "Software Developer",
                  company: "Lyfsoft (Bhubaneswar, India)",
                  description: "Full-stack development for web and mobile applications, specializing in e-commerce solutions and client project delivery.",
                  shortAchievements: [
                    "Developed custom web & mobile apps with PHP, JavaScript",
                    "Built e-commerce platforms using OpenCart & Magento",
                    "Managed full project lifecycle from requirements to deployment"
                  ],
                  detailedAchievements: [
                    "Developed custom web and cross-platform mobile applications using PHP and JavaScript for domestic and international clients",
                    "Built e-commerce platforms with OpenCart and Magento, delivering tailored solutions for clients",
                    "Involved at every stage of the project lifecycle, including requirements gathering, SRS documentation, prototyping, development, testing and deployment",
                    "Managed static deployments, monitored databases, and conducted client training to ensure seamless project handovers",
                    "Contributed to internal tools and processes to improve efficiency in project tracking and resource management"
                  ]
                },
                {
                  year: "Aug 2013 - Sep 2014",
                  title: "Web Developer",
                  company: "Void Informatics (Bhubaneswar, India)",
                  description: "Developed websites and web applications for local and domestic clients using modern web technologies and CMS platforms.",
                  shortAchievements: [
                    "Built static, dynamic & CMS websites with PHP, MySQL",
                    "Created custom WordPress & Joomla solutions",
                    "Developed two custom web applications for local clients"
                  ],
                  detailedAchievements: [
                    "Developed static, dynamic, and CMS-based websites using PHP, MySQL, WordPress, and Joomla",
                    "Created two custom web applications tailored to local client needs, improving operational efficiency",
                    "Involved in the full development lifecycle, from requirement gathering to deployment",
                    "Enhanced existing WordPress and Joomla websites by implementing custom features",
                    "Resolved bugs and optimized performance for clients' production websites and web applications"
                  ]
                },
                {
                  year: "Jan 2012 - Jul 2013",
                  title: "Junior Web Developer (Part-time)",
                  company: "Void Informatics (Bhubaneswar, India)",
                  description: "Started career building websites and learning web development fundamentals while pursuing education.",
                  shortAchievements: [
                    "Built responsive WordPress & Joomla websites",
                    "Created custom static websites from mockups",
                    "Implemented SEO strategies"
                  ],
                  detailedAchievements: [
                    "Built and customized websites using WordPress and Joomla for diverse client needs",
                    "Developed responsive website templates from mockups to deliver mobile-friendly user experiences",
                    "Created custom static websites for local clients, aligning with their branding and requirements",
                    "Implemented SEO strategies to improve the visibility and performance of the company website"
                  ]
                }
              ].map((item, index) => {
                const isExpanded = expandedRoles.includes(index);
                const achievementsToShow = isExpanded ? item.detailedAchievements : item.shortAchievements;
                
                return (
                <div key={index} className="space-y-4 pb-8">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                        {item.year}
                      </span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">{item.company}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">{item.description}</p>
                  </div>
                  <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                    {achievementsToShow.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {item.detailedAchievements.length > item.shortAchievements.length && (
                    <button
                      onClick={() => toggleRole(index)}
                      className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm font-mono"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show More ({item.detailedAchievements.length - item.shortAchievements.length} more)
                        </>
                      )}
                    </button>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Work Philosophy */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-mono font-bold mb-6">
                {`PHILOSOPHY //`}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Human-Centered Design",
                  description: "Every line of code I write starts with understanding the human problem we're solving. Technology should serve people, not the other way around."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Move Fast, Build Right",
                  description: "Speed and quality aren't mutually exclusive. I believe in rapid iteration with solid foundations — shipping early but shipping smart."
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Product-Minded Engineering",
                  description: "The best engineers must think like product managers. I don't just build features—I build solutions that drive real business outcomes."
                },
                {
                  icon: <Code2 className="w-6 h-6" />,
                  title: "Craft & Simplicity",
                  description: "Elegant code is simple code. I value clean architecture, readable code, and solutions that the next developer (including future me) will thank me for."
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: "Continuous Learning",
                  description: "Technology evolves rapidly, and so do I. I'm constantly exploring new tools, patterns, and approaches to stay at the cutting edge."
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Impact Over Activity",
                  description: "Success isn't measured in hours worked or lines written, but in problems solved and value delivered to users and businesses."
                }
              ].map((principle, index) => (
                <div key={index} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg flex items-center justify-center">
                      {principle.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{principle.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Technical Stack */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-mono font-bold mb-6">
                {`STACK //`}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I believe in using the right tool for the job. Here are the technologies I&apos;ve mastered and rely on to build exceptional software.
              </p>
            </div>
            
            {/* Main Technologies */}
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  name: "React",
                  category: "Frontend",
                  description: "My go-to for building interactive UIs. From simple components to complex state management.",
                  url: "https://react.dev",
                  color: "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400"
                },
                {
                  name: "Next.js",
                  category: "Frontend", 
                  description: "The React framework I use for production apps. SSR, API routes, and excellent DX.",
                  url: "https://nextjs.org",
                  color: "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400"
                },
                {
                  name: "TypeScript",
                  category: "Frontend",
                  description: "JavaScript with superpowers. Essential for maintaining large codebases and catching bugs early.",
                  url: "https://www.typescriptlang.org",
                  color: "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400"
                },
                {
                  name: "Node.js",
                  category: "Backend",
                  description: "Server-side JavaScript that lets me build fast, scalable network applications.",
                  url: "https://nodejs.org",
                  color: "bg-success-500/10 dark:bg-success-400/10 text-success-600 dark:text-success-500"
                },
                {
                  name: "MongoDB",
                  category: "Backend",
                  description: "Flexible NoSQL database perfect for rapid development and scaling modern applications.",
                  url: "https://mongodb.com",
                  color: "bg-success-500/10 dark:bg-success-400/10 text-success-600 dark:text-success-500"
                },
                {
                  name: "Docker",
                  category: "DevOps",
                  description: "Containerization that ensures 'it works on my machine' works everywhere.",
                  url: "https://docker.com",
                  color: "bg-secondary-500/10 dark:bg-secondary-400/10 text-secondary-600 dark:text-secondary-400"
                },
                {
                  name: "Tailwind CSS",
                  category: "Frontend",
                  description: "Utility-first CSS that makes styling fast and consistent. Perfect for rapid prototyping.",
                  url: "https://tailwindcss.com",
                  color: "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400"
                },
                {
                  name: "Railway",
                  category: "DevOps",
                  description: "Modern deployment platform for effortless infrastructure management and scaling.",
                  url: "https://railway.app",
                  color: "bg-secondary-500/10 dark:bg-secondary-400/10 text-secondary-600 dark:text-secondary-400"
                }
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                          {tool.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${tool.color}`}>
                          {tool.category}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{tool.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Technologies */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-mono font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                  Additional Technologies & Skills
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Frontend */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    Frontend
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                      { name: "React Native", url: "https://reactnative.dev" },
                      { name: "D3", url: "https://d3js.org" },
                      { name: "Motion", url: "https://motion.dev" },
                      { name: "GSAP", url: "https://gsap.com" },
                      { name: "Lottie", url: "https://lottiefiles.com" },
                      { name: "Storybook", url: "https://storybook.js.org" }
                    ].map((skill, index) => (
                      <a
                        key={index}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors group"
                      >
                        <span className="flex items-center justify-between">
                          {skill.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                    Backend
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "PHP", url: "https://www.php.net" },
                      { name: "Express", url: "https://expressjs.com" },
                      { name: "MySQL", url: "https://www.mysql.com" },
                      { name: "PostgreSQL", url: "https://www.postgresql.org" },
                      { name: "Redis", url: "https://redis.io" },
                      { name: "Supabase", url: "https://supabase.com" },
                      { name: "Clerk", url: "https://clerk.com" },
                      { name: "OAuth2", url: "https://oauth.net/2/" },
                      { name: "Jest", url: "https://jestjs.io" },
                      { name: "Testing Library", url: "https://testing-library.com" }
                    ].map((skill, index) => (
                      <a
                        key={index}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors group"
                      >
                        <span className="flex items-center justify-between">
                          {skill.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    DevOps
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "GitHub Actions", url: "https://github.com/features/actions" },
                      { name: "CI/CD pipelines", url: "https://about.gitlab.com/topics/ci-cd/" },
                      { name: "Vercel", url: "https://vercel.com" },
                      { name: "Firebase", url: "https://firebase.google.com" },
                      { name: "Heroku", url: "https://www.heroku.com" },
                      { name: "AWS (S3, Lambda)", url: "https://aws.amazon.com" },
                      { name: "Kubernetes", url: "https://kubernetes.io" }
                    ].map((skill, index) => (
                      <a
                        key={index}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors group"
                      >
                        <span className="flex items-center justify-between">
                          {skill.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tooling */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                    Tooling
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "Git", url: "https://git-scm.com" },
                      { name: "VSCode", url: "https://code.visualstudio.com" },
                      { name: "Linear", url: "https://linear.app" },
                      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
                      { name: "Postman", url: "https://www.postman.com" },
                      { name: "Warp", url: "https://www.warp.dev" },
                      { name: "Figma", url: "https://www.figma.com" }
                    ].map((skill, index) => (
                      <a
                        key={index}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors group"
                      >
                        <span className="flex items-center justify-between">
                          {skill.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Beyond Code */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-mono font-bold mb-4">
                {`BEYOND CODE //`}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                Outside of software development, here are some of my interests and activities that help shape my perspective and make me a more well-rounded developer.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: <Coffee className="w-6 h-6" />,
                  title: "Gamer",
                  description: "From strategic thinking in complex games to quick problem-solving under pressure, gaming sharpens the same skills I use in development."
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Learner",
                  description: "Whether it's a new programming language, design principles, or business strategy, I'm always reading and learning."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Mentor",
                  description: "I love helping other developers grow. Whether through code reviews, pair programming, or career advice."
                }
              ].map((interest, index) => (
                <div key={index} className="group p-6 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm text-center space-y-6">
                  <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg flex items-center justify-center mx-auto group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                    {interest.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{interest.title}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">{interest.description}</p>
                  </div>
                </div>
              ))}
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
