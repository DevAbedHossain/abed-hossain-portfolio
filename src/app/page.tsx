import Hero from "@/components/homepage/Hero";
import HowIWork from "@/components/homepage/HowIWork";
import AboutMe from "@/components/homepage/AboutMe";
import Skills from "@/components/homepage/Skills";
import Projects from "@/components/homepage/Projects";
import Testimonials from "@/components/homepage/Testimonials";
import Contact from "@/components/homepage/Contact";
import Blog from "@/components/homepage/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIWork />
      <AboutMe />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
