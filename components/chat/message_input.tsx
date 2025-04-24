"use client"

import type React from "react"
import { useState } from "react"
import { Paperclip, Send } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (message: string) => void
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSendMessage(message)
    setMessage("")
  }

  return (
    <div className="border-t p-3">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => document.getElementById('fileInput')?.click()}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5 text-gray-500" />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
            // Handle the file upload here
            console.log(e.target.files[0])
              }
            }}
          />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
        />

        <button
          type="submit"
          className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
