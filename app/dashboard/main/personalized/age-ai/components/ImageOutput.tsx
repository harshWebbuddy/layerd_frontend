"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface AgeAiResult {
  resultUrl: string;
  originalUrl: string;
  timestamp: string;
  isProcessing?: boolean;
  predictionId?: string;
}

export default function ImageOutput() {
  const [viewOriginal, setViewOriginal] = useState(false);
  const [result, setResult] = useState<AgeAiResult | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("ageAiResult");
    if (savedResult) {
      try {
        setResult(JSON.parse(savedResult));
      } catch (error) {
        console.error("Failed to parse saved result:", error);
      }
    }

    const handleNewResult = () => {
      const newResult = localStorage.getItem("ageAiResult");
      if (newResult) {
        try {
          setResult(JSON.parse(newResult));
        } catch (error) {
          console.error("Failed to parse new result:", error);
        }
      } else {
        setResult(null); // Clear result if removed
      }
    };

    window.addEventListener("ageAiComplete", handleNewResult);
    return () => window.removeEventListener("ageAiComplete", handleNewResult);
  }, []);

  if (!result) {
    return (
      <div className="relative w-[650px] h-[600px] rounded-xl bg-[#32323280] flex items-center justify-center">
        <p className="text-gray-400">
          Upload a photo to see the age prediction
        </p>
        <div className="w-[200px] h-[238px] bg-[#FFB076] blur-[150px] absolute bottom-0 right-20 z-0" />
      </div>
    );
  }

  return (
    <div className="relative w-fit">
      <Image
        src={viewOriginal ? result.originalUrl : result.resultUrl}
        alt="age prediction result"
        height={720}
        width={660}
        className="rounded-xl w-[650px] h-[600px] relative z-[1] object-cover"
      />
      <div className="absolute top-4 right-4 z-[2] flex gap-2">
        <button
          onClick={() => setViewOriginal((prev) => !prev)}
          className="py-2 px-4 rounded-md bg-primary-red text-white hover:opacity-90 transition-opacity"
        >
          {viewOriginal ? "View Result" : "View Original"}
        </button>
      </div>
      {result.isProcessing && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl z-[3]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-primary-yellow border-t-transparent rounded-full animate-spin" />
            <p className="text-white">Processing your image...</p>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 left-4 z-[2] text-sm text-white/70">
        Generated on: {new Date(result.timestamp).toLocaleString()}
      </div>
      <div className="w-[200px] h-[238px] bg-[#FFB076] blur-[150px] absolute bottom-0 right-20 z-0" />
    </div>
  );
}
