import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Shahmir Raza',
      location: 'DHA Phase 5, Karachi',
      item: 'GOGOs Original Double Smash',
      quote:
        'Finally a smash burger in Karachi that doesn’t turn into a greasy sponge. The lace edges are genuinely crispy like potato chips, and the brioche stays firm till the last bite. 3:00 AM lifesaver.',
      date: 'Visited 2 days ago',
      rating: 5,
    },
    {
      author: 'Ayesha Bilgrami',
      location: 'Clifton Block 4',
      item: 'Truffle Fries & Spanish Latte',
      quote:
        'The Spanish latte is properly balanced—not overly sweet, with real dark espresso notes. Paired with the hot truffle parmesan fries in the car while parked near Seaview is unbeatable.',
      date: 'Visited last week',
      rating: 5,
    },
    {
      author: 'Zainab Qazi',
      location: 'KDA Officers Society',
      item: 'Karachi Firecracker Smash',
      quote:
        'The spicy relish hits like real desi street heat without masking the dry-aged beef. Ordered delivery to PECHS and it arrived steaming hot in 28 minutes flat.',
      date: 'Visited yesterday',
      rating: 5,
    },
  ];

  return (
    <section id="reviews-section" className="relative px-4 py-20 sm:px-6 md:py-28 border-t border-black/10 bg-[#E8E4DC]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-black/60 mb-2">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Karachi Word of Mouth</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold uppercase text-[#141414] tracking-tight">
            Notes From the Night Owls
          </h2>
          <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-black/75">
            Real feedback from Karachi’s pickiest burger lovers and specialty coffee regulars.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="relative flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 shadow-[4px_4px_0px_#141414] transition-transform hover:-translate-y-1"
            >
              <div>
                {/* Hand-drawn stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-black text-black" />
                  ))}
                  <span className="ml-2 font-['Syne'] text-xs font-bold text-black">5.0</span>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] text-sm text-black/85 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-black/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-['Syne'] text-sm font-black uppercase text-black">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-black/55">{rev.location}</p>
                </div>
                <div className="text-right">
                  <span className="font-['Syne'] text-[10px] font-bold uppercase text-black/50 block">
                    Ordered
                  </span>
                  <span className="text-xs font-semibold text-black line-clamp-1 max-w-[130px]">
                    {rev.item}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
