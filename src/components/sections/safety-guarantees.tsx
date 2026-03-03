import React from 'react';

const SafetyGuarantees = () => {
  return (
    <section className="py-20 bg-[#050b18]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-8 leading-tight">
          Защита данных и принципы ответственной игры
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Information Security Card */}
          <div className="bg-[#0f172a] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 hover:bg-[#1e293b] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-xl" role="img" aria-label="Security">🛡️</span>
              <h3 className="text-[20px] font-semibold text-white leading-[1.4]">
                Конфиденциальность информации
              </h3>
            </div>
            <p className="text-[#94a3b8] text-[16px] leading-[1.6]">
              Платформа применяет SSL-шифрование для защиты всех транзакций. Личные данные не раскрываются сторонним организациям. 
              Для дополнительной безопасности рекомендуем активировать двухфакторную проверку в настройках профиля.
            </p>
          </div>

          {/* Age Verification Card */}
          <div className="bg-[#0f172a] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 hover:bg-[#1e293b] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-xl" role="img" aria-label="Adult Only">🔞</span>
              <h3 className="text-[20px] font-semibold text-white leading-[1.4]">
                Проверка совершеннолетия
              </h3>
            </div>
            <p className="text-[#94a3b8] text-[16px] leading-[1.6]">
              Игровой процесс разрешён только лицам, достигшим 18 лет. Администрация может затребовать удостоверение личности 
              для подтверждения возраста в соответствии с законодательством.
            </p>
          </div>

          {/* Self-Control Card */}
          <div className="bg-[#0f172a] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 hover:bg-[#1e293b] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-xl" role="img" aria-label="Control">⏸️</span>
              <h3 className="text-[20px] font-semibold text-white leading-[1.4]">
                Инструменты самоконтроля
              </h3>
            </div>
            <p className="text-[#94a3b8] text-[16px] leading-[1.6]">
              В личном кабинете доступны настройки лимитов: максимальная сумма депозита, ограничение потерь или длительности игровой сессии. 
              Также можно временно заморозить аккаунт, если возникает необходимость сделать паузу.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/reg.html"
            className="inline-flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-white text-[16px] font-semibold px-[24px] py-[12px] rounded-full border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            Принципы ответственной игры
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuarantees;