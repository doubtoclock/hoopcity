"use client";

import React, { useState } from 'react';

interface CinematicButtonProps {
  text: string;
  onClick?: () => void;
  number?: string;
  className?: string;
  activeStateText?: string;
  isActive?: boolean;
}

export default function CinematicButton({ 
  text, 
  onClick, 
  number = "01", 
  className = "", 
  activeStateText, 
  isActive = false 
}: CinematicButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative group w-max flex items-center justify-center ${className}`}>
      
      {/* Outer tracking crosshairs */}
      <div className="absolute left-1/2 -top-6 w-[1px] h-6 bg-white/20 -translate-x-1/2 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
      <div className="absolute left-1/2 -bottom-6 w-[1px] h-6 bg-white/20 -translate-x-1/2 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
      <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-white/20 -translate-y-1/2 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
      <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-white/20 -translate-y-1/2 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
      
      {/* Number */}
      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-white/30 font-mono text-[9px] tracking-widest transition-opacity duration-500 group-hover:text-white/60">
        {number}
      </div>

      <button 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center h-14 md:h-16 bg-[#020202]/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,97,0,0.15)] cursor-pointer overflow-visible"
      >
        {/* Glow on right edge */}
        <div className={`absolute right-0 top-0 w-1/4 h-full bg-gradient-to-r from-transparent to-[#FF6100]/20 transition-opacity duration-700 pointer-events-none ${isHovered || isActive ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute right-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-[#FF6100]/0 via-[#FF6100] to-[#FF6100]/0 transition-opacity duration-700 blur-[1px] ${isHovered || isActive ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-[-1px] right-0 h-[2px] w-1/3 bg-gradient-to-r from-[#FF6100]/0 to-[#FF6100] transition-opacity duration-700 blur-[1px] ${isHovered || isActive ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* L-Brackets */}
        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/40" />
        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/40" />
        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/40" />
        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/40" />

        {/* Inner Content */}
        <div className="flex items-center px-4 md:px-8 gap-4 md:gap-6 relative z-10 h-full">
          
          {/* Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            {/* Outer faint crosshair ring */}
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute top-1/2 left-[-6px] right-[-6px] h-[1px] bg-white/20 -translate-y-1/2" />
            <div className="absolute left-1/2 top-[-6px] bottom-[-6px] w-[1px] bg-white/20 -translate-x-1/2" />
            
            {/* Glowing basketball */}
            <div className={`w-[18px] h-[18px] rounded-full relative overflow-hidden transition-all duration-500 ${isActive ? 'bg-[#FF6100] shadow-[0_0_15px_rgba(255,97,0,0.8)]' : isHovered ? 'bg-[#FF6100] shadow-[0_0_15px_rgba(255,97,0,0.6)]' : 'bg-[#FF6100]/60'}`}>
              <div className="absolute top-[40%] left-0 w-full h-[1px] bg-[#020202]/90" />
              <div className="absolute top-[60%] left-0 w-full h-[1px] bg-[#020202]/90" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#020202]/90 -translate-x-1/2" />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-6 bg-white/20 shrink-0" />

          {/* Text */}
          <span className="font-mono text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#e5e5e5] group-hover:text-white transition-colors text-center whitespace-nowrap">
            {isActive && activeStateText ? activeStateText : text}
          </span>

          {/* Angled Divider */}
          <div className="h-full relative flex items-center shrink-0">
             <div className="w-[1px] h-10 bg-white/20 transform rotate-[25deg]" />
          </div>

          {/* Arrow */}
          <span className="font-sans text-sm md:text-lg text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
            &rarr;
          </span>

        </div>
      </button>
    </div>
  );
}
