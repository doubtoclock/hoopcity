"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';

const images = {
  feature: '/memories/memory_feature_1789335403503.jpg',
  tl: '/memories/memory_tl_1789335414339.jpg',
  tr: '/memories/memory_tr_1789335426580.jpg',
  bl: '/memories/memory_bl_1789335437084.jpg',
  br: '/memories/memory_br_1789335450397.jpg'
};

const MemoryImage = ({ src, alt, isFeature }: { src: string, alt: string, isFeature?: boolean }) => (
  <div className={`group relative w-full ${isFeature ? 'aspect-[16/10]' : 'aspect-[4/5]'} bg-[#050505] overflow-hidden`}>
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className="object-cover opacity-[0.65] group-hover:opacity-100 transform scale-[1.01] group-hover:scale-[1.05] transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform" 
    />
    <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-1000 pointer-events-none z-10" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-1000 z-0 pointer-events-none" />
  </div>
);

export default function Memories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="memories" ref={sectionRef} className="w-full bg-transparent relative font-mono overflow-hidden py-24 md:py-32">
      
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-15">
        <svg className="w-[1200px] h-[1200px] absolute" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.03" strokeDasharray="0.5 2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.03" strokeDasharray="1 3" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.03" strokeDasharray="1 3" />
          {/* Center Crosshair Tick */}
          <line x1="49" y1="50" x2="51" y2="50" stroke="#FF6100" strokeWidth="0.2" />
          <line x1="50" y1="49" x2="50" y2="51" stroke="#FF6100" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full">
          <SectionHeading number="08" title="MEMORIES" className="mb-6 justify-center" />
          <h2 className={`text-white font-trona text-5xl md:text-[5rem] leading-[0.85] tracking-[-0.02em] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,1)] transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            THE NIGHT REMAINS.
          </h2>
          <span className={`text-[#666] text-[9px] md:text-[10px] tracking-[0.4em] uppercase max-w-[600px] leading-relaxed transition-all duration-[800ms] delay-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            PLAYERS / MATCHES / CULTURE / CITY SHIFT / COMMUNITY
          </span>
        </div>

        {/* Symmetrical T-Shape Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-start relative z-10">
          
          {/* Left Column */}
          <div className={`w-full md:col-span-1 md:mt-40 flex flex-col transition-all duration-[1200ms] delay-[200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            <MemoryImage src={images.tl} alt="Players" />
            <div className="flex items-center gap-3 mt-4">
              <div className="w-3 h-[1px] bg-[#FF6100]"></div>
              <span className="text-[#888] font-mono text-[10px] tracking-[0.3em] uppercase">LAYER / 001</span>
            </div>
          </div>

          {/* Center Column (Hero + 2 Beneath) */}
          <div className="w-full md:col-span-2 flex flex-col gap-16 md:gap-24">
            <div className={`flex flex-col transition-all duration-[1200ms] delay-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
              <MemoryImage src={images.feature} alt="Live Action" isFeature={true} />
              <div className="w-full flex justify-end items-center gap-3 mt-4">
                <span className="text-[#888] font-mono text-[10px] tracking-[0.3em] uppercase">MATCH / 004</span>
                <div className="w-3 h-[1px] bg-[#F40B9B]"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <div className={`flex flex-col transition-all duration-[1200ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                <MemoryImage src={images.bl} alt="Culture" />
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-3 h-[1px] bg-white/30"></div>
                  <span className="text-[#888] font-mono text-[10px] tracking-[0.3em] uppercase">CULTURE / 006</span>
                </div>
              </div>
              <div className={`flex flex-col items-end transition-all duration-[1200ms] delay-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                <MemoryImage src={images.br} alt="Community" />
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-[#888] font-mono text-[10px] tracking-[0.3em] uppercase">CROWD / 003</span>
                  <div className="w-3 h-[1px] bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`w-full md:col-span-1 md:mt-40 flex flex-col items-end transition-all duration-[1200ms] delay-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            <MemoryImage src={images.tr} alt="City Shift" />
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[#888] font-mono text-[10px] tracking-[0.3em] uppercase">CITY / 002</span>
              <div className="w-3 h-[1px] bg-[#FF6100]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
