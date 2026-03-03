import React from 'react';

/**
 * MobileInfo component
 */
export default function MobileInfo() {
  return (
    <section className="py-[32px] md:py-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-0 text-center md:text-left">
        <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.3] text-white mb-[20px]">
          Lucky Bear Mobile: Играйте где угодно
        </h2>

        {/* 2-column grid for mobile features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[24px]">
          {/* Adaptive Web Version Card */}
          <div className="bg-[#0a1428]/80 backdrop-blur-[8px] border border-[#1d2939] rounded-[12px] p-[24px] hover:-translate-y-0.5 transition-transform duration-200 text-left">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="text-[20px]">📱</span>
              <h3 className="text-[18px] font-semibold leading-[1.4] text-white">
                Полная адаптация
              </h3>
            </div>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3]">
              Наш сайт идеально работает на любом смартфоне. Не нужно ничего скачивать — просто откройте Lucky Bear в браузере и наслаждайтесь плавной анимацией и быстрой загрузкой слотов.
            </p>
          </div>

          {/* Quick Launch Icon Card */}
          <div className="bg-[#0a1428]/80 backdrop-blur-[8px] border border-[#1d2939] rounded-[12px] p-[24px] hover:-translate-y-0.5 transition-transform duration-200 text-left">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="text-[20px]">⚡</span>
              <h3 className="text-[18px] font-semibold leading-[1.4] text-white">
                Быстрый доступ
              </h3>
            </div>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3]">
              Добавьте иконку Lucky Bear на главный экран вашего телефона. Это обеспечит мгновенный вход в игру в одно касание, как если бы у вас было установлено нативное приложение.
            </p>
          </div>
        </div>

        {/* "More info" Call to action button */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/reg.html"
            className="flex items-center justify-center bg-[#1d2939] text-white font-semibold px-[20px] py-[12px] rounded-[25px] hover:bg-[#25354a] transition-colors text-[16px]"
          >
            Играть с телефона
          </a>
        </div>
      </div>
    </section>
  );
}
