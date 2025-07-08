export default function About() {
  return (
    <div className="spacing-section">
      <header className="text-center mb-16">
        <h1 className="text-display-xl text-primary mb-4">
          About Me
        </h1>
        <p className="text-body-lg text-muted max-w-2xl mx-auto">
          Designer & Developer passionate about creating beautiful, functional digital experiences.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass spacing-card rounded-lg">
          <h2 className="text-display-md text-primary mb-6">Background</h2>
          <p className="text-body-md text-muted mb-4">
            I&apos;m a full-stack developer with a passion for creating intuitive and visually 
            appealing digital experiences. My journey in tech has been driven by curiosity 
            and a desire to solve complex problems through elegant solutions.
          </p>
          <p className="text-body-md text-muted">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, reading about 
            design principles, or working on side projects that challenge my creativity.
          </p>
        </div>

        <div className="glass spacing-card rounded-lg">
          <h2 className="text-display-md text-primary mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS', 'Design Systems'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-surface-1 text-text-primary rounded-full text-body-sm"
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
