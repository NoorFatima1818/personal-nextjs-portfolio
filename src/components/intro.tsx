

"use client";
import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';



const Intro = () => {
  return (
 <section className="mb-28 max-w-[50rem] text-center sm:mb-0">

  {/* image */}
    <div className="flex items center justify-center">
        <motion.div initial={{opacity:0, scale: 0}}
                     animate={{opacity:1, scale:1}}
                     transition={{duration:0.2,
                      type:"tween"
                     }}>
            <Image
             alt="" src="/images/profile.png" width="192" height="192" quality="95" 
             priority={true}  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

           
        </motion.div>

    </div>

    {/* Intro */}
    <motion.p className="mb-10 mt-4 px-4 mr-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
    >
    <span className="font-bold">Welcome! I am Noor Fatima, </span> 
    a <span className="font-bold">Frontend developer</span> specializing in crafting responsive and visually appealing 
    <span className="italic"> web applications</span>. I enjoy turning ideas into reality 
    with clean code and modern web technologies. My current focus is <span className="font-bold italic underline"> Next.js.</span>
    </motion.p>

 {/* Buttons  */}

    <motion.div  className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
     initial={{ opacity: 0, y: 100 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{
       delay: 0.1,
     }}>

      {/* Contact button */}
     <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
     
     ">
     contact me here <BsArrowRight/>
     </Link>


{/* download button */}
     <a href="/images/myCv.pdf"download className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition">
      Download CV <HiDownload/>
     </a>


{/* Linkedin Button */}
     <a href="https://www.linkedin.com/in/noor-fatima-0412b62b5" className="bg-white px-4 text-gray-700 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-150 hover:scale-150 hover:bg-white hover:text-gray-950 active:scale-105 transition"
     target="_blank"
     >
      <BsLinkedin/>
     </a>

{/* Github Button */} 
     <a href="https://github.com/NoorFatima1818" className="bg-white px-4 text-gray-700 py-3 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-150 hover:scale-150 hover:bg-white hover:text-gray-950 active:scale-105 transition"
     target="_blank"
     >
      <BsGithub/>
     </a>
    </motion.div>

    
    </section>
  )
}

export default Intro;

