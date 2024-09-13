"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { defaultDisplay } from "../../components/constants";
import axios from "@/lib/axios";
import { IChat } from "@/types/IChat";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatPage() {
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<IChat[]>([]);

  // Load chat history from localStorage once on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatHistory");
    if (storedMessages) {
      setChatHistory(JSON.parse(storedMessages));
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  // Handle sending and receiving messages
  const handleSendMessage = useCallback(async () => {
    const userMessage: IChat = { role: "user", content: inputMessage };
    const updatedChatHistory = [...chatHistory, userMessage];

    setChatHistory(updatedChatHistory);

    try {
      const response = await axios.post(
        "/ai/chatbot/gpt4",
        { messages: updatedChatHistory },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const systemMessage: IChat = {
        role: "system",
        content: response.data.message,
      };
      setChatHistory((prev) => [...prev, systemMessage]);
    } catch (error) {
      console.error("Error fetching response: ", error);
      toast.error("Failed to fetch response. Please try again.");
    }
  }, [chatHistory, inputMessage]);

  return (
    <section
      className={cn("grid p-2 w-full h-full", {
        "place-content-center": chatHistory.length === 0,
        "flex flex-col justify-between": chatHistory.length > 0,
      })}
    >
      {chatHistory.length > 0 ? (
        <div className="w-full flex flex-col gap-2">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={cn("w-full flex", {
                "justify-end": message.role === "user",
              })}
            >
              <Markdown
                className={cn("bg-[gray] rounded-xl py-1 px-2", {
                  "bg-[#0a0925]": message.role === "system",
                })}
                remarkPlugins={[remarkGfm]}
              >
                {message.content}
              </Markdown>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src="/main/ChatGPT 1.svg"
            alt="logo"
            width={200}
            height={100}
            draggable={false}
            className="w-28"
          />
          <h1 className="text-3xl font-semibold mt-10 text-center">
            Welcome to ChatGPT
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-16 mt-12">
            {defaultDisplay.map((item, index) => (
              <div key={index} className="space-y-3 flex flex-col items-center">
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={50}
                  height={50}
                  className={`${index !== 2 ? "w-4" : "w-6"}`}
                />
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <div className="flex flex-col gap-5 mt-7">
                  {item.lists.map((exampleText, listIndex) => (
                    <div
                      key={listIndex}
                      onClick={() => {
                        if (item.title === "Examples")
                          setInputMessage(exampleText.replace(/"/g, ""));
                      }}
                      className="bg-[#323232]/60 hover:bg-[#323232] py-3 px-4 ring-2 ring-[#514E4E]/70 cursor-pointer rounded-lg md:max-w-xs min-h-[80px]"
                    >
                      {exampleText}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
            placeholder="Search for anything"
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
    </section>
  );
}
