"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import EventSource from "eventsource";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaCopy, FaDownload, FaCode, FaRocket } from "react-icons/fa";
import DotsLoader from "../../ai-chat/anthopic-ai/components/Dotsloader";

export default function Page() {
  const languageArray = [
    { language: "javascript", image: "/main/code/javascript.png" },
    { language: "typescript", image: "/main/code/typescript.png" },
    { language: "matlab", image: "/main/code/matlab.png" },
    { language: "excel", image: "/main/code/excel.png" },
    { language: "html", image: "/main/code/html.png" },
    { language: "css", image: "/main/code/css.png" },
    { language: "swift", image: "/main/code/swift.png" },
    { language: "go", image: "/main/code/go.png" },
    { language: "c#", image: "/main/code/csharp.png" },
    { language: "c++", image: "/main/code/cpp.png" },
    { language: "java", image: "/main/code/java.png" },
    { language: "rust", image: "/main/code/rust.png" },
    { language: "python", image: "/main/code/python.png" },
    { language: "ruby", image: "/main/code/ruby.png" },
    { language: "php", image: "/main/code/php.png" },
    { language: "dart", image: "/main/code/dart.png" },
    { language: "mysql", image: "/main/code/mysql.png" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState<
    string | undefined
  >();
  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

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

  useEffect(() => {
    if (languageArray.length > 0 && !selectedLanguage) {
      setSelectedLanguage(languageArray[0].language);
    }
  }, []);

  const streamResponse = async (chatId: string) => {
    setLoading(true);
    cleanupEventSource();
    try {
      const eventSource = new EventSource(
        `https://api.layerd.ai/api/v1/ai/code/stream/${chatId}`,
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
            setResponseMessage(accumulatedResponse);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error parsing chunk:", error);
        }
      };

      eventSource.addEventListener("end", () => {
        cleanupEventSource();
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

  const handleSendMessage = async () => {
    if (!selectedLanguage || !inputMessage.trim()) {
      toast.error("Please select a language and enter a valid prompt.");
      return;
    }
    setInputMessage("");
    try {
      setResponseMessage("");
      const { data } = await axios.post(
        "ai/code/write",
        {
          programmingLanguage: selectedLanguage,
          userPrompt: inputMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await streamResponse(data.data.streamId);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(responseMessage);
    toast.success("Code copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([responseMessage], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${selectedLanguage}_code.txt`;
    link.click();
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-block animate-bounce-slow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <FaCode className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Code Generation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your ideas into code with AI-powered precision. Select a
            language and describe what you want to create.
          </p>
        </div>

        {selectedLanguage ? (
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 p-6">
            <div
              onClick={() => setSelectedLanguage(undefined)}
              className="flex mb-6 cursor-pointer items-center gap-3 text-lg group"
            >
              <IoMdArrowBack className="text-blue-400 group-hover:translate-x-[-4px] transition-transform" />
              <span className="font-medium text-gray-300">
                Selected:{" "}
                <span className="font-bold text-blue-400">
                  {selectedLanguage}
                </span>
              </span>
            </div>

            <form
              className="space-y-7"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <div className="flex bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 items-center gap-4 focus-within:border-blue-500 transition-all duration-300">
                <FaCode className="text-blue-400" />
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
                  placeholder="Describe what you want to create..."
                  onChange={(e) => setInputMessage(e.target.value)}
                  value={inputMessage}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-4 py-2 rounded-lg font-medium text-white transition-all duration-200
                           bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                           hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    {loading ? (
                      <DotsLoader />
                    ) : (
                      <>
                        Generate
                        <FaRocket className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {responseMessage && (
              <div className="mt-6 bg-gray-900/50 rounded-lg border border-gray-700/50 overflow-hidden">
                <div className="bg-gray-800/50 p-4 flex items-center justify-between border-b border-gray-700/50">
                  <h2 className="text-xl font-semibold text-blue-400">
                    Generated Code
                  </h2>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCopyToClipboard}
                      className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      title="Copy Code"
                    >
                      <FaCopy className="text-gray-400 group-hover:text-blue-400" />
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      title="Download Code"
                    >
                      <FaDownload className="text-gray-400 group-hover:text-blue-400" />
                    </button>
                  </div>
                </div>
                <SyntaxHighlighter
                  language={selectedLanguage}
                  style={dracula}
                  showLineNumbers
                  className="!bg-transparent"
                  customStyle={{
                    margin: 0,
                    padding: "1.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  {responseMessage}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {languageArray.map((item, index) => (
              <div
                key={index}
                onClick={() => handleLanguageSelect(item.language)}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl 
                          hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer
                          transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className="bg-gray-900/80 w-[90px] h-[90px] rounded-full flex items-center justify-center mx-auto
                              group-hover:bg-blue-500/20 transition-all duration-500 mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.language}
                    width={40}
                    height={40}
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-sm font-medium capitalize text-gray-400 group-hover:text-blue-400">
                  {item.language}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
