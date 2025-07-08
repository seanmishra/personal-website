'use client';

import { Layout } from '@/components/layout';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      status: 'In Progress',
    },
    {
      title: 'Design System',
      description: 'A comprehensive design system with reusable components',
      tech: ['React', 'Storybook', 'TypeScript'],
      status: 'Planning',
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for productivity',
      tech: ['React Native', 'Expo', 'TypeScript'],
      status: 'Ideation',
    },
  ];

  return (
    <Layout>
      <div className="spacing-section">
        <header className="text-center mb-16">
          <h1 className="text-display-xl text-primary mb-4">
            Projects
          </h1>
          <p className="text-body-lg text-muted max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, from web applications to design systems.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="glass spacing-card rounded-lg">
              <div className="mb-4">
                <h3 className="text-heading-xl text-primary mb-2">{project.title}</h3>
                <span className="px-2 py-1 bg-accent-main text-white rounded text-caption">
                  {project.status}
                </span>
              </div>
              
              <p className="text-body-md text-muted mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-surface-1 text-text-primary rounded text-body-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
