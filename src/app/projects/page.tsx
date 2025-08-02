'use client';
import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Zap, Target, Code2, Globe, Database, Smartphone } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
      longDescription: 'Built for a mid-sized retailer, this platform handles 10K+ daily transactions with features including dynamic pricing, recommendation engine, and multi-vendor support.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'Web Application',
      status: 'Live',
      year: '2024',
      link: 'https://example.com',
      github: 'https://github.com/example',
      team: '4 developers',
      duration: '6 months',
      featured: true,
    },
    {
      title: 'Design System Library',
      description: 'A comprehensive design system with 50+ reusable components, documentation, and automated testing.',
      longDescription: 'Created to unify design across multiple products, featuring Storybook documentation, automated visual regression testing, and seamless Figma integration.',
      tech: ['React', 'Storybook', 'TypeScript', 'Figma API', 'Jest'],
      category: 'Design System',
      status: 'In Progress',
      year: '2024',
      link: 'https://storybook.example.com',
      github: 'https://github.com/example',
      team: 'Solo project',
      duration: '4 months',
      featured: true,
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization and customizable reporting.',
      longDescription: 'Processes millions of data points in real-time, featuring custom chart components, data export capabilities, and role-based access control.',
      tech: ['React', 'D3.js', 'WebSocket', 'Express', 'MongoDB'],
      category: 'Data Visualization',
      status: 'Live',
      year: '2023',
      link: 'https://analytics.example.com',
      github: null,
      team: '2 developers',
      duration: '3 months',
      featured: false,
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile app for workout tracking with offline support and social features.',
      longDescription: 'Features include workout planning, progress tracking, social challenges, and integration with wearable devices. Built with React Native for iOS and Android.',
      tech: ['React Native', 'Expo', 'SQLite', 'Firebase', 'HealthKit'],
      category: 'Mobile App',
      status: 'Beta',
      year: '2024',
      link: 'https://app.example.com',
      github: 'https://github.com/example',
      team: '3 developers',
      duration: '8 months',
      featured: false,
    },
    {
      title: 'API Gateway & Microservices',
      description: 'Scalable microservices architecture with API gateway, authentication, and monitoring.',
      longDescription: 'Designed to handle high-traffic loads with auto-scaling, rate limiting, and comprehensive logging. Supports GraphQL and REST APIs.',
      tech: ['Node.js', 'GraphQL', 'Docker', 'Kubernetes', 'AWS'],
      category: 'Backend',
      status: 'Live',
      year: '2023',
      link: null,
      github: 'https://github.com/example',
      team: '5 developers',
      duration: '12 months',
      featured: true,
    },
    {
      title: 'AI-Powered Content Editor',
      description: 'Smart content editing tool with AI suggestions, collaborative editing, and version control.',
      longDescription: 'Integrates OpenAI GPT for content suggestions, real-time collaboration like Google Docs, and advanced markdown support with live preview.',
      tech: ['Next.js', 'OpenAI API', 'Socket.io', 'Prisma', 'Vercel'],
      category: 'AI/ML',
      status: 'Planning',
      year: '2024',
      link: null,
      github: null,
      team: 'Solo project',
      duration: '6 months (planned)',
      featured: false,
    },
  ];

  const categories = ['All', 'Web Application', 'Mobile App', 'Design System', 'Backend', 'Data Visualization', 'AI/ML'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-success-500/10 text-success-600 dark:text-success-400 border border-success-500/20';
      case 'In Progress':
        return 'bg-warning-500/10 text-warning-600 dark:text-warning-400 border border-warning-500/20';
      case 'Beta':
        return 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20';
      case 'Planning':
        return 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border border-neutral-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border border-neutral-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Application':
        return <Globe className="w-4 h-4" />;
      case 'Mobile App':
        return <Smartphone className="w-4 h-4" />;
      case 'Design System':
        return <Code2 className="w-4 h-4" />;
      case 'Backend':
        return <Database className="w-4 h-4" />;
      case 'Data Visualization':
        return <Target className="w-4 h-4" />;
      case 'AI/ML':
        return <Zap className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-mono font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                {`PROJECTS //`}
              </h1>
              <div className="space-y-4 leading-relaxed">
                <p className="text-lg">
                  A collection of projects showcasing my work across web applications, mobile apps, and system architecture. 
                  Each project represents real-world problem-solving and technical growth.
                </p>
                <p>
                  From rapid prototypes to production-scale systems, I focus on delivering user-centered solutions 
                  that drive meaningful impact. Here&apos;s what I&apos;ve been building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Featured Projects */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                {`FEATURED //`}
              </h2>
              <p className="leading-relaxed">
                Highlighted projects that showcase key technical skills and impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(project.category)}
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-lg font-mono ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-mono text-sm rounded hover:opacity-80 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 font-mono text-sm rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </a>
                        )}
                      </div>
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

      {/* All Projects */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {`ALL PROJECTS //`}
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(project.category)}
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                            {project.category}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-lg font-mono ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-neutral-500 dark:text-neutral-400 text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                      <span>{project.year}</span>
                      <div className="flex items-center gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
