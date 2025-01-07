"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import { IChat } from "@/types/IChat";

 
 import Sidebar from "./components/Sidebar";
import ChatHistory from "./components/ChatHistory";
import Topbar from "./components/Topbar";
import ChatSection from "./components/ChatSection";
import { Assistant, Chat, Conversation } from "@/types/aiassistant";

interface PageProps {
  params: {
    chatid: string;
  };
}

const ChatPage: React.FC<PageProps> = ({ params: { chatid } }: PageProps) => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<IChat[]>([]);
  const [Value, setValue] = useState<string | null>(null);

  const [conversationId, setConversationId] = useState<string | null>(null);
  const [assistantData, setAssistantData] = useState<Assistant | null>(null);
  const [assistantConversation, setAssistantConversation] =
    useState<Conversation | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isHistoryOpen, setHistoryOpen] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>();
  const [messagesData, setMessagesData] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Chat[]>([]);
  const [selectedAiModel, setSelectedAiModel] = useState();
  const [newChat, setNewChat] = useState(true);

  const [convId, setConvId] = useState("");

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatHistory");
    if (storedMessages) {
      setChatHistory(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const switchLanguage = (language: string) => {
    setSelectedLanguage(language);
  };
  // const handleSelectConversation = useCallback(
  //   (Conversationid: string | null) => {
  //     console.log("clicked");
  //     // setConversationId(conversationId || "");
  //     if (Conversationid === null) {
  //       setValue(null);
  //       console.log("null", Conversationid);
  //       setMessages([]);
  //       setNewChat(true);
  //       setConvId("");
  //     } else {
  //       console.log("value", Conversationid);
  //       setConversationId(Conversationid);
  //     }
  //   },
  //   [setMessages, setNewChat, setConvId]
  // );
  const handleSelectConversation = useCallback(
    (Conversationid: string | null) => {
      setConversationId(Conversationid);
      setValue(Conversationid);
      
      if (Conversationid === null) {
        setMessages([]);
        setNewChat(true);
        setConvId("");
      }
    },
    [setMessages, setNewChat, setConvId]
  );
  const handleNewChat = useCallback(() => {
    handleSelectConversation(null);
  }, [handleSelectConversation]);
  return (
    <div
      className={`flex-1 flex rounded-2xl shadow-box gap-x-10  ${
        isSidebarOpen ? "overflow-hidden" : ""
      } ${isHistoryOpen ? "overflow-hidden" : ""}`}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(true)}
        chatid={chatid}
      />
      <ChatHistory
        Value={Value}
        setMessages={setMessages}
        messages={messages}
        isOpen={isHistoryOpen}
        onClose={() => setHistoryOpen(false)}
        chatid={chatid}
        newChat={newChat}
        setNewChat={setNewChat}
        setConvId={setConvId}
        convId={convId}
        conversationid={conversationId}
        setConversationId={setConversationId}
        onSelectConversation={handleSelectConversation}
                onNewChat={handleNewChat}

      />
      <div className="flex-1 flex flex-col">
          {/* <Topbar
            conversation={assistantConversation}
            assistant={assistantData!}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isHistoryOpen={isHistoryOpen}
            setHistoryOpen={setHistoryOpen}
            selectedLanguage={selectedLanguage}
            switchLanguage={switchLanguage}
            setSelectedAiModel={setSelectedAiModel}
            selectedAiModel={selectedAiModel}
            messagesData={messagesData}
          /> */}
        <ChatSection
          setMessages={setMessages}
          messages={messages}
          conversation={assistantConversation}
          assistant={assistantData}
          selectedLanguage={selectedLanguage}
          selectedAiModel={selectedAiModel}
          setMessagesData={setMessagesData}
          newChat={newChat}
          setNewChat={setNewChat}
          convId={conversationId}
          setConvId={setConvId}
          conversationid={conversationId}
          onSelectConversation={handleSelectConversation}
        />
      </div>
    </div>
  );
};

export default ChatPage;
