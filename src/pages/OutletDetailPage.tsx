import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Clock,
  Phone,
  MapPin,
  Compass,
  Navigation,
  ExternalLink,
  Flame,
  Award,
  Sparkles,
  Search,
  Send,
  Globe,
  Share2
} from 'lucide-react';
import { OUTLETS, MENU_ITEMS } from '../data/mockData';
import { Outlet, MenuItem } from '../types';

interface OutletDetailPageProps {
  onOpenMenuModal: () => void;
  onOpenCareers: () => void;
}

export const OutletDetailPage: React.FC<OutletDetailPageProps> = ({
  onOpenMenuModal,
  onOpenCareers,
}) => {
  const { outletId } = useParams<{ outletId: string }>();
  const navigate = useNavigate();

  // Find outlet by ID or fallback to first
  const currentOutlet =
    OUTLETS.find((o) => o.id === outletId) || OUTLETS[0];

  const [activeCategory, setActiveCategory] = useState<'all' | 'burgers' | 'sides' | 'beverages'>('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSelectLocation = (id: string) => {
    navigate(`/locations/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  // Filter curated items based on category
  const curatedItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'beef') return item.category === 'beef';
    if (activeCategory === 'chicken') return item.category === 'smashed_chicken' || item.category === 'fried_chicken';
    if (activeCategory === 'loaded_fries') return item.category === 'loaded_fries';
    return true;
  }).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0c0f12] text-[#e2e2e2] font-body selection:bg-[#1a3875] selection:text-white pt-20">
      {/* Outlet Selector Quick Switcher Bar */}
      <div className="pt-24 bg-[#090b0e] border-b border-white/5 py-3">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex items-center justify-between text-xs">
          <span className="text-[#c4c6d1] font-label uppercase font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" /> Select Location:
          </span>
          <div className="flex gap-2">
            {OUTLETS.map((o) => {
              const isComingSoon = o.status === 'Coming Soon';
              return (
                <button
                  key={o.id}
                  onClick={() => !isComingSoon && handleSelectLocation(o.id)}
                  disabled={isComingSoon}
                  title={isComingSoon ? `${o.name} — Coming Soon` : undefined}
                  className={`font-label uppercase text-xs font-bold px-3 py-1.5 rounded transition-all ${
                    isComingSoon
                      ? 'bg-[#12161f] text-[#c4c6d1]/40 cursor-not-allowed'
                      : o.id === currentOutlet.id
                      ? 'bg-[#1a3875] text-white border border-[#3b82f6]/50 shadow'
                      : 'bg-[#12161f] text-[#c4c6d1] hover:bg-[#192133] hover:text-white'
                  }`}
                >
                  {o.name}
                  {isComingSoon ? ' (Soon)' : ''}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a162e]">
        {/* Dark Moody Interior Photo Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('${currentOutlet.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f12] via-[#0c0f12]/80 to-[#0a162e]/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0c0f12]/40 to-[#0c0f12]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
          <span className="text-[#60a5fa] font-label text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            {currentOutlet.tagline || 'THE URBAN LANDMARK'}
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold uppercase leading-none mb-6 text-[#e2e2e2] tracking-tight">
            {currentOutlet.name}
          </h1>

          <p className="font-body text-base md:text-lg text-[#c4c6d1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {currentOutlet.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentOutlet.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label text-sm md:text-base font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-[#1a3875]/40"
            >
              <Navigation className="w-4 h-4 fill-current" /> Get Directions
            </a>
            <a
              href={`tel:${currentOutlet.phone}`}
              className="w-full sm:w-auto border border-[#3b82f6]/40 hover:border-[#3b82f6] bg-[#121724]/80 text-white font-label text-sm md:text-base font-bold px-8 py-3.5 rounded hover:bg-[#1a3875] transition-all uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#60a5fa]" /> Call Outlet
            </a>
          </div>
        </div>
      </section>

      {/* 3-Column Outlet Details Info Cards */}
      <section className="py-12 px-4 md:px-10 max-w-[1280px] mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Operating Hours */}
          <div className="bg-[#121c33] border border-[#1e2e52] rounded-lg p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1a3875] border border-[#3b82f6]/40 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-label uppercase text-[#60a5fa] tracking-widest font-bold block">
                  Schedule
                </span>
                <h3 className="font-label text-sm font-bold uppercase text-white tracking-wider">
                  Operating Hours
                </h3>
              </div>
            </div>

            <div className="space-y-4 font-body text-xs text-[#c4c6d1]">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span>Mon - Thu</span>
                <span className="font-label font-semibold text-white">
                  {currentOutlet.schedule?.monThu || '11:00 AM - 10:00 PM'}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span>Fri - Sat</span>
                <span className="font-label font-bold text-[#60a5fa]">
                  {currentOutlet.schedule?.friSat || '11:00 AM - 12:00 AM'}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Sunday</span>
                <span className="font-label font-semibold text-white">
                  {currentOutlet.schedule?.sunday || '12:00 PM - 09:00 PM'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Reach */}
          <div className="bg-[#121c33] border border-[#1e2e52] rounded-lg p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1a3875] border border-[#3b82f6]/40 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-label uppercase text-[#60a5fa] tracking-widest font-bold block">
                  Contact
                </span>
                <h3 className="font-label text-sm font-bold uppercase text-white tracking-wider">
                  Direct Reach
                </h3>
              </div>
            </div>

            <div className="space-y-4 font-body text-xs text-[#c4c6d1]">
              <div>
                <p className="text-[10px] uppercase font-label font-bold text-[#60a5fa] mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${currentOutlet.phone}`}
                  className="font-label text-sm font-bold text-white hover:text-[#60a5fa]"
                >
                  {currentOutlet.phone}
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase font-label font-bold text-[#60a5fa] mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${currentOutlet.email}`}
                  className="font-body text-xs text-white hover:underline"
                >
                  {currentOutlet.email || 'kallambalam@cleanburger.com'}
                </a>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={onOpenMenuModal}
                  className="flex-1 bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#3b82f6]/30 font-label text-[11px] font-bold py-2 px-3 rounded uppercase text-center transition-all"
                >
                  Swiggy Delivery
                </button>
                <button
                  onClick={onOpenMenuModal}
                  className="flex-1 bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#3b82f6]/30 font-label text-[11px] font-bold py-2 px-3 rounded uppercase text-center transition-all"
                >
                  Zomato Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#121c33] border border-[#1e2e52] rounded-lg p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1a3875] border border-[#3b82f6]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-label uppercase text-[#60a5fa] tracking-widest font-bold block">
                    Address
                  </span>
                  <h3 className="font-label text-sm font-bold uppercase text-white tracking-wider">
                    Location
                  </h3>
                </div>
              </div>

              <p className="font-body text-xs text-[#c4c6d1] leading-relaxed mb-4">
                {currentOutlet.address}
              </p>
            </div>

            {/* Map Box Graphic */}
            <a
              href={currentOutlet.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentOutlet.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#091121] border border-[#1d2d52] rounded h-28 relative flex items-center justify-center group overflow-hidden hover:border-[#3b82f6] transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />
              <div className="relative z-10 flex flex-col items-center text-center p-2">
                <MapPin className="w-6 h-6 text-[#60a5fa] group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-label uppercase text-white mt-1 font-bold">
                  View On Google Maps
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Ticker Bar */}
      <div className="bg-[#1a3875] py-3 text-white font-label font-bold text-xs md:text-sm uppercase tracking-widest overflow-hidden border-y border-[#2d56ab] select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="mx-6">FRESH DAILY</span>
              <span className="text-[#60a5fa]">★</span>
              <span className="mx-6">ARTISANAL QUALITY</span>
              <span className="text-[#60a5fa]">★</span>
              <span className="mx-6">URBAN SPEED</span>
              <span className="text-[#60a5fa]">★</span>
              <span className="mx-6">LIMITED TIME OFFERS</span>
              <span className="text-[#60a5fa]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto text-center relative overflow-hidden">
        <div className="bg-[#0f172a] border border-[#1e2e52] rounded-lg p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle map pattern background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#1a3875] border-2 border-[#3b82f6] flex items-center justify-center mx-auto shadow-lg shadow-[#1a3875]/40">
              <Compass className="w-8 h-8 text-white animate-pulse" />
            </div>

            <span className="text-[#60a5fa] font-label text-xs uppercase font-bold tracking-[0.25em] block">
              Interactive Map
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white tracking-tight">
              {currentOutlet.name} Neighborhood
            </h2>

            <p className="font-body text-sm text-[#c4c6d1] leading-relaxed">
              Explore our vicinity and find the easiest route to culinary excellence.
            </p>

            <div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentOutlet.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#3b82f6] text-[#60a5fa] hover:bg-[#1a3875] hover:text-white font-label text-xs md:text-sm font-bold px-8 py-3.5 rounded transition-all uppercase tracking-widest active:scale-95 shadow-md"
              >
                Open Full Map <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Selection / Outlet Menu */}
      <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#60a5fa] font-label text-xs uppercase font-bold tracking-[0.25em] mb-2 block">
              Curated Selection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white tracking-tight">
              {currentOutlet.name} Menu
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex bg-[#121c33] p-1 rounded border border-[#1e2e52] font-label text-xs uppercase font-bold">
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'beef', label: 'Beef' },
                { id: 'chicken', label: 'Chicken' },
                { id: 'loaded_fries', label: 'Loaded Fries' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1a3875] text-white border border-[#3b82f6]/50 shadow'
                    : 'text-[#c4c6d1] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curatedItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#101726] border border-[#1e2d4e] rounded-lg overflow-hidden group hover:border-[#1a3875] transition-all flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-[#0b101c] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge if exists */}
                {idx === 0 && (
                  <div className="absolute top-4 right-4 bg-[#1a3875] text-white border border-[#3b82f6]/50 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                    Bestseller
                  </div>
                )}
                {idx === 2 && (
                  <div className="absolute top-4 right-4 bg-[#1a3875] text-white border border-[#3b82f6]/50 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                    Vegan Choice
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-[#60a5fa] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-label text-base font-bold text-[#60a5fa]">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#c4c6d1] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-label uppercase text-[#c4c6d1]">
                  <span>{item.calories} Calories</span>
                  <span className="text-[#60a5fa] font-bold">Made Fresh, Made Clean</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Digital Menu Button */}
        <div className="mt-12 text-center pb-16">
          <button
            onClick={onOpenMenuModal}
            className="bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label text-sm font-bold px-10 py-4 rounded transition-all uppercase tracking-widest active:scale-95 shadow-lg shadow-[#1a3875]/40"
          >
            View Full Digital Menu
          </button>
        </div>
      </section>
    </div>
  );
};
