import React from 'react';

const AuthMethods = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-[1100px]">
        {/* Section Title */}
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-8">
          Регистрация и вход — максимально быстро
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Registration Card */}
          <div className="bg-[#0f172a] bg-opacity-40 backdrop-blur-md border border-white/10 rounded-[20px] p-6 flex flex-col transition-all duration-300 hover:bg-opacity-60 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🧾</span> Регистрация в Lucky bear casino
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-grow">
              Присоединяетесь впервые? Заполните короткую форму: придумайте логин, укажите пароль и адрес электронной почты. Подтверждение по почте необязательно, но рекомендуется для дополнительной защиты аккаунта.
            </p>
            <a
              href="/reg.html"
              className="mt-auto bg-[#1d4ed8] hover:bg-[#3b82f6] text-white font-semibold py-3 px-6 rounded-[12px] text-center text-sm transition-colors duration-300"
            >
              Создать аккаунт
            </a>
          </div>

          {/* Authorization Card */}
          <div className="bg-[#0f172a] bg-opacity-40 backdrop-blur-md border border-white/10 rounded-[20px] p-6 flex flex-col transition-all duration-300 hover:bg-opacity-60 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🔐</span> Авторизация в Лаки бир казино
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-grow">
              У вас уже есть профиль? Введите свои данные для входа. При утере пароля воспользуйтесь функцией сброса через электронную почту или свяжитесь со службой поддержки.
            </p>
            <a
              href="/reg.html"
              className="mt-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-[12px] text-center text-sm border border-white/5 transition-colors duration-300"
            >
              Войти в кабинет
            </a>
          </div>

          {/* Mirror/Backup Access Card */}
          <div className="bg-[#0f172a] bg-opacity-40 backdrop-blur-md border border-white/10 rounded-[20px] p-6 flex flex-col transition-all duration-300 hover:bg-opacity-60 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🧭</span> Запасные способы входа
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-grow">
              При временных неполадках с основным адресом воспользуйтесь зеркальным сайтом. Зеркало - рабочая ссылка ведёт на ту же защищённую платформу с полным функционалом.
            </p>
            <a
              href="/reg.html"
              className="mt-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-[12px] text-center text-sm border border-white/5 transition-colors duration-300"
            >
              Использовать зеркало
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthMethods;