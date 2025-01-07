"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tools() {
  useEffect(() => {
    AOS.init({
      duration:500,  
   
    });
  }, []);

  return (
    <div className="mt-10 mb-10 sm:mt-40 sm:mb-20 py-14 w-full">
      <div className="flex items-center justify-center relative">
        <div className="absolute w-full">
          <div className="flex">
            <img
              src="/ai-tools.jpg"
              alt="tools"
              className="w-full max-h-[450px] object-cover"
              draggable={false}
              data-aos="fade-right" // AOS animation
            />
            <img
              src="/wolfram-alpha.png"
              alt="tools"
              className="w-full hidden sm:block max-h-[450px] object-cover"
              draggable={false}
              data-aos="fade-left" // AOS animation
            />
          </div>
        </div>
        <div
          className="relative z-50 overflow-hidden"
          data-aos="zoom-in" // AOS animation
        >
          <h1 className="uppercase text-outline text-center text-5xl md:text-6xl xl:text-[220px] font-sans font-bold text-transparent bg-clip-text whitespace-nowrap">
            Coming soon
          </h1>
        </div>
      </div>
    </div>
  );
}
