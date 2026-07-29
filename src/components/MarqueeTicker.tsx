import React from 'react';

const TICKER_ITEMS = [
  'FRESH DAILY',
  'HANDCRAFTED',
  'NO SHORTCUTS',
  'COIMBATORE MADE',
  'ARTISANAL BRIOCHE',
  '100% WAGYU BEEF',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="bg-[#1a3875] py-5 border-y border-[#2d56ab] shadow-inner overflow-hidden select-none">
      <div className="animate-marquee flex items-center">
        {/* Render repeated list twice for continuous looping */}
        {[...Array(4)].map((_, listIndex) => (
          <div key={listIndex} className="flex items-center shrink-0">
            {TICKER_ITEMS.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <span className="font-display text-xl md:text-3xl font-bold text-white uppercase tracking-wider mx-6">
                  {item}
                </span>
                <span className="text-[#60a5fa] text-lg md:text-2xl">★</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
