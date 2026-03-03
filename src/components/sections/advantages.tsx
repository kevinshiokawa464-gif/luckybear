import React from 'react';

const Advantages = () => {
  const advantagesData = [
    {
      emoji: '🎰',
      title: 'Проверенные игровые лицензированные автоматы',
      description: 'Более 1000 слотов от лицензированных провайдеров: классические модели, свежие релизы, автоматы с прогрессивными джекпотами, настольные развлечения и лайв-игры с профессиональными дилерами. Каждый результат формируется честно, процент отдачи соответствует заявленному.',
    },
    {
      emoji: '🎁',
      title: 'Акции без выходных',
      description: 'Новичкам доступен стартовый пакет поощрений, для постоянных игроков действует кэшбэк раз в неделю, фриспины за регулярные пополнения и индивидуальные промо-коды. Все вейджерные требования открыто публикуются в описаниях.',
    },
    {
      emoji: '⚡',
      title: 'Выплаты за минуты',
      description: 'Забирайте выигрыши на банковские карты, электронные кошельки или криптовалютные счета. Запросы обрабатываются в течение нескольких минут после подтверждения. Однократная верификация не создаёт задержек при последующих выводах.',
    },
    {
      emoji: '📱',
      title: 'Версия для смартфонов',
      description: 'Интерфейс полностью адаптирован под мобильные экраны — никаких лишних загрузок. Достаточно сохранить ярлык на домашнем экране для ещё более комфортного доступа.',
    },
    {
      emoji: '👑',
      title: 'Привилегированный клуб',
      description: 'Для постоянных посетителей предусмотрен индивидуальный подход, увеличенный процент возврата, закрытые турниры и особые подарки. Статус повышается пропорционально игровой активности.',
    },
    {
      emoji: '🛡️',
      title: 'Защита и 18+',
      description: 'Личная информация надёжно зашифрована. Мы соблюдаем принципы ответственной игры: устанавливаем депозитные лимиты, предоставляем возможность самоисключения, информируем о возможных рисках. Доступ только совершеннолетним пользователям.',
    },
  ];

  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 md:mb-10 text-center md:text-left leading-[1.3]">
          Ключевые преимущества Lucky Bear Casino
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantagesData.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 bg-[#0f172a]/60 backdrop-blur-[12px] border border-white/10 rounded-[16px] card-hover hover:bg-[#1e293b] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-white leading-[1.4] flex gap-2">
                  <span className="shrink-0">{item.emoji}</span>
                  <span>{item.title}</span>
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#94a3b8] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;