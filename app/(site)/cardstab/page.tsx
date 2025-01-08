"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import React, { useState, useEffect, memo } from "react";
import Company from "./components/Company";
import Industry from "./components/Industry";
import Team from "./components/Team";
import ImageAI from "./components/Image";
 

const tabs = [
  "Dalle -2",
  "Stable Diffusion",
  "Mid Journey",
  "Create Avatar",
] as const;

type TabType = (typeof tabs)[number];

const Layout2 = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Dalle -2");
  const [isHovered, setIsHovered] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Code Writing":
        return <Company />;
      case "Stable Diffusion":
        return <Team />;
      case "Mid Journey":
        return <Industry />;
      case "Create Avatar":
        return <ImageAI />;
      default:
        return <Company />;
    }
  };

  return (
    <>
      {" "}
     
      <main className="sm:py-12 relative overflow-hidden">
      
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto gap-8 relative z-10">
          {/* Tabs Container */}
          <div
            className="bg-black/20  max-w-[700px] backdrop-blur-xl border border-white/10 p-2 flex flex-row shadow-2xl items-center justify-center mx-auto rounded-3xl w-full max-w-[1400px] transition-all duration-500 hover:border-white/20"
            data-aos="zoom-in"
          >
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                onMouseEnter={() => setIsHovered(tab)}
                onMouseLeave={() => setIsHovered(null)}
                className={clsx(
                  "relative w-full flex justify-center p-3 text-center rounded-xl transition-all duration-300 transform cursor-pointer group",
                  {
                    "bg-gradient-to-r from-[#C82442] to-[#D73B6B] text-white shadow-xl scale-105":
                      activeTab === tab,
                    "hover:bg-white/5": activeTab !== tab,
                  }
                )}
              >
                <span
                  className={clsx(
                    "text-base font-semibold capitalize transition-all duration-300",
                    activeTab === tab ? "text-white" : "text-gray-300",
                    "group-hover:text-white"
                  )}
                >
                  {tab}
                </span>

                {/* Hover Effect */}
                {isHovered === tab && activeTab !== tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C82442]/20 to-[#D73B6B]/20 rounded-xl animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div
            className="w-full px-4 transition-all duration-500"
            data-aos="fade-up"
          >
            {renderContent()}
          </div>
        </div>
      </main>
    </>
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
