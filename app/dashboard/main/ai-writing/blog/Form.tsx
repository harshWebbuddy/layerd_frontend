"use client";

import Image from "next/image";
import React, { useState } from "react";
import Selection from "../../ai-voice/components/Selection";
import { languages } from "@/app/dashboard/account/defaults/components";
import { TooltipComponent as Tooltip } from "../../components/Tooltip";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { ResponseBlog } from "./page";

export default function Form({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<ResponseBlog>>;
}) {
  const [about, setAbout] = useState<string>("");
  const [creativity, setCreativity] = useState<string>();
  const [tone, setTone] = useState<string>();
  const [maxResults, setMaxResult] = useState(500);
  const [language, setLanguage] = useState<string>();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (about.length <= 3) {
      return toast.error("Error make about longer.");
    }
    toast.promise(
      axios.post(
        "/ai/writing/blog",
        {
          language,
          about,
          creativity,
          tone,
          maxResultLength: maxResults,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
        loading: "Generating...",
        error: "Error Generating blog",
        success: (res) => {
          setResponse(res.data);
          return "Generated blog.";
        },
      }
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <div className="border-bottom-gradient">
          <Selection
            id="Language"
            onChange={setLanguage}
            items={languages}
            label="Language"
            placeholder="English (USA)"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="description">
            What is your blog post is about?
            <span className="text-primary-red">*</span>
          </label>

          <div className=" ring-inset ring-[#514E4E] ring-[2px] rounded-lg">
            <div className="border-bottom-gradient h-full rounded-lg">
              <textarea
                id="description"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                placeholder="Describe your blog post..."
                className="block w-full  rounded-lg h-32 outline-none bg-[#32323280] p-3 min-h-[80px]"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end text-white/70">0/600</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="w-full space-y-1.5">
            <label htmlFor="maxResults" className="flex items-center gap-3">
              <span className="whitespace-nowrap">Creativity</span>
              <Tooltip tooltipContent="Increase or Decrease the creativity level to get various results">
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/info-circle.svg"
                    alt="info-circle"
                    width={20}
                    draggable={false}
                    height={20}
                  />
                </span>
              </Tooltip>
            </label>
            <div className="border-bottom-gradient w-full">
              <Selection
                id="creativity"
                onChange={setCreativity}
                items={[
                  {
                    value: "High",
                    label: "High",
                  },
                  {
                    value: "Average",
                    label: "Average",
                  },
                  {
                    value: "Low",
                    label: "Low",
                  },
                ]}
                placeholder="Creativity"
              />
            </div>
          </div>
          <div className="w-full space-y-1.5">
            <label htmlFor="maxResults" className="flex items-center gap-3">
              <span className="whitespace-nowrap">Tone of Voice</span>
              <Tooltip tooltipContent="Set results tone of the text as needed">
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/info-circle.svg"
                    alt="info-circle"
                    width={20}
                    draggable={false}
                    height={20}
                  />
                </span>
              </Tooltip>
            </label>

            <div className="border-bottom-gradient w-full">
              <Selection
                id="voiceTone"
                onChange={setTone}
                items={[
                  {
                    value: "Casual",
                    label: "Casual",
                  },
                  {
                    value: "Formal",
                    label: "Formal",
                  },
                ]}
                placeholder="Tone of voice"
              />
            </div>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row gap-3 items-end">
          <div className="w-full space-y-1.5">
            <label htmlFor="maxResults" className="flex items-center gap-3">
              <span className="whitespace-nowrap">Max Results Length</span>
              <Tooltip tooltipContent="Maximum supporting results is 5">
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/info-circle.svg"
                    alt="info-circle"
                    width={20}
                    draggable={false}
                    height={20}
                  />
                </span>
              </Tooltip>
            </label>
            <div className="border-bottom-gradient w-full">
              <Selection
                id="maxLength"
                items={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                  {
                    value: "3",
                    label: "3",
                  },
                ]}
                placeholder="Number of results"
              />
            </div>
          </div>
          <div className="space-y-1.5 w-full">
            <label htmlFor="maxResults" className="flex items-center gap-3">
              <span className="whitespace-nowrap">Max Results Length</span>
              <Tooltip tooltipContent="Maximum word for each generated text. Maximum allowed length is 1000">
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/info-circle.svg"
                    alt="info-circle"
                    width={20}
                    draggable={false}
                    height={20}
                  />
                </span>
              </Tooltip>
            </label>
            <div className=" ring-inset ring-[#514E4E] ring-[2px] rounded-lg">
              <div className="border-bottom-gradient h-[54px] rounded-lg">
                <input
                  id="maxResults"
                  placeholder="Max result"
                  value={500}
                  type="number"
                  onChange={(e) => {
                    setMaxResult(Number(e.target.value));
                  }}
                  className="block w-full rounded-lg  outline-none bg-[#32323280] p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-br from-primary-red to-primary-yellow w-full py-3 flex justify-center items-center gap-1 mt-10 rounded-lg">
        <span className="font-semibold">Generate Text</span>
        <Image src="/main/ai/click.svg" alt="click" height={24} width={24} />
      </button>
    </form>
  );
}
