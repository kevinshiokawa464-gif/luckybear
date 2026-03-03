import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header 
      className="topbar sticky top-0 left-0 right-0 w-full z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(11, 18, 32, 0.65)',
        height: '64.6875px',
        display: 'block',
        position: 'sticky',
        zIndex: 50,
      }}
    >
      <div 
        className="container flex items-center justify-between h-full mx-auto"
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '12px 16px',
        }}
      >
        {/* Logo Section */}
        <a 
          href="/" 
          className="brand flex items-center gap-2"
          style={{
            fontSize: '16px',
            color: 'rgb(234, 242, 255)',
            fontWeight: 800,
            textDecoration: 'none',
          }}
        >
          <span 
            className="mark grid place-items-center"
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              boxShadow: 'rgba(0, 0, 0, 0.45) 0px 18px 60px 0px',
            }}
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5233587-0ef8-4611-85d9-30e01b0be1ea-luckybear-ltd/assets/icons/logo-1.png" 
              alt="Lucky Bear" 
              style={{
                width: '26px',
                height: '26px',
                display: 'block'
              }}
            />
          </span>
          <div className="flex items-center gap-1">
            <span style={{ fontWeight: 800 }}>Lucky</span>
            <span style={{ color: 'rgb(42, 171, 255)', fontWeight: 800 }}>Bear</span>
          </div>
        </a>

        {/* Mobile Registration Button (Hidden on Desktop via CSS but structured in HTML) */}
        <a 
          href="/reg.html" 
          className="btn primary md:hidden"
          style={{
            display: 'none', // Following computed styles for desktop view rendering
            backgroundColor: 'var(--primary)',
            color: 'rgb(234, 242, 255)',
            fontSize: '14px',
            padding: '8px 14px',
            borderRadius: '999px',
            fontWeight: 600,
          }}
        >
          Регистрация
        </a>

        {/* Desktop Navigation */}
        <nav 
          className="nav flex items-center"
          style={{
            height: '39.6875px',
          }}
        >
          <div className="hidden md:flex items-center">
            <a 
              href="/reg.html" 
              className="px-[10px] py-[8px] text-[14px] font-medium transition-colors hover:bg-white/5 rounded-[12px]"
              style={{ color: 'rgb(234, 242, 255)' }}
            >
              Бонусы
            </a>
            <a 
              href="/reg.html" 
              className="px-[10px] py-[8px] text-[14px] font-medium transition-colors hover:bg-white/5 rounded-[12px]"
              style={{ color: 'rgb(234, 242, 255)' }}
            >
              VIP
            </a>
            <a 
              href="/reg.html" 
              className="px-[10px] py-[8px] text-[14px] font-medium transition-colors hover:bg-white/5 rounded-[12px]"
              style={{ color: 'rgb(234, 242, 255)' }}
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2 ml-2">
            <a 
              href="/reg.html" 
              className="btn flex items-center justify-center transition-transform hover:-translate-y-[2px]"
              style={{
                width: '62.6406px',
                height: '39.6875px',
                padding: '8px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'rgb(234, 242, 255)',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              Вход
            </a>
            <a 
              href="/login.html" 
              className="btn flex items-center justify-center transition-transform hover:-translate-y-[2px]"
              style={{
                width: '132.312px',
                height: '39.6875px',
                padding: '8px 10px',
                backgroundColor: 'rgb(54, 130, 255)',
                color: 'rgb(234, 242, 255)',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              Бот Телеграм
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;