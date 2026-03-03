import React from 'react';

const MobileSupport = () => {
  return (
    <footer className="w-full bg-[#1a1f29] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Mobile Version Section */}
        <section className="mb-20">
          <h2 className="text-[32px] font-semibold text-white mb-6 text-left">
            Мобильная Версия и Приложение
          </h2>
          <div className="space-y-4">
            <p className="text-[#9da5b1] text-base leading-relaxed">
              Лаки Бир адаптирован для смартфонов и планшетов. Мобильная версия открывается в браузере и сохраняет полный функционал десктопной версии.
            </p>
            <div className="text-white space-y-2">
              <p className="font-medium text-white">Преимущества мобильной платформы:</p>
              <ul className="list-disc list-inside text-[#9da5b1] space-y-1 ml-2">
                <li>Игра в любом месте с доступом к интернету</li>
                <li>Идентичный интерфейс и возможности</li>
                <li>Быстрая загрузка слотов</li>
                <li>Удобное управление одной рукой</li>
                <li>Синхронизация с десктопной версией</li>
              </ul>
            </div>
            <p className="text-[#9da5b1] text-base">
              Для Android доступно APK-приложение, которое можно скачать с официального сайта.
            </p>
          </div>
        </section>

        {/* Support Service Section */}
        <section className="mb-20">
          <h2 className="text-[32px] font-semibold text-white mb-6 text-left">
            Служба Поддержки
          </h2>
          <div className="space-y-4">
            <p className="text-[#9da5b1] text-base">
              Техподдержка Lucky Bear работает круглосуточно и оперативно решает вопросы игроков:
            </p>
            <ul className="list-disc list-inside text-[#9da5b1] space-y-2 ml-2">
              <li><strong className="text-white">Live-чат</strong> — мгновенные ответы на сайте</li>
              <li><strong className="text-white">Telegram-боты</strong> — несколько каналов для связи</li>
              <li><strong className="text-white">Email</strong> — для детальных обращений</li>
              <li><strong className="text-white">FAQ</strong> — ответы на частые вопросы</li>
            </ul>
            <p className="text-[#9da5b1] text-base pt-2">
              Среднее время ответа составляет 2-5 минуты.
            </p>
          </div>
        </section>

        {/* Final Information Text */}
        <div className="mb-20 space-y-6">
          <p className="text-[#9da5b1] text-[15px] leading-relaxed">
            Казино Lucky Bear объединяет качественный игровой контент от топовых провайдеров, щедрую бонусную систему и удобство использования. Платформа ориентирована на российских пользователей с поддержкой рублей, локализованным интерфейсом и актуальными зеркалами для стабильного доступа. Регистрация занимает меньше минуты, а приветственные бонусы позволяют начать игру с дополнительным капиталом.
          </p>
          <div className="text-center italic text-white/80 text-lg mt-10">
            Помните об ответственной игре и устанавливайте лимиты на депозиты.
          </div>
        </div>

        {/* Legal & Responsible Gaming Footer */}
        <div className="border-t border-[#343d4d] pt-10 mt-10 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-6 mb-2">
              <span className="text-xl font-bold border-2 border-[#343d4d] rounded-full w-10 h-10 flex items-center justify-center text-[#9da5b1]">18+</span>
              <div className="text-[#9da5b1] text-sm uppercase tracking-widest">
                Responsible Gaming
              </div>
            </div>
            <p className="text-[#9da5b1] text-sm max-w-3xl mx-auto leading-relaxed opacity-70">
              18+. Играйте ответственно. Мы — аффилиат и не являемся оператором азартных игр. Все права защищены. Сайт несет информационный характер и не призывает к азартным играм.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
              <a href="#" className="text-[#9da5b1] hover:text-[#2b87f9] text-xs transition-colors">Пользовательское соглашение</a>
              <a href="#" className="text-[#9da5b1] hover:text-[#2b87f9] text-xs transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-[#9da5b1] hover:text-[#2b87f9] text-xs transition-colors">Ответственная игра</a>
              <a href="#" className="text-[#9da5b1] hover:text-[#2b87f9] text-xs transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileSupport;