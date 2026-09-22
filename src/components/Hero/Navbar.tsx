"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import RegistrationModal from '../TheCut/RegistrationModal';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [modalState, setModalState] = useState<{isOpen: boolean, type: 'players' | 'artists' | 'creators'}>({ isOpen: false, type: 'players' });

  useEffect(() => {
    const sections = ['home', 'cut', 'league', 'city-shift', 'people', 'memories'];
    
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
    { id: 'home', label: 'HOME' },
    { id: 'cut', label: 'THE CUT' },
    { id: 'league', label: 'THE LEAGUE' },
    { id: 'city-shift', label: 'CITY SHIFT' },
    { id: 'people', label: 'PEOPLE' },
    { id: 'memories', label: 'MEMORIES' }
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
          <span className="font-ribes text-white text-lg md:text-xl tracking-[0.1em] font-bold whitespace-nowrap group-hover:text-[#FF6100] transition-colors duration-300">HOOP CITY</span>
        </button>
        

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
              className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === link.id ? 'text-white font-bold' : 'text-[#888] group-hover:text-white'}`}
            >
              {link.label}
            </a>
            <div className={`absolute -bottom-3 w-6 h-[1.5px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-300 ${activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          </li>
        ))}
      </ul>
      
      {/* Right: Location & City Shift Button */}
      <div className="flex items-center justify-end gap-6 w-1/3 z-10">

        
        {/* Registration Button & Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsRegistrationOpen(!isRegistrationOpen)}
            className="border border-red-600/80 text-white font-ribes text-[10px] md:text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 flex items-center gap-2 hover:bg-red-600/10 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all cursor-pointer"
          >
            REGISTRATION <span className={`text-red-500 font-sans text-sm leading-none -mt-0.5 transition-transform duration-300 ${isRegistrationOpen ? 'rotate-45' : ''}`}>↗</span>
          </button>
          
          <AnimatePresence>
            {isRegistrationOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-4 w-56 bg-[#0a0a0a]/95 border border-white/10 p-2 flex flex-col gap-1 shadow-2xl backdrop-blur-xl"
              >
                {['Players', 'Artists', 'Creators'].map((category) => (
                  <button 
                    key={category}
                    onClick={() => {
                      setIsRegistrationOpen(false);
                      setModalState({ isOpen: true, type: category.toLowerCase() as any });
                    }}
                    className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 text-xs tracking-[0.2em] font-ribes uppercase transition-all duration-300 flex items-center justify-between group"
                  >
                    {category}
                    <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">+</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <RegistrationModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))} 
        type={modalState.type}
      />
    </nav>
  );
}
