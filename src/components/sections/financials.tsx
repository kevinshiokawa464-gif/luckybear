import React from 'react';
import { TARGET_URL } from '@/app/constants';

const FinancialsSection: React.FC = () => {
  const paymentMethods = [
    'Visa',
    'Mastercard',
    'Mir',
    'SBP',
    'Piastrix',
    'Bitcoin',
    'USDT',
    'Ethereum',
    'Litecoin',
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f29] font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="lp-title" 
            className="text-[32px] md:text-[42px] font-bold text-white leading-[1.3] mb-4"
          >
            Пополнение и Вывод Средств: Быстро и Безопасно
          </h2>
          <p className="text-[#e2e8f0] text-[18px] leading-relaxed max-w-[800px] mx-auto">
            Лаки Бир поддерживает все популярные платежные системы. Мы обеспечиваем мгновенное зачисление депозитов и быстрый вывод ваших выигрышей без лишних комиссий.
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
              className="bg-[#242b38] text-white px-6 py-2 rounded-full text-sm font-bold border border-[#343d4d] hover:border-[#2b87f9] transition-all cursor-default shadow-md"
            >
              {method}
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Deposit Card */}
          <article className="bg-[#242b38] border border-[#343d4d] rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1 shadow-2xl">
            <h3 
              id="lp-dep" 
              className="text-[26px] font-bold text-white mb-6 text-center border-b border-[#343d4d] pb-4"
            >
              Депозит и Пополнение
            </h3>
            
            <ul className="space-y-4 mb-10">
              {[
                <>Банковские карты <strong>MIR, Visa, Mastercard</strong></>,
                <>Электронные кошельки: <strong>Piastrix, FKWallet</strong></>,
                <>Криптовалюты: <strong>USDT, BTC, ETH, LTC</strong></>,
                <>Система быстрых платежей <strong>(СБП)</strong></>,
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#cbd5e1]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2b87f9] shrink-0" />
                  <span className="text-[17px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quick Facts */}
            <div className="grid grid-cols-3 gap-3 mb-10" aria-label="Условия депозита">
              {[
                { label: 'Минимум', value: 'от 300 ₽' },
                { label: 'Зачисление', value: 'Моментально' },
                { label: 'Комиссия', value: '0%' },
              ].map((fact, idx) => (
                <div key={idx} className="bg-[#1a1f29] border border-[#343d4d] rounded-xl p-4 text-center">
                  <div className="text-[#2b87f9] font-black text-lg mb-1">{fact.value}</div>
                  <div className="text-[#9da5b1] text-[10px] uppercase font-bold tracking-widest leading-tight">{fact.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="w-full h-[60px] flex items-center justify-center bg-[#2b87f9] hover:brightness-110 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(43,135,249,0.3)] uppercase tracking-widest"
              >
                Пополнить счёт
              </a>
            </div>
          </article>

          {/* Withdrawal Card */}
          <article className="bg-[#242b38] border border-[#343d4d] rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:border-[#2b87f9]/60 hover:-translate-y-1 shadow-2xl">
            <h3 
              id="lp-wd" 
              className="text-[26px] font-bold text-white mb-6 text-center border-b border-[#343d4d] pb-4"
            >
              Вывод Выигрыша
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                <><strong>Мгновенные выплаты</strong> на криптокошельки</>,
                <><strong>Вывод на карты</strong> РФ за 1-24 часа</>,
                <><strong>Минимальный вывод</strong> всего от 500 ₽</>,
                <><strong>Безопасность</strong> — шифрование всех транзакций</>,
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#cbd5e1]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2b87f9] shrink-0" />
                  <span className="text-[17px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a 
                href={TARGET_URL} 
                className="w-full h-[60px] flex items-center justify-center bg-[#2b87f9] hover:brightness-110 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(43,135,249,0.3)] uppercase tracking-widest"
              >
                Вывести средства
              </a>
            </div>
          </article>
        </div>

        {/* Responsible Gaming Note */}
        <div className="text-center">
          <p className="text-[#9da5b1] text-xs uppercase font-bold tracking-[0.1em] opacity-80">
            18+. Играйте ответственно. Lucky Bear — аффилиат и не является оператором азартных игр.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;