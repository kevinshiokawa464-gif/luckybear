"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Как быстро в Lucky Bear пройти регистрацию?",
    answer: "Создание аккаунта в Лаки Бир занимает не более 10 секунд. Нажмите на кнопку «Регистрация» в верхней части сайта и выберите удобный метод: через почту или социальные сети. В лаки бир официальный сайт регистрация доступна для всех совершеннолетних пользователей.",
  },
  {
    question: "Где найти рабочее зеркало Лаки Бир прямо сейчас?",
    answer: "Если основной сайт недоступен, используйте рабочее зеркало лаки бир. Ссылки на нашей странице автоматически обновляются каждые 15 минут, обеспечивая бесперебойный доступ. Также рабочее зеркало лаки бир всегда можно найти в нашем Telegram-канале.",
  },
  {
    question: "Какие лимиты на вывод выигрышей в Lucky Bear?",
    answer: "Мы убрали практически все ограничения! В luckybear casino на деньги вы можете выводить выигрыши от 500 ₽. Максимальные лимиты зависят от вашего VIP-статуса, но для большинства игроков они составляют до 500 000 ₽ в сутки. Выплаты на криптокошельки приходят мгновенно.",
  },
  {
    question: "Где взять рабочий lucky bear промокод или купон?",
    answer: "Актуальный lucky bear промокод или купон lucky bear всегда можно найти в нашем официальном боте. Подпишитесь на лакибир тг, чтобы получать эксклюзивные предложения и бонусы, недоступные обычным игрокам. Также промокод Rish часто рассылается активным пользователям на почту.",
  },
  {
    question: "Есть ли у Лаки Бир официальное мобильное приложение?",
    answer: "Да, luckybear casino мобильная версия доступна для всех смартфонов. Вы можете играть через браузер или установить PWA-приложение для мгновенного доступа. Приложение luckybear casino официальный сайт позволяет играть без лагов даже при слабом интернет-соединении.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[100px] bg-[#1a1f29] border-t-2 border-[#343d4d] relative overflow-hidden">
      <div className="container mx-auto max-w-[1100px] px-6 relative">
        <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-4 animate-pulse">
           Центр помощи
        </div>
        <h2 className="text-[38px] md:text-[52px] font-black text-white mb-12 text-left uppercase italic tracking-tighter">
          ОТВЕТЫ НА <span className="text-blue-500 underline decoration-4 decoration-blue-500/50">ВОПРОСЫ</span> ИГРОКОВ
        </h2>
        
        <div className="flex flex-col gap-5">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border-2 rounded-[24px] transition-all duration-500 ${
                openIndex === index ? "border-blue-500 bg-[#242b38] scale-[1.01]" : "border-[#343d4d] bg-[#1e2532] hover:border-blue-500/30"
              } overflow-hidden shadow-2xl group`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between transition-colors"
              >
                <span className={`text-[19px] md:text-[22px] font-black transition-colors leading-tight uppercase tracking-tight ${
                  openIndex === index ? "text-blue-500" : "text-white group-hover:text-blue-400"
                }`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-xl transition-all duration-500 ${openIndex === index ? 'bg-blue-600 text-white rotate-180 shadow-lg' : 'bg-[#1a1f29] text-gray-400 group-hover:text-white'}`}>
                    <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-2 text-[18px] leading-relaxed text-[#cbd5e1] font-medium border-t border-white/5 mt-2 pt-6">
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
