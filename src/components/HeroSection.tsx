import React from 'react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onFindLocal: () => void;
  onViewMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFindLocal, onViewMenu }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f2452] pt-20">
      {/* Background Image with Dark Navy & Amber Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/65 to-[#0f2452]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#121414]/30 to-[#121414]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <span className="inline-block bg-[#1a3875]/80 text-white border border-[#305fbf] font-label text-xs md:text-sm font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6 shadow-lg shadow-[#1a3875]/30">
          Urban Speed • Artisanal Quality
        </span>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold uppercase leading-none mb-6 text-[#e2e2e2] tracking-tight">
          The New Standard <br />
          <span className="text-[#60a5fa]">of Burgers</span>
        </h1>

        <p className="font-body text-base md:text-xl text-[#c4c6d1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Experience the intersection of urban speed and artisanal craftsmanship. Our burgers are handcrafted daily using 100% grass-fed beef and locally sourced greens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onFindLocal}
            className="w-full sm:w-auto bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label text-lg font-bold px-10 py-4 rounded hover:shadow-[0_0_25px_rgba(26,56,117,0.6)] transition-all uppercase tracking-wider active:scale-95 shadow-xl shadow-[#1a3875]/40"
          >
            Find My Local
          </button>
          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto border-2 border-[#1a3875] bg-[#1a3875]/20 text-white font-label text-lg font-bold px-10 py-4 rounded hover:bg-[#1a3875] transition-all uppercase tracking-wider active:scale-95"
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Wavy Drip SVG Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        <svg
          className="relative block w-full h-[50px] md:h-[70px] fill-[#121414]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.51,22.43-10.89,44.67-30.44,55.14-53.7V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,52.93,23.11,106.65,47.81,168.34,44,117-7.28,211-100,262.67-100V0Z" />
        </svg>
      </div>
    </section>
  );
};
