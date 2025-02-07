"use client";

import { useEffect, useState } from "react";

const ChatComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let coxwaveChatSdkInstance: any;

    const loadChatSdk = async () => {
      try {
        const module = await import("coxwave-chat-sdk");
        const CoxwaveChatSdk = module.default ?? module; // default 없을 경우 대비

        coxwaveChatSdkInstance = new CoxwaveChatSdk({
          clientUrl: "https://dev-cami.coxwave.link",
          apiKey: "25bd8a7d-b854-4a8e-95db-08383733efd3",
        });

        await coxwaveChatSdkInstance.renderChat();
        console.log("chatSdk initialized");

        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to initialize chat SDK:", error);
      }
    };

    loadChatSdk();

    return () => {
      if (coxwaveChatSdkInstance) {
        coxwaveChatSdkInstance.destroy?.(); // SDK의 정리 함수가 존재하면 호출
      }
    };
  }, []);

  return <div>{isLoaded ? "Chat Initialized" : "Loading Chat..."}</div>;
};

export default ChatComponent;
