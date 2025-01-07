"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";

type Props = {
  message?: string;
};

export default function Contact({ message }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease-out', 
  
    });
  }, []);

  return (
    <div
      id="contact"
      className="mt-10 sm:mt-20 sm:px-3 relative flex justify-center items-center"
      data-aos="fade-up"  
      data-aos-delay="300" 
    >
      <div className="absolute h-[230px] w-[80px] rotate-45 blur-[100px] bg-gradient-to-br from-primary-red to-primary-yellow top-1/2 right-1/2 transform translate-x-1/2 -translate-y-[10%]" />
      
      <div
        className="max-w-5xl relative z-10 backdrop-blur-3xl bg-gradient-to-b from-transparent to-white/[0.05] w-full rounded-3xl flex flex-col items-center gap-2 border-b-[3px] border-white/10 py-14"
        data-aos="fade-up"  
        data-aos-delay="500"  
      >
        <h1>
          <Image
            src="/emoji-hands.png"
            alt="emoji-handsup"
            width={70}
            height={70}
          />
        </h1>
        <h1
          className="text-center font-semibold text-xl sm:text-3xl max-w-2xl leading-relaxed"
          data-aos="fade-up"  
          data-aos-delay="700"  
        >
          {message || (
            <span>
              Are You Ready
              <br /> For Getting Future Updates
            </span>
          )}
        </h1>
        
        
        <ContactForm />
      </div>
    </div>
  );
}
