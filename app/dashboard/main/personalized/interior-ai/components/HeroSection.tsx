import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center py-20 px-5">
      {/* Left Section with Text */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left py-10">
        <Image
          src="/upload.jpg"
          alt="Decorative Path"
          width={20}
          height={30}
          className="absolute top-0 left-0 transform -translate-x-12 translate-y-10"
          data-aos="fade-down"
          data-aos-delay="100"
        />
        <div className="z-10">
          <h2
            className="text-primary-orange tracking-wider text-3xl sm:text-4xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Render in your own style
          </h2>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-5 text-white leading-snug"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Fire your interior designer
          </h1>
          <p
            className="text-lg text-primary-lightgray mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Design your own interior with the first AI Interior Designer
          </p>
          <button
            className="mt-10 py-5 px-8 rounded-lg font-semibold uppercase text-sm ring-1 ring-primary-lightgray hover:bg-primary-orange hover:text-primary-black hover:ring-primary-orange transition duration-500"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Let's work together
          </button>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Image
          src="/assets/hero_asset1.png"
          alt="AI Interior Design Illustration"
          width={600}
          height={600}
          className="w-full object-contain"
          data-aos="slide-left"
          data-aos-delay="100"
          data-aos-duration="600"
        />
      </div>
    </div>
  );
}
