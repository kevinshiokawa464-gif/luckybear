import React from 'react';
import { TARGET_URL } from '@/app/constants';

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
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-gray-600 uppercase">
              <span>lucky bear казино</span> • <span>лаки бир казино</span> • <span>лаки бир бот</span>
            </div>
          </div>

          {/* Sections Column */}
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-bold text-white mb-1 uppercase tracking-wider">
              Разделы
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href={TARGET_URL} 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                VIP-клуб
              </a>
              <a 
                href={TARGET_URL} 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Бонусы
              </a>
              <a 
                href={TARGET_URL} 
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
                href={TARGET_URL} 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Политика конфиденциальности
              </a>
              <a 
                href={TARGET_URL} 
                className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300 w-fit"
              >
                Ответственная игра
              </a>
            </div>
          </div>
        </div>
        
        {/* SEO Text Row */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.03)]">
          <p className="text-[11px] text-[#475569] leading-relaxed text-center md:text-left">
            В нашем казино <strong className="text-gray-500">лаки бир официальный сайт</strong> представлены лучшие <strong className="text-gray-500">лакибир слоты</strong> и настольные игры. 
            Если вы ищете <strong className="text-gray-500">рабочее зеркало лакибир</strong> или актуальный <strong className="text-gray-500">лакибир тг</strong>, то наш портал предоставляет 
            круглосуточный доступ. Используйте <strong className="text-gray-500">luckybear tg</strong> и <strong className="text-gray-500">luckybear bot</strong> для получения эксклюзивных предложений. 
            Простая <strong className="text-gray-500">лаки бир регистрация</strong> открывает мир больших выигрышей.
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#475569]">
            © {new Date().getFullYear()} Lucky Bear Casino. Все права защищены.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-gray-700">18+ BE GAMBLE AWARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
