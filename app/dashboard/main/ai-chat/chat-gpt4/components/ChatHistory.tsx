import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import { Chat } from "@/types/aiassistant";
import { IoMdCloseCircle, IoMdCreate } from "react-icons/io";
import { Plus, Check, X } from "lucide-react";
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
      const response = await axios.get("/ai/chat/openai", {
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
      const response = await axios.get(`/ai/chat/openai/${convoId}`, {
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
        isOpen ? "opacity-100" : "opacity-0",
        "transition-all max-h-[88vh] duration-300 rounded-2xl z-50",
        {
          "absolute top-30 lg:left-0 rounded-2xl xl:left-0 sm:left-10 md:left-10 h-auto w-[400px] sm:w-[400px] md:w-[400px]":
            isOpen,
          "absolute w-0 overflow-hidden": !isOpen,
        },
        {
          "sm:w-[400px] rounded-2xl sm:opacity-100 md:w-[400px] md:opacity-100":
            isOpen,
          "lg:w-[400px] xl:w-[400px] lg:opacity-100 xl:opacity-100 lg:relative xl:relative":
            isOpen,
        }
      )}
    >
      <div className="px-6 py-4 max-h-[88vh] h-full overflow-y-auto rounded-2xl bg-[url('/navbar.svg')] bg-center bg-cover bg-no-repeat rounded-b-xl">
        <div className="flex sticky top-0 z-20 items-center rounded-2xl py-4 space-x-4 rounded-b-xl">
          <input
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Conversations"
            className="h-14 bg-[#F5F5F5] rounded-lg w-[80%] p-5 text-gray-800 placeholder-gray-500 focus:outline-none transition-all"
          />
          <button
            className="text-white bg-primary-green rounded-full h-12 w-12 grid place-content-center shadow-lg hover:scale-105 transform transition-all duration-300"
            onClick={handleStartNewChat}
          >
            <Plus size={22} />
          </button>
        </div>
        {filteredChatHistory.length > 0 ? (
          filteredChatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex gap-4 w-full px-4 mb-1.5 hover:bg-gray-200/40 cursor-pointer group rounded-full transition-all duration-300 overflow-hidden ${
                convId === String(chat.conversation_id) ? "bg-gray-200" : ""
              }`}
            >
              <div
                className="h-14 flex gap-4 w-full items-center relative overflow-hidden"
                onClick={() =>
                  handleSelectedConvo(String(chat.conversation_id))
                }
              >
                <FaMessage className="group-hover:text-primary-green w-full max-w-fit text-gray-600" />
                {editingId === String(chat.conversation_id) ? (
                  <div className="flex-1 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="flex-1 bg-white rounded px-2 py-1 text-gray-800 focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => handleRenameConversation(String(chat.conversation_id))}
                      className="text-green-600 hover:text-green-700"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-gray-300">
                    {chat?.title}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {editingId !== String(chat.conversation_id) && (
                  <>
                    <IoMdCreate
                      className="text-gray-600 cursor-pointer hover:text-blue-600"
                      size={20}
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditing(String(chat.conversation_id), String(chat.title));
                      }}
                    />
                    <IoMdCloseCircle
                      className="text-gray-600 cursor-pointer hover:text-red-600"
                      size={20}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteConversation(String(chat.conversation_id));
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="place-items-center grid mt-60">
            <p className="text-gray-400">No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
}