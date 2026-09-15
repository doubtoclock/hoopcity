"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading';
import RegistrationModal from './RegistrationModal';

const tests = [
  {
    id: '01',
    title: '1V1',
    subtitle: 'INDIVIDUAL SKILL',
    description: 'No teammates.\nJust you and your game.',
    image: '/images/the-cut/the_cut_1v1_1789300913126.jpg'
  },
  {
    id: '02',
    title: 'SHOOTOUT',
    subtitle: 'RANGE - ACCURACY - COMPOSURE',
    description: 'Test your shooting ability\nfrom anywhere.',
    image: '/images/the-cut/the_cut_shootout_1789300928564.jpg'
  },
  {
    id: '03',
    title: '3V3',
    subtitle: 'ADAPTABILITY - IQ - CHEMISTRY',
    description: 'Play with different players.\nShow more than just skill.',
    image: '/images/the-cut/the_cut_3v3_1789300944327.jpg'
  }
];

export default function TheCut() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-transparent flex flex-col lg:flex-row border-t border-transparent overflow-hidden">
      
      {/* Left Column - The Pitch */}
      <div className={`w-full lg:w-[40%] flex flex-col justify-center px-8 py-20 md:px-16 lg:p-24 xl:p-32 border-b lg:border-b-0 border-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
        
        {/* Section Marker */}
        <SectionHeading number="02" title="THE CUT" className="mb-16" />

        {/* Headline */}
        <h2 className="text-6xl lg:text-7xl xl:text-[6rem] leading-[0.9] font-normal tracking-[-0.02em] font-trona mb-10">
          <span className={`text-white block transition-all duration-[800ms] delay-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>CAN YOU</span>
          <span className={`text-[#FF6100] block transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>MAKE THE CUT?</span>
        </h2>

        {/* Description */}
        <p className={`text-[#aaaaaa] text-lg leading-relaxed max-w-sm mb-12 transition-all duration-[800ms] delay-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Players enter individually. Three tests. One opportunity. This is where it begins.
        </p>

        {/* Action Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FF6100] text-white py-4 px-8 font-bebas tracking-[0.15em] text-lg flex items-center justify-between w-max gap-12 hover:bg-white hover:text-[#FF6100] transition-colors duration-300 uppercase"
        >
          <span>REGISTER NOW</span>
          <span className="text-xl leading-none font-sans">↗</span>
        </button>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Right Column - The Tests Grid */}
      <div className="w-full lg:w-[60%] flex flex-col md:flex-row h-full">
        {tests.map((test, index) => {
          const delay = 300 + index * 200;
          const isHovered = hoveredCard === test.id;
          const isOtherHovered = hoveredCard !== null && hoveredCard !== test.id;
          
          return (
            <div 
              key={test.id} 
              onMouseEnter={() => setHoveredCard(test.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative min-h-[350px] lg:min-h-screen border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 group overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer min-w-0 ${
                !isVisible ? 'opacity-0 translate-y-24' : 'translate-y-0'
              } ${
                isHovered 
                  ? 'flex-[4]' 
                  : isOtherHovered 
                    ? 'flex-1' 
                    : 'flex-[2]'
              }`}
              style={{ transitionDelay: hoveredCard === null && !isVisible ? `${delay}ms` : '0ms' }}
            >
              {/* Background Image */}
              <Image 
                src={test.image} 
                alt={test.title} 
                fill 
                className={`object-cover object-center transition-all duration-[2s] ease-out ${isHovered ? 'scale-110 brightness-110' : isOtherHovered ? 'scale-100 brightness-50' : 'scale-100 brightness-75'}`} 
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'bg-gradient-to-t from-black/95 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/90 via-black/40 to-black/20'}`}></div>
              
              {/* Content Block */}
              <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col transition-all duration-700 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                <span className="text-[#FF6100] font-trona text-5xl mb-2">{test.id}</span>
                <h3 className="text-white font-trona text-5xl xl:text-6xl mb-4 whitespace-nowrap">{test.title}</h3>
                <h4 className="text-white font-bebas tracking-[0.15em] text-sm md:text-base mb-4 uppercase whitespace-nowrap">{test.subtitle}</h4>
                <p className={`text-[#aaaaaa] text-sm md:text-base leading-relaxed whitespace-pre-line transition-all duration-700 delay-100 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                  {test.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
