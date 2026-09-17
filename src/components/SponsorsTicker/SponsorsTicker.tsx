"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const partnersData = [
  {
    id: "croma",
    name: "CROMA",
    tagline: "TECH FOR A BRIGHTER TOMORROW.",
    description: "Powering lifestyles with innovation, Croma supports the next generation of dreamers, creators and players.",
    imagePath: "/images/sponsors/croma-seeklogo.png",
    brandColor: "#00E5CC",
    teamName: "HEATWAVE",
    slides: [
      {
        type: "intro",
        title: "CROMA PRESENTS",
        subtitle: "HEATWAVE",
        text: "Bringing high-tech performance to the court. Heatwave is engineered to win."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY CROMA",
        imagePath: "/images/sponsors/croma_jersey.jpg"
      },
      {
        type: "context",
        title: "IN THE CITY",
        subtitle: "TECH MEETS CULTURE",
        text: "Connecting players and fans through seamless innovation.",
        imagePath: "/images/ecosystem/eco_community_1789296096586.jpg"
      }
    ]
  },
  {
    id: "axis",
    name: "AXIS BANK",
    tagline: "BANKING ON THE FUTURE.",
    description: "Empowering the next generation of athletes with financial tools to build their legacy.",
    imagePath: "/images/sponsors/Axis-bank.png",
    brandColor: "#97144D",
    scale: 1.4,
    teamName: "THE MOGULS",
    slides: [
      {
        type: "intro",
        title: "AXIS BANK PRESENTS",
        subtitle: "THE MOGULS",
        text: "Banking on the future of Nagpur basketball."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY AXIS BANK"
      },
      {
        type: "context",
        title: "BUILDING LEGACIES",
        subtitle: "FINANCIAL EMPOWERMENT",
        text: "Supporting athletes both on and off the court.",
        imagePath: "/images/ecosystem/eco_creators_1789296049408.jpg"
      }
    ]
  },
  {
    id: "shivnaresh",
    name: "SHIVNARESH",
    tagline: "THE FABRIC OF CHAMPIONS.",
    description: "Premium athletic wear designed for peak performance and ultimate comfort on the court.",
    imagePath: "/images/sponsors/Shivnaresh.png",
    brandColor: "#E31837",
    scale: 1.8,
    teamName: "COURT KINGS",
    slides: [
      {
        type: "intro",
        title: "SHIVNARESH PRESENTS",
        subtitle: "COURT KINGS",
        text: "Dressing the champions of tomorrow."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY SHIVNARESH"
      },
      {
        type: "context",
        title: "PERFORMANCE WEAR",
        subtitle: "BUILT FOR THE COURT",
        text: "Every thread designed for movement and agility.",
        imagePath: "/images/ecosystem/eco_fashion_1789296020590.jpg"
      }
    ]
  },
  {
    id: "kukreja",
    name: "KUKREJA",
    tagline: "BUILDING THE FOUNDATION.",
    description: "Developing world-class infrastructure and venues to elevate the game of 3x3 basketball.",
    imagePath: "/images/sponsors/logo-white.avif",
    brandColor: "#D4AF37",
    teamName: "CROWD CONTROL",
    slides: [
      {
        type: "intro",
        title: "KUKREJA PRESENTS",
        subtitle: "CROWD CONTROL",
        text: "Building the foundation for greatness."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY KUKREJA"
      },
      {
        type: "context",
        title: "INFRASTRUCTURE",
        subtitle: "ELEVATING THE GAME",
        text: "Constructing the courts where legends are made.",
        imagePath: "/images/ecosystem/eco_entertainment_1789296126543.jpg"
      }
    ]
  },
  {
    id: "charliwar",
    name: "CHARLIWAR ASSOCIATE",
    tagline: "LEGAL EXCELLENCE.",
    description: "Providing trusted counsel and strategic partnerships to secure the league's future.",
    imagePath: "/images/sponsors/charlewar.png",
    brandColor: "#FFFFFF",
    teamName: "RIM REAPERS",
    slides: [
      {
        type: "intro",
        title: "CHARLIWAR PRESENTS",
        subtitle: "RIM REAPERS",
        text: "Guarding the court with precision and strategy."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY CHARLIWAR"
      },
      {
        type: "context",
        title: "TRUST & EXCELLENCE",
        subtitle: "BEYOND THE GAME",
        text: "Securing the future of Hoops in the city.",
        imagePath: "/images/ecosystem/eco_brands_1789296109694.jpg"
      }
    ]
  },
  {
    id: "reliance",
    name: "RELIANCE",
    tagline: "CONNECTING THE NATION.",
    description: "Bridging the gap between fans and the game through unmatched digital connectivity and reach.",
    imagePath: "/images/sponsors/reliance-retail-logo.png",
    brandColor: "#0033A0",
    teamName: "THE ROOTS",
    slides: [
      {
        type: "intro",
        title: "RELIANCE PRESENTS",
        subtitle: "THE ROOTS",
        text: "Connecting every fan, every play, everywhere."
      },
      {
        type: "jersey",
        title: "THE KIT",
        subtitle: "POWERED BY RELIANCE"
      },
      {
        type: "context",
        title: "DIGITAL REACH",
        subtitle: "UNITING THE FANS",
        text: "Bringing the game directly to you.",
        imagePath: "/images/ecosystem/ecosystem_center_ball_1789295994272.jpg"
      }
    ]
  },
];

export default function SponsorsTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSponsorId, setSelectedSponsorId] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const activePartner = partnersData[activeIndex];
  
  const selectedSponsor = partnersData.find(p => p.id === selectedSponsorId);
  
  const advanceToNext = () => {
    if (!selectedSponsor) return;
    const currentIndex = partnersData.findIndex(p => p.id === selectedSponsor.id);
    
    if (currentSlideIndex === selectedSponsor.slides.length - 1) {
      const nextIndex = (currentIndex + 1) % partnersData.length;
      handleSponsorClick(nextIndex);
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const advanceToPrev = () => {
    if (!selectedSponsor) return;
    const currentIndex = partnersData.findIndex(p => p.id === selectedSponsor.id);
    
    if (currentSlideIndex === 0) {
      const prevIndex = (currentIndex - 1 + partnersData.length) % partnersData.length;
      setActiveIndex(prevIndex);
      setSelectedSponsorId(partnersData[prevIndex].id);
      setCurrentSlideIndex(partnersData[prevIndex].slides.length - 1);
    } else {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    advanceToNext();
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    advanceToPrev();
  };

  const handleSponsorClick = (index: number) => {
    setActiveIndex(index);
    setSelectedSponsorId(partnersData[index].id);
    setCurrentSlideIndex(0);
  };

  // Auto-advance slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (selectedSponsorId && selectedSponsor) {
      interval = setInterval(() => {
        advanceToNext();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedSponsorId, selectedSponsor, currentSlideIndex]);

  return (
    <section className="w-full bg-transparent relative flex flex-col justify-center py-20 overflow-hidden border-t border-transparent">
      {/* Container */}
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 flex flex-col h-full z-10 relative">
        {/* Top Header */}
        <div className="flex justify-between items-start w-full mb-16 md:mb-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-ribes text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase mt-4">
              BUILT TOGETHER<span className="transition-colors duration-500" style={{ color: activePartner.brandColor }}>.</span>
            </h2>
            <p className="text-[#666] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2">
              BRANDS THAT MOVE THE CITY.
            </p>
          </div>

          <div className="hidden lg:flex flex-col text-[#444] font-mono text-[9px] tracking-[0.3em] text-right uppercase gap-2">
            <span>BASKETBALL</span>
            <span>CULTURE</span>
            <span>COMMUNITY</span>
          </div>
        </div>

        {/* Static Grid Section */}
        <div className="w-full mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full">
            {partnersData.map((partner, index) => {
              return (
                <div
                  key={partner.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSponsorClick(index)}
                  className="partner-item w-full h-28 md:h-32 flex items-center justify-center cursor-pointer transition-all duration-500 relative bg-white/[0.02] border-white/5 border rounded-lg overflow-hidden group"
                >
                  {/* Active State Overlay (Now Permanent) */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 z-0 opacity-100"
                  >
                    <div className="absolute inset-0 transition-all duration-500" style={{ backgroundColor: `${partner.brandColor}1A`, boxShadow: `inset 0 0 25px ${partner.brandColor}4D` }}></div>

                  </div>

                  {/* Logo Container (Handles Y Translation) */}
                  <div className="z-10 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 md:group-hover:-translate-y-3">
                    <div
                      className="relative w-20 h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 transition-all duration-500 opacity-100 grayscale-0 scale-100 group-hover:scale-110"
                      style={{ transform: partner.scale ? `scale(${partner.scale})` : undefined }}
                    >
                      <Image
                        src={partner.imagePath}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Team Name Hover Overlay (No Background) */}
                  <div className="absolute bottom-0 left-0 w-full pb-3 px-2 flex justify-center items-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-20">
                    <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-center text-white" style={{ textShadow: `0 0 10px ${partner.brandColor || '#ffffff'}, 0 0 20px ${partner.brandColor || '#ffffff'}80, 0 4px 8px rgba(0,0,0,0.8)` }}>
                      {partner.teamName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Sponsor Deep Dive Modal */}
      <AnimatePresence>
        {selectedSponsorId && selectedSponsor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-3xl overflow-hidden"
          >
            {/* Animated Glow Background based on Sponsor Color */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            >
               <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[150px] mix-blend-screen" style={{ backgroundColor: selectedSponsor.brandColor }}></div>
            </motion.div>

            {/* Sponsor Watermark Background */}
            <motion.div 
              key={`watermark-${selectedSponsor.id}`}
              initial={{ opacity: 0, scale: 2.5, y: -100 }}
              animate={{ opacity: 0.08, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
            >
               <div className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] relative grayscale opacity-60">
                  <Image src={selectedSponsor.imagePath} alt="Watermark" fill className="object-contain" />
               </div>
            </motion.div>

            {/* Modal Content */}
            <div className="relative z-10 w-full h-full flex flex-col p-8 md:p-16 max-w-[1800px] mx-auto">
              
              {/* Insta-story Progress Bars */}
              <div className="absolute top-0 left-0 w-full px-8 md:px-16 pt-8 flex gap-2 z-50">
                {selectedSponsor.slides.map((_, i) => (
                  <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden relative">
                    <motion.div 
                      key={`${i}-${currentSlideIndex === i ? 'active' : 'inactive'}`}
                      className="absolute top-0 left-0 h-full bg-white"
                      initial={{ width: i < currentSlideIndex ? '100%' : '0%' }}
                      animate={{ width: i === currentSlideIndex ? '100%' : i < currentSlideIndex ? '100%' : '0%' }}
                      transition={{ duration: i === currentSlideIndex ? 3 : 0, ease: 'linear' }}
                    />
                  </div>
                ))}
              </div>

              {/* Header */}
              <div className="flex justify-between items-center w-full mb-12 mt-8">
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="w-24 md:w-40 h-12 md:h-16 relative">
                    <Image src={selectedSponsor.imagePath} alt={selectedSponsor.name} fill className="object-contain object-left grayscale brightness-200" />
                  </div>
                  <span className="w-px h-10 md:h-12 bg-white/20"></span>
                  <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-[#888] uppercase">{selectedSponsor.teamName}</span>
                </div>

                <div className="flex items-center gap-8">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-white">
                    0{currentSlideIndex + 1} / 0{selectedSponsor.slides.length}
                  </span>
                  <button 
                    onClick={() => setSelectedSponsorId(null)}
                    className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>

              {/* Slideshow Area */}
              <div className="flex-grow flex items-center justify-center relative w-full h-full overflow-hidden">
                
                {/* Navigation Controls */}
                <button onClick={prevSlide} className="absolute left-0 z-20 w-16 h-16 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path></svg>
                </button>

                <button onClick={nextSlide} className="absolute right-0 z-20 w-16 h-16 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path></svg>
                </button>

                {/* Slides */}
                <AnimatePresence mode="wait">
                  {selectedSponsor.slides.map((slide, index) => {
                    if (index !== currentSlideIndex) return null;
                    
                    return (
                      <motion.div
                        key={`${selectedSponsor.id}-slide-${index}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-16"
                      >
                        {/* Slide Content Based on Type */}
                        {slide.type === 'intro' && (
                          <div className="flex flex-col items-center text-center max-w-4xl relative z-10">
                            <h4 className="font-mono text-sm md:text-base tracking-[0.4em] uppercase mb-8 drop-shadow-[0_0_15px_rgba(0,0,0,1)]" style={{ color: selectedSponsor.brandColor }}>{slide.title}</h4>
                            <h2 className="font-trona text-5xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white tracking-tight mb-8 drop-shadow-[0_4px_40px_rgba(0,0,0,1)]">
                              {slide.subtitle}
                            </h2>
                            {slide.text && <p className="font-mono text-[#888] text-xs md:text-sm tracking-[0.2em] leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">{slide.text}</p>}
                          </div>
                        )}

                        {slide.type === 'jersey' && (
                          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                            <div className="flex flex-col gap-6 w-full md:w-1/2 pr-8 relative z-10">
                              <h4 className="font-mono text-sm md:text-base tracking-[0.4em] uppercase drop-shadow-[0_0_15px_rgba(0,0,0,1)]" style={{ color: selectedSponsor.brandColor }}>{slide.title}</h4>
                              <h2 className="font-trona text-5xl md:text-7xl leading-[0.9] text-white tracking-tight drop-shadow-[0_4px_40px_rgba(0,0,0,1)]">
                                {slide.subtitle}
                              </h2>
                            </div>
                            <div className="w-full md:w-1/2 h-[50vh] relative mt-12 md:mt-0 flex items-center justify-center">
                              {slide.imagePath ? (
                                <Image src={slide.imagePath} alt="Jersey Mockup" fill className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center border border-white/10 bg-white/5 rounded-xl backdrop-blur-md p-8 text-center">
                                  <svg className="w-12 h-12 text-white/20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                  <span className="font-mono text-[10px] tracking-widest text-[#666] uppercase leading-loose">Jersey Mockup<br/>Incoming</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {slide.type === 'context' && (
                          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl h-[60vh] gap-12">
                             <div className="w-full md:w-3/5 h-full relative overflow-hidden rounded-xl">
                               {slide.imagePath ? (
                                 <Image src={slide.imagePath} alt="Context" fill className="object-cover" />
                               ) : (
                                 <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl"></div>
                               )}
                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                             </div>
                             <div className="w-full md:w-2/5 flex flex-col gap-6 relative z-10">
                                <h4 className="font-mono text-sm md:text-base tracking-[0.4em] uppercase drop-shadow-[0_0_15px_rgba(0,0,0,1)]" style={{ color: selectedSponsor.brandColor }}>{slide.title}</h4>
                                <h2 className="font-trona text-4xl md:text-6xl leading-[0.9] text-white tracking-tight drop-shadow-[0_4px_40px_rgba(0,0,0,1)]">
                                  {slide.subtitle}
                                </h2>
                                {slide.text && <p className="font-mono text-[#888] text-xs tracking-[0.2em] leading-relaxed border-l border-white/20 pl-6 mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">{slide.text}</p>}
                             </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
