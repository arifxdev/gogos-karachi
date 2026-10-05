import React from 'react';
import { ShoppingBag, Pencil } from 'lucide-react';
import { motion } from 'motion/react';

interface SketchHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onToggleDoodle: () => void;
  isDoodleOpen: boolean;
  onNavigate: (sectionId: string) => void;
}

export const SketchHeader: React.FC<SketchHeaderProps> = ({
  cartCount,
  onOpenCart,
  onToggleDoodle,
  isDoodleOpen,
  onNavigate,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full border-b border-black/10 bg-[#EBE7DF]/90 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        {/* Zone 1: Brand Wordmark with Minimalist Sketched Mark */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
          >
            {/* Hand-drawn mini icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/80 bg-white/70 shadow-[2px_2px_0px_#141414] transition-transform group-hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-black stroke-[2]">
                {/* Coffee + burger sketch glyph */}
                <path d="M4 14 C4 18 8 20 12 20 C16 20 20 18 20 14" strokeLinecap="round" />
                <path d="M3 10 C3 7 7 5 12 5 C17 5 21 7 21 10 Z" strokeLinejoin="round" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M9 3 C9 2 10 2 10 1" strokeLinecap="round" />
                <path d="M14 3 C14 2 15 2 15 1" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="font-['Syne'] text-xl font-black tracking-tight text-black sm:text-2xl">
                GOGOs
              </span>
              <span className="ml-1.5 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-widest text-black/60">
                Karachi
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links Pill Container matching the reference pill capsule */}
        <nav className="hidden items-center md:flex">
          <div className="flex items-center rounded-full border border-black/80 bg-white/40 px-5 py-1.5 shadow-[2px_2px_0px_rgba(20,20,20,0.1)] backdrop-blur-sm">
            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-black">
              <button
                onClick={() => onNavigate('menu')}
                className="transition-colors hover:text-black/60 whitespace-nowrap focus:outline-none"
              >
                Menu
              </button>
              <span className="text-black/25">·</span>
              <button
                onClick={() => onNavigate('craft')}
                className="transition-colors hover:text-black/60 whitespace-nowrap focus:outline-none"
              >
                Crunch Science
              </button>
              <span className="text-black/25">·</span>
              <button
                onClick={() => onNavigate('locations')}
                className="transition-colors hover:text-black/60 whitespace-nowrap focus:outline-none"
              >
                Locations
              </button>
              <span className="text-black/25">·</span>
              <button
                onClick={() => onNavigate('nights')}
                className="transition-colors hover:text-black/60 whitespace-nowrap focus:outline-none"
              >
                Late Nights
              </button>
            </div>
          </div>
        </nav>

        {/* Zone 3: Actions - Pencil Doodle Mode & Pill Order Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sketchpad Toggle Pill */}
          <button
            onClick={onToggleDoodle}
            className={`flex items-center gap-1.5 rounded-full border border-black px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all shadow-[2px_2px_0px_#141414] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              isDoodleOpen
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-black/5'
            }`}
            title="Open Interactive Karachi Sketchpad"
          >
            <Pencil className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Doodle Pad</span>
          </button>

          {/* Bag / Order Action Button (Black and White Theme Pill with Arrow) */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 rounded-full border border-black bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_#141414] transition-all hover:bg-neutral-800 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none whitespace-nowrap"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Bag</span>
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-black text-black">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
