import { socialLinks } from "@/data/socials";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about tech.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="px-6 py-3 border border-border rounded-lg text-text-muted hover:text-primary hover:border-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
