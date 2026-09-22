"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const rules = [
  {
    num: "01",
    title: "CITY ISO",
    subtitle: "ONE PLAYER. ONE MOMENT.",
    desc: "The floor becomes personal. A selected player takes the possession — 1V1, no help, no excuses. The music strips back. The crowd locks in. It's about creating your own advantage and finishing the moment. ISOLATION MODE.",
  },
  {
    num: "02",
    title: "CITY RANGE",
    subtitle: "THE THREE IS NOW FOUR.",
    desc: "When CITY RANGE activates, every made shot from beyond the three-point line is worth 4 points. The beat builds. The pressure rises. One shot can completely change the game. 4-POINT RANGE.",
  },
  {
    num: "03",
    title: "CITY RED",
    subtitle: "ONE FOUL. YOU'RE DONE.",
    desc: "When CITY RED activates, a player who commits a foul is eliminated from the match. And there's one more way to change the scoreboard: DUNK = 4 POINTS. The music gets darker. The atmosphere tightens. Every defensive possession becomes a risk, while every attack can produce a massive swing. SURVIVAL MODE.",
  }
];

export default function TheRules() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate dynamic width based on window size
  const [windowWidth, setWindowWidth] = useState(1920);
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map progress to horizontal translation for desktop
  // The wrapper is w-max, so translating to a percentage of its own width works.
  // -70% leaves roughly enough width visible so the final block sits near the center.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  
  // Parallax the court geometry in the background slightly
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="city-shift" ref={containerRef} className="relative w-full bg-transparent border-t border-white/5 md:h-[400vh]">
      
      {/* Mobile view: Stacked normally */}
      <div className="md:hidden flex flex-col px-8 py-32 gap-32">
        {/* Intro */}
        <div className="flex flex-col gap-6">
          <SectionHeading number="03" title="THE GAME" />
          <h2 className="text-6xl leading-[0.85] tracking-[-0.02em] font-normal font-trona text-white mt-4">
            THE RULES<br/>
            OF THE PLOT<span className="text-[#FF6100]">.</span>
          </h2>
          <p className="font-mono text-[#888] text-[10px] tracking-[0.3em] uppercase">
            HOW THE CITY PLAYS.
          </p>
        </div>

        {/* Rules Stack */}
        <div className="flex flex-col gap-40">
          {rules.map((rule) => (
            <div key={rule.num} className="relative flex flex-col justify-center gap-8 group">
              <span className="absolute top-1/2 -translate-y-1/2 left-0 text-[180px] font-trona text-white/[0.03] select-none -z-10 tracking-tighter group-hover:text-white/[0.06] transition-colors duration-700">
                {rule.num}
              </span>
              
              <div className="relative w-full aspect-[4/3] group cursor-pointer" style={{ perspective: "1000px" }}>
                <div 
                  className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:[transform:rotateY(180deg)]" 
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl flex flex-col justify-center px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute left-[-2px] top-0 w-[3px] h-full bg-[#FF6100] opacity-50"></div>
                    <h3 className="text-3xl font-bebas tracking-[0.1em] text-white/90 mb-3 flex flex-col gap-1">
                      <span className="text-[#FF6100]/60 text-xl">{rule.num} &mdash;</span> 
                      {rule.title}
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-[#aaa]">{rule.subtitle}</p>
                  </div>
                  
                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#FF6100]/50 bg-gradient-to-br from-white/[0.08] to-[#FF6100]/10 backdrop-blur-xl flex flex-col justify-center px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <h3 className="text-2xl font-bebas tracking-[0.1em] text-white mb-3">{rule.title}</h3>
                    <p className="font-mono text-sm tracking-widest text-[#aaa] leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view: Sticky horizontal scroll */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center bg-transparent">
        


        {/* Horizontal Track */}
        <motion.div style={{ x }} className="relative z-10 flex h-full items-center pl-[15vw] w-max">
          
          {/* Intro Block */}
          <div className="flex-none w-[45vw] xl:w-[40vw] flex flex-col gap-6 pr-24">
            <SectionHeading number="03" title="THE GAME" />
            <h2 className="text-[7rem] xl:text-[9rem] leading-[0.85] tracking-[-0.02em] font-normal font-trona text-white drop-shadow-xl mt-4">
              THE RULES<br/>
              OF THE PLOT<span className="text-[#FF6100]">.</span>
            </h2>
            <p className="font-mono text-[#888] text-[10px] tracking-[0.3em] uppercase">
              HOW THE CITY PLAYS.
            </p>
          </div>

          {/* Rules Blocks */}
          <div className="flex gap-[15vw] items-center pr-[30vw]">
            {rules.map((rule) => (
              <div key={rule.num} className="flex-none w-[35vw] xl:w-[28vw] relative flex flex-col justify-center gap-12 group cursor-pointer">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] xl:text-[22vw] font-trona text-white/[0.02] select-none -z-10 tracking-tighter group-hover:text-white/[0.05] transition-colors duration-700">
                  {rule.num}
                </span>

                <div className="relative w-full aspect-[4/3] xl:aspect-[4/3] group" style={{ perspective: "1000px" }}>
                  <div 
                    className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:[transform:rotateY(180deg)]" 
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl flex flex-col justify-center px-10 xl:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ backfaceVisibility: "hidden" }}>
                      <div className="absolute left-[-2px] top-0 w-[3px] h-full bg-[#FF6100] opacity-50"></div>
                      <h3 className="text-4xl xl:text-5xl font-bebas tracking-[0.1em] text-white/90 mb-4 flex flex-col gap-2">
                        <span className="text-[#FF6100]/60 text-2xl xl:text-3xl">{rule.num} &mdash;</span> 
                        {rule.title}
                      </h3>
                      <p className="font-mono text-xs xl:text-sm tracking-widest text-[#aaa]">{rule.subtitle}</p>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#FF6100]/50 bg-gradient-to-br from-white/[0.08] to-[#FF6100]/10 backdrop-blur-xl flex flex-col justify-center px-10 xl:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      <h3 className="text-3xl xl:text-4xl font-bebas tracking-[0.1em] text-white mb-4">{rule.title}</h3>
                      <p className="font-mono text-sm xl:text-base tracking-widest text-[#aaa] leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
