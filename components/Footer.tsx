import { Pokeball } from "@/components/icons/Pokeball";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
          <span>Gotta catch &apos;em all</span>
          <Pokeball className="text-primary text-lg" />
          <span>© {new Date().getFullYear()} Alex Appleget</span>
        </div>
      </div>
    </footer>
  );
};
