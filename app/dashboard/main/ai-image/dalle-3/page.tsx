"use client";

import axios from "@/lib/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [dalleImages, setDalleImages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");
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
    if (prompt.length > 0)
      toast.promise(
        axios.post(
          "/ai/image/dalle-3",
          {
            prompt,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          loading: "Generating Image...",
          error: "Error generating image",
          success: (res) => {
            const image = res.data.url;
            const images = [...dalleImages, image];
            setDalleImages(images);
            localStorage.setItem("dalle-images", JSON.stringify(images));

            return "Generated Image.";
          },
        }
      );
  };

  return (
    <section className="w-full max-w-7xl mx-auto space-y-6 p-3">
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold">
          Start with a detailed description
        </h1>
        <button type="button" className="bg-primary-red py-1.5 px-3 rounded-sm">
          Suprise me
        </button>
      </div>
      <div className="bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat h-14 rounded-xl flex items-center pl-4 pt-1 pr-1 pb-0.5 border-bottom-gradient">
        <input
          type="text"
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm overflow-hidden text-ellipsis"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
        />
        <button
          onClick={getImage}
          className="bg-gradient-to-br from-primary-red to-primary-yellow cursor-pointer grid place-content-center px-6 py-3 rounded-lg transition duration-300 font-semibold"
        >
          Generate
        </button>
      </div>
      <div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-4 xl:justify-end">
        {dalleImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Dalle Image" className="rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
