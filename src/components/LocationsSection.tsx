import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { BRANCHES } from '../data/menu';

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations-section" className="relative px-4 py-20 sm:px-6 md:py-28 border-t border-black/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/60 mb-2">
              <span>Karachi Outposts</span>
              <span>·</span>
              <span>Dine-In & Curbside</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold uppercase text-[#141414] tracking-tight">
              Where to Find Us
            </h2>
            <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-black/75 max-w-lg">
              Two central Karachi hubs ready for late-night drives, quick curbside pickup, or midnight coffee runs.
            </p>
          </div>

          <div className="rounded-full border border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_#141414] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Both Outposts Open Late Tonight</span>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {BRANCHES.map((branch, idx) => (
            <div
              key={branch.name}
              className="relative flex flex-col justify-between rounded-3xl border-2 border-black bg-[#F5F2EA] p-8 shadow-[4px_4px_0px_#141414] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#141414]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/15 pb-4 mb-6">
                  <div>
                    <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-black/50 block">
                      Outpost 0{idx + 1}
                    </span>
                    <h3 className="font-['Syne'] text-2xl font-black uppercase text-[#141414]">
                      {branch.name}
                    </h3>
                  </div>

                  <span className="rounded-full border border-black bg-white px-3 py-1 font-['Syne'] text-[11px] font-bold uppercase tracking-wider text-emerald-800 shadow-[1px_1px_0px_#141414]">
                    {branch.status}
                  </span>
                </div>

                <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-sm text-black/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-black flex-shrink-0" />
                    <div>
                      <p className="font-bold text-black">{branch.area}</p>
                      <p className="text-black/70 text-xs mt-0.5">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-black flex-shrink-0" />
                    <div>
                      <span className="font-bold text-black">Operating Hours: </span>
                      <span className="text-black/80">{branch.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-black flex-shrink-0" />
                    <div>
                      <span className="font-bold text-black">Direct Kitchen Line: </span>
                      <a href={`tel:${branch.phone}`} className="underline hover:text-black">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hand-drawn Karachi map aesthetic widget */}
              <div className="mt-8 rounded-2xl border border-black/80 bg-white p-4 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-black">
                    Delivery Zones Covered
                  </span>
                  <span className="text-[11px] font-semibold text-black/60">Average 25-35 mins</span>
                </div>
                <p className="text-xs text-black/75">
                  Clifton (All Blocks), DHA Phases 1–8, Zamzama, Khayaban-e-Shahbaz, Bath Island, Civil Lines, and PECHS.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
