"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Как создать аккаунт в Lucky Bear Casino?",
    answer: "Кликните по кнопке «Регистрация» в верхней панели или на главной странице Лакибир казино. Заполните короткую анкету — укажите имя пользователя, пароль и электронную почту. Регистрация занимает не больше минуты. Сразу после подтверждения вы можете внести депозит и активировать приветственное поощрение.",
  },
  {
    question: "Почему не открывается сайт и как это исправить?",
    answer: "Попробуйте обновить страницу или переключиться на альтернативный домен (lucky bear зеркало). Действующее зеркало сайта Лаки Бир казино публикуется в специальном разделе «Рабочие адреса». Если проблема сохраняется, обратитесь в техподдержку — наши специалисты оперативно помогут восстановить доступ.",
  },
  {
    question: "Какая процедура вывода выигрышей?",
    answer: "Зайдите в раздел «Выплаты», выберите подходящий платёжный метод. Минимальная сумма транзакции зависит от конкретной системы. Запрос проходит проверку службой безопасности — обычно от 5 минут до нескольких часов. Средства поступают без удержания комиссии.",
  },
  {
    question: "Обязательно ли устанавливать мобильное приложение?",
    answer: "Скачивать ничего не нужно — адаптированная версия казино Lucky Bear отлично работает через любой браузер на смартфоне. Вы можете сохранить ярлык на рабочем столе для быстрого запуска. Это экономит память устройства и не требует установки дополнительного ПО.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[80px] bg-[#050b18]">
      <div className="container mx-auto max-w-[1100px] px-4">
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-8">
          Часто задаваемые вопросы о Lucky Bear Casino
        </h2>
        
        <div className="flex flex-col gap-2">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border border-[#1e293b] rounded-[12px] bg-transparent overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between transition-colors hover:bg-white/5 active:bg-white/[0.08]"
              >
                <span className="text-[16px] font-medium text-white/90">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#94a3b8] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-[#94a3b8]">
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