import React from 'react';
import { TARGET_URL } from '@/app/constants';

const GameCatalog = () => {
  return (
    <section className="bg-[#1a1f29] py-[100px] font-sans relative overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 id="catalog-title" className="text-white text-[38px] md:text-[54px] font-black leading-tight mb-6 uppercase italic tracking-tighter">
            ТВОЯ <span className="text-blue-500 underline decoration-4 decoration-blue-500/50">ИМПЕРИЯ</span> АЗАРТА
          </h2>
          <p className="text-[#e2e8f0] text-[20px] max-w-[900px] mx-auto leading-relaxed font-medium">
            В <strong className="text-blue-400">Lucky Bear</strong> собрано всё самое горячее: от легендарных слотов до эксклюзивных новинок. Более 3000 лицензионных игр с отдачей (RTP) до 98%. Твой крупный выигрыш уже ждет своего часа!
          </p>
        </div>

        {/* Top Providers Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-4">
             <h3 className="text-white text-[28px] font-black leading-none uppercase tracking-widest text-blue-500">
                ТОП ПРОВАЙДЕРЫ
             </h3>
             <span className="text-gray-500 text-xs font-bold uppercase tracking-widest hidden md:block">Лицензионный софт 2024</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[24px] p-8 text-center transition-all duration-500 hover:border-blue-500 hover:-translate-y-3 shadow-2xl group">
              <div className="bg-blue-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                 <span className="text-3xl font-black text-white italic">PP</span>
              </div>
              <h3 className="text-white text-[24px] font-black mb-4 uppercase tracking-tighter group-hover:text-blue-400">Pragmatic Play</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed opacity-80 group-hover:opacity-100">Легендарные Gates of Olympus и Sweet Bonanza с множителями x5000 и выше.</p>
            </div>
            
            <div className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[24px] p-8 text-center transition-all duration-500 hover:border-blue-500 hover:-translate-y-3 shadow-2xl group">
              <div className="bg-purple-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors">
                 <span className="text-3xl font-black text-white italic">PG</span>
              </div>
              <h3 className="text-white text-[24px] font-black mb-4 uppercase tracking-tighter group-hover:text-purple-400">PG Soft</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed opacity-80 group-hover:opacity-100">Лучшие мобильные хиты. Инновационная графика и механики, созданные для смартфонов.</p>
            </div>
            
            <div className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[24px] p-8 text-center transition-all duration-500 hover:border-blue-500 hover:-translate-y-3 shadow-2xl group">
              <div className="bg-red-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors">
                 <span className="text-3xl font-black text-white italic">EVO</span>
              </div>
              <h3 className="text-white text-[24px] font-black mb-4 uppercase tracking-tighter group-hover:text-red-400">Evolution</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed opacity-80 group-hover:opacity-100">Живое казино премиум-класса. Рулетка, блэкджек и шоу в прямом эфире 24/7.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <div className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[24px] p-8 flex items-center gap-6 transition-all duration-500 hover:border-blue-500 hover:scale-[1.02] shadow-2xl group">
              <div className="bg-orange-600/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors font-black text-white">RT</div>
              <div>
                <h3 className="text-white text-[20px] font-black mb-2 uppercase tracking-tighter group-hover:text-orange-400 leading-none">Red Tiger</h3>
                <p className="text-[#cbd5e1] text-[14px] leading-snug opacity-70 group-hover:opacity-100">Джекпоты каждый день и уникальные бонусные функции.</p>
              </div>
            </div>
            
            <div className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[24px] p-8 flex items-center gap-6 transition-all duration-500 hover:border-blue-500 hover:scale-[1.02] shadow-2xl group">
              <div className="bg-green-600/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors font-black text-white">HS</div>
              <div>
                <h3 className="text-white text-[20px] font-black mb-2 uppercase tracking-tighter group-hover:text-green-400 leading-none">Hacksaw</h3>
                <p className="text-[#cbd5e1] text-[14px] leading-snug opacity-70 group-hover:opacity-100">Темный стиль и безумные иксы в каждом новом релизе.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Categories Section */}
        <div className="mb-20">
          <h3 className="text-white text-[28px] font-black leading-none mb-12 text-center uppercase tracking-[0.2em] italic underline decoration-blue-500/50">
            ВЫБЕРИ СВОЙ ФОРМАТ ПОБЕДЫ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-b from-[#1e2532] to-[#1a1f29] border border-white/5 rounded-[32px] p-10 text-center transition-all duration-500 hover:border-blue-500 shadow-2xl group">
              <div className="flex justify-center mb-6 text-6xl group-hover:scale-110 transition-transform">🎰</div>
              <h3 className="text-white text-[26px] font-black mb-4 uppercase tracking-tighter">СЛОТЫ</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed mb-6">Классика и 3D-новинки. Тысячи линий и бесплатных вращений.</p>
              <div className="h-1.5 w-full bg-[#1a1f29] rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-[95%]"></div>
              </div>
              <span className="text-[10px] text-blue-400 uppercase font-black mt-2 block tracking-widest">Популярность: 95%</span>
            </div>

            <div className="bg-gradient-to-b from-[#1e2532] to-[#1a1f29] border border-white/5 rounded-[32px] p-10 text-center transition-all duration-500 hover:border-blue-500 shadow-2xl group">
              <div className="flex justify-center mb-6 text-6xl group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-white text-[26px] font-black mb-4 uppercase tracking-tighter">LIVE ШОУ</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed mb-6">Атмосфера реального казино. Профессиональные дилеры онлайн.</p>
              <div className="h-1.5 w-full bg-[#1a1f29] rounded-full overflow-hidden">
                 <div className="h-full bg-purple-500 w-[88%]"></div>
              </div>
              <span className="text-[10px] text-purple-400 uppercase font-black mt-2 block tracking-widest">Популярность: 88%</span>
            </div>

            <div className="bg-gradient-to-b from-[#1e2532] to-[#1a1f29] border border-white/5 rounded-[32px] p-10 text-center transition-all duration-500 hover:border-blue-500 shadow-2xl group">
              <div className="flex justify-center mb-6 text-6xl group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-white text-[26px] font-black mb-4 uppercase tracking-tighter">CRASH ИГРЫ</h3>
              <p className="text-[#cbd5e1] text-[16px] leading-relaxed mb-6">Aviator и JetX. Забирай выигрыш, пока график не улетел в космос!</p>
              <div className="h-1.5 w-full bg-[#1a1f29] rounded-full overflow-hidden">
                 <div className="h-full bg-orange-500 w-[92%]"></div>
              </div>
              <span className="text-[10px] text-orange-400 uppercase font-black mt-2 block tracking-widest">Популярность: 92%</span>
            </div>
          </div>
        </div>

        {/* Action Button & Disclaimer */}
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-blue-500/40 blur-[50px] rounded-full pointer-events-none"></div>
          <a
            href={TARGET_URL}
            className="inline-flex items-center bg-blue-600 text-white text-[24px] font-black px-20 py-6 rounded-[24px] transition-all duration-500 hover:bg-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.6)] hover:-translate-y-2 mb-10 uppercase tracking-tighter relative active:scale-95"
          >
            ИГРАТЬ СЕЙЧАС 🎰
          </a>
          <div className="text-[#9da5b1] text-[14px] font-bold uppercase tracking-[0.2em] opacity-40">
            Официальный софт • Проверка честности • RTP до 98%
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCatalog;
