import React from 'react';
import { TARGET_URL } from '@/app/constants';

const Bonuses = () => {
  const bonusData = [
    { deposit: 'От 300 ₽', bonus: '120%', total: 'До 660 ₽' },
    { deposit: 'От 1 000 ₽', bonus: '180%', total: 'До 2 800 ₽' },
    { deposit: 'От 2 000 ₽', bonus: '240%', total: 'До 6 800 ₽' },
    { deposit: 'От 3 000 ₽', bonus: '300%', total: 'До 12 000 ₽' },
    { deposit: 'От 10 000 ₽', bonus: '340%', total: 'До 44 000 ₽' },
    { deposit: 'От 20 000 ₽', bonus: '360%', total: 'До 92 000 ₽' },
  ];

  return (
    <section className="bg-[#1a1f29] py-[80px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 id="bonus-title" className="text-[32px] md:text-[42px] font-bold text-white mb-4 leading-[1.3]">
            Уникальные Бонусы Лаки Бир: Умножь Свой Депозит!
          </h2>
          <p className="text-[#e2e8f0] text-[18px] max-w-[800px] mx-auto leading-[1.6]">
            Мы подготовили самую щедрую бонусную сетку в индустрии. Каждый новый игрок Лаки Бир получает шанс увеличить свой стартовый капитал до 360%!
          </p>
        </div>

        {/* Desktop/Tablet Table */}
        <div className="hidden md:block overflow-hidden rounded-[16px] border border-[#343d4d] mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2b3a4a]">
                <th className="px-8 py-5 text-[#ffffff] font-semibold text-sm uppercase tracking-wider">Сумма депозита</th>
                <th className="px-8 py-5 text-[#ffffff] font-semibold text-sm uppercase tracking-wider">Бонус</th>
                <th className="px-8 py-5 text-[#ffffff] font-semibold text-sm uppercase tracking-wider">Итоговая сумма</th>
              </tr>
            </thead>
            <tbody className="bg-[#242b38]">
              {bonusData.map((row, index) => (
                <tr 
                  key={index} 
                  className={index !== bonusData.length - 1 ? "border-b border-[#343d4d]" : ""}
                >
                  <td className="px-8 py-4 text-white font-medium text-base">{row.deposit}</td>
                  <td className="px-8 py-4">
                    <span className="inline-block bg-[#2b87f9] text-[#ffffff] px-4 py-1 rounded-full text-sm font-bold">
                      {row.bonus}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-white font-medium text-base">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mb-12">
          {bonusData.map((row, index) => (
            <div key={index} className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-5">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#9da5b1]">Сумма депозита</span>
                  <strong className="text-white">{row.deposit}</strong>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#9da5b1]">Бонус</span>
                  <strong className="text-[#2b87f9]">{row.bonus}</strong>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#9da5b1]">Итоговая сумма</span>
                  <strong className="text-white">{row.total}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Promo Code Card */}
          <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 flex flex-col hover:border-[#2b87f966] transition-all duration-300">
            <h3 className="text-[26px] font-bold text-white mb-6">Как активировать бонус</h3>
            <ol className="space-y-4 mb-8">
              {[
                'Авторизуйтесь в личном кабинете Lucky Bear.',
                'Перейдите в раздел «Акции и Бонусы».',
                'Введите ваш секретный промокод.',
                'Подтвердите активацию и начните выигрывать!'
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2b87f9] text-white flex items-center justify-center text-xs font-bold mt-1">
                    {i + 1}
                  </span>
                  <span className="text-[#cbd5e1] text-[17px] leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="btn-primary w-full text-center py-4 mb-6 font-bold text-lg"
              >
                Активировать Бонус
              </a>
              <p className="text-[14px] text-[#9da5b1] leading-[1.4]">
                Мы регулярно рассылаем новые промокоды через Telegram-бот Лаки Бир.
              </p>
            </div>
          </div>

          {/* Permanent Promotions Card */}
          <div className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 flex flex-col hover:border-[#2b87f966] transition-all duration-300">
            <h3 className="text-[26px] font-bold text-white mb-6">Постоянные привилегии</h3>
            <ul className="space-y-4 mb-8">
              {[
                { title: 'Колесо Удачи', desc: 'каждый день новые фриспины и денежные призы для активных игроков.' },
                { title: 'Система Кешбэка', desc: 'получайте возврат до 20% от проигранных средств еженедельно.' },
                { title: 'Партнерская программа', desc: 'зарабатывайте реальные деньги, приглашая друзей в игру.' },
                { title: 'VIP-Турниры', desc: 'участвуйте в соревнованиях с призовыми фондами до 5 000 000 ₽.' }
              ].map((promo, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-2 h-2 rounded-sm bg-[#2b87f9] mt-2.5"></span>
                  <div className="text-[#cbd5e1] text-[17px] leading-relaxed">
                    <strong className="text-white font-bold">{promo.title}</strong> — {promo.desc}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="btn-primary w-full text-center py-4 font-bold text-lg"
              >
                Все Акции
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[14px] text-[#9da5b1]">
            18+. Играйте ответственно. Lucky Bear — аффилиат и не является оператором азартных игр.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;