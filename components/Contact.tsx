import { LightningBolt } from "@/components/icons/LightningBolt";
import { Pokeball } from "@/components/icons/Pokeball";
import { socialLinks } from "@/data/socials";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background-secondary relative overflow-hidden">
      {/* Decorative Pokeballs */}
      <div className="absolute top-10 left-10 text-primary/10 text-6xl">
        <Pokeball />
      </div>
      <div className="absolute bottom-10 right-10 text-primary/10 text-6xl">
        <Pokeball />
      </div>

      {/* Red cheek accents */}
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-1/2 right-10 w-24 h-24 rounded-full bg-secondary/10 blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <LightningBolt />
          Get In Touch
          <LightningBolt />
        </h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about tech.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="px-5 py-2.5 border border-primary/50 rounded-lg text-text-muted hover:text-primary hover:border-primary hover:bg-primary/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
