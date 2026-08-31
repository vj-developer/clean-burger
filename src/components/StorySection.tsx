import React, { useState } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { INSTAGRAM_IMAGES } from '../data/mockData';

interface StorySectionProps {
  onOpenCareers: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenCareers }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + INSTAGRAM_IMAGES.length) % INSTAGRAM_IMAGES.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % INSTAGRAM_IMAGES.length);
    }
  };

  return (
    <section id="story" className="py-20 md:py-28 px-4 md:px-10 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Story Text Column */}
        <div>
          <span className="text-[#60a5fa] font-label text-sm uppercase tracking-[0.3em] mb-3 block font-bold">
            Artisanal Heritage
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#e2e2e2] mb-8 leading-tight">
            London-Inspired, <br />
            <span className="text-[#60a5fa]">Quality-Driven.</span>
          </h2>

          <div className="space-y-6 text-[#c4c6d1] font-body text-base md:text-lg leading-relaxed">
            <p>
              Clean Burger was born from a passion for authentic, flavourful food and a commitment to quality. Inspired by our founder's experience in London's food industry, we bring the art of the smashed burger using quality grass-fed beef, with no compromise on taste or hygiene.
            </p>
            <p>
              Our menu features signature smashed burgers, crispy fried chicken burgers, and loaded fries, all prepared with care and quality ingredients. At Clean Burger, "clean" means quality, freshness, and high standards in every bite. London-inspired. Quality-driven. No compromise.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-[#60a5fa]">10k+</div>
              <div className="text-xs font-label uppercase tracking-widest text-[#c4c6d1] mt-1 font-bold">
                Burgers Served
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-[#60a5fa]">03</div>
              <div className="text-xs font-label uppercase tracking-widest text-[#c4c6d1] mt-1 font-bold">
                City Locations
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <button
                onClick={onOpenCareers}
                className="text-xs font-label uppercase tracking-widest text-[#60a5fa] hover:underline font-bold"
              >
                Join Our Kitchen Team →
              </button>
            </div>
          </div>
        </div>

        {/* 3x3 Instagram Gallery Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-label text-[#c4c6d1] uppercase tracking-widest flex items-center gap-1.5 font-semibold">
              <Instagram className="w-4 h-4 text-[#60a5fa]" /> @CleanBurger.Cbe
            </span>
            <span className="text-xs text-[#c4c6d1]/60 font-body">Tap to view high-res</span>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-[#1e2020] p-2 rounded border border-white/10">
            {INSTAGRAM_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className="aspect-square bg-[#0c0f0f] overflow-hidden rounded cursor-pointer group relative"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${img.url}')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#1e2020] border border-white/10 rounded overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:text-[#60a5fa] rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-square max-h-[70vh] bg-black">
              <img
                src={INSTAGRAM_IMAGES[selectedImageIndex].url}
                alt={INSTAGRAM_IMAGES[selectedImageIndex].caption}
                className="w-full h-full object-contain"
              />
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white hover:text-[#60a5fa] rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white hover:text-[#60a5fa] rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 flex items-center justify-between bg-[#121414]">
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#60a5fa]" />
                <span className="font-label text-sm text-[#e2e2e2] font-semibold">
                  {INSTAGRAM_IMAGES[selectedImageIndex].caption}
                </span>
              </div>
              <span className="text-xs font-label text-[#c4c6d1]">
                {selectedImageIndex + 1} / {INSTAGRAM_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
