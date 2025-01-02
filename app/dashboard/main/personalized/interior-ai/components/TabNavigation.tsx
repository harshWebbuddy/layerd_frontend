"use client";

import { ChevronRight } from "lucide-react";
// import { TailSpin } from "react-loader-spinner";
import clsx from "clsx";
import DotsLoader from "../../../ai-chat/anthopic-ai/components/Dotsloader";

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  file: File | null;
  loading: boolean;
  submitImage: () => Promise<void>;
  children: React.ReactNode;
}

export default function TabNavigation({
  tabs,
  activeTab,
  setActiveTab,
  file,
  loading,
  submitImage,
  children,
}: TabNavigationProps) {
  return (
    <section className="relative py-12 px-3">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col sm:items-center space-y-12 mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              disabled={index !== 0 && !file}
              className={clsx(
                "flex items-center gap-6",
                index !== 0 && !file && "cursor-not-allowed"
              )}
              onClick={() => setActiveTab(tab)}
            >
              <div className="flex items-center gap-2">
                <div
                  className={clsx(
                    "text-black bg-primary-yellow h-6 w-6 grid place-content-center text-xs rounded-full bg-primary-lightgray transition duration-500",
                    tab === activeTab && "!bg-primary-orange text-white"
                  )}
                >
                  {index + 1}
                </div>
                <p
                  className={clsx(
                    "font-semibold text-lg whitespace-nowrap text-primary-lightgray text-opacity-90 transition duration-500",
                    tab === activeTab && "!text-white text-opacity-100"
                  )}
                >
                  {tab}
                </p>
              </div>
              {index !== tabs.length - 1 && <ChevronRight />}
            </button>
          ))}
        </div>
        {children}
      </div>
      <NavigationButtons
        activeTab={activeTab}
        tabs={tabs}
        setActiveTab={setActiveTab}
        file={file}
        loading={loading}
        submitImage={submitImage}
      />
    </section>
  );
}

function NavigationButtons({
  activeTab,
  tabs,
  setActiveTab,
  file,
  loading,
  submitImage,
}: Omit<TabNavigationProps, "children">) {
  if (activeTab === tabs[0]) {
    return (
      <div className="flex justify-center mt-12">
        <button
          disabled={!file}
          onClick={() => setActiveTab(tabs[1])}
          className={clsx(
            "bg-primary-orange py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl",
            !file && "cursor-not-allowed"
          )}
        >
          Next
        </button>
      </div>
    );
  }

  if (activeTab === tabs[1]) {
    return (
      <div className="flex justify-center mt-12 gap-6">
        <button
          onClick={() => setActiveTab(tabs[0])}
          className="outline-none border py-3 px-10 rounded-lg font-semibold uppercase text-xl border border-white text-white"
        >
          Back
        </button>
        <button
          onClick={() => setActiveTab(tabs[2])}
          className="bg-primary-orange border  py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl"
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-12 gap-6">
      <button
        onClick={() => setActiveTab(tabs[1])}
        className="outline-none py-3 px-10 rounded-lg border  font-semibold uppercase text-xl border border-white text-white"
      >
        Back
      </button>
      <button
        disabled={loading}
        onClick={submitImage}
        className={clsx(
          "bg-primary-orange py-3 px-10 rounded-lg  border text-primary-black font-semibold uppercase text-xl min-w-[150px] flex justify-center",
          loading && "opacity-80 cursor-not-allowed"
        )}
      >
        {loading ? <DotsLoader /> : <span>Render New Idea</span>}
      </button>
    </div>
  );
}
