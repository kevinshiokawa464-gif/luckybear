"use client";

import { useEffect } from "react";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initTWA = () => {
      if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
        try {
          window.Telegram.WebApp.ready();
          window.Telegram.WebApp.expand();
        } catch (e) {
          console.error("Telegram WebApp init error:", e);
        }
      }
    };

    if (document.readyState === "complete") {
      initTWA();
    } else {
      window.addEventListener("load", initTWA);
      return () => window.removeEventListener("load", initTWA);
    }
  }, []);

  return <>{children}</>;
}
