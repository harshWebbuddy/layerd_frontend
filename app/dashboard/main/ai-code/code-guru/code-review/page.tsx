"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import Editor from "@monaco-editor/react";
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

  const [reviewResult, setReviewResult] = useState<string>();

  const reviewCodes = () => {
    if (codes.length === 0) {
      toast.error("Please provide the codes to review.");
    }
    toast.promise(
      axios.post(
        "/ai/code/guru/review",
        {
          codes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
        loading: "Reviewing your codes.",
        error: "Error reviewing your codes.",
        success: (response) => {
          setReviewResult(response.data.message);
          return "Reviewed your codes successfully.";
        },
      }
    );
  };

  return (
    <section className="space-y-6 px-4 md:px-10">
      <div className="bg-[url('/main/code/background-code-title.png')] bg-no-repeat bg-cover bg-center p-4 md:p-10 ring-1 ring-neutral-700 ring-inset rounded-2xl">
        <h1 className="text-3xl text-primary-yellow font-semibold">
          Code Review
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Fringilla viverra arcu
          vestibulum id odio velit nibh dictum enim. Tempor massa nullam mauris
          interdum volutpat ornare egestas. Ac nulla bibendum tempus at cursus
          odio et dolor. Dolor eget facilisis ac a venenatis. Pellentesque
          accumsan ante sit aliquet.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-3">
          <h1 className="font-semibold">Input Your Code</h1>
          <div className="bg-[url('/main/background-code.png')] bg-cover bg-center bg-no-repeat min-h-[500px] w-full rounded-xl ring-b-[3px] ring-neutral-700 ring-inset flex flex-col">
            <div className="bg-[#393A3D] flex justify-between px-3 py-1.5 rounded-t-xl">
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
              onChange={(value) => {
                setCodes(value);
              }}
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <h1 className="font-semibold">Code Review Results</h1>
          <div className="bg-[url('/main/background-code.png')] bg-cover bg-center bg-no-repeat min-h-[500px] w-full rounded-xl ring-b-[3px] ring-neutral-700 ring-inset flex flex-col">
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
            <Markdown
              className={"bg-[#2f2f2f] rounded-xl py-1 px-2 mb-5"}
              remarkPlugins={[remarkGfm]}
            >
              {reviewResult}
            </Markdown>
          </div>
        </div>
      </div>
      <button
        onClick={reviewCodes}
        className="bg-[#494949] flex justify-between w-full max-w-[200px] p-3 items-center rounded-md"
      >
        <span className="font-semibold">Review Code</span>
        <Image
          src="/arrow-right.svg"
          alt="code-explain"
          width={20}
          height={20}
          className="rounded-full"
        />
      </button>
    </section>
  );
}
