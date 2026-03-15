import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luckybearcasino.bet"),
  alternates: {
    canonical: "/",
  },
  title: "🔥 LUCKY BEAR (ЛАКИ БИР) Официальный Сайт | Вход и Регистрация | ЗАБЕРИ СВОЙ БОНУС 🔥",
  description: "Заходи на официальный сайт Lucky Bear (Лаки Бир) казино прямо сейчас! Рабочее зеркало, мобильная версия и телеграм бот. Забирай промокоды и купоны на выигрышные слоты. Выплаты за 15 минут!",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=107186646", "ym");

            ym(107186646, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#1a1f29] text-white`}>
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, background: "red", color: "white", padding: "10px" }}>
          TEST RENDER - SITE IS ALIVE
        </div>
        {children}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/107186646" 
              style={{ position: "absolute", left: "-9999px" }} 
              alt="" 
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
