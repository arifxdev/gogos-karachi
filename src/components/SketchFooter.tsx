import React from 'react';
import { ArrowUp, Pencil } from 'lucide-react';

interface SketchFooterProps {
  onBackToTop: () => void;
  onOpenDoodle: () => void;
}

export const SketchFooter: React.FC<SketchFooterProps> = ({ onBackToTop, onOpenDoodle }) => {
  return (
    <footer className="border-t-2 border-black bg-[#E5E1D7] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b border-black/15 pb-12">
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-['Syne'] text-2xl font-black uppercase tracking-tight text-black">
                GOGOs
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-black/60">
                Karachi
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-black/75 leading-relaxed">
              Craft smash burgers, triple-cooked russet loaded fries, and 24-hr cold brews. Smashed to order in Clifton Block 4 & DHA Phase 6.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={onOpenDoodle}
                className="flex items-center gap-1.5 rounded-full border border-black bg-white px-3 py-1 text-xs font-bold text-black hover:bg-black hover:text-white transition-colors"
              >
                <Pencil className="h-3 w-3" />
                <span>Open Sketchpad</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-['Plus_Jakarta_Sans']">
            <div>
              <span className="font-['Syne'] font-black uppercase text-black block mb-3">
                Food Slate
              </span>
              <ul className="space-y-2 text-black/70">
                <li><a href="#menu-section" className="hover:text-black">Smash Burgers</a></li>
                <li><a href="#menu-section" className="hover:text-black">Truffle Russet Fries</a></li>
                <li><a href="#menu-section" className="hover:text-black">Spanish Iced Latte</a></li>
                <li><a href="#menu-section" className="hover:text-black">Nitro Cold Brew</a></li>
              </ul>
            </div>

            <div>
              <span className="font-['Syne'] font-black uppercase text-black block mb-3">
                Karachi Hubs
              </span>
              <ul className="space-y-2 text-black/70">
                <li><span className="text-black font-semibold">Clifton Flagship:</span> Boat Basin</li>
                <li><span className="text-black font-semibold">DHA Roastery:</span> Kh-e-Seher</li>
                <li><span>Hours: 12 PM - 3:30 AM</span></li>
                <li><span>Hotline: (021) 3587-9090</span></li>
              </ul>
            </div>

            <div>
              <span className="font-['Syne'] font-black uppercase text-black block mb-3">
                Connect
              </span>
              <ul className="space-y-2 text-black/70">
                <li><a href="#reviews-section" className="hover:text-black">Foodie Reviews</a></li>
                <li><a href="#locations-section" className="hover:text-black">Late Night Pickup</a></li>
                <li><span className="font-semibold text-black">Instagram:</span> @gogos.karachi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-black/60">
          <p>© {new Date().getFullYear()} GOGOs Karachi. Hand-crafted sketch edition.</p>

          <button
            onClick={onBackToTop}
            className="flex items-center gap-1.5 rounded-full border border-black/60 px-3 py-1 text-black hover:bg-black hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
