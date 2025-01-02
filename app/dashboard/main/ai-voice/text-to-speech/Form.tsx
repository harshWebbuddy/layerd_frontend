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
} from "lucide-react";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

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
  const [style, setStyle] = useState(SPEAKING_STYLES[0].value);
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
        {/* Top Controls */}
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

        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl p-6 space-y-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Type className="w-5 h-5 text-primary-orange" />
              Text to Speech
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span
                className={
                  text.length >= 900 ? "text-primary-red" : "text-gray-400"
                }
              >
                {text.length}
              </span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">1000</span>
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 1000))}
            placeholder="Enter your text here to synthesize..."
            className="w-full h-40 bg-black/20 rounded-xl p-4 outline-none resize-none focus:ring-1 focus:ring-primary-orange/50 transition-all duration-300"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary-orange" />
                Speaking Style
              </label>
              <Selection
                id="style"
                items={SPEAKING_STYLES}
                value={style}
                onChange={setStyle}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Music className="w-4 h-4 text-primary-orange" />
                Audio Format
              </label>
              <div className="flex flex-wrap gap-3">
                {AUDIO_FORMATS?.map((audioFormat) => (
                  <div
                    key={audioFormat.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="radio"
                      id={audioFormat.value}
                      name="audioFormat"
                      value={audioFormat.value}
                      checked={format === audioFormat.value}
                      onChange={() => handleFormatChange(audioFormat.value)}
                      className="accent-primary-orange"
                    />
                    <label htmlFor={audioFormat.value} className="text-sm">
                      {audioFormat.label}
                      <span className="text-xs text-gray-400 ml-1">
                        ({audioFormat.quality})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-primary-orange" />
            Generated Audios
          </h3>
          <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {generatedAudios?.map((audio, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-[#32323299] transition-all duration-300 ring-1 ring-white/10"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-primary-orange flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    {audio.title}
                  </h4>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {new Date(audio.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <audio
                    controls
                    src={audio.url}
                    className="max-w-[300px] audio-player"
                    controlsList="nodownload"
                  />
                  <div className="flex gap-2">
                   
                    
                  </div>
                </div>
              </div>
            ))}
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
