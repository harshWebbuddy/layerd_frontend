"use client";
import Image from "next/image";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import {
  AiPersonaObject,
  botOptions,
  voiceOptions,
  writingOptions,
} from "@/utils/constants/objects";
import BoxComponent from "./components/BoxComponent";

import SixCardTab from "./cardstab/page";
import SwiperComponent from "./components/Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Motion from "./components/Motion";
import SixCardTabTwo from "./cardstab copy/page";
import Education from "./components/Education";
import SixCardTabThree from "./cardtab2/page";
import { useState } from "react";
import AiModal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-[url('/background-image-earth-landing.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <Hero />
        <div className="bg-gradient-to-b from-transparent to-[#16161b] inset-x-0 h-40 absolute bottom-0 w-full z-10" />
      </div>
      <section className="max-w-[1400px] w-full mx-auto p-2.5 sm:p-4">
        <div id="ai-search" className="mt-20">
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Search Engine
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>
          <div className="w-full flex sm:items-center flex-col">
            <p
              className="text-sm text-gray-300 text-left sm:text-center max-w-3xl mt-6 leading-relaxed"
              data-aos="fade-up"
            >
              Unleash the power of AI with our intelligent search engine.
              Experience precise, personalized, and faster search results,
              revolutionizing the way you browse.
            </p>
          </div>
          <div className="w-full mt-5 sm:mt-10">
            <SixCardTabThree />
          </div>
        </div>
        <div id="ai-chat" className="mt-28" data-aos="fade-up">
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Chatbots
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>

          <SwiperComponent botOptions={botOptions} />
        </div>
        <div
          id="ai-          images"
          className="mt-12 sm:mt-20"
          data-aos="fade-up"
        >
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Images
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>
          <SixCardTab />
        </div>

        <div id="ai-writing" className="mt-28" data-aos="fade-up">
          <div className="absolute h-[900px] w-[70px] sm:w-[150px] bg-[#27ACB2]  blur-[250px] rounded animate-pulse" />
          <div className="flex flex-row w-full">
            <div
              className="w-full flex items-center gap-3"
              data-aos="fade-right"
            >
              <Image
                src="/slash.png"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className="w-[300px] object-cover h-[70px] absolute -left-80 translate-y-2"
              />
              <h1 className="relative z-10 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
                AI Writing
              </h1>

              {/* <div className="h-[3px] max-w-4xl translate-y-1.5 bg-gradient-to-r from-gray-600 via-gray-800/50 to-transparent flex-1" /> */}
            </div>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam eu nulla consectetur
              elit sed in at vitae. Luctus orci vel lectus rhoncus nulla ac nec
              elementum. Donec arcu ac nulla elementum nunc rhoncus orci.
            </p>
          </div>{" "}
          <div className="w-full flex justify-between items-center  max-w-[500px] right-[200px] absolute  gap-x-60 mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm font-semibold w-full ring-1 ring-gray-200 hover:ring-transparent transition duration-300 hover:bg-primary-red px-6 py-3.5 rounded-lg hover:scale-105"
            >
              Explore all templates
            </button>
            <div className="flex flex-row gap-x-10 justify-between ">
              {" "}
              <button className="button-prev-slide   rounded-full flex text-white hover:text-[#D73B6B] transition-all duration-300">
                <ArrowLeft size={30} />
              </button>{" "}
              <button className="button-next-slide     rounded-full flex     text-white hover:text-[#D73B6B] transition-all duration-300">
                <ArrowRight size={30} />
              </button>
            </div>
          </div>
          <div className="mt-40 mb-5">
            <Motion
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              classNames="w-full"
            >
              <div className="w-full flex items-center px-8">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={25}
                  loop={true}
                  navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                  }}
                  className="!w-full"
                  slidesPerView={5}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {writingOptions.map((option, index) => (
                    <SwiperSlide key={index}>
                      <BoxComponent
                        option={option}
                        index={index}
                        isFullWidth={true}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Motion>
          </div>
        </div>

        <div id="ai-voice" className="mt-28" data-aos="fade-up">
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Voice
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>
          <div className="flex flex-row items-center w-full gap-x-10">
            <div
              className="flex flex-row flex-grow justify-between max-w-[590px] gap-5 mt-20"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {voiceOptions.slice(0, 1).map((option, index) => (
                <BoxComponent
                  option={option}
                  index={index}
                  isFullWidth={true}
                />
              ))}
            </div>
            <div className="flex justify-center flex-grow mt-20">
              <Image
                src="/svgs/mysvg1.svg"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className=""
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="flex flex-row -translate-x-12 items-center w-full gap-x-10">
            <div className="flex justify-center flex-grow mt-20">
              <Image
                src="/svgs/mysvg2.svg"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className=""
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>{" "}
            <div
              className="flex flex-row flex-grow justify-between max-w-[590px] gap-5 mt-20"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {voiceOptions.slice(1, 2).map((option, index) => (
                <BoxComponent
                  option={option}
                  index={index}
                  isFullWidth={true}
                />
              ))}
            </div>
          </div>
        </div>

        <div id="ai-codes" className="mt-12 sm:mt-20" data-aos="fade-up">
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Codes
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>
          <SixCardTabTwo />
        </div>
        <div
          id="ai-personalized"
          className="sm:mt-14 pt-14 pb-14 relative w-full"
          data-aos="fade-up"
        >
          <div
            className="absolute h-[900px] w-[70px] sm:w-[150px] bg-yellow-700 left-[-250px] blur-[250px] rounded"
            data-aos="fade-right"
          />
          <div
            className="bg-gradient-to-r w-full from-[#000] via-[#000]/80 to-[#000] absolute inset-0 z-[-1]"
            data-aos="fade-in"
          />
          <video
            className="w-full h-full absolute inset-0 object-cover z-[-2] hidden md:block"
            loop={true}
            autoPlay={true}
            data-aos="zoom-in"
          >
            <source
              src="/video/-17be-4cb0-88dd-864e300befea.mp4"
              type="video/mp4"
            />
          </video>
          <div id="create-your" className="mt-12 sm:mt-20" data-aos="fade-up">
            <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
            <div>
              <Image
                src="/slash.png"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
              />
              <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
                AI Personalization
              </h1>
              <Image
                src="/slash.png"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
              />
            </div>
          </div>
          <div
            className="w-full flex sm:items-center flex-col relative z-10"
            data-aos="fade-up"
          >
            <div
              className="mt-14 max-w-[1400px] mx-auto p-2.5 sm:p-4"
              data-aos="fade-up"
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 :grid-cols-3 gap-5"
                data-aos="zoom-in-left"
              >
                {AiPersonaObject.map((option, index) => (
                  <BoxComponent
                    isFullWidth={true}
                    option={option}
                    index={index}
                    isBorderShown={true}
                    key={index}
                    data-aos="zoom-in"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="create-your" className="mt-12 sm:mt-20" data-aos="fade-up">
          <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
          <div>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
            />
            <h1 className="relative z-10 sm:text-center uppercase mt-8 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              Create Your OWN GPT
            </h1>
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-10 hidden md:block select-none"
            />
          </div>

          <div>
            <h3 className="font-extrabold text-[20px] capitalize sm:text-[36px] flex mt-32 items-center mx-auto justify-center">
              Instantly Craft, Brand and Lunch Your Custom AI Chat
            </h3>
            <Education />
          </div>
        </div>
      </section>

      {/* <div id="ai-tools" className="w-full">
        <Tools />
        <div id="user-form" className="w-full flex flex-between">
          <h1 className="w-full text-center uppercase mt-4 text-lg sm:text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
            Ai tools
          </h1>
          <h1 className="w-full text-center uppercase mt-4 text-lg sm:text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
            Wolfram alpha
          </h1>
        </div>
      </div> */}
      <div className="w-full max-w-[1400px] mx-auto p-2.5 sm:p-4">
        <Contact message="Get a front-row seat to innovation. Subscribe to our newsletter today" />
      </div>

      <AiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        children={""}
      />
    </main>
  );
}
