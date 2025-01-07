import React, { useEffect } from "react";
import Image from "next/image";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { Assistant, Chat, Conversation } from "@/types/aiassistant";

interface ChatSectionProps {
  conversation: Conversation | any;
  assistant: Assistant;
  selectedLanguage: string;
  selectedAiModel: string;
  setMessagesData: any;
  newChat: boolean;
  setNewChat: (value: boolean) => void;
  convId: string;
  setMessages: (value: any) => void;
  messages: any;
  setConvId: (value: string) => void;
  conversationid: string;
  onSelectConversation: (id: string) => void;
}

const defaultDisplay = [
  {
    title: "Examples",
    icon: "/main/examples.svg",
    lists: [
      "Explain quantum computing in simple terms",
      "Got any creative ideas for a 10 year old's birthday?",
      "How do I make an HTTP request in Javascript?",
    ],
  },
  {
    title: "Capabilities",
    icon: "/main/capabilities.svg",
    lists: [
      "Remembers what user said earlier in the conversation",
      "Allows user to provide follow-up corrections",
      "Trained to decline inappropriate requests",
    ],
  },
  {
    title: "Limitations",
    icon: "/main/limitations.svg",
    lists: [
      "May occasionally generate incorrect information",
      "May occasionally produce harmful instructions or biased content",
      "Limited knowledge of world and events after 2022",
    ],
  },
];

const ChatSection: React.FC<ChatSectionProps> = ({
  conversation,
  assistant,
  selectedLanguage,
  selectedAiModel,
  setMessagesData,
  newChat,
  setNewChat,
  convId,
  messages,
  setConvId,
  setMessages,
  conversationid,
  onSelectConversation,
}) => {
  useEffect(() => {
    if (conversation) {
      setMessages(conversation.chats);
    }
  }, [conversation]);

  useEffect(() => {
    setMessagesData(messages);
  }, [messages]);

  const addMessage = (user_prompt: string, response: string) => {
    const newMessage: Chat = {
      user_prompt,
      response,
      _id: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      chats: undefined,
      title: undefined,
      conversation_id: function (conversation_id: any): void {
        throw new Error("Function not implemented.");
      },
    };
    setMessages((prevMessages: any) => [...prevMessages, newMessage]);
  };

  const updateMessage = (prompt: string, response: string) => {
    setMessages((prevMessages: any) => {
      if (prevMessages.length === 0) {
         console.error("No messages to update.");
        return prevMessages;
      }

      const messageIndex = prevMessages.length - 1;
      const updatedMessages = [...prevMessages];

       if (updatedMessages[messageIndex]) {
        updatedMessages[messageIndex].response = response;
      } else {
        console.error("Message at the last index does not exist.");
      }

      return updatedMessages;
    });
  };

  // console.log("message", messages);
  return (
    <div className="flex-1 h-full border bg-[url('/main/background-image-chat-bard.png')] bg-cover bg-center bg-no-repeat border-[#514E4E] rounded-2xl -left-4 flex flex-col mt-4 relative">
      <div className="flex-1 overflow-hidden px-8">
        <div className="h-full max-h-[calc(100vh-280px)] overflow-y-auto">
          {messages && messages.length > 0 ? (
            <ChatMessages
              conversation={{ ...conversation, chats: messages }}
              assistant={assistant}
            />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-280px)] relative">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
              </div>

              <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10">
                {/* Logo with Glow Effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20" />
                  <Image
                    src="/main/ChatGPT 1.svg"
                    alt="logo"
                    width={200}
                    height={100}
                    draggable={false}
                    className="w-28 relative transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Welcome Text with Gradient */}
                <h1 className="text-4xl font-bold mt-10 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Welcome to   Claude
                </h1>
                <p className="text-gray-400 mt-4 text-center max-w-2xl">
                  Your AI-powered assistant ready to help with any questions or
                  tasks
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 px-8 pb-8 bg-gradient-to-t from-black/20 to-transparent pt-4">
        <ChatInput
          conversationid={conversationid}
          selectedModel={selectedAiModel}
          chatid={assistant?.id}
          addMessage={addMessage}
          updateMessage={updateMessage}
          selectedLanguage={selectedLanguage}
          newChat={newChat}
          setNewChat={setNewChat}
          onSelectConversation={onSelectConversation}
          convId={convId}
        />
      </div>
    </div>
  );
};

export default ChatSection;
