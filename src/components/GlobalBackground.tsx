"use client";

import { motion, useScroll, useTransform } from "framer-motion";


export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  // Rotate the main orbital ring slowly as user scrolls
  const ringRotation = useTransform(scrollYProgress, [0, 1], [0, 90]); // 90 degrees total rotation over the whole page
  
  // Create a parallax drift effect for particles
  const particlesY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden bg-[#030303]">
      
      {/* Global Grainy Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />
      
      {/* Subtle Ambient Neon Gradients */}
      <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#F40B9B]/[0.05] blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#FF6100]/[0.04] blur-[120px] md:blur-[180px]" />
      <div className="absolute top-[60%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[#FF6100]/[0.03] blur-[100px]" />
      <div className="absolute top-[30%] left-[10%] w-[25vw] h-[25vw] rounded-full bg-[#F40B9B]/[0.02] blur-[80px]" />

      {/* Deep Space Particles layer */}
      <motion.div 
        style={{ y: particlesY }}
        className="absolute w-full h-[200vh] top-0 left-0 opacity-[0.15]"
      >
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0,0,0,0))', 
            backgroundRepeat: 'repeat', 
            backgroundSize: '200px 200px' 
          }} 
        />
      </motion.div>

      {/* Main Orbital Planet/Rings */}
      <motion.div 
        style={{ rotate: ringRotation }}
        className="absolute inset-[-50vw] md:inset-[-20vw] flex items-center justify-center opacity-70 origin-center"
      >
        {/* Inner Ring */}
        <div className="absolute w-[70vw] h-[70vw] md:w-[60vw] md:h-[60vw] rounded-full border-[1px] border-white/20 border-t-[#FF6100]/60 border-l-[#F40B9B]/40" />
        
        {/* Middle Ring */}
        <div className="absolute w-[90vw] h-[90vw] md:w-[80vw] md:h-[80vw] rounded-full border-[2px] border-white/10 border-b-[#FF6100]/50" />
        
        {/* Outer Dashed Ring */}
        <div className="absolute w-[110vw] h-[110vw] md:w-[100vw] md:h-[100vw] rounded-full border-[1px] border-dashed border-white/20 border-r-[#FF6100]/40" />

        {/* Far Outer Ring */}
        <div className="absolute w-[140vw] h-[140vw] md:w-[130vw] md:h-[130vw] rounded-full border-[1px] border-white/5 border-t-[#FF6100]/20" />
      </motion.div>
      
      {/* Subtle atmospheric glows bound to the center to simulate a sun/planet core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#FF6100] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[40vw] bg-[#F40B9B] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      {/* A dark gradient overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
    </div>
  );
}
