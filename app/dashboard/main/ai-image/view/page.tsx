"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ViewImage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <p>Image not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <button
          onClick={() => router.back()}
          className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Gallery
        </button>

        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative aspect-auto max-h-[80vh] overflow-hidden">
            <img
              src={decodeURIComponent(imageUrl)}
              alt="Full size image"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 bg-gray-800">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Image View</h2>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = decodeURIComponent(imageUrl);
                  link.download = "ai-generated-image.png";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-primary-red hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-medium"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
