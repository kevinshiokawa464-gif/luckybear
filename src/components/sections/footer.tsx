import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050b18] border-t border-[rgba(255,255,255,0.08)] py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
          {/* Brand & Info */}
          <div className="flex flex-col gap-2">
            <b className="text-white text-[16px] font-bold leading-relaxed">
              Lucky Bear (Лаки Бир)
            </b>
            <div className="text-[13px] text-[#94a3b8] leading-relaxed">
              Информационный сайт. 18+
            </div>
          </div>

          {/* Sections Column */}
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-bold text-white mb-1 uppercase tracking-wider">
              Разделы
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href="/reg.html" 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                VIP-клуб
              </a>
              <a 
                href="/reg.html" 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Бонусы
              </a>
              <a 
                href="/reg.html" 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Documents Column */}
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-bold text-white mb-1 uppercase tracking-wider">
              Документы
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href="/reg.html" 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Политика
              </a>
              <a 
                href="/reg.html" 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Ответственная игра
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Spacer/Bottom Divider for visual consistency */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.03)] text-center md:text-left">
          <p className="text-[12px] text-[#475569]">
            © {new Date().getFullYear()} Lucky Bear Casino. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;