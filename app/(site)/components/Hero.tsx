"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { heroTools } from "@/utils/constants/objects";
import HeroButton from "./HeroButton";
import AccessButton from "./AccessButton";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div
      className="mt-40 sm:mt-[30%] lg:mt-[10%] sm:h-fit max-w-[1500px] mx-auto px-2 sm:px-4 min-h-[80vh] max-h-[75vh] relative overflow-hidden"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div
        className="flex flex-col gap-2 md:gap-4 items-center"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <h1
          className="text-4xl text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text flex gap-2"
          data-aos="fade-right"
        >
          Empowering
        </h1>
        <h1
          className="capitalize text-4xl text-center text-gray-200 leading-relaxed"
          data-aos="fade-left"
        >
          Everything, Everyone with AI
        </h1>
        <div data-aos="zoom-in-up" data-aos-delay="600">
          <AccessButton />
        </div>
      </div>

      <div className="hidden xl:flex justify-center mt-[15%] gap-10 h-[50vh] relative z-10">
        {heroTools.map((item, index) => {
          const angle = index * (180 / (heroTools.length - 1)) - 90;
          return <HeroButton angle={angle} index={index} item={item} />;
        })}
      </div>
      <div className="header-images">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <img
              src={`animated/assets-${index + 1}.png`}
              className={`header-img-${index + 1} relative z-0`}
              draggable={false}
            />
          ))}
      </div>
    </div>
  );
}
