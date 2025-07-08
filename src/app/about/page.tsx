export default function About() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          About Me
        </h1>
        <p className="text-lg font-body text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Designer & Developer passionate about creating beautiful, functional digital experiences.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Background</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            I&apos;m a full-stack developer with a passion for creating intuitive and visually 
            appealing digital experiences. My journey in tech has been driven by curiosity 
            and a desire to solve complex problems through elegant solutions.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, reading about 
            design principles, or working on side projects that challenge my creativity.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS', 'Design Systems'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
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
