import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "🔥 LUCKY BEAR (ЛАКИ БИР) 🐻 Официальный Сайт | Вход и Регистрация | БОНУС 500% + ФРИСПИНЫ 🔥",
  description: "Заходи на официальный сайт Lucky Bear (Лаки Бир) казино прямо сейчас! Рабочее зеркало, мобильная версия и телеграм бот. Забирай промокоды и купоны на выигрышные слоты. Выплаты за 15 минут!",
  keywords: "lucky bear казино, лаки бир казино, лаки бир бот, lucky bear телеграм бот, lucky bear бот, casino lucky bear, lucky bear промокод, купон lucky bear, lucky bear bot, lucky bear отзывы, лакибир казино, luckybear казино, luckybear бонусы, лакибир бонусы, лакибир официальный сайт, лакибир слоты, рабочее зеркало лакибир, лакибир тг, luckybear tg, luckybear casino, промокод luckybear, luckybear партнерская программа, luckybear bot, luckybear сайт, luckybear играть, лакибир играть, лакибир бот, luckybear бот, lucky bear casino, казино лаки бир, casino luckybear, казино лакибир, luckybear casino мобильная версия, luckybear casino официальный сайт, лаки бир casino, игровые автоматы luckybear casino, luckybear casino официальный, сайт luckybear casino, казино luckybear, luckybear casino на деньги, лаки беар казино, luckybear casino вход, luckybear casino играть, luckybear casino играть онлайн, лаки бир казино официальный сайт, lucky bear казино официальный сайт, рабочее зеркало lucky bear, лаки бир рабочее зеркало, lucky bear вход, лаки бир вход, lucky bear регистрация, лаки бир регистрация, лаки бир казино зеркало, lucky bear казино зеркало, казино lucky bear, gambling lucky bear, lucky bear казино вход, lucky bear casino вход, lakibir казино, лакибеар казино вход, лаки беар казино регистрация, laki bir casino, лайки бир казино, медведь казино lucky bear, казино с логотипом медведя, лаки бир официальный сайт регистрация, luckybear игровые автоматы, лакибир игровые автоматы, рабочее зеркало лаки бир, lucky bear официальный сайт, лаки бир официальный сайт, lucky bear слоты, лаки бир слоты, казино лакибир регистрация, казино luckybear регистрация, лакибир казино мобильная версия, lucky bear казино онлайн, лаки бир казино онлайн, luckybear вход, лакибир вход",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#1a1f29] text-white`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
