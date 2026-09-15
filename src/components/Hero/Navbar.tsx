"use client";
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = ['ecosystem', 'league', 'memories', 'stories'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2, rootMargin: "-10% 0px -50% 0px" });

    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'ecosystem', label: 'ECOSYSTEM' },
    { id: 'league', label: 'LEAGUE' },
    { id: 'memories', label: 'MEMORIES' },
    { id: 'stories', label: 'STORIES' }
  ];

  return (
    <nav className="flex justify-between items-center px-8 md:px-12 py-5 fixed top-0 left-0 w-full z-50">
      
      {/* Scroll Background with fading blur (overflows the nav height) */}
      <div 
        className={`absolute top-0 left-0 w-full h-[150%] pointer-events-none transition-all duration-500 -z-20 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md' : 'bg-transparent'}`} 
        style={{ 
          maskImage: isScrolled ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none', 
          WebkitMaskImage: isScrolled ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none' 
        }}
      ></div>

      {/* Subtle top gradient for readability */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none -z-10 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Left: Logo, Title, and Descriptor */}
      <div className="flex items-center gap-6 w-1/3 z-10">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 cursor-pointer group outline-none"
        >
          <img src="/logo.svg" alt="HC" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300" />
          <span className="font-ribes text-white text-sm md:text-base tracking-[0.1em] font-bold whitespace-nowrap group-hover:text-[#FF6100] transition-colors duration-300">HOOP CITY</span>
        </button>
        
        {/* Red Crosshair Divider */}
        <div className="hidden md:flex relative w-4 h-4 items-center justify-center shrink-0 mx-2">
          <div className="absolute w-full h-[1px] bg-red-600"></div>
          <div className="absolute h-full w-[1px] bg-red-600"></div>
        </div>
        
        <div className="hidden lg:flex flex-col text-[9px] md:text-[10px] text-[#888] font-mono tracking-[0.2em] leading-[1.2] uppercase">
          <span>BASKETBALL</span>
          <span>CULTURE</span>
          <span>COMMUNITY</span>
        </div>
      </div>
      
      {/* Center: Navigation Links */}
      <ul className="hidden lg:flex justify-center gap-8 xl:gap-12 font-ribes w-1/3 items-center z-10">
        {navLinks.map((link) => (
          <li key={link.id} className="relative flex flex-col items-center group">
            <a 
              href={`#${link.id}`} 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(link.id);
              }}
              className={`text-[11px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === link.id ? 'text-white font-bold' : 'text-[#888] group-hover:text-white'}`}
            >
              {link.label}
            </a>
            <div className={`absolute -bottom-3 w-6 h-[1.5px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-300 ${activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          </li>
        ))}
      </ul>
      
      {/* Right: Location & City Shift Button */}
      <div className="flex items-center justify-end gap-6 w-1/3 z-10">
        <div className="hidden xl:flex items-center gap-6">
          <div className="w-px h-5 bg-white/20"></div>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#888] font-mono uppercase whitespace-nowrap">
            NAGPUR / INDIA
          </span>
        </div>
        
        {/* City Shift Button */}
        <a 
          href="#city-shift" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('city-shift')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="border border-red-600/80 text-white font-ribes text-[10px] md:text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 flex items-center gap-2 hover:bg-red-600/10 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all"
        >
          CITY SHIFT™ <span className="text-red-500 font-sans text-sm leading-none -mt-0.5">↗</span>
        </a>
      </div>
      
    </nav>
  );
}
