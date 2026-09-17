"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;

    setTilt({
      x: -yNorm * 20,
      y: xNorm * 20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-transparent">


      {/* Main Center Composition */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center mt-12 w-full px-4">
        {/* 1. Logo */}
        <div
          className="logo-stage relative z-20 animate-fade-scale-in"
          style={{ animationDelay: "0.2s", animationFillMode: "both", perspective: "1000px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="logo-aura"></div>
          <div className="logo-3d">
            <img
              src="/logo.svg"
              alt="Hoop City"
              draggable="false"
              className="drop-shadow-[0_0_15px_rgba(255,97,0,0.3)] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center -mt-12 md:-mt-20 z-10 relative">
          {/* 2. FOR THE PLOT. (Editorial Kicker) */}
          <div
            className="flex items-center gap-4 mb-4 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#FF6100]/40"></div>
            <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-[#FF6100]">
              FOR THE PLOT™.
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-[#FF6100]/40"></div>
          </div>

          {/* 3. HOOP CITY Headline */}
          <h1
            className="text-[14vw] md:text-[7.5rem] xl:text-[9.5rem] leading-[0.85] tracking-[-0.02em] font-normal font-trona flex items-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-reveal-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <span className="text-white/95 mix-blend-lighten">HOOP</span>
            <span
              className="bg-gradient-to-b from-[#ff7a2d] via-[#f73131] to-[#ba0000] text-transparent bg-clip-text ml-4 md:ml-8"
              style={{ filter: "drop-shadow(0 0 20px rgba(255,0,0,0.2))" }}
            >
              CITY
            </span>
          </h1>

          {/* 4. THE CITY PLAYS AFTER DARK. (Tagline) */}
          <p
            className="mt-8 text-sm md:text-base lg:text-lg font-bold tracking-[0.6em] text-white/90 font-ribes uppercase animate-fade-in"
            style={{
              textShadow: "0 0 15px rgba(255,97,0,0.5)",
              animationDelay: "0.8s",
              animationFillMode: "both",
            }}
          >
            THE CITY PLAYS AFTER DARK
            <span
              className="text-[#FF6100]"
              style={{ textShadow: "0 0 15px rgba(255,97,0,0.8)" }}
            >
              .
            </span>
          </p>

          <div
            className="w-[1px] h-6 bg-white/20 mt-8 mb-6 animate-fade-in"
            style={{ animationDelay: "0.9s", animationFillMode: "both" }}
          ></div>

          <p
            className="text-sm md:text-base tracking-[0.4em] text-[#888888] font-mono uppercase mb-3 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            3 × 3 BASKETBALL
          </p>
          <p
            className="text-sm md:text-base tracking-[0.4em] text-[#888888] font-mono uppercase animate-fade-in"
            style={{ animationDelay: "1.1s", animationFillMode: "both" }}
          >
            NAGPUR / SEASON 001
          </p>
        </div>
      </div>

      {/* Absolute Corner Overlays (Metadata) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none animate-fade-in"
        style={{ animationDelay: "1.5s", animationFillMode: "both" }}
      >
        {/* Top Left (under navbar) */}
        <div className="absolute top-32 left-8 md:left-12 flex flex-col gap-2 font-mono font-bold text-sm md:text-base tracking-[0.3em] text-[#888]">
          <div className="w-3 h-[2px] bg-[#e61e25] mb-2"></div>
          <span>BASKETBALL</span>
          <span>CULTURE</span>
          <span>COMMUNITY</span>
        </div>






      </div>
    </section>
  );
}
