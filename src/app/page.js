import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/Process/Process";
import Stats from "@/components/Stats/Stats";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <main className="bg-[var(--color-ivory)] text-[var(--foreground)] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <About />
      <Experience />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
