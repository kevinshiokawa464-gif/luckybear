import React from 'react';
import { TARGET_URL } from '@/app/constants';

const Bonuses = () => {
  const bonusData = [
    { deposit: 'Старт (от 300 ₽)', bonus: '+120% к счету', total: 'Баланс: 660 ₽' },
    { deposit: 'Продвинутый (от 1 000 ₽)', bonus: '+180% к счету', total: 'Баланс: 2 800 ₽' },
    { deposit: 'Оптимальный (от 2 000 ₽)', bonus: '+240% к счету', total: 'Баланс: 6 800 ₽' },
    { deposit: 'Профи (от 3 000 ₽)', bonus: '+300% к счету', total: 'Баланс: 12 000 ₽' },
    { deposit: 'Мастер (от 10 000 ₽)', bonus: '+340% к счету', total: 'Баланс: 44 000 ₽' },
    { deposit: 'VIP (от 20 000 ₽)', bonus: '+360% к счету', total: 'Баланс: 92 000 ₽' },
  ];

  return (
    <section className="bg-[#1a1f29] py-[80px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 id="bonus-title" className="text-[32px] md:text-[42px] font-bold text-white mb-4 leading-[1.3] uppercase tracking-tighter">
            🎁 ЭКСКЛЮЗИВНЫЕ БОНУСЫ ЛАКИ БИР: ЗАБЕРИ СВОЙ КУШ!
          </h2>
          <p className="text-[#e2e8f0] text-[18px] max-w-[800px] mx-auto leading-[1.6]">
            Мы обнулили вейджеры и подняли планку! В <strong className="text-blue-400">luckybear бонусы</strong> теперь еще доступнее. Успей активировать свой пакет привилегий и начни в <strong className="text-blue-400">лакибир играть</strong> с максимальным преимуществом.
          </p>
        </div>

        {/* Desktop/Tablet Table */}
        <div className="hidden md:block overflow-hidden rounded-[24px] border-2 border-[#343d4d] mb-12 shadow-[0_0_50px_rgba(43,135,249,0.1)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2b3a4a]">
                <th className="px-8 py-6 text-[#ffffff] font-bold text-sm uppercase tracking-widest">Твой Уровень</th>
                <th className="px-8 py-6 text-[#ffffff] font-bold text-sm uppercase tracking-widest text-center">Размер Бонуса</th>
                <th className="px-8 py-6 text-[#ffffff] font-bold text-sm uppercase tracking-widest text-right">Что на балансе?</th>
              </tr>
            </thead>
            <tbody className="bg-[#1e2532]">
              {bonusData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`transition-colors hover:bg-blue-500/5 ${index !== bonusData.length - 1 ? "border-b border-[#343d4d]" : ""}`}
                >
                  <td className="px-8 py-5 text-white font-bold text-lg">{row.deposit}</td>
                  <td className="px-8 py-5 text-center">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-[#ffffff] px-6 py-2 rounded-xl text-md font-black shadow-lg">
                      {row.bonus}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right text-[#2b87f9] font-black text-xl">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mb-12">
          {bonusData.map((row, index) => (
            <div key={index} className="bg-[#242b38] border-2 border-[#343d4d] rounded-[20px] p-6 shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#9da5b1] text-xs uppercase font-bold tracking-widest">Пакет</span>
                  <strong className="text-white text-md uppercase">{row.deposit.split(' (')[0]}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9da5b1] text-xs uppercase font-bold tracking-widest">Бонус</span>
                  <strong className="text-[#2b87f9] text-xl font-black">{row.bonus}</strong>
                </div>
                <div className="h-px bg-[#343d4d] w-full my-1"></div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9da5b1] text-xs uppercase font-bold tracking-widest">Итого</span>
                  <strong className="text-white text-lg font-black">{row.total.split(': ')[1]}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Promo Code Card */}
          <div className="bg-gradient-to-br from-[#242b38] to-[#1e2532] border border-[#343d4d] rounded-[24px] p-10 flex flex-col hover:border-blue-500 transition-all duration-500 group">
            <h3 className="text-[28px] font-black text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500 text-3xl">🔑</span> Твой Промокод
            </h3>
            <div className="mb-8 p-6 bg-[#1a1f29] border-2 border-dashed border-blue-500/50 rounded-2xl text-center group-hover:scale-[1.02] transition-transform">
              <span className="text-gray-400 text-sm block mb-2 uppercase font-bold">Используй при регистрации:</span>
              <span className="text-3xl font-black text-white tracking-[0.2em] uppercase">LUCKYBEAR500</span>
            </div>
            <ol className="space-y-5 mb-10">
              {[
                'Открой в Lucky Bear официальный сайт.',
                'Пройди быструю регистрацию (10 сек).',
                'Введи секретный промокод в личном кабинете.',
                'Внеси депозит и смотри, как баланс взлетает!'
              ].map((step, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-black shadow-lg shadow-blue-600/20">
                    {i + 1}
                  </span>
                  <span className="text-[#cbd5e1] text-[17px] leading-relaxed font-medium">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="btn-primary w-full text-center py-5 mb-6 font-black text-xl shadow-[0_15px_30px_rgba(43,135,249,0.3)] hover:shadow-blue-600/40 transition-all uppercase tracking-tighter"
              >
                ЗАБРАТЬ 500% БОНУС 🔥
              </a>
              <p className="text-[14px] text-[#9da5b1] leading-[1.4] italic text-center">
                * Промокод luckybear действителен только для новых игроков.
              </p>
            </div>
          </div>

          {/* Permanent Promotions Card */}
          <div className="bg-gradient-to-br from-[#242b38] to-[#1e2532] border border-[#343d4d] rounded-[24px] p-10 flex flex-col hover:border-blue-500 transition-all duration-500">
            <h3 className="text-[28px] font-black text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500 text-3xl">💎</span> VIP ПРИВИЛЕГИИ
            </h3>
            <div className="space-y-6 mb-10">
              {[
                { title: 'Колесо Фриспинов', desc: 'Ежедневные бесплатные вращения с реальными выигрышами без вейджера.' },
                { title: 'Мега-Кешбэк 20%', desc: 'Возвращаем часть средств каждую неделю. Без условий и скрытых комиссий.' },
                { title: 'Турниры на Миллион', desc: 'Участвуй в битвах за призовые фонды до 10 000 000 ₽ ежедневно.' },
                { title: 'Личный Менеджер', desc: 'Индивидуальные условия и эксклюзивные купоны для лояльных игроков.' }
              ].map((promo, i) => (
                <div key={i} className="flex gap-5 items-start bg-[#1a1f29]/50 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-2.5 animate-pulse"></div>
                  <div className="text-[#cbd5e1] text-[17px] leading-relaxed">
                    <strong className="text-white font-black block text-lg mb-1">{promo.title}</strong>
                    <span className="opacity-80 font-medium">{promo.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="btn-primary w-full text-center py-5 font-black text-xl shadow-[0_15px_30px_rgba(43,135,249,0.3)] hover:shadow-blue-600/40 transition-all uppercase tracking-tighter"
              >
                СМОТРЕТЬ ВСЕ АКЦИИ 🚀
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-[14px] text-[#9da5b1] font-bold uppercase tracking-widest opacity-50">
            18+. Играй разумно. Лаки Бир гарантирует честность и прозрачность.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
