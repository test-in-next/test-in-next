"use client";

import { useEffect, useState } from "react";

const ChatComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("ChatComponent mounted");
    const loadChatSdk = async () => {
      try {
        const chatSdkModule = await import("coxwave-chat-sdk");
        const CoxwaveChatSdk = chatSdkModule.default ?? chatSdkModule; // default 없을 경우 대비

        const coxwaveChatSdkInstance = new CoxwaveChatSdk({
          clientUrl: "https://dev-cami.coxwave.link",
          apiKey: "25bd8a7d-b854-4a8e-95db-08383733efd3",
        });

        coxwaveChatSdkInstance.registerShortcutKey({
          openChat: { key: "o", modifier: "ctrlKey" },
          sendChat: { key: "Enter", modifier: "ctrlKey" },
        });

        await coxwaveChatSdkInstance.renderChat();

        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to initialize chat SDK:", error);
      }
    };

    loadChatSdk();
  }, []);

  return <div>{isLoaded ? "Chat Initialized" : "Loading Chat..."}</div>;
};

export default ChatComponent;
