import About from "@/components/about";
import Contact from "@/components/contact";

import People from "@/components/people";

import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <People />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
