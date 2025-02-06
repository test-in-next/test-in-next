"use client"; // ✅ 클라이언트 전용 강제 선언

import { useEffect } from "react";
import CoxwaveChatSdk from "coxwave-chat-sdk";

const ChatComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const coxwaveChatSdk = new CoxwaveChatSdk({
        clientUrl: "https://dev-cami.coxwave.link",
        apiKey: "25bd8a7d-b854-4a8e-95db-08383733efd3",
      });

      coxwaveChatSdk.renderChat();
      console.log("chatSdk initialized");
    }
  }, []);

  return <div>Chat Initialized</div>;
};

export default ChatComponent;
