"use client";

import { useEffect, useState, memo } from "react";
  import clsx from "clsx";
import Company from "./components/Company";
import Industry from "./components/Industry";
import Team from "./components/Team";

// Memoize components for better performance
const MemoizedCompany = memo(Company);
const MemoizedTeam = memo(Team);
const MemoizedIndustry = memo(Industry);

const tabs = [
  "Layered vs Chrome",
  "Layered vs Edge",
  "Layered vs Firefox",
  "Layered vs Safari",
] as const;

type TabType = (typeof tabs)[number];

const Layout2 = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Layered vs Edge");
  const [isHovered, setIsHovered] = useState<string | null>(null);

   

  const renderContent = () => {
    switch (activeTab) {
      case "Layered vs Chrome":
      case "Layered vs Firefox":
        return <MemoizedCompany />;
      case "Layered vs Edge":
        return <MemoizedTeam />;
      case "Layered vs Safari":
        return <MemoizedIndustry />;
      default:
        return <MemoizedCompany />;
    }
  };

  return (
    <main className="sm:py-12 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full flex flex-col items-center justify-center mx-auto gap-8 relative z-10">
        {/* Tabs Container */}
        <div
          className="bg-black/20 backdrop-blur-xl border max-w-[800px] border-white/10 p-2 flex flex-row shadow-2xl items-center justify-center mx-auto rounded-3xl w-full   transition-all duration-500 hover:border-white/20"
          data-aos="zoom-in"
        >
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={() => setIsHovered(tab)}
              onMouseLeave={() => setIsHovered(null)}
              className={clsx(
                "relative w-full flex justify-center p-3 text-center  rounded-xl transition-all duration-300 transform cursor-pointer group",
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
  );
};

// Memoize the entire SixCardTabTwo component
const SixCardTabThree = memo(() => {
   

  return (
    <div className="relative">
      <div className="max-w-[1628px] rounded-b-[60px] bg-transparent flex flex-col justify-center items-center gap-10 w-full mx-auto p-10 shadow-2xl backdrop-blur-sm">
        <Layout2 />
      </div>
    </div>
  );
});

SixCardTabThree.displayName = "SixCardTabTwo";

export default SixCardTabThree;
