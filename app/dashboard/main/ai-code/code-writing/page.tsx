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

  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(
    undefined
  );
  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    setSelectedLanguage(undefined);
  }, []);

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
    <section className="relative p-3">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center max-w-sm">
            Supports Major Programming Languages
          </h1>
        </div>

        {selectedLanguage ? (
          <div>
            <div
              onClick={() => setSelectedLanguage(undefined)}
              className="flex mb-4 cursor-pointer items-center gap-2"
            >
              <IoMdArrowBack />
              <div>Language: {selectedLanguage}</div>
            </div>

            <form
              className="space-y-7"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <div className="bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat h-14 rounded-xl flex pl-4 border-bottom-gradient">
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
                  placeholder="Ask to code anything"
                  onChange={(e) => setInputMessage(e.target.value)}
                  value={inputMessage}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-br from-primary-red to-primary-yellow cursor-pointer grid place-content-center m-1.5 p-3 rounded-lg transition duration-300"
                >
                  {loading ? (
                    <DotsLoader />
                  ) : (
                    <Image
                      src="/main/send-outlined.svg"
                      alt="Send"
                      width={28}
                      height={28}
                      draggable={false}
                    />
                  )}
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
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4">
            {languageArray.map((item, index) => (
              <div
                className="grid place-content-center bg-gradient-to-br from-[#ffffff13] to-[#8f8f8f0c] p-12 rounded-xl cursor-pointer"
                key={index}
                onClick={() => handleLanguageSelect(item.language)}
              >
                <div className="bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] w-[90px] h-[90px] p-4 rounded-full grid place-content-center">
                  <Image
                    src={item.image}
                    alt={item.language}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[664px] h-[138px] bg-[#FFB076] blur-[250px] absolute top-1/3 left-[-550px]" />
    </section>
  );
}
