import axios from "@/lib/axios";
import { parseJsonString } from "@/lib/utils";
import autosize from "autosize";
import { getCookie } from "cookies-next";
import { Send } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import EventSource from "eventsource";
interface ChatInputProps {
  chatid: string;
  addMessage: (prompt: string, response: string) => void;
  updateMessage: (prompt: string, response: string) => void;
  selectedLanguage: string;
  selectedModel: string;
  newChat: boolean;
  setNewChat: (value: boolean) => void;
  convId: string;
  conversationid: string;
  onSelectConversation: (id: string|null) => void;
  
}

const ChatInput: React.FC<ChatInputProps> = ({
  conversationid,
  chatid,
  addMessage,
  updateMessage,
  selectedLanguage,
  selectedModel,
  newChat,
  setNewChat,
  convId,
  onSelectConversation,
}) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [chat, setChat] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [emptyPrompt, isEmptyPrompt] = useState("");

  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      autosize.update(textareaRef.current);
    }
  }, [input]);

   

  const streamResponse = async (chatId: string, prompt: string) => {
    try {
      const eventSource = new EventSource(
        `https://api.layerd.ai/api/v1/ai/chat/stream/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("eventss", eventSource);
      let accumulatedResponse = "";

      eventSource.onmessage = (event: MessageEvent) => {
        const chunk = event.data;
        // console.log("chunks", chunk);

        try {
          // Parse the incoming chunk which should be a JSON object
          const parsedChunk = JSON.parse(chunk);

          // Ensure the message property exists in the chunk
          if (parsedChunk && parsedChunk.message) {
            const msg = parsedChunk.message;
            accumulatedResponse += msg;
            // console.log("acc", accumulatedResponse);

            // Call the update function to update the UI or handle the accumulated response
            updateMessage(prompt, accumulatedResponse);
          }
        } catch (error) {
          console.error("Error parsing chunk:", error);
        }
      };

      eventSource.onerror = (error: MessageEvent) => {
        console.error("EventSource failed:", error);
        eventSource.close();
      };

      eventSource.addEventListener("end", (event: MessageEvent) => {
        eventSource.close();
      });
    } catch (error) {
      console.error("Error setting up EventSource:", error);
      toast.error("Error setting up stream");
    }
  };

  const handleSend = async (user_prompt?: string) => {
    if (user_prompt) {
      user_prompt = user_prompt.trim();
    }
    const prompt = user_prompt || input.trim();
    if (prompt === "") {
      isEmptyPrompt("Please enter any prompt...!");
      return;
    }

    isEmptyPrompt("");
    setInput("");
    addMessage(prompt, "");

    try {
      const payload = {
        user_prompt: user_prompt,
        provider: "gemini",
        model: "gemini-1.5-flash",
      };
      const url = `/ai/chat${conversationid ? `?conversationId=${conversationid}` : ''}`;

      //  if (  !currentConversationId) {
      //   const initResponse = await axios.post(`/ai/chat?conversationId=`, payload, {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   });

      //   const newConversationId = initResponse.data.data.conversation_id; // Extract conversation ID
      //   setCurrentConversationId(newConversationId); // Store the generated conversation ID
      //   setNewChat(false); // Update state for new conversation
      // }

      // Use the stored or newly generated conversation ID
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const chatId = response.data.data.chat_id;
      const newConversationId = response.data.data.conversation_id;
      // setSelectedConversation(newConversationId);
      onSelectConversation(newConversationId);
      await streamResponse(chatId, user_prompt);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        handleSend(input);
      }
    }
  };

  // const handleOpenChange = (newOpen: boolean) => {
  //   setOpen(newOpen);
  //   if (isAnimating) {
  //     stopRecognition();
  //     setIsAnimating(false);
  //   } else {
  //     startRecognition();
  //     setIsAnimating(true);
  //   }
  // };

  return (
    <>
      <div className="flex  border border-[#514E4E] shadow-lg shadow-[#FDBB144A] gap-2 rounded-xl items-end relative">
        <div className="relative w-full">
          <Image
            src="/landing/Chatgpt4.png"
            alt=""
            width={35}
            height={35}
            draggable={false}
            className="select-none absolute top-1 left-2"
          />
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              isEmptyPrompt("");
            }}
            onKeyDown={handleKeyDown}
            rows={1}
            className="w-full flex-1 p-2 pl-16 bg-transparent resize-none overflow-hidden "
            placeholder="What's in your mind?"
          />
        </div>
        <button
          onClick={() => handleSend(input)}
          className="h-12 w-12 flex justify-center items-center bg-primary-green hover:bg-opacity-90 transition-all duration-300 text-white rounded-xl"
        >
          <Send />
        </button>
      </div>
      {emptyPrompt && (
        <div className="text-red-500 mt-2 ml-2">{emptyPrompt}</div>
      )}
    </>
  );
};

export default ChatInput;
