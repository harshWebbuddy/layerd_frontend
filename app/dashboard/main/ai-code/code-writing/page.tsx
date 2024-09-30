"use client";

import Image from "next/image";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdArrowBack } from "react-icons/io";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

export default function Page() {
  const codeArray = [
    "/main/code/javascript.png",
    "/main/code/typescript.png",
    "/main/code/matlab.png",
    "/main/code/excel.png",
    "/main/code/html.png",
    "/main/code/css.png",
    "/main/code/swift.png",
    "/main/code/go.png",
    "/main/code/csharp.png",
    "/main/code/cpp.png",
    "/main/code/java.png",
    "/main/code/rust.png",
    "/main/code/python.png",
    "/main/code/ruby.png",
    "/main/code/php.png",
    "/main/code/dart.png",
    "/main/code/mysql.png",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState<
    string | undefined
  >();

  const handleLanguageSelect = (item: string) => {
    // Extract the language from the path
    const language = item.split("/").pop()?.split(".")[0]; // Get the last part before .png
    setSelectedLanguage(language);
  };

  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState(undefined);

  const handleSendMessage = async () => {
    toast.promise(
      axios.post(
        "/ai/code/write",
        {
          language: selectedLanguage,
          content: inputMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
        loading: "Generating...",
        error: "Error generating codes",
        success: (response) => {
          setResponseMessage(response.data.message);
          return "Generated Codes.";
        },
      }
    );
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
          <div className="">
            <div
              onClick={() => {
                setSelectedLanguage(undefined);
              }}
              className="flex mb-4 cursor-pointer items-center gap-2"
            >
              <IoMdArrowBack />
              <div>Language: {selectedLanguage}</div>
            </div>
            {responseMessage && (
              <Markdown
                className={"bg-[#212121] rounded-xl py-1 px-2"}
                remarkPlugins={[remarkGfm]}
              >
                {responseMessage}
              </Markdown>
            )}

            <form
              className="space-y-7 "
              onSubmit={(e) => {
                e.preventDefault();
                if (inputMessage.trim()) {
                  handleSendMessage();
                  setInputMessage(""); // Clear input field after sending message
                }
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
                  className="bg-gradient-to-br from-primary-red to-primary-yellow cursor-pointer grid place-content-center m-1.5 p-3 rounded-lg transition duration-300"
                >
                  <Image
                    src="/main/send-outlined.svg"
                    alt="Send"
                    width={28}
                    height={28}
                    draggable={false}
                  />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4">
            {codeArray.map((item, index) => (
              <div
                className="bg-gradient-to-br from-[#ffffff13] to-[#8f8f8f0c] grid place-content-center p-12 rounded-xl cursor-pointer"
                key={index}
                onClick={() => handleLanguageSelect(item)}
              >
                <div className="bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] w-[90px] h-[90px] p-4 rounded-full grid place-content-center">
                  <Image
                    src={item}
                    alt={item}
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
