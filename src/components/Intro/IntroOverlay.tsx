"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mql.matches);

    // Lock scrolling while intro is visible
    document.body.style.overflow = 'hidden';

    // The entire animation takes 4 seconds (4000ms).
    // After 4.2 seconds, we safely remove the component from the DOM.
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      setIsVisible(false);
    }, 4200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#020202] flex items-center justify-center overflow-hidden intro-overlay-fade ${isReducedMotion ? 'reduced-motion' : ''}`}>
      
      {/* Film Grain Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-red-900/10 blur-[100px] pointer-events-none mix-blend-screen intro-bloom" />

      {/* Very subtle court lines in background */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none mix-blend-screen">
        <svg viewBox="0 0 100 100" className="w-[150vw] h-[150vh] md:w-full md:h-full stroke-white stroke-[0.1] fill-none">
          <circle cx="50" cy="50" r="15" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="1 2" />
        </svg>
      </div>

      {/* Rolling Basketballs Container */}
      <div className="absolute inset-0 flex items-center justify-center intro-balls-wrapper">
        
        {/* Left Ball */}
        <div className="absolute w-32 h-32 md:w-56 md:h-56 intro-ball-left">
          <Image 
            src="/images/basketball.png" 
            alt="" 
            fill 
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            priority
          />
        </div>

        {/* Right Ball */}
        <div className="absolute w-32 h-32 md:w-56 md:h-56 intro-ball-right">
          <Image 
            src="/images/basketball.png" 
            alt="" 
            fill 
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] scale-x-[-1]"
            priority
          />
        </div>

      </div>

      {/* Typography Reveal */}
      <div className="relative z-10 flex flex-col items-center intro-text-reveal">
        <h1 className="font-ribes text-5xl md:text-7xl xl:text-8xl tracking-[-0.02em] text-[#f5f5f5] text-center leading-[0.9] drop-shadow-2xl flex items-baseline">
          FOR THE PLOT<span className="text-[#FF6100]">.</span>
        </h1>
      </div>

      {/* Micro Detail */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/20 font-mono text-[8px] md:text-[9px] tracking-[0.3em] uppercase intro-micro-detail">
        <div className="w-4 h-px bg-white/20" />
        <span>HOOP CITY / SEASON 001</span>
        <div className="w-4 h-px bg-white/20" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 
          TIMING OUTLINE (Total 4.0s):
          0.0-3.0s: Balls roll continuously across the screen (one above, one below)
          1.5s: Balls cross the center
          1.8s-3.2s: Typography revealed and held in center
          3.2-4.0s: Transition out to homepage
        */

        .intro-overlay-fade {
          animation: overlayFadeOut 4.0s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .intro-ball-left {
          /* Starts offscreen left, above center, rolls to offscreen right */
          transform: translate(-60vw, -18vh) rotate(0deg);
          animation: rollLeftToRight 2.5s linear forwards;
        }

        .intro-ball-right {
          /* Starts offscreen right, below center, rolls to offscreen left */
          transform: translate(60vw, 18vh) rotate(0deg);
          animation: rollRightToLeft 2.5s linear forwards;
        }

        .intro-text-reveal {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          filter: blur(8px);
          animation: textReveal 4.0s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .intro-bloom {
          opacity: 0;
          transform: scale(0.5);
          animation: bloomImpact 4.0s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .intro-micro-detail {
          opacity: 0;
          animation: microDetail 4.0s linear forwards;
        }

        @keyframes rollLeftToRight {
          0% { transform: translate(-60vw, -18vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(60vw, -18vh) rotate(720deg); opacity: 0; }
        }

        @keyframes rollRightToLeft {
          0% { transform: translate(60vw, 18vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-60vw, 18vh) rotate(-720deg); opacity: 0; }
        }

        @keyframes textReveal {
          0%, 40% { opacity: 0; transform: scale(0.9) letter-spacing: -0.05em; filter: blur(10px); }
          50%, 80% { opacity: 1; transform: scale(1) letter-spacing: -0.02em; filter: blur(0); }
          100% { opacity: 0; transform: scale(1.05); filter: blur(10px); }
        }

        @keyframes bloomImpact {
          0%, 40% { opacity: 0; transform: scale(0.5); }
          45% { opacity: 0.5; transform: scale(1.2); }
          80% { opacity: 0.3; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(2); }
        }

        @keyframes microDetail {
          0%, 60% { opacity: 0; }
          65%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes overlayFadeOut {
          0%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Reduced Motion Overrides */
        .reduced-motion .intro-balls-wrapper,
        .reduced-motion .intro-bloom {
          display: none;
        }
        .reduced-motion .intro-text-reveal {
          animation: reducedTextReveal 4.0s ease-in-out forwards;
        }
        
        @keyframes reducedTextReveal {
          0%, 15% { opacity: 0; filter: none; transform: none; }
          25%, 80% { opacity: 1; filter: none; transform: none; }
          100% { opacity: 0; filter: none; transform: none; }
        }
      `}} />
    </div>
  );
}
