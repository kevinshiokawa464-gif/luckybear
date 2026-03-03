import React from 'react';
import { TARGET_URL } from '@/app/constants';

const FinancialsSection: React.FC = () => {
  const paymentMethods = [
    'Visa / Mastercard',
    'МИР / СБП (QR)',
    'Piastrix / FKWallet',
    'Tether USDT (TRC/ERC)',
    'Bitcoin / ETH / LTC',
    'Binance Pay',
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1f29] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-4 animate-pulse">
            Платежи 24/7
          </div>
          <h2 
            id="lp-title" 
            className="text-[36px] md:text-[52px] font-black text-white leading-tight mb-6 uppercase tracking-tight"
          >
            МГНОВЕННЫЙ <span className="text-blue-500">ВЫВОД</span> ВЫИГРЫША
          </h2>
          <p className="text-[#e2e8f0] text-[20px] leading-relaxed max-w-[850px] mx-auto font-medium">
            Забудь про ожидание! В <strong className="text-blue-400">Lucky Bear</strong> выигрыши прилетают на твой счет со скоростью света. Мы убрали все лимиты и комиссии — забирай всё до копейки прямо сейчас.
          </p>
        </div>

        {/* Payment Methods Strip */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-16" 
          aria-label="Поддерживаемые способы оплаты"
        >
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="bg-gradient-to-br from-[#242b38] to-[#1e2532] text-white px-8 py-3 rounded-2xl text-sm font-black border border-[#343d4d] hover:border-blue-500 hover:scale-105 transition-all cursor-default shadow-xl group"
            >
              <span className="opacity-80 group-hover:opacity-100 transition-opacity uppercase">{method}</span>
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Deposit Card */}
          <article className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[32px] p-10 flex flex-col transition-all duration-500 hover:border-blue-500 group relative">
            <div className="absolute -top-5 left-10 px-6 py-2 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-xl group-hover:scale-110 transition-transform">
              Депозит
            </div>
            
            <h3 
              id="lp-dep" 
              className="text-[30px] font-black text-white mb-8 border-b border-white/10 pb-6 italic"
            >
              ПОПОЛНИТЬ СЧЕТ
            </h3>
            
            <div className="space-y-6 mb-12">
              {[
                { label: 'Банковские карты', val: 'Любые карты РФ и СНГ (MIR/Visa/MC)' },
                { label: 'Цифровые кошельки', val: 'FKWallet, Piastrix — без задержек' },
                { label: 'Криптовалюта', val: 'BTC, USDT, ETH, LTC — полная анонимность' },
                { label: 'Быстрые платежи', val: 'СБП — пополнение в один клик через QR' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-blue-500 pl-4 py-1">
                  <span className="text-xs font-black uppercase text-blue-400 tracking-wider">{item.label}</span>
                  <span className="text-lg text-white font-bold leading-tight">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Минимум', value: '300 ₽' },
                { label: 'Скорость', value: '0 сек' },
                { label: 'Комиссия', value: '0%' },
              ].map((fact, idx) => (
                <div key={idx} className="bg-[#1a1f29] border border-white/5 rounded-2xl p-5 text-center flex flex-col justify-center gap-1 shadow-inner">
                  <div className="text-white font-black text-xl mb-0 leading-none">{fact.value}</div>
                  <div className="text-[#9da5b1] text-[9px] uppercase font-bold tracking-widest leading-none">{fact.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="w-full h-[70px] flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-[18px] transition-all duration-500 shadow-[0_15px_35px_rgba(37,99,235,0.4)] uppercase tracking-tighter active:scale-[0.98]"
              >
                ВНЕСТИ ДЕПОЗИТ 💳
              </a>
            </div>
          </article>

          {/* Withdrawal Card */}
          <article className="bg-[#1e2532] border-2 border-[#343d4d] rounded-[32px] p-10 flex flex-col transition-all duration-500 hover:border-blue-500 group relative">
            <div className="absolute -top-5 left-10 px-6 py-2 bg-green-600 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-xl group-hover:scale-110 transition-transform">
              Выплаты
            </div>

            <h3 
              id="lp-wd" 
              className="text-[30px] font-black text-white mb-8 border-b border-white/10 pb-6 italic"
            >
              ВЫВЕСТИ ДЕНЬГИ
            </h3>

            <div className="space-y-6 mb-12">
              {[
                { label: 'Крипто-вывод', val: 'Выплаты на любые кошельки за 15 минут' },
                { label: 'Банковские карты', val: 'Любой банк РФ — от 30 минут до суток' },
                { label: 'Минимальный вывод', val: 'Выводи выигрыши от 500 ₽ без преград' },
                { label: 'Безопасность', val: 'Шифрование SSL-128 — деньги под защитой' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-green-500 pl-4 py-1">
                  <span className="text-xs font-black uppercase text-green-400 tracking-wider">{item.label}</span>
                  <span className="text-lg text-white font-bold leading-tight">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-[#1a1f29] border border-white/5 rounded-2xl p-6 mb-10 flex items-center justify-between shadow-inner">
               <div className="flex flex-col">
                  <span className="text-[#9da5b1] text-[10px] uppercase font-bold tracking-widest mb-1">Статус системы</span>
                  <span className="text-green-500 font-black text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span> СЕТЬ ОНЛАЙН
                  </span>
               </div>
               <div className="h-10 w-px bg-white/10"></div>
               <div className="flex flex-col items-end">
                  <span className="text-[#9da5b1] text-[10px] uppercase font-bold tracking-widest mb-1">Время вывода</span>
                  <span className="text-white font-black text-xl italic">~15 МИН</span>
               </div>
            </div>

            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="w-full h-[70px] flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-[18px] transition-all duration-500 shadow-[0_15px_35px_rgba(37,99,235,0.4)] uppercase tracking-tighter active:scale-[0.98]"
              >
                ЗАБРАТЬ ВЫИГРЫШ 💰
              </a>
            </div>
          </article>
        </div>

        {/* Responsible Gaming Note */}
        <div className="text-center opacity-40">
          <p className="text-[#9da5b1] text-xs uppercase font-bold tracking-[0.2em]">
            ЛИЦЕНЗИОННЫЙ СОФТ • ГАРАНТИЯ ВЫПЛАТ • БЕЗОПАСНОСТЬ ДАННЫХ
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;
