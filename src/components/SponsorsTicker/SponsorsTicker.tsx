"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const partnersData = [
  {
    id: "croma",
    name: "CROMA",
    tagline: "TECH FOR A BRIGHTER TOMORROW.",
    description:
      "Powering lifestyles with innovation, Croma supports the next generation of dreamers, creators and players.",
    imagePath: "/images/sponsors/croma-seeklogo.png",
    brandColor: "#00E5CC"
  },
  {
    id: "axis",
    name: "AXIS BANK",
    tagline: "BANKING ON THE FUTURE.",
    description:
      "Empowering the next generation of athletes with financial tools to build their legacy.",
    imagePath: "/images/sponsors/Axis-bank.png",
    brandColor: "#97144D"
  },
  {
    id: "shivnaresh",
    name: "SHIVNARESH",
    tagline: "THE FABRIC OF CHAMPIONS.",
    description:
      "Premium athletic wear designed for peak performance and ultimate comfort on the court.",
    imagePath: "/images/sponsors/Shivnaresh.png",
    brandColor: "#E31837",
    scale: 1.8
  },
  {
    id: "kukreja",
    name: "KUKREJA",
    tagline: "BUILDING THE FOUNDATION.",
    description:
      "Developing world-class infrastructure and venues to elevate the game of 3x3 basketball.",
    imagePath: "/images/sponsors/logo-white.avif",
    brandColor: "#D4AF37"
  },
  {
    id: "charliwar",
    name: "CHARLIWAR ASSOCIATE",
    tagline: "LEGAL EXCELLENCE.",
    description:
      "Providing trusted counsel and strategic partnerships to secure the league's future.",
    imagePath: "/images/sponsors/charlewar.png",
    brandColor: "#FFFFFF"
  },
  {
    id: "reliance",
    name: "RELIANCE",
    tagline: "CONNECTING THE NATION.",
    description:
      "Bridging the gap between fans and the game through unmatched digital connectivity and reach.",
    imagePath: "/images/sponsors/reliance-retail-logo.png",
    brandColor: "#0033A0"
  },
];

export default function SponsorsTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef(partnersData[0].id);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const checkCenterItem = () => {
      if (!trackRef.current || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      let closestPartnerId = activeIdRef.current;
      let minDistance = Infinity;
      
      const children = Array.from(trackRef.current.children) as HTMLElement[];
      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          const partnerId = child.getAttribute('data-partner-id');
          if (partnerId) {
            closestPartnerId = partnerId;
          }
        }
      });
      
      if (closestPartnerId !== activeIdRef.current) {
        activeIdRef.current = closestPartnerId;
        const index = partnersData.findIndex(p => p.id === closestPartnerId);
        if (index !== -1) setActiveIndex(index);
      }
      
      animationFrameId = requestAnimationFrame(checkCenterItem);
    };
    
    animationFrameId = requestAnimationFrame(checkCenterItem);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const activePartner = partnersData[activeIndex];

  return (
    <section className="w-full bg-[#050505] relative flex flex-col justify-center py-20 overflow-hidden border-t border-white/5">
      {/* Container */}
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 flex flex-col h-full z-10 relative">
        {/* Top Header */}
        <div className="flex justify-between items-start w-full mb-16 md:mb-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-ribes text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase mt-4">
              BUILT TOGETHER<span className="transition-colors duration-500" style={{ color: activePartner.brandColor }}>.</span>
            </h2>
            <p className="text-[#666] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2">
              BRANDS THAT MOVE THE CITY.
            </p>
          </div>

          <div className="hidden lg:flex flex-col text-[#444] font-mono text-[9px] tracking-[0.3em] text-right uppercase gap-2">
            <span>BASKETBALL</span>
            <span>CULTURE</span>
            <span>COMMUNITY</span>
          </div>
        </div>

        {/* Carousel Section */}
        <div 
          className="flex items-center w-full mb-16 md:mb-20 relative group" 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Track container */}
          <div className="flex-grow overflow-hidden relative">
            <div 
              className="flex items-center w-max animate-marquee" 
              ref={trackRef}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...partnersData, ...partnersData, ...partnersData, ...partnersData].map((partner, index) => {
                const isActive = partner.id === activePartner.id;
                return (
                  <div
                    key={`${partner.id}-${index}`}
                    data-partner-id={partner.id}
                    onClick={() => setActiveIndex(partnersData.findIndex(p => p.id === partner.id))}
                    className="flex-shrink-0 w-48 md:w-64 lg:w-72 h-28 md:h-32 flex items-center justify-center cursor-pointer transition-all duration-500 relative"
                  >
                    {/* Active State Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 z-0 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="absolute inset-0 border" style={{ backgroundColor: `${partner.brandColor}1A`, borderColor: partner.brandColor, boxShadow: `0 0 25px ${partner.brandColor}4D` }}></div>
                      {/* Crosshairs */}
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l" style={{ borderColor: partner.brandColor }}></div>
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r" style={{ borderColor: partner.brandColor }}></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l" style={{ borderColor: partner.brandColor }}></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r" style={{ borderColor: partner.brandColor }}></div>
                    </div>

                    <div
                      className={`relative w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 z-10 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-40 hover:opacity-80 grayscale"}`}
                      style={{ transform: partner.scale ? `scale(${partner.scale})` : undefined }}
                    >
                      <Image
                        src={partner.imagePath}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10"></div>
          </div>
        </div>


      </div>
    </section>
  );
}
