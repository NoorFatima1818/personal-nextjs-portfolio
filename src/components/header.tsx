
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {links } from "../../lib/data";
import { li } from "framer-motion/client";
import clsx from "clsx";

export default function Header() {

  const [activeSection, setActiveSection]= useState("Home");
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full light:bg-gray-950 light:border-black/40 light:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <motion.nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"   initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>

 <ul className="text-gray-400 flex  justify-center items-center w-[22rem] flex-wrap gap-y-1 text-[9re] font-medium sm:w-[initial] sm:flex-nowwrap sm:gap-5">
  {
    links.map(link=>(
      <motion.li key={link.hash} 
      className="h-3/4 flex items-center justify-center"
      initial={{ y: -100,opacity:0}}
      animate={{y:0, opacity:1}}>
        <Link href={link.hash} className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  {
                    "text-gray-950":
                      activeSection === link.name,
                  }
                )}  
                onClick={() => {
                  setActiveSection(link.name);}}
                >
        {link.name}
        </Link>
      </motion.li>
    ))
  }
 </ul>
      </motion.nav>
    </header>
  );
}
