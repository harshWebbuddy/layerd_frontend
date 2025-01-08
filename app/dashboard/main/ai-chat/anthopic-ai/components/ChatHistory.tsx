import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import { Chat } from "@/types/aiassistant";
import { IoMdCloseCircle, IoMdCreate } from "react-icons/io";
import { Plus, Check, X, MessageSquare, Trash, Search, Pencil } from "lucide-react";
import { FaMessage } from "react-icons/fa6";
import clsx from "clsx";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  chatid: string;
  newChat: boolean;
  setNewChat: (value: boolean) => void;
  onNewChat: (value: boolean) => void;
  messages: Chat[];
  convId: string;
  setConvId: (convoId: string) => void;
  setMessages: React.Dispatch<React.SetStateAction<Chat[]>>;
  setConversationId: (id: string) => void;
  conversationid: string;
  onSelectConversation: (_id: string | null) => void;
  Value: string | null;
}

export default function ChatHistory({
  isOpen,
  onClose,
  chatid,
  newChat,
  setNewChat,
  setConvId,
  messages,
  setMessages,
  convId,
  setConversationId,
  onSelectConversation,
  Value,
}: IProps) {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get("/ai/chat/anthropic", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const filteredChats = response.data.data;
      setChatHistory(filteredChats);
    } catch (error) {
      console.error(
        "Error fetching chat history:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchChatHistory();
  }, [setNewChat]);

  const handleDeleteConversation = async (conversationId: string) => {
    try {
      const response = await axios.delete(`/ai/chat/${conversationId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setChatHistory(
        chatHistory.filter(
          (chat) => String(chat.conversation_id) !== conversationId
        )
      );
    } catch (error) {
      console.error("Error deleting conversation:", error);
    }
  };

  const startEditing = (conversationId: string, currentTitle: string) => {
    setEditingId(conversationId);
    setEditingTitle(currentTitle);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  const handleRenameConversation = async (conversationId: string) => {
    if (!editingTitle.trim()) {
      cancelEditing();
      return;
    }

    try {
      const response = await axios.put(
        `/ai/chat/${conversationId}`,
        {
          title: editingTitle,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setChatHistory(
        chatHistory.map((chat) =>
          String(chat.conversation_id) === conversationId
            ? { ...chat, title: editingTitle }
            : chat
        )
      );
      cancelEditing();
    } catch (error) {
      console.error("Error renaming conversation:", error);
    }
  };

  const handleSelectedConvo = async (convoId: string) => {
    if (editingId) return;  
    
    try {
      const response = await axios.get(`/ai/chat/anthropic/${convoId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const chatData = response.data.data.chats;

      if (chatData) {
        setConvId(convoId);
        setNewChat(false);
        setMessages(chatData);
        onSelectConversation(convoId);
      }
    } catch (error) {
      console.error("Error retrieving conversation:", error);
    }
  };

  const handleStartNewChat = () => {
    onSelectConversation(null);
    fetchChatHistory();
    setNewChat(true);
    setConvId("");
    setMessages([]);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredChatHistory = chatHistory.filter((chat) => {
    return (
      typeof chat.title === "string" &&
      chat.title.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div
    className={clsx(
      isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full",
      "transition-all duration-300 h-[calc(100vh-100px)] z-50    ",
      "fixed top-[80px] left-0 w-full sm:w-[100px] md:w-[420px] lg:relative lg:top-0"
    )}
  >
    <div className="flex flex-col h-full">
      {/* Search and New Chat Section */}
      <div className="px-4 py-4 backdrop-blur-xl  sticky top-0 z-30">
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <input
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Conversations"
              className="w-full h-11 bg-[#2A2A2A] rounded-lg pl-10 pr-4 text-gray-200 
                   placeholder-gray-500 focus:outline-none focus:ring-2 
                   focus:ring-primary-red/20 transition-all"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          <button
            onClick={handleStartNewChat}
            className="h-11 w-11 bg-gradient-to-br from-primary-red to-primary-yellow 
                 rounded-lg flex items-center justify-center shadow-lg 
                 hover:shadow-primary-red/20 hover:scale-105 active:scale-95 
                 transform transition-all duration-200"
          >
            <Plus size={20} className="text-black/80" />
          </button>
        </div>
      </div>

      {/* Chat History List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="px-3 py-2 space-y-1">
          {filteredChatHistory.length > 0 ? (
            filteredChatHistory.map((chat, index) => (
              <div
                key={index}
                className={clsx(
                  "group relative rounded-lg transition-all duration-200",
                  "hover:bg-[#2A2A2A]",
                  convId === String(chat.conversation_id)
                    ? "bg-[#2A2A2A] shadow-lg shadow-black/10"
                    : "bg-transparent"
                )}
              >
                {/* Hover Indicator */}
                <div
                  className={clsx(
                    "h-3/5 w-0 group-hover:w-[6px] transition-all",
                    "bg-primary-yellow rounded-full",
                    "invisible group-hover:visible",
                    "absolute left-0 top-0 translate-y-1/3",
                    convId === String(chat.conversation_id)
                      ? "visible w-[6px]"
                      : ""
                  )}
                />

                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                  onClick={() =>
                    handleSelectedConvo(String(chat.conversation_id))
                  }
                >
                  {/* Chat Icon Container */}
                  <div
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-red/10 to-primary-yellow/10 
                            flex items-center justify-center flex-shrink-0"
                  >
                    <MessageSquare size={14} className="text-gray-400" />
                  </div>

                  {/* Title Section */}
                  <div className="flex-1 min-w-0">
                    {editingId === String(chat.conversation_id) ? (
                      <div
                        className="flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <input
                          type="text"
                          value={editingTitle}
                          onChange={(e) => setEditingTitle(e.target.value)}
                          className="flex-1 bg-[#323232] rounded-md px-3 py-1.5 
                               text-gray-200 focus:outline-none focus:ring-1 
                               focus:ring-primary-red/30"
                          autoFocus
                        />
                        <div className="flex gap-1">
                          <button
                            onClick={() =>
                              handleRenameConversation(
                                String(chat.conversation_id)
                              )
                            }
                            className="p-1.5 hover:bg-green-500/20 rounded-md transition-colors"
                          >
                            <Check size={14} className="text-green-500" />
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="p-1.5 hover:bg-red-500/20 rounded-md transition-colors"
                          >
                            <X size={14} className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-gray-300 text-sm">
                          {chat?.title}
                        </span>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditing(
                                String(chat.conversation_id),
                                String(chat.title)
                              );
                            }}
                            className="p-1.5 hover:bg-white/5 rounded-md transition-colors"
                          >
                            <Pencil
                              size={14}
                              className="text-gray-400 hover:text-primary-yellow"
                            />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteConversation(
                                String(chat.conversation_id)
                              );
                            }}
                            className="p-1.5 hover:bg-white/5 rounded-md transition-colors"
                          >
                            <Trash
                              size={14}
                              className="text-gray-400 hover:text-primary-red"
                            />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 mt-20 px-4 text-center">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-red/10 to-primary-yellow/10 
                        flex items-center justify-center"
              >
                <MessageSquare size={24} className="text-gray-500" />
              </div>
              <p className="text-gray-500 text-sm">No conversations found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}