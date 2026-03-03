import React from 'react';

const RegistrationGuide = () => {
  return (
    <section className="py-[60px] px-0">
      <div className="max-w-[1200px] mx-auto px-4 text-center md:text-left">
        <h2 className="text-[28px] font-bold leading-[1.3] text-white mb-8">
          Как начать играть: Регистрация и Вход
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Registration */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] flex flex-col transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🚀</span> Быстрая Регистрация
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3] mb-8 flex-grow">
              Создайте аккаунт за 10 секунд! Достаточно указать базовые данные или войти через социальные сети. После регистрации вас ждет приятный бонус на первый депозит.
            </p>
            <div className="mt-auto">
              <a 
                href="/reg.html" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#3682ff] hover:bg-[#2a71e0] text-white font-semibold rounded-[25px] transition-all duration-200 text-center"
              >
                Зарегистрироваться
              </a>
            </div>
          </div>

          {/* Card 2: Authorization */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] flex flex-col transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔑</span> Вход в Кабинет
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3] mb-8 flex-grow">
              Уже есть аккаунт на Lucky Bear? Просто введите свой логин и пароль для доступа к балансу и любимым играм. Все данные надежно защищены.
            </p>
            <div className="mt-auto">
              <a 
                href="/reg.html" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1d2939] hover:bg-[#2a394d] border border-[#2a394d] text-white font-semibold rounded-[25px] transition-all duration-200 text-center"
              >
                Войти на сайт
              </a>
            </div>
          </div>

          {/* Card 3: Mirror Access */}
          <div className="bg-[#0a1428] border border-[#1d2939] rounded-[12px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] flex flex-col transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-[18px] font-semibold leading-[1.4] text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔗</span> Рабочее Зеркало
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#98a2b3] mb-8 flex-grow">
              Если основной сайт недоступен, используйте актуальное зеркало Lucky Bear. Мы постоянно обновляем ссылки для бесперебойного доступа к играм 24/7.
            </p>
            <div className="mt-auto">
              <a 
                href="/reg.html" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1d2939] hover:bg-[#2a394d] border border-[#2a394d] text-white font-semibold rounded-[25px] transition-all duration-200 text-center"
              >
                Актуальная ссылка
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationGuide;
