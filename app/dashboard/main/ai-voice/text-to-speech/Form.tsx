"use client";

import React, { useState, useEffect } from "react";
import Selection from "../components/Selection";
import Motion from "@/components/ui/Motion";
import { useVoiceConfig } from "./hooks/useVoiceConfig";

import {
  LANGUAGE_OPTIONS,
  SPEAKING_STYLES,
  AUDIO_FORMATS,
} from "./config/voices";
import {
  Edit3,
  Globe,
  Mic,
  Type,
  Music,
  Volume2,
  Download,
  Trash2,
  Clock,
  Settings,
  PlayCircle,
  PauseCircle,
  Share2,
  History,
  CheckCircle2,
} from "lucide-react";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import Image from "next/image";

interface AudioResponse {
  url: string;
  title: string;
  createdAt: string;
}

type AudioFormat = (typeof AUDIO_FORMATS)[number]["value"];

export default function Form() {
  const [text, setText] = useState("");
  const { languageCode, setLanguageCode, availableVoices } = useVoiceConfig();
  const [voiceId, setVoiceId] = useState("Aditi");
   const [format, setFormat] = useState<AudioFormat>("mp3");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedAudios, setGeneratedAudios] = useState<AudioResponse[]>([]);

  useEffect(() => {
    const savedAudios = localStorage.getItem("generatedAudios");
    if (savedAudios) {
      setGeneratedAudios(JSON.parse(savedAudios));
    }
  }, []);
  const handleFormatChange = (selectedFormat: AudioFormat) => {
    setFormat(selectedFormat);
  };

  const handleConvertToSpeech = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "/ai/voice/text-to-speech",
        {
          text: text.trim(),
          voiceId,
          languageCode,
          outputFormat: format,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        const newAudio = {
          url: response.data.data.url,
          title: title || `${voiceId} - ${new Date().toLocaleTimeString()}`,
          createdAt: new Date().toISOString(),
        };

        const updatedAudios = [newAudio, ...generatedAudios];
        setGeneratedAudios(updatedAudios);
        localStorage.setItem("generatedAudios", JSON.stringify(updatedAudios));
        toast.success("Audio generated successfully! 🎉");
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to generate audio"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Motion
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-primary-orange" />
              Title
            </label>
            <div className="bg-[#32323280] rounded-xl ring-1 ring-white/10 focus-within:ring-primary-orange/50 transition-all duration-300 hover:bg-[#32323299]">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter audio title"
                className="w-full h-[50px] bg-transparent px-4 outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary-orange" />
              Language
            </label>
            <Selection
              id="language"
              items={LANGUAGE_OPTIONS}
              value={languageCode}
              onChange={setLanguageCode}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mic className="w-4 h-4 text-primary-orange" />
              Voice
            </label>
            <Selection
              id="voice"
              items={availableVoices}
              value={voiceId}
              onChange={setVoiceId}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 xl:gap-3">
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="speaking-style"
              items={[
                {
                  value: "Fast",
                  label: "Fast",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Slow",
                  label: "Slow",
                },
              ]}
              placeholder="Speaking Style"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="voice-effects"
              items={[
                {
                  value: "Reverb",
                  label: "Reverb",
                },
                {
                  value: "Echo",
                  label: "Echo",
                },
                {
                  value: "High Pitch",
                  label: "High Pitch",
                },
                {
                  value: "Auto Tune",
                  label: "Auto Tune",
                },
              ]}
              placeholder="Voice Effects"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="say-as"
              items={[
                {
                  value: "Auto Detect",
                  label: "Auto Detect",
                },
                {
                  value: "Manual Detection",
                  label: "Manual Detection",
                },
              ]}
              placeholder="Say as"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="Emphasis"
              items={[
                {
                  value: "Auto Detect",
                  label: "Auto Detect",
                },
                {
                  value: "Manual Detection",
                  label: "Manual Detection",
                },
              ]}
              placeholder="Emphasis"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="Volume"
              items={[
                {
                  value: "High",
                  label: "High",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Low",
                  label: "Low",
                },
              ]}
              placeholder="Volume"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="speed"
              items={[
                {
                  value: "Fast",
                  label: "Fast",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Slow",
                  label: "Slow",
                },
              ]}
              placeholder="Speed"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="pitch"
              items={[
                {
                  value: "High",
                  label: "High",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Low",
                  label: "Low",
                },
              ]}
              placeholder="Pitch"
            />
          </div>
          <div className="w-full sm:max-w-[200px]">
            <Selection
              id="pauses"
              items={[
                {
                  value: "Fast",
                  label: "Fast",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Slow",
                  label: "Slow",
                },
              ]}
              placeholder="Pauses"
            />
          </div>
        </div>
        <div className="bg-[url('/main/background-speech.png')] bg-center bg-cover bg-no-repeat px-4 md:px-7 pt-6 pb-4 ring-1 ring-slate-700 ring-inset rounded-2xl !mt-10">
          <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <Type className="w-6 h-6 text-primary-orange" />
            Text To Speech
          </h1>
          <div className="ring-1 ring-white/30 rounded-2xl mt-4 min-h-[380px] flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-3 md:p-7">
              <div className="flex w-full items-center gap-5">
                <div className="bg-[#fdbb142b] p-3 rounded-lg">
                  <Mic className="w-6 h-6 text-primary-orange" />
                </div>
                <div className="bg-[#32323280] rounded-lg ring-[#514E4E] ring-2 w-full flex justify-center items-center h-[50px] cursor-pointer outline-none px-3 focus-within:ring-primary-orange/50 transition-all duration-300">
                  <input
                    type="text"
                    maxLength={1000}
                    value={text}
                    className="w-full h-full rounded-lg bg-transparent outline-none"
                    placeholder="Enter your text here to synthesize..."
                    onChange={(e) => setText(e.target.value.slice(0, 1000))}
                  />
                </div>
              </div>
              <div className="flex h-[50px] gap-2">
                <button
                  onClick={handleConvertToSpeech}
                  disabled={isLoading}
                  className={`bg-[#fdbb142b] h-full w-[50px] px-2 grid place-content-center rounded-lg hover:bg-[#fdbb1446] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group`}
                  title="Convert to Speech"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Music className="w-5 h-5 text-primary-orange group-hover:scale-110 transition-transform" />
                  )}
                </button>
                <button
                  className="bg-[#fdbb142b] h-full w-[50px] px-2 grid place-content-center rounded-lg hover:bg-[#fdbb1446] transition cursor-pointer group"
                  title="History"
                >
                  <History className="w-5 h-5 text-primary-orange group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => setText("")}
                  className="bg-[#fdbb142b] h-full w-[50px] px-2 grid place-content-center rounded-lg hover:bg-[#fdbb1446] transition cursor-pointer group"
                  title="Clear Text"
                >
                  <Trash2 className="w-5 h-5 text-primary-orange group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

             <div className="px-7 pb-4 space-y-2 border-b border-white/10">
              <label className="text-sm font-medium flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary-orange" />
                Audio Format
              </label>
              <div className="flex flex-wrap gap-4">
                {AUDIO_FORMATS?.map((audioFormat) => (
                  <div
                    key={audioFormat.value}
                    className="flex items-center space-x-2 group cursor-pointer"
                    onClick={() => handleFormatChange(audioFormat.value)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${
                      format === audioFormat.value
                        ? "border-primary-orange bg-primary-orange/20"
                        : "border-gray-500 group-hover:border-primary-orange/50"
                    }`}
                    >
                      {format === audioFormat.value && (
                        <CheckCircle2 className="w-3 h-3 text-primary-orange" />
                      )}
                    </div>
                    <label className="text-sm cursor-pointer">
                      {audioFormat.label}
                      <span className="text-xs text-gray-400 ml-1">
                        ({audioFormat.quality})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

             <div className="flex-1 overflow-y-auto px-7 py-4">
              {generatedAudios && generatedAudios.length > 0 ? (
                <div className="space-y-3">
                  {generatedAudios.map((audio, index) => (
                    <div
                      key={index}
                      className="bg-[#32323280] rounded-lg p-4 flex items-center justify-between group hover:bg-[#32323299] transition-all duration-300 ring-1 ring-white/10 hover:ring-primary-orange/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[#fdbb142b] p-2 rounded-lg">
                          <PlayCircle className="w-5 h-5 text-primary-orange" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-primary-orange transition-colors">
                            {audio.title || "Untitled Audio"}
                          </h4>
                          <p className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(audio.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <audio
                          src={audio.url}
                          controls
                          className="max-w-[300px] audio-player"
                        />
                        <div className="flex gap-2">
                          <button
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4 text-gray-400 hover:text-primary-orange transition-colors" />
                          </button>
                          <button
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            title="Share"
                          >
                            <Share2 className="w-4 h-4 text-gray-400 hover:text-primary-orange transition-colors" />
                          </button>
                          <button
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-gray-400 hover:text-primary-orange transition-colors" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Volume2 className="w-12 h-12 text-gray-500 mb-2" />
                  <p className="text-gray-400">No generated audios yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setText("")}
            className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear Text
          </button>
          <button
            type="button"
            onClick={handleConvertToSpeech}
            disabled={isLoading || !text.trim()}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-red to-primary-yellow 
              disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all duration-300
              flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5" />
                Generate Audio
              </>
            )}
          </button>
        </div>
      </form>
    </Motion>
  );
}
