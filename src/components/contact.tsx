 "use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Specify that form is a reference to an HTMLFormElement
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure form.current is not null before sending the email
    if (form.current) {
      emailjs.sendForm('service_x452ecg', 'template_1n01sf9', form.current, 'I_3emn91VAwYTpY28')
        .then((result) => {
          console.log('Email sent:', result.text);
          alert('Email sent successfully!');
        }, (error) => {
          console.log('Error:', error.text);
          alert('Failed to send email.');
        });

      // Reset the form after submission
      (e.target as HTMLFormElement).reset();
    } else {
      console.error("Form is not properly initialized.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* My email */}
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at {" "}
        <a href="mailto:noorf6873@outlook.com" className="underline">
          noorf6873@gmail.com </a>{" "}
        or through this form.
      </p>

      {/* Contact Form */}
      <form
        className="mt-10 flex flex-col"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="sender_name"
          type="text"
          required
          maxLength={500}
          placeholder="Enter Your Name"
          className="h-14 rounded-lg border-black/10 px-4 bg-gray-100 my-3"
        />
        <input
          name="sender_email"
          type="email"
          required
          maxLength={500}
          placeholder="Enter your email"
          className="h-14 rounded-lg border-black/10 px-4 bg-gray-100"
        />
        <textarea
          name="sender_message"
          className="h-52 my-3 rounded-lg border-black/10 p-4 bg-gray-100"
          placeholder="Your Message"
          required
          maxLength={500}
        />

        {/* Submit button */}
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
            outline-none transition-all flex items-center justify-center gap-2 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
              group-hover:translate-x-1
              group-hover:translate-y-1
            "
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
