import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero py-[22px] px-0 w-full max-w-[1200px] mx-auto">
      <div 
        className="heroCard bg-[rgba(255,255,255,0.04)] text-[#eaf2ff] rounded-[26px] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
        style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif' }}
      >
        {/* Banner Image Container */}
        <div className="heroMedia relative w-full aspect-[1066/599.625] min-h-[300px] md:min-h-[599px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5233587-0ef8-4611-85d9-30e01b0be1ea-luckybear-ltd/assets/images/hero-1.webp"
            alt="Lucky Bear"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay Buttons on Image */}
          <div className="heroMediaBtns absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex gap-3 z-[2] w-max" aria-label="Быстрые действия">
            <a 
              href="/reg.html" 
              className="heroBtn heroBtn--reg flex items-center justify-center h-[48.8px] px-[14px] bg-[rgba(255,45,45,0.22)] text-[#eaf2ff] text-base font-semibold rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
            >
              Играть на сайте
            </a>
            <a 
              href="/login.html" 
              className="heroBtn heroBtn--tg flex items-center justify-center h-[48.8px] px-[14px] bg-[rgba(42,171,255,0.2)] text-[#eaf2ff] text-base font-semibold rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
            >
              Telegram Бот
            </a>
          </div>
        </div>

        {/* Hero Content Area */}
        <div className="heroBody relative p-4 md:p-[16px] flex flex-col items-start text-left">
          {/* Kicker / Features Line */}
          <div className="kicker inline-flex items-center h-[34.1px] px-[10px] bg-[rgba(255,255,255,0.04)] text-[rgba(234,242,255,0.72)] text-[13px] rounded-full mb-2">
            🎁 Бонусы • ⚡ Моментельные выводы • 📱 Мобильная версия
          </div>

          {/* Main Headline */}
          <h1 className="h1 text-[28px] font-bold leading-[1.1] md:leading-[30.8px] my-[10px] md:mb-[8px] tracking-tight">
            Lucky Bear Казино: СЕКРЕТНЫЙ ВХОД 🐻 500% БОНУС — ЖМИ СКОРЕЕ!
          </h1>

          {/* Description Text */}
          <p className="lead text-base leading-[1.6] text-[rgba(234,242,255,0.72)] max-w-[631px] mb-4">
            Добро пожаловать в мир азарта с Lucky Bear Casino! Наш портал предлагает эксклюзивный доступ к лучшим игровым автоматам. Быстрая регистрация через Telegram, мгновенные выплаты и щедрые бонусы до 500% для новых игроков ждут вас. Играйте на LuckyBear и выигрывайте прямо сейчас на официальном зеркале Лаки Бир 2026 года.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap gap-2 md:mt-[12px]">
            <a 
              href="/reg.html" 
              className="btn primary js-cta flex items-center justify-center h-[48.8px] px-[14px] bg-[#3682ff] text-[#eaf2ff] text-base font-semibold rounded-full transition-all hover:brightness-110 active:scale-95 shadow-lg"
            >
              Играть онлайн
            </a>
            <a 
              href="/login.html" 
              className="btn js-cta flex items-center justify-center h-[48.8px] px-[14px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#eaf2ff] text-base font-semibold rounded-full transition-all hover:bg-[rgba(255,255,255,0.1)] active:scale-95"
            >
              Перейти в бота
            </a>
            <a 
              href="/reg.html" 
              className="btn flex items-center justify-center h-[48.8px] px-[14px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#eaf2ff] text-base font-semibold rounded-full transition-all hover:bg-[rgba(255,255,255,0.1)] active:scale-95"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;