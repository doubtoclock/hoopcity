"use client";

import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading';
import CinematicButton from '../CinematicButton';

// --- SVG Icons for Teams ---
const RootsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M12 22V12" />
    <path d="M12 12C9 12 5 10 3 6C5 7 8 8 12 8C16 8 19 7 21 6C19 10 15 12 12 12Z" />
    <path d="M12 12C10 16 6 20 2 22" />
    <path d="M12 12C14 16 18 20 22 22" />
    <path d="M12 12C9 15 5 17 2 17" />
    <path d="M12 12C15 15 19 17 22 17" />
  </svg>
);

const BlackoutsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M12 2L12 22" />
    <path d="M7 7L12 12L7 17" />
    <path d="M17 7L12 12L17 17" />
    <path d="M12 12L4 12" />
    <path d="M12 12L20 12" />
  </svg>
);

const HeatwaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M12 2C12 2 14 6 18 7C22 8 22 13 19 16C16 19 12 22 12 22C12 22 8 19 5 16C2 13 2 8 6 7C10 6 12 2 12 2Z" />
    <path d="M12 10C12 10 14 12 14 14C14 16 12 18 12 18C12 18 10 16 10 14C10 12 12 10 12 10Z" />
    <path d="M4 12L2 10" />
    <path d="M20 12L22 10" />
    <path d="M6 5L4 3" />
    <path d="M18 5L20 3" />
  </svg>
);

const MogulsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M2 20L12 22L22 20" />
    <path d="M2 20L5 6L12 13L19 6L22 20" />
    <path d="M12 13L12 18" />
  </svg>
);

const CrowdIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <circle cx="8" cy="12" r="6" />
    <circle cx="16" cy="12" r="6" />
  </svg>
);

const ReapersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M6 2L6 22" />
    <path d="M18 2L18 22" />
    <path d="M6 12L18 12" />
    <path d="M6 6L18 18" />
    <path d="M18 6L6 18" />
  </svg>
);

const KingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
    <path d="M12 22V10" />
    <path d="M7 10L12 2L17 10" />
    <path d="M4 16L12 10L20 16" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const ShiftersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
    <path d="M12 2C12 12 2 12 2 12C2 12 12 12 12 22C12 12 22 12 22 12C22 12 12 12 12 2Z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

// --- Court Pattern Component ---
const CourtPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none group-hover:scale-[1.03] group-hover:-translate-y-1 transition-transform duration-1000" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M 20 0 L 20 100 M 80 0 L 80 100" stroke="white" strokeWidth="0.5" />
    <circle cx="50" cy="0" r="60" fill="none" stroke="white" strokeWidth="0.5" />
    <circle cx="50" cy="0" r="25" fill="none" stroke="white" strokeWidth="0.5" />
    <circle cx="50" cy="0" r="15" fill="none" stroke="white" strokeWidth="0.5" />
    <path d="M 50 0 L 50 100" stroke="white" strokeWidth="0.2" strokeDasharray="1 1" />
  </svg>
);

// --- Data ---
const teams = [
  { id: 'roots', name: 'THE ROOTS', num: '01', record: '3-7', Icon: RootsIcon, glowColor: 'rgba(251, 146, 60, 0.1)', edgeColor: 'rgba(251,146,60,0.12)' },
  { id: 'blackouts', name: 'BLACKOUTS', num: '02', record: '2-8', Icon: BlackoutsIcon, glowColor: 'rgba(96, 165, 250, 0.1)', edgeColor: 'rgba(96,165,250,0.12)' },
  { id: 'heatwave', name: 'HEATWAVE', num: '03', record: '8-2', Icon: HeatwaveIcon, glowColor: 'rgba(255, 97, 0, 0.1)', edgeColor: 'rgba(255,97,0,0.12)' },
  { id: 'moguls', name: 'THE MOGULS', num: '04', record: '5-5', Icon: MogulsIcon, glowColor: 'rgba(168, 85, 247, 0.1)', edgeColor: 'rgba(168,85,247,0.12)' },
  { id: 'crowd', name: 'CROWD CONTROL', num: '05', record: '7-3', Icon: CrowdIcon, glowColor: 'rgba(45, 212, 191, 0.1)', edgeColor: 'rgba(45,212,191,0.12)' },
  { id: 'reapers', name: 'RIM REAPERS', num: '06', record: '6-4', Icon: ReapersIcon, glowColor: 'rgba(220, 38, 38, 0.1)', edgeColor: 'rgba(220,38,38,0.12)' },
  { id: 'kings', name: 'COURT KINGS', num: '07', record: '5-5', Icon: KingsIcon, glowColor: 'rgba(234, 179, 8, 0.1)', edgeColor: 'rgba(234,179,8,0.12)' },
  { id: 'shifters', name: 'CITY SHIFTERS', num: '08', record: '4-6', Icon: ShiftersIcon, glowColor: 'rgba(34, 197, 94, 0.1)', edgeColor: 'rgba(34,197,94,0.12)' },
];

const standings = [
  { rank: '01', name: 'HEATWAVE', w: '8W', diff: '+45' },
  { rank: '02', name: 'CROWD CONTROL', w: '7W', diff: '+22' },
  { rank: '03', name: 'RIM REAPERS', w: '6W', diff: '+12' },
  { rank: '04', name: 'THE MOGULS', w: '5W', diff: '-04' },
];

export default function TheLeague() {
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
    <section id="league" ref={sectionRef} className="w-full min-h-screen bg-transparent relative flex flex-col justify-center overflow-hidden py-24 pb-0 z-10 border-t border-transparent">
      
      {/* Header Section */}
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 xl:px-32 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative z-10 transition-all duration-1000 opacity-100 translate-y-0">
        <div className="flex flex-col">
          <SectionHeading number="04" title="THE LEAGUE" className="mb-6" />
          <h2 className={`text-5xl md:text-6xl xl:text-7xl leading-[0.9] font-normal tracking-[-0.02em] font-trona mb-4 text-white transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            8 TEAMS. ONE CITY.
          </h2>
          <p className={`text-[#aaaaaa] text-sm md:text-base leading-relaxed max-w-lg tracking-widest transition-all duration-[800ms] delay-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            DIFFERENT IDENTITIES. ONE STAGE.<br />
            EACH TEAM IS A MINI-BRAND INSIDE HOOP CITY™.
          </p>
        </div>
        <CinematicButton text="MEET THE TEAMS" number="02" className="mb-2" />
      </div>

      {/* 4x2 Team Grid */}
      <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 overflow-hidden py-4">
        {teams.map((team, index) => {
          // First 4 teams (top row on desktop) slide from left, next 4 (bottom row) slide from right
          const transformStart = index < 4 ? '-translate-x-24' : 'translate-x-24';
          const delay = (index % 4) * 250;

          return (
            <div 
              key={team.id} 
              className={`w-full aspect-[16/11] flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0a] border border-white/10 group cursor-pointer hover:border-white/30 overflow-hidden relative transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${transformStart}`}`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              
              {/* The Atmospheric Edge Glow (Left & Right) */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ background: `linear-gradient(90deg, ${team.edgeColor} 0%, transparent 20%, transparent 80%, ${team.edgeColor} 100%)` }}></div>
              
              {/* Subtle Gradient Glow inside */}
              <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-30" style={{ background: `radial-gradient(circle at center, ${team.glowColor} 0%, transparent 70%)` }}></div>
              
              {/* Background Court Pattern */}
              <CourtPattern />

              {/* Top Number */}
              <div className="flex justify-center w-full relative z-10">
                <span className="text-[#aaaaaa] font-mono text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
                  {team.num}
                </span>
              </div>
              
              {/* Center Icon & Name */}
              <div className="flex flex-col justify-center items-center w-full flex-1 relative z-10 text-white">
                <div className="text-white mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <team.Icon />
                </div>
                <h3 className="text-white font-sans font-black text-2xl tracking-[0.2em] uppercase text-center mt-2 group-hover:text-white/90 transition-colors duration-300">
                  {team.name}
                </h3>
              </div>
              
              {/* Bottom Text */}
              <div className="flex justify-between items-center w-full relative z-10">
                <div className="relative overflow-hidden h-4 w-32">
                  <span className="absolute top-0 left-0 text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:-translate-y-full transition-transform duration-500">
                    ROSTER / 08
                  </span>
                  <span className="absolute top-0 left-0 text-[#FF6100] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    RECORD / {team.record}
                  </span>
                </div>
                <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  VIEW <span className="text-sm transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Layout (Match & Standings) */}
      <div className={`w-full max-w-[1920px] mx-auto px-2 md:px-4 flex flex-col xl:flex-row gap-2 md:gap-4 mt-2 md:mt-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Left: Match HUD */}
        <div className="w-full xl:w-[65%] border border-white/5 bg-[#0a0a0a] p-6 md:p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white transform -translate-x-1/2"></div>
              <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white transform translate-x-1/2"></div>
          </div>

          <div className="flex justify-between items-start w-full relative z-10">
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
              LIVE / MATCH 04
            </span>
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
              21:00 - COURT A
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-1 my-12 relative z-10">
            <h3 className="text-white font-sans font-black text-3xl lg:text-4xl xl:text-5xl tracking-tighter uppercase flex-1 text-center lg:text-left mb-4 lg:mb-0 truncate px-2">
              HEATWAVE
            </h3>
            
            <div className="flex items-center justify-center gap-3 md:gap-6 px-4">
              <span className="text-white font-sans font-black text-5xl lg:text-6xl xl:text-7xl tracking-tighter">84</span>
              <span className="text-white font-sans font-black text-4xl lg:text-5xl xl:text-6xl tracking-tighter opacity-30">—</span>
              <span className="text-white font-sans font-black text-5xl lg:text-6xl xl:text-7xl tracking-tighter">72</span>
            </div>
            
            <h3 className="text-white font-sans font-black text-3xl lg:text-4xl xl:text-5xl tracking-tighter uppercase flex-1 text-center lg:text-right mt-4 lg:mt-0 truncate px-2">
              MOGULS
            </h3>
          </div>

          <div className="flex justify-between items-end w-full relative z-10">
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
              DEMO / LIVE UI - Q4 - 02:18
            </span>
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
              SHIFT READY
            </span>
          </div>
        </div>

        {/* Right: Standings Table */}
        <div className="w-full xl:w-[35%] border border-white/5 bg-[#0a0a0a] p-6 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-white/10 transition-colors duration-500 relative">
          
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white transform -translate-x-1/2"></div>
          </div>

          <div className="flex justify-between items-start w-full relative z-10 mb-8">
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
              TABLE
            </span>
            <span className="text-[#aaaaaa] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
              001
            </span>
          </div>

          <div className="flex flex-col gap-4 relative z-10 flex-1 justify-center">
            {standings.map((team, index) => (
              <div key={team.name} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0 group cursor-default">
                <div className="flex items-center gap-6">
                  <span className="text-[#aaaaaa] font-mono text-xs tracking-[0.2em] group-hover:text-white transition-colors">
                    {team.rank}
                  </span>
                  <span className="text-white font-sans font-black text-lg tracking-tighter uppercase group-hover:text-[#FF6100] transition-colors">
                    {team.name}
                  </span>
                </div>
                <div className="flex items-center gap-8 md:gap-12">
                  <span className="text-[#aaaaaa] font-mono text-xs tracking-[0.2em] group-hover:text-white transition-colors">
                    {team.w}
                  </span>
                  <span className="text-[#aaaaaa] font-mono text-xs tracking-[0.2em] w-8 text-right group-hover:text-white transition-colors">
                    {team.diff}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
