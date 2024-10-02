"use client";

import React, { useState } from "react";
import { explainData } from "./constants";
import Image from "next/image";
import Editor from "@monaco-editor/react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function page() {
  const [copied, setCopied] = useState(false);
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
  if (copied) {
    setTimeout(() => setCopied(false), 1500);
  }

  const [codes, setCodes] = useState<string>("");
  const [explainations, setExplainations] = useState<string>();

  const explainCodes = (person: string) => {
    if (codes.length === 0) {
      toast.error("Please provide the codes to explain.");
    }
    toast.promise(
      axios.post(
        "/ai/code/guru/explain",
        {
          codes,
          person,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
        loading: "Getting explainations",
        error: "Error getting explainations",
        success: (response) => {
          setExplainations(response.data.message);
          return "Explains got successfully.";
        },
      }
    );
  };

  return (
    <section className="p-3 h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl space-y-10 mb-60">
          <h1 className="text-2xl font-semibold text-center">
            How do you want the code to be explained to you?
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full h-full justify-between flex flex-col">
              {explainData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-between hover:bg-gradient-to-br from-[#ffffff21] to-[#9292921a] py-4 px-5 rounded-lg group"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.image}
                      width={40}
                      height={40}
                    />
                    <h1>{item.title}</h1>
                  </div>
                  <button
                    onClick={() => explainCodes(item.title)}
                    className="bg-[#494949] flex justify-between w-full max-w-[100px] p-2 items-center rounded-md invisible group-hover:visible "
                  >
                    <span>Explain</span>
                    <Image
                      src="/arrow-right.svg"
                      alt="code-explain"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full">
              <div className="bg-[url('/main/background-code.png')] bg-cover bg-center bg-no-repeat min-h-[500px] w-full rounded-xl ring-b-[3px] ring-neutral-700 ring-inset">
                <div className="bg-[#393A3D] flex justify-between px-3 py-1.5  rounded-t-xl">
                  <h1>1</h1>
                  <div className="group relative">
                    <button onClick={handleCopyClick}>Copy</button>
                    <div
                      className={`absolute -top-10 ${
                        copied ? "-right-1" : "-right-0 sm:-right-10"
                      } `}
                    >
                      <div className="bg-[#585858]/90 backdrop-blur-md p-2 rounded-md text-[13px] whitespace-nowrap z-50 invisible scale-75 transition-all duration-300 group-hover:visible group-hover:scale-100 opacity-0 group-hover:opacity-100">
                        {copied ? "Copied!" : "Copy to Clipboard"}
                      </div>
                    </div>
                  </div>
                </div>
                <Editor
                  height={500}
                  width={"100%"}
                  onChange={(value) => setCodes(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Markdown
        className={"bg-[#2f2f2f] rounded-xl py-1 px-2 mb-5"}
        remarkPlugins={[remarkGfm]}
      >
        {explainations}
      </Markdown>
    </section>
  );
}
