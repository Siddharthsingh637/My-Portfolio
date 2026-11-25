import LenisProvider from "@/components/LenisProvider";
// import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <LenisProvider>
      <main>
        {/* Hero — sticky base layer, z-index: 1 */}
        <div className="sticky top-0 z-[1] h-screen">
          <Hero />
        </div>

        {/* Everything slides over the hero */}
        <div className="relative z-[2]">
          {/* <Navbar /> */}
          <About />
          <Education />
          <Manifesto />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </LenisProvider>
  );
}
