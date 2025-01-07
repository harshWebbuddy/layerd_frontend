"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Editor from "@monaco-editor/react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import EventSource from "eventsource";
import { FaCode, FaCopy, FaRocket } from "react-icons/fa";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const [codes, setCodes] = useState<string>("");
  const [refactoredCodes, setRefactoredCodes] = useState<string>("");
  const [detectedLanguage, setDetectedLanguage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [explanations, setExplanations] = useState<string>("");
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("Code-converter")
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Copy failed: ", error);
      });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const refactorCodes = async () => {
    if (codes.length === 0) {
      return toast.error("Please provide codes to refactor");
    }
    try {
      const { data } = await axios.post(
        "/ai/code/refactor",
        { code: codes },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("data", data.data.streamId);
      await streamResponse(data.data.streamId);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
            console.log("Acc", accumulatedResponse);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error parsing explanation chunk:", error);
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

  const cleanupEventSource = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  return (
    <section className="min-h-screen  px-4 py-8">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block animate-bounce-slow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl backdrop-blur-sm border border-emerald-500/20">
              <FaCode className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            AI Code Refactor
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your code into a cleaner, more efficient version with
            AI-powered refactoring
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Input Editor */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <h2 className="text-sm font-medium text-gray-400 ml-2">
                  Input Code
                </h2>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codes);
                  toast.success("Code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-emerald-400 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="500px"
              language={detectedLanguage || "javascript"}
              onChange={(value) => setCodes(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
                fontFamily: "JetBrains Mono, monospace",
              }}
            />
          </div>

          {/* Output Editor */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <h2 className="text-sm font-medium text-gray-400 ml-2">
                  Refactored Code
                </h2>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(explanations);
                  toast.success("Refactored code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-emerald-400 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="500px"
              language={detectedLanguage || "javascript"}
              value={explanations}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
                fontFamily: "JetBrains Mono, monospace",
              }}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
                <p className="text-gray-400 mt-4">Refactoring your code...</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={refactorCodes}
            disabled={isLoading || !codes}
            className="group relative px-6 py-3 rounded-xl font-medium text-white transition-all duration-200
                      bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 
                      hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed
                      disabled:hover:translate-y-0"
          >
            <span className="flex items-center gap-2">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span>Refactoring</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              ) : (
                <>
                  <FaCode className="w-5 h-5" />
                  <span>Refactor Code</span>
                  <FaRocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
