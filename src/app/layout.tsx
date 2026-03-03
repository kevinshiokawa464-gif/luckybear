import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lucky Bear Казино: СЕКРЕТНЫЙ ВХОД 🐻 500% БОНУС — ЖМИ СКОРЕЕ!",
  description: "Официальный сайт Lucky Bear Casino (Лаки Бир) – играйте в лучшие слоты на рабочем зеркале 2026 года. Мгновенные выплаты, бездепозитные бонусы и Telegram-бот для игроков.",
  keywords: "lucky bear, лаки бир, казино, официальный сайт, зеркало, слоты, игровые автоматы, вход, регистрация",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050b18] text-white`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
