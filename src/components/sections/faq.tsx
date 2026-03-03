"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Как зарегистрироваться в Lucky Bear Казино?",
    answer:
      "Процесс максимально прост: нажмите «Регистрация», выберите удобный способ и следуйте инструкциям. Вы можете войти через Telegram или заполнить стандартную форму. Сразу после этого вам будут доступны все бонусы LuckyBear.",
  },
  {
    question: "Где найти актуальное зеркало Лаки Бир?",
    answer:
      "Мы регулярно обновляем ссылки на рабочие зеркала. Сохраните эту страницу в закладки или подпишитесь на наш Telegram-бот, чтобы всегда иметь доступ к сайту в обход любых блокировок.",
  },
  {
    question: "Как быстро выводятся деньги?",
    answer:
      "На Lucky Bear мы ценим ваше время. Большинство выплат обрабатываются автоматически и поступают на счет в течение 5-30 минут. При первом выводе может потребоваться краткая верификация.",
  },
  {
    question: "Нужно ли скачивать приложение?",
    answer:
      "Нет, Lucky Bear Casino отлично работает в любом мобильном браузере. Сайт полностью адаптивен, и вы получаете полный функционал десктопной версии без необходимости загружать стороннее ПО.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[60px] px-4 md:px-0 max-w-[1100px] mx-auto">
      <h2 className="text-[28px] font-bold leading-[1.3] text-[#ffffff] mb-6 text-center md:text-left">
        Вопросы и ответы: Гид по Lucky Bear
      </h2>
      <div className="flex flex-col gap-2">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="overflow-hidden rounded-[12px] border border-[#1d2939] transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left bg-[#ffffff0a] hover:bg-[#ffffff0f] px-5 py-[14px] flex items-center justify-between transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] md:text-[16px] font-medium text-[#eae2ff]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#98a2b3] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 text-[15px] leading-[1.6] text-[#98a2b3] border-t border-[#1d2939] bg-[#0a1428]">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
