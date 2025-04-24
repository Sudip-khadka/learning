import Image from "next/image";
import '@/src/index.css'
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col h-screen w-screen flex-wrap items-center justify-center gap-1">
       <Link href="/chat" className="p-2 rounded-lg bg-primary-500 hover:underline"><h1 className="text-3xl relative">Chat</h1></Link>
      <Link href="/gsap" className="p-2 rounded-lg bg-primary-500 hover:underline"><h1 className="text-3xl">Gsap Animation</h1></Link>
      <Link href="/card" className="p-2 rounded-lg bg-primary-500 hover:underline"><h1 className="text-3xl">Card</h1></Link>
      </div>
  );
}
