import React from 'react';

const MobileSupport = () => {
  return (
    <footer className="w-full bg-[#1a1f29] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Mobile Version Section */}
        <section className="mb-20">
          <h2 className="text-[32px] font-bold text-white mb-8 text-left border-l-4 border-[#2b87f9] pl-6">
            Мобильное Приложение Lucky Bear: Играй Где Угодно
          </h2>
          <div className="space-y-6">
            <p className="text-[#e2e8f0] text-[18px] leading-relaxed">
              Скачайте официальное приложение Лаки Бир на свой смартфон и получите доступ к любимым слотам в один клик. Наше приложение оптимизировано для всех современных устройств и работает даже при медленном интернете.
            </p>
            <div className="bg-[#242b38] p-8 rounded-[20px] border border-[#343d4d] shadow-xl">
              <p className="font-bold text-white text-[20px] mb-4">Преимущества мобильной платформы:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#cbd5e1]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2b87f9]" />
                  Полная синхронизация с вашим аккаунтом
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2b87f9]" />
                  Мгновенная загрузка игр без ожиданий
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2b87f9]" />
                  Удобный интерфейс для управления одной рукой
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2b87f9]" />
                  Эксклюзивные бонусы только для мобильных игроков
                </li>
              </ul>
            </div>
            <p className="text-[#cbd5e1] text-[17px] italic">
              Приложение доступно для Android и iOS (через PWA). Скачивайте APK-файл только с нашего официального сайта.
            </p>
          </div>
        </section>

        {/* Support Service Section */}
        <section className="mb-20">
          <h2 className="text-[32px] font-bold text-white mb-8 text-left border-l-4 border-[#2b87f9] pl-6">
            Служба Поддержки 24/7
          </h2>
          <div className="space-y-6">
            <p className="text-[#e2e8f0] text-[18px] leading-relaxed">
              Команда техподдержки Lucky Bear всегда на связи, чтобы помочь вам с любым вопросом. Мы ценим ваше время и отвечаем в кратчайшие сроки:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Live-чат', desc: 'Мгновенные ответы прямо на сайте' },
                { title: 'Telegram', desc: 'Удобная связь через мессенджер' },
                { title: 'Email', desc: 'Для подробных запросов' },
                { title: 'FAQ', desc: 'База знаний для быстрых ответов' },
              ].map((support, idx) => (
                <div key={idx} className="bg-[#242b38] p-6 rounded-xl border border-[#343d4d] text-center hover:border-[#2b87f9] transition-all">
                  <h3 className="text-white font-bold text-lg mb-2">{support.title}</h3>
                  <p className="text-[#9da5b1] text-sm">{support.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#9da5b1] text-base pt-2 font-medium">
              Среднее время ожидания ответа оператора — менее 2 минут.
            </p>
          </div>
        </section>

        {/* Final Information Text */}
        <div className="mb-20 space-y-8 bg-gradient-to-r from-[#242b38] to-[#1a1f29] p-10 rounded-[20px] border border-[#343d4d]">
          <p className="text-[#cbd5e1] text-[16px] leading-relaxed">
            Лаки Бир Казино — это ваш надежный проводник в мире азарта. Мы объединили лучшие игровые автоматы от мировых лидеров гемблинг-индустрии, создали честную бонусную систему и обеспечили максимальный комфорт для каждого игрока. С нашими актуальными зеркалами вы всегда будете иметь доступ к своим любимым играм, а мгновенные выплаты позволят вам наслаждаться победами без задержек.
          </p>
          <div className="text-center italic text-[#2b87f9] text-xl font-bold uppercase tracking-widest">
            УДАЧА НА СТОРОНЕ СМЕЛЫХ — ИГРАЙ И ПОБЕЖДАЙ В LUCKY BEAR!
          </div>
        </div>

        {/* Legal & Responsible Gaming Footer */}
        <div className="border-t border-[#343d4d] pt-10 mt-10 text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-8 mb-2">
              <span className="text-2xl font-black border-4 border-[#343d4d] rounded-full w-14 h-14 flex items-center justify-center text-[#2b87f9]">18+</span>
              <div className="text-[#9da5b1] text-sm uppercase font-bold tracking-[0.2em]">
                BeGambleAware.org
              </div>
            </div>
            <p className="text-[#9da5b1] text-sm max-w-4xl mx-auto leading-relaxed opacity-60">
              Игра в казино должна быть развлечением. Пожалуйста, играйте ответственно и устанавливайте лимиты на свои депозиты. Lucky Bear — информационный ресурс, мы не принимаем ставки и не проводим игры на реальные деньги. Все ссылки ведут на официальные платформы партнеров.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4">
              <a href="#" className="text-[#9da5b1] hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">Соглашение</a>
              <a href="#" className="text-[#9da5b1] hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">Конфиденциальность</a>
              <a href="#" className="text-[#9da5b1] hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">Ответственная игра</a>
              <a href="#" className="text-[#9da5b1] hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">Контакты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileSupport;