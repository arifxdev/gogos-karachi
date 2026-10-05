import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Flame, Clock, Star, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, addons?: string[]) => void;
  cartItemIds: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'burgers' | 'fries' | 'coffee'>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<MenuItem | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [extraPatty, setExtraPatty] = useState(false);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedProductForModal(item);
    setSelectedAddons([]);
    setExtraPatty(false);
  };

  const handleConfirmAdd = () => {
    if (!selectedProductForModal) return;
    const addons = [...selectedAddons];
    if (extraPatty) addons.push('Extra Smashed Patty (+₨ 350)');
    onAddToCart(selectedProductForModal, addons);
    setSelectedProductForModal(null);
  };

  return (
    <section id="menu-section" className="relative px-4 py-16 sm:px-6 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/60 mb-2">
              <span>The Main Slate</span>
              <span>·</span>
              <span>Karachi Kitchen</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold uppercase text-[#141414] tracking-tight">
              Craft Burgers & Brews
            </h2>
            <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-black/70 max-w-xl">
              High-contrast, zero-compromise dining. Fresh patties pressed wafer-thin, hand-cut russets triple-blanched, and specialty grade coffee.
            </p>
          </div>

          {/* Category Filter Pills (Functional Interactive Segmented Controls) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-black bg-white/50 backdrop-blur-sm self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'burgers', label: 'Smash Burgers' },
              { id: 'fries', label: 'Loaded Fries' },
              { id: 'coffee', label: 'Specialty Coffee' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-[2px_2px_0px_#141414]'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: Stark Contrast Rule Applied */}
        {/* The products are placed in stark, solid pure white frames to boldly pop against the beige sketch UI */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const countInCart = cartItemIds[item.id] || 0;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col rounded-3xl border-2 border-black bg-[#F5F2EB] p-5 shadow-[4px_4px_0px_#141414] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#141414]"
              >
                {/* 1. Photorealistic Product Presentation on STARK SOLID PURE WHITE BACKGROUND */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black bg-white p-4 shadow-inner flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Badge Tag */}
                  {item.tag && (
                    <div className="absolute top-3 left-3 rounded-full border border-black bg-white px-3 py-1 font-['Syne'] text-[11px] font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_#141414]">
                      {item.tag}
                    </div>
                  )}

                  {/* Spice indicator if applicable */}
                  {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-black bg-white px-2 py-0.5 text-xs font-bold text-red-600 shadow-[1px_1px_0px_#141414]">
                      <Flame className="h-3 w-3 fill-red-600" />
                      <span>{item.spiceLevel === 3 ? 'HOT' : 'MED'}</span>
                    </div>
                  )}
                </div>

                {/* 2. Product Details */}
                <div className="mt-5 flex flex-1 flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-black/60 mb-1.5 uppercase">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-black">
                        <Star className="h-3 w-3 fill-black text-black" />
                        {item.rating.toFixed(1)}
                      </span>
                      {item.prepTime && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.prepTime}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-['Syne'] text-xl font-extrabold uppercase text-[#141414] leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {item.name}
                    </h3>

                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-black/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Ingredients unboxed list */}
                    <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-black/55 font-medium">
                      {item.ingredients.map((ing, idx) => (
                        <span key={ing}>
                          {ing}{idx < item.ingredients.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 flex items-center justify-between border-t border-black/15 pt-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block">
                        Karachi Price
                      </span>
                      <span className="font-['Syne'] text-xl font-black text-[#141414] tabular-nums">
                        ₨ {item.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Customize Button */}
                      <button
                        onClick={() => handleOpenCustomize(item)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-black/10 active:scale-95"
                        title="Customize burger or drink"
                      >
                        <SlidersHorizontal className="h-4 w-4" />
                      </button>

                      {/* Primary Add Button (Black & White Theme) */}
                      <button
                        onClick={() => onAddToCart(item)}
                        className={`flex items-center gap-1.5 rounded-full border-2 border-black px-4 py-2 font-['Syne'] text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#141414] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                          countInCart > 0
                            ? 'bg-black text-white hover:bg-neutral-800'
                            : 'bg-white text-black hover:bg-black hover:text-white'
                        }`}
                      >
                        {countInCart > 0 ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            <span>Added ({countInCart})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Customize Modal */}
      <AnimatePresence>
        {selectedProductForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl border-2 border-black bg-[#EBE7DF] p-6 shadow-[8px_8px_0px_#141414]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-black/15 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                    Customize Your Order
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-black uppercase text-black">
                    {selectedProductForModal.name}
                  </h3>
                  <p className="text-xs text-black/70 mt-1">
                    ₨ {selectedProductForModal.price.toLocaleString()} Base Price
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProductForModal(null)}
                  className="rounded-full border border-black bg-white p-1 text-black hover:bg-black hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Product preview banner on stark white */}
              <div className="my-4 flex items-center gap-4 rounded-2xl border border-black bg-white p-3 shadow-inner">
                <div className="h-20 w-20 flex-shrink-0 bg-white">
                  <img
                    src={selectedProductForModal.image}
                    alt={selectedProductForModal.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-black/80 leading-relaxed">
                  {selectedProductForModal.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-4 py-2">
                <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-black block">
                  Karachi Upgrades & Extras
                </span>

                {selectedProductForModal.category === 'burgers' && (
                  <label className="flex items-center justify-between rounded-xl border border-black bg-white/70 p-3 cursor-pointer hover:bg-white transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={extraPatty}
                        onChange={(e) => setExtraPatty(e.target.checked)}
                        className="h-4 w-4 rounded border-black accent-black"
                      />
                      <span className="text-sm font-bold text-black">
                        Add Extra 80g Smashed Patty & Cheese
                      </span>
                    </div>
                    <span className="font-['Syne'] text-xs font-extrabold text-black">
                      +₨ 350
                    </span>
                  </label>
                )}

                <label className="flex items-center justify-between rounded-xl border border-black bg-white/70 p-3 cursor-pointer hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes('Truffle Mayo Dip')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAddons([...selectedAddons, 'Truffle Mayo Dip']);
                        } else {
                          setSelectedAddons(selectedAddons.filter((a) => a !== 'Truffle Mayo Dip'));
                        }
                      }}
                      className="h-4 w-4 rounded border-black accent-black"
                    />
                    <span className="text-sm font-bold text-black">
                      Side of Truffle Aioli Dip
                    </span>
                  </div>
                  <span className="font-['Syne'] text-xs font-extrabold text-black">
                    +₨ 180
                  </span>
                </label>

                <label className="flex items-center justify-between rounded-xl border border-black bg-white/70 p-3 cursor-pointer hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes('Extra Crispy Pickles')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAddons([...selectedAddons, 'Extra Crispy Pickles']);
                        } else {
                          setSelectedAddons(selectedAddons.filter((a) => a !== 'Extra Crispy Pickles'));
                        }
                      }}
                      className="h-4 w-4 rounded border-black accent-black"
                    />
                    <span className="text-sm font-bold text-black">
                      Extra Garlic Dill Pickles
                    </span>
                  </div>
                  <span className="font-['Syne'] text-xs font-extrabold text-black">
                    FREE
                  </span>
                </label>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-black/15 pt-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-black/60 block">Total</span>
                  <span className="font-['Syne'] text-2xl font-black text-black">
                    ₨ {(
                      selectedProductForModal.price +
                      (extraPatty ? 350 : 0) +
                      (selectedAddons.includes('Truffle Mayo Dip') ? 180 : 0)
                    ).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleConfirmAdd}
                  className="flex items-center gap-2 rounded-full border-2 border-black bg-black px-6 py-3 font-['Syne'] text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#141414] hover:bg-neutral-800 active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <Plus className="h-4 w-4" />
                  Add To Bag
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
