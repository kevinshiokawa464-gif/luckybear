import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import TelegramProvider from "@/components/providers/telegram-provider";

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
  keywords: "lucky bear казино, лаки бир казино, лаки бир бот, lucky bear телеграм бот, lucky bear бот, casino lucky bear, lucky bear промокод, купон lucky bear, lucky bear bot, lucky bear отзывы, лакибир казино, luckybear казино, luckybear бонусы, лакибир бонусы, лакибир официальный сайт, лакибир слоты, рабочее зеркало лакибир, лакибир тг, luckybear tg, luckybear casino, промокод luckybear, промокод Rish, luckybear партнерская программа, luckybear bot, luckybear сайт, luckybear играть, лакибир играть, лакибир бот, luckybear бот, lucky bear casino, казино лаки бир, casino luckybear, казино лакибир, luckybear casino мобильная версия, luckybear casino официальный сайт, лаки бир casino, игровые автоматы luckybear casino, luckybear casino официальный, сайт luckybear casino, казино luckybear, luckybear casino на деньги, лаки беар казино, luckybear casino вход, luckybear casino играть, luckybear casino играть онлайн, лаки бир казино официальный сайт, lucky bear казино официальный сайт, рабочее зеркало lucky bear, лаки бир рабочее зеркало, lucky bear вход, лаки бир вход, lucky bear регистрация, лаки бир регистрация, лаки бир казино зеркало, lucky bear казино зеркало, казино lucky bear, gambling lucky bear, lucky bear казино вход, lucky bear casino вход, lakibir казино, лакибеар казино вход, лаки беар казино регистрация, laki bir casino, лайки бир казино",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    yandex: "ed98c5d7dd331e79",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script 
          id="telegram-webapp"
          src="https://telegram.org/js/telegram-web-app.js" 
          strategy="beforeInteractive" 
        />
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
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#1a1f29] text-white`}>
        <TelegramProvider>
          {children}
        </TelegramProvider>
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/107096976" 
              style={{ position: "absolute", left: "-9999px" }} 
              alt="" 
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
