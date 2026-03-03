import React from 'react';

/**
 * BonusProgram Component
 * 
 * Features a single prominent card with start bonuses, weekly cashback, and tournaments.
 */
export default function BonusProgram() {
  return (
    <section className="py-7.5 md:py-[60px] px-0">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-[16px]">
        <h2 className="text-[28px] font-bold leading-[1.3] text-[#ffffff] mb-[20px] md:mb-[28px] text-center md:text-left">
          Эксклюзивная Бонусная Система Lucky Bear
        </h2>

        {/* The prominent card with glassmorphism effect */}
        <div 
          className="bg-[rgba(255,255,255,0.04)] ring-1 ring-[#1d2939] rounded-[26px] p-[24px] shadow-[0_18px_60px_0_rgba(0,0,0,0.45)] backdrop-blur-[8px]"
        >
          <div className="space-y-[20px] mb-[24px]">
            {/* Start Bonus */}
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[rgba(234,242,255,0.72)]">
              <strong className="text-[#ffffff] font-semibold">Мега-старт для новичков</strong> — получите до 500% бонуса на первые пополнения и пакет фриспинов в самых горячих слотах. Активация происходит мгновенно в личном кабинете.
            </p>

            {/* Weekly Cashback */}
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[rgba(234,242,255,0.72)]">
              <strong className="text-[#ffffff] font-semibold">Честный кэшбэк</strong> — мы возвращаем до 15% от суммы ставок каждую неделю. Чем выше ваш VIP-статус, тем больше процент возврата!
            </p>

            {/* Tournament Events */}
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[rgba(234,242,255,0.72)]">
              <strong className="text-[#ffffff] font-semibold">Битвы за Джекпот</strong> — участвуйте в ежедневных турнирах с призовым фондом более 1,000,000 рублей. Просто играйте в любимые автоматы и поднимайтесь в таблице лидеров.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-[4px]">
            <a 
              href="/reg.html" 
              className="inline-flex items-center justify-center px-[22px] py-[11px] h-[48.8px] bg-[#3682ff] hover:bg-[#2563eb] text-[#ffffff] text-[16px] font-semibold rounded-[999px] transition-transform duration-200 active:scale-[0.98] btn-pill"
            >
              Забрать бонусы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
