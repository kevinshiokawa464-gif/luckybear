import React from 'react';
import { TARGET_URL } from '@/app/constants';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a1f29] py-20 px-6 text-center min-h-[600px] flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/20 blur-[60px] md:blur-[120px] rounded-full animate-pulse"></div>
      
      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center">
        <h1 className="uppercase italic tracking-tighter font-black text-[#ffffff] mb-8 text-[clamp(32px,8vw,64px)] leading-[1.1] drop-shadow-2xl">
          🔥 <span className="text-blue-500">LUCKY BEAR</span> (ЛАКИ БИР) — ТВОЙ ШАНС СТАТЬ МИЛЛИОНЕРОМ! 🐻💎
        </h1>

        <div className="bg-blue-600/10 border border-blue-500/30 px-6 py-2 rounded-full inline-block mb-8 animate-bounce">
          <span className="text-blue-400 font-black uppercase tracking-widest text-sm md:text-base">
            ЗАБЕРИ СВОЙ БОНУС ПРЯМО СЕЙЧАС! 🚀
          </span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a 
            href={TARGET_URL} 
            className="bg-[#2b87f9] text-white text-2xl font-black px-16 py-5 rounded-[20px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(43,135,249,0.5)] uppercase tracking-tight"
          >
            ЗАБРАТЬ БОНУС ПРЯМО СЕЙЧАС 🔥
          </a>
          
          <a 
            href="https://t.me/VPNDendibot?start=partner_schema09obxod" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 font-black text-sm uppercase tracking-widest animate-pulse hover:text-blue-300 no-underline"
          >
            Заходить через VPN 🌐
          </a>

          <div className="flex flex-col text-left gap-1 opacity-60 mt-4">
            <span className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> 12 450 ИГРОКОВ ОНЛАЙН
            </span>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              ВЫПЛАТЫ ЗА 15 МИНУТ ГАРАНТИРОВАНЫ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
