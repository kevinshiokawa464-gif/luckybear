import React from 'react';
import { TARGET_URL } from '@/app/constants';

const GameCatalog = () => {
  return (
    <section className="bg-[#1a1f29] py-[80px] font-sans">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 id="catalog-title" className="text-white text-[32px] md:text-[42px] font-bold leading-[1.3] mb-4">
            Лучшие Игровые Автоматы в Лаки Бир: Выбирай Свой Слот
          </h2>
          <p className="text-[#e2e8f0] text-[18px] max-w-[800px] mx-auto leading-[1.6]">
            В нашем каталоге представлено более 2500 лицензионных игр от ведущих мировых провайдеров. Мы гарантируем честность результатов и высокую отдачу (RTP) в каждом слоте.
          </p>
        </div>

        {/* Top Providers Section */}
        <div className="mb-16">
          <h3 className="text-white text-[24px] font-bold leading-[1.4] mb-8 text-center uppercase tracking-widest text-[#2b87f9]">
            Топ Провайдеры в Lucky Bear
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2">
              <h3 className="text-white text-[22px] font-bold mb-3">Pragmatic Play</h3>
              <p className="text-[#cbd5e1] text-[15px]">Популярные слоты с огромными иксами и захватывающими бонусными раундами.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2">
              <h3 className="text-white text-[22px] font-bold mb-3">PG Soft</h3>
              <p className="text-[#cbd5e1] text-[15px]">Мобильные хиты с инновационной механикой и ярким визуальным исполнением.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2">
              <h3 className="text-white text-[22px] font-bold mb-3">Evolution Gaming</h3>
              <p className="text-[#cbd5e1] text-[15px]">Безусловный лидер Live Casino — настоящие дилеры и шоу мирового уровня.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2">
              <h3 className="text-white text-[22px] font-bold mb-3">Red Tiger</h3>
              <p className="text-[#cbd5e1] text-[15px]">Автоматы с ежедневными джекпотами и эксклюзивными функциями для игроков.</p>
            </div>
            
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-6 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2">
              <h3 className="text-white text-[22px] font-bold mb-3">Hacksaw Gaming</h3>
              <p className="text-[#cbd5e1] text-[15px]">Современные слоты с огромным потенциалом выигрыша и стильным дизайном.</p>
            </div>
          </div>
        </div>

        {/* Game Categories Section */}
        <div className="mb-16">
          <h3 className="text-white text-[24px] font-bold leading-[1.4] mb-8 text-center uppercase tracking-widest text-[#2b87f9]">
            Популярные Категории
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2 shadow-lg">
              <div className="flex justify-center mb-4 text-4xl">🎰</div>
              <h3 className="text-white text-[22px] font-bold mb-3">Видеослоты</h3>
              <p className="text-[#cbd5e1] text-[15px]">От фруктовой классики до современных 3D-слотов с тысячами линий выплат.</p>
            </div>

            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2 shadow-lg">
              <div className="flex justify-center mb-4 text-4xl">🎬</div>
              <h3 className="text-white text-[22px] font-bold mb-3">Live Диллеры</h3>
              <p className="text-[#cbd5e1] text-[15px]">Почувствуйте атмосферу реального казино, не выходя из своего дома.</p>
            </div>

            <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 text-center transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-2 shadow-lg">
              <div className="flex justify-center mb-4 text-4xl">🚀</div>
              <h3 className="text-white text-[22px] font-bold mb-3">Crash Игры</h3>
              <p className="text-[#cbd5e1] text-[15px]">Быстрые раунды с возможностью сорвать куш за считанные мгновения.</p>
            </div>
          </div>
        </div>

        {/* Action Button & Disclaimer */}
        <div className="text-center">
          <a
            href={TARGET_URL}
            className="inline-flex items-center bg-[#2b87f9] text-white text-[20px] font-bold px-16 py-5 rounded-[12px] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(43,135,249,0.5)] mb-8 uppercase tracking-wider"
          >
            Играть Сейчас
          </a>
          <div className="text-[#9da5b1] text-[14px]">
            18+. Играйте ответственно. Lucky Bear — аффилиат, не является оператором азартных игр.
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCatalog;