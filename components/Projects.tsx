import { LightningBolt } from "@/components/icons/LightningBolt";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary flex items-center gap-3">
          <LightningBolt />
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border-2 border-border rounded-lg bg-background relative overflow-hidden hover:border-primary/50"
            >
              {/* Red cheek accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-secondary/20 blur-xl" />

              <h3 className="text-2xl font-semibold mb-2 relative z-10">{project.title}</h3>
              <p className="text-text-muted mb-4 relative z-10">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-text-muted mb-4 space-y-1 relative z-10">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 relative z-10">
                {project.githubUrls.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
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
