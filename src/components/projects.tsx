
import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
 <section  className="scroll-mt-28 mb-28" id="projects">
  <SectionHeading>My Projects</SectionHeading>

 
  <section className="text-gray-600 body-font mb-11 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full">  
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
           width="500" height="500" quality="95"
            alt="Calculator"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/calculator.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
             A command-line interface calculator built with TypeScript, enabling users to perform basic arithmetic operations seamlessly.
            </p>

            <Link href="https://github.com/NoorFatima1818/simple_calculator" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>





      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
           width="500" height="500" quality="95"
            alt="Calculator"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/atm.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
             Atm Machine
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
            A TypeScript-powered simulation of an ATM system that allows users to check balances, withdraw, and deposit funds
            </p>

            <Link href="https://github.com/NoorFatima1818/atm_machine" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
          width="500" height="500" quality="100"
            alt="Word"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/word.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Word Counter
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
            A simple TypeScript tool that counts words in a given text input for quick content analysis.
            Now you can easily count words in your essay.

            </p>

            <Link href="https://github.com/NoorFatima1818/word-counter" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>



      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
          width="500" height="500" quality="100"
            alt="LMS"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/university.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              University Management System
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
            A comprehensive TypeScript application that manages university data, including students, courses, and faculty, for streamlined administration.
            </p>

            <Link href="https://github.com/NoorFatima1818/University-Management-System" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>
    
    
      



      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
          width="500" height="500" quality="100"
            alt="LMS"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/currency.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Currency Converter
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
          
      A TypeScript-based CLI tool that converts between different currencies for quick financial calculations.
      This converter provides wide range of currencies.
            </p>

            <Link href="
      https://github.com/NoorFatima1818/Currency-Converter" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>
      









      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">

          <Image
          width="500" height="500" quality="100"
            alt="Numbers"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/guess.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Number Guessing Game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cli Typescript Project
            </h1>
            <p className="leading-relaxed">
            A fun TypeScript-based CLI game where users try to guess a randomly generated number, receiving feedback on their guesses to enhance the challenge and excitement.
            </p>

            <Link href="https://github.com/NoorFatima1818/number_guessing" target='_blank'>
            <p  className="text-black hover:underline hover:text-gray-500" > View Project</p></Link>
          </div>
        </div>
      </div>
    




      </div>








    </div>
  

</section>

</section>

  )
}

export default Projects