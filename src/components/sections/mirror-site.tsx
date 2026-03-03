import React from 'react';
import { Check } from 'lucide-react';

/**
 * MirrorSiteSection - Clones the "Working Mirror" section highlighting stable access.
 * Focuses on pixel-perfect replication of the provided design instructions, HTML structure, and styles.
 */
export default function MirrorSiteSection() {
  const mirrorBenefits = [
    'Получить доступ при блокировке основного домена',
    'Сохранить все данные аккаунта и баланс',
    'Использовать актуальные промокоды',
    'Продолжить игру без потери прогресса',
  ];

  return (
    <section className="bg-[#1a1f29] py-[80px] px-6 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 md:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          {/* Section Heading */}
          <h2 
            id="mirror-title" 
            className="text-[32px] md:text-[40px] font-semibold text-white leading-[1.3] mb-6 font-display"
          >
            Рабочее Зеркало Lucky Bear — Стабильный Доступ
          </h2>

          {/* Intro Paragraph */}
          <p className="text-[#9da5b1] text-[16px] leading-[1.6] mb-8 max-w-[900px] mx-auto">
            Для обеспечения бесперебойной работы платформа использует систему зеркал — 
            альтернативных адресов с идентичным функционалом. Зеркало Lucky Bear полностью 
            дублирует основной сайт и позволяет:
          </p>

          {/* Benefits List */}
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-3 max-w-[600px] mx-auto text-left mb-8">
            {mirrorBenefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 bg-[#1a1f29] border border-[#343d4d] p-4 rounded-[12px] group hover:border-[#2b87f9]/40 transition-colors"
              >
                <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <Check className="text-[#2b87f9] w-4 h-4" />
                </div>
                <span className="text-[#9da5b1] text-[15px] font-medium group-hover:text-white transition-colors">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          {/* Support/Telegram Note */}
          <p className="text-[#9da5b1] text-[15px] italic mb-8">
            Актуальное зеркало всегда можно найти через службу поддержки или официальный 
            <span className="text-white font-medium ml-1">Telegram-канал казино</span>.
          </p>

          {/* Primary CTA Button */}
          <div className="mt-4">
            <a
              href="https://lbgame777.xyz/2xn84Y"
              className="inline-flex items-center justify-center bg-[#2b87f9] text-white text-[18px] font-bold py-4 px-12 rounded-[8px] hover:brightness-110 hover:shadow-[0_0_20px_rgba(43,135,249,0.3)] transition-all duration-300 uppercase tracking-wide"
            >
              Перейти на Зеркало
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}