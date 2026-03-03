import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="topbar sticky top-0 z-50 w-full bg-[#0b1220]/65 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-0 max-w-[1100px] flex items-center justify-between h-[64.6875px]">
        {/* Logo Section */}
        <a href="/" className="brand flex items-center gap-2 text-white font-bold text-lg decoration-none">
          <span className="mark grid place-items-center w-[38px] h-[38px] bg-white/5 rounded-[12px] shadow-[0_18px_60px_0_rgba(0,0,0,0.45)]">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5233587-0ef8-4611-85d9-30e01b0be1ea-luckybear-ltd/assets/icons/logo-1.png" 
              alt="Lucky Bear" 
              width={26} 
              height={26}
              className="block object-contain"
            />
          </span>
          <span className="flex items-center">
            Lucky <span className="text-[#2aabff] ml-1">Bear</span>
          </span>
        </a>

        {/* Mobile Registration Button (Visible only on mobile/tablet) */}
        <a 
          href="/reg.html" 
          className="lg:hidden bg-white/5 hover:bg-white/10 text-[#eaf2ff] text-[14px] px-[14px] py-[8px] rounded-full transition-colors border border-white/10"
        >
          Регистрация
        </a>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:flex items-center gap-1">
          <a 
            href="/reg.html" 
            className="text-[#eaf2ff] text-[14px] px-[10px] py-[8px] rounded-[12px] hover:bg-white/5 transition-colors"
          >
            Бонусы
          </a>
          <a 
            href="/reg.html" 
            className="text-[#eaf2ff] text-[14px] px-[10px] py-[8px] rounded-[12px] hover:bg-white/5 transition-colors"
          >
            VIP
          </a>
          <a 
            href="/reg.html" 
            className="text-[#eaf2ff] text-[14px] px-[10px] py-[8px] rounded-[12px] hover:bg-white/5 transition-colors"
          >
            FAQ
          </a>
          <a 
            href="/reg.html" 
            className="btn js-cta text-[#eaf2ff] text-[14px] px-[10px] py-[8px] bg-white/5 rounded-[12px] hover:bg-white/10 transition-colors ml-2"
            data-goal="click_login"
          >
            Вход
          </a>
          <a 
            href="/login.html" 
            className="btn primary js-cta text-[#eaf2ff] text-[14px] px-[10px] py-[8px] hover:bg-white/5 rounded-[12px] transition-colors border border-white/10"
            data-goal="click_register"
          >
            Бот Телеграм
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;