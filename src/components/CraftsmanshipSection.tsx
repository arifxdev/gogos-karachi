import React from 'react';
import { motion } from 'motion/react';
import { SketchCoffeeCup, SketchBurger, SketchFries } from './SketchIllustrations';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craft-section" className="relative px-4 py-20 sm:px-6 md:py-28 border-t border-black/10 bg-[#ECE8E0]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-black/60 block mb-2">
            The Blueprint
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold uppercase text-[#141414] tracking-tight">
            The Science of the Crunch
          </h2>
          <p className="mt-3 font-['Plus_Jakarta_Sans'] text-base text-black/75">
            Every bite is calculated. We took classic smash techniques, tuned them for Karachi’s humidity and late-night cravings, and removed every shortcut.
          </p>
        </div>

        {/* 3 Pillars Grid with Sketch Border Styling */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Pillar 1: Smash Science */}
          <div className="relative rounded-3xl border-2 border-black bg-[#F5F2EA] p-8 shadow-[4px_4px_0px_#141414] transition-transform hover:-translate-y-1">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-inner">
              <SketchBurger className="h-20 w-20" animate={false} />
            </div>

            <span className="font-['Syne'] text-xs font-black uppercase tracking-wider text-black/50 block mb-1">
              Principle 01
            </span>
            <h3 className="font-['Syne'] text-xl font-black uppercase text-[#141414] mb-3">
              Lacy-Edge Smashed Beef
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-black/75 leading-relaxed">
              We smash 80g cold dry-aged balls directly onto 450°F seasoned steel with maximum pressure. This induces rapid Maillard browning, yielding crunchy caramelized edges and an ultra-juicy core.
            </p>

            <div className="mt-6 border-t border-black/15 pt-4 text-xs font-semibold text-black/60">
              <span>Heat: 450°F</span> · <span>Contact: 60 sec</span> · <span>Zero Oil Added</span>
            </div>
          </div>

          {/* Pillar 2: Fries Formula */}
          <div className="relative rounded-3xl border-2 border-black bg-[#F5F2EA] p-8 shadow-[4px_4px_0px_#141414] transition-transform hover:-translate-y-1">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-inner">
              <SketchFries className="h-20 w-20" animate={false} />
            </div>

            <span className="font-['Syne'] text-xs font-black uppercase tracking-wider text-black/50 block mb-1">
              Principle 02
            </span>
            <h3 className="font-['Syne'] text-xl font-black uppercase text-[#141414] mb-3">
              Triple-Cooked Russet Fries
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-black/75 leading-relaxed">
              Hand-sliced, cold-water starch rinsed, simmered in salted vinegar water, frozen to shatter cell walls, then fried twice. Glass-like exterior crunch that stays crisp through Karachi delivery.
            </p>

            <div className="mt-6 border-t border-black/15 pt-4 text-xs font-semibold text-black/60">
              <span>Cut: 9mm</span> · <span>Blanch: 12 min</span> · <span>Double Crisp Fry</span>
            </div>
          </div>

          {/* Pillar 3: Cold Brew & Specialty */}
          <div className="relative rounded-3xl border-2 border-black bg-[#F5F2EA] p-8 shadow-[4px_4px_0px_#141414] transition-transform hover:-translate-y-1">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-inner">
              <SketchCoffeeCup className="h-20 w-20" animate={false} />
            </div>

            <span className="font-['Syne'] text-xs font-black uppercase tracking-wider text-black/50 block mb-1">
              Principle 03
            </span>
            <h3 className="font-['Syne'] text-xl font-black uppercase text-[#141414] mb-3">
              24-Hour Cold Extraction
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-black/75 leading-relaxed">
              Direct-trade single-origin Ethiopian and Colombian beans coarsely ground and steeped at 4°C for 24 hours. Naturally sweet, dense chocolate notes with 65% less bitterness than hot brews.
            </p>

            <div className="mt-6 border-t border-black/15 pt-4 text-xs font-semibold text-black/60">
              <span>Steep: 24 hrs</span> · <span>Temp: 4°C</span> · <span>TDS: 2.1%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
