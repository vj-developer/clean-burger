import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Flame, Sparkles, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onExploreFullMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onExploreFullMenu,
}) => {
  const navigate = useNavigate();
  // Select signature items to feature on main lineup
  const featuredItems = MENU_ITEMS.filter((item) => item.popular).slice(0, 3);

  return (
    <section id="lineup" className="bg-[#0c0f0f] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#60a5fa] font-label text-sm uppercase tracking-[0.25em] mb-2 block font-bold">
              Artisanal Craftsmanship
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-[#e2e2e2] tracking-tight">
              The Lineup
            </h2>
            <p className="font-body text-lg text-[#c4c6d1] mt-3">
              Our signature creations, engineered for the perfect bite.
            </p>
          </div>

          <button
            onClick={() => {
              navigate('/menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label font-bold text-sm md:text-base px-8 py-4 rounded uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#1a3875]/40"
          >
            Explore Full Menu
          </button>
        </div>

        {/* Lineup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              {/* Product Card Container */}
              <div className="relative mb-6 overflow-hidden aspect-square bg-[#171c26] p-6 rounded flex items-center justify-center border border-white/10 group-hover:border-[#1a3875] transition-all">
                <img
                  src={item.image}
                  alt={item.name}
                  className="zoom-img object-contain h-full w-full max-h-[85%] drop-shadow-2xl"
                  loading="lazy"
                />

                {/* Price Tag Pill */}
                <div className="absolute top-4 right-4 bg-[#1a3875] text-white border border-[#3b82f6]/40 font-label text-base font-bold px-3.5 py-1 rounded shadow-md">
                  ₹{item.price}
                </div>

                {/* Badge if present */}
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-[#1a3875] text-white border border-[#305fbf] font-label text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1 shadow">
                    {item.badge === 'Hot' ? (
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                    ) : item.badge === "Chef's Choice" ? (
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    )}
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#e2e2e2] mb-2 group-hover:text-[#60a5fa] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#c4c6d1] font-body text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#c4c6d1]/70 font-body">
                    {item.calories} Calories
                  </span>
                  <span className="text-xs font-label uppercase font-semibold text-[#60a5fa]">
                    Kerala Signature
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
