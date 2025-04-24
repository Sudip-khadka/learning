"use client"

import { useEffect, useRef } from "react"
import { IncomingMessage } from "./incoming_message"
import { OutgoingMessage } from "./outgoing_message"
import type { Message } from "./chat_container"

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            {message.sender === "counselor" ? (
              <IncomingMessage message={message} />
            ) : (
              <OutgoingMessage message={message} />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
