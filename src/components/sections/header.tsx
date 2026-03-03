import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-[#1a1f29] border-b border-[#343d4d]">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 h-[80px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5233587-0ef8-4611-85d9-30e01b0be1ea-luckybear-zerkalo-ru/assets/images/_D0_BB_D0_BE_D0_B3_D0_BE_D1_82_D0_B8_D0_BF-_D0_BB_-1.png"
              alt="Lucky Bear Logo"
              width={160}
              height={30}
              priority
              className="h-auto w-auto max-h-[40px] object-contain"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-[16px] font-medium text-white hover:text-[#2b87f9] transition-colors duration-300"
          >
            Lucky Bear Казино
          </Link>
          <Link 
            href="/registration-lucky-bear/" 
            className="text-[16px] font-medium text-white hover:text-[#2b87f9] transition-colors duration-300"
          >
            Регистрация
          </Link>
          <Link 
            href="/bonuse/" 
            className="text-[16px] font-medium text-white hover:text-[#2b87f9] transition-colors duration-300"
          >
            Бонусы
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link 
            href="/goto/"
            className="hidden sm:flex h-[44px] px-6 items-center justify-center rounded-lg bg-white text-[#1a1f29] font-bold text-[16px] hover:bg-opacity-90 transition-all duration-300"
          >
            Вход
          </Link>
          <Link 
            href="/goto/"
            className="flex h-[44px] px-6 items-center justify-center rounded-lg bg-[#2b87f9] text-white font-bold text-[16px] hover:filter hover:brightness-110 shadow-[0_0_20px_rgba(43,135,249,0.3)] transition-all duration-300"
          >
            Регистрация
          </Link>
          
          {/* Mobile Menu Trigger (Visual only as per instructions) */}
          <button className="lg:hidden p-2 text-white">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;