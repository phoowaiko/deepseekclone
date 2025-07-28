"use client";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import { assets } from "../assets/assets";
import Image from "next/image";
import PromptBox from "../components/PromptBox";
import Message from "../components/Message";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* slide bar */}
        <Sidebar expand={expand} setExpand={setExpand} />

        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              src={assets.menu_icon}
              className="rotate-180"
              alt="menuicon"
            />
            <Image
              src={assets.chat_icon}
              className="opacity-70"
              alt="chaticon"
            />
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="logo" className="h-16" />
                <p className="text-2xl font-medium ">Hi,I&apos; m DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How can I help you today?</p>
            </>
          ) : (
            <div>
              <Message role="user" content="what is next js" />
            </div>
          )}

          {/* prompt bar */}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />

          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated,for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
