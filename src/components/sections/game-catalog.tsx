import React from 'react';
import { Dice5, MonitorPlay, Zap, Trophy, Play } from 'lucide-react';

const GameCatalog = () => {
  return (
    <section className="bg-[#1a1f29] py-[80px] font-sans">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 id="catalog-title" className="text-white text-[32px] font-bold leading-[1.3] mb-4">
            Игровой Каталог: Слоты и Провайдеры
          </h2>
          <p className="text-[#9da5b1] text-base max-w-[800px] mx-auto leading-[1.6]">
            Lucky Bear сотрудничает с ведущими разработчиками игрового софта, что гарантирует качество, честность и разнообразие игрового процесса.
          </p>
        </div>

        {/* Top Providers Section */}
        <div className="mb-16">
          <h3 className="text-white text-[24px] font-semibold leading-[1.4] mb-8 text-center uppercase tracking-wide">
            Топ Провайдеры в Lucky Bear
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <h3 className="text-white text-[20px] font-bold mb-3">Pragmatic Play</h3>
              <p className="text-[#9da5b1] text-[14px]">Популярные слоты с высокими множителями и бонусными раундами.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <h3 className="text-white text-[20px] font-bold mb-3">PG Soft</h3>
              <p className="text-[#9da5b1] text-[14px]">Инновационные автоматы с уникальной механикой и визуальным стилем.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <h3 className="text-white text-[20px] font-bold mb-3">Evolution Gaming</h3>
              <p className="text-[#9da5b1] text-[14px]">Лидер Live Casino — профессиональные дилеры и поток в HD-качестве.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <h3 className="text-white text-[20px] font-bold mb-3">Red Tiger</h3>
              <p className="text-[#9da5b1] text-[14px]">Слоты с прогрессивными джекпотами и эксклюзивными бонусами.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <h3 className="text-white text-[20px] font-bold mb-3">Hacksaw Gaming</h3>
              <p className="text-[#9da5b1] text-[14px]">Современные автоматы с нестандартными функциями и высоким RTP.</p>
            </div>
          </div>
        </div>

        {/* Game Categories Section */}
        <div className="mb-16">
          <h3 className="text-white text-[24px] font-semibold leading-[1.4] mb-8 text-center uppercase tracking-wide">
            Категории Игр
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <span className="text-[28px]">🎰</span>
              </div>
              <h3 className="text-white text-[20px] font-bold mb-3">Видеослоты</h3>
              <p className="text-[#9da5b1] text-[14px]">Классические и современные автоматы с разной волатильностью и бонусами.</p>
            </div>

            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <span className="text-[28px]">🎥</span>
              </div>
              <h3 className="text-white text-[20px] font-bold mb-3">Live Casino</h3>
              <p className="text-[#9da5b1] text-[14px]">Рулетка, блэкджек, баккара и покер с живыми дилерами.</p>
            </div>

            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <span className="text-[28px]">⚡</span>
              </div>
              <h3 className="text-white text-[20px] font-bold mb-3">Crash Games</h3>
              <p className="text-[#9da5b1] text-[14px]">Динамичные игры с мгновенными выплатами и управлением коэффициентом.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <span className="text-[28px]">🃏</span>
              </div>
              <h3 className="text-white text-[20px] font-bold mb-3">Настольные Игры</h3>
              <p className="text-[#9da5b1] text-[14px]">Карточные и dice-игры для любителей стратегии и расчёта.</p>
            </div>

            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <span className="text-[28px]">🎡</span>
              </div>
              <h3 className="text-white text-[20px] font-bold mb-3">Игровые Шоу</h3>
              <p className="text-[#9da5b1] text-[14px]">Интерактивные шоу с призами и живыми ведущими.</p>
            </div>
          </div>
        </div>

        {/* Action Button & Disclaimer */}
        <div className="text-center">
          <a
            href="/goto/"
            className="inline-flex items-center bg-[#2b87f9] text-white text-[18px] font-semibold px-12 py-4 rounded-[8px] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(43,135,249,0.3)] mb-6"
          >
            Играть Сейчас
          </a>
          <div className="text-[#9da5b1] text-[14px]">
            18+. Играйте ответственно. Lucky Bear — аффилиат, не оператор азартных игр.
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCatalog;