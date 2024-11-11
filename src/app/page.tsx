
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 scroll-mt-[100rem]" id="home">
      {/* <img src='../../public/images/profile.png'></img> */}
      <Intro />
      <SectionDivider />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>

    </main>
  );
}
