"use client";

import { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    import("coxwave-chat-sdk").then((CoxwaveChatSdk) => {
      const coxwaveChatSdk = new CoxwaveChatSdk.default({
        clientUrl: process.env.NEXT_PUBLIC_COXWAVE_CLIENT_URL ?? "",
        apiKey: process.env.NEXT_PUBLIC_COXWAVE_API_KEY ?? "",
      });

      coxwaveChatSdk.renderChat();
      console.log("chatSdk initialized");
    });
  }, []);

  return <div>Chat Initialized</div>;
};

export default ChatComponent;
