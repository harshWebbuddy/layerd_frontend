"use client";

import React, { useEffect, useRef, useState } from "react";
import { programmingLanguages } from "../../components/constants";
import Selection from "../../components/Selection";
import clsx from "clsx";
import Editor from "@monaco-editor/react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import EventSource from "eventsource";
import { FiZap, FiCopy, FiCode, FiArrowRight } from "react-icons/fi";

const DotLoader = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce200"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce400"></div>
    </div>
  );
};

export default function CodeConverterPage() {
  const [selection, setSelection] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [explanations, setExplanations] = useState<string>("");

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [loading, setIsLoading] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const streamResponse = async (streamId: string) => {
    setIsLoading(true);
    cleanupEventSource();

    try {
      const eventSource = new EventSource(
        `https://api.layerd.ai/api/v1/ai/code/stream/${streamId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      eventSourceRef.current = eventSource;
      let accumulatedResponse = "";

      eventSource.onmessage = (event: MessageEvent) => {
        const chunk = event.data;
        console.log("chunk", chunk);
        try {
          const parsedChunk = JSON.parse(chunk);
          if (parsedChunk && parsedChunk.message) {
            const msg = parsedChunk.message;
            accumulatedResponse += msg;
            console.log("acc", accumulatedResponse);
            setExplanations(accumulatedResponse);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error parsing explanation chunk:", error);
        } finally {
        }
      };

      eventSource.addEventListener("end", () => {
        cleanupEventSource();
        toast.success("Explanation completed!");
      });

      eventSource.onerror = (error) => {
        console.error("EventSource error:", error);
        cleanupEventSource();
      };
    } catch (error) {
      console.error("Error setting up EventSource:", error);
      cleanupEventSource();
    }
  };

  const convertCodes = async () => {
    if (!codes || codes.trim().length === 0) {
      toast.error("Please insert code to convert.");
      return;
    }

    if (!fromLanguage || !toLanguage) {
      toast.error("Please select both input and output languages.");
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "/ai/code/convert",
        {
          code: codes,
          currentLanguage: fromLanguage,
          targetLanguage: toLanguage,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const streamId = data.data.streamId;
      await streamResponse(streamId);
    } catch (error) {
      console.error("Error during code conversion:", error);
      toast.error("Code conversion failed.");
    }
  };

  const cleanupEventSource = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      cleanupEventSource();
    };
  }, []);

  const handleCopyToClipboard = () => {
    if (responseMessage) {
      navigator.clipboard.writeText(responseMessage);
      toast.success("Code copied to clipboard!");
    } else {
      toast.error("No explanation to copy.");
    }
  };

  if (copied) {
    setTimeout(() => setCopied(false), 1500);
  }

  const [fromLanguage, setFromLanguage] = useState<string>();
  const [toLanguage, setToLanguage] = useState<string>();

  const [codes, setCodes] = useState<string>();

  return (
  <div className="px-4 md:px-10 space-y-6 relative">
    <div className="w-[132px] h-[428px] bg-[#FFB076] blur-[150px] absolute top-1/4 left-[-200px] z-[2]" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-block animate-bounce-slow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <FiZap className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Code Converter
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your code between different programming languages with
            AI-powered precision
          </p>
        </div>

        <div className="grid grid-cols-1  z-10 relative sm:grid-cols-2 gap-6 p-4  rounded-xl backdrop-blur-sm  ">
          <div className="space-y-2 relative z-10">
            <label className="text-sm font-medium text-gray-300">
              From Language
            </label>
            <div
              onClick={() => setSelection("input")}
              className={clsx(
                "transition-all duration-200",
                selection === "input" &&
                  "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"
              )}
            >
              <Selection
                id="input"
                onChange={setFromLanguage}
                placeholder="Select source language"
                items={programmingLanguages}
              />
            </div>
          </div>
          <div className="space-y-2 relative z-10">
            <label className="text-sm font-medium text-gray-300">
              To Language
            </label>
            <div
              onClick={() => setSelection("output")}
              className={clsx(
                "transition-all duration-200",
                selection === "output" &&
                  "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"
              )}
            >
              <Selection
                id="output"
                onChange={setToLanguage}
                placeholder="Select target language"
                items={programmingLanguages}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-3 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codes);
                  toast.success("Code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="400px"
              language={fromLanguage}
              onChange={(value) => setCodes(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
              }}
            />
          </div>

          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-3 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(explanations);
                  toast.success("Converted code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="400px"
              language={toLanguage}
              value={explanations}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
              }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={convertCodes}
            disabled={loading}
            className={clsx(
              "group relative px-8 py-4 rounded-xl font-medium text-white transition-all duration-200",
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-[#FFB076]   hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:-translate-y-0.5"
            )}
          >
            <span className="flex items-center gap-3">
              {loading ? (
                <DotLoader />
              ) : (
                <>
                  <FiCode className="w-5 h-5" />
                  Convert Code
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
