'use client';
import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Zap, Target, Code2, Globe, Database, Smartphone } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Been A While',
      description: 'A developer-friendly platform that lets you track anything through HTTP requests. Create trackers with unique webhook URLs and get real-time visual feedback (green/yellow/red) on freshness. Perfect for monitoring system health checks, personal habits, business processes, IoT devices, and automation workflows. Integrates seamlessly with iOS Shortcuts, Home Assistant, cron jobs, and any system capable of HTTP requests.',
      tech: ['Next.js', 'TypeScript', 'API Routes', 'Webhook System', 'Real-time Updates'],
      category: 'Web Application',
      status: 'Live',
      year: '2025',
      link: 'https://beenawhile.app/',
      github: null,
      featured: true,
    },
  ];

  const categories = ['All', 'Web Application'];

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
              <div className="space-y-4 leading-relaxed text-lg">
                <p>
                  Welcome to my project showcase. Here you&apos;ll find the applications and tools I&apos;ve built to solve 
                  real-world problems and explore new technologies.
                </p>
                <p>
                  Each project represents a journey of learning, iteration, and problem-solving. I focus on creating 
                  developer-friendly tools and user-centered experiences that make a meaningful impact.
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
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-lg font-mono ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      <p className="leading-relaxed">{project.description}</p>
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

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                        <div className="flex items-center gap-4">
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

                        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(project.category)}
                            <span className="font-mono">{project.category}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                        </div>
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

            <div className="grid md:grid-cols-2 gap-6">
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
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">{project.year}</span>
                      <div className="flex items-center gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-mono rounded hover:opacity-80 transition-opacity"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View Live
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 text-xs font-mono rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                          >
                            <Github className="w-3 h-3" />
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
    </div>
  );
}
