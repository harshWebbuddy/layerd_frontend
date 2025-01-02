import { ReactNode } from "react";

export interface Assistant {
    id: string;
    name: string;
    avatar: string;
    role: string;
    slug: string;
    welcome_message: string;
  }
  
  export interface Chat {
    conversation_id(conversation_id: any): void;
    title: ReactNode;
    chats: any;
    user_prompt: string;
    response: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Conversation {
    _id: string;
    assistant_id: string;
    chats: Chat[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  