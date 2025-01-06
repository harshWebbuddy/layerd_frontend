"use client";

import axios from "@/lib/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function page() {
  const [dalleImages, setDalleImages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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

  const getImage = async () => {
    if (prompt.length === 0) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "/ai/image/stablediffusion",
        {
          user_prompt: prompt,
          // size: "1024x1024",
          samples: 1,
          noise_level: 0.1,
          width: "512",
          height:"512",
          enhance_prompt: prompt
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
      console.log("Error:", error.response?.data);
      toast.error(
        `Error: ${error.response?.data?.message || "Failed to generate image"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      getImage();
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto space-y-8 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-red to-primary-yellow bg-clip-text text-transparent">
          AI Image Generation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your ideas into stunning images using advanced AI
          technology.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-center justify-between flex-wrap">
          <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-yellow">
            Start with a detailed description
          </h2>
          <button
            type="button"
            className="bg-primary-red/10 hover:bg-primary-red/20 text-primary-red transition-all duration-300 
                       py-2 px-4 rounded-lg font-medium border border-primary-red/20"
          >
            Surprise me
          </button>
        </div>

        <div
          className={`bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat rounded-xl 
                      flex items-center p-2 border-bottom-gradient shadow-lg 
                      transition-all duration-300 ${
                        isFocused
                          ? "scale-[1.02] shadow-xl ring-2 ring-primary-red/20"
                          : "hover:shadow-lg"
                      }`}
        >
          <div className="flex-1 flex items-center gap-3 px-4">
            <span
              className={`text-xl transition-colors duration-300 ${
                isFocused ? "text-primary-red" : "text-gray-400"
              }`}
            >
              ✨
            </span>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isLoading}
              className="flex-1 bg-transparent outline-none text-base py-3
                        placeholder:text-gray-400/70 font-medium
                        disabled:opacity-50 disabled:cursor-not-allowed 
                        transition-all duration-300"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            />
            {prompt && !isLoading && (
              <button
                onClick={() => setPrompt("")}
                className="text-gray-400 hover:text-primary-red transition-colors duration-200"
              >
                ×
              </button>
            )}
          </div>
          <button
            onClick={getImage}
            disabled={isLoading || !prompt.trim()}
            className="bg-gradient-to-br from-primary-red to-primary-yellow 
                      hover:opacity-90 disabled:opacity-50 disabled:hover:opacity-50
                      cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 
                      font-semibold text-white flex items-center gap-2 min-w-[120px] 
                      justify-center transform hover:scale-105 disabled:transform-none
                      disabled:cursor-not-allowed shadow-lg hover:shadow-primary-red/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                Generate
                <span
                  className={`transition-transform duration-300 ${
                    prompt.trim() ? "group-hover:translate-x-1" : ""
                  }`}
                >
                  →
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Creations</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dalleImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={image}
                alt={`Generated Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={image}
                  download
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {dalleImages.length === 0 && (
          <div className="text-center py-10 cursor-pointer text-gray-500">
            Your generated images will appear here
          </div>
        )}
      </div>
    </section>
  );
}
