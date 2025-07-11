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
    <>
      {/* Introduction Section */}
      <section className="px-20 xl:px-40 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-px bg-primary-500" />
                  <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">About Me</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                  Building software that{' '}
                  <span className="gradient-text-primary">matters</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted">
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

            {/* Profile */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  {/* Subtle background glow */}
                  <div className="absolute -inset-2 bg-primary-500/5 rounded-3xl blur-lg opacity-50" />
                  
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-primary-500/5 group">
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <Image
                      src="/images/seanmishra.jpg"
                      alt="Sean Mishra - Full-stack Software Engineer"
                      fill
                      className="w-full h-full object-cover saturate-75 group-hover:saturate-100 group-hover:scale-102 transition-all duration-300"
                      priority
                    />
                  </div>
                </div>
                
                <div className="text-center lg:text-left space-y-4">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-primary">Sean Mishra</h1>
                    <p className="text-lg text-primary-500 font-medium">Full-Stack Software Engineer</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted justify-center lg:justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>Greater St. Louis, USA</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a 
                      href="/docs/sean-mishra-resume.pdf"
                      download="Sean_Mishra_Resume.pdf"
                      className="btn-primary group px-6 py-3 flex flex-1 justify-center items-center"
                      aria-label="Download Sean Mishra's resume"
                      onClick={() => trackEvent.resumeDownload()}
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      <span>Resume</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/seanmishra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group px-6 py-3 flex flex-1 justify-center items-center"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-16 lg:py-24 bg-section-subtle">
        <div className="max-w-7xl mx-auto px-20 xl:px-40">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Career Journey</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                From curiosity to{' '}
                <span className="gradient-text-primary">craft</span>
              </h2>
            </div>
            
            <div className="space-y-8">
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
                <div key={index} className="flex gap-8 group">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-full" />
                    {index < 4 && <div className="w-px h-20 bg-border-subtle mt-4" />}
                  </div>
                  <div className="space-y-4 pb-8 flex-1">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-sm font-medium text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                        <span className="text-muted text-sm">{item.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      <p className="text-muted leading-relaxed">{item.description}</p>
                    </div>
                    <ul className="space-y-2 text-muted">
                      {achievementsToShow.map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {item.detailedAchievements.length > item.shortAchievements.length && (
                      <button
                        onClick={() => toggleRole(index)}
                        className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Show More Details ({item.detailedAchievements.length - item.shortAchievements.length} more)
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-20 xl:px-40">
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Philosophy</span>
                <div className="w-12 h-px bg-primary-500" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                How I{' '}
                <span className="gradient-text-primary">approach</span>
                {' '}building software
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
                <div key={index} className="p-6 rounded-xl bg-background border border-default hover:border-primary-500/20 transition-colors group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      {principle.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-primary">{principle.title}</h3>
                      <p className="text-muted leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="py-16 lg:py-24 bg-section-subtle">
        <div className="max-w-7xl mx-auto px-20 xl:px-40">
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Technical Arsenal</span>
                <div className="w-12 h-px bg-primary-500" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                The stack that makes {' '}
                <span className="gradient-text-primary">magic</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                I believe in using the right tool for the job. Here are the technologies I&apos;ve mastered and rely on to build exceptional software.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  name: "React",
                  category: "Frontend",
                  description: "My go-to for building interactive UIs. From simple components to complex state management.",
                  url: "https://react.dev",
                  color: "bg-primary-500/10 text-primary-600"
                },
                {
                  name: "Next.js",
                  category: "Frontend",
                  description: "The React framework I use for production apps. SSR, API routes, and excellent DX.",
                  url: "https://nextjs.org",
                  color: "bg-primary-500/10 text-primary-600"
                },
                {
                  name: "TypeScript",
                  category: "Frontend",
                  description: "JavaScript with superpowers. Essential for maintaining large codebases and catching bugs early.",
                  url: "https://www.typescriptlang.org",
                  color: "bg-primary-500/10 text-primary-600"
                },
                {
                  name: "Node.js",
                  category: "Backend",
                  description: "Server-side JavaScript that lets me build fast, scalable network applications.",
                  url: "https://nodejs.org",
                  color: "bg-success-500/10 text-success-600"
                },
                {
                  name: "MongoDB",
                  category: "Backend",
                  description: "Flexible NoSQL database perfect for rapid development and scaling modern applications.",
                  url: "https://mongodb.com",
                  color: "bg-success-500/10 text-success-600"
                },
                {
                  name: "Railway",
                  category: "DevOps",
                  description: "Modern deployment platform for effortless infrastructure management and scaling.",
                  url: "https://railway.app",
                  color: "bg-secondary-500/10 text-secondary-600"
                },
                {
                  name: "Tailwind CSS",
                  category: "Frontend",
                  description: "Utility-first CSS that makes styling fast and consistent. Perfect for rapid prototyping.",
                  url: "https://tailwindcss.com",
                  color: "bg-primary-500/10 text-primary-600"
                },
                {
                  name: "Docker",
                  category: "DevOps",
                  description: "Containerization that ensures 'it works on my machine' works everywhere.",
                  url: "https://docker.com",
                  color: "bg-secondary-500/10 text-secondary-600"
                }
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl bg-background border border-default hover:border-primary-500/20 transition-all hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-primary group-hover:text-primary-500 transition-colors">
                          {tool.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${tool.color}`}>
                          {tool.category}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary-500 transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-muted leading-relaxed">{tool.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Additional Technologies & Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Frontend */}
                <div className="p-6 rounded-xl bg-background border border-default hover:border-primary-500/20 transition-colors group">
                  <h4 className="text-lg font-semibold text-primary-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    Frontend
                  </h4>
                  <div className="space-y-3">
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
                        className="block px-3 py-2 text-sm text-muted bg-primary-500/5 rounded-lg border border-primary-500/10 hover:bg-primary-500/10 hover:text-primary-600 transition-colors group"
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
                <div className="p-6 rounded-xl bg-background border border-default hover:border-success-500/20 transition-colors group">
                  <h4 className="text-lg font-semibold text-success-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    Backend
                  </h4>
                  <div className="space-y-3">
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
                        className="block px-3 py-2 text-sm text-muted bg-success-500/5 rounded-lg border border-success-500/10 hover:bg-success-500/10 hover:text-success-600 transition-colors group"
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
                <div className="p-6 rounded-xl bg-background border border-default hover:border-secondary-500/20 transition-colors group">
                  <h4 className="text-lg font-semibold text-secondary-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                    DevOps
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "GH Actions", url: "https://github.com/features/actions" },
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
                        className="block px-3 py-2 text-sm text-muted bg-secondary-500/5 rounded-lg border border-secondary-500/10 hover:bg-secondary-500/10 hover:text-secondary-600 transition-colors group"
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
                <div className="p-6 rounded-xl bg-background border border-default hover:border-warning-500/20 transition-colors group">
                  <h4 className="text-lg font-semibold text-warning-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                    Tooling
                  </h4>
                  <div className="space-y-3">
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
                        className="block px-3 py-2 text-sm text-muted bg-warning-500/5 rounded-lg border border-warning-500/10 hover:bg-warning-500/10 hover:text-warning-600 transition-colors group"
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

      {/* Beyond Code */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-20 xl:px-40">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Beyond Code</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                What drives me{' '}
                <span className="gradient-text-primary">outside</span>
                {' '}of work
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-500/10 text-primary-500 rounded-2xl flex items-center justify-center mx-auto">
                    {interest.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary">{interest.title}</h3>
                    <p className="text-muted leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status & Availability */}
      <section className="py-16 lg:py-24 bg-section-subtle">
        <div className="max-w-4xl mx-auto px-20 xl:px-40 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">Current Status</span>
                <div className="w-12 h-px bg-primary-500" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                Ready to build{' '}
                <span className="gradient-text-primary">
                  together
                </span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-lg font-medium text-primary">Currently available for new projects and roles</span>
              </div>
              
              <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto">
                I&apos;m actively seeking new opportunities to work on exciting projects with great teams. 
                Whether you need a technical co-founder, a senior engineer, or a AI consultant to help scale your product, 
                let&apos;s explore how we can work together.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <Link 
                  href="/contact"
                  className="btn-primary-large group min-w-[200px] px-10 py-5"
                  onClick={() => trackEvent.contactClick('cta_section')}
                >
                  <span className="text-lg">Let&apos;s Talk</span>
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/projects"
                  className="btn-secondary-large group min-w-[200px] px-10 py-5"
                  onClick={() => trackEvent.projectsClick('cta_section')}
                >
                  <span className="text-lg">See My Work</span>
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
