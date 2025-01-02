"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import Editor from "@monaco-editor/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaCode, FaCopy, FaSearch, FaRocket } from "react-icons/fa";

export default function Page() {
  const [codes, setCodes] = useState<string>("");
  const [reviewResult, setReviewResult] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const reviewCodes = async () => {
    if (codes.length === 0) {
      return toast.error("Please provide the codes to review.");
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "/ai/code/guru/review",
        { codes },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setReviewResult(response.data.message);
      toast.success("Reviewed your codes successfully.");
    } catch (error) {
      toast.error("Error reviewing your codes.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block animate-bounce-slow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl backdrop-blur-sm border border-indigo-500/20">
              <FaSearch className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            AI Code Review
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get instant, intelligent feedback on your code quality, potential
            improvements, and best practices
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
                  Your Code
                </h2>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codes);
                  toast.success("Code copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-indigo-400 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
            <Editor
              height="500px"
              language="javascript"
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

          {/* Review Results */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="bg-gray-900/50 p-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <h2 className="text-sm font-medium text-gray-400 ml-2">
                  Review Results
                </h2>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(reviewResult || "");
                  toast.success("Review copied!");
                }}
                className="p-1.5 text-gray-400 hover:text-indigo-400 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 h-[500px] overflow-y-auto">
              {isLoading ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.3s]" />
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.5s]" />
                  </div>
                  <p className="text-gray-400 mt-4">Analyzing your code...</p>
                </div>
              ) : reviewResult ? (
                <Markdown
                  className="prose prose-invert max-w-none prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-700/50"
                  remarkPlugins={[remarkGfm]}
                >
                  {reviewResult}
                </Markdown>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <FaCode className="w-8 h-8 mb-4 text-gray-500" />
                  <p>Review results will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={reviewCodes}
            disabled={isLoading || !codes}
            className="group relative px-6 py-3 rounded-xl font-medium text-white transition-all duration-200
                      bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 
                      hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed
                      disabled:hover:translate-y-0"
          >
            <span className="flex items-center gap-2">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span>Reviewing</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              ) : (
                <>
                  <FaSearch className="w-5 h-5" />
                  <span>Review Code</span>
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
