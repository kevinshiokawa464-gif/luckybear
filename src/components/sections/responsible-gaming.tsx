import React from 'react';

const ResponsibleGaming = () => {
  return (
    <section className="py-[60px] px-0 md:px-0">
      <div className="container mx-auto max-w-[1200px] px-4 text-center md:text-left">
        <h2 className="text-[28px] font-bold leading-[1.3] text-white mb-6">
          Ваша Безопасность и Ответственная Игра
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Confidentiality Card */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 flex flex-col hover:translate-y-[-2px] transition-transform duration-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] text-left">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white flex items-center gap-2 mb-3">
              🛡️ Защита Данных
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3]">
              Мы используем современные протоколы SSL-шифрования для обеспечения безопасности каждой транзакции. Ваша личная информация остается строго конфиденциальной и не передается третьим лицам.
            </p>
          </div>

          {/* Age Verification Card */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 flex flex-col hover:translate-y-[-2px] transition-transform duration-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] text-left">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white flex items-center gap-2 mb-3">
              🔞 Только 18+
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3]">
              Доступ к играм Lucky Bear разрешен исключительно совершеннолетним пользователям. Мы строго соблюдаем законодательство и можем запросить подтверждение возраста при выводе крупных сумм.
            </p>
          </div>

          {/* Self-Control Card */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 flex flex-col hover:translate-y-[-2px] transition-transform duration-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] text-left">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white flex items-center gap-2 mb-3">
              ⏸️ Контроль Игры
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3]">
              В Lucky Bear доступны инструменты для самоконтроля: вы можете установить лимиты на депозиты или время игры. Мы поддерживаем честную игру и помогаем пользователям сохранять контроль.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <a 
            href="/reg.html" 
            className="inline-flex items-center justify-center px-[22px] py-[11px] min-w-[65px] h-[48.7969px] border-radius-[25px] rounded-[25px] bg-white/[0.05] text-white text-[16px] font-semibold transition-all hover:bg-white/[0.1] hover:translate-y-[-2px]"
          >
            Правила безопасности
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGaming;
