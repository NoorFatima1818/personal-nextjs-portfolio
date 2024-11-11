import React from "react";
// import image from "next"
// import book from './book.jpg'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-700">
       {/* <img src={book} /> */}
       
      {/* <img src="assets/images/profile.png" alt="" /> */}
             <small className="mb-2 block text-xs">
        &copy; 2024 Noor Fatima. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion,Vercel hosting.
      </p>
    </footer>
  );
}