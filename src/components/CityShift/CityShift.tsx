"use client";

import { useState, useEffect } from 'react';
import SectionHeading from '../SectionHeading';
import CinematicButton from '../CinematicButton';

// --- Background Graphics ---
const MinimalHoop = ({ isLive }: { isLive: boolean }) => (
  <div className={`absolute left-1/2 bottom-[20%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-10 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLive ? 'opacity-[0.1] -translate-y-4' : 'opacity-[0.02]'}`}>
    <div className="w-[1px] h-32 md:h-48 bg-white/50" style={{ transform: 'translateY(60px)' }}></div>
    <div className="relative -mt-16">
      <div className="w-24 md:w-32 h-16 md:h-20 border border-white/40 flex items-center justify-center relative">
        <div className="w-8 md:w-10 h-6 md:h-8 border border-white/60 absolute bottom-2"></div>
      </div>
      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 md:h-3 border border-white/80 rounded-[50%] transition-shadow duration-[1500ms] ${isLive ? 'shadow-[0_0_20px_rgba(255,97,0,0.8)] border-[#FF6100]' : 'shadow-none'}`}></div>
      <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 md:w-10 h-8 md:h-10 opacity-50" viewBox="0 0 40 50">
        <path d="M0,0 L10,50 M10,0 L15,50 M20,0 L20,50 M30,0 L25,50 M40,0 L30,50" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M0,10 L40,10 M2,20 L38,20 M4,30 L36,30" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  </div>
);

const MinimalCourt = ({ isLive }: { isLive: boolean }) => (
  <div className={`absolute left-1/2 bottom-[-15%] -translate-x-1/2 w-full max-w-[1200px] h-[50vh] perspective-[1000px] pointer-events-none z-0 flex items-end justify-center overflow-hidden transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLive ? 'opacity-[0.1]' : 'opacity-[0.03]'}`}>
    <svg className="w-full h-full origin-bottom" viewBox="0 0 200 200" preserveAspectRatio="none" style={{ transform: 'rotateX(75deg) scaleY(2)' }}>
      <rect x="10" y="0" width="180" height="200" fill="none" stroke="white" strokeWidth="0.5" />
      <rect x="70" y="120" width="60" height="80" fill="none" stroke="white" strokeWidth="0.5" />
      <path d="M 70 120 A 30 30 0 0 1 130 120" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M 70 120 A 30 30 0 0 0 130 120" fill="none" stroke="white" strokeWidth="0.5" />
      <path d="M 25 200 L 25 150 A 75 75 0 0 1 175 150 L 175 200" fill="none" stroke="white" strokeWidth="0.5" />
      <line x1="10" y1="0" x2="190" y2="0" stroke="white" strokeWidth="0.5" />
      <circle cx="100" cy="0" r="20" fill="none" stroke="white" strokeWidth="0.5" />
    </svg>
  </div>
);

export default function CityShift() {
  const [isLive, setIsLive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isLive) {
      document.body.classList.add('city-shift-live');
    } else {
      document.body.classList.remove('city-shift-live');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('city-shift-live');
    };
  }, [isLive]);

  return (
    <section id="city-shift" className="w-full min-h-screen bg-[#020202] relative font-mono text-[#aaaaaa] text-[10px] md:text-xs tracking-[0.2em] overflow-hidden flex flex-col justify-between p-6 md:p-12 z-10 border-t border-white/5">
      
      {/* Background Environment */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
        
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />
        
        {/* Ambient Light */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] mix-blend-screen transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLive ? 'w-[100vw] h-[100vw] bg-[#FF6100]/[0.08]' : 'w-[50vw] h-[50vw] bg-[#FF6100]/[0.015]'}`} />

        <MinimalCourt isLive={isLive} />
        <MinimalHoop isLive={isLive} />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center w-full relative z-50">
        <SectionHeading number="06" title="CITY SHIFT" />
        <span className="flex items-center gap-3 tracking-[0.3em] uppercase transition-colors duration-1000">
          CITY SHIFT / {isLive ? <span className="text-white">LIVE</span> : 'ACTIVE'}
          <span className={`w-2 h-2 rounded-full transition-all duration-[800ms] ${isLive ? 'bg-[#FF6100] shadow-[0_0_15px_rgba(255,97,0,1)]' : isHovered ? 'bg-[#FF6100] shadow-[0_0_8px_rgba(255,97,0,0.6)]' : 'bg-[#444] shadow-none'}`}></span>
        </span>
      </div>

      {/* Center Main Composition */}
      <div className={`flex flex-col items-center justify-center relative z-50 my-auto transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLive ? '-translate-y-6' : 'translate-y-0'}`}>
        
        <h1 className="text-[18vw] md:text-[14rem] lg:text-[16rem] font-trona font-normal tracking-[-0.02em] leading-[0.8] text-center flex flex-col mb-16 relative">
          
          {/* Saturn Rings */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] -rotate-12">
             
             {/* Ring 1 - Inner */}
             <div className="absolute top-1/2 left-1/2 w-[100%] h-[40%] -translate-x-1/2 -translate-y-1/2">
               <div className="w-full h-full rounded-[50%] border-[1px] border-white/20 animate-[spin_30s_linear_infinite]" />
             </div>

             {/* Ring 2 - Middle (Orange tint) */}
             <div className="absolute top-1/2 left-1/2 w-[115%] h-[45%] -translate-x-1/2 -translate-y-1/2">
               <div className="w-full h-full rounded-[50%] border-[1.5px] border-[#FF6100]/15 animate-[spin_40s_linear_infinite_reverse]" />
             </div>

             {/* Ring 3 - Outer */}
             <div className="absolute top-1/2 left-1/2 w-[130%] h-[50%] -translate-x-1/2 -translate-y-1/2">
               <div className="w-full h-full rounded-[50%] border-[1px] border-white/10 animate-[spin_50s_linear_infinite]" />
             </div>

          </div>

          <span className="text-[#f5f5f5] relative z-10">CITY</span>
          <span className="bg-gradient-to-b from-[#ff8b54] via-[#cc241d] to-[#8a1310] bg-clip-text text-transparent relative z-10">SHIFT<span className="text-[#cc241d]">.</span></span>
        </h1>
        
        <div className="flex flex-col items-center gap-3 mb-16 text-[#888]">
          <span className="tracking-[0.4em] uppercase">SAME COURT.</span>
          <span className="tracking-[0.4em] uppercase">DIFFERENT ENERGY.</span>
        </div>
        
        <CinematicButton 
          text="ACTIVATE CITY SHIFT" 
          activeStateText="CITY SHIFT / ACTIVE" 
          isActive={isLive} 
          onClick={() => setIsLive(!isLive)} 
          number="04" 
        />
      </div>

      {/* Empty Footer spacing to balance the top header */}
      <div className="flex justify-between items-center w-full relative z-50 opacity-0 pointer-events-none">
        <SectionHeading number="06" title="CITY SHIFT" />
      </div>

    </section>
  );
}
