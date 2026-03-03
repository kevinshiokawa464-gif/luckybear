import React from 'react';
import { TARGET_URL } from '@/app/constants';

const MobileSupport = () => {
  return (
    <footer className="w-full bg-[#1a1f29] pt-24 pb-12 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Mobile Version Section */}
        <section className="mb-24 relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
          <h2 className="text-[38px] md:text-[52px] font-black text-white mb-10 text-left border-l-8 border-blue-600 pl-10 uppercase italic tracking-tighter">
            МОБИЛЬНОЕ <span className="text-blue-500 underline decoration-4 decoration-blue-500/50">КАЗИНО</span> В КАРМАНЕ
          </h2>
          <div className="space-y-8">
            <p className="text-[#e2e8f0] text-[20px] leading-relaxed max-w-[950px] font-medium">
              Скачивайте официальное приложение Лаки Бир на свой смартфон и получите полный доступ к любимым слотам в один клик. Наше мобильное приложение luckybear casino официальный сайт оптимизировано для работы на всех современных устройствах, включая Android и iOS.
            </p>
            <div className="bg-gradient-to-br from-[#242b38] to-[#1e2532] p-10 rounded-[32px] border-2 border-[#343d4d] shadow-2xl hover:border-blue-500 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 group-hover:scale-110 transition-transform pointer-events-none">📱</div>
              <p className="font-black text-white text-[24px] mb-8 uppercase tracking-tighter flex items-center gap-3">
                 ⚡ ПРЕИМУЩЕСТВА ПЛАТФОРМЫ:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#cbd5e1] font-bold text-lg">
                {[
                   'Полная синхронизация всех данных аккаунта',
                   'Мгновенный запуск любых игр без ожиданий',
                   'Адаптивный интерфейс для управления пальцем',
                   'Эксклюзивные бонусы только в приложении',
                   'Обход любых блокировок автоматически',
                   'Защищенные платежи в один клик'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/li">
                    <span className="w-4 h-4 rounded-lg bg-blue-600 flex-shrink-0 group-hover/li:rotate-45 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[#cbd5e1] text-[18px] italic font-medium bg-[#1e2532] px-6 py-4 rounded-xl border border-white/5 inline-block">
               Приложение Лаки Бир доступно для Android и iOS (через PWA). Скачивайте официальный APK-файл только по нашим проверенным ссылкам.
            </p>
          </div>
        </section>

        {/* Support Service Section */}
        <section className="mb-24">
          <h2 className="text-[38px] md:text-[52px] font-black text-white mb-10 text-left border-l-8 border-blue-600 pl-10 uppercase italic tracking-tighter">
            ПОДДЕРЖКА <span className="text-blue-500 underline decoration-4 decoration-blue-500/50">24/7</span> БЕЗ ВЫХОДНЫХ
          </h2>
          <div className="space-y-10">
            <p className="text-[#e2e8f0] text-[20px] leading-relaxed max-w-[950px] font-medium">
              Команда техподдержки Lucky Bear всегда на связи, чтобы помочь вам с любым вопросом. Мы ценим ваше время и отвечаем в кратчайшие сроки через любые удобные каналы связи:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Live-чат', desc: 'Ответ на сайте за 30 секунд', icon: '💬' },
                { title: 'Telegram', desc: 'Наш лакибир тг бот всегда онлайн', icon: '✈️' },
                { title: 'Email', desc: 'Для подробных запросов 24/7', icon: '📧' },
                { title: 'База Знаний', desc: 'Ответы на все частые вопросы', icon: '📚' },
              ].map((support, idx) => (
                <div key={idx} className="bg-[#1e2532] p-8 rounded-[24px] border-2 border-[#343d4d] text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-500 shadow-xl group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{support.icon}</div>
                  <h3 className="text-white font-black text-[22px] mb-3 uppercase tracking-tighter">{support.title}</h3>
                  <p className="text-[#9da5b1] text-md font-bold leading-snug">{support.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20 max-w-[600px] mx-auto">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">?</div>
               <p className="text-white text-lg font-bold leading-tight">
                  Среднее время ожидания ответа оператора — менее 2 минут. Мы решим вашу проблему моментально!
               </p>
            </div>
          </div>
        </section>

        {/* Final Information Text */}
        <div className="mb-24 space-y-10 bg-gradient-to-r from-[#1e2532] to-[#1a1f29] p-12 rounded-[40px] border-2 border-[#343d4d] shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 text-[200px] opacity-5 group-hover:rotate-12 transition-transform pointer-events-none">🐻</div>
          <p className="text-[#cbd5e1] text-[18px] md:text-[20px] leading-relaxed font-bold relative z-10 italic">
            Лаки Бир Казино — это ваш надежный проводник в мире гемблинга. Мы объединили лучшие игровые автоматы от мировых лидеров, создали честную бонусную систему и обеспечили максимальный комфорт. С нашими актуальными зеркалами вы всегда будете иметь доступ к играм, а мгновенные выплаты позволят наслаждаться победами без задержек. Игровые автоматы luckybear casino ждут своих чемпионов!
          </p>
          <div className="text-center italic text-blue-500 text-3xl font-black uppercase tracking-[0.2em] relative z-10 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] animate-pulse">
            ТВОЯ ПОБЕДА НАЧИНАЕТСЯ ЗДЕСЬ — В LUCKY BEAR!
          </div>
        </div>

        {/* Legal & Responsible Gaming Footer */}
        <div className="border-t-2 border-[#343d4d] pt-12 mt-12 text-center">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex items-center gap-10 mb-2">
              <span className="text-3xl font-black border-4 border-blue-600/30 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 shadow-inner">18+</span>
              <div className="text-gray-500 text-xs font-black uppercase tracking-[0.4em]">
                BeGambleAware.org
              </div>
            </div>
            <p className="text-[#9da5b1] text-md max-w-4xl mx-auto leading-relaxed font-bold opacity-30">
              Игра в казино должна быть развлечением. Пожалуйста, играйте ответственно и устанавливайте лимиты. Lucky Bear — информационный ресурс, мы не принимаем ставки. Все ссылки ведут на официальные платформы партнеров.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-6">
              {[
                { label: 'Соглашение', url: TARGET_URL },
                { label: 'Конфиденциальность', url: TARGET_URL },
                { label: 'Ответственная игра', url: TARGET_URL },
                { label: 'Контакты', url: TARGET_URL }
              ].map((link, i) => (
                 <a key={i} href={link.url} className="text-[#9da5b1] hover:text-white text-xs font-black transition-all uppercase tracking-[0.2em] hover:scale-110 active:scale-95">
                    {link.label}
                 </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileSupport;
