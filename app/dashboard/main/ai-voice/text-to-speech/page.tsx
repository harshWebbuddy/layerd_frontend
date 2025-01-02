import Image from "next/image";
import React from "react";
import Form from "./Form";

export default function TextToSpeechPage() {
  return (
    <section className="w-full px-5 md:px-10 pb-10">
      <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl ring-1 ring-white/10 shadow-2xl backdrop-blur-xl">
        {/* Header Section */}
        <div className="bg-[url('/main/ai/background-voice-ai-space.png')] bg-cover bg-center rounded-t-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-red to-primary-yellow rounded-full blur-md opacity-75"></div>
                <Image
                  src="/main/ai/speech-to-text.png"
                  alt="speech to text"
                  width={50}
                  height={50}
                  className="relative"
                />
              </div>
              <div>
                <h1 className="text-primary-yellow text-3xl font-bold">
                  AI Text To Speech
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Convert your text into natural-sounding speech
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm">
              <Image
                src="/main/ai/activity.svg"
                alt="balance"
                width={24}
                height={24}
                className="text-primary-yellow"
              />
              <div>
                <p className="text-sm text-gray-400">Available Credits</p>
                <p className="font-semibold text-primary-yellow">
                  1,000 Characters
                </p>
              </div>
            </div>
          </div>
        </div>

         <div className="p-6 md:p-8">
          <Form />
        </div>
      </div>
    </section>
  );
}
