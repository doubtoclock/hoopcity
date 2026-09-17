"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import CinematicButton from "../CinematicButton";

const categories = [
  {
    id: "music",
    label: "MUSIC",
    image: "/images/ecosystem/eco_music_1789296006495.jpg",
    angle: -90,
  },
  {
    id: "creators",
    label: "CREATORS",
    image: "/images/ecosystem/eco_creators_1789296049408.jpg",
    angle: -45,
  },
  {
    id: "artists",
    label: "ARTISTS",
    image: "/images/ecosystem/eco_artists_1789296061976.jpg",
    angle: 0,
  },
  {
    id: "brands",
    label: "BRANDS",
    image: "/images/ecosystem/eco_brands_1789296109694.jpg",
    angle: 45,
  },
  {
    id: "entertainment",
    label: "ENTERTAINMENT",
    image: "/images/ecosystem/eco_entertainment_1789296126543.jpg",
    angle: 90,
  },
  {
    id: "community",
    label: "COMMUNITY",
    image: "/images/ecosystem/eco_community_1789296096586.jpg",
    angle: 135,
  },
  {
    id: "food",
    label: "FOOD",
    image: "/images/ecosystem/eco_food_1789296074778.jpg",
    angle: 180,
  },
  {
    id: "fashion",
    label: "FASHION",
    image: "/images/ecosystem/eco_fashion_1789296020590.jpg",
    angle: -135,
  },
];

export default function Ecosystem() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      data-visible={isVisible}
      className="group relative w-full min-h-screen bg-transparent flex items-center px-8 md:px-16 xl:px-32 py-24 overflow-hidden border-t border-transparent"
    >
      {/* Background Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#FF6100]/10 blur-[150px] mix-blend-screen transition-all duration-[2000ms] group-data-[visible=true]:opacity-100 opacity-0" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-[#F40B9B]/5 blur-[150px] mix-blend-screen transition-all duration-[2000ms] delay-500 group-data-[visible=true]:opacity-100 opacity-0" />
        <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#FF6100]/5 blur-[150px] mix-blend-screen transition-all duration-[2000ms] delay-1000 group-data-[visible=true]:opacity-100 opacity-0" />
      </div>

      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-[40%] flex flex-col items-start opacity-0 -translate-x-10 transition-all duration-[1000ms] group-data-[visible=true]:opacity-100 group-data-[visible=true]:translate-x-0">
          <SectionHeading number="01" title="THE ECOSYSTEM" className="mb-8" />

          {/* Headline */}
          <h2 className="text-[4rem] xl:text-[5.5rem] leading-[0.95] font-normal tracking-[-0.02em] font-trona mb-8">
            <span
              className={`text-white block drop-shadow-xl transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              ONE GAME.
            </span>
            <span
              className={`text-[#FF6100] block drop-shadow-xl transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              MANY WORLDS.
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-[#aaaaaa] text-lg leading-relaxed max-w-md mb-12 transition-all duration-[800ms] delay-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            3x3 basketball is the core — but HOOP CITY is the ecosystem. From
            the court, culture radiates outward.
          </p>

          <CinematicButton text="EXPLORE THE ECOSYSTEM" number="06" />
        </div>

        {/* Right Content - Radial Layout */}
        <div className="w-full lg:w-[60%] aspect-square relative flex items-center justify-center min-h-[600px] max-h-[900px] opacity-0 scale-95 transition-all duration-[1500ms] delay-[300ms] group-data-[visible=true]:opacity-100 group-data-[visible=true]:scale-100">
          {/* Background SVG Rings */}
          <svg
            className="absolute w-full h-full animate-[spin_180s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            {/* Outer dotted ring */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.2"
              strokeDasharray="1 2"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.1"
            />
            <circle
              cx="50"
              cy="50"
              r="18"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.1"
            />

            {/* Crosshairs */}
            {[0, 45, 90, 135].map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="5"
                x2="50"
                y2="95"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.1"
                transform={`rotate(${angle} 50 50)`}
              />
            ))}

            {/* Nodes on circles */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <g key={`nodes-${angle}`}>
                  <circle
                    cx={50 + 18 * Math.cos(rad)}
                    cy={50 + 18 * Math.sin(rad)}
                    r="0.6"
                    fill="#fff"
                    opacity="0.4"
                  />
                  <circle
                    cx={50 + 32 * Math.cos(rad)}
                    cy={50 + 32 * Math.sin(rad)}
                    r="0.6"
                    fill="#fff"
                    opacity="0.4"
                  />
                </g>
              );
            })}
          </svg>

          {/* Neon Pink Glow Behind Basketball */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 bg-gradient-to-tr from-[#F40B9B] via-[#FF6100] to-[#F40B9B] rounded-full blur-[60px] opacity-40 z-10 mix-blend-screen pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>

          {/* Central Basketball */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 xl:w-64 xl:h-64 z-20 rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,97,0,0.15)] border border-white/5">
            <Image
              src="/images/BASKETBALL.png"
              alt="Basketball"
              fill
              className="object-cover object-center scale-110"
            />
          </div>

          {/* Orbiting Cards */}
          <div
            className="absolute w-full h-full z-30 pointer-events-none"
            style={{
              animation: `spin 120s linear infinite ${isHovered || !isVisible ? "paused" : "running"}`,
            }}
          >
            {categories.map((cat, index) => {
              const delay = 500 + index * 100;
              const radius = isVisible ? 32 : 10; // moved closer to the center (from 42 to 32)
              const rad = (cat.angle * Math.PI) / 180;
              const top = 50 + radius * Math.sin(rad);
              const left = 50 + radius * Math.cos(rad);

              // dynamic label placement
              const isLeft = left < 50;
              const isRight = left > 50;
              const isTop = top < 50;
              const isBottom = top > 50;
              const isCenterH = left === 50;

              return (
                <div
                  key={cat.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-[1000ms] opacity-0 group-data-[visible=true]:opacity-100`}
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  <div
                    style={{
                      animation: `spin 120s linear infinite reverse ${isHovered || !isVisible ? "paused" : "running"}`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center pointer-events-auto"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="relative flex items-center justify-center px-6 py-3 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-[#111111]/80 to-[#333333]/40 backdrop-blur-md shadow-2xl group/card hover:border-[#FF6100] hover:from-[#2a1005]/90 hover:to-[#FF6100]/20 hover:scale-105 transition-all duration-300">
                        <span className="font-bebas tracking-[0.15em] text-[#aaaaaa] group-hover/card:text-white transition-colors duration-300 text-sm md:text-base xl:text-lg whitespace-nowrap flex items-center gap-2 relative z-10">
                          <span className="text-white/30 group-hover/card:text-[#FF6100]/60 transition-colors">
                            +
                          </span>
                          {cat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
