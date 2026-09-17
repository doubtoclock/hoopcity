"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';
import CinematicButton from '../CinematicButton';

const indexStories = [
  { num: '02', title: 'INSIDE CITY SHIFT', meta: 'EXPERIENCE / 07.06.26', image: '/partners/partner_city_shift_1789334941712.jpg' },
  { num: '03', title: 'THE TEAMS TAKING OVER NAGPUR', meta: 'LEAGUE / 06.06.26', image: '/memories/memory_tl_1789335414339.jpg' },
  { num: '04', title: 'THE SOUND OF THE CITY', meta: 'CULTURE / 05.06.26', image: '/memories/memory_bl_1789335437084.jpg' },
  { num: '05', title: 'AFTER DARK: BEHIND THE SCENES', meta: 'BTS / 04.06.26', image: '/partners/partner_content_1789334960003.jpg' }
];

export default function Stories() {
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
    <section id="stories" ref={sectionRef} className="w-full bg-transparent relative font-mono overflow-hidden py-16 md:py-32">
      
      {/* Subtle Orbital Geometry */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-10">
        <svg className="w-[1200px] h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="0" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.05" strokeDasharray="1 3" />
        </svg>
      </div>

      {/* Atmospheric Background (Lower Left) */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-[600px] opacity-[0.03] pointer-events-none mix-blend-screen">
         <Image src="/partners/partner_venue_1789334981910.jpg" alt="Atmosphere" fill className="object-cover object-bottom" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-[#030303]" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/20 via-[#030303]/80 to-[#030303]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start h-full lg:sticky lg:top-32 relative z-20">
          <div className="flex flex-col w-full">
            <SectionHeading number="09" title="STORIES" className="mb-12" />
            
            <h2 className={`text-white font-trona text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-12 transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              THE STORIES<br />
              <span className="text-[#FF6100]">BEHIND</span><br />
              THE CITY.
            </h2>
            
            <div className={`flex flex-col gap-6 text-[#aaaaaa] text-xs md:text-sm lg:text-base tracking-[0.3em] uppercase transition-all duration-[800ms] delay-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <span className="leading-loose">PLAYERS / TEAMS / CULTURE /<br/>EXPERIENCE / COMMUNITY</span>
            </div>
          </div>
          

        </div>

        {/* Right Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col">
          
          <div className={`flex justify-end items-center w-full text-[#aaaaaa] text-[10px] tracking-[0.3em] uppercase mb-8 transition-all duration-[800ms] delay-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <span>LATEST</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6100] animate-[pulse_3s_ease-in-out_infinite]"></span>
            </div>
          </div>

          {/* Featured Panel */}
          <div className={`w-full border border-white/10 p-6 md:px-10 md:py-8 mb-8 group cursor-pointer hover:border-[#FF6100]/30 bg-[#0a0a0a] relative overflow-hidden transition-all duration-[1000ms] delay-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="absolute inset-0 z-0">
               <Image src="/partners/partner_team_1789334919484.jpg" alt="Featured Story" fill className="object-cover object-right opacity-30 group-hover:opacity-50 group-hover:scale-[1.02] transition-all duration-1000 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
              <span className="text-[#FF6100] font-mono text-[10px] tracking-widest mb-6">01</span>
              
              <div>
                <h3 className="text-white font-trona text-4xl md:text-5xl leading-[0.9] tracking-[-0.02em] max-w-[400px] mb-6 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500">
                  THE PLAYERS<br />WHO MADE<br />THE <span className="text-[#FF6100]">CUT.</span>
                </h3>
                
                <div className="flex flex-col gap-2 mb-8">
                  <span className="text-[#aaaaaa] font-mono text-[10px] tracking-[0.2em] uppercase">TALENT. HUSTLE. A BIGGER STAGE.</span>
                  <span className="text-[#666] font-mono text-[9px] tracking-widest uppercase">PLAYER / 08.06.26</span>
                </div>
                <CinematicButton text="READ STORY" number="03" className="mt-4" />
              </div>
            </div>
          </div>

          {/* Index Stories */}
          <div className="flex flex-col w-full border-t border-white/10">
            {indexStories.map((story, index) => (
              <div 
                key={story.num} 
                className={`group flex items-center gap-4 md:gap-6 py-4 md:py-6 px-4 md:px-8 border-b border-white/10 hover:border-[#FF6100]/30 hover:bg-[#FF6100]/[0.02] transition-all duration-[800ms] cursor-pointer w-full ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${1400 + index * 150}ms` }}
              >
                <span className="text-[#FF6100] font-mono text-xs md:text-sm tracking-widest w-6 shrink-0 transition-transform duration-500 group-hover:scale-110">{story.num}</span>
                
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="text-white font-trona text-2xl md:text-3xl lg:text-4xl tracking-tight mb-1 md:mb-2 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500">{story.title}</h4>
                  <span className="text-[#666] group-hover:text-[#aaa] font-mono text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-500">{story.meta}</span>
                </div>
                
                {/* Cinematic Image Preview */}
                <div className="hidden md:block w-24 h-12 md:w-32 md:h-16 group-hover:w-48 md:group-hover:w-72 bg-[#0a0a0a] border border-white/10 relative overflow-hidden shrink-0 group-hover:border-white/30 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ml-4">
                  <Image src={story.image} alt={story.title} fill className="object-cover opacity-40 group-hover:opacity-100 transform scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                </div>
                
                <div className="text-[#444] group-hover:text-white transform group-hover:translate-x-2 transition-all duration-500 ml-4 shrink-0">
                  <span className="font-sans text-sm md:text-lg">↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
