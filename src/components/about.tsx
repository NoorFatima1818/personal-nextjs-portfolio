
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";


export default function About() {
  
  return (
    <motion.section
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3 font-sans">
  After developing my skills in{" "}
  <span className="font-medium">HTML, CSS, JavaScript, TypeScript</span>, and
  <span className="font-medium">Next.js</span>, I expanded my expertise by
  diving into <span className="font-medium">Tailwind CSS</span> for
  responsive and modern web design.{" "}
  <span className="italic">My favorite part of frontend development</span> is
  creating intuitive and engaging user experiences. I{" "}
  <span className="underline">love</span> transforming design ideas into
  functional and dynamic web applications. My tech stack includes{" "}
  <span className="font-medium">React, Next.js, and Tailwind CSS</span>. I am
  continuously seeking new challenges and opportunities to enhance my skills
  in web development.
</p>

<p>
  <span className="italic">When I am not coding</span>, I enjoy playing video
  games, watching movies, and spending time outdoors. I also like learning
  about <span className="font-medium">new technologies</span> and improving
  my skills.
</p>

    </motion.section>
  );
}