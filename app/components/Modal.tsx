"use client";
import axios from "@/lib/axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { writingTabs } from "../dashboard/main/components/constants/writingTabs";
import Image from "next/image";
import Card from "../dashboard/main/ai-writing/components/Card";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function AiModal({ isOpen, onClose, children }: ModalProps) {
  const [category, setCategory] = useState("all");
  const [isFree, setIsFree] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTemplates();
  }, [category, isFree, searchTerm]);

  const fetchTemplates = async () => {
    try {
      const query = new URLSearchParams();
      if (category && category !== "all") query.append("category", category);
      if (isFree !== null) query.append("free", isFree);
      if (searchTerm) query.append("search", searchTerm);

      const response = await axios.get(`/ai/templates?${query.toString()}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const allTemplates = response.data.data.templates || [];
      setTemplates(allTemplates);

      console.log("Templates loaded:", allTemplates);
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  };

  const paidTemplates = templates.filter((template) => !template.isFree);
  const freeTemplates = templates.filter((template) => template.isFree);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#16161b] rounded-lg w-full  max-w-[1547px] my-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition z-10"
        >
          <X size={24} className="text-red-500" />
        </button>
        <section className="bg-[url('/main/background-image-writing.png')] rounded-xl bg-cover bg-center w-full h-full pt-8 px-4 md:px-8 lg:px-12 text-sm rounded-lg">
          <h1 className="text-primary-yellow text-3xl font-semibold leading-loose">
            Templates
          </h1>
          <p className="capitalize text-white/80">
            Seeking that perfect content? Look no further! Get ready to explore
            our fantastic lineup of templates.
          </p>

          <div className="flex gap-x-2 md:gap-x-4 gap-y-3 flex-wrap mt-4">
            {writingTabs.map((tab, index) => {
              const isSelected =
                (tab.title === "free" && isFree) ||
                (tab.title === category && category !== "all") ||
                (tab.title === "all" && category === "all" && isFree === null);

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (tab.title === "free") {
                      setIsFree(true);
                      setCategory("all");
                    } else if (tab.title === "all") {
                      setIsFree(null);
                      setCategory("all");
                    } else {
                      setCategory(tab.title);
                      setIsFree(null);
                    }
                  }}
                  className={`flex gap-3 py-1.5 px-4 rounded-full ring-1 transition duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#393b3d] ring-primary-yellow text-primary-yellow"
                      : "bg-[#2F3133]/90 hover:bg-[#393b3d]/90 ring-[#2F3133]"
                  }`}
                >
                  {tab.icon && (
                    <Image
                      src={tab.icon}
                      alt="Icon"
                      width={30}
                      height={30}
                      className={`w-4 md:w-5 h-4 md:h-5 object-cover ${
                        isSelected ? "brightness-125" : ""
                      }`}
                    />
                  )}
                  <p
                    className={`text-sm capitalize ${
                      isSelected ? "font-medium" : ""
                    }`}
                  >
                    {tab.title}
                  </p>
                </div>
              );
            })}
            <select
              value={isFree === null ? "" : isFree.toString()}
              onChange={(e) => {
                const value = e.target.value;
                setIsFree(
                  value === "true" ? true : value === "false" ? false : null
                );
              }}
              className={`bg-[#2F3133] text-white py-2 px-3 rounded ring-1 ${
                isFree !== null
                  ? "ring-primary-yellow text-primary-yellow"
                  : "ring-[#2F3133]"
              }`}
            >
              <option value="">All Templates</option>
              <option value="true">Free</option>
              <option value="false">Paid</option>
            </select>
          </div>

          <form>
            <div className="bg-[#323232]/70 ring-1 ring-[#514E4E] h-12 rounded-lg flex items-center gap-2 p-0.5 border-bottom-gradient mt-6">
              <div className="cursor-pointer grid place-content-center h-full mx-2 my-0.5 p-1.5 rounded-md transition duration-300">
                <Image
                  src="/main/search.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <input
                type="text"
                className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
                placeholder="search for a template"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>

          <div className="mt-6">
            <h2 className="text-primary-yellow text-2xl font-medium">
              Paid Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2 mt-3">
              {paidTemplates.map((template, index) => (
                <Card
                  key={`paid-${template.id || index}`}
                  template={{
                    title: template.name,
                    description: template.description,
                    icon: template.icon,
                    isPremium: true,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-primary-yellow text-2xl font-medium">
              Free Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2 mt-3">
              {freeTemplates.map((template, index) => (
                <Card
                  key={`free-${template.id || index}`}
                  template={{
                    title: template.name,
                    description: template.description,
                    icon: template.icon,
                    isPremium: false,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
