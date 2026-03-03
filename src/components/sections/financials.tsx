import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FinancialsSection: React.FC = () => {
  const paymentMethods = [
    'Visa',
    'Mastercard',
    'Mir',
    'Skrill',
    'Neteller',
    'Bitcoin',
    'USDT',
    'Ethereum',
    'Мобильные',
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f29] font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="lp-title" 
            className="text-[32px] font-semibold text-white leading-[1.3] mb-4"
          >
            Финансовые Операции в Рублях
          </h2>
          <p className="text-[#9da5b1] text-base leading-relaxed max-w-[800px] mx-auto">
            Мгновенные пополнения, прозрачные правила вывода и поддержка популярных платёжных методов для игроков из РФ.
          </p>
        </div>

        {/* Payment Methods Strip */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-10" 
          aria-label="Поддерживаемые способы оплаты"
        >
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="bg-[#2b3a4a] text-white px-5 py-2 rounded-full text-sm font-medium border border-[#343d4d] hover:border-[#2b87f9] transition-colors cursor-default"
            >
              {method}
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Deposit Card */}
          <article className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:border-[#2b87f9]/40 hover:-translate-y-0.5 shadow-lg">
            <h3 
              id="lp-dep" 
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Депозит и Пополнение Счёта
            </h3>
            
            <ul className="space-y-4 mb-10">
              {[
                <>Банковские карты <strong>Visa/MasterCard/Mir</strong></>,
                'Электронные кошельки и платёжные системы',
                <>Криптовалюты: <strong>Bitcoin, USDT, Ethereum</strong></>,
                'Мобильные платежи',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#9da5b1]">
                  <span className="mt-1.5 w-2 h-2 rounded-sm bg-[#2b87f9] shrink-0" />
                  <span className="text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quick Facts */}
            <div className="grid grid-cols-3 gap-2 mb-10" aria-label="Условия депозита">
              {[
                { label: 'Минимальный депозит', value: 'от 300 ₽' },
                { label: 'Скорость зачисления', value: 'Мгновенно' },
                { label: 'Комиссия казино', value: '0%' },
              ].map((fact, idx) => (
                <div key={idx} className="bg-[#1a1f29] border border-[#343d4d] rounded-lg p-3 text-center">
                  <div className="text-white font-bold text-sm mb-1">{fact.value}</div>
                  <div className="text-[#9da5b1] text-[10px] uppercase tracking-wider leading-tight">{fact.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href="/goto/" 
                className="w-full h-[54px] flex items-center justify-center bg-[#2b87f9] hover:bg-[#3d94ff] text-white font-semibold rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(43,135,249,0.2)]"
              >
                Пополнить счёт
              </a>
            </div>
          </article>

          {/* Withdrawal Card */}
          <article className="bg-[#242b38] border border-[#343d4d] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:border-[#2b87f9]/40 hover:-translate-y-0.5 shadow-lg">
            <h3 
              id="lp-wd" 
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Вывод Средств
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                <><strong>Верификация аккаунта</strong> — до 2 дней</>,
                <><strong>Обработка заявки</strong> — от 1 до 24 часов</>,
                <><strong>Минимальная сумма вывода</strong> — от 500 ₽</>,
                'Доступны те же методы, что и для депозита',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#9da5b1]">
                  <span className="mt-1.5 w-2 h-2 rounded-sm bg-[#2b87f9] shrink-0" />
                  <span className="text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a 
                href="/goto/" 
                className="w-full h-[54px] flex items-center justify-center bg-[#2b87f9] hover:bg-[#3d94ff] text-white font-semibold rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(43,135,249,0.2)]"
              >
                Вывести средства
              </a>
            </div>
          </article>
        </div>

        {/* Responsible Gaming Note */}
        <div className="text-center">
          <p className="text-[#9da5b1] text-xs uppercase tracking-[0.05em] opacity-80">
            18+. Играйте ответственно. Lucky Bear — аффилиат и не является оператором азартных игр.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;