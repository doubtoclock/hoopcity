"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';
import CinematicButton from '../CinematicButton';

const partnersLeft = [
  { num: '01', title: 'TEAM', subtitle: 'Naming & Identity', image: '/partners/partner_team_1789334919484.jpg' },
  { num: '02', title: 'JERSEY', subtitle: 'Front & Back Placement', image: '/partners/partner_jersey_1789334930280.jpg' },
  { num: '03', title: 'CITY SHIFT™', subtitle: 'Immersive Activation', image: '/partners/partner_city_shift_1789334941712.jpg' },
];

const partnersRight = [
  { num: '04', title: 'CONTENT', subtitle: 'Digital Storytelling', image: '/partners/partner_content_1789334960003.jpg' },
  { num: '05', title: 'CREATORS', subtitle: 'Creator Network', image: '/partners/partner_creators_1789334971232.jpg' },
  { num: '06', title: 'VENUE & VIP', subtitle: 'Courtside Hospitality', image: '/partners/partner_venue_1789334981910.jpg' },
  { num: '07', title: 'COMMUNITY', subtitle: 'Local Initiatives', image: '/partners/partner_community_1789334991773.jpg' },
];

const PartnerPanel = ({ num, title, subtitle, image, isVisible, index, direction = 'left' }: { num: string, title: string, subtitle: string, image: string, isVisible: boolean, index: number, direction?: 'left' | 'right' }) => {
  const delay = 400 + (index * 150);
  const startTranslate = direction === 'left' ? '-translate-x-12' : 'translate-x-12';
  
  return (
    <div 
      className={`group flex items-center gap-5 md:gap-6 py-5 border-b border-white/10 hover:border-[#FF6100]/30 hover:shadow-[0_10px_20px_-10px_rgba(255,97,0,0.15)] transition-all duration-[800ms] cursor-pointer w-full ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-x-0 opacity-100' : `${startTranslate} opacity-0`}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {/* Editorial Image Crop */}
      <div className="w-24 h-16 md:w-36 md:h-24 bg-[#0a0a0a] border border-white/10 group-hover:border-[#FF6100]/30 transition-colors flex-shrink-0 relative overflow-hidden">
        {image && (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className={`object-cover opacity-60 group-hover:opacity-100 transform group-hover:scale-[1.03] transition-all duration-[1000ms] ease-out grayscale group-hover:grayscale-0 ${isVisible ? 'scale-100' : 'scale-110'}`}
            style={{ transitionDelay: isVisible ? `${delay + 200}ms` : '0ms' }}
          />
        )}
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="text-[#FF6100] font-mono text-xs tracking-widest">{num}</span>
          <h3 className="text-white font-mono text-sm md:text-base tracking-[0.2em] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-500">{title}</h3>
        </div>
        <p className="text-[#666666] font-mono text-xs tracking-widest mt-1 md:mt-2 uppercase">{subtitle}</p>
      </div>
      
      <div className="text-[#444] group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
        <span className="font-sans text-sm">↗</span>
      </div>
    </div>
  );
};

export default function Partners() {
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
    <section ref={sectionRef} className="w-full bg-transparent relative font-mono overflow-hidden">
      
      {/* Background Geometry (Continuing from City Shift) */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-20">
        <svg className="w-[1200px] h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.05" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.05" strokeDasharray="0.5 1.5" />
        </svg>
      </div>
      
      {/* Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 py-24 md:py-40 flex flex-col">
        
        {/* Top Header */}
        <div className="flex justify-between w-full mb-24 md:mb-40">
          <SectionHeading number="07" title="PARTNERS" />
        </div>

        {/* Desktop: 3-Column Layout, Mobile: Stacked */}
        <div className="flex flex-col xl:flex-row w-full gap-16 xl:gap-8 items-stretch">
          
          {/* Left Column (3 items) */}
          <div className="w-full xl:w-[28%] flex flex-col justify-between order-2 xl:order-1 gap-4 xl:gap-0">
            <div className="flex flex-col h-full justify-between">
              {partnersLeft.map((p, index) => <PartnerPanel key={p.num} {...p} isVisible={isVisible} index={index} direction="left" />)}
            </div>
          </div>

          {/* Center Dominant Column */}
          <div className="w-full xl:w-[44%] flex flex-col items-center justify-center text-center order-1 xl:order-2 py-12 xl:py-0">
            <h2 className={`text-white font-trona text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-[-0.02em] mb-8 transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              BUILD A TEAM.<br />
              OWN A MOMENT.
            </h2>
            <div className={`flex flex-col items-center gap-2 mb-12 transition-all duration-[800ms] delay-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <span className="text-[#aaaaaa] font-mono text-xs md:text-sm tracking-[0.3em]">MORE THAN SPONSORSHIP.</span>
              <span className="text-white font-mono text-xs md:text-sm tracking-[0.3em]">A PLACE IN THE CITY.</span>
            </div>
            <div className={`transition-all duration-[800ms] delay-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <CinematicButton text="BECOME A PARTNER" number="05" />
            </div>
          </div>

          {/* Right Column (4 items) */}
          <div className="w-full xl:w-[28%] flex flex-col justify-between order-3 gap-4 xl:gap-0">
             <div className="flex flex-col h-full justify-between">
              {partnersRight.map((p, index) => <PartnerPanel key={p.num} {...p} isVisible={isVisible} index={index} direction="right" />)}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
