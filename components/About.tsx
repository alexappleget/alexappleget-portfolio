import { LightningBolt } from "@/components/icons/LightningBolt";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-primary/10 text-6xl hidden md:block">
        <LightningBolt />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
          <LightningBolt />
          About Me
        </h2>
        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
          <p>
            Software Engineer specializing in React, Next.js, Node.js, and
            TypeScript. I build secure, scalable applications with a focus on AI
            integrations. When I&apos;m not coding, I&apos;m exploring the
            world, helping others learn to code, or building apps for games I
            love.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5 relative overflow-hidden">
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-secondary/20 blur-lg" />
              <h3 className="font-semibold text-primary mb-2">Helping Others</h3>
              <p className="text-sm relative z-10">
                I enjoy helping others learn and guiding them on their journey.
              </p>
            </div>
            <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5 relative overflow-hidden">
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-secondary/20 blur-lg" />
              <h3 className="font-semibold text-primary mb-2">Traveling</h3>
              <p className="text-sm relative z-10">
                Seeing the world allows you to see things through others&apos;
                eyes.
              </p>
            </div>
            <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5 relative overflow-hidden">
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-secondary/20 blur-lg" />
              <h3 className="font-semibold text-primary mb-2">Building</h3>
              <p className="text-sm relative z-10">
                I enjoy building server applications and full-stack apps for
                games I play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
