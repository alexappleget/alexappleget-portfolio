import { About } from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { TechStrip } from "@/components/TechStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}
