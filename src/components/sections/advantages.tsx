import React from 'react';

const advantages = [
  {
    icon: '🎰',
    title: 'Лучшие Игровые Автоматы 2026',
    description:
      'На Lucky Bear вас ждут сотни сертифицированных слотов от мировых провайдеров. Классика, 3D-новинки и аппараты с огромными джекпотами — всё это с гарантированно высокой отдачей (RTP).',
  },
  {
    icon: '🎁',
    title: 'Бонусы Каждый День',
    description:
      'Получайте подарки за каждый депозит! Новичкам доступен приветственный пакет, а постоянным игрокам — еженедельный кэшбэк и эксклюзивные промокоды в Telegram.',
  },
  {
    icon: '⚡',
    title: 'Мгновенные Выплаты',
    description:
      'Выводите выигрыши за считанные минуты. Мы поддерживаем банковские карты, электронные кошельки и популярные криптовалюты. Никаких скрытых комиссий!',
  },
  {
    icon: '📱',
    title: 'Удобная Мобильная Версия',
    description:
      'Играйте в любимые слоты прямо со смартфона. Сайт идеально оптимизирован под iOS и Android, не требуя установки лишних приложений. Просто добавьте иконку на главный экран.',
  },
  {
    icon: '👑',
    title: 'VIP-Привилегии',
    description:
      'Станьте частью элитного клуба Lucky Bear. Получайте повышенные лимиты, персонального менеджера и доступ к закрытым турнирам с крупными призовыми фондами.',
  },
  {
    icon: '🛡️',
    title: 'Безопасность и Анонимность',
    description:
      'Ваши данные под защитой современных алгоритмов шифрования. Мы гарантируем полную конфиденциальность транзакций и поддерживаем принципы ответственной игры.',
  },
];

const Advantages = () => {
  return (
    <section className="py-[60px] px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[28px] font-bold leading-[1.3] text-white mb-8 text-center md:text-left">
          Почему выбирают Lucky Bear Казино?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="text-[18px] font-semibold leading-[1.4] text-white mb-4 flex items-start gap-2">
                <span className="shrink-0">{item.icon}</span>
                <span>{item.title}</span>
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#98a2b3] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
