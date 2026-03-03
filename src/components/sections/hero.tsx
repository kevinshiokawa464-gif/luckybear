import React from 'react';
import { TARGET_URL } from '@/app/constants';

/**
 * Hero component for Lucky Bear Casino
 */
const Hero = () => {
  return (
    <section 
      className="hero-section relative overflow-hidden" 
      style={{
        backgroundColor: '#1a1f29',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px',
        textAlign: 'center',
        width: '100%',
        minHeight: '600px'
      }}
    >
      {/* Animated Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div 
        className="relative z-10"
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="hero-content">
          {/* Main Catchy Title */}
            <h1 
              id="hero-title"
              className="uppercase italic tracking-tighter"
              style={{
                fontFamily: 'var(--font-display, "Roboto", sans-serif)',
                fontSize: 'clamp(32px, 8vw, 64px)',
                fontWeight: 900,
                lineHeight: '1.1',
                color: '#ffffff',
                marginBottom: '32px',
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)'
              }}
            >
              🔥 <span className="text-blue-500">LUCKY BEAR</span> (ЛАКИ БИР) — ТВОЙ ШАНС СТАТЬ МИЛЛИОНЕРОМ! 🐻💎
            </h1>

            {/* Subtitle / Byte */}
            <div className="bg-blue-600/10 border border-blue-500/30 px-6 py-2 rounded-full inline-block mb-8 animate-bounce">
               <span className="text-blue-400 font-black uppercase tracking-widest text-sm md:text-base">
                  ЗАБЕРИ +500% БОНУС ПРЯМО СЕЙЧАС! 🚀
               </span>
            </div>

            {/* Descriptive Content */}
            <p 
              className="font-medium"
              style={{
                fontFamily: 'var(--font-sans, "Roboto", sans-serif)',
                fontSize: 'clamp(16px, 4vw, 22px)',
                lineHeight: '1.5',
                color: '#cbd5e1',
                maxWidth: '850px',
                marginBottom: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Взрывай слоты в официальном <strong className="text-white">lucky bear казино</strong>! 
              Мгновенные выплаты, эксклюзивные <strong className="text-white">лакибир слоты</strong> и сумасшедшие заносы. 
              Выполни <strong className="text-white">лаки бир вход</strong> за 10 секунд и начни свой путь к джекпоту в <strong className="text-white">лаки бир казино</strong> прямо сегодня!
            </p>

          {/* CTA Button */}
          <div className="button-group flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href={TARGET_URL} 
                className="btn-primary hover-scale"
                style={{
                  backgroundColor: '#2b87f9',
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 900,
                  padding: '22px 64px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(43, 135, 249, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em'
                }}
              >
                ЗАБЕРИ 500% ПРЯМО СЕЙЧАС 🔥
              </a>
            
            <div className="flex flex-col text-left gap-1 opacity-60">
               <span className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> 12 450 ИГРОКОВ ОНЛАЙН
               </span>
               <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                  ВЫПЛАТЫ ЗА 15 МИНУТ ГАРАНТИРОВАНЫ
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* Internal component styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hover-scale:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 20px 45px rgba(43, 135, 249, 0.6) !important;
          filter: brightness(1.1);
        }
        .hover-scale:active {
          transform: translateY(0) scale(0.98);
        }
      `}} />
    </section>
  );
};

export default Hero;
