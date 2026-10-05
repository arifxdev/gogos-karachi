import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { SketchCoffeeCup, SketchBurger, SketchFries } from './SketchIllustrations';

interface HeroSectionProps {
  onOrderClick: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick, onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-16 sm:px-6 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Hand-Drawn Floating Illustrations Matching Reference Image */}
      {/* Top Left: Tilted Sketched Coffee Cup with animated steam */}
      <motion.div
        initial={{ opacity: 0, rotate: -22, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -18, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-2 top-4 hidden -rotate-12 md:left-12 md:top-8 md:block lg:left-24"
      >
        <div className="relative">
          <SketchCoffeeCup className="h-44 w-44 lg:h-52 lg:w-52" delay={0.2} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -bottom-2 right-4 rounded-full border border-black/80 bg-white/80 px-2.5 py-0.5 font-['Syne'] text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-sm"
          >
            Karachi Roast
          </motion.div>
        </div>
      </motion.div>

      {/* Top Right: Tilted Sketched Smash Burger with draw-in animation */}
      <motion.div
        initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 20, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-4 top-6 hidden rotate-12 md:right-12 md:top-10 md:block lg:right-24"
      >
        <div className="relative">
          <SketchBurger className="h-44 w-44 lg:h-52 lg:w-52" delay={0.4} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute -bottom-2 left-4 rounded-full border border-black/80 bg-white/80 px-2.5 py-0.5 font-['Syne'] text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-sm"
          >
            Lacy Edges
          </motion.div>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="mx-auto max-w-6xl">
        {/* Subtle Karachi Location & Open Status Tag (Unboxed, pure typography) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-black/75 uppercase"
        >
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-ping absolute" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 relative" />
          </span>
          <span className="font-bold text-black">Clifton & DHA Phase 6</span>
          <span className="text-black/30">·</span>
          <span>Open Tonight Till 3:30 AM</span>
        </motion.div>

        {/* The Exact 3-Tier Headline Layout From Reference Image:
            Line 1: Solid Black Typography
            Line 2: Outlined Hollow Typography
            Line 3: Solid Black Typography + Black & White Pill Action Button
        */}
        <div className="text-center font-['Syne'] tracking-tight">
          {/* Line 1: Solid Black */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl font-extrabold uppercase text-[#141414] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95]">
              The Crunchiest Bite
            </h1>
          </motion.div>

          {/* Line 2: Hollow Outlined Stroke Typography (matching FOR CUSTOMERS from reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="my-1 sm:my-2"
          >
            <span
              className="inline-block text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] select-none text-transparent"
              style={{
                WebkitTextStroke: '2px #141414',
              }}
            >
              In All Of Karachi
            </span>
          </motion.div>

          {/* Line 3: Solid Black + Pill Action Button on same horizontal rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2"
          >
            <span className="text-4xl font-extrabold uppercase text-[#141414] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95]">
              Every Single Time
            </span>

            {/* Reference pill button: Replaced yellow with crisp black and white sketch theme as requested */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97, y: 1 }}
              onClick={onOrderClick}
              className="inline-flex items-center gap-3 rounded-full border-2 border-black bg-white px-6 py-3.5 sm:px-8 sm:py-4 font-['Syne'] text-sm sm:text-base font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_#141414] hover:bg-black hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              <span>Get Started</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Copy Subtitle focused on GOGOs Craftsmanship */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-center font-['Plus_Jakarta_Sans'] text-base text-black/75 sm:text-lg leading-relaxed text-balance"
        >
          Freshly ground prime beef smashed wafer-thin over ripping 450°F cast iron, triple-fried russet potatoes, and cold-extracted specialty roasts. Built for genuine Karachi tastebuds.
        </motion.p>

        {/* Quick Menu Category Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onExploreMenu}
            className="rounded-full border border-black/70 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_#141414] hover:bg-black hover:text-white transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            🍔 Prime Smash Burgers (from ₨ 1,350)
          </button>
          <button
            onClick={onExploreMenu}
            className="rounded-full border border-black/70 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_#141414] hover:bg-black hover:text-white transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            🍟 Truffle & Shaved Parm Fries (₨ 890)
          </button>
          <button
            onClick={onExploreMenu}
            className="rounded-full border border-black/70 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_#141414] hover:bg-black hover:text-white transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            ☕ Spanish Iced Lattes (₨ 720)
          </button>
        </motion.div>
      </div>
    </section>
  );
};
