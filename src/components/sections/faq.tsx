"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Как быстро пройти регистрацию в Lucky Bear?",
    answer: "Чтобы создать аккаунт, нажмите на кнопку регистрации в верхней части сайта и выберите удобный способ: через защищенные мессенджеры (Telegram/Google) или по e-mail. Весь процесс займет у вас не более 10 секунд, после чего вы сразу сможете приступить к игре.",
  },
  {
    question: "Что делать, если основной сайт Лаки Бир недоступен?",
    answer: "В таких случаях используйте наше актуальное рабочее зеркало. Ссылка на этой странице всегда автоматически обновляется и ведет на работающий адрес. Также вы можете найти список рабочих зеркал в нашем официальном Telegram-канале.",
  },
  {
    question: "Как быстро я получу свой выигрыш?",
    answer: "Мы обеспечиваем максимально быстрые выплаты для наших игроков. На электронные кошельки и криптовалютные счета средства поступают практически мгновенно. Вывод на банковские карты РФ обычно занимает от 15 минут до нескольких часов в зависимости от вашего банка.",
  },
  {
    question: "Какие бонусы доступны новым игрокам?",
    answer: "Для всех новых пользователей Lucky Bear действует щедрая приветственная программа: вы можете получить до 500% бонуса на свои первые пополнения счета. Также всем игрокам доступны еженедельный кешбэк и ежедневные вращения Колеса Удачи.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[80px] bg-[#1a1f29] border-t border-[#343d4d]">
      <div className="container mx-auto max-w-[1100px] px-6">
        <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-10 text-center">
          Часто Задаваемые Вопросы (FAQ)
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border rounded-[16px] transition-all duration-300 ${
                openIndex === index ? "border-[#2b87f9] bg-[#242b38]" : "border-[#343d4d] bg-[#1e2532]"
              } overflow-hidden shadow-lg`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between transition-colors hover:bg-white/5"
              >
                <span className={`text-[18px] font-bold transition-colors ${
                  openIndex === index ? "text-[#2b87f9]" : "text-white"
                }`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#2b87f9]" : "text-[#94a3b8]"
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-[17px] leading-relaxed text-[#cbd5e1]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;