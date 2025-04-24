import type { Message } from "./chat_container"
import { formatTime } from "@/lib/utils"

interface IncomingMessageProps {
  message: Message;
  showTimeStamp?:boolean
}

export function IncomingMessage({ message ,showTimeStamp=true }: IncomingMessageProps) {
  return (
    <div className="flex items-end max-w-[75%]">
      
      <div className="flex flex-col">
        <div className="flex gap-2 items-end">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">{message.image?<img src={message.image} className="h-full w-full rounded-full" alt={message.sender}/>:message.sender[0]||"C"}</div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-800 font-[primary text-base font-normal leading-6">{message.content}</p>
        </div>
        </div>
        {showTimeStamp&&<span className="text-xs text-gray-500 mt-1 ml-10">{formatTime(message.timestamp)}</span>}
      </div>
    </div>
  )
}
