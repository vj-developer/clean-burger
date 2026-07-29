import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectNav: (sectionId: string) => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNav, onOpenCareers }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0c0f0f] w-full py-20 border-t border-white/10 text-[#c4c6d1]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Brand info */}
        <div className="col-span-1 md:col-span-1">
          <div className="font-display text-3xl font-bold mb-4 tracking-tight flex items-center gap-2">
            <span className="bg-[#1a3875] text-white px-2.5 py-0.5 rounded border border-[#2e5bbd]">CLEAN</span>
            <span className="text-[#e2e2e2]">BURGER</span>
          </div>
          <p className="font-body text-sm text-[#c4c6d1] leading-relaxed pr-6">
            <span className="text-[#60a5fa] font-label text-xs uppercase tracking-widest font-bold block mb-1">Made Fresh, Made Clean</span>
            Artisanal Quality, Urban Speed. The new standard of burgers in Kerala.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#c4c6d1]/70">
            <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" /> Kerala, India
          </div>
        </div>

        {/* Navigation Explore */}
        <div>
          <h4 className="font-label text-base font-bold uppercase text-[#e2e2e2] mb-6 tracking-wider">
            Explore
          </h4>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <Link
                to="/menu"
                className="hover:text-[#60a5fa] hover:underline transition-colors"
              >
                Full Menu
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('outlets');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hover:text-[#60a5fa] hover:underline transition-colors text-left"
              >
                Kerala Flagships
              </button>
            </li>
            <li>
              <Link
                to="/locations/kallambalam"
                className="hover:text-[#60a5fa] hover:underline transition-colors"
              >
                Kallambalam Main Outlet
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Company */}
        <div>
          <h4 className="font-label text-base font-bold uppercase text-[#e2e2e2] mb-6 tracking-wider">
            Company
          </h4>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <button
                onClick={() => onSelectNav('story')}
                className="hover:text-[#60a5fa] hover:underline transition-colors text-left"
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCareers}
                className="hover:text-[#60a5fa] hover:underline transition-colors text-[#60a5fa] font-semibold text-left"
              >
                Careers (We're Hiring)
              </button>
            </li>
            <li>
              <a
                href="mailto:hello@cleanburger.co"
                className="hover:text-[#60a5fa] hover:underline transition-colors"
              >
                Contact & Support
              </a>
            </li>
          </ul>
        </div>

        {/* Connect & Direct Actions */}
        <div>
          <h4 className="font-label text-base font-bold uppercase text-[#e2e2e2] mb-6 tracking-wider">
            Connect
          </h4>
          <p className="font-body text-xs text-[#c4c6d1] leading-relaxed mb-4">
            Have questions or feedback? Reach out directly to our Kerala team.
          </p>

          <div className="flex gap-3">
            <a
              href="mailto:hello@cleanburger.co"
              className="p-2.5 bg-[#1a3875]/30 hover:bg-[#1a3875] text-[#c4c6d1] hover:text-white border border-[#1a3875]/50 rounded transition-all flex items-center gap-2 text-xs font-label uppercase font-bold"
              title="Email Support"
            >
              <Mail className="w-4 h-4 text-[#60a5fa]" /> hello@cleanburger.co
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center px-4 border-t border-white/5 pt-8 text-[#c4c6d1]/60 font-body text-xs">
        © 2026 Clean Burger. Artisanal Quality, Urban Speed. All rights reserved.
      </div>
    </footer>
  );
};
