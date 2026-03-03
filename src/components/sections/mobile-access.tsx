import React from 'react';

const MobileAccess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-5 mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 leading-tight">
          Lucky Bear на мобильных устройствах: игра без границ
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Card 1: Adaptive Version */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-md transition-all duration-300 hover:bg-surface-hover/80 hover:translate-y-[-4px]">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-2xl mt-1">📱</span>
              <h3 className="text-[20px] font-semibold text-white leading-tight">
                Адаптивная веб-версия
              </h3>
            </div>
            <p className="text-[16px] text-text-secondary leading-relaxed font-normal">
              Платформа идеально подстраивается под дисплеи смартфонов и планшетов любых моделей. 
              Все действия — регистрация профиля, пополнение баланса, запуск развлечений и запрос выплат — доступны в несколько нажатий. 
              Отсутствует необходимость в загрузке дополнительного софта, работа идёт через обычный браузер.
            </p>
          </div>

          {/* Card 2: Quick Launch Icon */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-md transition-all duration-300 hover:bg-surface-hover/80 hover:translate-y-[-4px]">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-2xl mt-1">➕</span>
              <h3 className="text-[20px] font-semibold text-white leading-tight">
                Иконка быстрого запуска
              </h3>
            </div>
            <p className="text-[16px] text-text-secondary leading-relaxed font-normal">
              Пользователи Android и iOS могут сохранить ярлык ресурса на домашнем экране. 
              Запуск осуществляется как в случае с нативным приложением, а объём занимаемой памяти минимален. 
              Подробная инструкция размещена в разделе «Мобильный доступ».
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-start">
          <a
            href="/reg.html"
            className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-[16px]"
          >
            Подробнее о мобильной версии
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAccess;