import React from 'react';

const EntranceInfo = () => {
  return (
    <section className="bg-background py-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-6">
          <h3 className="text-[24px] font-semibold text-foreground leading-[1.4] font-display">
            Как Войти в Lucky Bear: Регистрация и Доступ
          </h3>
          
          <div className="space-y-4">
            <p className="text-[16px] text-secondary-foreground leading-[1.6]">
              Процесс входа на платформу максимально упрощен. Для начала игры потребуется пройти быструю регистрацию через один из доступных способов:
            </p>
            
            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-[16px] text-secondary-foreground leading-[1.6]">
                <span className="mr-3 mt-[10px] h-[4px] w-[4px] min-w-[4px] rounded-full bg-secondary-foreground" />
                <span>
                  Через <span className="text-foreground">Telegram</span> — авторизация за несколько секунд без заполнения форм
                </span>
              </li>
              <li className="flex items-start text-[16px] text-secondary-foreground leading-[1.6]">
                <span className="mr-3 mt-[10px] h-[4px] w-[4px] min-w-[4px] rounded-full bg-secondary-foreground" />
                <span>
                  Через <span className="text-foreground">Google-аккаунт</span> — мгновенный доступ с использованием существующего профиля
                </span>
              </li>
              <li className="flex items-start text-[16px] text-secondary-foreground leading-[1.6]">
                <span className="mr-3 mt-[10px] h-[4px] w-[4px] min-w-[4px] rounded-full bg-secondary-foreground" />
                <span>
                  Стандартная регистрация — указание email и создание пароля
                </span>
              </li>
            </ul>

            <p className="text-[16px] text-secondary-foreground leading-[1.6] pt-2">
              После регистрации открывается доступ ко всем функциям казино Лаки Бир: депозиту в рублях, бонусным программам и полному каталогу игр. Вход осуществляется через официальный сайт или актуальное зеркало.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntranceInfo;