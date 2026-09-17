"use client";

import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading';

export default function Tickets() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="tickets"
      ref={containerRef}
      className="relative w-full bg-transparent flex items-center justify-center overflow-hidden py-16 md:py-24 border-t border-transparent"
    >
      {/* Background Orbitals */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Giant Rings */}
        <div className="absolute w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] rounded-full border border-white/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute w-[60vw] h-[20vw] rounded-[100%] border border-white/[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 mix-blend-screen" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-tr from-[#FF6100]/20 to-[#F40B9B]/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-16 flex flex-col xl:flex-row justify-between items-center xl:items-stretch h-full gap-16 xl:gap-0">
        
        {/* LEFT COLUMN: Typography */}
        <div className="w-full xl:w-[25%] flex flex-col justify-between h-full relative z-20 mt-8 xl:mt-0">
          
          <div className="flex flex-col gap-6 md:gap-10">
            {/* Top tiny text */}
            <div className="flex items-center gap-4 text-[#888] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span>THE CUT</span>
              <span className="text-[#444]">/</span>
              <span>SEASON 001</span>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading number="05" title="TICKETS" />
              
              <h2 className="font-ribes text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-wider mt-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                SECURE<br/>YOUR SPOT<span className="text-[#FF6100]">.</span>
              </h2>

              <p className="font-mono text-[#888] text-[10px] md:text-[11px] tracking-[0.3em] uppercase leading-relaxed mt-4">
                SAME COURT.<br/>DIFFERENT ENERGY.
              </p>

              <div className="w-12 h-[1px] bg-white/20 mt-2 mb-2"></div>

              <p className="font-sans text-[#a0a0a0] text-sm md:text-base leading-relaxed max-w-[300px]">
                Secure your pass. Witness the city's best battle on the court. Arrive early. The culture awaits.
              </p>
            </div>
          </div>

          <div className="hidden xl:flex flex-col gap-2 mt-20 text-[#666] font-mono text-[9px] tracking-[0.3em] uppercase">
            <span>NAGPUR / INDIA</span>
            <span>FOR THE PLOT™.</span>
          </div>

        </div>

        {/* CENTER COLUMN: The Ticket Cards */}
        <div className="w-full xl:w-[50%] flex justify-center items-center relative h-[500px] md:h-[550px] z-30 group">
          
          {/* Back Card */}
          <div className={`absolute w-[85%] max-w-[380px] aspect-[1/1.53] bg-[url('/images/ticket-bg.png')] bg-[length:100%_100%] bg-no-repeat bg-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'rotate-[-8deg] group-hover:rotate-0 -translate-x-4 md:-translate-x-8 group-hover:translate-x-0 opacity-40' : 'rotate-0 translate-x-0 opacity-0'} brightness-[0.2] saturate-0`}>
          </div>

          {/* Front Card with Image Background */}
          <div className={`absolute w-[85%] max-w-[380px] aspect-[1/1.55] bg-[url('/images/ticket-bg.png')] bg-[length:100%_100%] bg-no-repeat bg-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col px-10 py-12 md:px-12 md:py-14 ${isVisible ? 'rotate-[4deg] group-hover:rotate-0 translate-x-2 md:translate-x-4 group-hover:translate-x-0 opacity-100' : 'rotate-0 translate-x-0 opacity-0'}`} style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.9))' }}>
            <div className="relative z-10 flex flex-col h-full w-full">

            {/* Top Row */}
            <div className="flex justify-between items-center w-full text-white/50 font-mono text-[9px] tracking-[0.3em] uppercase">
              <div className="flex items-center gap-4">
                <span>THE CUT</span>
                <span>/</span>
                <span>SEASON 001</span>
              </div>
              {/* Globe Icon placeholder */}
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute w-full h-[1px] bg-white/20 top-1/2 -translate-y-1/2"></div>
                 <div className="absolute h-full w-[1px] bg-white/20 left-1/2 -translate-x-1/2"></div>
                 <div className="absolute w-full h-full border border-white/20 rounded-full scale-[0.6]"></div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mt-2 mb-2">
              <span className="font-ribes text-white text-5xl md:text-6xl tracking-wider drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">₹350</span>
              <span className="font-mono text-white/60 text-[9px] md:text-[10px] tracking-widest uppercase">ENTRY</span>
            </div>

            <p className="font-sans text-[#a0a0a0] text-[11px] md:text-xs leading-relaxed mb-8 pr-4">
              Secure your pass. Witness the city's best battle on the court. Arrive early. The culture awaits.
            </p>

            {/* Event Details Grid */}
            <div className="w-full grid grid-cols-3 border-t border-b border-white/10 py-3 mb-4 relative">
              
              <div className="flex flex-col gap-1">
                <span className="font-mono text-white text-base">01</span>
                <span className="font-mono text-[#666] text-[8px] tracking-widest uppercase">1V1</span>
              </div>

              <div className="flex flex-col gap-1 border-l border-white/10 pl-4">
                <span className="font-mono text-white text-base">02</span>
                <span className="font-mono text-[#666] text-[8px] tracking-widest uppercase">SHOOTOUT</span>
              </div>

              <div className="flex flex-col gap-1 border-l border-white/10 pl-4">
                <span className="font-mono text-white text-base">03</span>
                <span className="font-mono text-[#666] text-[8px] tracking-widest uppercase">3V3</span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex justify-between items-end mt-auto gap-4">
              
              <div className="flex gap-4 items-end">
                {/* QR Code Placeholder */}
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-lg p-[6px] grid grid-cols-5 gap-[2px] shrink-0">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`bg-white/60 rounded-sm ${(i * 7 + 13) % 10 > 3 ? 'opacity-100' : 'opacity-0'}`}></div>
                  ))}
                </div>

                <div className="flex flex-col gap-6 text-[#888] font-mono text-[9px] tracking-[0.2em] uppercase pb-1 hidden sm:flex">
                  <div className="flex flex-col">
                    <span className="text-white/80">NAGPUR</span>
                    <span>INDIA</span>
                  </div>
                  <div className="flex flex-col">
                    <span>SEASON 001</span>
                    <span>FOR THE PLOT™.</span>
                  </div>
                </div>
              </div>
              
              {/* Barcode Placeholder */}
              <div className="flex h-10 gap-[2px] items-end shrink-0 opacity-40 mix-blend-screen hidden sm:flex">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="bg-white" style={{ width: `${(i * 13) % 4 + 1}px`, height: `${(i * 29) % 21 + 20}px` }}></div>
                ))}
              </div>
            </div>

            {/* Floating Action Button inside the bottom edge */}
            <button className="mt-4 bg-[#F5F5F5] text-black hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-5 py-2.5 flex items-center gap-3 group/btn shadow-[0_10px_30px_rgba(255,97,0,0.3)] w-fit self-start">
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase">BUY TICKET</span>
              <span className="font-sans text-base leading-none transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
            </button>

            </div> {/* Close relative z-10 inner container */}
          </div> {/* Close Front Card with Image Background */}
          
          {/* Small text below cards */}
          <div className={`absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[#FF6100] font-mono text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-1 h-1 rounded-full bg-[#FF6100] shadow-[0_0_10px_#FF6100]"></div>
            <span>A CITY DRIVEN BY HOOPS</span>
          </div>

        </div>

        {/* RIGHT COLUMN: Icons & Features */}
        <div className="w-full xl:w-[25%] flex flex-col justify-between items-start xl:items-end h-full relative z-20 text-left xl:text-right mt-16 xl:mt-0">
          
          <div className="hidden xl:flex flex-col gap-2 text-[#666] font-mono text-xs tracking-[0.3em] uppercase">
            <span>BASKETBALL</span>
            <span>CULTURE</span>
            <span>COMMUNITY</span>
          </div>

          <div className="flex flex-col gap-12 w-full max-w-[300px] xl:max-w-none ml-auto mt-0 xl:mt-20">
            
            {/* Feature 1 */}
            <div className="flex flex-row xl:flex-row-reverse items-center justify-start xl:justify-start gap-8 group">
              <div className="w-8 h-8 relative shrink-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {/* Asterisk Icon */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white -translate-y-1/2 -rotate-45"></div>
              </div>
              <span className="font-mono text-[#a0a0a0] group-hover:text-white transition-colors duration-500 text-xs md:text-sm tracking-[0.2em] uppercase leading-relaxed max-w-[150px]">
                GET YOUR<br/>DIGITAL PASS
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-row xl:flex-row-reverse items-center justify-start xl:justify-start gap-8 group">
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center shrink-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <div className="w-5 h-5 rounded-full border border-white/60"></div>
                <div className="absolute w-2 h-2 rounded-full border border-white"></div>
              </div>
              <span className="font-mono text-[#a0a0a0] group-hover:text-white transition-colors duration-500 text-xs md:text-sm tracking-[0.2em] uppercase leading-relaxed max-w-[150px]">
                EXCLUSIVE<br/>ON-GROUND ACCESS
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-row xl:flex-row-reverse items-center justify-start xl:justify-start gap-8 group">
              <div className="w-8 h-8 grid grid-cols-3 gap-1 shrink-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 p-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-white/60 rounded-full w-full h-full"></div>
                ))}
              </div>
              <span className="font-mono text-[#a0a0a0] group-hover:text-white transition-colors duration-500 text-xs md:text-sm tracking-[0.2em] uppercase leading-relaxed max-w-[150px]">
                BE PART OF<br/>THE MOVEMENT
              </span>
            </div>

          </div>

          <div className="hidden xl:flex items-center gap-4 mt-20">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[#666] font-mono text-xs tracking-[0.3em] uppercase">SEASON 001</span>
          </div>

        </div>

      </div>
    </section>
  );
}
