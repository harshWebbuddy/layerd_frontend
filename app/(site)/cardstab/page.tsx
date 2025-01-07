"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Company from "./components/Company";
import Industry from "./components/Industry";
import Team from "./components/Team";

const Layout2 = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("company");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Code Writing":
        return <Company />;
      case "Stable Diffusion":
        return <Team />;
      case " Mid Journey":
        return <Industry />;
      case " Create Avatar":
        return <Industry />;
      default:
        return <Company />;
    }
  };

  return (
    <main className="sm:py-12 ">
      <div className="w-full flex flex-col items-center justify-center mx-auto gap-8">
        <div
          className="bg-transparent border-[#FFFFFF] border  p-2 flex flex-row shadow-lg items-center justify-center mx-auto rounded-3xl w-full max-w-[653px] transition duration-500"
          data-aos="zoom-in"
        >
          {["Dalle -2", "Stable Diffusion", "Mid Journey", "Create Avatar"].map(
            (tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "w-full flex justify-center p-3 text-center rounded-xl    transition-all duration-300 transform",
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#C82442] to-[#D73B6B] text-white shadow-lg scale-105"
                    : "hover:bg-[#D73B6B] hover:scale-105"
                )}
              >
                <span className="text-base font-semibold capitalize">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </div>
            )
          )}
        </div>
        <div className="w-full px-4" data-aos="fade-up">
          {renderContent()}
        </div>
      </div>
    </main>
  );
};

const SixCardTab = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="max-w-[1628px] rounded-b-[60px] bg-transparent flex flex-col justify-center items-center gap-10 w-full mx-auto p-10 shadow-2xl">
        <Layout2 children={undefined} />
      </div>
    </div>
  );
};

export default SixCardTab;
