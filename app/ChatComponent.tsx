"use client";

import { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("coxwave-chat-sdk").then((module) => {
        const CoxwaveChatSdk = module.default;

        const coxwaveChatSdk = new CoxwaveChatSdk({
          clientUrl: process.env.NEXT_PUBLIC_COXWAVE_CLIENT_URL ?? "",
          apiKey: process.env.NEXT_PUBLIC_COXWAVE_API_KEY ?? "",
        });

        coxwaveChatSdk.renderChat();
        console.log("chatSdk initialized");
      });
    }
  }, []);

  return <div>Chat Initialized</div>;
};

export default ChatComponent;
