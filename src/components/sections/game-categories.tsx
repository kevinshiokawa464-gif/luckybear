import React from 'react';

const GameCategories = () => {
  const categories = [
    {
      icon: '🃏',
      tag: 'Live',
      name: 'Live Tables',
      href: '/reg.html',
      goal: 'slot_live',
    },
    {
      icon: '🎰',
      tag: 'Классика',
      name: 'Classic Slots',
      href: '/reg.html',
      goal: 'slot_classic',
    },
    {
      icon: '⚡',
      tag: 'Турбо',
      name: 'Turbo Mode',
      href: '/reg.html',
      goal: 'slot_turbo',
    },
    {
      icon: '✨',
      tag: 'Бонусные',
      name: 'Bonus Games',
      href: '/reg.html',
      goal: 'slot_bonus',
    },
  ];

  return (
    <section className="section py-[40px] md:py-[80px]">
      <div className="container mx-auto px-[16px] max-w-[1200px]">
        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-[24px] leading-[1.3]">
          Популярные категории игр
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              data-goal={category.goal}
              className="js-cta group flex flex-col justify-between h-full p-[24px] bg-[#0f172a] border border-[#1e293b] rounded-[16px] transition-all duration-300 hover:bg-[#1e293b] hover:border-white/20 hover:-translate-y-1 block"
            >
              <div className="flex justify-between items-center mb-[32px]">
                <span className="text-[28px] leading-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300">
                  {category.icon}
                </span>
                <span className="text-[12px] font-medium text-white/50 bg-white/5 px-[10px] py-[4px] rounded-[999px] group-hover:text-white/80 group-hover:bg-white/10 transition-colors">
                  {category.tag}
                </span>
              </div>
              <div className="text-[20px] font-semibold text-white leading-[1.4] transition-colors">
                {category.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          display: block;
        }
        .container {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </section>
  );
};

export default GameCategories;