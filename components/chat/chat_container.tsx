"use client"

import { useState } from "react"
import { MessageList } from "./message_list"
import { MessageInput } from "./message_input"

export type Message = {
    id: string
    content: string
    sender: "user" | "counselor"
    image?: string
    timestamp: Date
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "counselor",
      image:"https://as2.ftcdn.net/jpg/06/55/93/73/1000_F_655937342_RgEXCeEXTHuw3Wg0JGLbh0WAPoAcSidM.webp",
      timestamp: new Date(Date.now() - 60000 * 5),
    },
    {
      id: "2",
      content: "I have some questions about my course selection.",
      sender: "user",
      timestamp: new Date(Date.now() - 60000 * 3),
    },
    {
      id: "3",
      content: "Sure, I can help with that. What specific questions do you have?",
      sender: "counselor",
      image:"https://as2.ftcdn.net/jpg/06/55/93/73/1000_F_655937342_RgEXCeEXTHuw3Wg0JGLbh0WAPoAcSidM.webp",
      timestamp: new Date(Date.now() - 60000),
    },
  ])

  const sendMessage = (content: string) => {
    if (!content.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])

    // Simulate counselor response after a short delay
    setTimeout(() => {
      const counselorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message. I'll get back to you shortly.",
        sender: "counselor",
        image:"https://as2.ftcdn.net/jpg/06/55/93/73/1000_F_655937342_RgEXCeEXTHuw3Wg0JGLbh0WAPoAcSidM.webp",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, counselorResponse])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[600px] md:h-[700px] w-full max-w-3xl mx-auto rounded-lg shadow-md bg-white">
      <div className="p-4 bg-gray-50 rounded-t-lg">
        <h1 className="text-xl font-semibold text-gray-800">Chat With Counselor</h1>
      </div>

      <MessageList messages={messages}  />

      <MessageInput onSendMessage={sendMessage} />
      
    </div>
  )
}
