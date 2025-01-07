"use client";

import React, { useEffect, useRef, useState } from "react";
import { explainData } from "./constants";
import Image from "next/image";
import Editor from "@monaco-editor/react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EventSource from "eventsource";
import { FiCopy, FiCode, FiDownload, FiTerminal } from "react-icons/fi";
 
export default function Page() {
  const [activeLanguage, setActiveLanguage] = useState("");
  const eventSourceRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [codes, setCodes] = useState<string>("");
  const [explanations, setExplanations] = useState<string>("");

  const handleDownload = () => {
    const blob = new Blob([explanations], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${explanations.slice(0, 5)}_explanation.txt`;
    link.click();
  };

  const explainCodes = async (explainTo: string) => {
    if (codes.length === 0) {
      toast.error("Please provide the code to explain.");
      return;
    }

    setExplanations("");
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "/ai/code/explain",
        { code: codes, explainTo },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("data", data.data.streamId);
      await streamExplainResponse(data.data.streamId);
    } catch (error) {
      console.error("Error sending explanation request:", error);
      setIsLoading(false);
    }
  };

  const streamExplainResponse = async (streamId: string) => {
    cleanupEventSource();
    setIsLoading(true);
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
        try {
          const parsedChunk = JSON.parse(chunk);
          if (parsedChunk && parsedChunk.message) {
            const msg = parsedChunk.message;
            accumulatedResponse += msg;
            setExplanations(accumulatedResponse);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error parsing explanation chunk:", error);
        }
      };

      eventSource.addEventListener("end", () => {
        cleanupEventSource();
        setIsLoading(false);
        toast.success("Explanation completed!");
      });

      eventSource.onerror = (error) => {
        console.error("EventSource error:", error);
        cleanupEventSource();
        setIsLoading(false);
        // toast.error("Error during explanation streaming.");
      };
    } catch (error) {
      console.error("Error setting up EventSource:", error);
      cleanupEventSource();
      setIsLoading(false);
      // toast.error("Failed to setup explanation stream.");
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

  return (
    <section className="min-h-screen   px-4 py-8">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block animate-bounce-slow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500/10 rounded-2xl backdrop-blur-sm border border-pink-500/20">
              <FiTerminal className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Code Explanation Assistant
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your preferred explanation style and get detailed
            explanations of your code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Explanation Styles */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 border-b border-gray-700/50">
              <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
                <FiTerminal className="text-pink-400" />
                Select Explanation Style
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {explainData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 
                    ${
                      activeLanguage === item.title
                        ? "bg-gradient-to-r from-pink-500/20 to-yellow-500/20 border-pink-500/50"
                        : "bg-gray-900/50 hover:bg-gray-800/50"
                    } 
                    border border-gray-700/50 hover:border-pink-500/50`}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-800/80 rounded-lg group-hover:scale-110 transition-transform">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="transform transition-transform"
                        />
                      </div>
                      <span className="text-gray-200 font-medium">
                        {item.title}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveLanguage(item.title);
                        explainCodes(item.title);
                      }}
                      disabled={isLoading}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm
                        ${
                          isLoading && activeLanguage === item.title
                            ? "bg-pink-500/50 cursor-wait"
                            : "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
                        }`}
                    >
                      {isLoading && activeLanguage === item.title ? (
                        <div className="flex items-center gap-2">
                          <span>Explaining</span>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.3s]" />
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.5s]" />
                          </div>
                        </div>
                      ) : (
                        <>
                          <span>Explain</span>
                          <FiCode className="group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <h2 className="text-sm font-medium text-gray-400 ml-2">
                  Your Code
                </h2>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codes);
                  toast.success("Code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-pink-400 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="500px"
              defaultLanguage="javascript"
              theme="vs-dark"
              onChange={(value) => setCodes(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
                fontFamily: "JetBrains Mono, monospace",
              }}
            />
          </div>
        </div>

        {/* Explanation Results */}
        {explanations && (
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <FiTerminal className="text-pink-400" />
                <h2 className="text-lg font-semibold text-gray-200">
                  Explanation
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(explanations);
                    toast.success("Explanation copied!");
                  }}
                  className="p-2 text-gray-400 hover:text-pink-400 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <FiCopy className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-400 hover:text-pink-400 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <FiDownload className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-invert max-w-none prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-700/50">
                <Markdown remarkPlugins={[remarkGfm]}>{explanations}</Markdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
