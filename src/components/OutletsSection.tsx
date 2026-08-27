import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { OUTLETS } from '../data/mockData';
import { Outlet } from '../types';

interface OutletsSectionProps {
  onSelectOutlet: (outlet: Outlet) => void;
  selectedOutletId: string;
}

export const OutletsSection: React.FC<OutletsSectionProps> = ({
  onSelectOutlet,
  selectedOutletId,
}) => {
  const navigate = useNavigate();

  const handleOutletClick = (outlet: Outlet) => {
    onSelectOutlet(outlet);
    navigate(`/locations/${outlet.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="outlets" className="py-20 md:py-28 px-4 md:px-10 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#60a5fa] font-label text-sm uppercase tracking-[0.25em] mb-3 block font-bold">
          Kerala Flagship Outlets
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-[#e2e2e2] tracking-tight">
          Our Outlets
        </h2>
        <p className="font-body text-lg text-[#c4c6d1] mt-3 max-w-lg mx-auto">
          Find the nearest Clean Burger in the city for dine-in, takeaway, or fast delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OUTLETS.map((outlet) => {
          const isSelected = outlet.id === selectedOutletId;
          const isComingSoon = outlet.status === 'Coming Soon';
          return (
            <div
              key={outlet.id}
              onClick={() => !isComingSoon && handleOutletClick(outlet)}
              aria-disabled={isComingSoon}
              className={`card-hover bg-[#171c26] border rounded p-3 group relative overflow-hidden transition-all ${
                isComingSoon
                  ? 'border-white/10 cursor-not-allowed'
                  : isSelected
                  ? 'border-[#1a3875] ring-2 ring-[#3b82f6]/50 shadow-xl shadow-[#1a3875]/30 bg-[#121c33] cursor-pointer'
                  : 'border-white/10 hover:border-[#1a3875] cursor-pointer'
              }`}
            >
              {/* Image Box */}
              <div className="relative overflow-hidden mb-5 aspect-[4/3] rounded bg-[#1e2020]">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className={`zoom-img w-full h-full object-cover ${isComingSoon ? 'blur-md scale-105 grayscale' : ''}`}
                  loading="lazy"
                />
                {isComingSoon && (
                  <div className="absolute inset-0 bg-[#0c0f0f]/60 flex items-center justify-center">
                    <span className="font-display text-xl font-bold uppercase text-white tracking-wider border border-white/30 rounded px-4 py-2 bg-[#0c0f0f]/70">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#0c0f0f]/80 backdrop-blur-md text-[#60a5fa] font-label text-xs font-bold px-3 py-1 rounded border border-[#3b82f6]/30 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full inline-block ${
                      isComingSoon ? 'bg-amber-400' : 'bg-emerald-400 animate-ping'
                    }`}
                  />
                  {outlet.status}
                </div>
                {isSelected && !isComingSoon && (
                  <div className="absolute top-3 right-3 bg-[#1a3875] text-white font-label text-xs font-bold px-2.5 py-1 rounded border border-[#3b82f6]/50 uppercase tracking-wider">
                    Selected Location
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className={`p-3 ${isComingSoon ? 'opacity-60' : ''}`}>
                <h3 className="font-display text-2xl font-bold text-[#e2e2e2] mb-2 flex items-center justify-between">
                  <span>{outlet.name}</span>
                </h3>
                <p className="text-[#c4c6d1] font-body text-sm mb-5 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0 mt-1" />
                  <span>{outlet.address}</span>
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs text-[#c4c6d1] flex items-center gap-1 font-body">
                    <Clock className="w-3.5 h-3.5 text-[#60a5fa]" /> {outlet.hours}
                  </span>
                  {isComingSoon ? (
                    <span className="text-xs text-[#c4c6d1] font-label font-bold uppercase">
                      Opening Soon
                    </span>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 text-[#60a5fa] font-label font-bold text-sm uppercase group-hover:gap-3 transition-all">
                      View Outlet <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
