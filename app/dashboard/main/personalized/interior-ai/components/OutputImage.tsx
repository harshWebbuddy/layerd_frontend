"use client";

import Motion from "@/components/ui/Motion";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
 
type ImageOutputProps = {
  loading: boolean;
  outputImage: string | null;
  downloadOutputImage(): void;
  base64Image: string | null;
};

export default function OutputImage({
  downloadOutputImage,
  loading,
  outputImage,
  base64Image,
}: ImageOutputProps) {
  return (
    <Motion
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="w-full max-w-[1860px] mx-auto mt-12">
        <section className="px-3">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Before Image */}
            <div className="w-full relative group" data-aos="fade-right">
              <div className="relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={
                    outputImage && base64Image && !loading
                      ? base64Image
                      : "/assets/dummy_room.png"
                  }
                  alt="Original room"
                  width={1600}
                  height={1200}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-gradient-to-t from-black/90 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 bg-primary-orange rounded-full" />
                      <span className="text-2xl font-semibold tracking-wider">
                        BEFORE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {loading && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-[30px] grid place-content-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-300">Transforming your space...</p>
                  </div>
                </div>
              )}
            </div>

            {/* After Image */}
            <div className="w-full relative group" data-aos="fade-left">
              <div className="relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {!loading && outputImage && (
                  <button
                    onClick={downloadOutputImage}
                    className="absolute right-4 top-4 z-10 bg-primary-orange p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                    data-aos="zoom-in"
                  >
                    <Download className="h-5 w-5 text-white" />
                  </button>
                )}
                <Image
                  src={outputImage || "/assets/dummy_output_room.png"}
                  alt="Transformed room"
                  width={1600}
                  height={1200}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-gradient-to-t from-black/90 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 bg-primary-orange rounded-full" />
                      <span className="text-2xl font-semibold tracking-wider">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {loading && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-[30px] grid place-content-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-300">Almost there...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Motion>
  );
}
