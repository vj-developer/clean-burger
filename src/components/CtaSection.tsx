import React, { useState } from 'react';
import { Smartphone, Bell, Check, Utensils } from 'lucide-react';

const NOTIFY_EMAIL = 'cleanburger.co@gmail.com';

export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const subject = 'Notify Me - Clean Burger App Launch';
      const body = [
        `Hello Clean Burger Team,`,
        ``,
        `Please notify me at ${email} when the iOS & Android app launches.`,
      ].join('\n');

      window.location.href = `mailto:${NOTIFY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
      <div className="bg-[#1a3875] rounded-lg p-8 md:p-16 text-center relative overflow-hidden border border-[#89a4e7]/20 shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0c1322]/60 backdrop-blur border border-[#3b82f6]/40 text-[#93c5fd] font-label text-xs uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 font-bold shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-[#60a5fa]" />
            Mobile App • Coming Soon
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4 text-white tracking-tight leading-tight">
            Seamless Ordering <br />
            <span className="text-[#60a5fa]">Is On The Way</span>
          </h2>

          <p className="font-body text-base md:text-lg text-[#c7d9fc] mb-8 leading-relaxed font-normal">
            Our official iOS & Android app is currently in development. Pre-register below to get early access, exclusive launch offers, and skip-the-line rewards in Kerala.
          </p>

          {subscribed ? (
            <div className="p-4 bg-[#0c1322]/90 border border-[#3b82f6]/50 rounded-lg text-white font-label text-sm md:text-base flex items-center justify-center gap-3 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <span className="font-semibold text-left">
                You’re on the VIP list! We’ll notify <span className="text-[#60a5fa]">{email}</span> on launch day.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 bg-[#0c1322]/90 border border-[#3b82f6]/40 rounded px-4 py-3 text-sm text-white placeholder-[#93c5fd]/60 focus:outline-none focus:border-white transition-all font-body"
              />
              <button
                type="submit"
                className="bg-white text-[#1a3875] hover:bg-[#e2ebfe] font-label font-bold text-sm px-6 py-3 rounded uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-lg"
              >
                <Bell className="w-4 h-4 fill-current text-[#1a3875]" /> Notify Me
              </button>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#93c5fd] font-label uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> iOS App Store (In Review)
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Google Play Store (In Review)
            </span>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 pointer-events-none">
          <Utensils className="w-80 h-80 text-[#3b82f6]" />
        </div>
      </div>
    </section>
  );
};

