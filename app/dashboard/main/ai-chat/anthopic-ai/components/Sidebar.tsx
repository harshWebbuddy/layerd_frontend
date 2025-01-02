"use client";
import { useEffect, useState, useMemo, ChangeEvent } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { Assistant } from "@/types/aiassistant";
import { CloudSun } from "lucide-react";
import axios from "axios";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  chatid: string;
}

export default function Sidebar({ isOpen, onClose, chatid }: IProps) {
  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

   
  const filteredAssistants = useMemo(() => {
    return assistants.filter(
      (assistant) =>
        assistant.name.toLowerCase().includes(searchTerm) ||
        assistant.role.toLowerCase().includes(searchTerm)
    );
  }, [assistants, searchTerm]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={clsx(
        isOpen ? "opacity-100" : "opacity-0",
        "transition-all border bg-[url('/navbar.svg')]  duration-300   z-50",
        {
          "absolute top-30 lg:left-0 xl:left-0 sm:left-10 md:left-10 h-auto w-[400px] sm:w-[400px] md:w-[400px]":
            isOpen,
          "absolute w-0 overflow-hidden": !isOpen,
        },
        {
          "sm:w-[400px] sm:opacity-100 md:w-[400px] md:opacity-100": isOpen,
          "lg:w-[400px] xl:w-[400px] lg:opacity-100 xl:opacity-100 lg:relative xl:relative  ":
            isOpen,
        }
      )}
    >
   
      <div className="px-6 py-4">
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Assistants"
          className="h-14 bg-black rounded-lg w-full p-5 whitespace-nowrap"
        />
        <div className="mt-4">
          {loading ? (
            <div className="h-20 flex justify-center items-center whitespace-nowrap">
              Loading....
            </div>
          ) : (
            <div className="flex flex-col gap-3 max-h-[68vh] overflow-y-auto hidden-scrollbar">
              {filteredAssistants.map((assistant) => (
                <Link
                  key={assistant.id}
                  href={`/app/ai-studio/ai-assistant/chat/${assistant.id}`}
                >
                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 cursor-pointer">
                    <Image
                      src={assistant.avatar}
                      alt="Assistant"
                      width={200}
                      height={200}
                      className="w-[45px] h-[45px] min-w-[45px] object-cover rounded-xl"
                    />
                    <div>
                      <h1 className="font-semibold whitespace-nowrap">
                        {highlightText(assistant.name, searchTerm)}
                      </h1>
                      <p className="text-primary-black text-opacity-50 text-sm whitespace-nowrap">
                        {highlightText(assistant.role, searchTerm)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
