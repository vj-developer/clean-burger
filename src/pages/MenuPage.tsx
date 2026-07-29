import React from 'react';
import { Star, Flame, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';

interface MenuPageProps {
  onOpenMenuModal?: () => void;
  onOpenCareers?: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = () => {
  const sections = [
    {
      title: 'BEEF BURGERS',
      subtitle: '100% Grass-Fed Beef • Seared Fresh Daily',
      category: 'beef',
    },
    {
      title: 'SMASHED CHICKEN BURGERS',
      subtitle: 'Crispy Edges • Juicy Smash Center',
      category: 'smashed_chicken',
    },
    {
      title: 'PREMIUM BURGERS',
      subtitle: 'Signature Gourmet Creations',
      category: 'premium',
    },
    {
      title: 'CRISPY CHICKEN BURGERS',
      subtitle: 'Hand-Breaded • Golden Perfection',
      category: 'crispy_chicken',
    },
    {
      title: 'LOADED FRIES',
      subtitle: 'Skin-On Golden Fries • House Cheese & Toppings',
      category: 'loaded_fries',
    },
    {
      title: 'MAKE IT A MEAL',
      subtitle: 'Combo Upgrade • Great Value',
      category: 'combos',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d12] text-[#e2e2e2] font-body selection:bg-[#1a3875] selection:text-white pt-24">
      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-[#1a3875] border border-[#3b82f6]/40 text-[#93c5fd] font-label text-xs uppercase tracking-[0.25em] px-4 py-1 rounded-full mb-4 font-bold shadow">
          Made Fresh, Made Clean
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-4">
          CLEAN BURGER MENU
        </h1>
        <p className="font-body text-sm md:text-base text-[#a0a7be] max-w-2xl mx-auto leading-relaxed">
          Premium Burgers • Fresh Ingredients • Great Value in Kerala. Engineered for the ultimate taste experience.
        </p>
      </section>

      {/* Blue Marquee Bar */}
      <div className="bg-[#1a3875] border-y border-[#2d4782] py-3.5 text-white font-label font-bold text-xs uppercase tracking-widest overflow-hidden select-none shadow-md">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="mx-6 text-white">MADE FRESH DAILY</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">PREMIUM INGREDIENTS</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">GREAT VALUE</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">KALLAMBALAM, KERALA</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
            </div>
          ))}
        </div>
      </div>

      {/* Light Container Section */}
      <main className="bg-[#cfdcfa] text-[#0d1629] py-16 px-4 md:px-10 relative">
        <div className="max-w-[1280px] mx-auto space-y-20">
          {sections.map((sec) => {
            const items = MENU_ITEMS.filter((item) => item.category === sec.category);
            if (items.length === 0) return null;

            return (
              <section key={sec.category} id={sec.category}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-3 border-b-2 border-[#0a152e]/15 gap-2">
                  <div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0a152e]">
                      {sec.title}
                    </h2>
                    <p className="font-label text-xs uppercase tracking-wider font-semibold text-[#1a3875] mt-1">
                      {sec.subtitle}
                    </p>
                  </div>
                  <span className="font-label text-xs font-bold text-[#0a152e]/60 uppercase">
                    {items.length} {items.length === 1 ? 'Option' : 'Options'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white flex flex-col justify-between shadow-xl group hover:border-[#3b82f6]/50 transition-all"
                    >
                      <div className="relative aspect-[4/3] bg-black overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.badge && (
                          <div className="absolute top-3 left-3 bg-[#1a3875] text-white border border-[#3b82f6]/40 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow flex items-center gap-1">
                            {item.isSpicy ? (
                              <Flame className="w-3 h-3 text-orange-400 fill-current" />
                            ) : (
                              <Sparkles className="w-3 h-3 text-amber-300 fill-current" />
                            )}
                            {item.badge}
                          </div>
                        )}
                        <div className="absolute bottom-3 right-3 bg-[#1a3875] text-white border border-[#3b82f6]/50 font-display text-xl font-bold px-3 py-1 rounded shadow-lg">
                          ₹{item.price}
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2 gap-2">
                            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#60a5fa] transition-colors">
                              {item.name}
                            </h3>
                          </div>
                          <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        {item.calories && (
                          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-label text-[#82a4ed]">
                            <span>{item.calories} CAL</span>
                            <span className="uppercase tracking-wider font-semibold">CLEAN QUALITY</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};
