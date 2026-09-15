'use client';
import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading';
import Image from 'next/image';
import CinematicButton from '../CinematicButton';

export default function NextSeason() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full min-h-screen bg-[#030303] relative flex flex-col items-center justify-center font-mono overflow-hidden py-32 border-t border-white/5">
      
      <style>{`
        @keyframes lightSweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-sweep {
          animation: lightSweep 12s ease-in-out infinite;
        }
      `}</style>

      {/* Film Grain Texture */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* 6. Huge HOOP CITY Wordmark */}
      <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none transition-all duration-[3000ms] ease-out delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h1 className="text-white/[0.015] font-trona text-[25vw] md:text-[20vw] leading-none select-none tracking-tighter whitespace-nowrap blur-[2px]">HOOP CITY</h1>
      </div>

      {/* 3. Dark atmospheric night photograph */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-[4000ms] ease-out ${isVisible ? 'opacity-[0.08]' : 'opacity-0'}`}>
         <Image src="/partners/partner_city_shift_1789334941712.jpg" alt="Atmosphere" fill className="object-cover object-bottom mix-blend-screen grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]" />
      </div>

      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none overflow-hidden">
        
        {/* 4. Subtle Red/Orange Glow */}
        <div className={`absolute bottom-[-10%] w-[80%] max-w-[1000px] h-[500px] bg-gradient-to-t from-[#FF6100] to-[#F40B9B] rounded-full blur-[200px] mix-blend-screen transition-all duration-[3000ms] ease-out delay-500 ${isVisible ? 'opacity-[0.06]' : 'opacity-0'}`} />
        
        {/* 2. Faint Hoop Silhouette */}
        <div className={`absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] transition-all duration-[3000ms] ease-out delay-[400ms] ${isVisible ? 'opacity-[0.02] translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[0.1]">
             {/* Backboard */}
             <rect x="35" y="25" width="30" height="20" />
             {/* Inner Box */}
             <rect x="44" y="32" width="12" height="8" />
             {/* Rim */}
             <path d="M45,40 Q50,44 55,40" />
             {/* Net (Abstract) */}
             <path d="M46,40 L48,46 L52,46 L54,40" strokeDasharray="1 1" />
           </svg>
        </div>

        {/* 1. Perspective Court Lines */}
        <div className={`absolute bottom-0 w-[1400px] h-[70vh] transition-all duration-[3000ms] ease-out delay-[200ms] ${isVisible ? 'opacity-[0.03] scale-100' : 'opacity-0 scale-105'}`}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            {/* Perspective Lines */}
            <line x1="50" y1="100" x2="50" y2="20" stroke="white" strokeWidth="0.05" strokeDasharray="2 2" />
            <line x1="10" y1="100" x2="45" y2="20" stroke="white" strokeWidth="0.05" />
            <line x1="90" y1="100" x2="55" y2="20" stroke="white" strokeWidth="0.05" />
            <line x1="-30" y1="100" x2="40" y2="20" stroke="white" strokeWidth="0.05" />
            <line x1="130" y1="100" x2="60" y2="20" stroke="white" strokeWidth="0.05" />
            {/* Free Throw Line */}
            <path d="M40,30 Q50,20 60,30" stroke="white" strokeWidth="0.05" />
            <line x1="35" y1="40" x2="65" y2="40" stroke="white" strokeWidth="0.05" />
          </svg>
        </div>

        {/* Slow Light Sweep */}
        <div className={`absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-[#F40B9B] to-transparent opacity-[0.015] animate-sweep pointer-events-none transition-opacity duration-[3000ms] delay-1000 ${isVisible ? 'block' : 'hidden'}`} />
      </div>

      {/* 7. Tiny Editorial Metadata Labels */}
      <div className={`absolute top-12 left-12 text-[#444] text-[8px] tracking-[0.3em] uppercase transition-all duration-[2000ms] delay-[1000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>NAGPUR / INDIA</div>
      <div className={`absolute top-12 right-12 text-[#444] text-[8px] tracking-[0.3em] uppercase transition-all duration-[2000ms] delay-[1100ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>SEASON 001</div>
      <div className={`absolute bottom-12 left-12 text-[#444] text-[8px] tracking-[0.3em] uppercase transition-all duration-[2000ms] delay-[1200ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>COURT / A</div>
      <div className={`absolute bottom-12 right-12 text-[#444] text-[8px] tracking-[0.3em] uppercase transition-all duration-[2000ms] delay-[1300ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>END OF SEASON 001</div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-12">
        
        <div className={`transition-all duration-[2000ms] ease-out delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SectionHeading number="10" title="NEXT SEASON" className="mb-12 md:mb-16 justify-center" />
        </div>

        <h2 className={`text-white font-trona text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-[-0.02em] mb-12 md:mb-16 drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-[2000ms] ease-out delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>
          SEE YOU<br />
          ON THE COURT.
        </h2>

        <div className={`flex flex-col items-center gap-2 mb-16 md:mb-24 transition-all duration-[2000ms] ease-out delay-[1200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[#aaaaaa] text-[10px] md:text-xs tracking-[0.3em] uppercase">SEASON 001 / NAGPUR</span>
          <span className="text-[#666] text-[9px] md:text-[10px] tracking-widest">2026</span>
        </div>
        <div className={`transition-all duration-[2000ms] delay-[1400ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CinematicButton text="ENTER HOOP CITY" number="08" />
        </div>
      </div>
    </section>
  );
}
