import React, { useState } from 'react';
import { X, Search, Flame, Plus, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'beef', label: 'Beef Burgers' },
    { id: 'smashed_chicken', label: 'Smashed Chicken' },
    { id: 'premium', label: 'Premium Burgers' },
    { id: 'crispy_chicken', label: 'Crispy Chicken' },
    { id: 'loaded_fries', label: 'Loaded Fries' },
    { id: 'combos', label: 'Meal Combos' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#121414] border border-white/10 rounded-lg max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-6 bg-[#171c26] border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[#60a5fa] font-label text-xs uppercase font-bold tracking-widest">
              Full Menu Catalog
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-[#e2e2e2]">
              Explore Clean Burger
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/40 rounded-full text-[#c4c6d1] hover:text-[#60a5fa]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 bg-[#0c0f0f] border-b border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-label text-xs uppercase font-bold px-3.5 py-2 rounded transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1a3875] text-white border border-[#3b82f6]/50 shadow'
                    : 'bg-[#1e2020] text-[#c4c6d1] hover:bg-[#282a2b]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#60a5fa] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, sides..."
              className="w-full bg-[#1e2020] border border-white/10 rounded pl-9 pr-3 py-2 text-xs text-white placeholder-[#c4c6d1]/50 focus:outline-none focus:border-[#1a3875]"
            />
          </div>
        </div>

        {/* Menu Grid Items */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.length === 0 ? (
            <div className="col-span-2 text-center py-16 text-[#c4c6d1]">
              <p className="font-display text-2xl uppercase text-white font-bold">
                No items found
              </p>
              <p className="text-xs font-body mt-1">Try another search term or category tab.</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#171c26] border border-white/10 rounded p-4 flex gap-4 hover:border-[#1a3875] transition-all group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain bg-[#121620] p-2 rounded shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-[#e2e2e2] group-hover:text-[#60a5fa] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-label text-base font-bold text-[#60a5fa] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#c4c6d1] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-[#c4c6d1]/60 font-body">
                      {item.calories ? `${item.calories} cal` : ''}
                    </span>
                    <span className="text-[10px] font-label text-[#60a5fa] uppercase font-bold">
                      Artisanal Recipe
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
