import { socialLinks } from "@/data/socials";

const heroLinks = socialLinks.filter((link) => link.name !== "Email");

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Alex <span className="text-primary">Appleget</span>
        </h1>
        <p className="text-xl sm:text-2xl text-text-muted mb-8">
          Software Engineer
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {heroLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded-lg text-text-muted hover:text-primary hover:border-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download="Alex_Appleget_Resume.pdf"
          className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};
