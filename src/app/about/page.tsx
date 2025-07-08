export default function About() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Designer & Developer passionate about creating beautiful, functional digital experiences.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Background</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m a full-stack developer with a passion for creating intuitive and visually 
            appealing digital experiences. My journey in tech has been driven by curiosity 
            and a desire to solve complex problems through elegant solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, reading about 
            design principles, or working on side projects that challenge my creativity.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS', 'Design Systems'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
