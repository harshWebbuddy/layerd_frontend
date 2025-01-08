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
              src="/cards/card6.svg"
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
              <span className="font-semibold">Code Review</span>{" "}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-[12px] 2xl:text-[16px] text-left text-white mt-2 w-full max-w-[600px] leading-normal font-light"
            >
              <li>
                {" "}
                Improve code readability and maintainability with our AI-powered
                refactoring tool. Our AI can automatically identify areas for
                improvement, such as redundant code, inconsistent formatting,
                and poor naming conventions.
              </li>
              <li>
                By applying automated refactoring techniques, you can
                significantly enhance the quality and maintainability of your
                code.
              </li>
              <li>
                Code Review: Identify potential issues and suggest improvements
                in your code. Our AI can perform automated code reviews,
                flagging potential bugs, security vulnerabilities, and style
                violations.
              </li>
              <li>
                By catching errors early in the development process, you can
                save time and effort and improve the overall quality of your
                code.
              </li>
            </p>

            <div className="flex flex-col gap-20 mt-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex flex-row items-center justify-start gap-8 group text-[12px] 2xl:text-[18px]"
              >
                <Link href="/auth/register" className="no-underline">
                  <button className="border-white border font-medium flex items-center gap-2 text-white 2xl:py-3.5 2xl:px-6 rounded-xl py-2 px-2 group-hover:font-bold shadow-md hover:shadow-">
                    Explore Code Review
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
