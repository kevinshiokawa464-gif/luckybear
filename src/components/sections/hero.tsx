import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container py-[22px] px-4 md:px-0">
      <div className="bg-[#ffffff0a] rounded-[26px] overflow-hidden shadow-[0_18px_60px_0_rgba(0,0,0,0.45)]">
        {/* Banner with Overlays */}
        <div className="relative w-full aspect-[1066/600]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5233587-0ef8-4611-85d9-30e01b0be1ea-luckybear-ltd/assets/images/hero-1.webp"
            alt="Lucky Bear Promotional Banner"
            fill
            priority
            className="object-cover"
          />
          {/* Top Overlays - Quick Actions */}
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 w-[max-content]"
            aria-label="Быстрые действия"
          >
            <a 
              href="/reg.html" 
              className="flex items-center justify-center h-[48.8px] px-[14px] py-[11px] min-w-[178px] bg-[rgba(255,45,45,0.22)] hover:bg-[rgba(255,45,45,0.35)] text-[#eaf2ff] text-[16px] font-semibold rounded-full shadow-[0_14px_40px_0_rgba(0,0,0,0.35)] transition-all duration-300 backdrop-blur-sm"
            >
              Играть на сайте
            </a>
            <a 
              href="/login.html" 
              className="flex items-center justify-center h-[48.8px] px-[14px] py-[11px] min-w-[150.8px] bg-[rgba(42,171,255,0.2)] hover:bg-[rgba(42,171,255,0.35)] text-[#eaf2ff] text-[16px] font-semibold rounded-full shadow-[0_14px_40px_0_rgba(0,0,0,0.35)] transition-all duration-300 backdrop-blur-sm"
            >
              Telegram Бот
            </a>
          </div>
        </div>

        {/* Hero Content Area */}
        <div className="p-4 md:p-8 space-y-4">
          {/* Feature Kicker */}
          <div className="inline-flex items-center bg-[rgba(255,255,255,0.04)] px-3 py-1.5 rounded-full">
            <span className="text-[13px] text-[#eaf2ffb8] font-medium leading-[1.2]">
              🎁 Бонусы • ⚡ Моментальные выводы • 📱 Мобильная версия
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[28px] md:text-[36px] font-[800] text-[#eaf2ff] leading-[1.1] tracking-tight">
            Lucky Bear: Официальное Зеркало и Вход в Лаки Бир Казино 🐻
          </h1>

          {/* Descriptive Text */}
          <p className="max-w-[800px] text-[16px] text-[#eaf2ffb8] leading-[1.6]">
            Добро пожаловать на проверенный ресурс Lucky Bear Casino! Мы создали идеальную платформу для тех, кто ценит азарт и надежность. В ЛакиБир вас ждут эксклюзивные слоты, мгновенная регистрация через Telegram и честные выплаты. Используйте наше рабочее зеркало для бесперебойного доступа к любимым играм и забирайте свой приветственный бонус прямо сейчас!
          </p>

          {/* Bottom CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a 
              href="/reg.html" 
              className="flex items-center justify-center h-[48.8px] px-[24px] py-[11px] min-w-[165.8px] bg-[#1d4ed8] hover:bg-[#3b82f6] text-[#ffffff] text-[16px] font-bold rounded-full transition-all duration-300"
            >
              Играть онлайн
            </a>
            <a 
              href="/login.html" 
              className="flex items-center justify-center h-[48.8px] px-[24px] py-[11px] min-w-[171.8px] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#eaf2ff] text-[16px] font-bold rounded-full transition-all duration-300 border border-[rgba(255,255,255,0.1)]"
            >
              Перейти в бота
            </a>
            <a 
              href="/reg.html" 
              className="flex items-center justify-center h-[48.8px] px-[24px] py-[11px] min-w-[65px] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#eaf2ff] text-[16px] font-bold rounded-full transition-all duration-300 border border-[rgba(255,255,255,0.1)]"
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