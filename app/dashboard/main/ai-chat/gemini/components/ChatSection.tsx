import React, { useEffect } from "react";
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
  conversationid,onSelectConversation
  
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
        // If there are no messages to update, log a warning and return the unchanged array.
        console.error("No messages to update.");
        return prevMessages;
      }

      const messageIndex = prevMessages.length - 1;
      const updatedMessages = [...prevMessages];

      // Ensure the message exists at the index before trying to modify it
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
    <div className="flex-1 h-full border border-[#514E4E] rounded-2xl flex flex-col mt-4 px-8 pb-8">
      <div className="flex-1 flex flex-col h-full max-h-[68vh] overflow-y-auto">
        <ChatMessages
          conversation={{ ...conversation, chats: messages }}
          assistant={assistant}
        />
      </div>
      <div className="space-y-4">
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
