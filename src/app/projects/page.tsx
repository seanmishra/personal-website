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
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Projects
        </h1>
        <p className="text-lg font-body text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, from web applications to design systems.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="card p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{project.title}</h3>
              <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                {project.status}
              </span>
            </div>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
