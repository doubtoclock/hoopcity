"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const categories = [
  { id: 'basketball', label: 'BASKETBALL', image: '/images/ecosystem/ecosystem_center_ball_1789295994272.jpg' },
  { id: 'music', label: 'MUSIC', image: '/images/ecosystem/eco_music_1789296006495.jpg' },
  { id: 'fashion', label: 'FASHION', image: '/images/ecosystem/eco_fashion_1789296020590.jpg' },
  { id: 'creators', label: 'CREATORS', image: '/images/ecosystem/eco_creators_1789296049408.jpg' },
  { id: 'food', label: 'FOOD', image: '/images/ecosystem/eco_food_1789296074778.jpg' },
  { id: 'community', label: 'COMMUNITY', image: '/images/ecosystem/eco_community_1789296096586.jpg' },
  { id: 'entertainment', label: 'ENTERTAINMENT', image: '/images/ecosystem/eco_entertainment_1789296126543.jpg' },
  { id: 'artists', label: 'ARTISTS', image: '/images/ecosystem/eco_artists_1789296061976.jpg' },
  { id: 'brands', label: 'BRANDS', image: '/images/ecosystem/eco_brands_1789296109694.jpg' },
];

export default function InfiniteCulture() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const marqueeText = categories.map(cat => cat.label).join(' • ') + ' • ';

  return (
    <section ref={sectionRef} className="w-full bg-transparent flex flex-col border-t border-transparent">
      
      {/* Top Header Bar */}
      <div className="w-full px-8 py-6 md:px-16 flex border-b border-white/10">
        <h2 className={`text-white font-bebas text-lg md:text-2xl tracking-[0.15em] transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          INFINITE CULTURE. ALWAYS IN MOTION.
        </h2>
      </div>

      {/* Horizontal Gallery */}
      <div 
        ref={scrollContainerRef}
        className={`w-full overflow-hidden flex transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
          {/* First set of images */}
          <div className="flex gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.id}
                className="flex-none w-[60vw] sm:w-[40vw] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] flex items-center justify-center relative group overflow-hidden cursor-pointer border border-white/10 bg-gradient-to-br from-[#111111]/90 via-[#1a1a1a]/80 to-[#2a1005]/40 backdrop-blur-md shadow-2xl rounded-lg hover:border-[#FF6100] hover:from-[#2a1005]/90 hover:to-[#FF6100]/20 transition-all duration-300"
              >
                <h3 className="text-center text-[#aaaaaa] group-hover:text-white transition-colors duration-300 text-3xl md:text-4xl font-bebas tracking-[0.15em] drop-shadow-md">
                  {cat.label}
                </h3>
              </div>
            ))}
          </div>
          {/* Second set of images for infinite loop */}
          <div className="flex gap-6">
            {categories.map((cat) => (
              <div 
                key={`${cat.id}-duplicate`}
                className="flex-none w-[60vw] sm:w-[40vw] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] flex items-center justify-center relative group overflow-hidden cursor-pointer border border-white/10 bg-gradient-to-br from-[#111111]/90 via-[#1a1a1a]/80 to-[#2a1005]/40 backdrop-blur-md shadow-2xl rounded-lg hover:border-[#FF6100] hover:from-[#2a1005]/90 hover:to-[#FF6100]/20 transition-all duration-300"
              >
                <h3 className="text-center text-[#aaaaaa] group-hover:text-white transition-colors duration-300 text-3xl md:text-4xl font-bebas tracking-[0.15em] drop-shadow-md">
                  {cat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Marquee Text */}
      <div className="w-full bg-transparent py-4 border-t border-white/10 overflow-x-auto hide-scrollbar flex whitespace-nowrap relative">
        <div className="flex whitespace-nowrap text-[#aaaaaa] font-bebas tracking-[0.3em] text-sm w-full justify-center">
          <span className="px-4">{marqueeText.slice(0, -3)}</span>
        </div>
      </div>
      
    </section>
  );
}
