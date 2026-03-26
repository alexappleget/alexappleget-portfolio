import { LightningBolt } from "@/components/icons/LightningBolt";
import { socialLinks } from "@/data/socials";

const heroLinks = socialLinks.filter((link) => link.name !== "Email");

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 lg:pt-24 relative overflow-hidden"
    >
      {/* Decorative lightning bolts */}
      <div className="absolute top-32 left-10 text-primary/20 text-6xl md:text-8xl">
        <LightningBolt />
      </div>
      <div className="absolute bottom-32 right-10 text-primary/20 text-6xl md:text-8xl">
        <LightningBolt />
      </div>
      <div className="absolute top-1/4 right-1/4 text-secondary/10 text-4xl hidden md:block">
        <LightningBolt />
      </div>

      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Alex <span className="text-primary">Appleget</span>
        </h1>
        <p className="text-xl sm:text-2xl text-text-muted mb-12">
          Software Engineer
        </p>

        <a
          href="/resume.pdf"
          download="Alex_Appleget_Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/25 mb-12"
        >
          <LightningBolt className="text-lg" />
          Download Resume
        </a>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {heroLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm border border-border rounded-md text-text-muted hover:text-primary hover:border-primary/50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Pikachu red cheek accents */}
      <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-secondary/20 blur-2xl" />
      <div className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-secondary/20 blur-2xl" />
    </section>
  );
};
