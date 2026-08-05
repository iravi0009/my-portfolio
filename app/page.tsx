import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Education from "@/sections/education/Education";
import Certifications from "@/sections/certifications/Certifications";
import Achievements from "@/sections/achievements/Achievements";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";
import Stats from "@/sections/stats/Stats";
import Research from "@/sections/research/Research";
import GitHub from "@/sections/github/GitHub";
import Timeline from "@/sections/timeline/Timeline";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Stats/>
      <About />
      <Timeline/>
      <Skills />
      <Projects />
      <GitHub/>
      <Education />
      <Achievements />
      <Research/>
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}