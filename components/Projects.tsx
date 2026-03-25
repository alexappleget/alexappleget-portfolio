import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border border-border rounded-lg bg-background"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-text-muted mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-background-secondary border border-border rounded-full text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-text-muted mb-4 space-y-1">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                {project.githubUrls.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
