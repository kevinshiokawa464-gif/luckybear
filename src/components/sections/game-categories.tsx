import React from 'react';

/**
 * GameCategories component
 */
const GameCategories: React.FC = () => {
  const categories = [
    {
      emoji: '🃏',
      tag: 'Live',
      name: 'Лайв Столы',
      goal: 'slot_live',
      href: '/reg.html'
    },
    {
      emoji: '🎰',
      tag: 'Слоты',
      name: 'Классические Игры',
      goal: 'slot_classic',
      href: '/reg.html'
    },
    {
      emoji: '⚡',
      tag: 'Турбо',
      name: 'Турбо-Режим',
      goal: 'slot_turbo',
      href: '/reg.html'
    },
    {
      emoji: '✨',
      tag: 'Бонусы',
      name: 'Бонусные Игры',
      goal: 'slot_bonus',
      href: '/reg.html'
    }
  ];

  return (
    <section className="py-[60px] px-4 md:px-0 max-w-[1200px] mx-auto overflow-hidden">
      <h2 className="text-[28px] font-bold leading-[1.3] text-white mb-6 text-center md:text-left">
        Популярные Игры Lucky Bear
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            data-goal={category.goal}
            className="js-cta group relative flex flex-col justify-between p-6 bg-[#0a1428] rounded-[12px] border border-[#1d2939] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] active:scale-[0.98]"
            style={{
              backgroundColor: 'rgba(10, 20, 40, 1)',
              borderColor: 'rgba(29, 41, 57, 1)',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[24px] leading-none select-none">
                {category.emoji}
              </span>
              <span className="text-[13px] text-[#98a2b3] leading-none">
                {category.tag}
              </span>
            </div>
            <div className="text-[18px] font-semibold text-white leading-[1.4]">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GameCategories;
