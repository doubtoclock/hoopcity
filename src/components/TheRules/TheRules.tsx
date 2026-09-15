"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const rules = [
  {
    num: "01",
    title: "CHECK BALL",
    desc: "Start beyond the arc.",
    image: "/images/ecosystem/ecosystem_center_ball_1789295994272.jpg"
  },
  {
    num: "02",
    title: "3 × 3",
    desc: "Three players. One court.",
    image: "/images/ecosystem/eco_community_1789296096586.jpg"
  },
  {
    num: "03",
    title: "12 SECONDS",
    desc: "Make the possession count.",
    image: "/images/ecosystem/eco_music_1789296006495.jpg"
  },
  {
    num: "04",
    title: "WIN BY 2",
    desc: "No easy endings.",
    image: "/images/ecosystem/eco_creators_1789296049408.jpg"
  },
  {
    num: "05",
    title: "PLAY FAIR",
    desc: "Respect the game. Respect the court.",
    image: "/images/ecosystem/eco_artists_1789296061976.jpg"
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
    <section ref={containerRef} className="relative w-full bg-transparent border-t border-white/5 md:h-[400vh]">
      
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
              
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl opacity-80 group-hover:opacity-100 group-hover:border-[#FF6100]/50 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-[#FF6100]/10 transition-all duration-700 ease-out transform group-hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-center px-8">
                <div className="absolute left-0 top-0 w-[3px] h-0 bg-[#FF6100] group-hover:h-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <h3 className="text-3xl font-bebas tracking-[0.1em] text-white/90 mb-3 flex flex-col gap-1 group-hover:text-white transition-colors duration-700 relative z-10">
                  <span className="text-[#FF6100]/60 text-xl">{rule.num} &mdash;</span> {rule.title}
                </h3>
                <p className="font-mono text-xs tracking-widest text-[#aaa] relative z-10">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view: Sticky horizontal scroll */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center bg-transparent">
        
        {/* Cinematic Ambient Glow Background */}
        <motion.div style={{ x: backgroundX }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 w-[400vw] flex overflow-hidden">
             <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#FF6100]/10 blur-[120px] mix-blend-screen"></div>
             <div className="absolute bottom-[10%] left-[30%] w-[60vw] h-[60vw] rounded-full bg-[#8A2B06]/15 blur-[150px] mix-blend-screen"></div>
             <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-[#FF6100]/5 blur-[100px] mix-blend-screen"></div>
             <div className="absolute bottom-[30%] left-[80%] w-[70vw] h-[70vw] rounded-full bg-[#5c1c04]/20 blur-[160px] mix-blend-screen"></div>
          </div>
        </motion.div>

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
              <div key={rule.num} className="flex-none w-[35vw] xl:w-[28vw] relative flex flex-col justify-center gap-12 group">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] xl:text-[22vw] font-trona text-white/[0.02] select-none -z-10 tracking-tighter group-hover:text-white/[0.05] transition-colors duration-700">
                  {rule.num}
                </span>

                <div className="relative w-full aspect-[4/3] xl:aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl opacity-80 group-hover:opacity-100 group-hover:border-[#FF6100]/50 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-[#FF6100]/10 transition-all duration-700 ease-out transform group-hover:-translate-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-center px-10 xl:px-12">
                  <div className="absolute left-[-2px] top-0 w-[3px] h-0 bg-[#FF6100] group-hover:h-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                  <h3 className="text-4xl xl:text-5xl font-bebas tracking-[0.1em] text-white/50 group-hover:text-white/95 transition-colors duration-700 mb-4 flex items-center gap-4 relative z-10">
                    <span className="text-white/20 group-hover:text-[#FF6100]/60 transition-colors duration-700 text-2xl xl:text-3xl">{rule.num} &mdash;</span> {rule.title}
                  </h3>
                  <p className="font-mono text-xs xl:text-sm tracking-widest text-[#555] group-hover:text-[#aaa] transition-colors duration-700 relative z-10">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
