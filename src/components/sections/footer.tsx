import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-full bg-[#050b18] border-t border-[#1d2939] py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-start">
          {/* Company Info Column */}
          <div className="flex flex-col gap-1">
            <b className="text-white text-lg font-bold leading-tight">
              Lucky Bear (Лаки Бир)
            </b>
            <div className="text-[#667085] text-[14px] leading-relaxed">
              Информационный сайт. 18+
            </div>
          </div>

          {/* Sections Column */}
          <div className="flex flex-col gap-2">
            <div className="text-[14px] text-white font-bold mb-1">
              Разделы
            </div>
            <div className="text-[14px]">
              <a 
                href="/reg.html" 
                className="text-[#98a2b3] hover:text-[#3682ff] transition-colors duration-200"
              >
                VIP-клуб
              </a>
            </div>
            <div className="text-[14px]">
              <a 
                href="/reg.html" 
                className="text-[#98a2b3] hover:text-[#3682ff] transition-colors duration-200"
              >
                Бонусы
              </a>
            </div>
            <div className="text-[14px]">
              <a 
                href="/reg.html" 
                className="text-[#98a2b3] hover:text-[#3682ff] transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Documents Column */}
          <div className="flex flex-col gap-2">
            <div className="text-[14px] text-white font-bold mb-1">
              Документы
            </div>
            <div className="text-[14px]">
              <a 
                href="/reg.html" 
                className="text-[#98a2b3] hover:text-[#3682ff] transition-colors duration-200 underline decoration-[#98a2b3]/30 underline-offset-4"
              >
                Политика
              </a>
            </div>
            <div className="text-[14px]">
              <a 
                href="/reg.html" 
                className="text-[#98a2b3] hover:text-[#3682ff] transition-colors duration-200 underline decoration-[#98a2b3]/30 underline-offset-4"
              >
                Ответственная игра
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;