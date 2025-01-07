"use client";

import axios from "@/lib/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import Selection from "../components/Selection";
import { Slider } from "@/components/ui/slider";
import DropZone from "../components/DropZone";
import Checkbox from "./components/Checkbox";
import Gallery from "./components/Gallery";
import ToggleButton from "../components/Toggle";

export default function Page() {
  const [dalleImages, setDalleImages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAspect, setSelectedAspect] = useState("1:1");
  const [numberOfResults, setNumberOfResults] = useState(1);
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);

  useEffect(() => {
    const storedDalleImages = localStorage.getItem("dalle-images");
    if (storedDalleImages) {
      setDalleImages(JSON.parse(storedDalleImages));
    }
  }, []);

  useEffect(() => {
    if (dalleImages.length > 0) {
      localStorage.setItem("dalle-images", JSON.stringify(dalleImages));
    }
  }, [dalleImages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "/ai/image/stablediffusion",
        {
          noise_level: 0.1,
          user_prompt: prompt,
          samples: numberOfResults,
          width: width.toString(),
          height: height.toString(),
          enhance_prompt: prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const imageUrl = response.data.data.url;
      setDalleImages((prev) => [...prev, imageUrl]);
      toast.success("Image generated successfully!");
      setPrompt("");
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Failed to generate image");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      e.preventDefault();
      const formEvent = new Event(
        "submit"
      ) as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(formEvent);
    }
  };

  return (
    <div className="flex px-3 sm:px-7 gap-6">
      {" "}
      <section className="w-full">
        <div className="bg-[url('/main/ai/background-diffusion-ai.png')] bg-center bg-cover p-4 sm:p-7 ring-1 ring-neutral-700 ring-inset rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
              <h1 className="capitalize text-primary-yellow text-2xl sm:text-3xl font-semibold">
                stable diffusion
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ToggleButton label="Show Hints" />
                <div className="flex gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="flex-1 sm:flex-none whitespace-nowrap ring-1 ring-white/80 ring-inset 
                             bg-transparent py-2.5 px-4 sm:px-6 rounded-lg font-medium 
                             hover:bg-white/10 active:bg-white/20 transition duration-300"
                  >
                    Prompt Assistant
                  </button>
                  <button
                    type="button"
                    className="flex-1 sm:flex-none whitespace-nowrap ring-1 ring-white/80 ring-inset 
                             bg-transparent py-2.5 px-4 sm:px-6 rounded-lg font-medium 
                             hover:bg-white/10 active:bg-white/20 transition duration-300"
                  >
                    Translate
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full group">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={isLoading}
                className={`w-full min-h-[120px] sm:min-h-[150px] p-4 rounded-xl
                           bg-[#3F3F4699] backdrop-blur-sm resize-none
                           ring-1 ring-white/20 focus:ring-2 focus:ring-white/40
                           outline-none transition-all duration-300
                           text-base sm:text-lg placeholder:text-gray-400/70
                           disabled:opacity-50 disabled:cursor-not-allowed
                           ${isFocused ? "shadow-lg shadow-primary-red/5" : ""}
                           hover:ring-white/30`}
                placeholder="Describe the image you want to generate..."
              />
              {prompt && !isLoading && (
                <button
                  type="button"
                  onClick={() => setPrompt("")}
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary-red
                           transition-colors duration-200 p-1 rounded-full
                           hover:bg-white/10"
                >
                  ×
                </button>
              )}
              <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                {prompt.length} / 1000
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <ToggleButton label="Negative Reminder" />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="flex justify-center items-center gap-2
                         bg-gradient-to-br from-primary-red to-primary-yellow
                         py-3 px-6 sm:px-8 rounded-lg font-semibold
                         hover:opacity-90 disabled:opacity-50 
                         transform hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300 min-w-[140px]
                         disabled:cursor-not-allowed disabled:transform-none
                         shadow-lg hover:shadow-primary-red/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  "Generate"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 space-y-4">
          <h1 className="text-xl sm:text-2xl font-semibold capitalize">
            generated images
          </h1>
          {dalleImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dalleImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group aspect-square rounded-xl overflow-hidden
                           shadow-lg transition-all duration-300
                           hover:shadow-xl hover:shadow-primary-red/10
                           hover:scale-[1.02]"
                >
                  <img
                    src={image}
                    alt={`Generated Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                               transition-all duration-300 flex items-center justify-center"
                  >
                    <a
                      href={image}
                      download
                      className="bg-white text-black px-6 py-2 rounded-lg font-medium
                             transform translate-y-4 group-hover:translate-y-0
                             transition-all duration-300 hover:bg-opacity-90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gray-400">
                Your generated images will appear here
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="w-full h-fit hidden sm:block max-w-[324px] bg-[url('/main/ai/background-diffusion-ai-options.png')] bg-center bg-cover rounded-2xl">
        <div className="p-4">
          <p className="flex items-center gap-4 font-semibold text-lg">
            <span>Aspect Ratio</span>
            <span className="cursor-pointer">
              <Image
                src="/main/ai/i.ms-2.svg"
                alt="i-ms-2"
                width={17}
                draggable={false}
                height={17}
              />
            </span>
          </p>
          <div className="w-full flex gap-4">
            <div className="w-full flex justify-between mt-6">
              <button
                onClick={() => setSelectedAspect("1:1")}
                className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
                  selectedAspect === "1:1" && "border-gradient bg-[#212529]"
                }`}
              >
                <div
                  className={`w-[24px] h-[24px] rounded-[6px] ${
                    selectedAspect == "1:1"
                      ? "border-gradient-sm"
                      : " border-[3px] border-white"
                  }`}
                />
                <span
                  className={`${
                    selectedAspect == "1:1" &&
                    "text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
                  }`}
                >
                  1:1
                </span>
              </button>
              <button
                onClick={() => setSelectedAspect("4:3")}
                className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
                  selectedAspect === "4:3" && "border-gradient bg-[#212529]"
                }`}
              >
                <div
                  className={`w-[24px] h-[20px] rounded-[6px] ${
                    selectedAspect == "4:3"
                      ? "border-gradient-sm"
                      : " border-[3px] border-white"
                  }`}
                />
                <span
                  className={`${
                    selectedAspect == "4:3" &&
                    "text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
                  }`}
                >
                  4:3
                </span>
              </button>
              <button
                onClick={() => setSelectedAspect("3:4")}
                className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
                  selectedAspect === "3:4" && "border-gradient bg-[#212529]"
                }`}
              >
                <div
                  className={`w-[20px] h-[24px] rounded-[6px] ${
                    selectedAspect == "3:4"
                      ? "border-gradient-sm"
                      : " border-[3px] border-white"
                  }`}
                />
                <span
                  className={`${
                    selectedAspect == "3:4" &&
                    "text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
                  }`}
                >
                  3:4
                </span>
              </button>
              <button
                onClick={() => setSelectedAspect("16:9")}
                className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
                  selectedAspect === "16:9" && "border-gradient bg-[#212529]"
                }`}
              >
                <div
                  className={`w-[26px] h-[16px] rounded-[6px] ${
                    selectedAspect == "16:9"
                      ? "border-gradient-sm"
                      : "border-[3px] border-white"
                  }`}
                />
                <span
                  className={`${
                    selectedAspect == "16:9" &&
                    "text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
                  }`}
                >
                  16:9
                </span>
              </button>
              <button
                onClick={() => setSelectedAspect("9:16")}
                className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
                  selectedAspect === "9:16" && "border-gradient bg-[#212529]"
                }`}
              >
                <div
                  className={`w-[18px] h-[26px] rounded-[6px] ${
                    selectedAspect == "9:16"
                      ? "border-gradient-sm"
                      : " border-[3px] border-white"
                  }`}
                />
                <span
                  className={`${
                    selectedAspect == "9:16" &&
                    "text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
                  }`}
                >
                  9:16
                </span>
              </button>
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <div className="flex gap-2">
              <Slider defaultValue={[33]} max={100} step={1} />
              <p className="w-full">
                Width <span>{}</span> pixel
              </p>
            </div>
            <div className="flex gap-2">
              <Slider defaultValue={[33]} max={100} step={1} />
              <p className="w-full">
                Width <span>{}</span> pixel
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#ffffff56] mt-4 p-5">
          <h1 className="font-semibold">Number of pictures</h1>
          <div className="flex mt-2 gap-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  onClick={() => setNumberOfResults(index + 1)}
                  className={`w-full max-w-[60px] h-[60px] grid place-content-center cursor-pointer rounded-md ${
                    index + 1 === numberOfResults
                      ? "border-gradient bg-[#212529]"
                      : "hover:bg-slate-600/50 "
                  }`}
                >
                  {index + 1}
                </div>
              ))}
          </div>
        </div>
        <div className="border-t border-[#ffffff56] border-dashed mt-4 p-5">
          <DropZone />
        </div>
        <div className="border-t border-[#ffffff56] border-dashed mt-4 p-5">
          <h1 className="font-semibold">Model</h1>
          <p className="capitalize text-[#6C757D]">main model</p>
          <div className="flex justify-between gap-2 bg-[#72727280] p-2 pr-4 rounded-md mt-3 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Image
                src="/main/ai/dark-suchi.png"
                alt="suchi"
                width={200}
                height={100}
                className="w-[50px] h-[50px] object-cover rounded-md"
              />
              <p>Dark Sushi Mix</p>
            </div>
            <Image
              src="/main/ai/play-button.svg"
              alt="play"
              width={15}
              height={15}
            />
          </div>
          <div className="space-y-6 mt-10">
            <h1 className="font-semibold capitalize text-lg">
              advanced settings
            </h1>
            <div className="flex items-center gap-6 w-full">
              <label htmlFor="sampler">Sampler</label>
              <Selection
                id="sampler"
                items={[
                  {
                    value: "Fuler A",
                    label: "Fuler B",
                  },
                ]}
                placeholder="Select sample"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="flex w-full items-center gap-2 max-w-fit">
                <span>Step</span>
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/i.ms-2.svg"
                    alt="i-ms-2"
                    width={17}
                    draggable={false}
                    height={17}
                  />
                </span>
              </label>
              <div className="max-w-[150px] w-full">
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="flex w-full items-center gap-2 max-w-fit">
                <span>CFG ratio</span>
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/i.ms-2.svg"
                    alt="i-ms-2"
                    width={17}
                    draggable={false}
                    height={17}
                  />
                </span>
              </label>
              <div className="max-w-[150px] w-full">
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="flex w-full items-center gap-2 max-w-fit">
                <span>clip skip</span>
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/i.ms-2.svg"
                    alt="i-ms-2"
                    width={17}
                    draggable={false}
                    height={17}
                  />
                </span>
              </label>
              <div className="max-w-[150px] w-full">
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <label className="flex w-full items-center gap-2 max-w-fit">
                <span>Seed</span>
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/i.ms-2.svg"
                    alt="i-ms-2"
                    width={17}
                    draggable={false}
                    height={17}
                  />
                </span>
              </label>
              <input className="bg-[#212529] h-[35px] px-3 outline-none w-full rounded-md max-w-[200px]" />
            </div>
            <div className="flex justify-between gap-2">
              <label className="flex w-full items-center gap-2 max-w-fit">
                <span>ENSD</span>
                <span className="cursor-pointer">
                  <Image
                    src="/main/ai/i.ms-2.svg"
                    alt="i-ms-2"
                    width={17}
                    draggable={false}
                    height={17}
                  />
                </span>
              </label>
              <input className="bg-[#212529] h-[35px] px-3 outline-none w-full rounded-md max-w-[200px]" />
            </div>
            <Checkbox id="hires-fix" label={""} />
            <div className="flex justify-end">
              <button
                type="reset"
                className="bg-gradient-to-br from-primary-red to-primary-yellow h-[50px] w-[100px] rounded-md capitalize font-semibold"
              >
                reset
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-5 p-5 space-y-6">
          <h1 className="capitalize font-semibold text-lg">control network</h1>
          <DropZone />
          <div>
            <div className="flex w-full gap-6">
              <Checkbox id="check-preprocessor" label="Enable" />
              <Selection
                id="select-preprocessor"
                items={[
                  {
                    label: "Canny",
                    value: "Canny",
                  },
                  {
                    label: "Lorem",
                    value: "Lorem",
                  },
                ]}
                placeholder="Select"
                isFullWidth={true}
              />
            </div>
            <span className="text-[#6C757D]">Preprocessor</span>
          </div>
          <div className="flex justify-between gap-2">
            <label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
              control weight
            </label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="flex justify-between gap-2">
            <label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
              initial control step
            </label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="flex justify-between gap-2">
            <label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
              end control step
            </label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="!mt-10 space-y-6">
            <Selection
              id="select-preprocessor"
              items={[
                {
                  label: "Canny",
                  value: "Canny",
                },
                {
                  label: "Lorem",
                  value: "Lorem",
                },
              ]}
              placeholder="Select"
              label="control mode"
              isFullWidth={true}
              isTooltipEnabled={false}
            />
            <Selection
              id="select-preprocessor"
              items={[
                {
                  label: "Canny",
                  value: "Canny",
                },
                {
                  label: "Lorem",
                  value: "Lorem",
                },
              ]}
              placeholder="Select"
              label="adjustment mode"
              isFullWidth={true}
              isTooltipEnabled={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
