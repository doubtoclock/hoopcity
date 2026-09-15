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
      {/* Title slides in */}
      <div className="overflow-hidden">
        <span className={`block font-ribes text-[#cccccc] text-2xl md:text-3xl tracking-[0.15em] uppercase transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
          <span className="text-[#FF6100]">{title.charAt(0)}</span>{title.slice(1)}
        </span>
      </div>
    </div>
  );
}
