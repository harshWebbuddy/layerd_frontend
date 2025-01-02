import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: ReactNode;
  file: File | null;
  loading: boolean;
  onSubmit: () => void;
}

export default function TabNavigation({
  tabs,
  activeTab,
  setActiveTab,
  children,
  file,
  loading,
  onSubmit,
}: TabNavigationProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 md:px-10 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeTab === tab
                    ? "bg-gradient-to-br from-primary-red to-primary-yellow text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={onSubmit}
            disabled={!file || loading}
            className={cn(
              "px-6 py-2 rounded-lg transition-all duration-300",
              "bg-gradient-to-br from-primary-red to-primary-yellow",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? "Transcribing..." : "Transcribe"}
          </button>
        </div>
        <div className="h-[1px] bg-slate-700 mt-6" />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
