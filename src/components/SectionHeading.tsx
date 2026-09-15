"use client";

import React, { useEffect, useRef, useState } from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ number, title, className = '' }: SectionHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex items-center gap-6 ${className}`}>
      {/* Number slides up */}
      <div className="overflow-hidden">
        <span className={`block font-ribes text-[#FF6100] text-3xl md:text-4xl tracking-wide transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
          {number}
        </span>
      </div>
      
      {/* Line expands out */}
      <div className={`h-[1px] bg-[#666] transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'w-16 md:w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
      
      {/* Title slides in */}
      <div className="overflow-hidden">
        <span className={`block font-ribes text-[#cccccc] text-2xl md:text-3xl tracking-[0.15em] uppercase transition-all duration-[800ms] delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
          {title}
        </span>
      </div>
    </div>
  );
}
