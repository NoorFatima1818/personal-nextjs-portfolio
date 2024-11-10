import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import { main } from "framer-motion/client";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 scroll-mt-[100rem]" id="home">
      <Intro />
      <SectionDivider />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>

    </main>
  );
}
