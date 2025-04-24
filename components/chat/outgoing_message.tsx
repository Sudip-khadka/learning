import type { Message } from "./chat_container"
import { formatTime } from "@/lib/utils"

interface OutgoingMessageProps {
  message: Message;
  showTimeStamp?:boolean
}

export function OutgoingMessage({ message,showTimeStamp=true }: OutgoingMessageProps) {
  return (
    <div className="flex flex-col items-end ml-auto max-w-[75%]">
      <div className="bg-primary-500 p-3 rounded-lg ">
        <p className="text-primary-50 font-[primary text-base font-normal leading-6 ">{message.content}</p>
      </div>
     {showTimeStamp&& <span className="text-xs text-gray-500 mt-1">{formatTime(message.timestamp)}</span>}
    </div>
  )
}