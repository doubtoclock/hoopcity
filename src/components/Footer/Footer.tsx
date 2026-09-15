'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial calls
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionTop = sectionRef.current?.offsetTop || 0;
  const sectionHeight = sectionRef.current?.offsetHeight || 0;
  
  // Mathematically pin the inner container to the bottom of the viewport!
  // At the absolute bottom of the page, this equals 0, so the text is perfectly centered in the section.
  // As you scroll up, this becomes negative, pushing the text up relative to the section, keeping it perfectly stationary on screen!
  const scrollBottom = scrollY + windowHeight;
  const sectionBottom = sectionTop + sectionHeight;
  // Prevent positive offset if the page is taller than the scroll bounds (e.g. overscroll on Mac)
  const offset = Math.min(0, scrollBottom - sectionBottom);

  return (
    <>
      {/* Foreground Shutter - The Footer */}
      <footer className="relative z-20 w-full bg-[#030303] font-mono text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-[#888] pt-16 pb-8 md:pt-24 md:pb-10 shadow-[0_30px_50px_rgba(0,0,0,1)]">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 mb-24 relative w-full">
            
            {/* Left */}
            <div className="w-full md:w-1/3 flex flex-col gap-3 items-center md:items-start md:pt-12 shrink-0">
              <span className="tracking-[0.3em] whitespace-nowrap">NAGPUR / INDIA</span>
              <span className="tracking-[0.3em] whitespace-nowrap">SEASON 001 / 2026</span>
            </div>

            {/* Center (Logo & Orbital) */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center relative shrink-0">
              {/* Crosshair Graphic */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Vertical Line */}
                <div className="w-[1px] h-[350px] bg-white/[0.03] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#FF6100]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#FF6100]"></div>
                </div>
                {/* Horizontal Line */}
                <div className="h-[1px] w-[350px] bg-white/[0.03] absolute"></div>
                {/* Outer Ring */}
                <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.05]"></div>
                {/* Inner Ring */}
                <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.02]"></div>
              </div>
              
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 z-10 flex items-center justify-center">
                <img src="/logo.svg" alt="HOOP CITY" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,97,0,0.4)]" />
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 relative z-10 text-[10px] md:text-[12px] tracking-[0.3em] whitespace-nowrap">
                <span>BASKETBALL</span> 
                <span className="text-[#444]">/</span> 
                <span>CULTURE</span> 
                <span className="text-[#444]">/</span> 
                <span>COMMUNITY</span>
              </div>
            </div>

            {/* Right (Navigation) */}
            <div className="w-full md:w-1/3 flex flex-row justify-center md:justify-end gap-10 md:gap-14 md:pt-4 shrink-0">
              <div className="flex flex-col gap-4 items-start">
                <span className="text-white mb-2 tracking-[0.3em] whitespace-nowrap">EXPLORE</span>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">ECOSYSTEM</a>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">LEAGUE</a>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">STORIES</a>
              </div>
              
              <div className="flex flex-col gap-4 items-start">
                <span className="text-white mb-2 tracking-[0.3em] whitespace-nowrap">CONNECT</span>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">INSTAGRAM</a>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">YOUTUBE</a>
                <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">CONTACT</a>
              </div>
              
              <div className="flex flex-col gap-4 items-start">
                <span className="text-white mb-2 tracking-[0.3em] whitespace-nowrap">PARTNERS</span>
                <a href="#" className="text-[#FF6100] hover:text-[#F40B9B] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">BECOME A PARTNER <span className="font-sans font-normal text-[12px] leading-none">↗</span></a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-2 text-[10px] md:text-[11px] tracking-widest text-[#555]">
            <span>&copy; 2026 HOOP CITY</span>
            <span>BUILT IN NAGPUR.</span>
          </div>

        </div>
      </footer>

      {/* Cinematic Reveal Section - Tightened height to remove huge empty gaps */}
      <section ref={sectionRef} className="relative z-10 w-full h-[35vh] md:h-[45vh] bg-gradient-to-b from-[#0a0200] via-[#4a1500] to-[#FF6100] overflow-hidden">
        
        {/* Absolute layer that perfectly tracks the BOTTOM of the viewport using JS transform */}
        <div 
          className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center will-change-transform pointer-events-none"
          style={{ transform: `translateY(${offset}px)` }}
        >
          
          {/* Background Atmosphere */}
          <div className="absolute inset-0 z-0">
            {/* Film Grain Texture */}
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />
            
            {/* Intense Orange Glow to enhance the gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-[#FF6100] to-transparent opacity-40 mix-blend-overlay" />
            
            {/* Subtle Court Lines in Background */}
            <svg className="absolute bottom-[-20%] w-full h-[80%] opacity-[0.1] mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="100" x2="50" y2="0" stroke="white" strokeWidth="0.05" strokeDasharray="1 3" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.05" fill="none" />
              <path d="M 20 100 Q 50 20 80 100" stroke="white" strokeWidth="0.05" fill="none" />
            </svg>
          </div>

          {/* Massive Editorial Typography */}
          <div className="relative z-10 w-full px-4 mx-auto flex flex-col items-center text-center">
            
            <h2 className="font-ribes text-[#ffffff] text-[15vw] md:text-[13vw] leading-[0.8] tracking-[-0.02em] whitespace-nowrap drop-shadow-[0_20px_50px_rgba(0,0,0,1)] relative">
              FOR THE PLOT<span className="text-black drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-sans">.</span>
            </h2>
            
            <p className="font-mono text-white text-[9px] md:text-[11px] tracking-[0.5em] uppercase mt-8 md:mt-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              THE CITY PLAYS AFTER DARK.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
