import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { Outlet } from '../types';

interface HeaderProps {
  onOpenMenuModal: () => void;
  onSelectNav: (sectionId: string) => void;
  selectedOutlet: Outlet;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenuModal,
  onSelectNav,
  selectedOutlet,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMenuPage = location.pathname === '/menu';
  const isLocationsPage = location.pathname.startsWith('/locations');
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (sectionId === 'menu') {
      navigate('/menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'locations') {
      navigate(`/locations/${selectedOutlet.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'careers') {
      onSelectNav('careers');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onSelectNav(sectionId);
      }, 100);
    } else {
      onSelectNav(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled
          ? 'py-3 bg-[#121414]/95 glass-header shadow-2xl'
          : 'py-5 bg-[#121414]/80 glass-header'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-[#e2e2e2] flex items-center gap-1.5">
            <span className="bg-[#1a3875] text-white px-2 py-0.5 rounded text-2xl md:text-3xl border border-[#2b56af]">CLEAN</span>
            <span className="text-[#e2e2e2]">BURGER</span>
          </div>
          <span className="hidden xl:inline-block font-label text-[10px] text-[#93c5fd] bg-[#1a3875]/40 border border-[#3b82f6]/30 px-2.5 py-1 rounded uppercase tracking-widest font-semibold">
            Made Fresh, Made Clean
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('menu')}
            className={`font-label text-lg uppercase tracking-wider transition-colors relative py-1 ${
              isMenuPage
                ? 'text-[#60a5fa] font-bold border-b-2 border-[#1a3875]'
                : 'text-[#e2e2e2] hover:text-[#60a5fa] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1a3875] hover:after:w-full after:transition-all'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick('locations')}
            className={`font-label text-lg uppercase tracking-wider transition-colors relative py-1 ${
              isLocationsPage
                ? 'text-[#60a5fa] font-bold border-b-2 border-[#1a3875]'
                : 'text-[#e2e2e2] hover:text-[#60a5fa] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1a3875] hover:after:w-full after:transition-all'
            }`}
          >
            Locations
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`font-label text-lg uppercase tracking-wider transition-colors relative py-1 ${
              isHomePage
                ? 'text-[#e2e2e2] hover:text-[#60a5fa] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1a3875] hover:after:w-full after:transition-all'
                : 'text-[#e2e2e2] hover:text-[#60a5fa]'
            }`}
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('careers')}
            className="font-label text-lg uppercase tracking-wider text-[#e2e2e2] hover:text-[#60a5fa] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1a3875] hover:after:w-full after:transition-all"
          >
            Careers
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Outlet Indicator */}
          <button
            onClick={() => {
              navigate(`/locations/${selectedOutlet.id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden lg:flex items-center gap-1.5 text-xs font-body text-[#c4c6d1] bg-[#1a3875]/20 hover:bg-[#1a3875]/40 border border-[#1a3875]/50 px-3 py-1.5 rounded transition-all"
            title="View Location Details"
          >
            <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span className="font-semibold text-white">{selectedOutlet.name}</span>
          </button>

          {/* Order Now CTA */}
          <button
            onClick={onOpenMenuModal}
            className="bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label text-sm md:text-base font-bold px-4 md:px-6 py-2.5 rounded active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-[#1a3875]/40"
          >
            View Menu
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e2e2e2] hover:text-[#60a5fa]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f0f] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-xs text-[#c4c6d1] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" /> Outlet: {selectedOutlet.name}
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate(`/locations/${selectedOutlet.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-[#60a5fa] underline font-semibold"
            >
              View Location
            </button>
          </div>
          <button
            onClick={() => handleNavClick('menu')}
            className="block w-full text-left font-label text-xl uppercase tracking-wider text-[#e2e2e2] hover:text-[#60a5fa] py-2"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick('locations')}
            className="block w-full text-left font-label text-xl uppercase tracking-wider text-[#e2e2e2] hover:text-[#60a5fa] py-2"
          >
            Locations
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="block w-full text-left font-label text-xl uppercase tracking-wider text-[#e2e2e2] hover:text-[#60a5fa] py-2"
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('careers')}
            className="block w-full text-left font-label text-xl uppercase tracking-wider text-[#e2e2e2] hover:text-[#60a5fa] py-2"
          >
            Careers
          </button>
        </div>
      )}
    </header>
  );
};
