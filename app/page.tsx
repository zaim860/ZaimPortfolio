import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <footer className="footer">
  © 2026 {profile.name}</footer>
    </main>
  );
}
