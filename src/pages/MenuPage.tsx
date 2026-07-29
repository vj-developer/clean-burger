import React from 'react';
import { Star } from 'lucide-react';

interface MenuPageProps {
  onOpenMenuModal: () => void;
  onOpenCareers: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = () => {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-[#e2e2e2] font-body selection:bg-[#1a3875] selection:text-white pt-24">
      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6">
          OUR MENU
        </h1>
        <p className="font-body text-sm md:text-base text-[#a0a7be] max-w-2xl mx-auto leading-relaxed">
          Artisanal burgers crafted with 100% grass-fed beef, organic hydroponic greens, and our signature slow-fermented brioche. Urban speed meets culinary integrity.
        </p>
      </section>

      {/* Blue Marquee Bar */}
      <div className="bg-[#1a3875] border-y border-[#2d4782] py-3.5 text-white font-label font-bold text-xs uppercase tracking-widest overflow-hidden select-none shadow-md">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="mx-6 text-white">FRESH DAILY</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">ARTISANAL QUALITY</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">GRASS-FED BEEF</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">HOUSE-MADE SAUCES</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
              <span className="mx-6 text-white">SUSTAINABLE PACKAGING</span>
              <Star className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
            </div>
          ))}
        </div>
      </div>

      {/* Light Lavender/Periwinkle Container Section */}
      <main className="bg-[#cfdcfa] text-[#0d1629] py-16 px-4 md:px-10 relative">
        <div className="max-w-[1280px] mx-auto space-y-20">
          
          {/* SECTION 1: BURGERS */}
          <section>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a152e] mb-8 pb-3 border-b-2 border-[#0a152e]/10">
              BURGERS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Burger Card 1 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white flex flex-col justify-between shadow-xl group">
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                    alt="The Clean Classic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1a3875] text-white border border-[#3b82f6]/40 font-label text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow">
                    BEST SELLER
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-2xl font-bold text-[#3b82f6] uppercase tracking-wide">
                        THE CLEAN CLASSIC
                      </h3>
                      <span className="font-display text-2xl font-bold text-[#3b82f6]">
                        ₹349
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-6">
                      Grass-fed beef, aged cheddar, hydroponic bibb lettuce, house-made clean sauce.
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/10">
                    <span className="bg-[#141f36] text-[#82a4ed] border border-[#82a4ed]/20 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                      ORGANIC
                    </span>
                    <span className="bg-[#141f36] text-[#82a4ed] border border-[#82a4ed]/20 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                      NON-GMO
                    </span>
                  </div>
                </div>
              </div>

              {/* Burger Card 2 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white flex flex-col justify-between shadow-xl group">
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80"
                    alt="Green Harvest"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur border border-white/10 p-2 rounded text-right">
                    <span className="font-label text-[11px] text-white block font-bold">Spicy Black Bean</span>
                    <span className="font-label text-[10px] text-[#3b82f6] font-bold">₹349</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-2xl font-bold text-[#3b82f6] uppercase tracking-wide">
                        GREEN HARVEST
                      </h3>
                      <span className="font-display text-2xl font-bold text-[#3b82f6]">
                        ₹329
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-6">
                      Quinoa & black bean patty, avocado mash, pickled onion, chipotle aioli.
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/10">
                    <span className="bg-[#141f36] text-[#82a4ed] border border-[#82a4ed]/20 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                      VEGAN
                    </span>
                    <span className="bg-[#141f36] text-[#82a4ed] border border-[#82a4ed]/20 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                      GLUTEN-FREE OPTION
                    </span>
                  </div>
                </div>
              </div>

              {/* Burger Card 3 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white flex flex-col justify-between shadow-xl group">
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_UBtHq0qPTVrprLGEY7IhGelVb33WgPgQRIOE7_AcLuh_2Td2JE5Fa_a1F7HRccw71_71vcjlqvtGMGnzqH4Oo--Yur5FDDtN2bUsXC9Uecw2jvzk7i4zsqVkrF4zksuWjH1es8oQ-sXLtOybtuHtB5PpRTfjx869AjT0P2x8jNlhPjA6D48hz2G4SlKqw-VHlkwVFFkWurPinY_1EkL21n3lPxKKLTC5GD_P9w7TXiOADQ6VO_y6BpFXFJKZSf3v-BB6I4mib68"
                    alt="Truffle Umami"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-2xl font-bold text-[#3b82f6] uppercase tracking-wide">
                        TRUFFLE UMAMI
                      </h3>
                      <span className="font-display text-2xl font-bold text-[#3b82f6]">
                        ₹449
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-6">
                      Wagyu beef, black truffle butter, gruyere, wild mushrooms, crispy leeks.
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/10">
                    <span className="bg-[#141f36] text-[#82a4ed] border border-[#82a4ed]/20 font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                      PREMIUM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: SIDES */}
          <section>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a152e] mb-8 pb-3 border-b-2 border-[#0a152e]/10">
              SIDES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Side 1 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl group">
                <div className="aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
                    alt="Tuscan Fries"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-[#3b82f6] uppercase mb-1">
                    TUSCAN FRIES
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8]">
                    Rosemary, garlic, sea salt.
                  </p>
                </div>
              </div>

              {/* Side 2 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl group">
                <div className="aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                    alt="Charred Sprouts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-[#3b82f6] uppercase mb-1">
                    CHARRED SPROUTS
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8]">
                    Balsamic glaze, toasted hazelnut.
                  </p>
                </div>
              </div>

              {/* Side 3 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl group">
                <div className="aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80"
                    alt="Panko Rings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-[#3b82f6] uppercase mb-1">
                    PANKO RINGS
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8]">
                    Hand-breaded, house ketchup.
                  </p>
                </div>
              </div>

              {/* Side 4 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl group">
                <div className="aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
                    alt="Super Salad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-[#3b82f6] uppercase mb-1">
                    SUPER SALAD
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8]">
                    Kale, quinoa, citrus vinaigrette.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: COLD SHAKES */}
          <section>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a152e] mb-8 pb-3 border-b-2 border-[#0a152e]/10">
              COLD SHAKES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Shake 1 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl flex flex-col sm:flex-row group">
                <div className="sm:w-1/2 aspect-square sm:aspect-auto bg-black overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
                    alt="Salted Caramel Cloud"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-[#3b82f6] uppercase mb-2">
                    SALTED CARAMEL CLOUD
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-6">
                    House-made salted caramel, organic vanilla bean milk, whipped Himalayan salt cream.
                  </p>
                  <span className="font-display text-2xl font-bold text-[#3b82f6]">
                    ₹219
                  </span>
                </div>
              </div>

              {/* Shake 2 */}
              <div className="bg-[#0b0f17] rounded border border-black/20 overflow-hidden text-white shadow-xl flex flex-col sm:flex-row group">
                <div className="sm:w-1/2 aspect-square sm:aspect-auto bg-black overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
                    alt="Midnight Cacao"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-[#3b82f6] uppercase mb-2">
                    MIDNIGHT CACAO
                  </h3>
                  <p className="font-body text-xs text-[#94a3b8] leading-relaxed mb-6">
                    70% single-origin dark chocolate, oat milk base, raw cacao nibs.
                  </p>
                  <span className="font-display text-2xl font-bold text-[#3b82f6]">
                    ₹219
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};
