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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, from web applications to design systems.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
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
