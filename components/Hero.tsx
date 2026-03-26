import Image from "next/image";

import { LightningBolt } from "@/components/icons/LightningBolt";
import { socialLinks } from "@/data/socials";

const heroLinks = socialLinks.filter((link) => link.name !== "Email");

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 pt-20 pb-12 lg:pt-24 lg:pb-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-32 left-10 text-primary/10 text-6xl md:text-8xl">
        <LightningBolt />
      </div>
      <div className="absolute bottom-32 right-10 text-primary/10 text-6xl md:text-8xl hidden lg:block">
        <LightningBolt />
      </div>

      {/* Red cheek accents */}
      <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Alex <span className="text-primary">Appleget</span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-muted mb-3">
              Software Engineer
            </p>
            <p className="text-text-muted mb-8 max-w-md mx-auto lg:mx-0">
              Building secure, scalable applications with a focus on AI integrations
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <a
                href="/resume.pdf"
                download="Alex_Appleget_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <LightningBolt className="text-lg" />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {heroLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm border border-border rounded-md text-text-muted hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                  alt="Laptop with code on screen"
                  width={500}
                  height={350}
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
