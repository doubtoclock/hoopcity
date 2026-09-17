"use client";

import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';

type Category = 'ALL' | 'PLAYERS' | 'ARTISTS' | 'CREATORS';

const people = [
  { id: 1, name: 'Aarav Rao', type: 'PLAYER', role: 'PLAYER', category: 'PLAYERS' },
  { id: 2, name: 'Kabir Shah', type: 'PLAYER', role: 'PLAYER', category: 'PLAYERS' },
  { id: 3, name: 'Rohan Patil', type: 'PLAYER', role: 'PLAYER', category: 'PLAYERS' },
  { id: 4, name: 'Zaid Khan', type: 'PLAYER', role: 'PLAYER', category: 'PLAYERS' },
  { id: 5, name: 'Mira', type: 'ARTIST', role: 'DJ / ARTIST', category: 'ARTISTS' },
  { id: 6, name: 'Kartik', type: 'ARTIST', role: 'RAPPER / ARTIST', category: 'ARTISTS' },
  { id: 7, name: 'Naina', type: 'CREATOR', role: 'PHOTOGRAPHER', category: 'CREATORS' },
  { id: 8, name: 'Arjun', type: 'CREATOR', role: 'BASKETBALL CREATOR', category: 'CREATORS' },
];

export default function TheUniverse() {
  const [activeFilter, setActiveFilter] = useState<Category>('ALL');

  const filteredPeople = activeFilter === 'ALL' 
    ? people 
    : people.filter(p => p.category === activeFilter);

  return (
    <section id="people" className="relative w-full bg-transparent py-24 px-6 md:px-16 overflow-hidden border-t border-transparent">
      {/* Background glow or orbital paths */}
      <div className="absolute top-0 right-0 w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] border border-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[100vw] md:w-[60vw] h-[100vw] md:h-[60vw] border border-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto w-full relative z-10 flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <SectionHeading number="03" title="THE PEOPLE" />
          
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 md:gap-12">
            <h2 className="font-trona text-white text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] leading-none tracking-tight">
              THE UNIVERSE.
            </h2>
            
            <p className="font-trona text-[#a0a0a0] text-lg md:text-xl max-w-md pb-4 md:pb-6 leading-relaxed">
              Every player, artist and creator becomes part of a living HOOP CITY archive.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-8">
          {(['ALL', 'PLAYERS', 'ARTISTS', 'CREATORS'] as Category[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'border-white text-white bg-white/5' 
                  : 'border-white/10 text-[#888] hover:border-white/30 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8">
          {filteredPeople.map((person) => (
            <div 
              key={person.id}
              className="relative aspect-square md:aspect-[4/3] bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between p-6 md:p-8 group hover:border-[#FF6100]/40 transition-all duration-500 cursor-pointer shadow-lg"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6100]/0 to-[#F40B9B]/0 group-hover:from-[#FF6100]/[0.02] group-hover:to-[#F40B9B]/[0.05] transition-all duration-700 pointer-events-none z-0"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#F40B9B] to-[#FF6100] opacity-[0.03] blur-[50px] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none z-0"></div>

              {/* Type Top */}
              <span className="font-mono text-[9px] md:text-[10px] text-[#666] group-hover:text-[#FF6100] transition-colors duration-500 tracking-[0.3em] uppercase relative z-10">
                {person.type}
              </span>

              {/* Name & Role Bottom */}
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="font-trona text-white text-3xl md:text-4xl tracking-wide">{person.name}</h3>
                <span className="font-mono text-[8px] md:text-[9px] text-[#888] tracking-[0.2em] uppercase">
                  {person.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
