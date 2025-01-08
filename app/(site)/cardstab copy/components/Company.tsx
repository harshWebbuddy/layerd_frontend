import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Company = () => {
  return (
    <div className="bg-transparent sm:bg-[url('/media/black.svg')] zoom-background rounded-b-[100px] sm:rounded-none bg-cover bg-no-repeat relative flex items-start fade-in-background 2xl:p-0 p-4 w-full h-full justify-start mx-auto">
      <div className="w-full max-w-[1220px] 2xl:max-w-[1350px] flex flex-row justify-start brightness-110 relative gap-x-20 items-center mt-2 mb-6 2xl:mt-10 ">
        <div className="2xl:flex xl:flex lg:flex md:flex hidden items-start relative w-full justify-start">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-full relative z-0"
          >
            <Image
              className="xl:w-[500px] w-full 2xl:w-[800px] h-full"
              src="/cards/card4.svg"
              alt="Center Image"
              width={512}
              height={512}
            />
          </div>
        </div>{" "}
        <div className="w-full  gap-y-4 items-start flex flex-col">
          <div className="2xl:max-w-[603px] w-full brightness-95">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-[16px] xl:text-[24px] 2xl:text-[28px] text-left w-full leading-normal text-white"
            >
              <Image
                className="xl:w-[80px] w-full 2xl:w-[80px] h-full"
                src="/landing/AI-codes-1.png"
                alt="Center Image"
                width={80}
                height={80}
              />
              <span className="font-semibold">Explain Code</span>{" "}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-[12px] 2xl:text-[16px] text-left text-white mt-2 w-full max-w-[600px] leading-normal font-light"
            >
              <li>
                Understand complex code snippets with clear explanations. Our AI
                can break down complex code into simpler terms, making it easier
                to learn, debug, and maintain. Whether you're trying to
                understand legacy code or a new programming language.
              </li>
              <li>
                Our Explain Code feature can help you grasp the concepts quickly
              </li>{" "}
            </p>

            <div className="flex flex-col gap-20 mt-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex flex-row items-center justify-start gap-8 group text-[12px] 2xl:text-[18px]"
              >
                <Link href="/auth/register" className="no-underline">
                  <button className="border-white border font-medium flex items-center gap-2 text-white 2xl:py-3.5 2xl:px-6 rounded-xl py-2 px-2 group-hover:font-bold shadow-md hover:shadow-">
                    Explore Explain Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
