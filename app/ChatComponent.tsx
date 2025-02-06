"use client"; // ✅ 클라이언트 전용 강제 선언

import { useEffect } from "react";
import CoxwaveChatSdk from "coxwave-chat-sdk";

const ChatComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const coxwaveChatSdk = new CoxwaveChatSdk({
        clientUrl: process.env.NEXT_PUBLIC_COXWAVE_CLIENT_URL ?? "",
        apiKey: process.env.NEXT_PUBLIC_COXWAVE_API_KEY ?? "",
      });

      coxwaveChatSdk.renderChat();
      console.log("chatSdk initialized");
    }
  }, []);

  return <div>Chat Initialized</div>;
};

export default ChatComponent;
